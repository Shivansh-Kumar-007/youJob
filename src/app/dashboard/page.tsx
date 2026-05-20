import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/utils/site";
import { getDashboardData } from "@/app/actions/dashboard/data";

function formatQueryLabel(queries: string[] | undefined) {
  if (!queries || queries.length === 0) {
    return "No search queries yet";
  }
  return queries.slice(0, 3).join(" · ");
}
import { SearchRefreshControl } from "@/ui/product-components/search-refresh-control";
import { DashboardEffects } from "@/ui/product-components/dashboard-effects";
import { Navigation } from "@/ui/product-components/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your live youJob search board and recent matches.",
  alternates: {
    canonical: absoluteUrl("/dashboard"),
  },
};

export default async function DashboardPage({
  searchParams,
}: {
  searchParams?: Promise<{ celebrate?: string }>;
}) {
  const { user, latestSearchRun, applicationCount, savedCount } =
    await getDashboardData();
  const resolvedSearchParams = (await searchParams) || {};

  const jobs = latestSearchRun?.results || [];
  const profile = user.profile;
  const topSkills = (profile?.skills || []).slice(0, 6);
  const latestQueryLabel = formatQueryLabel(latestSearchRun?.querySet);
  const latestStatus = latestSearchRun?.status;
  const latestError = latestSearchRun?.errorMessage;

  return (
    <>
      <Navigation />
      <main className="bg-page-gradient min-h-screen py-8 md:py-12">
        <DashboardEffects
          celebrateLogin={
            resolvedSearchParams.celebrate === "login" ||
            resolvedSearchParams.celebrate === "signup"
          }
          celebrateSearch={resolvedSearchParams.celebrate === "search"}
        />
        <div className="page-shell space-y-8">
          <section className="overflow-hidden rounded-4xl border-[3px] border-black bg-white shadow-[16px_16px_0_0_#000000]">
            <div className="grid gap-8 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="h-4 w-4 rounded-full bg-green-500 shadow-[0_0_0_6px_rgba(34,197,94,0.14)]" />
                  <p className="text-sm font-black tracking-[0.24em] text-black uppercase">
                    Live Search Board
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-bold tracking-[0.28em] text-black/45 uppercase">
                    Logged in as {user.email}
                  </p>
                  <h1 className="max-w-4xl text-[clamp(3rem,8vw,6.5rem)] leading-[0.88] font-[1000] tracking-[-0.07em] text-black uppercase italic">
                    {profile?.targetTitle || "Your"} Job Engine
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-black/65">
                    {profile?.summary ||
                      "Your dashboard now runs job discovery from your saved resume profile and keeps the latest matches here."}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {(topSkills.length > 0
                    ? topSkills
                    : ["Resume Parsed", "Search Ready"]
                  ).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border-2 border-black bg-[#fff0a8] px-4 py-2 text-xs font-black tracking-[0.15em] text-black uppercase"
                    >
                      {skill}
                    </span>
                  ))}
                  {profile?.remoteOnly ? (
                    <span className="rounded-full border-2 border-black bg-black px-4 py-2 text-xs font-black tracking-[0.15em] text-white uppercase">
                      Remote Only
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-3xl border-2 border-black bg-[#111111] p-6 text-white">
                  <p className="text-xs font-bold tracking-[0.24em] text-white/60 uppercase">
                    Latest Search
                  </p>
                  <p className="mt-3 text-5xl font-[1000] tracking-tighter text-[#facc15]">
                    {jobs.length}
                  </p>
                  <p className="mt-2 text-sm text-white/72">
                    jobs loaded from your latest run
                  </p>
                  <p className="mt-4 text-xs leading-6 text-white/58">
                    {latestQueryLabel}
                  </p>
                  <p className="mt-2 text-xs font-bold tracking-[0.16em] text-white/50 uppercase">
                    {latestStatus || "Idle"}
                  </p>
                </div>

                <div className="rounded-3xl border-2 border-black bg-[#facc15] p-6">
                  <p className="text-xs font-bold tracking-[0.24em] text-black/55 uppercase">
                    Tracker
                  </p>
                  <div className="mt-4 flex items-end gap-8">
                    <div>
                      <p className="text-4xl font-[1000] tracking-tighter text-black">
                        {savedCount}
                      </p>
                      <p className="text-xs font-bold tracking-[0.16em] text-black/55 uppercase">
                        Saved
                      </p>
                    </div>
                    <div>
                      <p className="text-4xl font-[1000] tracking-tighter text-black">
                        {applicationCount}
                      </p>
                      <p className="text-xs font-bold tracking-[0.16em] text-black/55 uppercase">
                        Actions
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-black/70">
                    Each new resume search can now populate up to 30 results
                    across three query passes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[320px_1fr]">
            <aside className="space-y-6">
              <div className="rounded-4xl border-2 border-black bg-white p-6 shadow-[10px_10px_0_0_#000000]">
                <p className="text-xs font-black tracking-[0.22em] text-black/50 uppercase">
                  Search Profile
                </p>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-xs font-bold tracking-[0.18em] text-black/40 uppercase">
                      Target
                    </p>
                    <p className="mt-1 text-xl font-[1000] tracking-tight text-black">
                      {profile?.targetTitle || "Not parsed yet"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.18em] text-black/40 uppercase">
                      Location Strategy
                    </p>
                    <p className="mt-1 text-sm leading-7 text-black/68">
                      {profile?.remoteOnly
                        ? "Remote only"
                        : profile?.preferredLocations?.join(", ") ||
                          "No location preference saved"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.18em] text-black/40 uppercase">
                      Resume Status
                    </p>
                    <p className="mt-1 text-sm leading-7 text-black/68">
                      {profile?.resumeParsedAt
                        ? `Parsed ${new Date(profile.resumeParsedAt).toLocaleDateString()}`
                        : profile?.resumeText
                          ? "Parsed from uploaded resume"
                          : "Resume not parsed yet"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-4xl border-2 border-black bg-[#fff4d7] p-6 shadow-[10px_10px_0_0_#000000]">
                <p className="text-xs font-black tracking-[0.22em] text-black/50 uppercase">
                  Query Set
                </p>
                <ol className="mt-4 space-y-3">
                  {(latestSearchRun?.querySet || [])
                    .slice(0, 3)
                    .map((query, index) => (
                      <li
                        key={query}
                        className="rounded-2xl border border-black/15 bg-white px-4 py-3 text-sm leading-6 text-black"
                      >
                        <span className="mr-2 font-black text-black/45">
                          {index + 1}.
                        </span>
                        {query}
                      </li>
                    ))}
                  {(!latestSearchRun?.querySet ||
                    latestSearchRun.querySet.length === 0) && (
                    <li className="rounded-2xl border border-dashed border-black/20 px-4 py-3 text-sm text-black/55">
                      Search queries will appear here after your first completed
                      run.
                    </li>
                  )}
                </ol>
              </div>
            </aside>

            <section className="rounded-4xl border-2 border-black bg-white p-6 shadow-[14px_14px_0_0_#000000] md:p-8">
              <div className="mb-6 flex flex-col gap-3 border-b-2 border-black pb-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-black tracking-[0.22em] text-black/45 uppercase">
                    Latest Matches
                  </p>
                  <h2 className="mt-2 text-3xl font-[1000] tracking-[-0.04em] text-black uppercase italic">
                    {jobs.length > 0
                      ? `${jobs.length} jobs on your board`
                      : "No jobs yet"}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  <SearchRefreshControl
                    variant="secondary"
                    className="border-2 border-black bg-[#facc15] text-black hover:bg-black hover:text-[#facc15]"
                  />
                  <Link
                    href="/jobs"
                    className="inline-flex items-center justify-center border-2 border-black bg-black px-5 py-3 text-sm font-black tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#facc15] hover:text-black"
                  >
                    Full Jobs View
                  </Link>
                </div>
              </div>

              {jobs.length === 0 ? (
                <div className="rounded-3xl border-2 border-dashed border-[#d9c88f] bg-[#fff7db] px-6 py-10 text-center">
                  <p className="text-lg font-semibold text-black">
                    {latestStatus === "FAILED"
                      ? "Your last search run failed."
                      : "No jobs have landed yet."}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-black/60">
                    {latestError ||
                      "This account needs a parsed resume and a successful search run before the board can populate."}
                  </p>
                  <div className="mt-6 flex justify-center">
                    <SearchRefreshControl className="border-2 border-black bg-black text-[#facc15] hover:bg-[#facc15] hover:text-black" />
                  </div>
                </div>
              ) : (
                <div className="grid gap-4">
                  {jobs.map(({ job, rank, reason }) => (
                    <article
                      key={job.id}
                      className="group bg-card-warm rounded-3xl border-2 border-black p-5 transition-transform hover:-translate-y-0.5"
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border-2 border-black bg-[#facc15] px-3 text-sm font-black text-black">
                              #{rank}
                            </span>
                            <h3 className="text-2xl font-[1000] tracking-[-0.04em] text-black">
                              {job.title}
                            </h3>
                          </div>
                          <p className="text-sm font-bold tracking-[0.08em] text-black/58 uppercase">
                            {job.company}
                            {job.location ? ` · ${job.location}` : ""}
                            {job.locationType ? ` · ${job.locationType}` : ""}
                          </p>
                          <p className="max-w-3xl text-sm leading-7 text-black/70">
                            {job.description.slice(0, 280)}
                            {job.description.length > 280 ? "..." : ""}
                          </p>
                          <p className="text-xs leading-6 text-black/45">
                            {reason ||
                              "Imported from your resume-driven search run."}
                          </p>
                        </div>

                        <div className="flex shrink-0 flex-col gap-3">
                          <a
                            href={job.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center border-2 border-black bg-black px-4 py-3 text-xs font-black tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#d8ff76] hover:text-black"
                          >
                            Open Source
                          </a>
                          <div className="rounded-2xl border border-black/12 bg-[#f5f5f5] px-4 py-3 text-xs leading-6 text-black/55">
                            {job.sourceDomain || job.source}
                          </div>
                        </div>
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
