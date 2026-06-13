import type { ProjectDetailPageData } from "@/app/_types/project-detail";

export const bankSampahProjectData: ProjectDetailPageData = {
  sectionLabel: "Case Study",
  projectName: "HijauKu",
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
    tags: ["Web Portal", "Digitalization", "Frontend Only", "Bootstrap"],
    title: "HijauKu: Waste Management & Recycling Rewards Portal",
    description:
      "Portal front-end responsif dan ringan yang dirancang untuk mendigitalisasi pengelolaan sampah lingkungan. Membantu warga menghitung nilai konversi sampah daur ulang, katalog kategori sampah, serta pengiriman form pengambilan sampah.",
    image: {
      src: "/hijauku/HijauKu_TN.jpg",
      alt: "HijauKu homepage preview",
    },
    metrics: [
      { label: "Page Load Time", value: "< 250ms" },
      { label: "Asset Size", value: "< 1.5MB" },
      { label: "Responsive Grid", value: "100% Bootstrap" },
      { label: "SEO Score", value: "98/100" },
    ],
    primaryAction: { label: "Visit Website", href: "https://simplix07.github.io/bankSampah1.2/" },
    secondaryAction: { label: "", href: "" },
  },
  overview: {
    title: "Tantangan & Solusi Proyek",
    paragraphs: [
      "TANTANGAN: Masyarakat sering kali mengalami kesulitan dalam memonitor nilai tukar sampah daur ulang karena pendataan pos sampah yang masih manual dan kurang transparan. Situs web informasi yang ada sebelumnya lambat diakses dari ponsel berspesifikasi rendah serta memiliki navigasi yang rumit.",
      "SOLUSI: HijauKu menyederhanakan perhitungan insentif daur ulang sampah. Menggunakan HTML5 semantik dan sistem grid Bootstrap, portal ini menyajikan antarmuka yang sangat ringan dan cepat dimuat. Dilengkapi utilitas JavaScript lokal untuk menghitung estimasi rupiah dari setoran plastik/kertas guna meningkatkan partisipasi pelestarian lingkungan warga.",
    ],
  },
  challenge: {
    title: "Membangun Kalkulator Klien yang Ringan & Offline-Ready",
    problem: "Aplikasi harus berjalan optimal pada perangkat berspesifikasi rendah dengan koneksi internet tidak stabil di lokasi pengumpulan sampah tanpa membebani memori ponsel.",
    solution: "Merancang kalkulator konversi sampah daur ulang sepenuhnya di sisi klien menggunakan vanilla JavaScript murni dan animasi transisi CSS3 kustom untuk menghindari overhead library visual tambahan.",
    bullets: [
      "Eksekusi kalkulasi berbasis vanilla JS: Berjalan instan tanpa dependensi framework berat.",
      "Optimasi transisi CSS murni: Menjaga rendering visual tetap mulus di smartphone kelas menengah ke bawah.",
      "Mekanisme cache lokal: Menyimpan sesi entri data sementara untuk menghindari data hilang saat koneksi terputus.",
    ],
    result: "Result: Waktu pemuatan halaman di bawah 250ms dan fungsionalitas kalkulator berjalan 100% lancar dalam kondisi offline."
  },
  techStack: [
    "HTML5 (Semantic Markup)",
    "CSS3 (Custom Grid & Transitions)",
    "Bootstrap (UI Grid System)",
    "JavaScript (Client-Side Calculators)",
    "GitHub Pages (Static Deployment)",
  ],
  capabilities: [
    {
      icon: "calculate",
      label: "Reward System",
      title: "Kalkulator Daur Ulang",
      description:
        "Kalkulator client-side yang secara instan mengonversi bobot sampah plastik/kertas (kg) menjadi estimasi poin rupiah.",
    },
    {
      icon: "local_shipping",
      label: "Logistics",
      title: "Form Pengajuan Setor",
      description:
        "Formulir pengajuan pengambilan sampah tervalidasi untuk memudahkan penjadwalan dengan petugas pengumpul sampah.",
    },
    {
      icon: "list_alt",
      label: "Database",
      title: "Katalog Jenis Sampah",
      description:
        "Panduan klasifikasi jenis sampah plastik (PET, HDPE, dll) beserta ketentuan harga konversi per kilogram.",
    },
    {
      icon: "smartphone",
      label: "Design",
      title: "Mobile-First Interface",
      description:
        "Tata letak responsif berbasis Bootstrap yang disesuaikan untuk kenyamanan akses petugas lapangan di luar ruangan.",
    },
  ],
  showcase: {
    title: "Promoting Green Communities",
    visualTitle: "Landing & Calculator Portal",
    visualDescription: "Interactive client-side calculator running entirely on vanilla JavaScript.",
    primaryActionLabel: "Visit Live Site",
    secondaryActionLabel: "View GitHub Repo",
    features: [
      {
        id: "landing",
        title: "Halaman Utama & Edukasi",
        description: "Tampilan beranda edukatif dengan pengenalan program daur ulang sampah dan ajakan menjaga kelestarian lingkungan.",
        image: "/hijauku/LandingPage.png",
        icon: "home"
      },
      {
        id: "dashboard",
        title: "Dasbor Operasional",
        description: "Halaman manajemen utama untuk memantau ringkasan aktivitas, panduan setor, dan status operasional bank sampah.",
        image: "/hijauku/Dashboard.png",
        icon: "dashboard"
      },
      {
        id: "kalkulasi",
        title: "Kalkulator Nilai Sampah",
        description: "Kalkulator interaktif berbasis JavaScript untuk menghitung secara instan rupiah yang didapat berdasarkan berat sampah.",
        image: "/hijauku/Kalkulasi.png",
        icon: "calculate"
      },
      {
        id: "komunitas",
        title: "Portal Komunitas",
        description: "Halaman interaksi sosial pendukung untuk menggalang aksi peduli kebersihan antar warga lingkungan sekitar.",
        image: "/hijauku/Komunitas.png",
        icon: "people"
      },
      {
        id: "berita",
        title: "Portal Berita & Tips",
        description: "Artikel informatif seputar pengolahan limbah organik dan non-organik secara mandiri di rumah.",
        image: "/hijauku/Berita.png",
        icon: "article"
      }
    ]
  },
  metadata: {
    role: "Lead Frontend Developer & UI Designer",
    timeline: "2 Weeks (September 2025)",
    category: "Community Service / GreenTech",
  },
  architecture: {
    title: "Workflow Architecture",
    steps: [
      {
        title: "Category Selection",
        body: "User navigates to dynamic calculator and chooses scrap type (PET, Paper, Metals).",
        highlighted: false,
      },
      {
        title: "Weight Input & Calculate",
        body: "User inputs weight in kilograms; vanilla JS processes metrics using predefined price rates.",
        highlighted: true,
      },
      {
        title: "Pickup Allocation",
        body: "Calculated invoice coordinates are formatted into WhatsApp template messages for dispatch routing.",
        highlighted: false,
      },
      {
        title: "Form Submission",
        body: "Local storage caches user session data to speed up subsequent booking requests.",
        highlighted: true,
      },
    ],
  },
  footer: {
    copyrightLabel: "© 2026 HijauKu. Clean neighborhoods start here.",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Back to Top", href: "#top" },
    ],
  },
};
