"use server";

import crypto from "node:crypto";
import prisma from "@/lib/third-party-clients/prisma-client";
import {
  fetchTinyFish,
  normalizeTinyFishText,
  type TinyFishFetchResponse,
} from "./tinyfish";
import { searchGoogleJobs, type GoogleJobsSearchItem } from "./serpapi";
import { generateResumeSearchQueries } from "./query-planner";

type ResumeProfileSnapshot = {
  targetTitle?: string | null;
  summary?: string | null;
  skills?: string[];
  preferredLocations?: string[];
  remoteOnly?: boolean;
  keywords?: string | null;
};

type CandidateJob = GoogleJobsSearchItem & {
  sourceQuery: string;
  fetchedTitle?: string | null;
  fetchedDescription?: string | null;
  fetchedContent?: string;
};

const MAX_RESULTS_PER_RUN = 30;

function normalizeList(values: string[] | null | undefined): string[] {
  return [
    ...new Set((values || []).map((value) => value.trim()).filter(Boolean)),
  ];
}

function extractSkillsFromParsedProfile(parsedProfile: unknown): string[] {
  if (!parsedProfile || typeof parsedProfile !== "object") return [];
  const maybeSkills = (parsedProfile as { skills?: unknown }).skills;
  if (!Array.isArray(maybeSkills)) return [];
  return maybeSkills
    .map((value) => (typeof value === "string" ? value.trim() : ""))
    .filter(Boolean);
}

function collectProfileSkills(input: {
  skills: string[];
  keywords: string | null;
  parsedProfile: unknown;
}): string[] {
  const keywordSkills = (input.keywords || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  const parsedSkills = extractSkillsFromParsedProfile(input.parsedProfile);
  return normalizeList([
    ...input.skills,
    ...keywordSkills,
    ...parsedSkills,
  ]).slice(0, 12);
}

function buildProfileSnapshot(profile: {
  targetTitle: string | null;
  summary: string | null;
  skills: string[];
  preferredLocations: string[];
  remoteOnly: boolean;
  keywords: string | null;
}): ResumeProfileSnapshot {
  return {
    targetTitle: profile.targetTitle,
    summary: profile.summary,
    skills: profile.skills,
    preferredLocations: profile.preferredLocations,
    remoteOnly: profile.remoteOnly,
    keywords: profile.keywords,
  };
}

function chunk<T>(items: T[], size: number): T[][] {
  const output: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    output.push(items.slice(index, index + size));
  }
  return output;
}

function dedupeCandidates(items: CandidateJob[]): CandidateJob[] {
  const byUrl = new Map<string, CandidateJob>();
  for (const item of items)
    if (!byUrl.has(item.sourceUrl)) byUrl.set(item.sourceUrl, item);
  return [...byUrl.values()];
}

function extractSourceDomain(sourceUrl: string): string | null {
  try {
    return new URL(sourceUrl).hostname.toLowerCase();
  } catch {
    return null;
  }
}

function detectRemote(location: string | undefined, content: string): boolean {
  return `${location || ""}\n${content}`.toLowerCase().includes("remote");
}

function buildJobKeywords(item: CandidateJob): string | null {
  const raw = [
    item.title,
    item.company,
    item.location,
    item.description,
    item.fetchedDescription,
    item.fetchedContent,
  ]
    .filter(Boolean)
    .join("\n")
    .replace(/\s+/g, " ")
    .trim();
  return raw ? raw.slice(0, 5000) : null;
}

async function fetchJobPages(items: CandidateJob[]): Promise<{
  fetchedByUrl: Map<string, TinyFishFetchResponse["results"][number]>;
  fetchErrors: TinyFishFetchResponse["errors"];
}> {
  const fetchedByUrl = new Map<
    string,
    TinyFishFetchResponse["results"][number]
  >();
  const fetchErrors: TinyFishFetchResponse["errors"] = [];
  for (const urls of chunk(
    [...new Set(items.map((item) => item.sourceUrl))],
    10
  )) {
    const response = await fetchTinyFish({ urls, format: "markdown" });
    for (const result of response.results) fetchedByUrl.set(result.url, result);
    fetchErrors.push(...response.errors);
  }
  return { fetchedByUrl, fetchErrors };
}

