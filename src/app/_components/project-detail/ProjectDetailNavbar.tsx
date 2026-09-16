import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

type ProjectDetailNavbarLink = {
  label: string;
  href: string;
};

type ProjectDetailNavbarProps = {
  projectName: string;
  navLinks: ProjectDetailNavbarLink[];
  backHref?: string;
  backLabel?: string;
  sectionLabel?: string;
  chapterNumber?: string;
  totalChapters?: string;
  liveUrl?: string | null;
};

export function ProjectDetailNavbar({
  projectName,
  navLinks,
  backHref = "/#projects",
  backLabel = "Monograph Index",
  sectionLabel = "Detail Monograph",
  chapterNumber = "01",
  totalChapters = "06",
  liveUrl,
}: Readonly<ProjectDetailNavbarProps>) {
  return (
    <header className="sticky top-0 z-50 border-b border-milky-white/10 bg-obsidian/95 backdrop-blur-md text-cream-dark">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8 md:py-3.5">
        {/* Left: Monograph imprint & Chapter Stamp */}
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/#projects"
            className="flex h-7 w-7 flex-shrink-0 items-center justify-center border border-beige/30 bg-maroon text-milky-white font-display text-[12px] font-bold transition-transform hover:scale-105"
            title="Return to Selected Works"
          >
            {chapterNumber}
          </Link>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-cream-dark/50">
                CHAPTER {chapterNumber} OF {totalChapters}
              </span>
              <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-emerald-400/80" />
              <span className="hidden sm:inline-block font-mono text-[9px] uppercase tracking-[0.14em] text-emerald-400/80">
                SYSTEM ARCHIVE
              </span>
            </div>
            <h1 className="truncate font-display text-[16px] sm:text-[18px] font-bold text-milky-white tracking-tight">
              {projectName}
            </h1>
          </div>
        </div>

        {/* Middle: In-Page Anchor Navigation */}
        <nav className="hidden lg:flex items-center gap-6 font-mono text-[10px] tracking-[0.16em] uppercase">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              className="text-cream-dark/65 transition-colors duration-200 hover:text-milky-white flex items-center gap-1.5"
              href={link.href}
            >
              <span className="text-cream-dark/35">0{idx + 1}.</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Right: Quick Action & Return Triggers */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 border border-maroon bg-maroon px-3.5 py-1.5 font-mono text-[10px] tracking-[0.16em] uppercase text-milky-white transition-all duration-300 hover:bg-maroon-glow hover:border-maroon-glow"
            >
              <span>Launch</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          )}

          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 border border-cream-dark/25 bg-transparent px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-cream-dark transition-all duration-300 hover:border-maroon hover:bg-maroon hover:text-milky-white"
          >
            <ArrowLeft className="h-3 w-3" />
            <span>{backLabel}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}