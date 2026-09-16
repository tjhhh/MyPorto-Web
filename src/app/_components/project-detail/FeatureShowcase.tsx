"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Layers, Eye } from "lucide-react";
import type { ProjectDetailFeature } from "@/app/_types/project-detail";

interface FeatureShowcaseProps {
  features?: ProjectDetailFeature[];
  fallbackImage: string;
  projectName: string;
  visualTitle: string;
}

export function FeatureShowcase({
  features,
  fallbackImage,
  projectName,
  visualTitle,
}: Readonly<FeatureShowcaseProps>) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!features || features.length === 0) {
    return (
      <div className="relative aspect-video w-full overflow-hidden border border-beige/40 bg-obsidian p-3 shadow-lg">
        <div className="flex items-center justify-between border-b border-milky-white/10 pb-2.5 mb-2.5 font-mono text-[9px] tracking-[0.16em] uppercase text-cream-dark/60">
          <span>[ FIG. 01 — ARCHITECTURAL INTERFACE PLATE ]</span>
          <span>{visualTitle || "SYSTEM PREVIEW"}</span>
        </div>
        <div className="relative h-[calc(100%-32px)] w-full overflow-hidden">
          <Image
            alt={`${projectName} showcase preview`}
            src={fallbackImage}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>
      </div>
    );
  }

  const activeFeature = features[activeIdx] || features[0];
  const activeNumber = String(activeIdx + 1).padStart(2, "0");
  const totalCount = String(features.length).padStart(2, "0");

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Mobile Carousel View (< lg) */}
      <div className="flex flex-col lg:hidden gap-5">
        <div className="border border-beige/40 bg-obsidian text-cream-dark p-3 shadow-md">
          {/* Viewport Top Telemetry Header */}
          <div className="flex items-center justify-between border-b border-milky-white/10 pb-2.5 mb-3 font-mono text-[9px] tracking-[0.16em] uppercase text-cream-dark/60">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-maroon-glow" />
              <span>ARTIFACT {activeNumber} / {totalCount}</span>
            </div>
            <span className="truncate max-w-[50%]">{activeFeature.title}</span>
          </div>

          {/* Screenshot Surface */}
          <div className="relative aspect-video w-full overflow-hidden bg-obsidian-card">
            <Image
              key={activeFeature.id}
              alt={activeFeature.title}
              src={activeFeature.image}
              fill
              className="object-contain transition-opacity duration-300"
              sizes="100vw"
            />
          </div>

          {/* Controller Bar */}
          <div className="mt-3 flex items-center justify-between border-t border-milky-white/10 pt-3">
            <button
              type="button"
              onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : features.length - 1))}
              className="flex h-8 w-8 items-center justify-center border border-milky-white/15 bg-obsidian-surface text-cream-dark hover:border-maroon hover:text-milky-white transition-colors"
              aria-label="Previous artifact"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {features.map((_, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-1.5 transition-all duration-300 ${
                    idx === activeIdx ? "w-6 bg-maroon" : "w-1.5 bg-milky-white/20"
                  }`}
                  aria-label={`Go to feature ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setActiveIdx((prev) => (prev < features.length - 1 ? prev + 1 : 0))}
              className="flex h-8 w-8 items-center justify-center border border-milky-white/15 bg-obsidian-surface text-cream-dark hover:border-maroon hover:text-milky-white transition-colors"
              aria-label="Next artifact"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Feature Narrative Box */}
        <div className="border border-beige/35 bg-surface-container-low p-5">
          <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-maroon font-semibold">
            ARTIFACT {activeNumber} ANALYSIS
          </span>
          <h4 className="mt-1 font-display text-xl font-normal text-ink tracking-tight">
            {activeFeature.title}
          </h4>
          <p className="mt-2 text-[14px] leading-relaxed text-ink-secondary">
            {activeFeature.description}
          </p>
        </div>
      </div>

      {/* Desktop Editorial Layout (>= lg) */}
      <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 items-start">
        {/* Left: Interactive Monograph Feature Index (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-beige/35 pb-3">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-maroon font-semibold">
              [ PRODUCTION ARTIFACT DOSSIER ]
            </span>
            <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-ink-muted">
              {totalCount} INTERFACE PLATES
            </span>
          </div>

          <div className="flex flex-col gap-2.5 mt-2">
            {features.map((feature, idx) => {
              const isActive = idx === activeIdx;
              const featNum = String(idx + 1).padStart(2, "0");

              return (
                <button
                  type="button"
                  key={feature.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`flex flex-col text-left p-4.5 border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-maroon bg-surface-container-lowest shadow-sm translate-x-1"
                      : "border-beige/35 bg-surface-container-low/60 text-ink hover:border-beige-dark hover:bg-surface-container-low"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[10px] tracking-[0.16em] font-semibold uppercase ${
                        isActive ? "text-maroon" : "text-ink-muted"
                      }`}
                    >
                      ARTIFACT {featNum}
                    </span>
                    {isActive && (
                      <span className="inline-flex items-center gap-1 font-mono text-[9px] tracking-[0.14em] uppercase text-maroon">
                        <Eye className="h-3 w-3" />
                        <span>ACTIVE</span>
                      </span>
                    )}
                  </div>

                  <h4
                    className={`mt-1 font-display text-[16px] tracking-tight transition-colors ${
                      isActive ? "text-maroon font-semibold" : "text-ink font-normal"
                    }`}
                  >
                    {feature.title}
                  </h4>

                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-secondary line-clamp-2">
                    {feature.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Master Gallery Viewport (7 cols) */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="border border-beige/40 bg-obsidian text-cream-dark p-4 shadow-xl">
            {/* Viewport Telemetry Header */}
            <div className="flex items-center justify-between border-b border-milky-white/10 pb-3 mb-3">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-maroon-glow animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-milky-white">
                  PLATE 0{activeIdx + 1} — {activeFeature.title}
                </span>
              </div>

              <div className="flex items-center gap-1 font-mono text-[9px] tracking-[0.14em] uppercase text-cream-dark/50">
                <Layers className="h-3 w-3" />
                <span>RETINA RESOLUTION</span>
              </div>
            </div>

            {/* High-Fidelity Image Plate Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-obsidian-card">
              <Image
                key={activeFeature.id}
                alt={`${projectName} - ${activeFeature.title}`}
                src={activeFeature.image}
                fill
                className="object-contain transition-all duration-500 ease-out"
                sizes="(max-width: 1280px) 60vw, 800px"
                priority={activeIdx === 0}
              />
            </div>

            {/* Footer Telemetry & Navigation Row */}
            <div className="mt-3 flex items-center justify-between border-t border-milky-white/10 pt-3">
              <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-cream-dark/45">
                INDEX: {activeNumber} / {totalCount} · HIGH-FIDELITY INTERFACE AUDIT
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : features.length - 1))}
                  className="inline-flex items-center gap-1.5 border border-milky-white/15 bg-obsidian-surface px-3 py-1 font-mono text-[10px] tracking-[0.14em] uppercase text-cream-dark hover:border-maroon hover:text-milky-white transition-colors"
                >
                  <ChevronLeft className="h-3 w-3" />
                  <span>PREV</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveIdx((prev) => (prev < features.length - 1 ? prev + 1 : 0))}
                  className="inline-flex items-center gap-1.5 border border-milky-white/15 bg-obsidian-surface px-3 py-1 font-mono text-[10px] tracking-[0.14em] uppercase text-cream-dark hover:border-maroon hover:text-milky-white transition-colors"
                >
                  <span>NEXT</span>
                  <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>

          {/* In-depth Narrative Display below Viewport */}
          <div className="mt-4 border border-beige/35 bg-surface-container-low/70 p-5">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-maroon font-semibold">
              SPECIFICATION & FUNCTIONAL BEHAVIOR
            </span>
            <p className="mt-1 text-[14px] leading-relaxed text-ink-secondary">
              {activeFeature.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
