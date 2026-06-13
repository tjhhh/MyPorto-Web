import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProjectDetailFooter, ProjectDetailNavbar, FeatureShowcase } from "@/app/_components/project-detail";
import { projectsRegistry } from "@/app/_data/projects-registry";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(projectsRegistry).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsRegistry[slug];

  if (!project) {
    return {
      title: "Project Not Found | Portfolio",
    };
  }

  return {
    title: `${project.projectName} — Project Detail`,
    description: project.hero.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const projectData = projectsRegistry[slug];

  if (!projectData) {
    notFound();
  }

  const { techStack, capabilities, architecture, challenge } = projectData;

  return (
    <div id="top" className="min-h-screen bg-background text-on-surface">
      <ProjectDetailNavbar
        projectName={projectData.projectName}
        sectionLabel={projectData.sectionLabel}
        backHref={projectData.backHref}
        backLabel={projectData.backLabel}
        navLinks={projectData.navLinks}
      />

      <main className="pb-16">
        <section className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col gap-6 lg:col-span-5">
              <div className="flex flex-wrap gap-2">
                {projectData.hero.tags.map((t) => (
                  <span key={t} className="border border-outline-variant bg-surface-container-lowest px-3 py-1 font-space text-[10px] uppercase tracking-[0.12em] text-on-surface-variant">
                    {t}
                  </span>
                ))}
              </div>

              <h2 className="text-[44px] leading-[1.05] font-bold tracking-[-0.03em] text-primary sm:text-[56px] lg:text-[64px]">
                {projectData.hero.title}
              </h2>
              <p className="max-w-xl border-l-2 border-primary pl-5 text-[17px] leading-[1.65] text-on-surface-variant sm:text-[18px]">
                {projectData.hero.description}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {projectData.hero.primaryAction.href && !projectData.hero.primaryAction.href.includes("github.com") && (
                  projectData.hero.primaryAction.href.startsWith("http") ? (
                    <a
                      href={projectData.hero.primaryAction.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 font-space text-[10px] uppercase tracking-[0.12em] text-on-primary transition-colors duration-300 ease-out hover:bg-primary-container"
                    >
                      {projectData.hero.primaryAction.label}
                      {' '}
                      <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                        {projectData.hero.primaryAction.icon || "arrow_outward"}
                      </span>
                    </a>
                  ) : (
                    <Link
                      href={projectData.hero.primaryAction.href}
                      className="inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 font-space text-[10px] uppercase tracking-[0.12em] text-on-primary transition-colors duration-300 ease-out hover:bg-primary-container"
                    >
                      {projectData.hero.primaryAction.label}
                      {' '}
                      <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                        {projectData.hero.primaryAction.icon || "arrow_downward"}
                      </span>
                    </Link>
                  )
                )}

                {projectData.hero.secondaryAction.href && !projectData.hero.secondaryAction.href.includes("github.com") && (
                  projectData.hero.secondaryAction.href.startsWith("http") ? (
                    <a
                      href={projectData.hero.secondaryAction.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-outline-variant bg-surface-container-lowest px-5 py-3 font-space text-[10px] uppercase tracking-[0.12em] text-on-surface transition-colors duration-300 ease-out hover:border-primary hover:text-primary"
                    >
                      {projectData.hero.secondaryAction.label}
                      {projectData.hero.secondaryAction.icon && (
                        <>
                          {' '}
                          <span aria-hidden="true" className="material-symbols-outlined text-[18px]">{projectData.hero.secondaryAction.icon}</span>
                        </>
                      )}
                    </a>
                  ) : (
                    <Link
                      href={projectData.hero.secondaryAction.href}
                      className="inline-flex items-center gap-2 border border-outline-variant bg-surface-container-lowest px-5 py-3 font-space text-[10px] uppercase tracking-[0.12em] text-on-surface transition-colors duration-300 ease-out hover:border-primary hover:text-primary"
                    >
                      {projectData.hero.secondaryAction.label}
                      {projectData.hero.secondaryAction.icon && (
                        <>
                          {' '}
                          <span aria-hidden="true" className="material-symbols-outlined text-[18px]">{projectData.hero.secondaryAction.icon}</span>
                        </>
                      )}
                    </Link>
                  )
                )}
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {projectData.hero.metrics.map((m) => (
                  <div key={m.label} className="border border-outline-variant bg-surface-container-lowest px-5 py-4">
                    <span className="font-space text-[10px] uppercase tracking-[0.12em] text-on-surface-variant">{m.label}</span>
                    <p className="mt-2 text-[28px] font-bold tracking-[-0.02em] text-primary">{m.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="group relative aspect-video overflow-hidden border border-outline-variant bg-white">
                <Image
                  alt={`${projectData.projectName} mockup`}
                  className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  src={projectData.hero.image.src}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/10 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 md:px-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-12 lg:col-span-8">
            <article id="overview" className="scroll-mt-24">
              <h3 className="border-b border-outline-variant pb-4 text-[30px] leading-[1.12] font-bold tracking-[-0.02em] text-primary sm:text-[36px]">
                {projectData.overview.title || "Project Overview"}
              </h3>
              {projectData.overview.paragraphs.map((p, index) => {
                const isChallenge = p.startsWith("THE CHALLENGE:");
                const isSolution = p.startsWith("THE SOLUTION:");
                let content = p;
                let titlePrefix = "";
                
                if (isChallenge) {
                  titlePrefix = "THE CHALLENGE";
                  content = p.replace("THE CHALLENGE:", "").trim();
                } else if (isSolution) {
                  titlePrefix = "THE SOLUTION";
                  content = p.replace("THE SOLUTION:", "").trim();
                }

                return (
                  <div key={index} className={`max-w-3xl ${index > 0 ? "mt-6" : "mt-6"}`}>
                    {titlePrefix && (
                      <span className={`inline-block font-space text-[9px] uppercase tracking-[0.14em] font-bold px-2 py-0.5 mb-2 border ${isChallenge ? "text-error border-error/20 bg-error/5" : "text-primary border-primary/20 bg-primary/5"}`}>
                        {titlePrefix}
                      </span>
                    )}
                    <p className={`text-[17px] leading-[1.7] text-on-surface-variant sm:text-[18px] ${isChallenge ? "border-l-2 border-error/40 pl-4" : isSolution ? "border-l-2 border-primary/40 pl-4" : ""}`}>
                      {content}
                    </p>
                  </div>
                );
              })}
            </article>

            {/* Custom Interactive Challenges & Solution Section for Recruiter Wow-Factor */}
            {challenge && (
              <article id="engineering-workaround" className="scroll-mt-24 border border-primary/20 bg-surface-container-low/40 p-6 md:p-8">
                <span className="font-space text-[10px] uppercase tracking-[0.14em] text-primary font-bold">Key Engineering Challenge</span>
                <h3 className="text-[22px] font-bold tracking-[-0.02em] text-on-surface mt-1 mb-4">{challenge.title}</h3>
                <div className="space-y-4 text-[15px] leading-[1.6] text-on-surface-variant">
                  <p>
                    <strong>The Hurdle:</strong> {challenge.problem}
                  </p>
                  <p>
                    <strong>The Engineering Solution:</strong> {challenge.solution}
                  </p>
                  {challenge.bullets && challenge.bullets.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2 text-[14px]">
                      {challenge.bullets.map((bullet, index) => {
                        const colonIndex = bullet.indexOf(":");
                        if (colonIndex !== -1) {
                          const boldText = bullet.slice(0, colonIndex);
                          const remainingText = bullet.slice(colonIndex + 1);
                          return (
                            <li key={index}>
                              <strong className="text-on-surface">{boldText}:</strong>{remainingText}
                            </li>
                          );
                        }
                        return <li key={index}>{bullet}</li>;
                      })}
                    </ul>
                  )}
                  {challenge.result && (
                    <p className="text-[14px] italic text-primary/95 mt-2">
                      {challenge.result}
                    </p>
                  )}
                </div>
              </article>
            )}

            <article id="stack" className="scroll-mt-24">
              <h3 className="border-b border-outline-variant pb-4 text-[30px] leading-[1.12] font-bold tracking-[-0.02em] text-primary sm:text-[36px]">
                Tech Stack
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {techStack.map((tech) => {
                  const colonIndex = tech.indexOf(":");
                  const category = colonIndex !== -1 ? tech.slice(0, colonIndex) : tech;
                  const details = colonIndex !== -1 ? tech.slice(colonIndex + 1) : "";
                  return (
                    <div
                      key={tech}
                      className="border border-outline-variant bg-surface-container-lowest p-5 transition-all duration-300 ease-out hover:border-primary/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 group"
                    >
                      <h4 className="font-space text-[10px] uppercase tracking-[0.12em] text-primary font-bold">
                        {category}
                      </h4>
                      {details && (
                        <p className="mt-2 text-[14px] leading-relaxed text-on-surface-variant">
                          {details.trim()}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </article>

            <article id="capabilities" className="scroll-mt-24">
              <h3 className="border-b border-outline-variant pb-4 text-[30px] leading-[1.12] font-bold tracking-[-0.02em] text-primary sm:text-[36px]">
                Core Capabilities
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                {capabilities.map((capability) => (
                  <div
                    key={capability.title}
                    className="flex gap-5 border border-outline-variant bg-surface-container-lowest p-6 transition-all duration-300 ease-out hover:border-primary/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 group"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-outline-variant bg-surface-container-low text-primary transition-colors duration-300 group-hover:border-primary">
                      <span aria-hidden="true" className="material-symbols-outlined text-2xl">{capability.icon}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-space text-[10px] uppercase tracking-[0.14em] text-primary font-bold">
                        {capability.label}
                      </span>
                      <h4 className="mt-1 text-[18px] font-bold tracking-[-0.01em] text-on-surface">
                        {capability.title}
                      </h4>
                      <p className="mt-2 text-[14px] leading-[1.6] text-on-surface-variant">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

          </div>

          <aside className="flex flex-col gap-8 lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <section className="border border-outline-variant bg-surface-container-lowest p-6">
              <h4 className="border-b border-outline-variant pb-2 font-space text-[10px] uppercase tracking-[0.12em] text-primary">Project Metadata</h4>
              <dl className="mt-6 flex flex-col gap-5">
                <div className="border-b border-outline-variant pb-4">
                  <dt className="font-space text-[10px] uppercase tracking-[0.12em] text-on-surface-variant">Role</dt>
                  <dd className="mt-2 text-[15px] font-bold text-primary">{projectData.metadata.role}</dd>
                </div>
                <div className="border-b border-outline-variant pb-4">
                  <dt className="font-space text-[10px] uppercase tracking-[0.12em] text-on-surface-variant">Timeline</dt>
                  <dd className="mt-2 text-[15px] font-bold text-primary">{projectData.metadata.timeline}</dd>
                </div>
                <div>
                  <dt className="font-space text-[10px] uppercase tracking-[0.12em] text-on-surface-variant">Category</dt>
                  <dd className="mt-2 text-[15px] font-bold text-primary">{projectData.metadata.category}</dd>
                </div>
              </dl>
            </section>

            <section id="architecture" className="scroll-mt-24 border border-outline-variant bg-surface-container-lowest p-6">
              <h4 className="border-b border-outline-variant pb-2 font-space text-[10px] uppercase tracking-[0.12em] text-primary">System Architecture</h4>
              <div className="mt-6 flex flex-col gap-0 text-[14px] leading-[1.55]">
                {architecture.steps.map((step, index) => (
                  <div key={step.title} className="flex flex-col">
                    <div className={`border p-4 transition-all duration-300 hover:border-primary/70 hover:shadow-sm ${step.highlighted ? "border-primary bg-surface-container-low text-primary" : "border-outline-variant bg-surface-container-lowest text-on-surface"}`}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-space text-[9px] uppercase tracking-[0.12em] opacity-80">
                          Step {String(index + 1).padStart(2, '0')}
                        </span>
                        {step.highlighted && (
                          <span className="bg-primary/10 text-primary text-[8px] font-space px-1.5 py-0.5 uppercase tracking-[0.08em] font-bold">
                            Critical Path
                          </span>
                        )}
                      </div>
                      <strong className="text-[15px] block mb-1">[{step.title}]</strong>
                      <p className="text-[13px] text-on-surface-variant leading-relaxed">{step.body}</p>
                    </div>

                    {index < architecture.steps.length - 1 ? (
                      <div className="relative -my-px flex justify-center">
                        <div className="h-6 w-px bg-primary" />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>

            <section className="border border-outline-variant bg-surface-container p-6">
              <h4 className="font-space text-[10px] uppercase tracking-[0.12em] text-primary">Quick Actions</h4>
              <div className="mt-5 flex flex-col gap-3">
                {projectData.hero.primaryAction.href && projectData.hero.primaryAction.href.startsWith("http") && !projectData.hero.primaryAction.href.includes("github.com") && (
                  <a
                    href={projectData.hero.primaryAction.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between border border-primary bg-primary px-4 py-3 font-space text-[10px] uppercase tracking-[0.12em] text-on-primary transition-colors duration-300 ease-out hover:bg-primary-container"
                  >
                    Launch Platform
                    {' '}
                    <span aria-hidden="true" className="material-symbols-outlined text-[18px]">launch</span>
                  </a>
                )}
                {projectData.hero.secondaryAction.href && projectData.hero.secondaryAction.href.startsWith("http") && !projectData.hero.secondaryAction.href.includes("github.com") && (
                  <a
                    href={projectData.hero.secondaryAction.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between border border-outline-variant bg-surface-container-lowest px-4 py-3 font-space text-[10px] uppercase tracking-[0.12em] text-on-surface transition-colors duration-300 ease-out hover:border-primary hover:text-primary"
                  >
                    GitHub Repo
                    {' '}
                    <span aria-hidden="true" className="material-symbols-outlined text-[18px]">code</span>
                  </a>
                )}
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center border border-outline-variant bg-surface-container px-4 py-3 font-space text-[10px] uppercase tracking-[0.12em] text-on-surface transition-colors duration-300 ease-out hover:border-primary hover:text-primary"
                >
                  Return to Projects
                </Link>
              </div>
            </section>
          </aside>
        </section>

        {projectData.showcase && (
          <section id="showcase" className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8 md:py-16 lg:py-20 border-t border-outline-variant/35 mt-8 md:mt-16 scroll-mt-24">
            <h2 className="border-b border-outline-variant pb-4 text-[30px] leading-[1.12] font-bold tracking-[-0.02em] text-primary sm:text-[36px] mb-8">
              {projectData.showcase.title || "Showcase"}
            </h2>

            {projectData.showcase.features && projectData.showcase.features.length > 0 ? (
              <div className="flex flex-col gap-8">
                <FeatureShowcase
                  features={projectData.showcase.features}
                  fallbackImage={projectData.hero.image.src}
                  projectName={projectData.projectName}
                  visualTitle={projectData.showcase.visualTitle}
                />
                
                {(projectData.hero.primaryAction.href || projectData.hero.secondaryAction.href) && (
                  <div className="flex flex-wrap gap-3 pt-6 border-t border-outline-variant/35">
                    {projectData.hero.primaryAction.href && !projectData.hero.primaryAction.href.includes("github.com") && (
                      projectData.hero.primaryAction.href.startsWith("http") ? (
                        <a
                          href={projectData.hero.primaryAction.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 font-space text-[10px] uppercase tracking-[0.12em] text-on-primary transition-colors duration-300 ease-out hover:bg-primary-container"
                        >
                          {projectData.showcase.primaryActionLabel || "View Live"}
                          {' '}
                          <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                            {projectData.showcase.primaryActionIcon || "open_in_new"}
                          </span>
                        </a>
                      ) : (
                        <Link
                          href={projectData.hero.primaryAction.href}
                          className="inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 font-space text-[10px] uppercase tracking-[0.12em] text-on-primary transition-colors duration-300 ease-out hover:bg-primary-container"
                        >
                          {projectData.showcase.primaryActionLabel || "Launch Application"}
                          {' '}
                          <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                            {projectData.showcase.primaryActionIcon || "arrow_downward"}
                          </span>
                        </Link>
                      )
                    )}

                    {projectData.hero.secondaryAction.href && !projectData.hero.secondaryAction.href.includes("github.com") && (
                      projectData.hero.secondaryAction.href.startsWith("http") ? (
                        <a
                          href={projectData.hero.secondaryAction.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-outline-variant bg-surface-container-lowest px-5 py-3 font-space text-[10px] uppercase tracking-[0.12em] text-on-surface transition-colors duration-300 ease-out hover:border-primary hover:text-primary"
                        >
                          {projectData.showcase.secondaryActionLabel || "Repository"}
                          {' '}
                          <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                            {projectData.showcase.secondaryActionIcon || "code"}
                          </span>
                        </a>
                      ) : (
                        <Link
                          href={projectData.hero.secondaryAction.href}
                          className="inline-flex items-center gap-2 border border-outline-variant bg-surface-container-lowest px-5 py-3 font-space text-[10px] uppercase tracking-[0.12em] text-on-surface transition-colors duration-300 ease-out hover:border-primary hover:text-primary"
                        >
                          {projectData.showcase.secondaryActionLabel || "Repository"}
                          {' '}
                          <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                            {projectData.showcase.secondaryActionIcon || "code"}
                          </span>
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="group relative aspect-video overflow-hidden border border-outline-variant bg-white">
                  <Image
                    alt={`${projectData.projectName} showcase preview`}
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    src={projectData.hero.image.src}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-surface-container-lowest/95 backdrop-blur-xs px-4 py-2 border border-primary text-primary font-space text-[10px] uppercase tracking-[0.12em] shadow-sm">
                      {projectData.showcase.visualTitle || "Interface Preview"}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-4">
                  {projectData.hero.primaryAction.href && !projectData.hero.primaryAction.href.includes("github.com") && (
                    projectData.hero.primaryAction.href.startsWith("http") ? (
                      <a
                        href={projectData.hero.primaryAction.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-between border border-primary bg-primary px-5 py-4 font-space text-[10px] uppercase tracking-[0.12em] text-on-primary transition-colors duration-300 ease-out hover:bg-primary-container"
                      >
                        {projectData.showcase.primaryActionLabel || "View Live"}
                        {' '}
                        <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                          {projectData.showcase.primaryActionIcon || "open_in_new"}
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={projectData.hero.primaryAction.href}
                        className="inline-flex w-full items-center justify-between border border-primary bg-primary px-5 py-4 font-space text-[10px] uppercase tracking-[0.12em] text-on-primary transition-colors duration-300 ease-out hover:bg-primary-container"
                      >
                        {projectData.showcase.primaryActionLabel || "Launch Application"}
                        {' '}
                        <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                          {projectData.showcase.primaryActionIcon || "arrow_downward"}
                        </span>
                      </Link>
                    )
                  )}

                  {projectData.hero.secondaryAction.href && !projectData.hero.secondaryAction.href.includes("github.com") && (
                    projectData.hero.secondaryAction.href.startsWith("http") ? (
                      <a
                        href={projectData.hero.secondaryAction.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-between border border-outline-variant bg-surface-container-lowest px-5 py-4 font-space text-[10px] uppercase tracking-[0.12em] text-on-surface transition-colors duration-300 ease-out hover:border-primary hover:text-primary"
                      >
                        {projectData.showcase.secondaryActionLabel || "Repository"}
                        {' '}
                        <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                          {projectData.showcase.secondaryActionIcon || "code"}
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={projectData.hero.secondaryAction.href}
                        className="inline-flex w-full items-center justify-between border border-outline-variant bg-surface-container-lowest px-5 py-4 font-space text-[10px] uppercase tracking-[0.12em] text-on-surface transition-colors duration-300 ease-out hover:border-primary hover:text-primary"
                      >
                        {projectData.showcase.secondaryActionLabel || "Repository"}
                        {' '}
                        <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                          {projectData.showcase.secondaryActionIcon || "code"}
                        </span>
                      </Link>
                    )
                  )}
                </div>
              </div>
            )}
          </section>
        )}
      </main>

      <ProjectDetailFooter
        copyrightLabel={projectData.footer.copyrightLabel}
        links={projectData.footer.links}
      />
    </div>
  );
}
