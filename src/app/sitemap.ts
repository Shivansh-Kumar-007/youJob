import type { MetadataRoute } from "next";
import { mockJobs } from "@/lib/utils/mock-jobs";
import { absoluteUrl } from "@/lib/utils/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/signup", "/jobs", "/pricing"].map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const jobRoutes = mockJobs.map((job) => ({
    url: absoluteUrl(`/jobs/${job.slug}`),
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...jobRoutes];
}
