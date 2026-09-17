"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X, Layers, Sparkles } from "lucide-react";
import type { Project, ProjectTechIconMap } from "@/app/_types/home";
import { ProjectArchiveCard } from "./ProjectArchiveCard";
import { ProjectDetailModal } from "@/app/_components/home/ProjectDetailModal";

type FilterType = "all" | "web" | "mobile";

interface ProjectsArchiveViewProps {
  projects: Project[];
  techIcons?: ProjectTechIconMap;
}

export function ProjectsArchiveView({
  projects,
  techIcons,
}: ProjectsArchiveViewProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Compute counts for pill badges
  const counts = useMemo(() => {
    return {
      all: projects.length,
      web: projects.filter((p) => p.type.toLowerCase().includes("web")).length,
      mobile: projects.filter((p) => p.type.toLowerCase().includes("mobile")).length,
    };
  }, [projects]);

  // Filtered projects list
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        activeFilter === "all" ||
        (activeFilter === "web" && p.type.toLowerCase().includes("web")) ||
        (activeFilter === "mobile" && p.type.toLowerCase().includes("mobile"));

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.role.toLowerCase().includes(query) ||
        p.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [projects, activeFilter, searchQuery]);

  const handleQuickInspect = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const clearFilters = () => {
    setActiveFilter("all");
    setSearchQuery("");
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 md:px-8 md:py-12">
      {/* Controls Bar: Pill Filters & Search */}
      <div className="flex flex-col gap-6 border-b border-beige/35 pb-8 md:flex-row md:items-center md:justify-between">
        {/* Pill Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="mr-1 hidden items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-muted sm:flex">
            <SlidersHorizontal className="h-3.5 w-3.5 text-maroon" />
            <span>FILTER:</span>
          </div>

          {/* All Works Pill */}
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 font-mono text-[11px] tracking-[0.14em] uppercase transition-all duration-300 ${
              activeFilter === "all"
                ? "border-maroon bg-maroon text-milky-white shadow-md shadow-maroon/20 font-semibold"
                : "border-beige/50 bg-surface-container-low text-ink hover:border-maroon/50 hover:bg-surface-container"
            }`}
          >
            <span>All Works</span>
            <span
              className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${
                activeFilter === "all"
                  ? "bg-milky-white/20 text-milky-white"
                  : "bg-beige/40 text-ink-muted"
              }`}
            >
              {String(counts.all).padStart(2, "0")}
            </span>
          </button>

          {/* Web Applications Pill */}
          <button
            type="button"
            onClick={() => setActiveFilter("web")}
            className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 font-mono text-[11px] tracking-[0.14em] uppercase transition-all duration-300 ${
              activeFilter === "web"
                ? "border-maroon bg-maroon text-milky-white shadow-md shadow-maroon/20 font-semibold"
                : "border-beige/50 bg-surface-container-low text-ink hover:border-maroon/50 hover:bg-surface-container"
            }`}
          >
            <span>Web Applications</span>
            <span
              className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${
                activeFilter === "web"
                  ? "bg-milky-white/20 text-milky-white"
                  : "bg-beige/40 text-ink-muted"
              }`}
            >
              {String(counts.web).padStart(2, "0")}
            </span>
          </button>

          {/* Mobile Apps Pill */}
          <button
            type="button"
            onClick={() => setActiveFilter("mobile")}
            className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 font-mono text-[11px] tracking-[0.14em] uppercase transition-all duration-300 ${
              activeFilter === "mobile"
                ? "border-maroon bg-maroon text-milky-white shadow-md shadow-maroon/20 font-semibold"
                : "border-beige/50 bg-surface-container-low text-ink hover:border-maroon/50 hover:bg-surface-container"
            }`}
          >
            <span>Mobile Apps</span>
            <span
              className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${
                activeFilter === "mobile"
                  ? "bg-milky-white/20 text-milky-white"
                  : "bg-beige/40 text-ink-muted"
              }`}
            >
              {String(counts.mobile).padStart(2, "0")}
            </span>
          </button>
        </div>

        {/* Search Input Box */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tech, title, role..."
            className="w-full border border-beige/50 bg-surface-container-lowest py-2 pl-9 pr-8 font-mono text-[11px] text-ink placeholder:text-ink-muted focus:border-maroon focus:outline-none focus:ring-1 focus:ring-maroon transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-muted hover:text-obsidian"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Telemetry Index Status Bar */}
      <div className="mt-6 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-maroon animate-pulse" />
          <span>
            CATALOG INDEX: DISPLAYING {String(filteredProjects.length).padStart(2, "0")} OF{" "}
            {String(projects.length).padStart(2, "0")} MONOGRAPHS
          </span>
        </div>

        {(activeFilter !== "all" || searchQuery) && (
          <button
            type="button"
            onClick={clearFilters}
            className="flex items-center gap-1 text-maroon hover:underline font-semibold"
          >
            <X className="h-3 w-3" />
            <span>RESET FILTERS</span>
          </button>
        )}
      </div>

      {/* Large Box Cards Grid */}
      {filteredProjects.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2">
          {filteredProjects.map((project, index) => {
            const originalIndex = projects.findIndex((p) => p.slug === project.slug);
            const chapterNumber = String(originalIndex + 1).padStart(2, "0");

            return (
              <ProjectArchiveCard
                key={project.slug}
                project={project}
                chapterNumber={chapterNumber}
                techIcons={techIcons}
                onQuickInspect={handleQuickInspect}
                priority={index < 2}
              />
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="mt-12 flex flex-col items-center justify-center border border-dashed border-beige/60 bg-surface-container-low/50 p-12 text-center">
          <Layers className="h-10 w-10 text-maroon/50" />
          <h3 className="mt-4 font-display text-[22px] font-bold text-obsidian">
            No Monographs Matched Your Query
          </h3>
          <p className="mt-2 max-w-md font-sans text-[13px] text-ink-secondary">
            No projects matched the current category filter and search keyword. Try selecting a
            different filter or resetting your search.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-6 border border-maroon bg-maroon px-6 py-2.5 font-mono text-[11px] tracking-[0.16em] uppercase text-milky-white hover:bg-maroon-glow transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Integrated Quick Inspect Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        techIcons={techIcons}
      />
    </section>
  );
}
