import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/utils/site";
import { getJobsPageData } from "@/app/actions/jobs/data";
import { SearchRefreshControl } from "@/ui/product-components/search-refresh-control";
import { DashboardEffects } from "@/ui/product-components/dashboard-effects";
import { Navigation } from "@/ui/product-components/navigation";

export const metadata: Metadata = {
  title: "Ranked Jobs",
  description:
    "Browse the latest jobs saved from your resume-driven search runs.",
  alternates: {
    canonical: absoluteUrl("/jobs"),
  },
};

export default async function JobsPage({
  searchParams,
}: {
  searchParams?: Promise<{ celebrate?: string }>;
}) {
  const { user, latestSearchRun } = await getJobsPageData();
  const resolvedSearchParams = (await searchParams) || {};
  const jobs = latestSearchRun?.results || [];
  const profile = user.profile;

  return (
    <>
      <Navigation />
      <main className="bg-page-gradient min-h-screen py-8 md:py-12">
        <DashboardEffects
          celebrateSearch={resolvedSearchParams.celebrate === "search"}
        />
        <div className="page-shell space-y-8">
          <section className="rounded-4xl border-[3px] border-black bg-white px-6 py-8 shadow-[16px_16px_0_0_#000000] md:px-10 md:py-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <p className="text-xs font-black tracking-[0.24em] text-black/45 uppercase">
                  Full Jobs View
                </p>
                <h1 className="text-[clamp(2.8rem,7vw,5.2rem)] leading-[0.9] font-[1000] tracking-[-0.06em] text-black uppercase italic">
                  {jobs.length} Live Matches
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-black/65">
                  {profile?.targetTitle
                    ? `Latest saved roles for ${profile.targetTitle}.`
                    : "Latest saved roles from your resume-driven search runs."}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <SearchRefreshControl className="border-2 border-black bg-[#facc15] text-black hover:bg-black hover:text-[#facc15]" />
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center border-2 border-black bg-black px-5 py-3 text-sm font-black tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#facc15] hover:text-black"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[280px_1fr]">
            <aside className="rounded-4xl border-2 border-black bg-[#fff4d7] p-6 shadow-[10px_10px_0_0_#000000]">
              <p className="text-xs font-black tracking-[0.22em] text-black/50 uppercase">
                Search Context
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-xs font-bold tracking-[0.16em] text-black/45 uppercase">
                    Target Title
                  </p>
                  <p className="mt-1 text-xl font-[1000] tracking-tight text-black">
                    {profile?.targetTitle || "Not parsed yet"}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.16em] text-black/45 uppercase">
                    Work Mode
                  </p>
                  <p className="mt-1 text-sm leading-7 text-black/70">
                    {profile?.remoteOnly
                      ? "Remote only"
                      : "Mixed / location-based"}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.16em] text-black/45 uppercase">
                    Latest Run
                  </p>
                  <p className="mt-1 text-sm leading-7 text-black/70">
                    {latestSearchRun?.status || "Idle"}
                  </p>
                  {latestSearchRun?.errorMessage ? (
                    <p className="mt-2 text-sm leading-7 text-(--color-error)">
                      {latestSearchRun.errorMessage}
                    </p>
                  ) : null}
                </div>
              </div>
            </aside>

            <section className="rounded-4xl border-2 border-black bg-white p-6 shadow-[14px_14px_0_0_#000000] md:p-8">
              {jobs.length === 0 ? (
                <div className="rounded-3xl border-2 border-dashed border-[#d9c88f] bg-[#fff7db] px-6 py-10 text-center">
                  <p className="text-lg font-semibold text-black">
                    No jobs yet.
                  </p>
                  <p className="mt-2 text-sm leading-7 text-black/60">
                    Run a fresh search to pull in jobs from your saved profile.
                  </p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {jobs.map(({ job, rank, reason }) => (
                    <article
                      key={job.id}
                      className="bg-card-warm rounded-3xl border-2 border-black p-5"
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border-2 border-black bg-[#facc15] px-3 text-sm font-black text-black">
                              #{rank}
                            </span>
                            <h2 className="text-2xl font-[1000] tracking-[-0.04em] text-black">
                              {job.title}
                            </h2>
                          </div>
                          <p className="text-sm font-bold tracking-[0.08em] text-black/58 uppercase">
                            {job.company}
                            {job.location ? ` · ${job.location}` : ""}
                            {job.locationType ? ` · ${job.locationType}` : ""}
                          </p>
                          <p className="max-w-3xl text-sm leading-7 text-black/70">
                            {job.description.slice(0, 320)}
                            {job.description.length > 320 ? "..." : ""}
                          </p>
                          <p className="text-xs leading-6 text-black/45">
                            {reason ||
                              "Imported from your resume-driven search run."}
                          </p>
                        </div>
                        <a
                          href={job.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center border-2 border-black bg-black px-4 py-3 text-xs font-black tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#facc15] hover:text-black"
                        >
                          Open Source
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
