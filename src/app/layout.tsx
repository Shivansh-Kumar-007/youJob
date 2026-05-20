import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/ui/shared-components/providers";
import { absoluteUrl, siteConfig } from "@/lib/utils/site";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${montserrat.variable} min-h-full bg-(--color-background) font-sans text-(--color-on-background) antialiased`}
      >
        <Providers>{children}</Providers>
        <style>{`
          @keyframes yj-pulse {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-4px) scale(1.04); }
          }
          @keyframes yj-load {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(220%); }
          }
          @keyframes yj-confetti {
            0% { transform: translate3d(0, 0, 0) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translate3d(0, 110vh, 0) rotate(540deg); opacity: 0; }
          }
        `}</style>
      </body>
    </html>
  );
}
