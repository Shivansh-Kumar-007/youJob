import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Ranked Jobs",
  description:
    "Browse AI-ranked job matches, review salary and location filters, and open source application pages with confidence.",
  alternates: {
    canonical: absoluteUrl("/jobs"),
  },
};

// Mock stats data - replace with real Prisma queries when DB is configured
const mockStats = {
  totalJobs: 12543,
  activeUsers: 1847,
  paidUsers: 342,
  agentsRunning: 23,
};

export default function JobsPage() {
  return (
    <main className="page-shell py-10 md:py-14">
      {/* Live Signal Stats Header */}
      <header className="mb-12">
        <div className="mb-6 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <p className="label font-mono tracking-widest">LIVE_SIGNAL</p>
        </div>
        <div className="mb-8 h-1 w-full bg-(--color-surface-variant)"></div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Jobs in DB */}
          <div className="panel rounded-xl p-6">
            <p className="text-sm font-semibold tracking-wider text-(--color-on-surface-variant) uppercase">
              Jobs in DB
            </p>
            <p className="mt-3 text-4xl font-bold text-(--color-primary)">
              {mockStats.totalJobs.toLocaleString()}
            </p>
            <p className="mt-1 text-xs text-(--color-on-surface-variant)">
              Total indexed
            </p>
          </div>

          {/* Active Users */}
          <div className="panel rounded-xl p-6">
            <p className="text-sm font-semibold tracking-wider text-(--color-on-surface-variant) uppercase">
              Active Users
            </p>
            <p className="mt-3 text-4xl font-bold text-(--color-primary)">
              {mockStats.activeUsers.toLocaleString()}
            </p>
            <p className="mt-1 text-xs text-(--color-on-surface-variant)">
              Last 30 days
            </p>
          </div>

          {/* Paid Users */}
          <div className="panel rounded-xl p-6">
            <p className="text-sm font-semibold tracking-wider text-(--color-on-surface-variant) uppercase">
              Paid Users
            </p>
            <p className="mt-3 bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text text-4xl font-bold text-transparent">
              {mockStats.paidUsers.toLocaleString()}
            </p>
            <p className="mt-1 text-xs text-(--color-on-surface-variant)">
              PRO tier
            </p>
          </div>

          {/* Live Agents */}
          <div className="panel rounded-xl p-6">
            <p className="text-sm font-semibold tracking-wider text-(--color-on-surface-variant) uppercase">
              Agents Running
            </p>
            <div className="mt-3 flex items-center gap-2">
              <p className="text-4xl font-bold text-green-500">
                {mockStats.agentsRunning}
              </p>
              {mockStats.agentsRunning > 0 && (
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
              )}
            </div>
            <p className="mt-1 text-xs text-(--color-on-surface-variant)">
              Live processing
            </p>
          </div>
        </div>
      </header>

      {/* Section Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Ranked opportunities</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="panel h-fit rounded-xl p-6">
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
                  className="w-full rounded border border-[rgba(64,73,68,0.2)] bg-white px-4 py-3 outline-none focus:border-(--color-primary) focus:ring-4 focus:ring-[rgba(43,105,84,0.1)]"
                  placeholder={placeholder}
                />
              </div>
            ))}
          </div>
        </aside>

        <section>
          <div className="space-y-4 rounded-xl border border-(--color-surface-variant) p-8 text-center">
            <p className="text-lg font-semibold text-(--color-on-surface-variant)">
              Job listings will appear here
            </p>
            <p className="text-sm text-(--color-on-surface-variant)">
              Browse ranked jobs matching your profile
            </p>
            <div className="flex justify-center gap-3 pt-4">
              <Button>Run Fresh Search</Button>
              <Button variant="secondary">Upload Updated CV</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
