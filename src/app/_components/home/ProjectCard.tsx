"use client";

import Image from "next/image";
import { BookOpen, Layers } from "lucide-react";
import type { Project, ProjectTechIconMap } from "@/app/_types/home";

export type VisualPosition = -2 | -1 | 0 | 1 | 2;

interface ProjectCardProps {
  project: Project;
  chapterNumber: string;
  visualPosition: VisualPosition;
  techIcons?: ProjectTechIconMap;
  onCardClick: (project: Project) => void;
  isAnimating: boolean;
}

export function ProjectCard({
  project,
  chapterNumber,
  visualPosition,
  techIcons,
  onCardClick,
  isAnimating,
}: ProjectCardProps) {
  const isActive = visualPosition === 0;
  const isSide = Math.abs(visualPosition) === 1;
  const isTeaser = Math.abs(visualPosition) === 2;

  const handleClick = (e: React.MouseEvent) => {
    if (isAnimating) return;
    onCardClick(project);
  };

  return (
    <article
      onClick={handleClick}
      tabIndex={isActive ? 0 : -1}
      role="button"
      aria-label={`${project.title} - Chapter ${chapterNumber}. ${
        isActive ? "Click to inspect details." : "Click to rotate into focus."
      }`}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && !isAnimating) {
          e.preventDefault();
          onCardClick(project);
        }
      }}
      className={`w-full relative cursor-pointer select-none border transition-colors duration-300 ${
        isActive
          ? "border-maroon/70 bg-surface-container-lowest shadow-2xl hover:border-maroon"
          : isSide
          ? "border-beige/50 bg-surface-container-lowest/95 shadow-lg hover:border-maroon/40"
          : "border-beige/30 bg-surface-container-low/80 shadow-sm"
      }`}
    >
      {/* Precision Corner Brackets for active and side cards */}
      <div className="absolute top-1.5 left-1.5 z-20 h-2.5 w-2.5 border-t-2 border-l-2 border-maroon/70 pointer-events-none" />
      <div className="absolute top-1.5 right-1.5 z-20 h-2.5 w-2.5 border-t-2 border-r-2 border-maroon/70 pointer-events-none" />
      <div className="absolute bottom-1.5 left-1.5 z-20 h-2.5 w-2.5 border-b-2 border-l-2 border-maroon/70 pointer-events-none" />
      <div className="absolute bottom-1.5 right-1.5 z-20 h-2.5 w-2.5 border-b-2 border-r-2 border-maroon/70 pointer-events-none" />

      {/* Top Telemetry Header Ribbon */}
      <div className="flex items-center justify-between border-b border-beige/25 bg-surface-container-low/80 px-4 py-2.5 font-mono text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-ink-secondary">
        <div className="flex items-center gap-2">
          <span
            className={`px-1.5 py-0.5 font-semibold transition-colors ${
              isActive ? "bg-maroon text-milky-white" : "bg-beige/40 text-ink"
            }`}
          >
            CHAPTER {chapterNumber}
          </span>
          <span className="truncate max-w-[120px] sm:max-w-[180px] text-obsidian font-medium">
            {project.type}
          </span>
        </div>

        <div className="flex items-center gap-2 text-ink-muted">
          <span className="hidden sm:inline">ROLE: {project.role}</span>
          <span className="hidden sm:inline">·</span>
          <span>{project.team}</span>
        </div>
      </div>

      {/* Hero Image Plate */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-obsidian-surface">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 480px, 560px"
          priority={isActive}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Subtle Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent pointer-events-none" />

        {/* Reticle caption overlay */}
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between font-mono text-[8px] sm:text-[9px] tracking-[0.14em] text-beige/80 uppercase pointer-events-none">
          <span>FIG. {chapterNumber}A — ARCHIVE SPEC</span>
          <span className="flex items-center gap-1">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isActive ? "bg-emerald-400 animate-pulse" : "bg-beige/60"
              }`}
            />
            {isActive ? "ACTIVE VIEW" : "ORBITING"}
          </span>
        </div>
      </div>

      {/* Editorial Content Bottom Block */}
      <div className="p-4 sm:p-5 bg-surface-container-lowest">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-[20px] sm:text-[24px] lg:text-[26px] font-bold tracking-tight text-obsidian leading-[1.1] truncate">
            {project.title}
          </h3>

          {isActive && (
            <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-maroon font-semibold shrink-0">
              <Layers className="h-3 w-3" />
              <span>INSPECT</span>
            </span>
          )}
        </div>

        <p className="mt-2 line-clamp-2 font-sans text-[12px] sm:text-[13px] leading-[1.6] text-ink-secondary">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="mt-3.5 flex flex-wrap gap-1.5 overflow-hidden max-h-[58px]">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={`${project.slug}-${tag}`}
              className="inline-flex items-center gap-1 border border-beige/40 bg-surface-container-low/70 px-2 py-0.5 font-mono text-[9px] tracking-[0.1em] uppercase text-ink"
            >
              <span className="h-1 w-1 rounded-full bg-maroon/70" />
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="font-mono text-[9px] text-ink-muted self-center px-1">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Active Card Call To Action Hint */}
        {isActive ? (
          <div className="mt-4 flex items-center justify-between border-t border-beige/25 pt-3 font-mono text-[9px] tracking-[0.14em] uppercase text-ink-muted">
            <span className="text-maroon font-medium">Click to open full monograph</span>
            <span className="flex items-center gap-1 text-obsidian font-semibold">
              <span>EXPLORE</span>
              <BookOpen className="h-3 w-3 text-maroon" />
            </span>
          </div>
        ) : (
          <div className="mt-4 flex items-center justify-between border-t border-beige/20 pt-3 font-mono text-[9px] tracking-[0.14em] uppercase text-ink-muted/80">
            <span>ORBIT TRACK</span>
            <span className="text-maroon font-medium">Click to rotate</span>
          </div>
        )}
      </div>
    </article>
  );
}
