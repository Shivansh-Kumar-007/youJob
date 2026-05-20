import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils/site";
import HomeClient from "@/ui/product-components/home-client";
import { getAuthenticatedUserFromCookies } from "@/lib/server/auth/auth-session";

export const metadata: Metadata = {
  title: "youJob | Best Remote Jobs Found by AI",
  description:
    "Stop searching for remote jobs manually. Upload your CV to youJob and let our AI agent index the best work-from-anywhere roles for you.",
  keywords: ["remote jobs", "work from home", "AI job search", "youJob"],
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default async function Home() {
  const user = await getAuthenticatedUserFromCookies();

  return <HomeClient isAuthenticated={Boolean(user)} />;
}
