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
    title: "IDAMAN-TSL: High-Performance Internal Team Collaboration Hub",
    description:
      "A fast, modern full-stack web application designed for internal operations and team management. Built with Next.js and Tailwind CSS, it offers smooth component architecture, role-based workflows, and automated reporting systems.",
    image: {
      src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80",
      alt: "IDAMAN-TSL homepage preview",
    },
    metrics: [
      { label: "First Contentful Paint", value: "< 0.4s" },
      { label: "Build Output Size", value: "< 120KB" },
      { label: "Accessibility Score", value: "100/100" },
      { label: "Component Coverage", value: "95% Reusable" },
    ],
    primaryAction: { label: "Visit Live Site", href: "https://idaman-tsl.github.io/idamantsl-webapp/" },
    secondaryAction: { label: "GitHub Repo", href: "https://github.com/IDAMAN-TSL/idamantsl-webapp" },
  },
  overview: {
    title: "Latar Belakang & Solusi Proyek",
    paragraphs: [
      "TANTANGAN: Operasional tim internal sebelumnya sangat bergantung pada berkas spreadsheet yang terfragmentasi dan portal usang. Alat-alat tersebut memuat halaman sangat lambat, tidak konsisten secara UI, serta sulit dikembangkan seiring bertambahnya struktur tim.",
      "SOLUSI: IDAMAN-TSL mengoordinasikan seluruh sumber daya dalam satu dashboard terpadu. Menggunakan Next.js App Router dan React Server Components yang dioptimalkan, portal ini dapat dimuat dalam waktu kurang dari 400ms. Tailwind CSS digunakan untuk menerapkan sistem desain yang ketat dengan konsistensi visual yang tinggi.",
    ],
  },
  challenge: {
    title: "Optimizing Remote Offline Synchronization & Image Compression",
    problem:
      "Petugas lapangan yang mendokumentasikan flora & fauna dilindungi (TSL) di hutan terpencil sering kehilangan sinyal internet. Aplikasi harus dapat menyimpan log keanekaragaman hayati dan foto beresolusi tinggi secara lokal di perangkat tanpa membuat browser crash akibat konsumsi memori berlebih.",
    solution:
      "Mengembangkan antrian offline menggunakan IndexedDB untuk menyimpan data JSON terstruktur. Sebelum disimpan, foto beresolusi tinggi dikompresi di sisi client menggunakan HTML5 Canvas API secara dinamis hingga di bawah 500KB. Antrian sinkronisasi latar belakang kemudian akan mengirimkan data secara sekuensial saat koneksi terdeteksi kembali.",
    bullets: [
      "Image Compression: Melakukan resize dan kompresi kualitas gambar pada canvas secara on-device sebelum disimpan.",
      "IndexedDB Queue: Mengelola antrean sinkronisasi data log menggunakan schema IndexedDB lokal.",
      "Sequential Sync: Menjadwalkan pengiriman payload antrean secara bertahap saat koneksi internet pulih guna menghindari timeout.",
    ],
    result:
      "Result: Ukuran payload unggahan berkurang hingga 85%, sehingga sinkronisasi data tetap berhasil diselesaikan meskipun menggunakan sinyal 2G yang sangat lemah.",
  },
  techStack: [
    "Framework & Language: Next.js 15 (App Router), TypeScript 5, React 19",
    "Styling & UI Engine: Tailwind CSS v4, Material Symbols",
    "Quality Tooling: ESLint, Prettier",
    "Deployment: GitHub Pages (Static Site Generation)",
  ],
  capabilities: [
    {
      icon: "dashboard",
      label: "Portal",
      title: "Interactive Operations Hub",
      description:
        "Dashboard pusat untuk memetakan tugas internal tim, jadwal operasional, serta direktori kontak anggota tim.",
    },
    {
      icon: "widgets",
      label: "Architecture",
      title: "Highly Reusable Components",
      description:
        "Dirancang dengan prinsip atomic design, memastikan elemen navigasi, card, dan tombol dapat digunakan kembali secara konsisten.",
    },
    {
      icon: "speed",
      label: "Performance",
      title: "Server-Side Prerendering",
      description:
        "Melakukan pre-compile rute menjadi static HTML saat proses build untuk menjamin kecepatan load instan bagi pengguna.",
    },
    {
      icon: "dark_mode",
      label: "Themes",
      title: "Modern Dark/Light System",
      description:
        "Dukungan mode gelap bawaan Tailwind dengan kontras warna standar WCAG yang menyesuaikan preferensi sistem operasi user secara otomatis.",
    },
  ],
  showcase: {
    title: "Streamlining Internal Workflows",
    visualTitle: "Portal Interface",
    visualDescription:
      "Tampilan dashboard web aplikasi modern dengan tabel operasional yang responsif.",
    primaryActionLabel: "Visit Live Hub",
    secondaryActionLabel: "View GitHub Repo",
    features: [
      {
        id: "operations-hub",
        title: "Interactive Operations Hub",
        description: "Dashboard pusat untuk memetakan tugas internal tim, jadwal operasional, serta direktori kontak anggota tim secara terpusat.",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80",
        icon: "dashboard"
      },
      {
        id: "offline-sync",
        title: "IndexedDB Offline Sync",
        description: "Penyimpanan log keanekaragaman hayati TSL secara lokal menggunakan IndexedDB saat bertugas di hutan terpencil tanpa sinyal.",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80",
        icon: "sync"
      },
      {
        id: "image-compression",
        title: "Client-Side Canvas Compression",
        description: "Kompresi dinamis foto flora/fauna hingga di bawah 500KB via HTML5 Canvas API guna menghemat kuota dan memori.",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80",
        icon: "compress"
      },
      {
        id: "dark-mode",
        title: "Modern Dark/Light Themes",
        description: "Sistem tema otomatis dengan rasio kontras tinggi bersertifikasi WCAG untuk kenyamanan pandangan mata petugas di lapangan.",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80",
        icon: "dark_mode"
      }
    ]
  },
  metadata: {
    role: "Lead Fullstack Developer & Designer",
    timeline: "3 Weeks (April 2026)",
    category: "Internal Operations / Collaboration Platform",
  },
  architecture: {
    title: "Workflow Architecture",
    steps: [
      {
        title: "Static Compilation",
        body: "Next.js melakukan kompilasi direktori operasional menjadi file statis yang dioptimalkan saat proses build.",
        highlighted: false,
      },
      {
        title: "Atomic Loading",
        body: "Proses hidrasi JavaScript mengikat event handler ke komponen HTML kurang dari 150ms di perangkat berspesifikasi rendah.",
        highlighted: true,
      },
      {
        title: "Interactive Operations",
        body: "User menggunakan fitur filter tugas; React state management memproses data secara lokal tanpa perlu request ke server.",
        highlighted: false,
      },
      {
        title: "Audit Cache Commit",
        body: "Log aktivitas disimpan ke local session storage untuk menjamin data filter tetap bertahan saat halaman dimuat ulang.",
        highlighted: true,
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
