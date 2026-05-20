"use client";

import Link from "next/link";
import { Button } from "@/ui/shared-components/button";
import { mockJobs } from "@/lib/utils/mock-jobs";
import { siteConfig } from "@/lib/utils/site";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Logo, LogoFull } from "@/ui/product-components/logo";

const signals = [
  "AI-POWERED HUNT",
  "AUTONOMOUS DISCOVERY",
  "NEURAL MATCHING",
  "CV-TO-ROLE ENGINE",
  "DEEP WEB INDEXING",
  "PREDICTIVE ALIGNMENT",
];

const steps = [
  {
    title: "Upload your CV",
    body: "Our parser extracts your core DNA. We dont just look for keywords; we look for your next big move.",
  },
  {
    title: "AI Hunts the Web",
    body: "Our engine indexes global remote roles daily. It hunts for roles that 99%% of boards miss.",
  },
  {
    title: "Apply & Conquer",
    body: "Get a ranked feed of roles you actually want. One-click access to original sources. Zero noise.",
  },
];

type HomeClientProps = {
  isAuthenticated: boolean;
};

export default function HomeClient({ isAuthenticated }: HomeClientProps) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const skew = useTransform(scrollYProgress, [0, 0.2], [0, 10]);
  const xLeft = useTransform(sectionProgress, [0, 0.5], [-50, 0]);
  const xRight = useTransform(sectionProgress, [0, 0.5], [50, 0]);

  return (
    <main className="overflow-x-hidden bg-white selection:bg-(--color-accent-yellow) selection:text-black">
      {/* Hero Section - Consolidated to one page */}
      <section className="page-shell flex h-screen min-h-200 flex-col py-6">
        <header className="relative flex flex-1 flex-col gap-6 overflow-hidden border-[6px] border-black bg-white px-6 py-6 md:px-12 md:py-10">
          <motion.div
            animate={{ rotate: [0, 5, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-(--color-accent-yellow) opacity-10 blur-3xl"
          />

          <nav className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-6"
            >
              <Link href="/">
                <Logo className="h-10 w-10" />
              </Link>
              <div className="hidden flex-col md:flex">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                  />
                  <span className="text-[10px] font-black tracking-widest text-black uppercase">
                    Status: Active
                  </span>
                </div>
                <span className="text-[9px] font-black tracking-[0.2em] text-black/30 uppercase">
                  Neural_Engine_Indexing...
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 12 }}
              className="flex flex-wrap items-center gap-8 text-sm font-[1000] tracking-widest text-black uppercase"
            >
              <Link
                href="/login"
                className="px-2 transition-colors hover:bg-black hover:text-(--color-accent-yellow)"
              >
                Login
              </Link>
              <Link
                href="/pricing"
                className="px-2 transition-colors hover:bg-black hover:text-(--color-accent-yellow)"
              >
                Pricing
              </Link>
              <Link
                href={isAuthenticated ? "/dashboard" : "/signup"}
                className="group relative overflow-hidden bg-black px-8 py-3 text-white"
              >
                <span className="relative z-10">
                  {isAuthenticated ? "Dashboard" : "Get Started"}
                </span>
                <motion.div
                  className="absolute inset-0 bg-(--color-accent-yellow)"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ type: "tween" }}
                />
              </Link>
            </motion.div>
          </nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative z-10 grid flex-1 gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center"
          >
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                {signals.slice(0, 3).map((s) => (
                  <motion.span
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    key={s}
                    className="cursor-default border-[3px] border-black bg-white px-3 py-1 text-[10px] font-black tracking-tighter uppercase transition-colors hover:bg-(--color-accent-yellow)"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>

              <motion.h1
                style={{ skewX: skew }}
                className="max-w-4xl text-[clamp(2.5rem,10vw,7.5rem)] leading-[0.8] font-[1000] tracking-[-0.08em] text-black uppercase italic"
              >
                Get Hired <br />
                <span className="text-(--color-accent-yellow)">
                  Faster.
                </span>{" "}
                <br />
                Search <br />
                Smarter.
              </motion.h1>

              <div className="space-y-6">
                <p className="max-w-xl text-xl leading-none font-black tracking-tighter text-black/70 uppercase italic">
                  The board-scrolling era is dead. <br />
                  <span className="text-black">
                    Upload your CV. Let the engine hunt.
                  </span>
                </p>

                <div className="flex flex-wrap gap-6">
                  <Link href={isAuthenticated ? "/dashboard" : "/signup"}>
                    <Button
                      size="lg"
                      className="h-16 rounded-none bg-black px-12 text-xl font-[1000] tracking-tighter text-white uppercase italic shadow-[8px_8px_0px_0px_rgba(250,204,21,1)] transition-all hover:scale-105 hover:bg-(--color-accent-yellow) hover:text-black hover:shadow-none active:scale-95"
                    >
                      {isAuthenticated ? "Update CV →" : "Upload CV →"}
                    </Button>
                  </Link>
                  <Link href="/jobs">
                    <Button
                      variant="ghost"
                      size="lg"
                      className="h-16 rounded-none border-[6px] border-black px-12 text-xl font-[1000] tracking-tighter text-black uppercase italic transition-all hover:scale-105 hover:bg-black hover:text-white"
                    >
                      Explore
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              initial={{ rotate: 5, opacity: 0 }}
              animate={{ rotate: 5, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative ml-auto max-w-md border-[6px] border-black bg-white p-6 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="mb-4 flex items-center justify-between border-b-4 border-black pb-4">
                  <motion.p
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-sm font-[1000] tracking-[0.3em] uppercase"
                  >
                    ● LIVE_SIGNAL
                  </motion.p>
                  <Link
                    href="/jobs"
                    className="text-xs font-bold text-(--color-accent-yellow) uppercase"
                  >
                    View all
                  </Link>
                </div>

                <div className="space-y-6">
                  {mockJobs.slice(0, 2).map((job, idx) => (
                    <motion.article
                      key={job.slug}
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1 + idx * 0.2 }}
                      className="group flex flex-col gap-2"
                    >
                      <div className="flex items-start justify-between">
                        <Link
                          href={`/jobs/${job.slug}`}
                          className="inline-block"
                        >
                          <h3 className="text-lg font-[1000] tracking-tighter uppercase italic group-hover:text-(--color-accent-yellow)">
                            {job.title}
                          </h3>
                        </Link>
                        {job.premium && (
                          <span className="ml-2 rounded bg-amber-400 px-2 py-1 text-xs font-bold uppercase">
                            Premium
                          </span>
                        )}
                      </div>

                      <p className="text-[12px] font-black tracking-tight text-black/60 uppercase">
                        {job.company} <span className="mx-1">•</span>{" "}
                        {job.location} <span className="mx-1">•</span>{" "}
                        {job.locationType}
                      </p>

                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold text-(--color-accent-yellow)">
                          {job.salary}
                        </p>
                        <p className="text-xs text-(--color-on-surface-variant) uppercase">
                          {job.postedAt}
                        </p>
                      </div>

                      <p className="text-sm text-(--color-on-surface-variant)">
                        {job.summary}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-(--color-surface-container) px-2 py-1 text-xs font-medium text-(--color-on-surface-variant)"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2">
                        <Link href={`/jobs/${job.slug}`}>
                          <Button size="sm" className="rounded-none">
                            View
                          </Button>
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </header>
      </section>

      {/* Infinite Ticker */}
      <section className="scale-105 -rotate-1 overflow-hidden border-y-[6px] border-black bg-black py-6">
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-40 px-20"
          >
            {[...signals, ...signals, ...signals].map((s, i) => (
              <span
                key={i}
                className="outline-text flex items-center gap-12 text-5xl font-[1000] text-white uppercase italic"
              >
                {s}{" "}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: 45 }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-6 w-6 bg-(--color-accent-yellow)"
                />
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="page-shell mt-20">
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, backgroundColor: "#facc15" }}
              key={step.title}
              className="group relative overflow-hidden border-4 border-black bg-white p-8 transition-all duration-300"
            >
              <span className="absolute -top-4 -right-2 text-8xl font-[1000] italic opacity-5 transition-opacity group-hover:opacity-10">
                0{index + 1}
              </span>
              <h2 className="relative z-10 mb-4 text-3xl leading-none font-[1000] tracking-tighter uppercase italic">
                {step.title}
              </h2>
              <p className="relative z-10 text-base leading-tight font-black opacity-80 group-hover:opacity-100">
                {step.body}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* NO MORE WASTE */}
      <section ref={sectionRef} className="page-shell relative mt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col overflow-hidden border-8 border-black bg-white md:flex-row"
        >
          <motion.div
            style={{ x: xLeft }}
            className="min-w-0 flex-1 border-b-8 border-black bg-(--color-accent-yellow) p-12 md:border-r-8 md:border-b-0 md:p-16"
          >
            <h2 className="mb-10 text-6xl leading-[0.75] font-[1000] tracking-[-0.08em] uppercase italic md:text-7xl">
              THE SEARCH <br />{" "}
              <span className="mt-2 inline-block bg-black px-4 text-white">
                EVOLVED.
              </span>
            </h2>
            <p className="text-xl font-[1000] tracking-tighter uppercase italic">
              Remote jobs found by AI. Ranked for your profile. Built for speed.
            </p>
          </motion.div>
          <motion.div
            style={{ x: xRight }}
            className="grid min-w-0 flex-1 grid-cols-2 bg-black"
          >
            {[
              "REMOTE-FIRST",
              "NEURAL MATCHING",
              "AUTONOMOUS SEARCH",
              "CV-TO-ROLE ENGINE",
              "GLOBAL ACCESS",
              "ZERO FRICTION",
            ].map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="flex items-center justify-center border-r border-b border-white/10 p-6 text-center text-base leading-none font-[1000] wrap-break-word text-white uppercase italic transition-colors hover:bg-(--color-accent-yellow) hover:text-black md:p-8"
              >
                {f}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="page-shell mt-32 mb-10 flex flex-col items-start justify-between gap-12 border-t-[6px] border-black pt-12 md:flex-row">
        <div className="space-y-4">
          <Link href="/">
            <LogoFull />
          </Link>
          <p className="ml-14 text-xs font-black tracking-[0.2em] text-black/50 uppercase">
            {siteConfig.tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-12 text-sm font-[1000] tracking-widest uppercase italic">
          <div className="space-y-4">
            <p className="not-italic opacity-30">Social</p>
            <Link
              href="https://github.com/Shivansh-Kumar-007"
              target="_blank"
              className="flex items-center gap-2 px-2 transition-colors hover:bg-black hover:text-white"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </Link>
          </div>
          <div className="space-y-4">
            <p className="not-italic opacity-30">Legal</p>
            <Link href="#" className="block hover:line-through">
              Terms
            </Link>
            <Link href="#" className="block hover:line-through">
              Privacy
            </Link>
          </div>
        </div>

        <div className="space-y-2 md:text-right">
          <p className="text-xs font-black uppercase opacity-20">
            Optimized for Remote Search
          </p>
          <p className="text-sm font-[1000] uppercase italic">
            © 2026 YOUJOB INC.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        .outline-text {
          -webkit-text-stroke: 2px white;
          color: transparent;
        }
      `}</style>
    </main>
  );
}
