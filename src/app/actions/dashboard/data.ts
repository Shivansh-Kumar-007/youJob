"use server";

import { redirect } from "next/navigation";
import prisma from "@/lib/third-party-clients/prisma-client";
import { getAuthenticatedUserFromCookies } from "@/lib/server/auth/auth-session";
import { ensureJobsForUserProfile } from "@/app/actions/search/pipeline";

export async function getDashboardData() {
  const authUser = await getAuthenticatedUserFromCookies();

  if (!authUser?.email) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { email: authUser.email },
    include: {
      profile: true,
    },
  });

  if (!user) {
    redirect("/login");
  }

  await ensureJobsForUserProfile(user.id);

  const latestSearchRun = await prisma.searchRun.findFirst({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    include: {
      results: {
        orderBy: { rank: "asc" },
        take: 30,
        include: {
          job: true,
        },
      },
    },
  });

  const applicationCount = await prisma.jobApplication.count({
    where: {
      userId: user.id,
    },
  });

  const savedCount = await prisma.jobApplication.count({
    where: {
      userId: user.id,
      status: "SAVED",
    },
  });

  return {
    user,
    latestSearchRun,
    applicationCount,
    savedCount,
  };
}
