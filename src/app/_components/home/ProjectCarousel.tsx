"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Project, ProjectTechIconMap } from "@/app/_types/home";
import { ProjectCard, VisualPosition } from "./ProjectCard";
import { ProjectDetailModal } from "./ProjectDetailModal";

interface ProjectCarouselProps {
  projects: Project[];
  techIcons?: ProjectTechIconMap;
}

const ANIMATION_DURATION_MS = 650;

function getVisualPositionStyles(pos: VisualPosition): React.CSSProperties {
  switch (pos) {
    case 0:
      return {
        transform: "translate3d(0%, 0px, 0px) rotateY(0deg) scale(1)",
        opacity: 1,
        filter: "blur(0px)",
        zIndex: 50,
        pointerEvents: "auto",
      };
    case -1:
      return {
        transform: "translate3d(-68%, 20px, -150px) rotateY(18deg) scale(0.82)",
        opacity: 0.88,
        filter: "blur(0px)",
        zIndex: 30,
        pointerEvents: "auto",
      };
    case 1:
      return {
        transform: "translate3d(68%, 20px, -150px) rotateY(-18deg) scale(0.82)",
        opacity: 0.88,
        filter: "blur(0px)",
        zIndex: 30,
        pointerEvents: "auto",
      };
    case -2:
      return {
        transform: "translate3d(-130%, 38px, -300px) rotateY(30deg) scale(0.60)",
        opacity: 0.35,
        filter: "blur(7px)",
        zIndex: 10,
        pointerEvents: "none",
      };
    case 2:
      return {
        transform: "translate3d(130%, 38px, -300px) rotateY(-30deg) scale(0.60)",
        opacity: 0.35,
        filter: "blur(7px)",
        zIndex: 10,
        pointerEvents: "none",
      };
  }
}

