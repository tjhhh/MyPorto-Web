import type { Metadata } from "next";
import Link from "next/link";
import { ProjectsSection } from "@/app/_components/home";
import { allProjects, projectTechIcons } from "@/app/_data/home-data";

export const metadata: Metadata = {
  title: "All Projects | Portfolio",
  description: "Kumpulan lengkap project yang pernah saya kerjakan.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <header className="sticky top-0 z-40 border-b border-outline-variant bg-surface-container-lowest/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 md:flex-nowrap md:px-8 md:py-4">
          <div className="min-w-0">
            <p className="font-space text-[10px] tracking-[0.14em] text-on-surface-variant uppercase sm:text-[11px]">Portfolio</p>
            <h1 className="truncate text-[18px] font-semibold text-on-surface sm:text-[20px]">All Projects</h1>
          </div>
          <Link
            href="/"
            className="inline-flex h-10 items-center border border-outline-variant bg-surface-container px-4 font-space text-[10px] tracking-[0.12em] text-on-surface uppercase transition-colors duration-300 ease-out hover:border-primary hover:text-primary"
          >
            Home
          </Link>
        </div>
      </header>

      <main>
        <ProjectsSection
          sectionId="all-projects"
          projects={allProjects}
          techIcons={projectTechIcons}
          title="Semua Projects"
          description="Semua project yang sudah saya bangun, dari website hingga mobile application."
          showViewAllButton={false}
        />
      </main>
    </div>
  );
}
