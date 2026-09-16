"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type { NavLink } from "@/app/_types/home";

type NavbarProps = {
  links: NavLink[];
};

export function Navbar({ links }: Readonly<NavbarProps>) {
  const [activeHref, setActiveHref] = useState<string>(links[0]?.href ?? "");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  const sectionIds = useMemo(
    () => links.map((link) => link.href.replace("#", "")).filter(Boolean),
    [links]
  );

  useEffect(() => {
    // Live Bandung time clock (WIB / UTC+7)
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!sectionIds.length) return;

    const updateFromHash = () => {
      const hash = globalThis.location.hash;
      if (hash) setActiveHref(hash);
    };

    updateFromHash();
    globalThis.addEventListener("hashchange", updateFromHash);

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el instanceof HTMLElement);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length) {
          setActiveHref(`#${visibleEntries[0].target.id}`);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] }
    );

    sections.forEach((s) => observer.observe(s));

    return () => {
      observer.disconnect();
      globalThis.removeEventListener("hashchange", updateFromHash);
    };
  }, [sectionIds]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-milky-white/10 bg-obsidian/95 backdrop-blur-md text-cream-dark transition-all duration-300">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3.5 md:px-8">
        {/* Left: Authorial Monogram & Identity */}
        <a
          href="#about"
          className="group flex items-center gap-3.5 focus:outline-none"
          aria-label="Go to prologue"
        >
          <div className="relative flex h-8 w-8 items-center justify-center border border-beige/30 bg-maroon-dark transition-all duration-300 group-hover:border-beige group-hover:bg-maroon">
            <span className="font-display font-bold text-[14px] text-milky-white">F</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-[11px] font-semibold tracking-[0.18em] uppercase text-milky-white group-hover:text-beige transition-colors">
              M. FAUZAN
            </span>
            <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-cream-dark/50">
              SOFTWARE ENGINEER
            </span>
          </div>
        </a>

        {/* Center: Editorial Wayfinding Links */}
        <nav className="hidden lg:flex items-center gap-8 font-mono text-[10px] tracking-[0.18em] uppercase">
          {links.map((link, idx) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive
                    ? "text-milky-white font-medium"
                    : "text-cream-dark/65 hover:text-milky-white"
                }`}
              >
                <span className="text-cream-dark/35 mr-1.5">{`0${idx + 1}.`}</span>
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-maroon-glow" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Operational Status & Dispatch */}
        <div className="hidden md:flex items-center gap-5">
          {/* Time & Telemetry */}
          <div className="flex items-center gap-2 border-r border-milky-white/10 pr-5 font-mono text-[10px] tracking-[0.14em] text-cream-dark/70">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>BDG, ID</span>
            {currentTime && (
              <span className="text-milky-white font-medium">{currentTime} WIB</span>
            )}
          </div>

          {/* Resume / Dispatch Link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-cream-dark/25 bg-transparent px-4 py-1.5 font-mono text-[10px] tracking-[0.16em] uppercase text-cream-dark transition-all duration-300 hover:border-maroon hover:bg-maroon hover:text-milky-white"
          >
            Curriculum Vitae
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cream-dark/25 px-3 py-1.5 font-mono text-[10px] tracking-[0.14em] uppercase text-cream-dark"
          >
            CV
          </a>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            className="flex items-center justify-center border border-beige/35 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] uppercase text-milky-white"
          >
            {isMobileMenuOpen ? "CLOSE" : "INDEX"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-beige/20 bg-obsidian-surface px-6 py-6 lg:hidden"
        >
          <div className="flex flex-col gap-4 font-mono text-[11px] tracking-[0.2em] uppercase">
            {links.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-milky-white/10 pb-2 text-cream-dark hover:text-milky-white"
              >
                <span>{link.label}</span>
                <span className="text-beige/40">{`[0${idx + 1}]`}</span>
              </a>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-beige/15 pt-4 font-mono text-[10px] text-beige/60">
            <span>BANDUNG, INDONESIA</span>
            <span>{currentTime} WIB</span>
          </div>
        </div>
      )}
    </header>
  );
}
