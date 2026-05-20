export const siteConfig = {
  name: "youJob",
  shortName: "youJob",
  tagline: "Let AI work for You",
  description:
    "Find high-signal remote jobs with youJob. Upload your CV and let our AI engine hunt for roles that match your career. No more board scrolling, just ranked opportunities.",
  url:
    process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ||
    "http://localhost:3000",
  keywords: [
    "remote jobs",
    "AI remote job search",
    "CV-based job discovery",
    "best remote job sites",
    "AI career agent",
    "high paying remote roles",
    "work from anywhere jobs",
    "youJob",
  ],
};

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path}`;
}
