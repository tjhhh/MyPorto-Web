"use client";

import { useState } from "react";
import Image from "next/image";
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
}: FeatureShowcaseProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!features || features.length === 0) {
    // Fallback mode: just show the single fallback image
    return (
      <div className="group relative aspect-4/3 overflow-hidden border border-outline-variant bg-surface-container-lowest">
        <Image
          alt={`${projectName} showcase preview`}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          src={fallbackImage}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-surface-container-lowest/95 backdrop-blur-xs px-4 py-2 border border-primary text-primary font-space text-[10px] uppercase tracking-[0.12em] shadow-sm">
            {visualTitle || "Interface Preview"}
          </div>
        </div>
      </div>
    );
  }

  const activeFeature = features[activeIdx] || features[0];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
      {/* Left Column: Interactive Feature List / Tabs */}
      <div className="flex flex-col gap-3 lg:col-span-5">
        {features.map((feature, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={feature.id}
              onClick={() => setActiveIdx(idx)}
              className={`flex items-start gap-4 border p-5 text-left transition-all duration-300 ease-out cursor-pointer group/btn ${
                isActive
                  ? "border-primary bg-surface-container text-primary shadow-xs"
                  : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary/50 hover:bg-surface-container-low"
              }`}
            >
              {feature.icon && (
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center border transition-colors duration-300 ${
                    isActive
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-outline-variant bg-surface-container-low text-on-surface-variant group-hover/btn:border-primary/40 group-hover/btn:text-primary"
                  }`}
                >
                  <span aria-hidden="true" className="material-symbols-outlined text-xl">
                    {feature.icon}
                  </span>
                </div>
              )}
              <div className="flex flex-col">
                <span className="font-space text-[9px] uppercase tracking-[0.12em] opacity-80 mb-1">
                  Feature {String(idx + 1).padStart(2, "0")}
                </span>
                <h4 className="text-[16px] font-bold tracking-[-0.01em]">
                  {feature.title}
                </h4>
                <p className="mt-1.5 text-[13px] leading-relaxed text-on-surface-variant">
                  {feature.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Right Column: Visual Showcase Mockup */}
      <div className="lg:col-span-7 flex flex-col justify-center">
        <div className="relative aspect-4/3 w-full overflow-hidden border border-outline-variant bg-surface-container-lowest p-2 md:p-3 shadow-xl shadow-black/5 group">
          {/* Mockup Top Bar / Header */}
          <div className="flex items-center gap-1.5 border-b border-outline-variant pb-2 md:pb-3 mb-2 md:mb-3">
            <div className="h-2 w-2 rounded-full bg-outline/30" />
            <div className="h-2 w-2 rounded-full bg-outline/30" />
            <div className="h-2 w-2 rounded-full bg-outline/30" />
            <span className="ml-2 font-space text-[8px] uppercase tracking-[0.1em] text-on-surface-variant/60">
              {activeFeature.title} — Preview
            </span>
          </div>

          {/* Screenshot container with key to reset animations */}
          <div
            key={activeFeature.id}
            className="relative h-[calc(100%-32px)] w-full overflow-hidden bg-surface-container-low reveal-card"
          >
            <Image
              alt={`${projectName} - ${activeFeature.title}`}
              src={activeFeature.image}
              fill
              className="object-cover object-top transition-transform duration-500 ease-out hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
