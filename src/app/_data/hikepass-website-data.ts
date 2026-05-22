import type { ProjectDetailPageData } from "@/app/_types/project-detail";

export const hikePassWebsiteProjectData: ProjectDetailPageData = {
  sectionLabel: "Case Study",
  projectName: "HikePass",
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
    tags: ["Vue 3", "Laravel 11", "Node.js", "MySQL"],
    title: "HikePass: Integrated Mountain Booking & Climbing Security Platform",
    description:
      "Sistem ekosistem full-stack terintegrasi untuk mengelola reservasi pendakian gunung, verifikasi check-in/check-out perlengkapan, pelacakan riwayat pendaki secara real-time, serta portal direktori event & paket wisata. Menggunakan arsitektur dual-backend berbasis Laravel dan Node.js Express.",
    image: {
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      alt: "HikePass dashboard and climbing security operations preview",
    },
    metrics: [
      { label: "Core API Response", value: "< 120ms" },
      { label: "Security Verification", value: "OTP-Protected" },
      { label: "Climber Tracking State", value: "100% Reliable" },
      { label: "System Architecture", value: "Dual Backends" },
    ],
    primaryAction: { label: "Visit Local Hub", href: "http://localhost:5173" },
    secondaryAction: { label: "GitHub Repo", href: "https://github.com/HikePass/hikepass-web" },
  },
  overview: {
    title: "Latar Belakang & Solusi Proyek",
    paragraphs: [
      "TANTANGAN: Pengelolaan perizinan keamanan pendaki gunung di pos gerbang masuk sering mengalami penumpukan antrean karena proses administrasi manual. Ditambah lagi, pelacakan log perlengkapan bawaan, status check-in/check-out aktif, dan riwayat pendakian yang terfragmentasi menyulitkan petugas memantau keselamatan pendaki secara real-time.",
      "SOLUSI: HikePass mengotomatisasi siklus keselamatan pendakian dari hulu ke hilir. Menggunakan antarmuka SPA berbasis Vue 3 yang responsif, beban operasional didistribusikan ke dua API backend: Laravel untuk memproses transaksi sensitif (Autentikasi OTP, Reservasi, Check-in/Check-out, dan Riwayat Pendakian), serta Node.js Express untuk menyajikan konten dinamis ber-throughput tinggi (Paket Wisata dan Berita/Event)."
    ],
  },
  challenge: {
    title: "State Machine Integrity & Dynamic Multi-Backend Integration",
    problem: "Dalam sistem keselamatan pendakian, integritas alur status pendaki (Reservasi → Check-In → Check-Out → Riwayat) sangat krusial. Jika pendaki melakukan check-in tanpa reservasi yang valid, atau check-out sebelum check-in, data keselamatan menjadi kacau. Selain itu, aplikasi harus mengambil data secara efisien dari dua backend terpisah (Laravel untuk data transaksional pendakian dan Node.js untuk artikel/paket wisata) tanpa mengalami inkonsistensi autentikasi atau latensi tinggi saat rendering halaman.",
    solution: "Mengembangkan arsitektur state machine yang ketat di tingkat database relasional melalui foreign key constraints terstruktur (Reservasi → Checkin → Checkout → History) dan validasi request bertingkat di Laravel (menggunakan unique checks dan date boundary validations). Komunikasi dengan dual backend dioptimalkan di sisi Vue 3 menggunakan Axios HTTP client interceptors dengan token Sanctum, serta manajemen async state terpusat yang memisahkan caching data statis Node.js dari data transaksional Laravel.",
    bullets: [
      "Strict State Machine: Menjamin transisi status pendaki di database berjalan berurutan dengan relasi model one-to-one yang kokoh (misalnya, melarang checkout ganda untuk satu check-in).",
      "Dual-Backend Gateway Connection: Menyinkronkan pemanggilan endpoint Laravel (Port 8000) dan Node.js (Port 5000) secara non-blocking menggunakan Vue 3 Composables.",
      "Temporal Validation: Menerapkan validasi tanggal check-out dinamis yang secara otomatis melarang tanggal sebelum tanggal check-in (after_or_equal:checkin_date)."
    ],
    result: "Result: Terwujudnya integritas data 100% pada pelacakan status pendaki aktif, menghilangkan potensi tabrakan data (race conditions) saat proses check-in massal di gerbang pendakian, serta memangkas waktu muat dashboard hingga di bawah 120ms."
  },
  techStack: [
    "Frontend UI Engine: Vue 3 (Vite), Vue Router, Axios",
    "Backend (Core Transactional): Laravel 11, PHP 8.2, Sanctum Auth",
    "Backend (Content Management): Node.js, Express, MySQL",
    "Database Engine: MySQL (Relational DB Schema)",
    "Styling & UI Toolkit: Bootstrap 5, Bootstrap Icons, Chart.js",
  ],
  capabilities: [
    {
      icon: "shield",
      label: "Security",
      title: "OTP-Protected Authentication",
      description:
        "Verifikasi pendaftaran dan reset password menggunakan kode OTP 6-digit yang dikirimkan via email untuk menjamin keamanan akun pendaki.",
    },
    {
      icon: "check_circle",
      label: "Check-in System",
      title: "Gear & Member Verification",
      description:
        "Pencatatan data barang bawaan pendaki saat check-in untuk dicocokkan kembali saat check-out guna meminimalkan sampah di gunung.",
    },
    {
      icon: "history",
      label: "Tracking",
      title: "Complete Climbing History",
      description:
        "Pengarsipan data pendakian otomatis setelah check-out selesai untuk analisis demografi pendaki dan riwayat perjalanan yang aman.",
    },
    {
      icon: "analytics",
      label: "Analytics",
      title: "Dynamic Revenue & User Charts",
      description:
        "Dashboard admin interaktif dengan grafik tahunan berbasis Chart.js untuk memantau pendapatan total, jumlah pendaki aktif, dan pengguna baru.",
    },
  ],
  showcase: {
    title: "Streamlining Mountain Reservations & Safety Operations",
    visualTitle: "HikePass Management Hub",
    visualDescription: "Tampilan dashboard admin yang responsif untuk mengontrol kuota gunung, memverifikasi check-in/check-out, serta memantau status keamanan pendaki.",
    primaryActionLabel: "Launch Dashboard",
    secondaryActionLabel: "View Repository",
  },
  metadata: {
    role: "Lead Fullstack Developer & Architect",
    timeline: "4 Weeks (May 2026)",
    category: "E-Commerce / Operations / Safety Management Platform",
  },
  architecture: {
    title: "Workflow Architecture",
    steps: [
      {
        title: "Client Side Routing & Auth Check",
        body: "Vue Router memeriksa kecocokan token Sanctum di localStorage sebelum mengizinkan admin masuk ke dashboard.",
        highlighted: true,
      },
      {
        title: "Dual-Backend API Dispatch",
        body: "Aplikasi membagi request data: data kuota dan status pendakian dikirim ke Laravel, sedangkan artikel dan paket wisata ditarik dari Node.js.",
        highlighted: false,
      },
      {
        title: "Transactional State Transition",
        body: "Admin memproses check-in; Laravel mengunci status reservasi, memvalidasi daftar perlengkapan, dan menyimpannya di tabel checkins.",
        highlighted: true,
      },
      {
        title: "History Archival",
        body: "Saat check-out selesai, data dikirim ke endpoint histories/checkout untuk diarsipkan secara permanen dan membebaskan kuota pendakian.",
        highlighted: false,
      },
    ],
  },
  footer: {
    copyrightLabel: "© 2026 HikePass Case Study. Adventure safely, tracked reliably.",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Back to Top", href: "#top" },
    ],
  },
};
