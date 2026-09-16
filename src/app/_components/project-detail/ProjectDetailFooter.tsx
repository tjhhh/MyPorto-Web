"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

type ProjectDetailFooterLink = {
  label: string;
  href: string;
};

type ProjectDetailFooterProps = {
  copyrightLabel: string;
  links: ProjectDetailFooterLink[];
};

export function ProjectDetailFooter({
  copyrightLabel,
  links,
}: Readonly<ProjectDetailFooterProps>) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-milky-white/10 bg-obsidian text-cream-dark/70 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-milky-white/10 pb-6">
          <div className="flex flex-col">
            <span className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-milky-white">
              MUHAMMAD FAUZAN
            </span>
            <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-cream-dark/45">
              {copyrightLabel || "SOFTWARE ENGINEERING MONOGRAPH · ARCHIVE VOL. 2026"}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-[10px] tracking-[0.16em] uppercase">
            {links.map((link) => (
              <Link
                key={link.label}
                className="text-cream-dark/65 transition-colors duration-200 hover:text-milky-white"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 border border-milky-white/15 px-3 py-1 text-cream-dark hover:border-milky-white/50 hover:text-milky-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>ASCEND</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 font-mono text-[9px] tracking-[0.14em] text-cream-dark/40 uppercase">
          <span>
            COLOPHON: NEXT.JS 16 (TURBOPACK) · REACT 19 · TAILWIND CSS V4 · EDITORIAL SYSTEMS MONOGRAPH
          </span>
          <span>
            © {new Date().getFullYear()} MUHAMMAD FAUZAN. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
}