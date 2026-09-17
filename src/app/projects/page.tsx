import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, Terminal } from "lucide-react";
import { ProjectsArchiveView } from "@/app/_components/projects";
import { allProjects, projectTechIcons } from "@/app/_data/home-data";

export const metadata: Metadata = {
  title: "Complete Works Archive | Muhammad Fauzan",
  description:
    "Comprehensive engineering archive of all production systems, web architectures, and mobile applications built by Muhammad Fauzan.",
};

export default function ProjectsPage() {
  const totalProjects = allProjects.length;
  const webProjects = allProjects.filter((p) => p.type.toLowerCase().includes("web")).length;
  const mobileProjects = allProjects.filter((p) => p.type.toLowerCase().includes("mobile")).length;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-maroon selection:text-milky-white">
      {/* Top Architectural Header */}
      <header className="sticky top-0 z-40 border-b border-milky-white/10 bg-obsidian/95 backdrop-blur-md text-cream-dark">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center border border-beige/30 bg-maroon text-milky-white font-display text-[12px] font-bold">
              F
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-milky-white font-semibold">
                M. FAUZAN
              </span>
              <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-cream-dark/50">
                COMPLETE ENGINEERING LEDGER
              </span>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-cream-dark/25 bg-transparent px-4 py-1.5 font-mono text-[10px] tracking-[0.16em] uppercase text-cream-dark transition-all duration-300 hover:border-maroon hover:bg-maroon hover:text-milky-white"
          >
            <ArrowLeft className="h-3 w-3" />
            <span>Return to Monograph</span>
          </Link>
        </div>
      </header>

      <main>
        {/* Archive Editorial Hero Banner */}
        <section className="border-b border-beige/35 bg-surface-container-low/70 py-12 md:py-16">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
            <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.22em] uppercase text-maroon font-semibold">
              <span className="whitespace-nowrap">[ ARCHIVE MONOGRAPH // 01 — {String(totalProjects).padStart(2, "0")} ]</span>
              <span className="hidden xs:inline-block h-[1px] w-5 sm:w-8 bg-maroon/40 shrink-0" />
              <span className="whitespace-nowrap text-ink-muted">UNABRIDGED LEDGER</span>
            </div>

            <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <h1 className="font-display text-[38px] sm:text-[48px] md:text-[56px] font-bold leading-[1.08] tracking-[-0.02em] text-obsidian">
                  Complete Works Archive
                </h1>
                <p className="mt-3 max-w-2xl font-sans text-[15px] sm:text-[16px] leading-[1.65] text-ink-secondary">
                  An unabridged ledger of all production web platforms, distributed cloud architectures,
                  and mobile applications engineered by Muhammad Fauzan.
                </p>
              </div>

              {/* Architectural Telemetry Stats Badges */}
              <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-wider uppercase">
                <div className="border border-beige/50 bg-milky-white px-3.5 py-2">
                  <span className="text-ink-muted">TOTAL WORKS: </span>
                  <span className="font-bold text-maroon">{String(totalProjects).padStart(2, "0")}</span>
                </div>
                <div className="border border-beige/50 bg-milky-white px-3.5 py-2">
                  <span className="text-ink-muted">WEB PLATFORMS: </span>
                  <span className="font-bold text-obsidian">{String(webProjects).padStart(2, "0")}</span>
                </div>
                <div className="border border-beige/50 bg-milky-white px-3.5 py-2">
                  <span className="text-ink-muted">MOBILE APPS: </span>
                  <span className="font-bold text-obsidian">{String(mobileProjects).padStart(2, "0")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Archive View: Pill Filters & Large Box Cards */}
        <ProjectsArchiveView projects={allProjects} techIcons={projectTechIcons} />
      </main>

      <footer className="border-t border-milky-white/10 bg-obsidian py-8 text-center font-mono text-[10px] tracking-[0.16em] uppercase text-cream-dark/45">
        <span>© {new Date().getFullYear()} MUHAMMAD FAUZAN · ALL RIGHTS RESERVED</span>
      </footer>
    </div>
  );
}
