export type MockJob = {
  slug: string;
  title: string;
  company: string;
  location: string;
  locationType: "Remote" | "Hybrid" | "On-site";
  salary: string;
  summary: string;
  description: string[];
  tags: string[];
  postedAt: string;
  premium?: boolean;
};

export const mockJobs: MockJob[] = [
  {
    slug: "director-product-growth-aurora-capital",
    title: "Director of Product Growth",
    company: "Aurora Capital",
    location: "New York, NY",
    locationType: "Hybrid",
    salary: "$190k - $230k",
    summary:
      "Lead product-led growth across a global talent marketplace focused on senior placements.",
    description: [
      "Aurora Capital is expanding its digital talent division and needs a product leader who can connect executive search strategy with measurable product outcomes.",
      "You will own growth loops, retention programs, and AI-assisted candidate discovery systems that serve senior operators and strategic hires.",
      "The role suits someone with marketplace experience, strong stakeholder management, and a boardroom-ready communication style.",
    ],
    tags: ["Product", "Growth", "Marketplace", "AI Matching"],
    postedAt: "2 days ago",
    premium: true,
  },
  {
    slug: "senior-frontend-architect-northline-partners",
    title: "Senior Frontend Architect",
    company: "Northline Partners",
    location: "Remote, US",
    locationType: "Remote",
    salary: "$165k - $195k",
    summary:
      "Define the frontend architecture for a premium recruiting and candidate intelligence platform.",
    description: [
      "Northline Partners is hiring a frontend architect to modernize candidate discovery workflows with AI-assisted search, ranking, and profile presentation.",
      "You will shape design systems, platform performance, and the interaction model used by recruiters and candidates across desktop and mobile.",
      "This is a high-trust role with strong influence over product strategy and implementation quality.",
    ],
    tags: ["React", "Next.js", "Design Systems", "Architecture"],
    postedAt: "Today",
  },
  {
    slug: "head-of-operations-verdant-bridge",
    title: "Head of Operations",
    company: "Verdant Bridge",
    location: "Chicago, IL",
    locationType: "On-site",
    salary: "$175k - $210k",
    summary:
      "Oversee operations for a fast-scaling professional services business serving C-suite hiring programs.",
    description: [
      "Verdant Bridge needs an operations leader who can build disciplined systems for client delivery, candidate lifecycle management, and internal team coordination.",
      "You will work closely with senior leadership to standardize reporting, improve execution cadence, and support expansion into new markets.",
      "Strong people management and financial planning experience are required.",
    ],
    tags: ["Operations", "Leadership", "Strategy", "Scaling"],
    postedAt: "4 days ago",
  },
];

export function getMockJobBySlug(slug: string) {
  return mockJobs.find((job) => job.slug === slug) ?? null;
}
