"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { ChevronDown, Code2 } from "lucide-react";
import type { TechStackCategory, TechStackItem } from "@/app/_types/home";

type TechStackSectionProps = {
  categories: TechStackCategory[];
};

const CATEGORY_PREVIEW_LIMIT = 6;
const GROUP_PREVIEW_LIMIT = 2;

const productionNotes: Record<string, string> = {
  React: "Component architecture and state management for interactive dashboards.",
  Vue: "Reactive interfaces for the HikePass web administration portal.",
  "Tailwind CSS": "Design tokens and responsive layouts across screen sizes.",
  TypeScript: "Typed interfaces and data contracts from client to server.",
  HTML5: "Semantic page structure, accessible markup, and metadata.",
  CSS3: "Grid layouts, fluid typography, and custom animations.",
  Bootstrap: "Responsive layout scaffolding for the HijauKu municipal portal.",
  Flutter: "Cross-platform interfaces and telemetry gauges for RideAssist.",
  "Next.js": "Server-rendered React interfaces and booking workflows for FutsalPro.",
  "Node.js": "Asynchronous services, API endpoints, and content delivery.",
  PostgreSQL: "Relational data models, indexed queries, and reliable transactions.",
  "REST API": "JSON contracts, HTTP status handling, and webhook integrations.",
  NestJS: "Modular backend services with dependency injection.",
  Firebase: "Real-time data sync, authentication, and push notifications.",
  Laravel: "Transactional APIs, authentication, and booking workflows for HikePass.",
  MySQL: "Relational storage for HikePass reservations and check-in records.",
  Figma: "Interface prototyping, component libraries, and design system planning.",
  Vercel: "Automated deployments, preview environments, and serverless hosting.",
  Supabase: "PostgreSQL, authentication, and row-level security for FutsalPro.",
  GitHub: "Code collaboration, issue tracking, and repository workflows.",
  Git: "Version control, focused commits, and branch management.",
  Docker: "Containerized services and local orchestration with Docker Compose.",
};

const categoryDescriptions: Record<string, string> = {
  Frontend: "Interfaces & interaction",
  "Backend & Database": "Services & data",
  Tools: "Design & delivery",
};

function TechnologyEntry({ item }: Readonly<{ item: TechStackItem }>) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <li className="min-w-0 border-b border-beige/70 py-6">
      <div className="flex min-h-8 items-center gap-3">
        <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center">
          {logoFailed ? (
            <Code2 className="h-6 w-6 text-ink-muted" strokeWidth={1.5} />
          ) : (
            <Image
              src={item.logo}
              alt=""
              width={28}
              height={28}
              onError={() => setLogoFailed(true)}
              className="h-7 w-7 object-contain"
            />
          )}
        </span>
        <h4 className="min-w-0 font-sans text-[17px] leading-snug font-semibold tracking-[-0.02em] text-obsidian">
          {item.name}
        </h4>
      </div>
      {productionNotes[item.name] && (
        <p className="mt-3 max-w-[38ch] font-sans text-[14px] leading-7 text-ink-secondary sm:text-[15px]">
          {productionNotes[item.name]}
        </p>
      )}
    </li>
  );
}

