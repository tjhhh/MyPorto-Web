import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { ProjectDetailPageData } from "@/app/_types/project-detail";

type ProjectNextChapterProps = {
  nextProject: ProjectDetailPageData;
  nextSlug: string;
  nextChapterNumber: string;
};

export function ProjectNextChapter({
  nextProject,
  nextSlug,
  nextChapterNumber,
}: Readonly<ProjectNextChapterProps>) {
  return (
    <section className="border-t border-beige/35 bg-surface-container-low/70 py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="flex items-center justify-between border-b border-beige/35 pb-6">
          <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-maroon font-semibold">
            <span>[ SEQUENTIAL ARCHIVE TRANSITION ]</span>
            <span className="h-[1px] w-6 bg-maroon/40" />
            <span className="text-ink-muted">NEXT CHAPTER DOSSIER</span>
          </div>

          <Link
            href="/#projects"
            className="hidden sm:inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase text-ink-muted transition-colors duration-200 hover:text-maroon"
          >
            <ArrowLeft className="h-3 w-3" />
            <span>Monograph Index</span>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Text & Action Callout */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-maroon font-semibold">
              CHAPTER {nextChapterNumber} · {nextProject.metadata.category}
            </span>

            <Link
              href={`/projects/${nextSlug}`}
              className="group inline-block"
            >
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] font-normal text-ink transition-colors duration-300 group-hover:text-maroon">
                {nextProject.projectName}
              </h3>
            </Link>

            <p className="max-w-xl text-[15px] leading-relaxed text-ink-secondary">
              {nextProject.hero.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={`/projects/${nextSlug}`}
                className="inline-flex items-center gap-2.5 border border-maroon bg-maroon px-6 py-3 font-mono text-[11px] tracking-[0.18em] uppercase text-milky-white transition-all duration-300 hover:bg-maroon-dark hover:border-maroon-dark shadow-sm"
              >
                <span>Read Chapter {nextChapterNumber}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-beige/60 bg-transparent px-5 py-3 font-mono text-[10px] tracking-[0.16em] uppercase text-ink transition-all duration-300 hover:border-maroon hover:text-maroon"
              >
                <span>All 06 Works</span>
              </Link>
            </div>
          </div>

          {/* Mini Image Preview Card */}
          <div className="lg:col-span-5">
            <Link
              href={`/projects/${nextSlug}`}
              className="group block relative aspect-video overflow-hidden border border-beige/40 bg-obsidian transition-all duration-500 hover:border-maroon"
            >
              <Image
                src={nextProject.hero.image.src}
                alt={`${nextProject.projectName} preview thumbnail`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-maroon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 border border-milky-white/20 bg-obsidian/90 px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] uppercase text-cream-dark backdrop-blur-xs">
                CHAPTER {nextChapterNumber}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
