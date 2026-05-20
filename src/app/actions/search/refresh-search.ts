"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/third-party-clients/prisma-client";
import { getAuthenticatedUserFromCookies } from "@/lib/server/auth/auth-session";
import { ingestJobsForUserProfile } from "./pipeline";

export async function refreshSearchAction() {
  const authUser = await getAuthenticatedUserFromCookies();
  if (!authUser?.email) throw new Error("Unauthorized");

  const user = await prisma.user.findUnique({ where: { email: authUser.email } });
  if (!user) throw new Error("User not found");

  const result = await ingestJobsForUserProfile(user.id);
  revalidatePath("/dashboard");
  revalidatePath("/jobs");
  return result;
}
