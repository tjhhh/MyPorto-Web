import { GraduationCap, ShieldCheck } from "lucide-react";

export function EducationSection() {
  const academicDisciplines = [
    {
      title: "Software Architecture",
      desc: "Clean architecture, modular separation of concerns, and dependency injection.",
    },
    {
      title: "Database Modeling",
      desc: "Relational normalization, indexing strategies, and transactional integrity.",
    },
    {
      title: "Mobile Systems",
      desc: "Native lifecycle management, offline caching, and reactive state machines.",
    },
    {
      title: "Quality Assurance",
      desc: "Unit testing, integration pipelines, and strict interface verification.",
    },
    {
      title: "Interface Engineering",
      desc: "Spatial visual hierarchy, micro-interactions, and WCAG accessibility standards.",
    },
    {
      title: "System Security",
      desc: "Role-based access control, cryptographic verification, and safe webhook ingestion.",
    },
  ];

  const manifestoTenets = [
    {
      index: "01",
      title: "Structural Integrity Over Expediency",
      body: "Shortcuts compound into technical debt. Every subsystem should be built with clear boundaries, predictable state flows, and modular testability.",
    },
    {
      index: "02",
      title: "Deterministic Contracts",
      body: "From PostgreSQL schemas to TypeScript interfaces and REST endpoints, type safety and validation at every perimeter prevent runtime regressions.",
    },
    {
      index: "03",
      title: "End-to-End Product Craft",
      body: "True engineering extends across the entire stack: understanding database query latency as intimately as font rendering performance and touch feedback.",
    },
    {
      index: "04",
      title: "Tangible Digital Materiality",
      body: "Software is an authored artifact. Motion, typography, and state transitions should convey physical weight, intent, and cognitive clarity.",
    },
  ];

  return (
    <section
      id="education"
      className="scroll-mt-20 border-b border-beige/35 bg-surface-container-low py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-beige/35 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-maroon font-semibold">
              <span>[ SECTION 04 // DOSSIER ]</span>
              <span className="h-[1px] w-6 bg-maroon/40" />
              <span className="text-ink-muted">RIGOR & FOUNDATIONS</span>
            </div>
            <h2 className="mt-3 font-display text-[38px] leading-[1.08] font-bold tracking-[-0.02em] text-obsidian sm:text-[48px] md:text-[54px]">
              Academic Dossier
            </h2>
          </div>
          <p className="mt-4 max-w-md font-sans text-[15px] leading-[1.65] text-ink-secondary md:mt-0 md:text-right">
            Formal theoretical computer science combined with unyielding engineering principles.
          </p>
        </div>

        {/* Asymmetric Content Layout */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Academic Training at Telkom University */}
          <div className="border border-beige/40 bg-surface-container-lowest p-6 sm:p-8 lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-beige/25 pb-4">
                <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase text-maroon font-semibold">
                  <GraduationCap className="h-4 w-4" />
                  <span>FORMAL ACADEMIC DEGREE</span>
                </div>
                <span className="font-mono text-[9px] tracking-[0.14em] uppercase border border-beige/50 bg-surface-container px-2 py-0.5 text-ink-muted">
                  YEAR 3
                </span>
              </div>

              <div className="mt-6">
                <h3 className="font-display text-[28px] leading-[1.12] font-bold text-obsidian sm:text-[34px]">
                  Software Engineering
                </h3>
                <p className="mt-1.5 font-mono text-[12px] tracking-[0.12em] text-maroon font-medium uppercase">
                  Telkom University — Bandung, Jawa Barat
                </p>
                <p className="mt-4 font-sans text-[15px] leading-[1.7] text-ink-secondary">
                  Rigorous immersion in algorithm analysis, object-oriented system design, relational algebra, and concurrent distributed system paradigms.
                </p>
              </div>

              {/* Core Disciplines Grid */}
              <div className="mt-7 border-t border-beige/20 pt-5">
                <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-muted mb-3.5">
                  CORE DISCIPLINE AREAS:
                </p>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {academicDisciplines.map((d) => (
                    <div
                      key={d.title}
                      className="border border-beige/30 bg-surface-container-low p-3"
                    >
                      <p className="font-mono text-[10px] font-bold text-obsidian uppercase tracking-[0.1em]">
                        {d.title}
                      </p>
                      <p className="mt-1 font-sans text-[12px] leading-[1.5] text-ink-secondary">
                        {d.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between border-t border-beige/20 pt-4 font-mono text-[9px] tracking-[0.14em] text-ink-muted uppercase">
              <span>STATUS: IN CONTINUOUS PROGRESS</span>
              <span>2022 — PRESENT</span>
            </div>
          </div>

          {/* Right Column: Engineering Manifesto — Maroon identity, NOT obsidian */}
          <div className="border border-maroon bg-maroon-dark text-milky-white p-6 sm:p-8 lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-milky-white/15 pb-4">
                <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-beige">
                  <ShieldCheck className="h-4 w-4 text-beige" />
                  <span>THE CODEC // 4 PRINCIPLES</span>
                </div>
                <span className="font-mono text-[9px] tracking-[0.14em] text-beige/50 uppercase">
                  CORE PHILOSOPHY
                </span>
              </div>

              <h3 className="mt-6 font-display text-[28px] leading-[1.12] font-bold text-milky-white sm:text-[34px]">
                The Engineering<br />Manifesto
              </h3>
              <p className="mt-3 font-sans text-[15px] leading-[1.7] text-beige">
                Four uncompromised rules that govern every architecture, commit, and interface I release into production.
              </p>

              {/* Manifesto List */}
              <div className="mt-6 space-y-0">
                {manifestoTenets.map((tenet) => (
                  <div
                    key={tenet.index}
                    className="border-t border-milky-white/10 pt-4 pb-3"
                  >
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-mono text-[11px] text-beige/50 font-bold shrink-0">
                        [{tenet.index}]
                      </span>
                      <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-milky-white">
                        {tenet.title}
                      </h4>
                    </div>
                    <p className="mt-1.5 pl-[42px] font-sans text-[13px] leading-[1.6] text-beige/85">
                      {tenet.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-milky-white/10 pt-4 font-mono text-[9px] tracking-[0.14em] text-beige/40 uppercase">
              <span>CONVICTION OVER HABIT</span>
              <span>AUTHOR: M. FAUZAN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
