import Link from "next/link";
import Image from "next/image";
import type { Project, ProjectTechIconMap } from "@/app/_types/home";

type ProjectsSectionProps = {
  projects: Project[];
  techIcons: ProjectTechIconMap;
  sectionId?: string;
  title?: string;
  description?: string;
  showViewAllButton?: boolean;
  viewAllHref?: string;
  viewAllLabel?: string;
};

type ProjectCardProps = {
  project: Project;
  techIcons: ProjectTechIconMap;
};

function ProjectCard({ project, techIcons }: Readonly<ProjectCardProps>) {
  const isWebsiteProject = project.type.toLowerCase().includes("website");

  const typeBadgeClassName = isWebsiteProject
    ? "border-red-500/35 bg-red-500/10 text-red-700 hover:border-red-500/50 hover:bg-red-500/15 hover:text-red-800"
    : "border-emerald-500/35 bg-emerald-500/10 text-emerald-700 hover:border-emerald-500/50 hover:bg-emerald-500/15 hover:text-emerald-800";

  const teamBadgeClassName =
    project.team === "Solo"
      ? "border-violet-500/35 bg-violet-500/10 text-violet-700 hover:border-violet-500/50 hover:bg-violet-500/15 hover:text-violet-800"
      : "border-sky-500/35 bg-sky-500/10 text-sky-700 hover:border-sky-500/50 hover:bg-sky-500/15 hover:text-sky-800";

  const roleBadgeClassName =
    "border-amber-500/35 bg-amber-500/10 text-amber-800 hover:border-amber-500/50 hover:bg-amber-500/15 hover:text-amber-900";

  const typeLabel = isWebsiteProject ? "Website" : "Mobile";

  return (
    <article key={project.title} className="group flex h-full flex-col border border-outline-variant bg-surface-container-lowest">
      <div className="relative w-full overflow-hidden border-b border-surface-variant bg-surface-container-highest" style={{ paddingBottom: '75%' }}>
        <Image
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.08]"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="max-w-[85%] text-[30px] leading-[1.15] font-bold tracking-[-0.01em] text-on-surface sm:text-[34px] md:text-[36px]">{project.title}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          <span
            className={`inline-flex items-center border px-2.5 py-1 font-space text-[10px] tracking-[0.14em] uppercase transition-colors duration-300 ease-out ${typeBadgeClassName}`}
          >
            {typeLabel}
          </span>
          <span
            className={`inline-flex items-center border px-2.5 py-1 font-space text-[10px] tracking-[0.14em] uppercase transition-colors duration-300 ease-out ${roleBadgeClassName}`}
          >
            {project.role}
          </span>
          <span
            className={`inline-flex items-center border px-2.5 py-1 font-space text-[10px] tracking-[0.14em] uppercase transition-colors duration-300 ease-out ${teamBadgeClassName}`}
          >
            {project.team}
          </span>
        </div>
        <p className="mt-3 text-[14px] leading-[1.65] text-on-surface-variant sm:text-[15px]">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {project.tags.map((tag) => (
            <span
              key={`${project.title}-${tag}`}
              className="inline-flex items-center gap-2 rounded-full border border-outline-variant/70 bg-surface-container-high px-3 py-1.5 font-space text-[10px] tracking-[0.11em] text-on-surface uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/50 hover:bg-surface-container hover:text-primary"
            >
              <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-surface-container-lowest">
                <Image
                  src={techIcons[tag] ?? "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/code.svg"}
                  alt={`${tag} icon`}
                  width={14}
                  height={14}
                  className="h-3.5 w-3.5 object-contain"
                />
              </span>
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <div className="flex flex-wrap gap-3">
            {isWebsiteProject && project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-primary bg-primary px-4 py-2 font-space text-[10px] tracking-[0.12em] text-on-primary uppercase transition-colors duration-300 ease-out hover:bg-primary-container"
              >
                Live Website
              </a>
            )}
          </div>

          <Link
            href={project.detailHref}
            aria-label={`Lihat detail project ${project.title}`}
            className="inline-flex h-9 items-center justify-center self-end border border-outline-variant bg-surface-container px-3 font-space text-[10px] tracking-[0.12em] text-on-surface uppercase transition-colors duration-300 ease-out hover:border-primary hover:text-primary"
          >
            {'{Detail}'}
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection({
  projects,
  techIcons,
  sectionId = "projects",
  title = "Projects",
  description = "Selected works demonstrating disciplined approach to problem-solving.",
  showViewAllButton = true,
  viewAllHref = "/projects",
  viewAllLabel = "Lihat Semua Projects",
}: Readonly<ProjectsSectionProps>) {
  return (
    <section id={sectionId} className="scroll-mt-24 bg-surface-container-low py-14 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <h2 className="text-[36px] leading-[1.08] font-bold tracking-[-0.02em] text-on-surface sm:text-[44px] md:text-[46px]">{title}</h2>
        <p className="mt-3 max-w-160 text-[16px] leading-[1.65] text-on-surface-variant sm:text-[18px]">
          {description}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} techIcons={techIcons} />
          ))}
        </div>

        {showViewAllButton && (
          <div className="mt-10">
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-2 border border-primary bg-primary px-6 py-3 font-space text-[11px] tracking-[0.12em] text-on-primary uppercase transition-colors duration-400 ease-in-out hover:bg-primary-container"
            >
              {viewAllLabel} -&gt;
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
