"use server";

import { generateText } from "ai";
import { geminiProvider } from "@/lib/third-party-clients/gemini";
import { assertInternalApiKeyAuth } from "@/lib/server/auth/internal-api-auth";
import { runJobDiscovery, type JobDiscoveryItem } from "./discovery";
import {
  webJobSearchInputSchema,
  webJobSearchOutputSchema,
  type WebJobSearchInput,
  type WebJobSearchOutput,
} from "./schemas";

type JobMatchAnalysisInput = {
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

async function analyzeJobMatches(
  input: JobMatchAnalysisInput
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
      ].join("\n")
    ),
  ].join("\n");

  const result = await generateText({
    model: geminiProvider(process.env.AI_RANKING_MODEL || "gemini-2.5-flash"),
    prompt,
  });

  return result.text;
}

type WebJobSearchResult = JobDiscoveryItem & {
  sourceQuery: string;
};

function normalizeList(values: string[] | undefined): string[] {
  return [
    ...new Set((values || []).map((value) => value.trim()).filter(Boolean)),
  ];
}

function buildQueries(input: WebJobSearchInput): string[] {
  const titles = normalizeList(input.jobTitles);
  const types = normalizeList(input.jobTypes);
  const location = input.jobLocation?.trim();

  if (types.length === 0) {
    return titles.map((title) =>
      [title, location, "job"].filter(Boolean).join(" ")
    );
  }

  return titles.flatMap((title) =>
    types.map((jobType) =>
      [title, location, jobType, "job"].filter(Boolean).join(" ")
    )
  );
}

function dedupeResults(results: WebJobSearchResult[]): WebJobSearchResult[] {
  const byUrl = new Map<string, WebJobSearchResult>();

  for (const result of results) {
    const existing = byUrl.get(result.url);

    if (!existing || result.position < existing.position) {
      byUrl.set(result.url, result);
    }
  }

  return [...byUrl.values()];
}

function sortResults(results: WebJobSearchResult[]): WebJobSearchResult[] {
  return [...results].sort((left, right) => {
    if (left.position !== right.position) {
      return left.position - right.position;
    }

    return left.title.localeCompare(right.title);
  });
}

export async function searchJobsAction(
  input: unknown
): Promise<WebJobSearchOutput> {
  await assertInternalApiKeyAuth();
  const parsedInput: WebJobSearchInput = webJobSearchInputSchema.parse(input);

  const queries = buildQueries(parsedInput);

  if (queries.length === 0) {
    throw new Error("At least one job title is required.");
  }

  const allResults: WebJobSearchResult[] = [];
  const fetchErrors: Array<{ url: string; error: string }> = [];

  for (const query of queries) {
    const response = await runJobDiscovery({
      query,
      language: parsedInput.language,
      maxResults: parsedInput.maxResultsPerQuery,
      includeAnalysis: false,
    });

    for (const item of response.items) {
      allResults.push({
        ...item,
        sourceQuery: query,
      });
    }

    fetchErrors.push(...response.fetchErrors);
  }

  const results = sortResults(dedupeResults(allResults));
  const output: WebJobSearchOutput = {
    queries,
    results,
    fetchErrors,
  };

  if (parsedInput.includeAnalysis !== false && results.length > 0) {
    output.analysis = await analyzeJobMatches({
      jobTitles: normalizeList(parsedInput.jobTitles),
      jobLocation: parsedInput.jobLocation,
      jobTypes: normalizeList(parsedInput.jobTypes),
      pages: results.map((result) => ({
        url: result.url,
        title: result.fetchedTitle || result.title,
        snippet: result.snippet,
        content: result.content,
        sourceQuery: result.sourceQuery,
      })),
    });
  }

  return webJobSearchOutputSchema.parse(output);
}
