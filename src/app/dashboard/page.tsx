import type { Metadata } from "next";
import prisma from "@/lib/prisma";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "youJob Dashboard - Live stats and metrics",
  alternates: {
    canonical: absoluteUrl("/dashboard"),
  },
};

async function getDashboardStats() {
  try {
    // Get total jobs in database
    const totalJobs = await prisma.job.count();

    // Get active users (users who have created a profile or made an application in last 30 days)
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const activeUsers = await prisma.user.count({
      where: {
        OR: [
          { profile: { isNot: null } },
          { applications: { some: { createdAt: { gte: thirtyDaysAgo } } } },
          { searchRuns: { some: { createdAt: { gte: thirtyDaysAgo } } } },
        ],
      },
    });

    // Get paid users (users with PRO plan)
    const paidUsers = await prisma.user.count({
      where: {
        planTier: "PRO",
      },
    });

    // Get agents running (search runs with RUNNING status)
    const agentsRunning = await prisma.searchRun.count({
      where: {
        status: "RUNNING",
      },
    });

    return {
      totalJobs,
      activeUsers,
      paidUsers,
      agentsRunning,
    };
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    return {
      totalJobs: 0,
      activeUsers: 0,
      paidUsers: 0,
      agentsRunning: 0,
    };
  }
}

export default async function DashboardPage() {
  const stats = await getDashboardStats();

  return (
    <main className="page-shell py-10 md:py-14">
      <header className="mb-12 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <p className="label font-mono tracking-widest">LIVE_SIGNAL</p>
        </div>
        <h1 className="text-4xl font-bold md:text-5xl">Dashboard</h1>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Jobs Card */}
        <div className="panel rounded-xl p-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-wider text-(--color-on-surface-variant) uppercase">
              Jobs in DB
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-(--color-primary)">
                {stats.totalJobs.toLocaleString()}
              </span>
              <span className="text-sm text-(--color-on-surface-variant)">
                total
              </span>
            </div>
            <div className="h-1 w-full rounded-full bg-(--color-surface-container)"></div>
            <p className="text-xs text-(--color-on-surface-variant)">
              All job listings across all sources
            </p>
          </div>
        </div>

        {/* Active Users Card */}
        <div className="panel rounded-xl p-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-wider text-(--color-on-surface-variant) uppercase">
              Active Users
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-(--color-primary)">
                {stats.activeUsers.toLocaleString()}
              </span>
              <span className="text-sm text-(--color-on-surface-variant)">
                last 30d
              </span>
            </div>
            <div className="h-1 w-full rounded-full bg-(--color-surface-container)"></div>
            <p className="text-xs text-(--color-on-surface-variant)">
              Users with activity in the last 30 days
            </p>
          </div>
        </div>

        {/* Paid Users Card */}
        <div className="panel rounded-xl p-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-wider text-(--color-on-surface-variant) uppercase">
              Paid Users
            </p>
            <div className="flex items-baseline gap-2">
              <span className="bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text text-5xl font-bold text-transparent">
                {stats.paidUsers.toLocaleString()}
              </span>
              <span className="text-sm text-(--color-on-surface-variant)">
                PRO
              </span>
            </div>
            <div className="h-1 w-full rounded-full bg-(--color-surface-container)"></div>
            <p className="text-xs text-(--color-on-surface-variant)">
              Users on PRO plan tier
            </p>
          </div>
        </div>

        {/* Agents Running Card */}
        <div className="panel rounded-xl p-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-wider text-(--color-on-surface-variant) uppercase">
              Agents Running
            </p>
            <div className="flex items-baseline gap-2">
              <span className="relative inline-block">
                <span className="text-5xl font-bold text-green-500">
                  {stats.agentsRunning}
                </span>
                {stats.agentsRunning > 0 && (
                  <span className="absolute -top-2 -right-3 h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
                )}
              </span>
              <span className="text-sm text-(--color-on-surface-variant)">
                live
              </span>
            </div>
            <div className="h-1 w-full rounded-full bg-(--color-surface-container)"></div>
            <p className="text-xs text-(--color-on-surface-variant)">
              Search agents currently processing
            </p>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-12 rounded-xl border border-(--color-surface-variant) p-8">
        <h2 className="mb-6 text-2xl font-bold">Metrics Overview</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-wider text-(--color-on-surface-variant) uppercase">
              Total Jobs
            </p>
            <p className="text-3xl font-bold">
              {stats.totalJobs.toLocaleString()}
            </p>
            <p className="text-sm text-(--color-on-surface-variant)">
              Database entries indexed
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-wider text-(--color-on-surface-variant) uppercase">
              Engagement Rate
            </p>
            <p className="text-3xl font-bold">
              {stats.activeUsers > 0
                ? ((stats.paidUsers / stats.activeUsers) * 100).toFixed(1)
                : 0}
              %
            </p>
            <p className="text-sm text-(--color-on-surface-variant)">
              Paid users as % of active users
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
