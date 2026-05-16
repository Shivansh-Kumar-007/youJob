"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  createResumeSignedUploadUrlAction,
  saveResumeAction,
  sendOtpAction,
  verifyOtpAction,
} from "@/app/actions/auth/auth";
import { supabase } from "@/lib/supabase";

type Step = "profile" | "otp";

export function SignupAuthForm() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("profile");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [salaryExpectation, setSalaryExpectation] = useState("");
  const [preferredLocation, setPreferredLocation] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [resendCooldown, setResendCooldown] = useState(0);

  useEffect(() => {
    if (resendCooldown <= 0) return;

    const timer = setTimeout(() => {
      setResendCooldown((value) => Math.max(0, value - 1));
    }, 1000);

    return () => clearTimeout(timer);
  }, [resendCooldown]);

  function onCvSelected(file: File | null) {
    if (!file) {
      setCvFile(null);
      return;
    }

    const allowedMimeTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const allowedExtensions = [".pdf", ".doc", ".docx"];
    const hasValidExtension = allowedExtensions.some((extension) =>
      file.name.toLowerCase().endsWith(extension)
    );
    const hasValidType = allowedMimeTypes.includes(file.type);

    if (!hasValidType && !hasValidExtension) {
      setError("CV must be a PDF, DOC, or DOCX file.");
      return;
    }

    const maxBytes = 5 * 1024 * 1024;
    if (file.size > maxBytes) {
      setError("CV must be 5MB or smaller.");
      return;
    }

    setError(null);
    setCvFile(file);
  }

  async function sendOtp() {
    setError(null);
    setMessage(null);
    setIsSendingOtp(true);

    try {
      await sendOtpAction({ email, fullName });

      setMessage("OTP sent. Check your email inbox.");
      setStep("otp");
      setResendCooldown(30);
    } catch (unknownError) {
      setError(
        unknownError instanceof Error
          ? unknownError.message
          : "Failed to send OTP"
      );
    } finally {
      setIsSendingOtp(false);
    }
  }

  async function verifyOtp() {
    setError(null);
    setMessage(null);
    setIsVerifyingOtp(true);

    try {
      const payload = await verifyOtpAction({ email, token: otp });

      const { accessToken, refreshToken } = payload.session;
      const { error: sessionError } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });

      if (sessionError) {
        throw new Error(sessionError.message);
      }

      if (cvFile) {
        try {
          const signedUrlPayload = await createResumeSignedUploadUrlAction({
            upload: {
              fileName: cvFile.name,
              contentType: cvFile.type || "application/pdf",
            },
          });

          const { bucket, path, token } = signedUrlPayload;
          const { error: uploadError } = await supabase.storage
            .from(bucket)
            .uploadToSignedUrl(path, token, cvFile);

          if (uploadError) {
            throw new Error(uploadError.message);
          }

          await saveResumeAction({
            resume: {
              resumePath: path,
            },
          });
        } catch (resumeError) {
          console.error("Resume upload/ingest failed:", resumeError);
        }
      }

      setMessage("Signup complete. Redirecting...");
      router.push("/dashboard");
      router.refresh();
    } catch (unknownError) {
      const message =
        unknownError instanceof Error
          ? unknownError.message
          : "Failed to verify OTP";
      setError(message);

      if (message.toLowerCase().includes("expired")) {
        setResendCooldown(0);
      }
    } finally {
      setIsVerifyingOtp(false);
    }
  }

  return (
    <section className="rounded-[var(--radius-xl)] border-2 border-black bg-white p-6 shadow-[10px_10px_0_0_#000000] md:p-8">
      <div className="grid gap-5">
        <div>
          <label className="label mb-2 block" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            className="w-full rounded-[var(--radius)] border border-black/25 bg-white px-4 py-3 outline-none focus:border-black focus:ring-4 focus:ring-[color:rgba(250,204,21,0.25)]"
            placeholder="Avery Collins"
            disabled={step === "otp"}
          />
        </div>

        <div>
          <label className="label mb-2 block" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-[var(--radius)] border border-black/25 bg-white px-4 py-3 outline-none focus:border-black focus:ring-4 focus:ring-[color:rgba(250,204,21,0.25)]"
            placeholder="avery@domain.com"
            disabled={step === "otp"}
          />
        </div>

        {step === "otp" ? (
          <div>
            <label className="label mb-2 block" htmlFor="otp">
              OTP Code
            </label>
            <input
              id="otp"
              inputMode="numeric"
              maxLength={8}
              value={otp}
              onChange={(event) =>
                setOtp(event.target.value.replace(/\D/g, "").slice(0, 8))
              }
              className="w-full rounded-[var(--radius)] border border-black/25 bg-white px-4 py-3 tracking-[0.35em] outline-none focus:border-black focus:ring-4 focus:ring-[color:rgba(250,204,21,0.25)]"
              placeholder="123456"
            />
            <p className="mt-2 text-xs text-[var(--color-on-surface-variant)]">
              Enter the 6 to 8 digit code sent to {email}.
            </p>
            <div className="mt-3">
              <button
                type="button"
                onClick={sendOtp}
                disabled={isSendingOtp || resendCooldown > 0}
                className="text-sm font-semibold underline disabled:cursor-not-allowed disabled:opacity-50"
              >
                {resendCooldown > 0
                  ? `Resend OTP in ${resendCooldown}s`
                  : isSendingOtp
                    ? "Resending..."
                    : "Resend OTP"}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <label className="label mb-2 block" htmlFor="cv">
              Upload CV
            </label>
            <div className="rounded-[var(--radius-lg)] border border-dashed border-black/25 bg-white/70 px-4 py-6 text-center">
              <input
                id="cv"
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="hidden"
                onChange={(event) =>
                  onCvSelected(event.target.files?.[0] ?? null)
                }
              />
              <label
                htmlFor="cv"
                className="inline-flex cursor-pointer items-center justify-center rounded-[var(--radius)] border border-black/30 bg-[var(--color-tertiary)] px-4 py-2 text-sm font-bold text-black hover:bg-[#f6be00]"
              >
                {cvFile ? "Replace CV" : "Choose CV"}
              </label>
              <p className="mt-3 text-sm text-[var(--color-on-surface-variant)]">
                {cvFile
                  ? `${cvFile.name} (${Math.ceil(cvFile.size / 1024)} KB)`
                  : "PDF up to 5MB"}
              </p>
              {cvFile ? (
                <button
                  type="button"
                  className="mt-2 text-xs font-semibold underline"
                  onClick={() => setCvFile(null)}
                >
                  Remove file
                </button>
              ) : null}
              <p className="mt-2 text-xs text-[var(--color-on-surface-variant)]">
                CV parsing and profile extraction continue after email
                verification.
              </p>
            </div>
          </div>
        )}

        {step === "profile" ? (
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="label mb-2 block" htmlFor="salary">
                Salary Expectation
              </label>
              <input
                id="salary"
                value={salaryExpectation}
                onChange={(event) => setSalaryExpectation(event.target.value)}
                className="w-full rounded-[var(--radius)] border border-black/25 bg-white px-4 py-3 outline-none focus:border-black focus:ring-4 focus:ring-[color:rgba(250,204,21,0.25)]"
                placeholder="$180k+"
              />
            </div>
            <div>
              <label className="label mb-2 block" htmlFor="location">
                Preferred Location
              </label>
              <input
                id="location"
                value={preferredLocation}
                onChange={(event) => setPreferredLocation(event.target.value)}
                className="w-full rounded-[var(--radius)] border border-black/25 bg-white px-4 py-3 outline-none focus:border-black focus:ring-4 focus:ring-[color:rgba(250,204,21,0.25)]"
                placeholder="Remote, NYC, London"
              />
            </div>
          </div>
        ) : null}

        {message ? (
          <p className="rounded-[var(--radius)] border border-black/20 bg-[#fff6c7] px-4 py-3 text-sm">
            {message}
          </p>
        ) : null}

        {error ? (
          <p className="rounded-[var(--radius)] border border-[var(--color-error)] bg-[var(--color-error-container)] px-4 py-3 text-sm text-[var(--color-on-error-container)]">
            {error}
          </p>
        ) : null}

        <div className="flex flex-wrap gap-3">
          {step === "profile" ? (
            <Button
              size="lg"
              onClick={sendOtp}
              disabled={!email || isSendingOtp}
              type="button"
              className="border-2 border-black bg-black text-[var(--color-tertiary)] hover:bg-[var(--color-tertiary)] hover:text-black"
            >
              {isSendingOtp ? "Sending..." : "Send OTP"}
            </Button>
          ) : (
            <>
              <Button
                size="lg"
                onClick={verifyOtp}
                disabled={otp.length < 6 || otp.length > 8 || isVerifyingOtp}
                type="button"
                className="border-2 border-black bg-black text-[var(--color-tertiary)] hover:bg-[var(--color-tertiary)] hover:text-black"
              >
                {isVerifyingOtp ? "Verifying..." : "Verify & Create Account"}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setStep("profile")}
                type="button"
                disabled={isVerifyingOtp}
              >
                Edit Email
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
