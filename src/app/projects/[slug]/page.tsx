import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ExternalLink,
  ArrowRight,
  Shield,
  Database,
  Terminal,
  Lock,
  Zap,
  Activity,
  Cpu,
  Layers,
  Sliders,
  Smartphone,
  Globe,
  Bell,
  RefreshCw,
  FolderTree,
  Compass,
  Radio,
  FileCheck,
  Calendar,
  CreditCard,
  Mail,
  CheckCircle2,
  Sparkles,
  AlertTriangle,
} from "lucide-react";
import {
  ProjectDetailFooter,
  ProjectDetailNavbar,
  FeatureShowcase,
  ProjectNextChapter,
} from "@/app/_components/project-detail";
import {
  projectsRegistry,
  projectOrder,
  getProjectNavigation,
} from "@/app/_data/projects-registry";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projectOrder.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsRegistry[slug];

  if (!project) {
    return {
      title: "Project Not Found | Monograph Archive",
    };
  }

  return {
    title: `${project.projectName} — Engineering Monograph Dossier`,
    description: project.hero.description,
  };
}

function resolveCapabilityIcon(iconName?: string) {
  switch (iconName?.toLowerCase()) {
    case "calendar_today":
    case "calendar":
      return <Calendar className="h-5 w-5" />;
    case "credit_card":
    case "payment":
      return <CreditCard className="h-5 w-5" />;
    case "mail":
    case "email":
      return <Mail className="h-5 w-5" />;
    case "shield":
    case "security":
      return <Shield className="h-5 w-5" />;
    case "database":
    case "storage":
      return <Database className="h-5 w-5" />;
    case "terminal":
    case "code":
      return <Terminal className="h-5 w-5" />;
    case "lock":
    case "auth":
      return <Lock className="h-5 w-5" />;
    case "zap":
    case "bolt":
    case "speed":
      return <Zap className="h-5 w-5" />;
    case "activity":
    case "monitoring":
      return <Activity className="h-5 w-5" />;
    case "cpu":
    case "chip":
      return <Cpu className="h-5 w-5" />;
    case "layers":
    case "stack":
      return <Layers className="h-5 w-5" />;
    case "smartphone":
    case "mobile":
      return <Smartphone className="h-5 w-5" />;
    case "globe":
    case "web":
      return <Globe className="h-5 w-5" />;
    case "bell":
    case "notifications":
      return <Bell className="h-5 w-5" />;
    case "refresh":
    case "sync":
      return <RefreshCw className="h-5 w-5" />;
    case "folder":
    case "tree":
      return <FolderTree className="h-5 w-5" />;
    case "compass":
    case "navigation":
      return <Compass className="h-5 w-5" />;
    case "radio":
    case "wireless":
      return <Radio className="h-5 w-5" />;
    case "file":
    case "document":
      return <FileCheck className="h-5 w-5" />;
    case "alert":
    case "warning":
    case "report_problem":
      return <AlertTriangle className="h-5 w-5" />;
    default:
      return <Sparkles className="h-5 w-5" />;
  }
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const projectData = projectsRegistry[slug];

  if (!projectData) {
    notFound();
  }

  const { chapterNumber, totalChapters, nextSlug, nextProject } =
    getProjectNavigation(slug);

  const { techStack, capabilities, architecture, challenge } = projectData;

  const inPageNavLinks = [
    { label: "Overview", href: "#overview" },
    ...(challenge ? [{ label: "Challenge", href: "#challenge" }] : []),
    { label: "Pipeline", href: "#pipeline" },
    { label: "Stack", href: "#stack" },
    { label: "Capabilities", href: "#capabilities" },
    ...(projectData.showcase ? [{ label: "Showcase", href: "#showcase" }] : []),
  ];

  const hasLiveUrl = Boolean(
    projectData.hero.primaryAction.href &&
      !projectData.hero.primaryAction.href.includes("github.com") &&
      projectData.hero.primaryAction.href.startsWith("http")
  );

  return (
    <div
      id="top"
      className="min-h-screen bg-background text-foreground selection:bg-maroon selection:text-milky-white"
    >
      {/* Editorial Navigation Header */}
      <ProjectDetailNavbar
        projectName={projectData.projectName}
        sectionLabel="Engineering Monograph"
        chapterNumber={chapterNumber}
        totalChapters={totalChapters}
        backHref="/#projects"
        backLabel="Monograph Index"
        liveUrl={hasLiveUrl ? projectData.hero.primaryAction.href : null}
        navLinks={inPageNavLinks}
      />

      <main>
        {/* ================================================================= */}
        {/* COVER PLATE & HERO OPENING SCENE                                  */}
        {/* ================================================================= */}
        <section className="border-b border-beige/35 bg-surface-container-low/40 py-12 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
            {/* Chapter Telemetry Ribbon */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-beige/35 pb-5 font-mono text-[11px] tracking-[0.2em] uppercase">
              <div className="flex items-center gap-2 text-maroon font-semibold">
                <span>[ CHAPTER {chapterNumber} OF {totalChapters} ]</span>
                <span className="h-[1px] w-6 bg-maroon/40" />
                <span className="text-ink-muted">{projectData.metadata.category}</span>
              </div>

              <div className="flex items-center gap-4 text-ink-muted text-[10px]">
                <span>ROLE: {projectData.metadata.role}</span>
                <span className="text-beige-dark">/</span>
                <span>TIMELINE: {projectData.metadata.timeline}</span>
              </div>
            </div>

            {/* Monumental Headline & Abstract Split */}
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8 flex flex-col gap-5">
                <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-[-0.02em] text-ink leading-[1.08]">
                  {projectData.hero.title}
                </h2>

                <p className="max-w-2xl border-l-2 border-maroon pl-5 text-[17px] sm:text-[19px] leading-[1.65] text-ink-secondary">
                  {projectData.hero.description}
                </p>

                {/* Tech Pills */}
                <div className="mt-2 flex flex-wrap items-center gap-2 pt-2">
                  {projectData.hero.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 border border-beige/60 bg-surface-container-lowest px-3 py-1 font-mono text-[10px] tracking-[0.14em] uppercase text-ink shadow-xs"
                    >
                      <span className="h-1 w-1 rounded-full bg-maroon" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Primary Launch Action Callout */}
              <div className="lg:col-span-4 flex flex-col lg:items-end gap-3">
                {hasLiveUrl && (
                  <a
                    href={projectData.hero.primaryAction.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 border border-maroon bg-maroon px-7 py-4 font-mono text-[11px] tracking-[0.18em] uppercase text-milky-white transition-all duration-300 hover:bg-maroon-dark hover:border-maroon-dark shadow-sm hover:shadow w-full sm:w-auto"
                  >
                    <span>{projectData.hero.primaryAction.label || "Launch Platform"}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}

                <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-ink-muted">
                  SYSTEM ARCHIVE LEDGER · MONOGRAPH {chapterNumber}
                </span>
              </div>
            </div>

            {/* Panoramic Display Viewport with Editorial Matting */}
            <div className="mt-10 md:mt-12">
              <div className="border border-beige/40 bg-obsidian text-cream-dark p-3 md:p-4 shadow-xl">
                {/* Viewport Telemetry Banner */}
                <div className="flex items-center justify-between border-b border-milky-white/10 pb-3 mb-3 font-mono text-[9px] tracking-[0.18em] uppercase text-cream-dark/60">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-maroon-glow" />
                    <span>FIG. 01A — PRIMARY PRODUCTION INTERFACE SURFACE</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-3">
                    <span>STATE: VERIFIED DEPLOYMENT</span>
                    <span>ARCHIVE REF: {slug.toUpperCase()}-2026</span>
                  </div>
                </div>

                {/* Main Mockup Viewport */}
                <div className="relative aspect-video w-full overflow-hidden bg-obsidian-card">
                  <Image
                    alt={`${projectData.projectName} master mockup`}
                    src={projectData.hero.image.src}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 01 & 02: TECHNICAL ABSTRACT & ENGINEERING CHALLENGE       */}
        {/* ================================================================= */}
        <section className="py-16 md:py-24 border-b border-beige/35">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Project Overview & Abstract (7 cols) */}
              <div id="overview" className="scroll-mt-24 lg:col-span-7 flex flex-col gap-6">
                <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-maroon font-semibold border-b border-beige/35 pb-3">
                  <span>[ SECTION 01 // OVERVIEW ]</span>
                  <span className="h-[1px] w-6 bg-maroon/40" />
                  <span className="text-ink-muted">TECHNICAL DOSSIER</span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-normal tracking-[-0.02em] text-ink">
                  {projectData.overview.title || "Latar Belakang & Solusi Proyek"}
                </h3>

                <div className="space-y-6 text-[16px] sm:text-[17px] leading-[1.75] text-ink-secondary">
                  {projectData.overview.paragraphs.map((p, index) => {
                    const isChallenge = p.startsWith("THE CHALLENGE:") || p.startsWith("TANTANGAN:");
                    const isSolution = p.startsWith("THE SOLUTION:") || p.startsWith("SOLUSI:");
                    let content = p;
                    let label = "";

                    if (isChallenge) {
                      label = "OPERATIONAL CONTEXT";
                      content = p.replace("THE CHALLENGE:", "").replace("TANTANGAN:", "").trim();
                    } else if (isSolution) {
                      label = "ENGINEERED RESOLUTION";
                      content = p.replace("THE SOLUTION:", "").replace("SOLUSI:", "").trim();
                    }

                    return (
                      <div
                        key={index}
                        className={`p-6 border transition-all ${
                          isChallenge
                            ? "border-beige/40 bg-surface-container-low/50 border-l-4 border-l-maroon/60"
                            : isSolution
                            ? "border-maroon/30 bg-surface-container-lowest border-l-4 border-l-maroon shadow-xs"
                            : "border-beige/35 bg-surface-container-low/30"
                        }`}
                      >
                        {label && (
                          <span className="block font-mono text-[10px] tracking-[0.18em] uppercase text-maroon font-bold mb-2">
                            {label}
                          </span>
                        )}
                        <p>{content}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Key Engineering Challenge Workaround (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {challenge ? (
                  <div
                    id="challenge"
                    className="scroll-mt-24 border border-beige/40 bg-surface-container-low p-6 sm:p-8 flex flex-col gap-5 shadow-sm"
                  >
                    <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-maroon font-semibold border-b border-beige/35 pb-3">
                      <span>[ SECTION 02 // CRITICAL HURDLE ]</span>
                    </div>

                    <h4 className="font-display text-2xl font-normal text-ink leading-snug">
                      {challenge.title}
                    </h4>

                    <div className="border-t border-beige/30 pt-4 space-y-4 text-[14px] leading-relaxed text-ink-secondary">
                      <div>
                        <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-maroon font-bold block mb-1">
                          THE HURDLE
                        </span>
                        <p>{challenge.problem}</p>
                      </div>

                      <div className="border-t border-beige/25 pt-3">
                        <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-maroon font-bold block mb-1">
                          THE ENGINEERING SOLUTION
                        </span>
                        <p>{challenge.solution}</p>
                      </div>

                      {challenge.bullets && challenge.bullets.length > 0 && (
                        <div className="border-t border-beige/25 pt-3">
                          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-muted font-bold block mb-2">
                            ARCHITECTURAL HIGHLIGHTS
                          </span>
                          <ul className="space-y-2">
                            {challenge.bullets.map((bullet, idx) => {
                              const colonIdx = bullet.indexOf(":");
                              if (colonIdx !== -1) {
                                const head = bullet.slice(0, colonIdx);
                                const tail = bullet.slice(colonIdx + 1);
                                return (
                                  <li key={idx} className="flex items-start gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-maroon mt-1.5 flex-shrink-0" />
                                    <span>
                                      <strong className="text-ink font-semibold">{head}:</strong>
                                      {tail}
                                    </span>
                                  </li>
                                );
                              }
                              return (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-maroon mt-1.5 flex-shrink-0" />
                                  <span>{bullet}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}

                      {challenge.result && (
                        <div className="mt-4 border-l-2 border-maroon pl-4 py-1 italic font-display text-ink text-[15px]">
                          “{challenge.result}”
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Fallback Quick Metadata Card if no custom challenge */
                  <div className="border border-beige/35 bg-surface-container-low p-6 flex flex-col gap-4">
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-maroon font-semibold">
                      PROJECT PARAMETERS
                    </span>
                    <div className="divide-y divide-beige/30 text-sm">
                      <div className="py-3 flex justify-between">
                        <span className="text-ink-muted font-mono text-[11px] uppercase">Role</span>
                        <span className="font-semibold text-ink">{projectData.metadata.role}</span>
                      </div>
                      <div className="py-3 flex justify-between">
                        <span className="text-ink-muted font-mono text-[11px] uppercase">Timeline</span>
                        <span className="font-semibold text-ink">{projectData.metadata.timeline}</span>
                      </div>
                      <div className="py-3 flex justify-between">
                        <span className="text-ink-muted font-mono text-[11px] uppercase">Domain</span>
                        <span className="font-semibold text-ink">{projectData.metadata.category}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 03: SYSTEM ARCHITECTURE & DATA FLOW PIPELINE              */}
        {/* ================================================================= */}
        <section id="pipeline" className="scroll-mt-20 py-16 md:py-24 bg-surface-container-low/50 border-b border-beige/35">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-beige/35 pb-8">
              <div>
                <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-maroon font-semibold">
                  <span>[ SECTION 03 // EXECUTION PIPELINE ]</span>
                  <span className="h-[1px] w-6 bg-maroon/40" />
                  <span className="text-ink-muted">DATA FLOW BLUEPRINT</span>
                </div>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] font-normal text-ink">
                  {architecture.title || "System Architecture"}
                </h3>
              </div>

              <p className="mt-4 md:mt-0 max-w-md text-[14px] leading-relaxed text-ink-secondary">
                Urutan eksekusi transaksi, validasi sesi autentikasi, dan pipeline sinkronisasi data real-time pada arsitektur sistem.
              </p>
            </div>

            {/* Interactive Architecture Steps Pipeline Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {architecture.steps.map((step, idx) => {
                const stepNum = String(idx + 1).padStart(2, "0");
                const isCritical = Boolean(step.highlighted);

                return (
                  <div
                    key={step.title}
                    className={`relative p-6 border flex flex-col justify-between transition-all duration-300 ${
                      isCritical
                        ? "border-maroon bg-surface-container-lowest shadow-md ring-1 ring-maroon/20"
                        : "border-beige/35 bg-surface-container-lowest hover:border-beige-dark shadow-xs"
                    }`}
                  >
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between border-b border-beige/25 pb-3 mb-4">
                        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-maroon font-bold">
                          PHASE // {stepNum}
                        </span>
                        {isCritical ? (
                          <span className="border border-maroon bg-maroon/10 px-2 py-0.5 font-mono text-[9px] tracking-[0.12em] uppercase text-maroon font-semibold">
                            CRITICAL PATH
                          </span>
                        ) : (
                          <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-ink-muted">
                            PIPELINE NODE
                          </span>
                        )}
                      </div>

                      {/* Step Title */}
                      <h4 className="font-display text-xl font-normal text-ink tracking-tight">
                        {step.title}
                      </h4>

                      {/* Step Description */}
                      <p className="mt-3 text-[13px] leading-relaxed text-ink-secondary">
                        {step.body}
                      </p>
                    </div>

                    {/* Step Telemetry Sub-row */}
                    <div className="mt-6 pt-4 border-t border-beige/25 flex items-center justify-between font-mono text-[9px] tracking-[0.14em] uppercase text-ink-muted">
                      <span>NODE 0{idx + 1}</span>
                      <span>STATUS: VERIFIED</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 04: TECH STACK SPECIFICATION MATRIX                       */}
        {/* ================================================================= */}
        <section id="stack" className="scroll-mt-20 py-16 md:py-24 border-b border-beige/35">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-beige/35 pb-8">
              <div>
                <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-maroon font-semibold">
                  <span>[ SECTION 04 // SYSTEMS SPECIFICATION ]</span>
                  <span className="h-[1px] w-6 bg-maroon/40" />
                  <span className="text-ink-muted">PRODUCTION TOOLING</span>
                </div>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] font-normal text-ink">
                  Tech Stack
                </h3>
              </div>

              <p className="mt-4 md:mt-0 max-w-md text-[14px] leading-relaxed text-ink-secondary">
                Rasional pemilihan fondasi teknologi, bahasa pemrograman, database, dan protokol integrasi eksternal.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((tech, idx) => {
                const isObject = typeof tech === "object" && tech !== null;
                const category = isObject
                  ? tech.category
                  : tech.includes(":")
                  ? tech.slice(0, tech.indexOf(":")).trim()
                  : `Component 0${idx + 1}`;
                const name = isObject
                  ? tech.name
                  : tech.includes(":")
                  ? tech.slice(tech.indexOf(":") + 1).trim()
                  : tech;
                const usage = isObject ? tech.usage : "";

                return (
                  <div
                    key={isObject ? tech.name : tech}
                    className="border border-beige/35 bg-surface-container-low/50 p-6 flex flex-col justify-between transition-all duration-300 hover:border-maroon hover:bg-surface-container-lowest shadow-xs group"
                  >
                    <div>
                      <div className="flex items-center justify-between border-b border-beige/30 pb-3 mb-3 font-mono text-[10px] tracking-[0.16em] uppercase">
                        <span className="text-maroon font-bold">{category}</span>
                        <span className="text-ink-muted">SPEC 0{idx + 1}</span>
                      </div>

                      <h4 className="font-display text-xl font-normal text-ink group-hover:text-maroon transition-colors">
                        {name}
                      </h4>

                      {usage && (
                        <div className="mt-3.5 pt-3 border-t border-beige/25">
                          <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-maroon font-bold block mb-1.5">
                            PENGGUNAAN DALAM SISTEM
                          </span>
                          <p className="text-[13px] leading-relaxed text-ink-secondary">
                            {usage}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 pt-3 border-t border-beige/25 flex items-center justify-between font-mono text-[9px] tracking-[0.14em] uppercase text-ink-muted">
                      <span>VERIFIED SPEC</span>
                      <span className="inline-flex items-center gap-1.5 text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                        <span>ACTIVE</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 05: CORE CAPABILITIES                                     */}
        {/* ================================================================= */}
        <section id="capabilities" className="scroll-mt-20 py-16 md:py-24 bg-surface-container-low/40 border-b border-beige/35">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-beige/35 pb-8">
              <div>
                <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-maroon font-semibold">
                  <span>[ SECTION 05 // SYSTEM CAPABILITIES ]</span>
                  <span className="h-[1px] w-6 bg-maroon/40" />
                  <span className="text-ink-muted">FUNCTIONAL SCOPE</span>
                </div>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] font-normal text-ink">
                  Core Capabilities
                </h3>
              </div>

              <p className="mt-4 md:mt-0 max-w-md text-[14px] leading-relaxed text-ink-secondary">
                Rincian fitur fungsional utama, kemampuan penanganan transaksi, dan mekanisme keandalan sistem.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="flex items-start gap-5 border border-beige/35 bg-surface-container-lowest p-6 sm:p-7 transition-all duration-300 hover:border-maroon shadow-xs"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-beige/50 bg-surface-container-low text-maroon">
                    {resolveCapabilityIcon(cap.icon)}
                  </div>

                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-maroon font-bold">
                      {cap.label}
                    </span>
                    <h4 className="mt-1 font-display text-xl font-normal text-ink tracking-tight">
                      {cap.title}
                    </h4>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-secondary">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 06: PRODUCTION INTERFACE SHOWCASE                         */}
        {/* ================================================================= */}
        {projectData.showcase && (
          <section id="showcase" className="scroll-mt-20 py-16 md:py-24 border-b border-beige/35">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-beige/35 pb-8 mb-12">
                <div>
                  <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-maroon font-semibold">
                    <span>[ SECTION 06 // PRODUCTION AUDIT ]</span>
                    <span className="h-[1px] w-6 bg-maroon/40" />
                    <span className="text-ink-muted">INTERFACE SHOWCASE</span>
                  </div>
                  <h3 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] font-normal text-ink">
                    {projectData.showcase.title || "Interface Showcase"}
                  </h3>
                </div>

                <p className="mt-4 md:mt-0 max-w-md text-[14px] leading-relaxed text-ink-secondary">
                  {projectData.showcase.visualDescription}
                </p>
              </div>

              {/* Master Showcase Component */}
              <FeatureShowcase
                features={projectData.showcase.features}
                fallbackImage={projectData.hero.image.src}
                projectName={projectData.projectName}
                visualTitle={projectData.showcase.visualTitle}
              />
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* SEQUENTIAL NEXT CHAPTER TRANSITION                                */}
        {/* ================================================================= */}
        <ProjectNextChapter
          nextProject={nextProject}
          nextSlug={nextSlug}
          nextChapterNumber={String(
            ((projectOrder.indexOf(slug) + 1) % projectOrder.length) + 1
          ).padStart(2, "0")}
        />
      </main>

      {/* Technical Colophon Footer */}
      <ProjectDetailFooter
        copyrightLabel={projectData.footer.copyrightLabel}
        links={projectData.footer.links}
      />
    </div>
  );
}