export function TechStackSection({ categories }: Readonly<TechStackSectionProps>) {
  const id = useId();
  const [activeCategory, setActiveCategory] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);

  const isAll = activeCategory === "All";
  const availableCategories = categories.filter((category) => category.items.length > 0);
  const matchingCategories = isAll
    ? availableCategories
    : availableCategories.filter((category) => category.label === activeCategory);
  const previewLimit = isAll ? GROUP_PREVIEW_LIMIT : CATEGORY_PREVIEW_LIMIT;
  const groups = matchingCategories.map((category) => ({
    ...category,
    visibleItems: isExpanded ? category.items : category.items.slice(0, previewLimit),
  }));
  const totalCount = availableCategories.reduce((total, category) => total + category.items.length, 0);
  const matchingCount = matchingCategories.reduce((total, category) => total + category.items.length, 0);
  const previewCount = matchingCategories.reduce(
    (total, category) => total + Math.min(category.items.length, previewLimit),
    0,
  );
  const visibleCount = groups.reduce((total, category) => total + category.visibleItems.length, 0);
  const hasMore = matchingCount > previewCount;
  const filters = [
    { label: "All", count: totalCount },
    ...availableCategories.map((category) => ({ label: category.label, count: category.items.length })),
  ];
  const resultsId = `${id}-results`;
  const headingId = `${id}-heading`;

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    setActiveCategory(category);
    setIsExpanded(false);
  };

  return (
    <section
      id="tech"
      aria-labelledby={headingId}
      className="scroll-mt-20 border-b border-beige/35 bg-background py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <header className="max-w-3xl">
          <p className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] leading-5 text-ink-secondary">
            <span className="font-mono text-maroon">03 /</span>
            <span className="font-sans font-medium">Engineering capabilities</span>
          </p>
          <h2
            id={headingId}
            className="font-display text-[38px] leading-[1.08] font-bold tracking-[-0.03em] text-obsidian sm:text-[48px] md:text-[54px]"
          >
            Systems Matrix
          </h2>
          <p className="mt-4 max-w-xl font-sans text-[15px] leading-7 text-ink-secondary sm:text-[16px]">
            The technologies I build with, and what I use them for.
          </p>
        </header>

        <div className="mt-8 border-b border-beige/70 md:mt-10">
          <div className="-mx-1 overflow-x-auto px-1 pt-1 [scrollbar-color:var(--beige-warm)_transparent] [scrollbar-width:thin]">
            <div role="group" aria-label="Filter technologies by category" className="flex w-max min-w-full gap-1">
              {filters.map((filter) => {
                const isActive = activeCategory === filter.label;

                return (
                  <button
                    key={filter.label}
                    type="button"
                    aria-pressed={isActive}
                    aria-controls={resultsId}
                    aria-label={`${filter.label}, ${filter.count} technologies`}
                    onClick={() => handleCategoryChange(filter.label)}
                    className={`inline-flex min-h-12 shrink-0 cursor-pointer items-center gap-2.5 border-b-2 px-4 py-3 font-sans text-[14px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-maroon motion-reduce:transition-none sm:px-5 ${
                      isActive
                        ? "border-maroon text-maroon"
                        : "border-transparent text-ink-secondary hover:border-beige-dark hover:text-obsidian"
                    }`}
                  >
                    <span>{filter.label}</span>
                    <span className="font-mono text-[12px] font-normal tabular-nums">
                      {filter.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div
          id={resultsId}
          className={`mt-8 md:mt-10 ${isAll ? "grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12" : ""}`}
        >
          {groups.length > 0 ? (
            groups.map((category, index) => (
              <section key={category.label} aria-labelledby={`${id}-category-${index}`} className="min-w-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 id={`${id}-category-${index}`} className="font-sans text-[16px] leading-6 font-semibold text-obsidian">
                    {category.label}
                  </h3>
                  <span className="font-sans text-[12px] leading-5 text-ink-muted">
                    {categoryDescriptions[category.label]}
                  </span>
                </div>
                <ul className={`mt-4 border-t border-beige/70 ${isAll ? "" : "grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12"}`}>
                  {category.visibleItems.map((item) => (
                    <TechnologyEntry key={item.name} item={item} />
                  ))}
                </ul>
              </section>
            ))
          ) : (
            <p className="py-8 font-sans text-[15px] leading-7 text-ink-secondary">
              No technologies listed yet.
            </p>
          )}
        </div>

        <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center md:mt-8">
          <p role="status" aria-live="polite" aria-atomic="true" className="font-sans text-[13px] leading-6 text-ink-muted">
            Showing <span className="font-medium tabular-nums text-ink-secondary">{visibleCount}</span> of{" "}
            <span className="tabular-nums">{matchingCount}</span> technologies
            {!isAll && ` in ${activeCategory}`}
          </p>
          {hasMore && (
            <button
              type="button"
              aria-expanded={isExpanded}
              aria-controls={resultsId}
              onClick={() => setIsExpanded((expanded) => !expanded)}
              className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-3 border border-maroon px-5 py-3 font-sans text-[14px] font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-milky-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maroon motion-reduce:transition-none sm:w-auto"
            >
              <span>
                {isExpanded ? "Show less" : `View all ${matchingCount} technologies`}
              </span>
              <ChevronDown
                aria-hidden="true"
                className={`h-4 w-4 transition-transform duration-200 motion-reduce:transition-none ${isExpanded ? "rotate-180" : ""}`}
              />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
