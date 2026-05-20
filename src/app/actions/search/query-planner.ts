"use server";

import { generateObject } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import {
  resumeSearchQueryPlanSchema,
  type ResumeSearchPlanInput,
  type ResumeSearchQueryPlan,
} from "./schema";

const geminiProvider = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

function buildFallbackSearchQueries(
  input: ResumeSearchPlanInput,
): ResumeSearchQueryPlan {
  const title = input.targetTitle?.trim() || "software engineer";
  const skills = (input.skills || []).map((value) => value.trim()).filter(Boolean);
  const locations = (input.preferredLocations || [])
    .map((value) => value.trim())
    .filter(Boolean);
  const skillSuffix = skills.slice(0, 3).join(" ");
  const firstLocation = locations[0];

  const querySet = [
    [title, input.remoteOnly ? "remote" : ""].filter(Boolean).join(" "),
    [title, skillSuffix, input.remoteOnly ? "remote" : ""]
      .filter(Boolean)
      .join(" "),
    [title, firstLocation && !input.remoteOnly ? firstLocation : "", skillSuffix]
      .filter(Boolean)
      .join(" "),
  ];

  const queries = [...new Set(querySet)]
    .filter(Boolean)
    .slice(0, 3)
    .map((query, index) => ({
      query,
      location:
        input.remoteOnly || !firstLocation || index < 2 ? undefined : firstLocation,
    }));

  return {
    queries,
  };
}

export async function generateResumeSearchQueries(
  input: ResumeSearchPlanInput,
): Promise<ResumeSearchQueryPlan> {
  if (!process.env.GEMINI_API_KEY) {
    return buildFallbackSearchQueries(input);
  }

  try {
    const result = await generateObject({
      model: geminiProvider(
        process.env.AI_RANKING_MODEL || "gemini-2.5-flash",
      ),
      schema: resumeSearchQueryPlanSchema,
      prompt: [
        "You generate search queries for Google Jobs.",
        "Return exactly 3 concise queries that maximize relevant job results.",
        "Prefer target role plus a few strong skills.",
        "If remoteOnly is true, include remote intent in the query and avoid forcing a location.",
        "If preferred locations exist and remoteOnly is false, use them selectively.",
        "Do not add punctuation noise or long natural-language sentences.",
        "",
        `Target title: ${input.targetTitle || "n/a"}`,
        `Summary: ${input.summary || "n/a"}`,
        `Skills: ${(input.skills || []).join(", ") || "n/a"}`,
        `Preferred locations: ${(input.preferredLocations || []).join(", ") || "n/a"}`,
        `Remote only: ${input.remoteOnly ? "yes" : "no"}`,
        `Keywords: ${input.keywords || "n/a"}`,
        `Parsed profile: ${JSON.stringify(input.parsedProfile || {})}`,
      ].join("\n"),
    });

    return result.object;
  } catch {
    return buildFallbackSearchQueries(input);
  }
}
