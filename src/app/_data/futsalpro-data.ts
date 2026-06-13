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
      src: "/futsalpro/FutsalPro_TN.jpg",
      alt: "FutsalPro hero mockup",
    },
    metrics: [
      { label: "Booking Slot Conflict Rate", value: "0%" },
      { label: "Active Venues", value: "50+" },
      { label: "API Response Time", value: "<100ms" },
      { label: "Tournaments Managed", value: "85+" },
    ],
    primaryAction: { label: "Cari Lapangan", href: "https://futsalpro.my.id", icon: "explore" },
    secondaryAction: { label: "", href: "" },
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
      icon: "explore",
      label: "Discovery",
      title: "Eksplorasi Venue",
      description:
        "Temukan lapangan futsal terbaik dengan filter lengkap seperti lokasi, jenis lantai, fasilitas, harga, dan rating.",
    },
    {
      icon: "calendar_today",
      label: "Core",
      title: "Booking Interaktif",
      description:
        "Pilih slot jam secara langsung melalui jadwal interaktif yang terjamin anti-bentrok menggunakan transaction lock.",
    },
    {
      icon: "payments",
      label: "Fintech",
      title: "Integrasi Pembayaran",
      description:
        "Penyelesaian pembayaran DP atau lunas secara instan menggunakan Midtrans Snap (E-Wallet, Transfer Bank, QRIS).",
    },
    {
      icon: "emoji_events",
      label: "Community",
      title: "Turnamen & Bracket",
      description:
        "Daftarkan tim futsal Anda dalam turnamen lokal, pantau jadwal tanding, dan lihat bagan bracket pertandingan dinamis.",
    },
  ],
  showcase: {
    title: "Desain Premium Berbasis Glassmorphic",
    visualTitle: "Preview",
    visualDescription: "Desain antarmuka premium dengan pendekatan glassmorphism untuk fokus visual pada konten penting.",
    primaryActionLabel: "Cari Lapangan",
    primaryActionIcon: "explore",
    secondaryActionLabel: "",
    features: [
      {
        id: "explore",
        title: "Explore & Filter Venues",
        description: "Temukan lapangan futsal terdekat berdasarkan lokasi, harga, fasilitas, dan jenis lantai secara real-time.",
        image: "/futsalpro/Explore.png",
        icon: "explore"
      },
      {
        id: "schedule",
        title: "Dynamic Interactive Calendar",
        description: "Lihat dan pilih slot waktu sewa lapangan langsung dari kalender jadwal harian yang diperbarui secara real-time.",
        image: "/futsalpro/Schedule.png",
        icon: "calendar_today"
      },
      {
        id: "booking",
        title: "Instant Court Booking",
        description: "Lakukan booking instan dengan opsi sewa perlengkapan tambahan (sepatu/bola) dan ringkasan pemesanan lengkap.",
        image: "/futsalpro/Booking.png",
        icon: "book_online"
      },
      {
        id: "payment",
        title: "Secure Midtrans Payment & History",
        description: "Pantau status pembayaran booking dan riwayat transaksi secara transparan dengan integrasi Midtrans Snap.",
        image: "/futsalpro/History.png",
        icon: "history"
      },
      {
        id: "brackets",
        title: "Tournament Bracket & Standings",
        description: "Ikuti turnamen futsal, daftarkan tim Anda, dan pantau bagan bracket sistem gugur langsung di dalam platform.",
        image: "/futsalpro/Tournament.png",
        icon: "emoji_events"
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
