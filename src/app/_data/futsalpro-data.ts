import type { ProjectDetailPageData } from "@/app/_types/project-detail";

export const futsalProProjectData: ProjectDetailPageData = {
  sectionLabel: "Case Study",
  projectName: "FutsalPro",
  backHref: "/projects",
  backLabel: "Back to Projects",
  navLinks: [
    { label: "Overview", href: "#overview" },
    { label: "Stack", href: "#stack" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Showcase", href: "#showcase" },
    { label: "Architecture", href: "#architecture" },
  ],
  hero: {
    tags: ["Web App", "Real-Time Booking", "Tournament Brackets", "Fintech Integration"],
    title: "FutsalPro: Platform Pemesanan Lapangan & Manajemen Liga Futsal Real-Time",
    description:
      "Platform digital end-to-end yang mempermudah pemain futsal melakukan booking lapangan secara instan dengan integrasi pembayaran Midtrans, serta membantu pemilik venue mengelola jadwal, pendapatan, dan turnamen futsal secara efisien.",
    image: {
      src: "/futsalpro-dashboard.png",
      alt: "FutsalPro hero mockup",
    },
    metrics: [
      { label: "Booking Slot Conflict Rate", value: "0%" },
      { label: "Active Venues", value: "50+" },
      { label: "API Response Time", value: "<100ms" },
      { label: "Tournaments Managed", value: "85+" },
    ],
    primaryAction: { label: "Coba Aplikasi", href: "/" },
    secondaryAction: { label: "Cari Lapangan", href: "/explore" },
  },
  overview: {
    title: "Modernisasi Ekosistem Futsal Amatir",
    paragraphs: [
      "FutsalPro lahir sebagai jawaban atas kesulitan para pemain futsal dalam mencari lapangan yang kosong serta proses pemesanan yang masih manual lewat chat.",
      "Dengan sistem booking real-time yang memvalidasi ketersediaan jam secara presisi di tingkat database, double booking dapat dihindari sepenuhnya. Platform ini juga menyediakan sistem KYC (Know Your Customer) untuk menjamin keaslian lapangan yang terdaftar, serta sistem bracket turnamen otomatis dan pencairan dana bagi penyelenggara (organizer) untuk memajukan turnamen lokal.",
    ],
  },
  challenge: {
    title: "Preventing Double-Booking Conflicts with Midtrans Payments",
    problem: "When multiple users attempted to book the same futsal court slot at the exact same time, slow payment confirmation callbacks from Midtrans sometimes caused double bookings to be finalized.",
    solution: "Implemented database transaction locks (row locking via PostgreSQL select for update) inside Supabase RPC functions, checking if a slot status was 'PENDING_PAYMENT' or 'BOOKED' before letting the checkout session begin. Added a 10-minute automatic reservation TTL in PostgreSQL using pg_cron to release unpaid slots.",
    bullets: [
      "Row Locking: SELECT FOR UPDATE checks slot state atomically.",
      "Checkout Gates: Prevents Midtrans token generation if locked.",
      "Auto Release: pg_cron cleans up unpaid slot blocks after 10 mins."
    ],
    result: "Result: Booking conflicts reduced to zero, while ensuring unpaid locks were cleaned up automatically."
  },
  techStack: [
    "Framework & Language: Next.js 16 (App Router), TypeScript 5, React 19",
    "Styling & UI: Tailwind CSS v4, Material Symbols, Lexend Typography",
    "Backend & Database: Supabase PostgreSQL, Drizzle ORM (Neon Migrate), RLS / Server Actions Check",
    "Integrations & APIs: Midtrans Snap Payment, Resend Transactional Email, Cloudinary Storage",
  ],
  capabilities: [
    {
      icon: "calendar_today",
      label: "Core",
      title: "Real-Time Booking",
      description:
        "Pemesanan lapangan instan dengan slot jam presisi, validasi konflik server-side, dan penguncian transaksi aman.",
    },
    {
      icon: "payments",
      label: "Payment",
      title: "Gateway Integrasi",
      description:
        "Integrasi Midtrans Snap untuk pembayaran uang muka (DP) atau lunas secara langsung menggunakan e-wallet, virtual account, atau kartu kredit.",
    },
    {
      icon: "emoji_events",
      label: "Competition",
      title: "Tournament Bracket",
      description:
        "Penyusunan bagan tanding otomatis, pendaftaran tim dengan biaya registrasi aman, serta panel pembaruan skor langsung oleh organizer.",
    },
    {
      icon: "verified_user",
      label: "Security",
      title: "KYC & Verification",
      description:
        "Proses verifikasi dokumen legal (KTP, NPWP, SIUP) pemilik venue untuk menjamin kepercayaan pengguna.",
    },
  ],
  showcase: {
    title: "Desain Premium Berbasis Glassmorphic",
    visualTitle: "Preview",
    visualDescription: "Desain antarmuka premium dengan pendekatan glassmorphism untuk fokus visual pada konten penting.",
    primaryActionLabel: "Coba Aplikasi",
    secondaryActionLabel: "Cari Lapangan",
    features: [
      {
        id: "booking",
        title: "Real-Time Court Booking",
        description: "Pemesanan lapangan instan dengan verifikasi ketersediaan jadwal langsung dari server database untuk mencegah double booking.",
        image: "/futsalpro-dashboard.png",
        icon: "calendar_today"
      },
      {
        id: "payment",
        title: "Midtrans Payment Gateway",
        description: "Alur pembayaran aman terintegrasi dengan Midtrans Snap, otomatis merilis slot jika pembayaran tidak diselesaikan dalam 10 menit.",
        image: "/futsalpro-dashboard.png",
        icon: "payments"
      },
      {
        id: "brackets",
        title: "Auto Tournament Brackets",
        description: "Pembuatan bagan pertandingan sistem gugur otomatis beserta pembaruan papan skor dinamis oleh admin turnamen.",
        image: "/futsalpro-dashboard.png",
        icon: "emoji_events"
      },
      {
        id: "kyc",
        title: "Legal KYC Verification",
        description: "Sistem verifikasi identitas (KTP) pemilik venue untuk menjamin keaslian data lapangan sebelum dipublikasikan.",
        image: "/futsalpro-dashboard.png",
        icon: "verified_user"
      }
    ]
  },
  metadata: {
    role: "Lead Full-Stack & DB Architect",
    timeline: "3 Months Development",
    category: "SaaS / Booking Platform",
  },
  architecture: {
    title: "System Architecture",
    steps: [
      {
        title: "Client & Authentication Route Guard",
        body: "User login via Clerk/Supabase Auth. Route guard memisahkan akses role 'Player', 'Venue Owner', dan 'Admin'.",
        highlighted: true,
      },
      {
        title: "Booking Request & Transaction Locking",
        body: "Server actions memvalidasi ketersediaan slot. Transaksi di-lock di PostgreSQL untuk mencegah double booking.",
        highlighted: true,
      },
      {
        title: "Midtrans Payment Bridge",
        body: "Snap API menghasilkan token transaksi. Status pembayaran di-update otomatis melalui Midtrans webhook secara aman.",
        highlighted: true,
      },
      {
        title: "Asset Storage & Cloud Services",
        body: "Upload berkas KYC dan gambar dikirim ke Cloudinary, sementara email notifikasi transaksional dipicu melalui Resend API.",
        highlighted: true,
      },
    ],
  },
  footer: {
    copyrightLabel:
      "© 2026 FutsalPro Case Study. Built with Next.js, Supabase, and Midtrans.",
    links: [
      { label: "Home", href: "/" },
      { label: "Explore Venues", href: "/explore" },
      { label: "Back to Top", href: "#top" },
    ],
  },
};
