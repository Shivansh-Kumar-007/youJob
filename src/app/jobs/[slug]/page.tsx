import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getMockJobBySlug, mockJobs } from "@/lib/mock-jobs";
import { absoluteUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return mockJobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getMockJobBySlug(slug);

  if (!job) {
    return {
      title: "Job Not Found",
    };
  }

  return {
    title: `${job.title} at ${job.company}`,
    description: `${job.title} in ${job.location}. ${job.summary}`,
    alternates: {
      canonical: absoluteUrl(`/jobs/${job.slug}`),
    },
    openGraph: {
      title: `${job.title} at ${job.company}`,
      description: `${job.title} in ${job.location}. ${job.summary}`,
      url: absoluteUrl(`/jobs/${job.slug}`),
      type: "article",
    },
  };
}

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const job = getMockJobBySlug(slug);

  if (!job) notFound();

  return (
    <main className="page-shell py-10 md:py-14">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <article className="panel rounded-xl px-6 py-8 md:px-8">
          <div className="mb-8 space-y-4 border-b border-(--color-surface-variant) pb-8">
            <Link
              href="/jobs"
              className="label inline-flex items-center gap-2 text-(--color-primary)"
            >
              Back to ranked jobs
            </Link>
            <div>
              <h1 className="text-[clamp(2rem,4vw,3.25rem)] leading-[1.15] font-bold tracking-[-0.02em]">
                {job.title}
              </h1>
              <p className="mt-3 text-lg text-(--color-on-surface-variant)">
                {job.company}{" "}
                <span className="mx-1 text-(--color-accent-yellow)">•</span>{" "}
                {job.location}{" "}
                <span className="mx-1 text-(--color-accent-yellow)">•</span>{" "}
                {job.locationType}{" "}
                <span className="mx-1 text-(--color-accent-yellow)">•</span>{" "}
                {job.salary}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-(--color-surface-container) px-3 py-1 text-xs font-medium text-(--color-on-surface-variant)"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {job.description.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-8 text-(--color-on-surface-variant)"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <aside className="space-y-4">
          <div className="panel rounded-xl p-6">
            <p className="label mb-3">Application</p>
            <p className="mb-5 text-sm leading-7 text-(--color-on-surface-variant)">
              Open the original source page, then store the action in your
              application history once services are connected.
            </p>
            <div className="space-y-3">
              <Button className="w-full">Open Source Page</Button>
              <Button variant="secondary" className="w-full">
                Save For Later
              </Button>
            </div>
          </div>
          <div className="panel rounded-xl p-6">
            <p className="label mb-3">Posted</p>
            <p className="text-sm text-(--color-on-surface-variant)">
              {job.postedAt}
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
