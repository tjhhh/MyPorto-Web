"use client";

import { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";

interface HeroPortraitProps {
  imageSrc?: string;
  name?: string;
  role?: string;
  location?: string;
}

export function HeroPortrait({
  imageSrc = "/profile.jpg",
  name = "M. Fauzan",
  role = "Software Engineer",
  location = "Bandung, ID",
}: HeroPortraitProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full border border-beige/40 bg-obsidian-surface shadow-xl p-2 sm:p-4 overflow-hidden group">
      {/* Precision Corner Brackets */}
      <div className="absolute top-2 left-2 h-3 w-3 border-t-2 border-l-2 border-beige/50 pointer-events-none z-20" />
      <div className="absolute top-2 right-2 h-3 w-3 border-t-2 border-r-2 border-beige/50 pointer-events-none z-20" />
      <div className="absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-beige/50 pointer-events-none z-20" />
      <div className="absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-beige/50 pointer-events-none z-20" />

      {/* Header Telemetry Label */}
      <div className="flex items-center justify-between border-b border-beige/15 px-3 py-2 font-mono text-[9px] tracking-[0.18em] uppercase text-beige/70">
        <span>OPERATOR DOSSIER // PORTRAIT</span>
        <span className="text-beige/40">{location} · 2026</span>
      </div>

      {/* Main Portrait Mount */}
      <div className="relative h-[430px] sm:h-[490px] w-full overflow-hidden bg-obsidian-card/90 flex flex-col items-center justify-center">
        {/* Subtle Architectural Blueprint Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(var(--color-beige) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {!hasError ? (
          /* Actual Photo Display */
          <div className="relative h-full w-full">
            <Image
              src={imageSrc}
              alt={`${name} — ${role}`}
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              priority
              className="object-cover object-[center_85%] filter grayscale contrast-[1.08] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
              onError={() => setHasError(true)}
            />

            {/* Editorial Vignette & Shading */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Technical Viewfinder Reticle Overlays */}
            <div className="absolute top-3 left-3 text-[10px] font-mono text-beige/40 pointer-events-none">
              + [X: 042 // Y: 108]
            </div>
            <div className="absolute top-3 right-3 text-[10px] font-mono text-beige/40 pointer-events-none">
              [REC // 60FPS] +
            </div>

            {/* Bottom Floating Identity Bar */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center bg-obsidian-surface/85 backdrop-blur-md border border-beige/20 px-3 py-1.5 font-mono text-[10px] text-milky-white">
              <div className="flex items-center gap-2">
                <span className="font-bold text-milky-white">{name}</span>
                <span className="text-beige/30">/</span>
                <span className="text-cream-dark/80 text-[9px] tracking-wide uppercase">
                  {role}
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* Editorial Blueprint Placeholder */
          <div className="relative flex h-full w-full flex-col items-center justify-center p-6 text-center select-none">
            {/* Viewfinder crosshairs */}
            <div className="absolute top-4 left-4 text-beige/30 font-mono text-xs select-none">
              +
            </div>
            <div className="absolute top-4 right-4 text-beige/30 font-mono text-xs select-none">
              +
            </div>
            <div className="absolute bottom-4 left-4 text-beige/30 font-mono text-xs select-none">
              +
            </div>
            <div className="absolute bottom-4 right-4 text-beige/30 font-mono text-xs select-none">
              +
            </div>

            {/* Stylized Framing Icon */}
            <div className="relative mb-5 flex h-20 w-20 items-center justify-center border border-beige/30 bg-obsidian-surface/80">
              <div className="absolute -top-1 -left-1 h-2 w-2 border-t-2 border-l-2 border-maroon-glow" />
              <div className="absolute -top-1 -right-1 h-2 w-2 border-t-2 border-r-2 border-maroon-glow" />
              <div className="absolute -bottom-1 -left-1 h-2 w-2 border-b-2 border-l-2 border-maroon-glow" />
              <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b-2 border-r-2 border-maroon-glow" />
              <User className="h-8 w-8 text-beige/70" />
            </div>

            <div className="inline-flex items-center gap-1.5 border border-beige/20 bg-beige/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-beige/70">
              <span>PORTRAIT DOSSIER</span>
            </div>

            <p className="mt-3 font-display text-[18px] font-bold text-milky-white">
              {name}
            </p>

            <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-cream-dark/60">
              {role}
            </p>
          </div>
        )}
      </div>

      {/* Footer Telemetry */}
      <div className="flex items-center justify-between border-t border-beige/15 px-3 py-2 font-mono text-[9px] tracking-[0.14em] text-beige/60">
        <span>SUBJECT: {name.toUpperCase()}</span>
      </div>
    </div>
  );
}
