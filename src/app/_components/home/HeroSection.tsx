import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { allProjects, heroProfile } from "@/app/_data/home-data";
import { HeroPortrait } from "./HeroPortrait";

export function HeroSection() {
  return (
    <section
      id="about"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-24 border-b border-beige/50 bg-background"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 sm:gap-12 sm:px-8 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <div className="min-w-0 lg:col-span-7">
          <h1
            id="hero-heading"
            className="font-sans text-[clamp(2.25rem,7.5vw,3.5rem)] leading-[1.1] font-bold tracking-[-0.03em] text-obsidian lg:text-[clamp(2.75rem,4.3vw,3.75rem)]"
          >
            <span className="lg:block">I build web,</span>{" "}
            <span className="lg:block">mobile, and</span>{" "}
            <span className="lg:block">connected systems.</span>
          </h1>

          <p className="mt-6 max-w-xl font-sans text-base leading-[1.75] text-ink-secondary sm:text-[17px]">
            I’m Muhammad Fauzan, a software engineer building web applications,
            mobile experiences, and real-time IoT systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-maroon px-5 py-3 font-sans text-sm font-semibold text-milky-white transition-colors duration-150 hover:bg-maroon-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maroon motion-reduce:transition-none"
            >
              <span>View selected work</span>
              <ArrowDownRight aria-hidden="true" className="h-4 w-4 shrink-0" />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 py-3 font-sans text-sm font-semibold text-ink underline-offset-4 transition-colors duration-150 hover:text-maroon hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maroon motion-reduce:transition-none"
            >
              <span>Get in touch</span>
              <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
            </a>
          </div>

          <ul
            aria-label="At a glance"
            role="list"
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-beige/60 pt-5 font-mono text-[13px] leading-relaxed text-ink-secondary"
          >
            <li>{allProjects.length} selected projects</li>
            <li>Full-stack &amp; IoT</li>
            <li>Telkom University</li>
          </ul>
        </div>

        <div className="mx-auto w-full max-w-[420px] lg:col-span-5 lg:mr-0">
          <HeroPortrait imageSrc={heroProfile.image} name={heroProfile.name} />
        </div>
      </div>
    </section>
  );
}
