"use client";

import { useState } from "react";
import Image from "next/image";
import { Server, Layout, Wrench, Layers, ChevronDown } from "lucide-react";
import type { TechStackCategory } from "@/app/_types/home";

type TechStackSectionProps = {
  categories: TechStackCategory[];
};

const INITIAL_LIMIT = 6;

// Rich real-world production rationale per engineering tool
const productionNotes: Record<string, string> = {
  React: "Component state architecture & hooks for dynamic client dashboards.",
  Vue: "Lightweight reactive frontend for HikePass web administrative portal.",
  "Tailwind CSS": "Design-token driven styling systems & precise responsive layouts.",
  TypeScript: "End-to-end type safety, strict interface contracts, and reduced runtime errors.",
  HTML5: "Semantic document outline, WCAG accessible tags, and structured metadata.",
  CSS3: "Custom keyframes, fluid typography clamping, and CSS Grid compositions.",
  Bootstrap: "Rapid responsive layout scaffolding in legacy municipal portal (HijauKu).",
  Flutter: "Cross-platform native companion with custom telemetry gauges and local caching in RideAssist.",
  "Node.js": "Event-driven asynchronous services and API endpoints.",
  PostgreSQL: "Relational database modeling, complex joins, indexing, and transactional integrity.",
  "REST API": "Deterministic JSON contracts, status code disciplines, and webhook integrations.",
  NestJS: "Enterprise modular backend architecture with dependency injection.",
  Firebase: "Real-time document sync, authentication state observers, and Cloud Messaging.",
  Figma: "Design system prototyping, wireframing, and component token drafting.",
  Vercel: "Edge network continuous deployment, preview environments, and serverless compute.",
  Supabase: "Postgres-backed Auth, Row-Level Security policies, and real-time subscription streams in FutsalPro.",
  GitHub: "Version control workflows, issue tracking, and collaborative branch management.",
  Git: "Atomic commit hygiene, rebase workflows, and repository governance.",
};

export function TechStackSection({ categories }: Readonly<TechStackSectionProps>) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const allItems = categories.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.label }))
  );

  const displayedItems =
    activeCategory === "All"
      ? allItems
      : allItems.filter((item) => item.category === activeCategory);

  const visibleItems = isExpanded
    ? displayedItems
    : displayedItems.slice(0, INITIAL_LIMIT);

  const hasMore = displayedItems.length > INITIAL_LIMIT;
  const remainingCount = displayedItems.length - INITIAL_LIMIT;

  const handleCategoryChange = (tab: string) => {
    setActiveCategory(tab);
    setIsExpanded(false);
  };

  const getCategoryIcon = (label: string) => {
    switch (label) {
      case "Frontend":
        return <Layout className="h-3.5 w-3.5" />;
      case "Backend":
        return <Server className="h-3.5 w-3.5" />;
      case "Tools":
        return <Wrench className="h-3.5 w-3.5" />;
      default:
        return <Layers className="h-3.5 w-3.5" />;
    }
  };

  return (
    <section
      id="tech"
      className="scroll-mt-20 border-b border-beige/35 bg-background py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-beige/35 pb-8">
          <div>
            <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.22em] uppercase text-maroon font-semibold">
              <span className="whitespace-nowrap">[ SECTION 03 // TAXONOMY ]</span>
              <span className="hidden xs:inline-block h-[1px] w-4 sm:w-6 bg-maroon/40 shrink-0" />
              <span className="whitespace-nowrap text-ink-muted">ENGINEERING CAPABILITIES</span>
            </div>
            <h2 className="mt-3 font-display text-[38px] leading-[1.08] font-bold tracking-[-0.02em] text-obsidian sm:text-[48px] md:text-[54px]">
              Systems Matrix
            </h2>
          </div>
          <p className="mt-4 max-w-md font-sans text-[15px] leading-[1.65] text-ink-secondary md:mt-0 md:text-right">
            Technologies evaluated not as buzzwords, but as calibrated tools with verified production roles.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-beige/25 pb-6">
          <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-muted mr-2">
            FILTER DOMAIN:
          </span>
          {["All", "Frontend", "Backend", "Tools"].map((tab) => {
            const isActive = activeCategory === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => handleCategoryChange(tab)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.14em] uppercase transition-all duration-200 border ${
                  isActive
                    ? "border-maroon bg-maroon text-milky-white font-medium shadow-sm"
                    : "border-beige/40 bg-surface-container-lowest text-ink hover:border-maroon/50"
                }`}
              >
                {tab !== "All" && getCategoryIcon(tab)}
                <span>{tab}</span>
                <span className="text-[9px] opacity-70">
                  {tab === "All"
                    ? `[${allItems.length}]`
                    : `[${allItems.filter((i) => i.category === tab).length}]`}
                </span>
              </button>
            );
          })}
        </div>

        {/* Matrix Grid: Crisp Architectural Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((tech) => {
            const note =
              productionNotes[tech.name] ||
              "Engineered with verified architectural discipline in deployed projects.";

            return (
              <div
                key={`${tech.category}-${tech.name}`}
                className="group relative flex flex-col justify-between border border-beige/35 bg-surface-container-lowest p-5 transition-all duration-300 hover:border-maroon/60 hover:shadow-md"
              >
                <div>
                  {/* Card Header: Icon + Category Badge */}
                  <div className="flex items-center justify-between border-b border-beige/20 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center border border-beige/30 bg-surface-container-low transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={tech.logo}
                          alt={`${tech.name} logo`}
                          width={20}
                          height={20}
                          className="h-5 w-5 object-contain"
                        />
                      </div>
                      <span className="font-mono text-[14px] font-bold text-obsidian">
                        {tech.name}
                      </span>
                    </div>

                    <span className="font-mono text-[9px] tracking-[0.14em] uppercase border border-beige/40 bg-surface-container px-2 py-0.5 text-ink-muted">
                      {tech.category}
                    </span>
                  </div>

                  {/* Production Rationale Note */}
                  <p className="mt-3.5 font-sans text-[13px] leading-[1.6] text-ink-secondary">
                    {note}
                  </p>
                </div>

                {/* Card Footer Line */}
                <div className="mt-4 flex items-center justify-between pt-3 border-t border-beige/15 font-mono text-[9px] tracking-[0.14em] text-ink-muted uppercase">
                  <span>DEPLOYED</span>
                  <span className="group-hover:text-maroon transition-colors">
                    PROD_VERIFIED
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button Trigger */}
        {hasMore && (
          <div className="mt-10 flex flex-col items-center justify-center border-t border-beige/30 pt-8">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="group inline-flex items-center gap-3 border border-maroon bg-transparent px-8 py-3 font-mono text-[11px] tracking-[0.18em] uppercase text-maroon transition-all duration-300 hover:bg-maroon hover:text-milky-white shadow-sm cursor-pointer"
            >
              <span>
                {isExpanded
                  ? "Collapse Tech Matrix"
                  : `Load More Technologies [ +${remainingCount} ]`}
              </span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : "group-hover:translate-y-0.5"
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
