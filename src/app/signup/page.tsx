import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SignupAuthForm } from "@/ui/product-components/signup-auth-form";
import { getAuthenticatedUserFromCookies } from "@/lib/server/auth/auth-session";
import { absoluteUrl } from "@/lib/utils/site";

export const metadata: Metadata = {
  title: "Create Profile",
  description:
    "Create your account, upload your CV, define location preferences, and prepare your first AI-guided job search.",
  alternates: {
    canonical: absoluteUrl("/signup"),
  },
};

export default async function SignupPage() {
  const user = await getAuthenticatedUserFromCookies();
  if (user) {
    redirect("/dashboard");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-white py-10 md:py-14">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 hidden w-1/2 bg-(--color-tertiary) md:block"
      />
      <div className="page-shell relative z-10">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
          <section className="space-y-6 lg:max-w-160">
            <p className="label inline-block rounded-full border border-black bg-black px-3 py-1 text-(--color-tertiary)">
              Candidate onboarding
            </p>
            <h1 className="text-[clamp(2.4rem,5vw,5.2rem)] leading-[0.88] font-black tracking-[-0.04em] text-black uppercase italic">
              Build a profile the search engine can actually reason about.
            </h1>
            <p className="max-w-xl rounded-md border border-black/15 bg-white/80 p-4 text-lg leading-8 text-(--color-on-surface-variant) backdrop-blur-sm">
              We start with your CV, then layer in role intent, location
              strategy, and remote flexibility so the search flow stays
              disciplined.
            </p>
            <div className="rounded-lg border-2 border-black bg-white p-6 shadow-[8px_8px_0_0_#000000]">
              <h2 className="mb-4 text-xl font-semibold">
                What you&apos;ll set up
              </h2>
              <ul className="space-y-4 text-(--color-on-surface-variant)">
                <li>CV upload and parsing</li>
                <li>Target title and seniority</li>
                <li>Remote-only or location preferences</li>
                <li>Five daily applications on the free plan</li>
              </ul>
            </div>
          </section>

          <SignupAuthForm />
        </div>
      </div>
    </main>
  );
}
