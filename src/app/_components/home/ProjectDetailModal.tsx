"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Sparkles,
} from "lucide-react";
import type { Project, ProjectTechIconMap } from "@/app/_types/home";
import { projectsRegistry } from "@/app/_data/projects-registry";

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  techIcons?: ProjectTechIconMap;
}

export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
  techIcons,
}: ProjectDetailModalProps) {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Close animation handler
  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 280);
  }, [onClose]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          handleClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isZoomed, handleClose]);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setMounted(true);
      setSelectedImageIdx(0);
      setIsZoomed(false);
      setIsClosing(false);
    } else {
      document.body.style.overflow = "";
      setMounted(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  // Retrieve rich detail data from registry if available
  const detailData = projectsRegistry[project.slug];

  // Aggregate project images for gallery
  const galleryImages: { src: string; caption: string }[] = [
    { src: project.image, caption: "Overview & Hero System" },
  ];

  if (detailData?.showcase?.features) {
    detailData.showcase.features.forEach((feature) => {
      if (feature.image && !galleryImages.some((img) => img.src === feature.image)) {
        galleryImages.push({
          src: feature.image,
          caption: feature.title,
        });
      }
    });
  }

  // Key capabilities
  const capabilities =
    detailData?.capabilities?.map((c) => ({
      title: c.title,
      description: c.description,
    })) ||
    project.tags.map((tag) => ({
      title: tag,
      description: "Integrated core dependency and architecture component.",
    }));

  // Core features from showcase
  const coreFeatures = detailData?.showcase?.features ?? [];

  const activeImage = galleryImages[selectedImageIdx] || galleryImages[0];
  const totalImages = galleryImages.length;

  const handlePrevImage = () => {
    setSelectedImageIdx((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleNextImage = () => {
    setSelectedImageIdx((prev) => (prev + 1) % totalImages);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 bg-obsidian-surface/88 backdrop-blur-md transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Modal Window */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative z-10 w-full max-w-[96vw] border border-beige/35 bg-surface-container-lowest shadow-2xl transition-all duration-300 overflow-hidden flex flex-col ${
          isClosing
            ? "scale-95 opacity-0 translate-y-2"
            : mounted
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-2"
        }`}
        style={{ maxHeight: "92vh" }}
      >
        {/* Corner marks */}
        <div className="absolute top-2 left-2 z-30 h-3 w-3 border-t-2 border-l-2 border-maroon pointer-events-none" />
        <div className="absolute top-2 right-2 z-30 h-3 w-3 border-t-2 border-r-2 border-maroon pointer-events-none" />
        <div className="absolute bottom-2 left-2 z-30 h-3 w-3 border-b-2 border-l-2 border-maroon pointer-events-none" />
        <div className="absolute bottom-2 right-2 z-30 h-3 w-3 border-b-2 border-r-2 border-maroon pointer-events-none" />

        {/* Header Bar */}
        <div className="flex shrink-0 items-center justify-between border-b border-beige/35 bg-surface-container-low px-4 py-3 sm:px-6 font-mono text-[10px] tracking-[0.18em] uppercase text-ink-secondary">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="bg-maroon px-2 py-0.5 text-milky-white font-semibold">
              PROJECT DOSSIER
            </span>
            <span className="h-[1px] w-4 bg-maroon/40 hidden sm:inline-block" />
            <span className="text-obsidian font-medium truncate max-w-[180px] sm:max-w-none">
              {project.title} · {project.type}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-ink-muted text-[9px]">[ESC TO CLOSE]</span>
            <button
              type="button"
              onClick={handleClose}
              className="inline-flex h-8 w-8 items-center justify-center border border-beige/40 bg-surface-container text-ink transition-colors hover:border-maroon hover:bg-maroon hover:text-milky-white"
              aria-label="Close Project Detail Modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Body: 40/60 Split */}
        <div className="flex flex-col lg:flex-row flex-1 min-h-0">

          {/* ── LEFT PANEL (40%) — Image Gallery ── */}
          <div className="lg:w-2/5 shrink-0 flex flex-col bg-obsidian-surface border-b lg:border-b-0 lg:border-r border-beige/20">

            {/* Main Image Viewer */}
            <div className="relative flex-1 min-h-0 group">
              <div className="relative w-full h-full min-h-[200px] lg:min-h-0">
                <Image
                  src={activeImage.src}
                  alt={`${project.title} — ${activeImage.caption}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                  className="object-contain transition-opacity duration-300"
                />
                {/* Dark vignette bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent pointer-events-none" />

                {/* Zoom toggle button */}
                <button
                  type="button"
                  onClick={() => setIsZoomed(true)}
                  className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-obsidian/60 text-beige/70 backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:text-milky-white hover:bg-obsidian/80 opacity-0 group-hover:opacity-100"
                  aria-label="Zoom image"
                >
                  <ZoomIn className="h-3.5 w-3.5" />
                </button>

                {/* Caption plate overlay */}
                <div className="absolute bottom-0 inset-x-0 flex items-center justify-between px-3.5 py-2.5 font-mono text-[9px] tracking-[0.14em] text-beige/80 uppercase">
                  <span className="truncate max-w-[60%]">{activeImage.caption}</span>
                  <span className="text-beige/50">
                    PLATE {selectedImageIdx + 1} / {totalImages}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Controls + Dots */}
            <div className="shrink-0 flex items-center justify-between border-t border-white/8 bg-obsidian/30 px-3 py-2.5 backdrop-blur-sm">
              <button
                type="button"
                onClick={handlePrevImage}
                disabled={totalImages <= 1}
                aria-label="Previous image"
                className="group flex h-8 w-8 items-center justify-center rounded-lg border border-white/12 bg-white/5 text-beige/60 transition-all duration-200 hover:border-maroon/50 hover:bg-maroon/20 hover:text-milky-white disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              </button>

              {/* Dot indicators */}
              <div className="flex items-center gap-1.5 px-2">
                {galleryImages.map((_, idx) => {
                  const isActive = idx === selectedImageIdx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImageIdx(idx)}
                      aria-label={`View image ${idx + 1}`}
                      className={`rounded-full transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "h-1.5 w-5 bg-maroon shadow-[0_0_6px_1px_rgba(90,23,31,0.5)]"
                          : "h-1.5 w-1.5 bg-white/25 hover:bg-white/50"
                      }`}
                    />
                  );
                })}
              </div>

              <button
                type="button"
                onClick={handleNextImage}
                disabled={totalImages <= 1}
                aria-label="Next image"
                className="group flex h-8 w-8 items-center justify-center rounded-lg border border-white/12 bg-white/5 text-beige/60 transition-all duration-200 hover:border-maroon/50 hover:bg-maroon/20 hover:text-milky-white disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Thumbnail Strip */}
            {totalImages > 1 && (
              <div className="shrink-0 border-t border-white/8 bg-obsidian/50 p-2.5">
                <div className="flex gap-1.5 overflow-x-auto scrollbar-hide">
                  {galleryImages.map((img, idx) => {
                    const isSelected = idx === selectedImageIdx;
                    return (
                      <button
                        key={img.src}
                        type="button"
                        onClick={() => setSelectedImageIdx(idx)}
                        aria-label={`View plate ${idx + 1}: ${img.caption}`}
                        className={`group relative shrink-0 w-[72px] aspect-[16/10] overflow-hidden rounded-md border transition-all duration-200 ${
                          isSelected
                            ? "border-maroon ring-1 ring-maroon/30 opacity-100"
                            : "border-white/15 opacity-50 hover:opacity-85 hover:border-white/30"
                        }`}
                      >
                        <Image
                          src={img.src}
                          alt={img.caption}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                        {isSelected && (
                          <div className="absolute inset-0 bg-maroon/10" />
                        )}
                        <span className="absolute bottom-0 inset-x-0 bg-obsidian/80 py-0.5 text-center font-mono text-[7px] text-milky-white/80">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT PANEL (60%) — Project Info ── */}
          <div className="lg:w-3/5 flex flex-col min-h-0">
            {/* Scrollable info content */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 lg:p-7 space-y-0">

              {/* Breadcrumb label */}
              <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.18em] uppercase text-maroon font-semibold">
                <span>[ SPECIFICATION DOSSIER ]</span>
                <span className="h-[1px] w-5 bg-maroon/40" />
                <span className="text-ink-muted">{project.team} EXECUTION</span>
              </div>

              {/* Project title */}
              <h2
                id="modal-project-title"
                className="mt-3 font-display text-[24px] sm:text-[30px] font-bold leading-[1.08] tracking-tight text-obsidian"
              >
                {project.title}
              </h2>

              {/* Description */}
              <p className="mt-3 font-sans text-[13px] sm:text-[14px] leading-[1.7] text-ink-secondary">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-5 border-t border-beige/25 pt-4">
                <h3 className="font-mono text-[9px] tracking-[0.22em] uppercase text-ink-muted font-semibold">
                  Technologies Deployed
                </h3>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={`modal-${tag}`}
                      className="inline-flex items-center gap-1.5 border border-beige/50 bg-surface-container-low px-2.5 py-1 font-mono text-[9px] tracking-[0.1em] uppercase text-ink"
                    >
                      <span className="h-1 w-1 rounded-full bg-maroon" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Features — from showcase.features */}
              {coreFeatures.length > 0 && (
                <div className="mt-5 border-t border-beige/25 pt-4">
                  <h3 className="flex items-center gap-2 font-mono text-[9px] tracking-[0.22em] uppercase text-ink-muted font-semibold">
                    <Sparkles className="h-3 w-3 text-maroon" />
                    Core Features
                  </h3>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {coreFeatures.map((feature) => (
                      <div
                        key={feature.id}
                        className="flex items-start gap-2.5 rounded-md border border-beige/30 bg-surface-container-low/60 p-3 transition-colors hover:border-maroon/30 hover:bg-surface-container/80"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-maroon/10">
                          <span className="h-1.5 w-1.5 rounded-full bg-maroon" />
                        </span>
                        <div className="min-w-0">
                          <p className="font-mono text-[10px] uppercase tracking-wider text-obsidian font-semibold leading-snug">
                            {feature.title}
                          </p>
                          <p className="mt-0.5 font-sans text-[11px] leading-[1.55] text-ink-secondary">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Core Capabilities */}
              {capabilities.length > 0 && (
                <div className="mt-5 border-t border-beige/25 pt-4">
                  <h3 className="font-mono text-[9px] tracking-[0.22em] uppercase text-ink-muted font-semibold">
                    Core Capabilities &amp; Engineering
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {capabilities.slice(0, 4).map((cap) => (
                      <li
                        key={cap.title}
                        className="flex items-start gap-2.5 text-[13px] leading-snug"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-maroon shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-mono text-[10px] uppercase tracking-wider text-obsidian font-semibold">
                            {cap.title}:
                          </strong>{" "}
                          <span className="font-sans text-ink-secondary text-[12px]">
                            {cap.description}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Role & Type Metadata Box */}
              <div className="mt-5 border border-beige/35 bg-surface-container-low p-3.5 font-mono text-[10px] text-ink-secondary">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-ink-muted text-[9px] uppercase tracking-wider block">
                      Discipline Role
                    </span>
                    <strong className="text-obsidian font-semibold">{project.role}</strong>
                  </div>
                  <div>
                    <span className="text-ink-muted text-[9px] uppercase tracking-wider block">
                      Architecture Type
                    </span>
                    <strong className="text-obsidian font-semibold truncate block">
                      {project.type}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Spacer for action buttons */}
              <div className="pb-2" />
            </div>

            {/* Action Buttons — sticky at bottom of right panel */}
            <div className="shrink-0 flex flex-wrap items-center gap-2.5 border-t border-beige/30 bg-surface-container-lowest px-5 sm:px-6 lg:px-7 py-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-maroon bg-maroon px-4 py-2.5 font-mono text-[10px] tracking-[0.16em] uppercase text-milky-white transition-all duration-300 hover:bg-maroon-dark shadow-sm"
                >
                  <span>Launch Live System</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}


              <Link
                href={project.detailHref}
                onClick={handleClose}
                className="inline-flex items-center gap-2 border border-beige/60 bg-surface-container-lowest px-4 py-2.5 font-mono text-[10px] tracking-[0.16em] uppercase text-ink transition-all duration-300 hover:border-maroon hover:text-maroon ml-auto"
              >
                <span>Full Monograph</span>
                <ArrowRight className="h-3.5 w-3.5 text-maroon" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── ZOOM OVERLAY ── */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-obsidian/95 backdrop-blur-lg"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={activeImage.src}
              alt={`${project.title} — ${activeImage.caption} (zoomed)`}
              fill
              sizes="90vw"
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Zoom close button */}
            <button
              type="button"
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-obsidian/80 text-beige backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-obsidian"
              aria-label="Close zoom"
            >
              <ZoomOut className="h-4 w-4" />
            </button>

            {/* Zoom caption */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.16em] uppercase text-beige/60 bg-obsidian/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
              {activeImage.caption} · PLATE {selectedImageIdx + 1}/{totalImages} · ESC TO CLOSE
            </div>

            {/* Zoom nav arrows */}
            {totalImages > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                  className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-obsidian/70 text-beige/70 backdrop-blur-sm transition-all hover:border-white/30 hover:text-milky-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                  className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-obsidian/70 text-beige/70 backdrop-blur-sm transition-all hover:border-white/30 hover:text-milky-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
