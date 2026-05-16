import {
  fetchTinyFish,
  normalizeTinyFishText,
  searchTinyFish,
  type TinyFishFetchResult,
  type TinyFishSearchResult,
} from "@/lib/tinyfish";
import { analyzeJobDiscovery } from "@/lib/gemini";

export type JobDiscoveryInput = {
  query: string;
  location?: string;
  language?: string;
  maxResults?: number;
  includeAnalysis?: boolean;
};

export type JobDiscoveryItem = {
  position: number;
  url: string;
  siteName?: string | null;
  title: string;
  snippet?: string | null;
  fetchedTitle?: string | null;
  description?: string | null;
  content: string;
};

export type JobDiscoveryOutput = {
  query: string;
  totalResults: number;
  items: JobDiscoveryItem[];
  fetchErrors: Array<{ url: string; error: string }>;
  analysis?: string;
};

function mergeResults(
  results: TinyFishSearchResult[],
  fetchedResults: TinyFishFetchResult[],
): JobDiscoveryItem[] {
  const fetchedByUrl = new Map(
    fetchedResults.map((result) => [result.url, result] as const),
  );

  return results.map((result) => {
    const fetched = fetchedByUrl.get(result.url);

    return {
      position: result.position,
      url: result.url,
      siteName: result.site_name,
      title: result.title,
      snippet: result.snippet,
      fetchedTitle: fetched?.title,
      description: fetched?.description,
      content: normalizeTinyFishText(fetched?.text).slice(0, 12000),
    };
  });
}

export async function runJobDiscovery(
  input: JobDiscoveryInput,
): Promise<JobDiscoveryOutput> {
  const maxResults = Math.min(Math.max(input.maxResults ?? 5, 1), 10);
  const searchResponse = await searchTinyFish({
    query: input.query,
    location: input.location,
    language: input.language,
  });

  const topResults = searchResponse.results.slice(0, maxResults);
  const fetchResponse = await fetchTinyFish({
    urls: topResults.map((result) => result.url),
    format: "markdown",
  });

  const items = mergeResults(topResults, fetchResponse.results);
  const output: JobDiscoveryOutput = {
    query: searchResponse.query,
    totalResults: searchResponse.total_results ?? topResults.length,
    items,
    fetchErrors: fetchResponse.errors,
  };

  if (input.includeAnalysis !== false && items.length > 0) {
    output.analysis = await analyzeJobDiscovery({
      query: input.query,
      pages: items.map((item) => ({
        url: item.url,
        title: item.fetchedTitle || item.title,
        snippet: item.snippet,
        content: item.content,
      })),
    });
  }

  return output;
}
