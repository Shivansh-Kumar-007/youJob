"use server";

import { assertInternalApiKeyAuth } from "@/lib/auth";
import { analyzeJobMatches } from "@/lib/gemini";
import { runJobDiscovery, type JobDiscoveryItem } from "@/lib/job-discovery";
import {
  webJobSearchInputSchema,
  webJobSearchOutputSchema,
  type WebJobSearchInput,
  type WebJobSearchOutput,
} from "@/app/actions/schemas";

type WebJobSearchResult = JobDiscoveryItem & {
  sourceQuery: string;
};

function normalizeList(values: string[] | undefined): string[] {
  return [...new Set((values || []).map((value) => value.trim()).filter(Boolean))];
}

function buildQueries(input: WebJobSearchInput): string[] {
  const titles = normalizeList(input.jobTitles);
  const types = normalizeList(input.jobTypes);
  const location = input.jobLocation?.trim();

  if (types.length === 0) {
    return titles.map((title) =>
      [title, location, "job"].filter(Boolean).join(" "),
    );
  }

  return titles.flatMap((title) =>
    types.map((jobType) =>
      [title, location, jobType, "job"].filter(Boolean).join(" "),
    ),
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
  input: unknown,
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
