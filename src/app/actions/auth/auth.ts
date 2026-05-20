"use server";

import prisma from "@/lib/third-party-clients/prisma-client";
import {
  getAccessTokenFromCookies,
  setAuthSessionCookies,
} from "@/lib/server/auth/auth-session";
import { ingestJobsForUserProfile } from "@/app/actions/search/pipeline";
import { ingestResumeForUser } from "./resume-ingest";
import { createSupabaseAdminClient } from "@/lib/third-party-clients/supabase/admin";
import { createSupabaseServerClient } from "@/lib/third-party-clients/supabase/server";
import {
  sendOtpInputSchema,
  sendOtpOutputSchema,
  verifyOtpInputSchema,
  verifyOtpOutputSchema,
  type SendOtpInput,
  type SendOtpOutput,
  type VerifyOtpInput,
  type VerifyOtpOutput,
} from "@/app/actions/auth/auth.schema";
import {
  createResumeUploadUrlInputSchema,
  createResumeUploadUrlOutputSchema,
  saveResumeInputSchema,
  saveResumeOutputSchema,
  type CreateResumeUploadUrlInput,
  type CreateResumeUploadUrlOutput,
  type SaveResumeInput,
  type SaveResumeOutput,
} from "@/app/actions/auth/auth.schema";

function sanitizeFileName(fileName: string): string {
  return fileName.replace(/[^a-zA-Z0-9._-]/g, "_");
}

import { actionClient } from "@/lib/next-safe-action/client";

export const sendOtpAction = actionClient
  .schema(sendOtpInputSchema)
  .action(async ({ parsedInput: parsed }) => {
    const supabase = createSupabaseServerClient();

    const { error } = await supabase.auth.signInWithOtp({
      email: parsed.email,
      options: {
        shouldCreateUser: true,
        data: parsed.fullName ? { full_name: parsed.fullName } : undefined,
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    return {
      success: true as const,
      message: "OTP sent to email",
    };
  });

export const verifyOtpAction = actionClient
  .schema(verifyOtpInputSchema)
  .action(async ({ parsedInput: parsed }) => {
    const supabase = createSupabaseServerClient();

    const { data, error } = await supabase.auth.verifyOtp({
      email: parsed.email,
      token: parsed.token,
      type: "email",
    });

    if (error) {
      throw new Error(error.message);
    }

    if (!data.user || !data.session) {
      throw new Error("Verification succeeded but no user/session returned.");
    }

    const fullName =
      typeof data.user.user_metadata?.full_name === "string"
        ? data.user.user_metadata.full_name
        : undefined;

    const appUser = await prisma.user.upsert({
      where: { email: data.user.email || parsed.email },
      update: { fullName },
      create: {
        email: data.user.email || parsed.email,
        fullName,
      },
    });

    await setAuthSessionCookies({
      accessToken: data.session.access_token,
      refreshToken: data.session.refresh_token,
      expiresAt: data.session.expires_at ?? null,
      email: data.user.email || parsed.email,
    });

    return {
      success: true as const,
      user: {
        id: appUser.id,
        email: appUser.email,
        fullName: appUser.fullName,
      },
      session: {
        accessToken: data.session.access_token,
        refreshToken: data.session.refresh_token,
        expiresAt: data.session.expires_at ?? null,
      },
    };
  });

import { authenticatedActionClient } from "@/lib/next-safe-action/client";

export const createResumeSignedUploadUrlAction = authenticatedActionClient
  .schema(createResumeUploadUrlInputSchema)
  .action(async ({ parsedInput: upload, ctx }) => {
    const userId = ctx.userId!;

    const bucket =
      process.env.SUPABASE_RESUME_BUCKET ||
      process.env.NEXT_PUBLIC_SUPABASE_RESUME_BUCKET ||
      "resumes";

    const ext = upload.fileName.includes(".")
      ? upload.fileName.split(".").pop()
      : "pdf";
    const path = `users/${userId}/resume-${Date.now()}.${sanitizeFileName(
      ext || "pdf"
    )}`;

    const admin = createSupabaseAdminClient();
    const { data, error } = await admin.storage
      .from(bucket)
      .createSignedUploadUrl(path);

    if (error || !data) {
      throw new Error(error?.message || "Failed to create signed upload URL");
    }

    return {
      success: true as const,
      bucket,
      path: data.path,
      token: data.token,
    };
  });

export const saveResumeAction = authenticatedActionClient
  .schema(saveResumeInputSchema)
  .action(async ({ parsedInput: resume, ctx }) => {
    const userId = ctx.userId!;
    const userEmail = ctx.userEmail!;

    await prisma.userProfile.upsert({
      where: { userId },
      update: {
        resumeUrl: resume.resumePath,
        preferredLocations: resume.preferredLocation
          ? [resume.preferredLocation]
          : [],
        remoteOnly: resume.remoteOnly ?? false,
      },
      create: {
        userId,
        resumeUrl: resume.resumePath,
        preferredLocations: resume.preferredLocation
          ? [resume.preferredLocation]
          : [],
        remoteOnly: resume.remoteOnly ?? false,
      },
    });

    const bucket =
      process.env.SUPABASE_RESUME_BUCKET ||
      process.env.NEXT_PUBLIC_SUPABASE_RESUME_BUCKET ||
      "resumes";
    await ingestResumeForUser({
      userId,
      resumePath: resume.resumePath,
      bucket,
    });

    await ingestJobsForUserProfile(userId);

    return {
      success: true,
      userId,
      resumeUrl: resume.resumePath,
    };
  });
