import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

const geminiProvider = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export type JobDiscoveryAnalysisInput = {
  query: string;
  pages: Array<{
    url: string;
    title?: string | null;
    snippet?: string | null;
    content: string;
  }>;
};

export async function analyzeJobDiscovery(
  input: JobDiscoveryAnalysisInput,
): Promise<string> {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("Missing GEMINI_API_KEY");
  }

  const prompt = [
    "You are analyzing job discovery results for a remote-job search product.",
    "Summarize the strongest roles and explain why they are relevant.",
    "Be concise and practical.",
    "",
    `Search query: ${input.query}`,
    "",
    "Pages:",
    ...input.pages.map((page, index) =>
      [
        `${index + 1}. ${page.title || "Untitled"}`,
        `URL: ${page.url}`,
        `Snippet: ${page.snippet || "n/a"}`,
        `Content:\n${page.content.slice(0, 6000)}`,
      ].join("\n"),
    ),
  ].join("\n");

  const result = await generateText({
    model: geminiProvider(
      process.env.AI_RANKING_MODEL || "gemini-2.5-flash",
    ),
    prompt,
  });

  return result.text;
}

export type JobMatchAnalysisInput = {
  jobTitles: string[];
  jobLocation?: string;
  jobTypes?: string[];
  pages: Array<{
    url: string;
    title?: string | null;
    snippet?: string | null;
    content: string;
    sourceQuery?: string;
  }>;
};

export async function analyzeJobMatches(
  input: JobMatchAnalysisInput,
): Promise<string> {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("Missing GEMINI_API_KEY");
  }

  const prompt = [
    "You are ranking live web job-search results for a hiring assistant product.",
    "Focus on relevance to the requested titles, location, and job types.",
    "Call out the strongest matches first.",
    "Ignore obvious low-signal or generic pages.",
    "Keep the answer concise and practical.",
    "",
    `Job titles: ${input.jobTitles.join(", ")}`,
    `Job location: ${input.jobLocation || "any"}`,
    `Job types: ${input.jobTypes?.join(", ") || "any"}`,
    "",
    "Results:",
    ...input.pages.map((page, index) =>
      [
        `${index + 1}. ${page.title || "Untitled"}`,
        `URL: ${page.url}`,
        `Source query: ${page.sourceQuery || "n/a"}`,
        `Snippet: ${page.snippet || "n/a"}`,
        `Content:\n${page.content.slice(0, 5000)}`,
      ].join("\n"),
    ),
  ].join("\n");

  const result = await generateText({
    model: geminiProvider(
      process.env.AI_RANKING_MODEL || "gemini-2.5-flash",
    ),
    prompt,
  });

  return result.text;
}
