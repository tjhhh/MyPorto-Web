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
    <div className="w-full">
      {/* ========================================================================= */}
      {/* MOBILE & TABLET LAYOUT (< lg)                                             */}
      {/* ========================================================================= */}
      <div className="flex flex-col lg:hidden gap-6">
        {/* Mockup Top Header + Image */}
        <div className="relative aspect-video w-full overflow-hidden border border-outline-variant bg-surface-container-lowest p-2 shadow-lg">
          {/* Mockup Header Bar */}
          <div className="flex items-center gap-1.5 border-b border-outline-variant pb-2 mb-2">
            <div className="h-2 w-2 rounded-full bg-outline/30" />
            <div className="h-2 w-2 rounded-full bg-outline/30" />
            <div className="h-2 w-2 rounded-full bg-outline/30" />
            <span className="ml-2 font-space text-[8px] uppercase tracking-[0.1em] text-on-surface-variant/60 truncate max-w-[70%]">
              {activeFeature.title}
            </span>
          </div>

          {/* Screenshot container */}
          <div className="relative h-[calc(100%-26px)] w-full overflow-hidden bg-white">
            <Image
              alt={activeFeature.title}
              src={activeFeature.image}
              fill
              className="object-contain object-top transition-all duration-300"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Carousel Navigation Controller */}
        <div className="flex items-center justify-between border border-outline-variant bg-surface-container px-4 py-3">
          <button
            onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : features.length - 1))}
            className="flex h-9 w-9 items-center justify-center border border-outline-variant bg-surface-container-lowest text-on-surface hover:text-primary transition-colors cursor-pointer"
            aria-label="Previous feature"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>
          
          {/* Indicators */}
          <div className="flex items-center gap-2">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIdx ? "w-6 bg-primary" : "w-2 bg-outline-variant hover:bg-outline/50"
                }`}
                aria-label={`Go to feature ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveIdx((prev) => (prev < features.length - 1 ? prev + 1 : 0))}
            className="flex h-9 w-9 items-center justify-center border border-outline-variant bg-surface-container-lowest text-on-surface hover:text-primary transition-colors cursor-pointer"
            aria-label="Next feature"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
        </div>

        {/* Active Feature Details */}
        <div className="border border-primary/10 bg-surface-container-lowest p-6 shadow-sm">
          <span className="font-space text-[9px] uppercase tracking-[0.14em] text-primary font-bold">
            Feature {String(activeIdx + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
          </span>
          <h4 className="mt-1.5 text-[20px] font-bold text-on-surface tracking-tight leading-tight">
            {activeFeature.title}
          </h4>
          <p className="mt-2 text-[14px] leading-relaxed text-on-surface-variant">
            {activeFeature.description}
          </p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP LAYOUT (>= lg)                                                    */}
      {/* ========================================================================= */}
      <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Interactive Feature List / Tabs (lg:col-span-4 for compact tabs) */}
        <div className="flex flex-col gap-3.5 lg:col-span-4">
          {features.map((feature, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveIdx(idx)}
                className={`flex items-start gap-4 border p-5.5 text-left transition-all duration-300 ease-out cursor-pointer group/btn ${
                  isActive
                    ? "border-primary bg-surface-container text-primary shadow-sm scale-[1.01]"
                    : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary/50 hover:bg-surface-container-low hover:scale-[1.005]"
                }`}
              >
                {feature.icon && (
                  <div
                    className={`flex h-10.5 w-10.5 flex-shrink-0 items-center justify-center border transition-colors duration-300 ${
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
                  <p className="mt-2 text-[13px] leading-relaxed text-on-surface-variant">
                    {feature.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Visual Showcase Mockup (lg:col-span-8 for maximum image size) */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <div className="relative aspect-video w-full overflow-hidden border border-outline-variant bg-surface-container-lowest p-3 shadow-2xl shadow-black/5 group">
            {/* Mockup Top Bar / Header */}
            <div className="flex items-center gap-1.5 border-b border-outline-variant pb-2.5 mb-2.5">
              <div className="h-2 w-2 rounded-full bg-outline/30" />
              <div className="h-2 w-2 rounded-full bg-outline/30" />
              <div className="h-2 w-2 rounded-full bg-outline/30" />
              <span className="ml-2 font-space text-[9px] uppercase tracking-[0.1em] text-on-surface-variant/60">
                {activeFeature.title} — Live Preview
              </span>
            </div>

            {/* Screenshot container with key to reset animations */}
            <div
              key={activeFeature.id}
              className="relative h-[calc(100%-34px)] w-full overflow-hidden bg-white reveal-card"
            >
              <Image
                alt={`${projectName} - ${activeFeature.title}`}
                src={activeFeature.image}
                fill
                className="object-contain object-top transition-transform duration-500 ease-out hover:scale-[1.025]"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
