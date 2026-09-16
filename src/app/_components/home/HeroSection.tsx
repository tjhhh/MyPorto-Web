import { HeroPortrait } from "./HeroPortrait";
import { heroProfile } from "@/app/_data/home-data";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 border-b border-beige/35 bg-background overflow-hidden"
    >
      {/* Top Telemetry & Index Ribbon */}
      <div className="border-b border-beige/30 bg-surface-container-low/60 px-4 py-2.5 md:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-ink-secondary">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-maroon" />
            <span>DISCIPLINE NO. 01 — ARCHITECTURAL RIGOR</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-ink-muted">
            <span>TELKOM UNIVERSITY SE</span>
            <span>·</span>
            <span>SYSTEMS & MOBILE</span>
            <span>·</span>
            <span>BANDUNG, ID</span>
          </div>
        </div>
      </div>

      {/* Main Hero Stage */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 lg:grid-cols-12 lg:gap-12 lg:py-20 md:px-8">
        {/* Left Column: Monumental Editorial Statement */}
        <div className="flex flex-col lg:col-span-7">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-maroon font-semibold">
            <span>[ SYSTEM MONOGRAPH ]</span>
            <span className="h-[1px] w-8 bg-maroon/40" />
            <span className="text-ink-muted">2024 — 2026 ARCHIVE</span>
          </div>

          <h1 className="mt-5 font-display text-[44px] leading-[1.04] font-bold tracking-[-0.03em] text-obsidian sm:text-[58px] lg:text-[68px]">
            Engineering scalable systems with{" "}
            <span className="italic font-normal text-maroon">
              structural clarity
            </span>{" "}
            and precision.
          </h1>

          <p className="mt-6 max-w-xl font-sans text-[16px] leading-[1.7] text-ink-secondary sm:text-[18px]">
            I am a Software Engineer focused on architecting resilient distributed
            backends, real-time automotive telemetry, and tactile mobile
            ecosystems. I transform complex constraints into deterministic,
            engineered software.
          </p>

          {/* Action Trigger Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 border border-maroon bg-maroon px-6 py-3.5 font-mono text-[11px] tracking-[0.16em] uppercase text-milky-white transition-all duration-300 hover:bg-maroon-dark hover:border-maroon-dark shadow-sm hover:shadow"
            >
              <span>Let&apos;s Hire Me</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-beige/60 bg-surface-container-lowest px-5 py-3.5 font-mono text-[11px] tracking-[0.16em] uppercase text-ink transition-all duration-300 hover:border-maroon hover:text-maroon"
            >
              <span>View Portfolio</span>
              <ArrowDownRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Core Foundations Telemetry Bar */}
          <div className="mt-12 grid grid-cols-3 border-t border-beige/35 pt-6 font-mono">
            <div>
              <p className="text-[10px] tracking-[0.16em] text-ink-muted uppercase">
                Works Shipped
              </p>
              <p className="mt-1 font-display text-[26px] font-bold text-maroon sm:text-[32px]">
                06
              </p>
              <p className="text-[10px] text-ink-muted">Web & Mobile Platforms</p>
            </div>

            <div className="border-l border-beige/35 pl-5">
              <p className="text-[10px] tracking-[0.16em] text-ink-muted uppercase">
                Focus
              </p>
              <p className="mt-1 font-display text-[26px] font-bold text-obsidian sm:text-[32px]">
                Fullstack
              </p>
              <p className="text-[10px] text-ink-muted">Distributed & Telemetry</p>
            </div>

            <div className="border-l border-beige/35 pl-5">
              <p className="text-[10px] tracking-[0.16em] text-ink-muted uppercase">
                Academic
              </p>
              <p className="mt-1 font-display text-[26px] font-bold text-obsidian sm:text-[32px]">
                Telkom
              </p>
              <p className="text-[10px] text-ink-muted">Software Engineering</p>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Operator Portrait Frame */}
        <div className="relative flex flex-col items-center justify-center lg:col-span-5">
          <HeroPortrait
            imageSrc={heroProfile.image}
            name={heroProfile.name}
            role={heroProfile.role}
            location={heroProfile.location}
          />
        </div>
      </div>
    </section>
  );
}
