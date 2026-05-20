import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/ui/shared-components/button";
import { absoluteUrl } from "@/lib/utils/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Compare the free and paid plans for AI job discovery, daily applications, and deeper ranking coverage.",
  alternates: {
    canonical: absoluteUrl("/pricing"),
  },
};

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "For focused candidates who want a disciplined first search.",
    features: [
      "5 applications per day",
      "Live first search",
      "CV upload and profile parsing",
      "Shared job catalog reuse",
    ],
    cta: "Start Free",
    href: "/signup",
    highlight: false,
  },
  {
    name: "Prestige Pro",
    price: "$39",
    description:
      "For candidates who want broader discovery and stronger ranking.",
    features: [
      "100-job deeper search runs",
      "Expanded AI ranking coverage",
      "Higher-frequency discovery refreshes",
      "Priority premium role surfacing",
    ],
    cta: "Upgrade To Pro",
    href: "/signup",
    highlight: true,
  },
];

export default function PricingPage() {
  return (
    <main className="page-shell py-10 md:py-14">
      <header className="mx-auto mb-10 max-w-3xl text-center">
        <p className="label mb-3">Pricing</p>
        <h1 className="section-title">
          Choose the search depth that fits your pace
        </h1>
        <p className="mt-4 text-lg leading-8 text-(--color-on-surface-variant)">
          Start with a free, tightly-scoped workflow. Upgrade when you want
          broader discovery, deeper ranking, and more aggressive opportunity
          coverage.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={`panel rounded-xl p-7 ${
              tier.highlight ? "border-(--color-primary)" : ""
            }`}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-2xl font-semibold tracking-[-0.02em]">
                  {tier.name}
                </p>
                <p className="mt-2 text-(--color-on-surface-variant)">
                  {tier.description}
                </p>
              </div>
              {tier.highlight ? (
                <span className="rounded-full bg-(--color-tertiary-fixed-dim) px-3 py-1 text-xs font-semibold text-(--color-on-tertiary-fixed)">
                  Recommended
                </span>
              ) : null}
            </div>
            <div className="mb-6 text-4xl font-bold tracking-[-0.03em]">
              {tier.price}
              <span className="ml-1 text-base font-medium text-(--color-on-surface-variant)">
                / month
              </span>
            </div>
            <ul className="mb-8 space-y-4 text-(--color-on-surface-variant)">
              {tier.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <Link href={tier.href}>
              <Button
                variant={tier.highlight ? "primary" : "secondary"}
                className="w-full"
              >
                {tier.cta}
              </Button>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
