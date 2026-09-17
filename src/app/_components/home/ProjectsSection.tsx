import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project, ProjectTechIconMap } from "@/app/_types/home";
import { ProjectCarousel } from "./ProjectCarousel";

type ProjectsSectionProps = {
  projects: Project[];
  techIcons: ProjectTechIconMap;
  sectionId?: string;
  title?: string;
  description?: string;
  showViewAllButton?: boolean;
  viewAllHref?: string;
  viewAllLabel?: string;
};

export function ProjectsSection({
  projects,
  techIcons,
  sectionId = "projects",
  title = "Selected Works",
  description = "A curated monograph of production systems, distributed web platforms, and mobile companions.",
  showViewAllButton = true,
  viewAllHref = "/projects",
  viewAllLabel = "View Complete Project Archive",
}: Readonly<ProjectsSectionProps>) {
  const totalChaptersFormatted = String(projects.length).padStart(2, "0");

  return (
    <section
      id={sectionId}
      className="scroll-mt-20 border-b border-beige/35 bg-surface-container-low py-16 md:py-24 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-beige/35 pb-8">
          <div>
            <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.22em] uppercase text-maroon font-semibold">
              <span className="whitespace-nowrap">[ CHAPTERS 01 — {totalChaptersFormatted} ]</span>
              <span className="hidden xs:inline-block h-[1px] w-4 sm:w-6 bg-maroon/40 shrink-0" />
              <span className="whitespace-nowrap text-ink-muted">ENGINEERING MONOGRAPHS</span>
            </div>
            <h2 className="mt-3 font-display text-[38px] leading-[1.08] font-bold tracking-[-0.02em] text-obsidian sm:text-[48px] md:text-[54px]">
              {title}
            </h2>
          </div>
          <p className="mt-4 max-w-md font-sans text-[15px] leading-[1.65] text-ink-secondary md:mt-0 md:text-right">
            {description}
          </p>
        </div>

        {/* 3D Spatial Orbit Showcase Carousel */}
        <div className="mt-8">
          <ProjectCarousel projects={projects} techIcons={techIcons} />
        </div>

        {/* View All Projects Trigger */}
        {showViewAllButton && (
          <div className="mt-12 border-t border-beige/35 pt-8 flex items-center justify-between gap-6">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-maroon/30 via-beige/50 to-transparent" />
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-3 border border-maroon bg-maroon px-7 py-3.5 font-mono text-[11px] tracking-[0.2em] uppercase text-milky-white transition-all duration-300 hover:bg-maroon-glow hover:border-maroon-glow shadow-sm"
            >
              <span>{viewAllLabel}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-maroon/30 via-beige/50 to-transparent" />
          </div>
        )}
      </div>
    </section>
  );
}