export async function ingestJobsForUserProfile(userId: string) {
  const profile = await prisma.userProfile.findUnique({
    where: { userId },
    select: {
      targetTitle: true,
      summary: true,
      skills: true,
      preferredLocations: true,
      remoteOnly: true,
      keywords: true,
      parsedProfile: true,
    },
  });
  if (!profile) throw new Error("Missing user profile");

  const profileSkills = collectProfileSkills({
    skills: normalizeList(profile.skills),
    keywords: profile.keywords,
    parsedProfile: profile.parsedProfile,
  });

  const searchPlan = await generateResumeSearchQueries({
    targetTitle: profile.targetTitle,
    summary: profile.summary,
    skills: profileSkills,
    preferredLocations: normalizeList(profile.preferredLocations),
    remoteOnly: profile.remoteOnly,
    keywords: profile.keywords,
    parsedProfile: profile.parsedProfile,
  });
  if (searchPlan.queries.length === 0) {
    throw new Error(
      "No search queries could be generated from the resume profile"
    );
  }

  const searchRun = await prisma.searchRun.create({
    data: {
      userId,
      type: "FREE_INITIAL",
      status: "RUNNING",
      querySet: searchPlan.queries.map((item) => item.query),
      profileSnapshot: buildProfileSnapshot(profile),
      resultLimit: MAX_RESULTS_PER_RUN,
    },
  });

  try {
    const persistedJobIds = new Set<string>();

    if (profileSkills.length > 0) {
      const dbSkillMatches = await prisma.job.findMany({
        where: {
          OR: profileSkills.flatMap((skill) => [
            { title: { contains: skill, mode: "insensitive" } },
            { description: { contains: skill, mode: "insensitive" } },
            { keywords: { contains: skill, mode: "insensitive" } },
          ]),
        },
        orderBy: [{ lastSeenAt: "desc" }, { scrapedAt: "desc" }],
        take: MAX_RESULTS_PER_RUN,
      });

      let dbRank = 1;
      for (const job of dbSkillMatches) {
        await prisma.searchRunResult.create({
          data: {
            searchRunId: searchRun.id,
            jobId: job.id,
            rank: dbRank,
            reason: "Matched from existing DB inventory by CV skill set.",
          },
        });
        persistedJobIds.add(job.id);
        dbRank += 1;
      }
    }

    const remainingSlots = Math.max(
      0,
      MAX_RESULTS_PER_RUN - persistedJobIds.size
    );
    const candidates: CandidateJob[] = [];

    if (remainingSlots > 0) {
      for (const query of searchPlan.queries) {
        const results = await searchGoogleJobs({
          query: query.query,
          location: query.location,
        });
        for (const result of results.slice(0, 10)) {
          candidates.push({ ...result, sourceQuery: query.query });
        }
      }
    }

    const dedupedCandidates = dedupeCandidates(candidates);
    const { fetchedByUrl } = await fetchJobPages(dedupedCandidates);
    let nextRank = persistedJobIds.size + 1;

    for (const item of dedupedCandidates) {
      if (persistedJobIds.size >= MAX_RESULTS_PER_RUN) break;

      const fetched = fetchedByUrl.get(item.sourceUrl);
      const fetchedContent = normalizeTinyFishText(fetched?.text).slice(
        0,
        12000
      );
      const description =
        fetchedContent || item.description || "No description available.";

      const job = await prisma.job.upsert({
        where: { sourceUrl: item.sourceUrl },
        update: {
          title: item.title,
          company: item.company,
          description,
          location: item.location || null,
          locationType: detectRemote(item.location, description)
            ? "Remote"
            : null,
          source: "serpapi-google-jobs",
          sourceDomain: extractSourceDomain(item.sourceUrl),
          discoveryQuery: item.sourceQuery,
          contentHash: crypto
            .createHash("sha256")
            .update(description)
            .digest("hex"),
          keywords: buildJobKeywords({
            ...item,
            fetchedContent,
            fetchedTitle: fetched?.title,
            fetchedDescription: fetched?.description,
          }),
          lastSeenAt: new Date(),
          scrapedAt: new Date(),
        },
        create: {
          title: item.title,
          company: item.company,
          description,
          location: item.location || null,
          locationType: detectRemote(item.location, description)
            ? "Remote"
            : null,
          sourceUrl: item.sourceUrl,
          source: "serpapi-google-jobs",
          sourceDomain: extractSourceDomain(item.sourceUrl),
          discoveryQuery: item.sourceQuery,
          contentHash: crypto
            .createHash("sha256")
            .update(description)
            .digest("hex"),
          keywords: buildJobKeywords({
            ...item,
            fetchedContent,
            fetchedTitle: fetched?.title,
            fetchedDescription: fetched?.description,
          }),
        },
      });

      if (persistedJobIds.has(job.id)) continue;
      persistedJobIds.add(job.id);

      await prisma.searchRunResult.create({
        data: {
          searchRunId: searchRun.id,
          jobId: job.id,
          rank: nextRank,
          reason: `Found via fresh web query: ${item.sourceQuery}`,
        },
      });
      nextRank += 1;
    }

    await prisma.searchRun.update({
      where: { id: searchRun.id },
      data: {
        status: "COMPLETED",
        fetchedCount: persistedJobIds.size,
        rankedCount: persistedJobIds.size,
        completedAt: new Date(),
      },
    });

    return {
      searchRunId: searchRun.id,
      queryCount: searchPlan.queries.length,
      jobsSaved: persistedJobIds.size,
    };
  } catch (error) {
    await prisma.searchRun.update({
      where: { id: searchRun.id },
      data: {
        status: "FAILED",
        errorMessage: error instanceof Error ? error.message : "Unknown error",
        completedAt: new Date(),
      },
    });
    throw error;
  }
}

export async function ensureJobsForUserProfile(userId: string) {
  const profile = await prisma.userProfile.findUnique({
    where: { userId },
    select: {
      resumeUrl: true,
      resumeText: true,
      parsedProfile: true,
    },
  });

  if (!profile?.resumeUrl || !profile.resumeText || !profile.parsedProfile) {
    return null;
  }

  const latestRun = await prisma.searchRun.findFirst({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: { results: { take: 1 } },
  });

  if (latestRun && latestRun.results.length > 0) return latestRun;

  await ingestJobsForUserProfile(userId);
  return prisma.searchRun.findFirst({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
}
