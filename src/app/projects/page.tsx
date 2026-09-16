import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectsSection } from "@/app/_components/home";
import { allProjects, projectTechIcons } from "@/app/_data/home-data";

export const metadata: Metadata = {
  title: "Complete Works Archive | Muhammad Fauzan",
  description:
    "Comprehensive engineering archive of all production systems, web architectures, and mobile applications built by Muhammad Fauzan.",
};

export default function ProjectsPage() {
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
        <ProjectsSection
          sectionId="all-projects"
          projects={allProjects}
          techIcons={projectTechIcons}
          title="Complete Engineering Archive"
          description="The unedited ledger of all production web platforms, distributed systems, and mobile applications."
          showViewAllButton={false}
        />
      </main>

      <footer className="border-t border-milky-white/10 bg-obsidian py-8 text-center font-mono text-[10px] tracking-[0.16em] uppercase text-cream-dark/45">
        <span>© {new Date().getFullYear()} MUHAMMAD FAUZAN · ALL RIGHTS RESERVED</span>
      </footer>
    </div>
  );
}
