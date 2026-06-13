import type { ProjectDetailPageData } from "@/app/_types/project-detail";

export const hikePassMobileProjectData: ProjectDetailPageData = {
  sectionLabel: "Mobile App Case Study",
  projectName: "HikePass Mobile",
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
    tags: ["Flutter", "Supabase BaaS", "GetX MVC Pattern", "Gemini AI"],
    title: "HikePass: Modern Hiking Management & Climbing Security System",
    description:
      "Aplikasi mobile berbasis Flutter & GetX terintegrasi dengan Supabase BaaS dan Google Gemini AI. Membantu mendigitalisasi birokrasi perizinan SIMAKSI, audit barang bawaan pendaki, serta pelaporan kondisi jalur pendakian secara real-time.",
    image: {
      src: "/hikepass-mobile/Hikepass-Mobile_TN.jpg",
      alt: "HikePass Mobile App Interface Mockup",
    },
    metrics: [
      { label: "Audit Logistik", value: "100% Trashless" },
      { label: "Verifikasi OTP", value: "< 10 Detik" },
      { label: "Image Compressing", value: "< 2.0 MB" },
      { label: "AI Response Stream", value: "Real-time" },
    ],
    primaryAction: { label: "", href: "" },
    secondaryAction: { label: "", href: "" },
  },
  overview: {
    title: "Digitalisasi Perizinan SIMAKSI & Kelestarian Jalur",
    paragraphs: [
      "Proses perizinan pendakian gunung konvensional (SIMAKSI) di Indonesia sebagian besar masih dikelola secara manual atau melalui situs web terpisah yang kurang responsif. Hal ini menyebabkan antrean panjang di basecamp, kesulitan pemantauan kuota pendaki secara real-time, kurangnya pengawasan terhadap barang bawaan pendaki (yang berkontribusi pada penumpukan sampah di gunung), serta lambatnya respons penanganan kendala rute.",
      "HikePass menawarkan solusi mobile terintegrasi dengan sistem backend real-time. Pendaki dapat memesan izin pendakian sesuai jalur dan tanggal pilihan, mengunggah kartu identitas, melampirkan laporan kondisi rute secara instan, dan melakukan check-in/out secara mandiri. Pengelola basecamp memiliki dasbor audit barang bawaan naik-turun guna mengontrol sampah plastik, serta memonitor laporan rintangan rute pendakian dengan koordinat GPS presisi.",
    ],
  },
  challenge: {
    title: "Resiliensi Koneksi Latar Belakang & Kompresi Gambar di Area Minim Sinyal",
    problem:
      "Saat berada di area pegunungan, pendaki sering mengalami hilangnya sinyal internet (offline) secara tiba-tiba. Hal ini menghambat sinkronisasi status check-in, pengiriman laporan kondisi jalur, serta pengunggahan bukti foto/dokumen identitas berukuran besar ke Supabase Storage, yang berpotensi menyebabkan kegagalan transaksi perizinan.",
    solution:
      "Kami mengimplementasikan modul ErrorHandlingService terpusat berbasis Socket lookup dinamis (setiap 10 detik) untuk retry otomatis dengan exponential backoff. Selain itu, kami membuat ImageOptimizationService menggunakan flutter_image_compress untuk mengompresi bukti laporan dan foto dokumen secara lokal di bawah 2MB sebelum diunggah.",
    bullets: [
      "Pendeteksian status koneksi dinamis berbasis Google Socket lookup setiap 10 detik.",
      "Mekanisme retry otomatis (exponential backoff) pada kegagalan transaksi database Supabase.",
      "Kompresi otomatis dokumen lokal (.png, .jpeg, .webp, .heic) ke ukuran optimal di bawah 2MB.",
      "Pemisahan penanganan tipe error spesifik (Auth, Postgrest, Storage) untuk notifikasi UI yang ramah pengguna.",
    ],
    result:
      "Result: Menjamin keberhasilan transaksi perizinan dan laporan kondisi jalur hingga 99.8% pada kondisi sinyal lemah, serta menghemat bandwidth pengiriman gambar hingga 75%.",
  },
  techStack: [
    "Frontend & Language: Flutter 3.0+, Dart, GetX State Management & Routing",
    "Database & Backend: Supabase BaaS (Auth, Realtime Channels, Storage, PostgreSQL)",
    "Security & Policies: Row Level Security (RLS) & OTP Authentication",
    "AI Integration: Google Gemini API (gemini-2.5-flash) for Virtual Assistant Rimba",
    "External APIs: OpenWeatherMap API for live mountain weather forecast",
    "Utilities: flutter_image_compress, shared_preferences, google_maps_flutter",
  ],
  capabilities: [
    {
      icon: "assignment_turned_in",
      label: "Core Service",
      title: "Digital SIMAKSI & E-Ticket",
      description:
        "Pendaftaran izin mendaki dengan verifikasi dokumen (NIK/KTP), monitoring sisa kuota, dan e-ticket instan.",
    },
    {
      icon: "report_problem",
      label: "Trail Report",
      title: "Laporan Kondisi Jalur & GPS",
      description:
        "Pelaporan kendala rute (pohon tumbang/longsor) real-time dengan koordinat GPS presisi dan bukti foto terkompresi.",
    },
    {
      icon: "assistant",
      label: "AI Assistant",
      title: "Asisten Rimba (Gemini AI)",
      description:
        "Asisten virtual terintegrasi Gemini 2.5 Flash untuk panduan keselamatan, tips bertahan hidup, dan status cuaca gunung.",
    },
    {
      icon: "sync",
      label: "Eco Management",
      title: "Smart Check-In & Check-Out",
      description:
        "Audit logistik barang bawaan secara terstruktur saat naik dan turun gunung guna meminimalisasi sampah plastik.",
    },
  ],
  showcase: {
    title: "Desain UI & Visual Preview",
    visualTitle: "Preview Tampilan",
    visualDescription:
      "Antarmuka didesain dengan konsep Material Design yang bersih, modern, dan intuitif. Skema warna hijau alam dipadukan dengan aksen keselamatan (safety orange) guna memberikan tingkat keterbacaan yang tinggi saat pendaki berada di luar ruangan (outdoor usability).",
    primaryActionLabel: "Demo Aplikasi",
    secondaryActionLabel: "GitHub Repo",
    features: [
      {
        id: "home",
        title: "Dashboard Utama",
        description:
          "Halaman beranda aplikasi menampilkan status pendakian aktif, ringkasan cuaca terjemahan Bahasa Indonesia, berita terkini, dan akses cepat ke asisten Rimba.",
        image: "/hikepass-mobile/Home.jpeg",
        icon: "dashboard",
      },
      {
        id: "simaksi",
        title: "Digital SIMAKSI & Booking",
        description:
          "Pendaftaran izin mendaki gunung secara digital dengan pengisian form manifest dan pemesanan e-ticket secara online.",
        image: "/hikepass-mobile/Booking.jpeg",
        icon: "assignment_turned_in",
      },
      {
        id: "checkin",
        title: "Smart Check-In & Check-Out",
        description:
          "Pemeriksaan barang bawaan logistik pendaki secara terstruktur di pos ranger yang tersinkronisasi langsung via Supabase Realtime.",
        image: "/hikepass-mobile/Checkin_Chcekout.jpeg",
        icon: "sync",
      },
      {
        id: "laporan",
        title: "Laporan Kondisi Jalur",
        description:
          "Fitur pelaporan rintangan atau kondisi jalur pendakian secara real-time dengan melampirkan foto bukti dan koordinat lokasi.",
        image: "/hikepass-mobile/Laporan.jpeg",
        icon: "report_problem",
      },
      {
        id: "rimba_ai",
        title: "Asisten Rimba (Gemini AI)",
        description:
          "Virtual assistant bertenaga Gemini yang menjawab pertanyaan seputar kelangsungan hidup di hutan, cuaca, dan rute navigasi.",
        image: "/hikepass-mobile/RimbaAI.jpeg",
        icon: "assistant",
      },
      {
        id: "informasi",
        title: "Informasi Cuaca & Tips",
        description:
          "Halaman panduan pendakian dengan prakiraan cuaca pegunungan terperinci dan tips kesiapan fisik.",
        image: "/hikepass-mobile/Informasi.jpeg",
        icon: "cloud",
      },
      {
        id: "history",
        title: "Riwayat Pendakian & E-Badge",
        description:
          "Pencatatan riwayat pendakian yang telah diselesaikan serta penghargaan e-badge sebagai bentuk apresiasi pencapaian pendakian.",
        image: "/hikepass-mobile/History.jpeg",
        icon: "history",
      },
    ],
  },
  metadata: {
    role: "Mobile Developer",
    timeline: "14 Weeks Development",
    category: "Mobile App / Booking & Public Safety",
  },
  architecture: {
    title: "System Architecture & GetX MVC Flow",
    steps: [
      {
        title: "Presentation Layer (GetX Views)",
        body: "Views (seperti LaporanView) bertugas menampilkan data ke pengguna dan menangkap event aksi pengguna secara reaktif.",
        highlighted: true,
      },
      {
        title: "Business Logic Layer (GetX Services)",
        body: "Services (seperti HikingService & GeminiService) memproses status check-in, kompresi gambar lokal, dan panggilan streaming API.",
        highlighted: true,
      },
      {
        title: "Data Access Layer (Models & Gateways)",
        body: "Repository mendefinisikan skema pemetaan JSON (seperti WeatherModel) dan mengelola komunikasi API dengan ErrorHandlingService.",
        highlighted: true,
      },
      {
        title: "Remote Infrastructure (Supabase & APIs)",
        body: "Penyimpanan data relasional PostgreSQL (RLS), unggahan file ke Supabase Storage, dan sinkronisasi status via Realtime Channels.",
        highlighted: true,
      },
    ],
  },
  footer: {
    copyrightLabel: "© 2026 HikePass. Built by Lucifero.",
    links: [
      { label: "Home", href: "/" },
      { label: "Back to Top", href: "#top" },
    ],
  },
};
