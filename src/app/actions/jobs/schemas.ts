import { z } from "zod";

export const jobSearchTypeSchema = z.enum([
  "full-time",
  "part-time",
  "freelance",
  "contract",
  "internship",
]);

export const webJobSearchInputSchema = z.object({
  jobTitles: z.array(z.string().trim().min(1)).min(1),
  jobLocation: z.string().trim().min(1).optional(),
  jobTypes: z.array(jobSearchTypeSchema).optional(),
  language: z.string().trim().min(1).optional(),
  maxResultsPerQuery: z.number().int().min(1).max(10).optional(),
  includeAnalysis: z.boolean().optional(),
});

export const webJobSearchResultSchema = z.object({
  position: z.number().int().nonnegative(),
  url: z.string().url(),
  siteName: z.string().nullable().optional(),
  title: z.string(),
  snippet: z.string().nullable().optional(),
  fetchedTitle: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  content: z.string(),
  sourceQuery: z.string(),
});

export const webJobSearchOutputSchema = z.object({
  queries: z.array(z.string()),
  results: z.array(webJobSearchResultSchema),
  fetchErrors: z.array(
    z.object({
      url: z.string().url(),
      error: z.string(),
    }),
  ),
  analysis: z.string().optional(),
});

export type JobSearchType = z.infer<typeof jobSearchTypeSchema>;
export type WebJobSearchInput = z.infer<typeof webJobSearchInputSchema>;
export type WebJobSearchOutput = z.infer<typeof webJobSearchOutputSchema>;
