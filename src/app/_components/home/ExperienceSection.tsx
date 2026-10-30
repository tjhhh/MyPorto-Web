import { Plus } from "lucide-react";

const experiences = [
  {
    id: "coe",
    company: "COE Integrated & Embedded System",
    institution: "Telkom University Surabaya",
    role: "Fullstack Developer",
    type: "Internship",
    period: "Agustus 2026 — Present",
    location: "Surabaya, ID",
    status: "Sedang berjalan",
    headline: "Smart Kandang Multi-Platform Software Ecosystem",
    summary:
      "Mengembangkan ekosistem web, mobile, dan backend untuk pemantauan kandang ayam closed-house, dari data sensor di lapangan hingga informasi yang digunakan peternak.",
    contributions: [
      {
        before: "Membangun ",
        highlight: "dashboard web dan aplikasi mobile",
        after: " dengan Next.js dan Flutter, termasuk cache lokal saat koneksi tidak stabil.",
      },
      {
        before: "Mengembangkan backend dan pipeline ESP32 dengan ",
        highlight: "latensi sensor ke antarmuka <500 ms",
        after: ", lengkap dengan kontrol akses dan validasi payload.",
      },
      {
        before: "Mempercepat mitigasi insiden dari ",
        highlight: "±3 menit menjadi <5 detik",
        after: " melalui bulk alert acknowledge.",
      },
      {
        before: "Mengekspor ",
        highlight: "5.000+ baris data dalam <1 detik",
        after: " langsung di browser, tanpa membebani server.",
      },
    ],
    metrics: [
      { value: "< 500ms", label: "Telemetry Latency", desc: "Sensor edge ke antarmuka web dan mobile." },
      { value: "> 95%", label: "Triage Efficiency", desc: "Bulk alert acknowledge untuk penanganan insiden." },
      { value: "100%", label: "Offline-First", desc: "Local snapshot cache untuk akses data saat koneksi tidak stabil." },
      { value: "> 5.000", label: "Rows / < 1s", desc: "Ekspor laporan XLSX/CSV di browser." },
      { value: "Zero-IP", label: "Cloud Cost Saved", desc: "Docker dan Cloudflare Tunnel untuk infrastruktur tanpa sewa IP publik statis." },
      { value: "81+", label: "QA Scenarios", desc: "Black Box, White Box, dan unit test dengan Jest serta Flutter Test." },
    ],
    workflows: [
      "Agile/Scrum dengan siklus sprint 2 minggu bersama IoT/Hardware Engineer dan stakeholder peternak.",
      "Standardisasi kontrak skema payload telemetri bersama tim hardware, dokumentasi SRS, dan pemodelan ERD.",
      "Code review melalui Git Pull Request, serta pipeline Black Box, White Box, dan unit testing (Jest / Flutter Test).",
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js 14+", "TypeScript", "Tailwind CSS", "Recharts", "ExcelJS"] },
      { category: "Mobile", items: ["Flutter", "Dart", "Provider", "Dio", "FCM"] },
      { category: "Backend", items: ["NestJS", "Prisma", "PostgreSQL", "JWT RBAC", "Swagger"] },
      { category: "IoT", items: ["ESP32 Gateway", "HTTP Ingestion", "Telemetry API", "JSON Schema"] },
      { category: "DevOps", items: ["Docker", "Cloudflare Tunnel", "Nginx", "Ubuntu Linux"] },
    ],
  },
  {
    id: "media-inti",
    company: "CV. Media Inti Teknologi",
    institution: "",
    role: "Fullstack Developer",
    type: "Internship",
    period: "Juli — Agustus 2026",
    location: "Indonesia",
    status: "Selesai",
    headline: "Quenza Conference Information System",
    summary:
      "Membangun sistem informasi konferensi bersama tim lintas disiplin, dengan fokus pada portal CMS dan pengelolaan pengguna.",
    contributions: [
      {
        title: "Portal CMS konferensi.",
        description:
          "Membangun landing page berbasis React untuk publikasi agenda, profil narasumber, dan informasi registrasi sesi.",
      },
      {
        title: "Manajemen pengguna & autentikasi.",
        description:
          "Mengembangkan modul pengelolaan pengguna dengan REST API Laravel dan MySQL. Bersama portal CMS, dua modul inti diselesaikan dalam periode internship 2 bulan.",
      },
      {
        title: "Kolaborasi lintas disiplin.",
        description:
          "Menyelaraskan implementasi dengan System Analyst, UI/UX Designer, AI Engineer, dan QA untuk menghasilkan platform konferensi yang andal.",
      },
    ],
    metrics: [
      { value: "4", label: "Teams Synced", desc: "System Analyst, UI/UX, AI Engineer, dan QA." },
      { value: "2", label: "Core Modules", desc: "CMS landing page dan manajemen pengguna." },
      { value: "2 mo", label: "Time-to-Ship", desc: "Juli — Agustus 2026." },
    ],
    workflows: [
      "Kolaborasi lintas disiplin bersama System Analyst, UI/UX Designer, AI Engineer, dan QA Tester.",
      "Pengembangan REST API secara contract-first dengan version control Git dan workflow GitHub.",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3"] },
      { category: "Backend", items: ["Laravel", "PHP", "MySQL", "REST API"] },
      { category: "Tools", items: ["Git", "GitHub", "Figma", "Postman"] },
    ],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative scroll-mt-20 border-b border-beige/35 bg-surface-container-low py-16 md:py-24"
    >
      {/* Preserve incoming links to the former education section. */}
      <span id="education" className="absolute -top-20" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <header className="border-b border-beige/60 pb-8 md:pb-10">
          <h2
            id="experience-heading"
            className="font-display text-[38px] font-bold leading-[1.08] tracking-[-0.02em] text-obsidian sm:text-[48px] md:text-[54px]"
          >
            Experience Dossier
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-[15px] leading-relaxed text-ink-secondary sm:text-base">
            Pengalaman membangun software, menyelesaikan masalah di lapangan,
            dan bekerja bersama tim lintas disiplin.
          </p>
        </header>

        <div className="mx-auto max-w-5xl divide-y divide-beige/60">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              aria-labelledby={`experience-${experience.id}`}
              className="py-10 md:py-14"
            >
              <header className="flex flex-col justify-between gap-5 md:flex-row md:gap-10">
                <div className="min-w-0 max-w-2xl">
                  <h3
                    id={`experience-${experience.id}`}
                    className="font-display text-2xl font-semibold leading-snug tracking-[-0.02em] text-obsidian sm:text-[28px]"
                  >
                    {experience.company}
                  </h3>
                  {experience.institution && (
                    <p className="mt-1 font-sans text-[15px] leading-relaxed text-ink-secondary">
                      {experience.institution}
                    </p>
                  )}
                  <p className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 font-sans text-[15px] leading-relaxed text-ink-secondary">
                    <span className="font-semibold text-maroon">{experience.role}</span>
                    <span aria-hidden="true">·</span>
                    <span>{experience.type}</span>
                    <span aria-hidden="true">·</span>
                    <span>{experience.location}</span>
                  </p>
                </div>
                <div className="shrink-0 md:pt-1 md:text-right">
                  <p className="font-mono text-xs leading-relaxed text-ink-secondary sm:text-[13px]">
                    {experience.period}
                  </p>
                  <p className="mt-1 font-sans text-[13px] leading-relaxed text-ink-muted">
                    {experience.status}
                  </p>
                </div>
              </header>

              <div className="mt-7 max-w-[72ch] font-sans text-[15px] leading-[1.8] text-ink-secondary sm:text-base">
                <h4 className="text-base font-semibold leading-relaxed text-obsidian sm:text-lg">
                  {experience.headline}
                </h4>
                <p className="mt-2">{experience.summary}</p>

                <h5 className="mb-3 mt-6 font-semibold text-obsidian">
                  Kontribusi dan hasil
                </h5>
                <ul className="list-disc space-y-3 pl-5 marker:text-maroon">
                  {experience.contributions.map((contribution) => (
                    <li
                      key={"highlight" in contribution ? contribution.highlight : contribution.title}
                      className="pl-1"
                    >
                      {"highlight" in contribution ? (
                        <>
                          {contribution.before}
                          <strong className="font-semibold text-maroon">
                            {contribution.highlight}
                          </strong>
                          {contribution.after}
                        </>
                      ) : (
                        <>
                          <strong className="font-semibold text-obsidian">
                            {contribution.title}
                          </strong>{" "}
                          {contribution.description}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <details className="group/technical mt-7 border-t border-beige/60">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 font-sans text-[15px] font-semibold text-maroon transition-colors hover:text-obsidian focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maroon [&::-webkit-details-marker]:hidden">
                  <span className="group-open/technical:hidden">Lihat detail teknis</span>
                  <span className="hidden group-open/technical:inline">Tutup detail teknis</span>
                  <Plus
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 transition-transform duration-200 group-open/technical:rotate-45 motion-reduce:transition-none"
                  />
                </summary>

                <div className="pb-2 pt-5 font-sans text-[15px] leading-relaxed text-ink-secondary">
                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                    <div>
                      <h5 className="mb-4 font-semibold text-obsidian">Teknologi</h5>
                      <dl className="space-y-4">
                        {experience.techStack.map((group) => (
                          <div key={group.category}>
                            <dt className="text-sm font-medium text-obsidian">{group.category}</dt>
                            <dd className="mt-1 text-sm leading-relaxed">{group.items.join(" · ")}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                    <div>
                      <h5 className="mb-4 font-semibold text-obsidian">Cara kerja</h5>
                      <ul className="list-disc space-y-3 pl-5 marker:text-beige-muted">
                        {experience.workflows.map((workflow) => (
                          <li key={workflow} className="pl-1 text-sm leading-[1.75]">
                            {workflow}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-beige/60 pt-6">
                    <h5 className="mb-4 font-semibold text-obsidian">Metrik pendukung</h5>
                    <dl className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                      {experience.metrics.map((metric) => (
                        <div key={metric.label}>
                          <dt className="text-sm font-medium text-obsidian">{metric.label}</dt>
                          <dd className="mt-1 text-sm leading-relaxed">
                            <span className="font-semibold text-maroon">{metric.value}</span>
                            {" — "}{metric.desc}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
