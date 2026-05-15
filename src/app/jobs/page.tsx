import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { mockJobs } from "@/lib/mock-jobs";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ranked Jobs",
  description:
    "Browse AI-ranked job matches, review salary and location filters, and open source application pages with confidence.",
  alternates: {
    canonical: absoluteUrl("/jobs"),
  },
};

export default function JobsPage() {
  return (
    <main className="page-shell py-10 md:py-14">
      <header className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="label">Ranked opportunities</p>
          <h1 className="section-title">Personalized matches for your profile</h1>
          <p className="max-w-2xl text-[var(--color-on-surface-variant)]">
            Your first search runs live. After that, the catalog improves with
            every validated role and every completed application.
          </p>
        </div>
        <div className="flex gap-3">
          <Button>Run Fresh Search</Button>
          <Button variant="secondary">Upload Updated CV</Button>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="panel h-fit rounded-[var(--radius-xl)] p-6">
          <h2 className="mb-5 text-xl font-semibold">Filters</h2>
          <div className="space-y-5">
            {[
              ["Target title", "Director, Head, VP"],
              ["Location", "Remote, NYC, London"],
              ["Salary floor", "$180k"],
              ["Work mode", "Remote only"],
            ].map(([label, placeholder]) => (
              <div key={label}>
                <label className="label mb-2 block">{label}</label>
                <input
                  className="w-full rounded-[var(--radius)] border border-[color:rgba(64,73,68,0.2)] bg-white px-4 py-3 outline-none focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[color:rgba(43,105,84,0.1)]"
                  placeholder={placeholder}
                />
              </div>
            ))}
          </div>
        </aside>

        <section className="space-y-4">
          {mockJobs.map((job, index) => (
            <article
              key={job.slug}
              className="panel rounded-[var(--radius-xl)] px-6 py-6 transition duration-200 hover:scale-[1.01]"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[var(--color-primary-fixed)] px-3 py-1 text-xs font-semibold text-[var(--color-on-primary-fixed)]">
                      Match #{index + 1}
                    </span>
                    {job.premium ? (
                      <span className="rounded-full bg-[var(--color-tertiary-fixed-dim)] px-3 py-1 text-xs font-semibold text-[var(--color-on-tertiary-fixed)]">
                        Premium
                      </span>
                    ) : null}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-[-0.02em]">
                      <Link href={`/jobs/${job.slug}`}>{job.title}</Link>
                    </h2>
                    <p className="mt-1 text-sm text-[var(--color-on-surface-variant)]">
                      {job.company} · {job.location} · {job.salary}
                    </p>
                  </div>
                  <p className="max-w-3xl text-[var(--color-on-surface-variant)]">
                    {job.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[var(--color-surface-container)] px-3 py-1 text-xs font-medium text-[var(--color-on-surface-variant)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex min-w-[180px] flex-col gap-3">
                  <Link href={`/jobs/${job.slug}`}>
                    <Button className="w-full">Review Role</Button>
                  </Link>
                  <Button variant="secondary" className="w-full">
                    Open Source Page
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
