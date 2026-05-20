import { z } from "zod";

export const sendOtpInputSchema = z.object({
  email: z.string().email(),
  fullName: z.string().trim().min(1).max(255).optional(),
});

export const sendOtpOutputSchema = z.object({
  success: z.literal(true),
  message: z.string(),
});

export const verifyOtpInputSchema = z.object({
  email: z.string().email(),
  token: z.string().trim().regex(/^\d{6,8}$/),
});

export const verifyOtpOutputSchema = z.object({
  success: z.literal(true),
  user: z.object({
    id: z.string(),
    email: z.string().email(),
    fullName: z.string().nullable().optional(),
  }),
  session: z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
    expiresAt: z.number().nullable().optional(),
  }),
});

export const createResumeUploadUrlInputSchema = z.object({
  fileName: z.string().trim().min(1),
  contentType: z.string().trim().min(1),
});

export const createResumeUploadUrlOutputSchema = z.object({
  success: z.literal(true),
  bucket: z.string(),
  path: z.string(),
  token: z.string(),
});

export const saveResumeInputSchema = z.object({
  resumePath: z.string().trim().min(1),
  preferredLocation: z.string().trim().min(1).optional(),
  remoteOnly: z.boolean().optional(),
});

export const saveResumeOutputSchema = z.object({
  success: z.literal(true),
  userId: z.string(),
  resumeUrl: z.string(),
});

export const parsedResumeProfileSchema = z.object({
  fullName: z.string().optional(),
  targetTitle: z.string().optional(),
  summary: z.string().optional(),
  skills: z.array(z.string()).default([]),
  preferredLocations: z.array(z.string()).default([]),
  remoteOnly: z.boolean().optional(),
  keywords: z.array(z.string()).default([]),
});

export type SendOtpInput = z.infer<typeof sendOtpInputSchema>;
export type SendOtpOutput = z.infer<typeof sendOtpOutputSchema>;
export type VerifyOtpInput = z.infer<typeof verifyOtpInputSchema>;
export type VerifyOtpOutput = z.infer<typeof verifyOtpOutputSchema>;
export type CreateResumeUploadUrlInput = z.infer<
  typeof createResumeUploadUrlInputSchema
>;
export type CreateResumeUploadUrlOutput = z.infer<
  typeof createResumeUploadUrlOutputSchema
>;
export type SaveResumeInput = z.infer<typeof saveResumeInputSchema>;
export type SaveResumeOutput = z.infer<typeof saveResumeOutputSchema>;
