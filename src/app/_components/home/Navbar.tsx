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

  const sectionIds = useMemo(
    () => links.map((link) => link.href.replace("#", "")).filter(Boolean),
    [links],
  );

  useEffect(() => {
    if (!sectionIds.length) {
      return;
    }

    const updateFromHash = () => {
      const hash = globalThis.location.hash;
      if (hash) {
        setActiveHref(hash);
      }
    };

    updateFromHash();
    globalThis.addEventListener("hashchange", updateFromHash);

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element instanceof HTMLElement);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) {
          return;
        }

        const nextActive = `#${visibleEntries[0].target.id}`;
        setActiveHref(nextActive);
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      globalThis.removeEventListener("hashchange", updateFromHash);
    };
  }, [sectionIds]);

  const resolveLinkClassName = (href: string) =>
    href === activeHref
      ? "text-primary"
      : "text-on-surface-variant transition-colors hover:text-primary";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface-container-lowest/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8 md:py-5">
        <a href="#about" className="inline-flex items-center" aria-label="Go to About section">
          <Image src="/logov1.png" alt="Website logo" width={40} height={40} className="h-9 w-auto object-contain md:h-10" />
        </a>

        <div className="hidden items-center gap-7 text-[11px] font-medium tracking-[0.12em] uppercase md:flex">
          {links.map((link) => (
            <a key={link.label} className={resolveLinkClassName(link.href)} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden border border-primary bg-primary px-4 py-2 font-space text-[10px] tracking-[0.15em] text-on-primary uppercase transition-colors duration-400 ease-in-out hover:bg-primary-container md:inline-flex"
        >
          Resume
        </a>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary bg-primary px-3 py-2 text-[11px] font-space tracking-[0.14em] text-on-primary uppercase transition-colors duration-300 ease-out hover:bg-primary-container"
          >
            Resume
          </a>
          <button
            className="border border-outline-variant px-3 py-2 text-[11px] font-space tracking-[0.14em] text-on-surface uppercase"
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            Menu
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-nav" className="border-t border-outline-variant px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3 text-[11px] font-medium tracking-[0.12em] uppercase">
            {links.map((link) => (
              <a
                key={link.label}
                className={resolveLinkClassName(link.href)}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
