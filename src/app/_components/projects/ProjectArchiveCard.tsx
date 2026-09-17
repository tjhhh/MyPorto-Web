"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Eye, Globe } from "lucide-react";
import type { Project, ProjectTechIconMap } from "@/app/_types/home";
import { projectsRegistry } from "@/app/_data/projects-registry";


interface ProjectArchiveCardProps {
  project: Project;
  chapterNumber: string;
  techIcons?: ProjectTechIconMap;
  onQuickInspect: (project: Project) => void;
  priority?: boolean;
}

export function ProjectArchiveCard({
  project,
  chapterNumber,
  techIcons,
  onQuickInspect,
  priority = false,
}: ProjectArchiveCardProps) {
  const detailData = projectsRegistry[project.slug];
  const metrics = detailData?.hero?.metrics?.slice(0, 2) || [];
  const isMobile = project.type.toLowerCase().includes("mobile");

  return (
    <article className="group relative flex flex-col justify-between border border-beige/40 bg-surface-container-lowest transition-all duration-300 hover:border-maroon/80 hover:shadow-2xl">
      {/* Precision Corner Brackets */}
      <div className="pointer-events-none absolute top-2 left-2 z-20 h-3 w-3 border-t-2 border-l-2 border-maroon/60 transition-colors duration-300 group-hover:border-maroon" />
      <div className="pointer-events-none absolute top-2 right-2 z-20 h-3 w-3 border-t-2 border-r-2 border-maroon/60 transition-colors duration-300 group-hover:border-maroon" />
      <div className="pointer-events-none absolute bottom-2 left-2 z-20 h-3 w-3 border-b-2 border-l-2 border-maroon/60 transition-colors duration-300 group-hover:border-maroon" />
      <div className="pointer-events-none absolute bottom-2 right-2 z-20 h-3 w-3 border-b-2 border-r-2 border-maroon/60 transition-colors duration-300 group-hover:border-maroon" />

      {/* Top Telemetry Header Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-beige/30 bg-surface-container-low/90 px-4 py-3 font-mono text-[10px] tracking-[0.16em] uppercase text-ink-secondary">
        <div className="flex items-center gap-2">
          <span className="bg-maroon px-2 py-0.5 font-bold tracking-widest text-milky-white">
            CHAPTER {chapterNumber}
          </span>
          <span className="border border-beige/50 bg-milky-white px-2 py-0.5 font-medium text-obsidian">
            {isMobile ? "MOBILE APPARATUS" : "WEB PLATFORM"}
          </span>
        </div>

        <div className="flex items-center gap-2 text-ink-muted">
          <span>ROLE: {project.role}</span>
          <span>·</span>
          <span>{project.team}</span>
        </div>
      </div>

      {/* Hero Visual Plate (Large Box Preview) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-obsidian-surface">
        <Image
          src={project.image}
          alt={`${project.title} monograph visual`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Dark Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent" />

        {/* Reticle caption overlay at bottom of image */}
        <div className="pointer-events-none absolute right-3 bottom-3 left-3 flex items-center justify-between font-mono text-[9px] tracking-[0.14em] text-beige uppercase">
          <span>FIG. {chapterNumber}A · ARCHIVE SPEC</span>
          <span className="flex items-center gap-1.5 bg-obsidian/70 px-2 py-0.5 backdrop-blur-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-milky-white">
              {project.liveUrl ? "LIVE DEPLOYMENT" : "STABLE BUILD"}
            </span>
          </span>
        </div>

        {/* Quick Inspect Hover Trigger Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-obsidian/40 backdrop-blur-[2px]">
          <button
            type="button"
            onClick={() => onQuickInspect(project)}
            className="flex items-center gap-2 border border-beige/80 bg-obsidian/90 px-4 py-2 font-mono text-[11px] tracking-[0.18em] uppercase text-milky-white transition-transform duration-200 hover:scale-105 hover:bg-maroon hover:border-maroon shadow-lg"
          >
            <Eye className="h-3.5 w-3.5" />
            <span>Quick Inspect Specs</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-maroon font-semibold">
                {project.type}
              </span>
              <h3 className="mt-1 font-display text-[24px] sm:text-[28px] font-bold leading-[1.15] tracking-tight text-obsidian transition-colors group-hover:text-maroon">
                {project.title}
              </h3>
            </div>
          </div>

          <p className="mt-3 font-sans text-[13px] sm:text-[14px] leading-[1.65] text-ink-secondary">
            {project.description}
          </p>

          {/* Highlight Key Metrics (if available in registry) */}
          {metrics.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-beige/25 pt-3">
              {metrics.map((metric) => (
                <div
                  key={`${project.slug}-${metric.label}`}
                  className="border border-beige/35 bg-surface-container-low/60 px-3 py-2"
                >
                  <span className="block font-mono text-[9px] tracking-wider uppercase text-ink-muted">
                    {metric.label}
                  </span>
                  <span className="mt-0.5 block font-display text-[15px] sm:text-[16px] font-bold text-maroon">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="mt-4 flex flex-wrap items-center gap-1.5">
            {project.tags.map((tag) => {
              const iconUrl = techIcons?.[tag];
              return (
                <span
                  key={`${project.slug}-${tag}`}
                  className="inline-flex items-center gap-1.5 border border-beige/40 bg-surface-container-low/70 px-2.5 py-1 font-mono text-[9px] tracking-[0.1em] uppercase text-ink transition-colors hover:border-maroon/50"
                >
                  {iconUrl ? (
                    <img
                      src={iconUrl}
                      alt=""
                      className="h-2.5 w-2.5 object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="h-1 w-1 rounded-full bg-maroon/70" />
                  )}
                  <span>{tag}</span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Action Controls Footer */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-beige/30 pt-4">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={project.detailHref}
              className="inline-flex items-center gap-2 border border-maroon bg-maroon px-4 py-2 font-mono text-[10px] tracking-[0.18em] uppercase text-milky-white transition-all duration-300 hover:bg-maroon-glow hover:border-maroon-glow shadow-sm"
            >
              <span>View Monograph</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            <button
              type="button"
              onClick={() => onQuickInspect(project)}
              className="inline-flex items-center gap-1.5 border border-beige/60 bg-transparent px-3.5 py-2 font-mono text-[10px] tracking-[0.16em] uppercase text-ink transition-all duration-300 hover:border-maroon hover:bg-surface-container hover:text-maroon"
            >
              <Eye className="h-3 w-3" />
              <span>Inspect</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Open Live Deployment"
                className="flex h-8 w-8 items-center justify-center border border-beige/40 text-ink-secondary transition-all hover:border-maroon hover:bg-maroon hover:text-milky-white"
              >
                <Globe className="h-3.5 w-3.5" />
              </a>
            )}

          </div>
        </div>
      </div>
    </article>
  );
}
