"use server";

import prisma from "@/lib/prisma";
import {
  getAccessTokenFromCookies,
  setAuthSessionCookies,
} from "@/lib/auth-session";
import { ingestResumeForUser } from "@/lib/resume-ingest";
import { createSupabaseAdminClient } from "@/lib/supabase-admin";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import {
  sendOtpInputSchema,
  sendOtpOutputSchema,
  verifyOtpInputSchema,
  verifyOtpOutputSchema,
  type SendOtpInput,
  type SendOtpOutput,
  type VerifyOtpInput,
  type VerifyOtpOutput,
} from "@/app/actions/auth/auth.schema";
import {
  createResumeUploadUrlInputSchema,
  createResumeUploadUrlOutputSchema,
  saveResumeInputSchema,
  saveResumeOutputSchema,
  type CreateResumeUploadUrlInput,
  type CreateResumeUploadUrlOutput,
  type SaveResumeInput,
  type SaveResumeOutput,
} from "@/app/actions/auth/auth.schema";

function sanitizeFileName(fileName: string): string {
  return fileName.replace(/[^a-zA-Z0-9._-]/g, "_");
}

export async function sendOtpAction(input: SendOtpInput): Promise<SendOtpOutput> {
  const parsed = sendOtpInputSchema.parse(input);
  const supabase = createSupabaseServerClient();

  const { error } = await supabase.auth.signInWithOtp({
    email: parsed.email,
    options: {
      shouldCreateUser: true,
      data: parsed.fullName ? { full_name: parsed.fullName } : undefined,
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return sendOtpOutputSchema.parse({
    success: true,
    message: "OTP sent to email",
  });
}

export async function verifyOtpAction(
  input: VerifyOtpInput,
): Promise<VerifyOtpOutput> {
  const parsed = verifyOtpInputSchema.parse(input);
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase.auth.verifyOtp({
    email: parsed.email,
    token: parsed.token,
    type: "email",
  });

  if (error) {
    throw new Error(error.message);
  }

  if (!data.user || !data.session) {
    throw new Error("Verification succeeded but no user/session returned.");
  }

  const fullName =
    typeof data.user.user_metadata?.full_name === "string"
      ? data.user.user_metadata.full_name
      : undefined;

  const appUser = await prisma.user.upsert({
    where: { email: data.user.email || parsed.email },
    update: { fullName },
    create: {
      email: data.user.email || parsed.email,
      fullName,
    },
  });

  await setAuthSessionCookies({
    accessToken: data.session.access_token,
    refreshToken: data.session.refresh_token,
    expiresAt: data.session.expires_at ?? null,
  });

  return verifyOtpOutputSchema.parse({
    success: true,
    user: {
      id: appUser.id,
      email: appUser.email,
      fullName: appUser.fullName,
    },
    session: {
      accessToken: data.session.access_token,
      refreshToken: data.session.refresh_token,
      expiresAt: data.session.expires_at ?? null,
    },
  });
}

export async function createResumeSignedUploadUrlAction(input: {
  accessToken?: string;
  upload: CreateResumeUploadUrlInput;
}): Promise<CreateResumeUploadUrlOutput> {
  const accessToken =
    input.accessToken?.trim() || (await getAccessTokenFromCookies());
  if (!accessToken) {
    throw new Error("Missing access token");
  }

  const upload = createResumeUploadUrlInputSchema.parse(input.upload);
  const supabase = createSupabaseServerClient();
  const { data: authData, error: authError } = await supabase.auth.getUser(
    accessToken,
  );

  if (authError || !authData.user) {
    throw new Error("Unauthorized");
  }

  const bucket =
    process.env.SUPABASE_RESUME_BUCKET ||
    process.env.NEXT_PUBLIC_SUPABASE_RESUME_BUCKET ||
    "resumes";

  const ext = upload.fileName.includes(".")
    ? upload.fileName.split(".").pop()
    : "pdf";
  const path = `users/${authData.user.id}/resume-${Date.now()}.${sanitizeFileName(
    ext || "pdf",
  )}`;

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin.storage
    .from(bucket)
    .createSignedUploadUrl(path);

  if (error || !data) {
    throw new Error(error?.message || "Failed to create signed upload URL");
  }

  return createResumeUploadUrlOutputSchema.parse({
    success: true,
    bucket,
    path: data.path,
    token: data.token,
  });
}

export async function saveResumeAction(input: {
  accessToken?: string;
  resume: SaveResumeInput;
}): Promise<SaveResumeOutput> {
  const accessToken =
    input.accessToken?.trim() || (await getAccessTokenFromCookies());
  if (!accessToken) {
    throw new Error("Missing access token");
  }

  const resume = saveResumeInputSchema.parse(input.resume);
  const supabase = createSupabaseServerClient();
  const { data: authData, error: authError } = await supabase.auth.getUser(
    accessToken,
  );

  if (authError || !authData.user?.email) {
    throw new Error("Unauthorized");
  }

  const appUser = await prisma.user.upsert({
    where: { email: authData.user.email },
    update: {
      fullName:
        typeof authData.user.user_metadata?.full_name === "string"
          ? authData.user.user_metadata.full_name
          : undefined,
    },
    create: {
      email: authData.user.email,
      fullName:
        typeof authData.user.user_metadata?.full_name === "string"
          ? authData.user.user_metadata.full_name
          : null,
    },
  });

  await prisma.userProfile.upsert({
    where: { userId: appUser.id },
    update: {
      resumeUrl: resume.resumePath,
    },
    create: {
      userId: appUser.id,
      resumeUrl: resume.resumePath,
    },
  });

  const bucket =
    process.env.SUPABASE_RESUME_BUCKET ||
    process.env.NEXT_PUBLIC_SUPABASE_RESUME_BUCKET ||
    "resumes";
  await ingestResumeForUser({
    userId: appUser.id,
    resumePath: resume.resumePath,
    bucket,
  });

  return saveResumeOutputSchema.parse({
    success: true,
    userId: appUser.id,
    resumeUrl: resume.resumePath,
  });
}
