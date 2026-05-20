type SerpApiApplyOption = {
  title?: string;
  link?: string;
};

type SerpApiRelatedLink = {
  link?: string;
};

type SerpApiJobResult = {
  title?: string;
  company_name?: string;
  location?: string;
  description?: string;
  via?: string;
  share_link?: string;
  apply_options?: SerpApiApplyOption[];
  related_links?: SerpApiRelatedLink[];
};

type SerpApiGoogleJobsResponse = {
  jobs_results?: SerpApiJobResult[];
};

export type GoogleJobsSearchItem = {
  title: string;
  company: string;
  location?: string;
  description?: string;
  sourceName?: string;
  sourceUrl: string;
};

export type GoogleJobsSearchInput = {
  query: string;
  location?: string;
  gl?: string;
  hl?: string;
};

function requireSerpApiKey() {
  const apiKey = process.env.SERP_API_VALUE;

  if (!apiKey) {
    throw new Error("Missing SERPAPI_API_KEY");
  }

  return apiKey;
}

function isValidHttpUrl(value: string | undefined): value is string {
  if (!value) {
    return false;
  }

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function pickExternalJobUrl(job: SerpApiJobResult): string | null {
  const candidates = [
    ...(job.apply_options || []).map((option) => option.link),
    ...(job.related_links || []).map((link) => link.link),
    job.share_link,
  ].filter(isValidHttpUrl);

  const external = candidates.find((value) => {
    try {
      const hostname = new URL(value).hostname.toLowerCase();
      return !hostname.includes("google.");
    } catch {
      return false;
    }
  });

  return external || candidates[0] || null;
}

function normalizeJobResult(
  job: SerpApiJobResult
): GoogleJobsSearchItem | null {
  const sourceUrl = pickExternalJobUrl(job);

  if (!sourceUrl || !job.title) {
    return null;
  }

  return {
    title: job.title.trim(),
    company: job.company_name?.trim() || "Unknown Company",
    location: job.location?.trim(),
    description: job.description?.trim(),
    sourceName: job.via?.trim(),
    sourceUrl,
  };
}

export async function searchGoogleJobs(
  input: GoogleJobsSearchInput
): Promise<GoogleJobsSearchItem[]> {
  const apiKey = requireSerpApiKey();
  const params = new URLSearchParams({
    engine: "google_jobs",
    q: input.query,
    api_key: apiKey,
    gl: input.gl || "us",
    hl: input.hl || "en",
  });

  if (input.location) {
    params.set("location", input.location);
  }

  const response = await fetch(`https://serpapi.com/search.json?${params}`, {
    method: "GET",
    cache: "no-store",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `SerpAPI request failed with ${response.status}: ${body || response.statusText}`
    );
  }

  const payload = (await response.json()) as SerpApiGoogleJobsResponse;

  return (payload.jobs_results || [])
    .map(normalizeJobResult)
    .filter((job): job is GoogleJobsSearchItem => Boolean(job));
}
