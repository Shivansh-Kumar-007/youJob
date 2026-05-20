import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/ui/shared-components/button";
import { SignupAuthForm } from "@/ui/product-components/signup-auth-form";
import { Navigation } from "@/ui/product-components/navigation";
import { getAuthenticatedUserFromCookies } from "@/lib/server/auth/auth-session";
import { absoluteUrl } from "@/lib/utils/site";

export const metadata: Metadata = {
  title: "Log In",
  description: "Log in to youJob with a one-time email code.",
  alternates: {
    canonical: absoluteUrl("/login"),
  },
};

export default async function LoginPage() {
  const user = await getAuthenticatedUserFromCookies();
  if (user) {
    redirect("/dashboard");
  }

  return (
    <>
      <Navigation />
      <main className="relative min-h-screen overflow-hidden bg-white py-10 md:py-14">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 hidden w-1/2 bg-black md:block"
        />
        <div className="page-shell relative z-10">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
            <section className="space-y-6 lg:max-w-160">
              <p className="label inline-block rounded-full border border-[#facc15] bg-[#facc15] px-3 py-1 text-black">
                Returning user
              </p>
              <h1 className="text-[clamp(2.4rem,5vw,5.2rem)] leading-[0.88] font-black tracking-[-0.04em] text-white uppercase italic md:text-white">
                Jump back into your live job board.
              </h1>
              <p className="max-w-xl rounded-md border border-white/20 bg-white/10 p-4 text-lg leading-8 text-white/82 backdrop-blur-sm">
                Use your email, verify the one-time code, and we&apos;ll load
                your saved profile and latest search results.
              </p>
              <div className="rounded-lg border-2 border-white/20 bg-white/8 p-6 shadow-[8px_8px_0_0_#facc15]">
                <h2 className="mb-4 text-xl font-semibold text-white">
                  What happens after login
                </h2>
                <ul className="space-y-4 text-white/80">
                  <li>Your saved resume profile is loaded</li>
                  <li>Your latest job search board is restored</li>
                  <li>Missing search runs can be backfilled automatically</li>
                </ul>
              </div>
            </section>

            <SignupAuthForm mode="login" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3 lg:mt-10">
            <Link href="/signup">
              <Button
                variant="secondary"
                size="lg"
                className="border-2 border-black bg-white"
              >
                New here? Create profile
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
