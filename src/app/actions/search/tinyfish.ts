const TINYFISH_SEARCH_URL = "https://api.search.tinyfish.ai";
const TINYFISH_FETCH_URL = "https://api.fetch.tinyfish.ai";

export type TinyFishSearchParams = {
  query: string;
  location?: string;
  language?: string;
};

export type TinyFishSearchResult = {
  position: number;
  site_name?: string | null;
  title: string;
  snippet?: string | null;
  url: string;
};

export type TinyFishSearchResponse = {
  query: string;
  results: TinyFishSearchResult[];
  total_results?: number;
};

export type TinyFishFetchFormat = "markdown" | "html" | "json";

export type TinyFishFetchParams = {
  urls: string[];
  format?: TinyFishFetchFormat;
  links?: boolean;
  imageLinks?: boolean;
};

export type TinyFishFetchResult = {
  url: string;
  final_url?: string;
  title?: string | null;
  description?: string | null;
  language?: string | null;
  text?: string | Record<string, unknown> | null;
  links?: string[];
  image_links?: string[];
};

export type TinyFishFetchError = {
  url: string;
  error: string;
};

export type TinyFishFetchResponse = {
  results: TinyFishFetchResult[];
  errors: TinyFishFetchError[];
};

function requireTinyFishApiKey() {
  const apiKey = process.env.TINYFISH_API_KEY;

  if (!apiKey) {
    throw new Error("Missing TINYFISH_API_KEY");
  }

  return apiKey;
}

function getTinyFishHeaders() {
  return {
    "X-API-Key": requireTinyFishApiKey(),
    Accept: "application/json",
  };
}

async function parseTinyFishResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `TinyFish request failed with ${response.status}: ${body || response.statusText}`,
    );
  }

  return (await response.json()) as T;
}

export async function searchTinyFish(
  params: TinyFishSearchParams,
): Promise<TinyFishSearchResponse> {
  const query = new URLSearchParams({ query: params.query });

  if (params.location) {
    query.set("location", params.location);
  }

  if (params.language) {
    query.set("language", params.language);
  }

  const response = await fetch(`${TINYFISH_SEARCH_URL}?${query.toString()}`, {
    method: "GET",
    headers: getTinyFishHeaders(),
    cache: "no-store",
  });

  return parseTinyFishResponse<TinyFishSearchResponse>(response);
}

export async function fetchTinyFish(
  params: TinyFishFetchParams,
): Promise<TinyFishFetchResponse> {
  if (params.urls.length === 0) {
    return { results: [], errors: [] };
  }

  const response = await fetch(TINYFISH_FETCH_URL, {
    method: "POST",
    headers: {
      ...getTinyFishHeaders(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      urls: params.urls.slice(0, 10),
      format: params.format ?? "markdown",
      links: params.links ?? false,
      image_links: params.imageLinks ?? false,
    }),
    cache: "no-store",
  });

  return parseTinyFishResponse<TinyFishFetchResponse>(response);
}

export function normalizeTinyFishText(
  value: TinyFishFetchResult["text"],
): string {
  if (!value) {
    return "";
  }

  return typeof value === "string" ? value : JSON.stringify(value, null, 2);
}
