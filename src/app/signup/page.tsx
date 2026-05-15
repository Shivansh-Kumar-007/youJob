import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Create Profile",
  description:
    "Create your account, upload your CV, define salary and location preferences, and prepare your first AI-guided job search.",
  alternates: {
    canonical: absoluteUrl("/signup"),
  },
};

export default function SignupPage() {
  return (
    <main className="page-shell py-10 md:py-14">
      <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <section className="space-y-6">
          <p className="label">Candidate onboarding</p>
          <h1 className="section-title">
            Build a profile the search engine can actually reason about.
          </h1>
          <p className="text-lg leading-8 text-[var(--color-on-surface-variant)]">
            We start with your CV, then layer in role intent, salary
            expectations, location strategy, and remote flexibility so the
            search flow stays disciplined.
          </p>
          <div className="panel rounded-[var(--radius-lg)] p-6">
            <h2 className="mb-4 text-xl font-semibold">What you&apos;ll set up</h2>
            <ul className="space-y-4 text-[var(--color-on-surface-variant)]">
              <li>CV upload and parsing</li>
              <li>Target title and seniority</li>
              <li>Remote-only or location preferences</li>
              <li>Salary expectations and currency</li>
              <li>Five daily applications on the free plan</li>
            </ul>
          </div>
        </section>

        <section className="panel rounded-[var(--radius-xl)] p-6 md:p-8">
          <div className="grid gap-5">
            <div>
              <label className="label mb-2 block" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                className="w-full rounded-[var(--radius)] border border-[color:rgba(64,73,68,0.2)] bg-white px-4 py-3 outline-none focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[color:rgba(43,105,84,0.1)]"
                placeholder="Avery Collins"
              />
            </div>
            <div>
              <label className="label mb-2 block" htmlFor="email">
                Work Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-[var(--radius)] border border-[color:rgba(64,73,68,0.2)] bg-white px-4 py-3 outline-none focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[color:rgba(43,105,84,0.1)]"
                placeholder="avery@domain.com"
              />
            </div>
            <div>
              <label className="label mb-2 block" htmlFor="cv">
                Upload CV
              </label>
              <div className="rounded-[var(--radius-lg)] border border-dashed border-[color:rgba(64,73,68,0.24)] bg-[var(--color-surface-container-low)] px-4 py-8 text-center text-sm text-[var(--color-on-surface-variant)]">
                PDF or DOCX upload area
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="label mb-2 block" htmlFor="salary">
                  Salary Expectation
                </label>
                <input
                  id="salary"
                  className="w-full rounded-[var(--radius)] border border-[color:rgba(64,73,68,0.2)] bg-white px-4 py-3 outline-none focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[color:rgba(43,105,84,0.1)]"
                  placeholder="$180k+"
                />
              </div>
              <div>
                <label className="label mb-2 block" htmlFor="location">
                  Preferred Location
                </label>
                <input
                  id="location"
                  className="w-full rounded-[var(--radius)] border border-[color:rgba(64,73,68,0.2)] bg-white px-4 py-3 outline-none focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[color:rgba(43,105,84,0.1)]"
                  placeholder="Remote, NYC, London"
                />
              </div>
            </div>
            <div className="flex items-center justify-between rounded-[var(--radius)] bg-[var(--color-surface-container-low)] px-4 py-3 text-sm">
              <span>Free plan includes 5 job applications per day</span>
              <span className="font-semibold text-[var(--color-primary)]">
                Free
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg">Create Profile</Button>
              <Link href="/pricing">
                <Button variant="secondary" size="lg">
                  Compare Plans
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