export function ProjectCarousel({ projects, techIcons }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [navDirection, setNavDirection] = useState<1 | -1>(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const totalProjects = projects.length;

  // Animation lock handler for rotating carousel
  const rotateTo = useCallback(
    (direction: 1 | -1) => {
      if (isAnimating || totalProjects === 0) return;

      setNavDirection(direction);
      setIsAnimating(true);
      setActiveIndex((prev) => {
        if (direction === 1) {
          return (prev + 1) % totalProjects;
        } else {
          return (prev - 1 + totalProjects) % totalProjects;
        }
      });

      setTimeout(() => {
        setIsAnimating(false);
      }, ANIMATION_DURATION_MS);
    },
    [isAnimating, totalProjects]
  );

  const handleNext = useCallback(() => rotateTo(1), [rotateTo]);
  const handlePrev = useCallback(() => rotateTo(-1), [rotateTo]);

  // Direct card click interaction
  const handleCardClick = (project: Project, pos: VisualPosition) => {
    if (isAnimating) return;

    if (pos === 0) {
      // Active card clicked -> open detail modal
      setSelectedProject(project);
      setIsModalOpen(true);
    } else if (pos === 1) {
      // Right side card clicked -> rotate next
      setNavDirection(1);
      handleNext();
    } else if (pos === -1) {
      // Left side card clicked -> rotate prev
      setNavDirection(-1);
      handlePrev();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, isModalOpen]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || isAnimating) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  if (totalProjects === 0) {
    return null;
  }

  // Active project metadata
  const activeProject = projects[activeIndex];
  const activeChapterNumber = String(activeIndex + 1).padStart(2, "0");
  const totalChaptersFormatted = String(totalProjects).padStart(2, "0");

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none py-4"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Upper Status & Telemetry Bar */}
      <div className="mx-auto mb-6 flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 font-mono text-[10px] tracking-[0.18em] uppercase">
        {/* Live status badge */}
        <div
          className="flex items-center gap-2.5 rounded-full border border-maroon/20 bg-maroon/8 backdrop-blur-sm px-3.5 py-1.5"
          style={{ boxShadow: "0 2px 12px rgba(90,23,31,0.08), inset 0 1px 0 rgba(255,255,255,0.5)" }}
        >
          <span className="flex h-1.5 w-1.5 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-maroon-glow opacity-70" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-maroon" />
          </span>
          <span className="text-ink-secondary tracking-[0.16em]">
            ORBITING SHOWCASE
          </span>
          <span className="text-maroon/40 mx-0.5">//</span>
          <span className="text-maroon font-bold tracking-[0.12em]">
            {activeChapterNumber} <span className="text-ink-muted font-normal">OF</span> {totalChaptersFormatted}
          </span>
        </div>

        {/* Orbit track position indicators */}
        <div className="flex items-center gap-1.5">
          {projects.map((p, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <button
                key={`indicator-${p.slug}`}
                type="button"
                onClick={() => {
                  if (isAnimating || idx === activeIndex) return;
                  setIsAnimating(true);
                  setActiveIndex(idx);
                  setTimeout(() => setIsAnimating(false), ANIMATION_DURATION_MS);
                }}
                className={`rounded-full transition-all duration-500 ease-out cursor-pointer ${
                  isCurrent
                    ? "h-2 w-7 bg-maroon shadow-[0_0_8px_2px_rgba(90,23,31,0.35)]"
                    : "h-2 w-2 bg-maroon/25 hover:bg-maroon/50 hover:scale-110"
                }`}
                style={isCurrent ? { boxShadow: "0 0 0 1px rgba(90,23,31,0.2), 0 0 8px 2px rgba(90,23,31,0.25)" } : {}}
                aria-label={`Jump to project chapter 0${idx + 1}: ${p.title}`}
              />
            );
          })}
        </div>
      </div>

      {/* 3D Spatial Orbit Stage Viewport */}
      <div
        className="relative mx-auto flex w-full max-w-7xl items-center justify-center h-[520px] sm:h-[550px] lg:h-[580px] overflow-hidden"
        style={{
          perspective: "1200px",
          perspectiveOrigin: "50% 50%",
          transformStyle: "preserve-3d",
        }}
      >
        {/*
         * Key by project slug — same DOM element persists across navigations.
         * When activeIndex changes, each element's style.transform changes,
         * and CSS transition-all animates the 3D movement smoothly.
         * Circular offset is normalized so the shortest arc is always taken.
         */}
        {projects.map((project, projectIdx) => {
          // Raw offset from active center
          let rawPos = projectIdx - activeIndex;

          // Circular normalization: pick shortest path around the loop
          if (rawPos * 2 > totalProjects) rawPos -= totalProjects;
          else if (rawPos * 2 < -totalProjects) rawPos += totalProjects;

          // Clamp to the 5-slot range for style lookup; hide anything beyond ±2
          const clampedPos = Math.max(-2, Math.min(2, rawPos)) as VisualPosition;
          const isInView = Math.abs(rawPos) <= 2;
          const chapterNum = String(projectIdx + 1).padStart(2, "0");

          return (
            <div
              key={`card-${project.slug}`}
              style={{
                ...getVisualPositionStyles(clampedPos),
                // Override opacity/pointer-events for truly-hidden cards
                ...(isInView ? {} : { opacity: 0, pointerEvents: "none" as const }),
                transformStyle: "preserve-3d" as const,
              }}
              className="absolute w-[84vw] max-w-[340px] sm:w-[460px] sm:max-w-[460px] lg:w-[540px] lg:max-w-[540px] transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center will-change-transform"
            >
              <ProjectCard
                project={project}
                chapterNumber={chapterNum}
                visualPosition={clampedPos}
                techIcons={techIcons}
                onCardClick={(proj) => handleCardClick(proj, clampedPos)}
                isAnimating={isAnimating}
              />
            </div>
          );
        })}
      </div>

      {/* Orbital Navigation Controls Bar — Unified Glassmorphism Panel */}
      <div className="mt-8 px-4">
        {/* Frosted glass panel wrapping all controls */}
        <div
          className="relative mx-auto max-w-3xl rounded-2xl border border-white/30 backdrop-blur-xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(247,244,238,0.12) 50%, rgba(90,23,31,0.08) 100%)",
            boxShadow:
              "0 8px 40px rgba(90,23,31,0.12), 0 2px 0 rgba(255,255,255,0.7) inset, 0 -1px 0 rgba(90,23,31,0.08) inset, 0 0 0 0.5px rgba(255,255,255,0.25)",
          }}
        >
          {/* Specular top highlight */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.8) 70%, transparent 100%)",
            }}
          />

          <div className="flex items-center gap-0 p-1.5">
            {/* ── PREVIOUS Button ── */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={isAnimating}
              aria-label="Orbit to previous project"
              className="group relative flex items-center gap-2 rounded-xl px-4 sm:px-5 py-3 font-mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-ink-secondary transition-all duration-300 hover:text-maroon disabled:opacity-40 cursor-pointer overflow-hidden"
              style={{
                background: "rgba(255,255,255,0)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(247,244,238,0.3) 100%)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 2px 12px rgba(90,23,31,0.08), inset 0 1px 0 rgba(255,255,255,0.8)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
            >
              <ChevronLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              <span>PREV</span>
            </button>

            {/* ── Divider ── */}
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-maroon/15 to-transparent shrink-0" />

            {/* ── Active Chapter Indicator (center, flex-grow) ── */}
            <div className="flex-1 flex items-center justify-center px-3 sm:px-5 py-2">
              {/* Inner glass pill — static shell */}
              <div
                className="relative flex items-center overflow-hidden rounded-xl px-4 sm:px-5 py-2.5 font-mono tracking-[0.16em] uppercase whitespace-nowrap"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(90,23,31,0.78) 0%, rgba(53,16,21,0.88) 60%, rgba(32,7,11,0.82) 100%)",
                  boxShadow:
                    "0 4px 24px rgba(90,23,31,0.3), 0 1px 0 rgba(255,255,255,0.2) inset, 0 -1px 0 rgba(0,0,0,0.15) inset",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {/* Inner specular shine */}
                <div
                  className="pointer-events-none absolute inset-x-3 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.6) 60%, transparent)",
                  }}
                />

                {/* Animated content — re-mounts on every index change to trigger CSS keyframe */}
                <div
                  key={activeIndex}
                  className={`flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] ${
                    navDirection === 1
                      ? "animate-chapter-from-right"
                      : "animate-chapter-from-left"
                  }`}
                >
                  {/* Chapter badge */}
                  <span
                    className="shrink-0 rounded-md px-2 py-0.5 font-semibold text-[8px] sm:text-[9px] tracking-[0.14em] text-beige"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    CH.{activeChapterNumber}
                  </span>

                  {/* Separator */}
                  <span className="text-white/20 font-thin shrink-0 text-base leading-none">/</span>

                  {/* Project title */}
                  <span className="truncate max-w-[100px] sm:max-w-[200px] md:max-w-[260px] font-bold text-milky-white tracking-wider drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] text-[10px] sm:text-[12px]">
                    {activeProject.title}
                  </span>
                </div>

                {/* Subtle ambient glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-30"
                  style={{
                    background: "radial-gradient(ellipse at 50% 120%, rgba(123,35,46,0.6) 0%, transparent 70%)",
                  }}
                />
              </div>
            </div>

            {/* ── Divider ── */}
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-maroon/15 to-transparent shrink-0" />

            {/* ── NEXT Button ── */}
            <button
              type="button"
              onClick={handleNext}
              disabled={isAnimating}
              aria-label="Orbit to next project"
              className="group relative flex items-center gap-2 rounded-xl px-4 sm:px-5 py-3 font-mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-ink-secondary transition-all duration-300 hover:text-maroon disabled:opacity-40 cursor-pointer"
              style={{ background: "rgba(255,255,255,0)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(247,244,238,0.3) 100%)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 2px 12px rgba(90,23,31,0.08), inset 0 1px 0 rgba(255,255,255,0.8)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
            >
              <span>NEXT</span>
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Interaction hint */}
        <div className="mt-3.5 text-center font-mono text-[8px] tracking-[0.18em] uppercase text-ink-muted/70">
          Click side cards or arrows to orbit · Click active card to inspect
        </div>
      </div>

      {/* Expandable Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        techIcons={techIcons}
      />
    </div>
  );
}
