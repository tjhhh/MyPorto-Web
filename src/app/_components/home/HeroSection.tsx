import { HeroPortrait } from "./HeroPortrait";
import { heroProfile } from "@/app/_data/home-data";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 border-b border-beige/35 bg-background overflow-hidden"
    >
      {/* Top Ribbon */}
      <div className="border-b border-beige/30 bg-surface-container-low/60 px-4 py-2 md:px-8">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between font-mono text-[10px] tracking-[0.16em] uppercase text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-maroon shrink-0" />
            <span className="text-ink font-medium">MUHAMMAD FAUZAN</span>
            <span className="text-beige/60">/</span>
            <span>SOFTWARE ENGINEER</span>
          </div>
          <div className="hidden sm:block text-ink-light">
            TELKOM UNIVERSITY · BANDUNG, ID
          </div>
        </div>
      </div>

      {/* Main Hero Stage */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 lg:grid-cols-12 lg:gap-12 lg:py-20 md:px-8">
        {/* Left Column: Monumental Editorial Statement */}
        <div className="flex flex-col lg:col-span-7">
          {/* Clean, Unified Montserrat Heading */}
          <h1 className="font-sans text-[42px] leading-[1.08] font-bold tracking-[-0.025em] text-obsidian sm:text-[56px] lg:text-[66px]">
            Engineering scalable systems with structural clarity.
          </h1>

          <p className="mt-5 max-w-xl font-sans text-[15px] leading-[1.7] text-ink-secondary sm:text-[16px] font-normal">
            I am a Software Engineer focused on architecting resilient distributed
            backends, real-time IoT telemetry, and tactile mobile
            ecosystems. I transform complex constraints into deterministic,
            engineered software.
          </p>

          {/* Action Trigger Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 border border-maroon bg-maroon px-6 py-3 font-sans text-[11px] font-semibold tracking-[0.14em] uppercase text-milky-white transition-all duration-300 hover:bg-maroon-dark hover:border-maroon-dark shadow-xs"
            >
              <span>Let&apos;s Hire Me</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-beige/60 bg-surface-container-lowest px-5 py-3 font-sans text-[11px] font-semibold tracking-[0.14em] uppercase text-ink transition-all duration-300 hover:border-maroon hover:text-maroon"
            >
              <span>View Portfolio</span>
              <ArrowDownRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Clean Foundations Bar */}
          <div className="mt-12 grid grid-cols-3 border-t border-beige/35 pt-6 font-sans">
            <div>
              <p className="font-sans text-[26px] font-bold text-maroon sm:text-[32px] tracking-tight">
                06+
              </p>
              <p className="mt-0.5 font-mono text-[10px] tracking-[0.14em] text-ink-muted uppercase">
                Works Shipped
              </p>
            </div>

            <div className="border-l border-beige/35 pl-5">
              <p className="font-sans text-[22px] font-bold text-obsidian sm:text-[28px] tracking-tight">
                Fullstack
              </p>
              <p className="mt-0.5 font-mono text-[10px] tracking-[0.14em] text-ink-muted uppercase">
                Primary Focus
              </p>
            </div>

            <div className="border-l border-beige/35 pl-5">
              <p className="font-sans text-[22px] font-bold text-obsidian sm:text-[28px] tracking-tight">
                Telkom
              </p>
              <p className="mt-0.5 font-mono text-[10px] tracking-[0.14em] text-ink-muted uppercase">
                Software Eng.
              </p>
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
