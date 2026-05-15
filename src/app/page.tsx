import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import HomeClient from "@/components/home-client";

export const metadata: Metadata = {
  title: "youJob | Best Remote Jobs Found by AI",
  description:
    "Stop searching for remote jobs manually. Upload your CV to youJob and let our AI agent index the best work-from-anywhere roles for you.",
  keywords: ["remote jobs", "work from home", "AI job search", "youjob"],
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default function Home() {
  return <HomeClient />;
}