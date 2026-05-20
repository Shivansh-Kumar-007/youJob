import { z } from "zod";

export const resumeSearchQuerySchema = z.object({
  query: z.string().trim().min(1),
  location: z.string().trim().min(1).optional(),
});

export const resumeSearchQueryPlanSchema = z.object({
  queries: z.array(resumeSearchQuerySchema).min(1).max(3),
});

export type ResumeSearchQueryPlan = z.infer<typeof resumeSearchQueryPlanSchema>;

export type ResumeSearchPlanInput = {
  targetTitle?: string | null;
  summary?: string | null;
  skills?: string[];
  preferredLocations?: string[];
  remoteOnly?: boolean;
  keywords?: string | null;
  parsedProfile?: unknown;
};
