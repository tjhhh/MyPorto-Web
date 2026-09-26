"use client";

import { useState, useEffect, useRef } from "react";
import {
  Activity,
  ArrowRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Cpu,
  MapPin,
  Zap,
} from "lucide-react";
import { AnimatedCounter } from "@/app/_components/motion";

/* ─────────────────────────────────────────────────────────
   SECTION DATA
───────────────────────────────────────────────────────── */
const experiences = [
  {
    id: "coe",
    index: "01",
    status: "active" as const,
    company: "COE Integrated & Embedded System",
    companyFull: "COE Integrated & Embedded System\nTelkom University Surabaya",
    role: "Fullstack Developer",
    type: "Internship",
    period: "Agustus 2026 — Present",
    location: "Surabaya, ID",
    headline: "Smart Kandang Multi-Platform Software Ecosystem",
    tagline: "Software Ecosystem · Ingestion Pipeline · Cloud · Mobile",
    summary:
      "Mengembangkan ekosistem software multi-platform (Web Dashboard Next.js, Mobile App Flutter, dan Backend NestJS) untuk pemantauan closed-house broiler, berfokus pada arsitektur perangkat lunak dan integrasi penyerapan (ingestion) data telemetri dari IoT gateway ESP32 ke sistem cloud.",
    metrics: [
      { value: "< 500ms", label: "Telemetry Latency", desc: "Sensor edge → UI" },
      { value: "> 95%", label: "Triage Efficiency", desc: "Bulk acknowledge" },
      { value: "100%", label: "Offline-First", desc: "Local snapshot cache" },
      { value: "> 5.000", label: "Rows / < 1s", desc: "XLSX/CSV export" },
      { value: "Zero-IP", label: "Cloud Cost Saved", desc: "Cloudflare Tunnel" },
      { value: "81+", label: "QA Scenarios", desc: "BBT · WBT · Jest" },
    ],
    deliverables: [
      { title: "Web Monitoring & Admin Dashboard", tech: "Next.js 14+ · TypeScript · Tailwind · Recharts" },
      { title: "Peternak Mobile App", tech: "Flutter · Dart · Provider · FCM · Offline-first" },
      { title: "Backend API & Data Ingestion", tech: "NestJS · Prisma · PostgreSQL · JWT RBAC · Swagger" },
      { title: "IoT Telemetry Ingestion Pipeline", tech: "HTTP Ingestion API · JSON Payload Parsing · Sensor Normalization · Schema Contract" },
      { title: "DevOps & Infrastructure", tech: "Docker · Cloudflare Tunnel · Nginx · Ubuntu Linux" },
    ],
    workflows: [
      "Agile/Scrum dengan siklus sprint 2 minggu bersama IoT/Hardware Engineer & Stakeholder peternak",
      "Standardisasi kontrak skema payload telemetri bersama tim hardware, dokumentasi SRS, dan pemodelan ERD",
      "Code review via Git PR · Black Box, White Box & Unit Testing pipeline (Jest / Flutter Test)",
    ],
    techStack: [
      { cat: "Frontend", items: ["Next.js 14+", "TypeScript", "Tailwind CSS", "Recharts", "ExcelJS"] },
      { cat: "Mobile", items: ["Flutter", "Dart", "Provider", "Dio", "FCM"] },
      { cat: "Backend", items: ["NestJS", "Prisma", "PostgreSQL", "JWT", "Swagger"] },
      { cat: "IoT", items: ["ESP32 Gateway", "HTTP Ingestion", "Telemetry API", "JSON Schema"] },
      { cat: "DevOps", items: ["Docker", "Cloudflare Tunnel", "Nginx", "Ubuntu"] },
    ],
  },
  {
    id: "media-inti",
    index: "02",
    status: "completed" as const,
    company: "CV. Media Inti Teknologi",
    companyFull: "CV. Media Inti Teknologi",
    role: "Fullstack Developer",
    type: "Internship",
    period: "Juli — Agustus 2026",
    location: "Indonesia",
    headline: "Quenza Conference Information System",
    tagline: "Web · CMS · REST API · Team Collaboration",
    summary:
      "Membangun sistem informasi konferensi Quenza Conference berkolaborasi dalam tim lintas-disiplin (SA, UI/UX, AI Engineer, QA) untuk menghasilkan platform manajemen konferensi yang andal dan production-ready.",
    metrics: [
      { value: "4", label: "Teams Synced", desc: "SA · UX · AI · QA" },
      { value: "2", label: "Core Modules", desc: "CMS + User Mgmt" },
      { value: "2 mo", label: "Time-to-Ship", desc: "Juli — Agustus 2026" },
    ],
    deliverables: [
      { title: "CMS Landing Page Portal", tech: "React · JavaScript · REST API" },
      { title: "User Management Module", tech: "Laravel · PHP · MySQL · Auth" },
    ],
    workflows: [
      "Kolaborasi lintas-disiplin: System Analyst, UI/UX Designer, AI Engineer, QA Tester",
      "REST API contract-first development dengan Git version control & GitHub workflow",
    ],
    techStack: [
      { cat: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3"] },
      { cat: "Backend", items: ["Laravel", "PHP", "MySQL", "REST API"] },
      { cat: "Tools", items: ["Git", "GitHub", "Figma", "Postman"] },
    ],
  },
];

/* ─────────────────────────────────────────────────────────
   ANIMATED METRIC COUNTER  — numbers count up on entrance
───────────────────────────────────────────────────────── */
function MetricCard({
  value,
  label,
  desc,
  delay,
  shown,
}: {
  value: string;
  label: string;
  desc: string;
  delay: number;
  shown: boolean;
}) {
  return (
    <div
      className="border border-beige/30 bg-surface-container-lowest p-4 flex flex-col gap-1.5"
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(10px)",
        transition: `opacity 0.5s ease-out ${delay}ms, transform 0.5s ease-out ${delay}ms`,
      }}
    >
      <span className="font-display text-[26px] sm:text-[30px] font-bold text-maroon leading-none">
        <AnimatedCounter value={value} trigger={shown} delay={delay} />
      </span>
      <span className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-obsidian font-bold">
        {label}
      </span>
      <span className="font-sans text-[12px] text-ink-muted leading-snug">{desc}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────── */
export function ExperienceSection() {
  const [activeId, setActiveId] = useState<string>("coe");
  const [panelKey, setPanelKey] = useState(0);
  const [shown, setShown] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const active = experiences.find((e) => e.id === activeId)!;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setShown(true); },
      { threshold: 0.08 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  function select(id: string) {
    if (id === activeId) return;
    setActiveId(id);
    setPanelKey((k) => k + 1);
  }

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="scroll-mt-20 border-b border-beige/35 bg-surface-container-low py-16 md:py-24 relative"
    >
      {/* #education alias */}
      <span id="education" className="absolute -top-20" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">

        {/* ── Section Header ── */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-beige/35 pb-8"
          style={{
            opacity: shown ? 1 : 0,
            transform: shown ? "none" : "translateY(16px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <div>
            <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.22em] uppercase text-maroon font-semibold">
              <span className="whitespace-nowrap">[ SECTION 04 // DOSSIER ]</span>
              <span className="hidden xs:inline-block h-[1px] w-4 sm:w-6 bg-maroon/40 shrink-0" />
              <span className="whitespace-nowrap text-ink-muted">PROFESSIONAL FIELD LEDGER</span>
            </div>
            <h2 className="mt-3 font-display text-[38px] leading-[1.08] font-bold tracking-[-0.02em] text-obsidian sm:text-[48px] md:text-[54px]">
              Experience Dossier
            </h2>
          </div>
          <p className="mt-4 max-w-md font-sans text-[15px] leading-[1.65] text-ink-secondary md:mt-0 md:text-right">
            Verified production systems, IoT edge pipelines, and field-tested engineering milestones from real industry deployments.
          </p>
        </div>

        {/* ── Dual-Card Layout ── */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 lg:items-start">

          {/* ════════════════════════════════════════
              CARD LEFT: Timeline Navigation  (5 cols)
          ════════════════════════════════════════ */}
          <div
            className="lg:col-span-5 border border-beige/40 bg-surface-container-lowest"
            style={{
              opacity: shown ? 1 : 0,
              transform: shown ? "none" : "translateX(-16px)",
              transition: "opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s",
            }}
          >
            {/* Card header */}
            <div className="flex items-center justify-between border-b border-beige/25 px-6 py-4">
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase text-maroon font-semibold">
                <Briefcase className="h-3.5 w-3.5" />
                <span>CHRONOLOGICAL LEDGER</span>
              </div>
              <span className="font-mono text-[9px] tracking-widest uppercase border border-beige/50 bg-surface-container px-2 py-0.5 text-ink-muted">
                {experiences.length} ENTRIES
              </span>
            </div>

            {/* Instruction */}
            <p className="px-6 pt-4 pb-2 font-sans text-[13px] text-ink-muted leading-[1.6]">
              Pilih entri untuk memeriksa arsitektur, metrik performa, dan detail teknis:
            </p>

            {/* Timeline entries */}
            <div className="relative px-6 pt-2 pb-6 flex flex-col">
              {/* Vertical connector line */}
              <div
                className="absolute left-[35px] top-8 w-[1.5px] bg-gradient-to-b from-maroon/50 via-beige/50 to-transparent"
                style={{ height: "calc(100% - 52px)" }}
                aria-hidden="true"
              />

              {experiences.map((exp, i) => {
                const isActive = exp.id === activeId;
                return (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => select(exp.id)}
                    className={`group relative w-full text-left transition-colors duration-250 mt-3 first:mt-0 border ${
                      isActive
                        ? "border-maroon/40 bg-maroon/5"
                        : "border-beige/30 bg-surface-container-low hover:border-maroon/30 hover:bg-surface-container"
                    }`}
                    style={{
                      opacity: shown ? 1 : 0,
                      transform: shown ? "none" : "translateX(-12px)",
                      transition: `opacity 0.5s ease-out ${i * 100 + 200}ms, transform 0.5s ease-out ${i * 100 + 200}ms, border-color 0.2s, background-color 0.2s`,
                    }}
                  >
                    {/* Active bar */}
                    <span
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-maroon transition-all duration-400 ease-out"
                      style={{ transform: isActive ? "scaleY(1)" : "scaleY(0)", transformOrigin: "top" }}
                    />

                    <div className="flex items-start gap-3 p-4 pl-5">
                      {/* Node dot */}
                      <div className="relative mt-[5px] h-6 w-6 shrink-0 flex items-center justify-center border border-beige/40 bg-milky-white">
                        {exp.status === "active" ? (
                          <>
                            <span className="absolute h-2 w-2 rounded-full bg-maroon animate-ping opacity-60" />
                            <span className="relative h-2 w-2 rounded-full bg-maroon" />
                          </>
                        ) : (
                          <CheckCircle2 className={`h-3 w-3 ${isActive ? "text-maroon" : "text-ink-muted"}`} />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Status + index */}
                        <div className="flex items-center justify-between mb-1.5">
                          <span
                            className={`font-mono text-[8.5px] tracking-[0.2em] uppercase font-semibold ${
                              exp.status === "active" ? "text-maroon" : "text-ink-muted"
                            }`}
                          >
                            {exp.status === "active" ? "ACTIVE // PRESENT" : "COMPLETED // SHIPPED"}
                          </span>
                          <span className="font-mono text-[9px] text-ink-muted">{exp.index}</span>
                        </div>

                        <h4 className={`font-display text-[18px] sm:text-[20px] font-bold leading-tight ${isActive ? "text-obsidian" : "text-obsidian/80 group-hover:text-obsidian"}`}>
                          {exp.role}
                        </h4>
                        <p className="font-mono text-[11px] text-ink-secondary mt-0.5 leading-snug">
                          {exp.company}
                        </p>
                        <p className="font-mono text-[10px] text-ink-muted mt-1">{exp.period}</p>

                        {/* Tags */}
                        <div className="mt-2.5 flex flex-wrap gap-1">
                          {exp.techStack[0].items.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className={`font-mono text-[8px] tracking-wider uppercase px-1.5 py-0.5 border ${
                                isActive
                                  ? "border-maroon/30 bg-maroon/5 text-maroon"
                                  : "border-beige/40 bg-surface-container text-ink-muted"
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                          {exp.techStack.flatMap((c) => c.items).length > 3 && (
                            <span className="font-mono text-[8px] px-1.5 py-0.5 border border-beige/30 text-ink-muted/70">
                              +{exp.techStack.flatMap((c) => c.items).length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Arrow indicator */}
                      <ChevronRight
                        className={`h-4 w-4 mt-1 shrink-0 transition-all duration-200 ${
                          isActive ? "text-maroon opacity-100" : "text-ink-muted opacity-0 group-hover:opacity-50"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer telemetry */}
            <div className="border-t border-beige/25 px-6 py-3.5 flex items-center justify-between font-mono text-[9px] tracking-[0.16em] uppercase text-ink-muted">
              <span>LEDGER: 2026 ARCHIVE</span>
              <span>VERIFIED</span>
            </div>
          </div>

          {/* ════════════════════════════════════════
              CARD RIGHT: Deep Detail Panel  (7 cols)
          ════════════════════════════════════════ */}
          <div
            key={panelKey}
            className="lg:col-span-7 border border-maroon bg-maroon-dark text-milky-white flex flex-col"
            style={{ animation: "experiencePanelIn 0.35s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            {/* Panel header */}
            <div className="border-b border-milky-white/15 px-6 sm:px-8 py-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] uppercase text-beige/60 mb-2">
                    <Activity className="h-3.5 w-3.5 text-beige/60 shrink-0" />
                    <span>RECORD // {active.type.toUpperCase()} · {active.index}</span>
                    <span className="ml-auto border border-milky-white/20 bg-milky-white/5 px-2 py-0.5 text-beige/70 whitespace-nowrap inline-flex items-center gap-1.5">
                      {active.status === "active" ? (
                        <>
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-maroon-glow opacity-80" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-maroon-glow" />
                          </span>
                          <span>ACTIVE</span>
                        </>
                      ) : (
                        "✓ SHIPPED"
                      )}
                    </span>
                  </div>
                  <h3 className="font-display text-[24px] sm:text-[30px] font-bold text-milky-white leading-[1.1]">
                    {active.headline}
                  </h3>
                  <p className="font-mono text-[11px] text-beige/70 mt-1.5 leading-snug">
                    {active.role}{" "}
                    <span className="text-beige/30">@</span>{" "}
                    {active.companyFull.replace("\n", " ")}
                  </p>
                </div>
              </div>
              {/* Period + location */}
              <div className="mt-3 flex flex-wrap items-center gap-4 font-mono text-[10px] text-beige/50">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3 w-3 shrink-0" />
                  {active.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3 w-3 shrink-0" />
                  {active.location}
                </span>
                <span className="text-beige/30">·</span>
                <span>{active.tagline}</span>
              </div>
            </div>

            {/* Summary */}
            <div className="px-6 sm:px-8 py-5 border-b border-milky-white/10">
              <p className="font-sans text-[14px] sm:text-[15px] leading-[1.75] text-beige/90">
                {active.summary}
              </p>
            </div>

            {/* ── Impact & Metrics ── */}
            <div className="px-6 sm:px-8 py-5 border-b border-milky-white/10">
              <div className="flex items-center gap-2 font-mono text-[9.5px] tracking-[0.2em] uppercase text-beige/50 mb-4">
                <Zap className="h-3.5 w-3.5 text-beige/50 shrink-0" />
                <span>VERIFIABLE IMPACT & PERFORMANCE TELEMETRY</span>
              </div>
              <div className={`grid gap-2 ${active.metrics.length > 3 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-3"}`}>
                {active.metrics.map((m, i) => (
                  <div
                    key={m.label}
                    className="border border-milky-white/15 bg-milky-white/[0.05] p-3.5 flex flex-col gap-1"
                    style={{
                      opacity: shown ? 1 : 0,
                      transform: shown ? "none" : "translateY(8px)",
                      transition: `opacity 0.4s ease-out ${i * 55}ms, transform 0.4s ease-out ${i * 55}ms`,
                    }}
                  >
                    <span className="font-display text-[22px] sm:text-[26px] font-bold text-milky-white leading-none">
                      <AnimatedCounter value={m.value} trigger={shown} delay={i * 55 + 100} />
                    </span>
                    <span className="font-mono text-[9px] tracking-widest uppercase text-beige font-semibold">
                      {m.label}
                    </span>
                    <span className="font-sans text-[11px] text-beige/60 leading-snug">{m.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Deliverables ── */}
            <div className="px-6 sm:px-8 py-5 border-b border-milky-white/10">
              <p className="font-mono text-[9.5px] tracking-[0.2em] uppercase text-beige/50 mb-3">
                CORE DELIVERABLES & SYSTEMS
              </p>
              <div className="space-y-0 divide-y divide-milky-white/8">
                {active.deliverables.map((d) => (
                  <div key={d.title} className="flex items-start gap-3 py-3 group">
                    <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0 text-maroon-glow group-hover:translate-x-0.5 transition-transform" />
                    <div>
                      <p className="font-mono text-[11.5px] font-bold uppercase tracking-[0.08em] text-milky-white">
                        {d.title}
                      </p>
                      <p className="font-sans text-[12.5px] text-beige/65 mt-0.5 leading-snug">{d.tech}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Engineering Standards ── */}
            <div className="px-6 sm:px-8 py-5 border-b border-milky-white/10">
              <p className="font-mono text-[9.5px] tracking-[0.2em] uppercase text-beige/50 mb-3">
                METHODOLOGY & ENGINEERING STANDARDS
              </p>
              <ul className="space-y-2">
                {active.workflows.map((w) => (
                  <li key={w} className="flex items-start gap-2.5 font-sans text-[13px] leading-[1.6] text-beige/85">
                    <span className="text-maroon-glow font-mono text-[11px] mt-0.5 shrink-0">▹</span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Tech Stack ── */}
            <div className="px-6 sm:px-8 py-5">
              <div className="flex items-center gap-2 font-mono text-[9.5px] tracking-[0.2em] uppercase text-beige/50 mb-4">
                <Cpu className="h-3.5 w-3.5 text-beige/50 shrink-0" />
                <span>TECHNOLOGY DISPATCH</span>
              </div>
              <div className="space-y-2.5">
                {active.techStack.map((group) => (
                  <div key={group.cat} className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
                    <span className="font-mono text-[9.5px] uppercase tracking-wider text-beige/40 w-20 shrink-0">
                      {group.cat}:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[9px] tracking-wider uppercase border border-milky-white/20 bg-milky-white/[0.05] px-2 py-0.5 text-milky-white hover:border-maroon/50 hover:bg-maroon/15 transition-colors duration-150"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Panel footer */}
            <div className="mt-auto border-t border-milky-white/10 px-6 sm:px-8 py-4 flex items-center justify-between font-mono text-[9px] tracking-[0.16em] uppercase text-beige/30">
              <span>FIELDWORK VERIFIED // M. FAUZAN</span>
              <span>2026 ENGINEERING MONOGRAPH</span>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe */}
      <style>{`
        @keyframes experiencePanelIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
