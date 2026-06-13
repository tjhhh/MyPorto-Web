import type { ProjectDetailPageData } from "@/app/_types/project-detail";

export const idamanTslProjectData: ProjectDetailPageData = {
  sectionLabel: "Case Study",
  projectName: "IDAMAN-TSL",
  backHref: "/projects",
  backLabel: "Back to Projects",
  navLinks: [
    { label: "Overview", href: "#overview" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Tech Stack", href: "#stack" },
    { label: "Architecture", href: "#architecture" },
    { label: "Showcase", href: "#showcase" },
  ],
  hero: {
    tags: ["Web Portal", "Internal Operations", "Next.js", "Tailwind CSS"],
    title: "IDAMAN-TSL: Sistem Informasi Data Pemanfaatan Tumbuhan & Satwa Liar",
    description:
      "Portal manajemen dan pengolahan data pemanfaatan flora dan fauna liar terintegrasi untuk Balai Besar Konservasi Sumber Daya Alam (BBKSDA) Jawa Barat. Dilengkapi fitur statistik interaktif, manajemen izin penangkar, serta database referensi taksonomi.",
    image: {
      src: "/idamantsl/IDAMANTSL_TN.jpg",
      alt: "IDAMAN-TSL homepage preview",
    },
    metrics: [
      { label: "First Contentful Paint", value: "< 0.4s" },
      { label: "Build Output Size", value: "< 120KB" },
      { label: "Accessibility Score", value: "100/100" },
      { label: "Component Coverage", value: "95% Reusable" },
    ],
    primaryAction: { label: "Visit Live Site", href: "" },
    secondaryAction: { label: "GitHub Repo", href: "" },
  },
  overview: {
    title: "Latar Belakang & Solusi Proyek",
    paragraphs: [
      "TANTANGAN: Operasional tim internal sebelumnya sangat bergantung pada berkas spreadsheet yang terfragmentasi dan portal usang. Alat-alat tersebut memuat halaman sangat lambat, tidak konsisten secara UI, serta sulit dikembangkan seiring bertambahnya struktur tim.",
      "SOLUSI: IDAMAN-TSL mengoordinasikan seluruh sumber daya dalam satu dashboard terpadu. Menggunakan Next.js App Router dan React Server Components yang dioptimalkan, portal ini dapat dimuat dalam waktu kurang dari 400ms. Tailwind CSS digunakan untuk menerapkan sistem desain yang ketat dengan konsistensi visual yang tinggi.",
    ],
  },
  challenge: {
    title: "Optimizing Multi-Criteria Taxonomy Search & Verification Workflows",
    problem:
      "Admin BBKSDA Jabar harus mengelola ribuan data izin penangkar TSL dengan berbagai kriteria penyaringan (IUCN, CITES, status perlindungan) dan memproses verifikasi izin yang masuk. Melakukan query langsung ke database untuk setiap interaksi filter menyebabkan beban server tinggi dan antarmuka melambat.",
    solution:
      "Mengimplementasikan pencarian client-side terindeks menggunakan Fuse.js untuk data referensi taksonomi statis dan optimasi state React untuk dynamic filtering tabel Penangkar. Untuk alur verifikasi berkas, ditambahkan optimisasi cache di sisi klien menggunakan React Server Components guna mempercepat transisi status data permohonan tanpa merender ulang seluruh halaman.",
    bullets: [
      "Taxonomy Indexing: Membuat indeks taksonomi hierarkis (Kingdom -> Spesies) di sisi klien untuk pencarian instan.",
      "Dynamic Filtering: Mengoptimalkan performa rendering baris tabel Penangkar menggunakan React memoization.",
      "State Verification: Memperbarui status verifikasi secara optimistik di UI sebelum respons API selesai guna menghindari jeda visual.",
    ],
    result:
      "Result: Kecepatan filter data tabel meningkat hingga 90% (di bawah 50ms) dan mengurangi beban request API verifikasi ke server.",
  },
  techStack: [
    "Framework & Language: Next.js, Express.js, TypeScript, React",
    "Styling & UI Engine: Tailwind CSS, Material Symbols",
    "Quality Tooling: ESLint, Prettier, Jest, PlayWright",
    "Deployment: Azure Hosting",
  ],
  capabilities: [
    {
      icon: "dashboard",
      label: "Dashboard",
      title: "Visualisasi Statistik TSL",
      description:
        "Dashboard interaktif dengan grafik statistik tahunan penangkar, pengedar DN/LN, dan lembaga konservasi secara real-time.",
    },
    {
      icon: "inventory",
      label: "Penangkaran",
      title: "Manajemen Penangkar TSL",
      description:
        "Sistem pencarian dan pengelolaan data izin unit penangkaran flora/fauna liar, lengkap dengan status perlindungan spesies.",
    },
    {
      icon: "menu_book",
      label: "Taksonomi",
      title: "Database Referensi TSL",
      description:
        "Database taksonomi TSL lengkap dengan filter kingdom, genus, spesies, serta status kelangkaan standar nasional dan IUCN.",
    },
    {
      icon: "verified_user",
      label: "Verifikasi",
      title: "Verifikasi Berkas Digital",
      description:
        "Modul pemrosesan berkas permohonan masuk dari penangkar secara transparan, akuntabel, dan terintegrasi cepat.",
    },
  ],
  showcase: {
    title: "Sistem Informasi Terintegrasi",
    visualTitle: "Portal Interface",
    visualDescription:
      "Tampilan antarmuka sistem informasi data pemanfaatan tumbuhan dan satwa liar Jawa Barat yang responsif dan modern.",
    primaryActionLabel: "Visit Live Hub",
    secondaryActionLabel: "View GitHub Repo",
    features: [
      {
        id: "portal-utama",
        title: "Portal Utama & Landing Page",
        description: "Gerbang utama sistem informasi terintegrasi untuk publik dan petugas Balai Besar Konservasi Sumber Daya Alam (BBKSDA) Jawa Barat.",
        image: "/idamantsl/landing-page.png",
        icon: "home"
      },
      {
        id: "dashboard-statistik",
        title: "Dashboard & Visualisasi Statistik",
        description: "Dashboard interaktif dengan grafik perkembangan tahunan, indikator jumlah penangkar, pengedar, dan lembaga konservasi secara real-time.",
        image: "/idamantsl/dashboard.png",
        icon: "dashboard"
      },
      {
        id: "manajemen-penangkar",
        title: "Manajemen Penangkar TSL",
        description: "Modul pengelolaan informasi unit penangkar TSL lengkap dengan filter wilayah seksi, masa berlaku SK, komoditas spesies, dan status perlindungan.",
        image: "/idamantsl/penangkar-tsl.png",
        icon: "inventory"
      },
      {
        id: "katalog-taksonomi",
        title: "Katalog Referensi Taksonomi TSL",
        description: "Database taksonomi lengkap flora/fauna liar berdasarkan kingdom, kelas, genus, spesies, serta status kelangkaan CITES dan IUCN.",
        image: "/idamantsl/referensi-tsl.png",
        icon: "menu_book"
      }
    ]
  },
  metadata: {
    role: "Frontend Developer",
    timeline: "4 Months (March - June 2026)",
    category: "Internal Operations / Collaboration Platform",
  },
  architecture: {
    title: "System Architecture",
    steps: [
      {
        title: "Role-Based JWT Auth",
        body: "Pengguna (Admin Pusat, Bidang, atau Seksi Wilayah) melakukan autentikasi via Next.js; Express.js memvalidasi kredensial dan menerbitkan token JWT terenkripsi.",
        highlighted: true,
      },
      {
        title: "Client-Side State Hydration",
        body: "Next.js memuat data dari REST API; data Penangkar & Referensi TSL diolah secara lokal menggunakan React State untuk pencarian instan tanpa overhead query.",
        highlighted: false,
      },
      {
        title: "PostgreSQL Database Transaction",
        body: "Saat data diperbarui, Express.js memproses request, memvalidasi skema data, dan melakukan query transaksi aman ke database PostgreSQL di Azure.",
        highlighted: true,
      },
      {
        title: "Hierarchical Verification",
        body: "Berkas permohonan TSL mengalir sekuensial: diinput di Seksi Wilayah, diverifikasi oleh Bidang Wilayah, dan disetujui di tingkat Admin Pusat.",
        highlighted: false,
      },
    ],
  },
  footer: {
    copyrightLabel: "© 2026 IDAMAN-TSL Case Study. Internal operations refined.",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Back to Top", href: "#top" },
    ],
  },
};
