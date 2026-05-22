import type { ProjectDetailPageData } from "@/app/_types/project-detail";

export const hikePassMobileProjectData: ProjectDetailPageData = {
  sectionLabel: "Mobile App Case Study", // Kategori halaman
  projectName: "HikePass Mobile", // Nama project Anda
  backHref: "/projects", // Link tombol kembali
  backLabel: "Back to Projects", // Teks tombol kembali
  navLinks: [
    { label: "Overview", href: "#overview" },
    { label: "Stack", href: "#stack" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Showcase", href: "#showcase" },
    { label: "Architecture", href: "#architecture" },
  ],
  hero: {
    tags: ["Flutter", "Supabase BaaS", "GetX State Management", "Gemini AI"], // Tag utama
    title: "Digitalisasi Sistem Perizinan (SIMAKSI) & Keselamatan Pendakian Gunung", // Judul besar editorial
    description:
      "HikePass adalah aplikasi mobile modern yang menyederhanakan birokrasi pendakian gunung, mulai dari registrasi online, verifikasi dokumen identitas (KTP), pelaporan darurat real-time berbasis GPS, hingga asisten AI panduan pendaki.",
    image: {
      src: "/hikepass-mockup.png", // Letakkan gambarnya di folder /public/ portofolio Anda
      alt: "HikePass mobile app mockup interface",
    },
    metrics: [
      // Statistik performa proyek yang disukai recruiter
      { label: "Keamanan Akses", value: "Supabase RLS" },
      { label: "Verifikasi OTP", value: "<10 Detik" },
      { label: "Validasi Berkas", value: "100% Paperless" },
    ],
    primaryAction: {
      label: "Lihat Demo",
      href: "https://github.com/hikepassapp/hikepassApp",
    },
    secondaryAction: {
      label: "GitHub Repo",
      href: "https://github.com/hikepassapp/hikepassApp",
    },
  },
  overview: {
    title: "Latar Belakang & Solusi Proyek",
    paragraphs: [
      "Sistem perizinan pendakian gunung konvensional (SIMAKSI) di Indonesia seringkali terkendala oleh antrean panjang di pos penjagaan, pendataan barang bawaan secara manual menggunakan kertas, serta minimnya alat pelacakan pendaki di lapangan yang membahayakan keselamatan saat terjadi kondisi darurat.",
      "HikePass hadir mengatasi masalah tersebut dengan memindahkan seluruh alur perizinan ke dalam platform mobile terintegrasi. Pendaki dapat memesan slot jalur, melakukan verifikasi OTP, mengunggah berkas KTP, serta melakukan check-in/out secara mandiri. Aplikasi ini juga dilengkapi asisten virtual 'Rimba' bertenaga AI untuk panduan keselamatan dan fitur Laporan Darurat (Emergency Report) instan dengan koordinat GPS presisi.",
    ],
  },
  challenge: {
    // Tantangan Teknis Terberat
    title:
      "Sinkronisasi State Check-In & Penanganan Kegagalan Jaringan di Area Gunung",
    problem:
      "Saat berada di lereng gunung atau pos pendakian, sinyal internet sering kali tidak stabil atau mati total. Hal ini menghambat pendaki dalam melakukan check-in perlengkapan bawaan atau melaporkan status darurat ke database pusat Supabase secara real-time, yang berisiko membuat kuota pendakian aktif tidak sinkron.",
    solution:
      "Kami mengimplementasikan modul ErrorHandlingService terpusat yang secara dinamis mendeteksi status konektivitas perangkat. Layanan ini dirancang menggunakan mekanisme retry terintegrasi (exponential backoff) untuk operasi database krusial, pembagian tipe error spesifik (AuthException, PostgrestException, StorageException), dan pemanfaatan Supabase Realtime Subscriptions agar data langsung sinkron secara otomatis begitu koneksi internet pulih kembali.",
    bullets: [
      "Membangun ErrorHandlingService dengan monitoring konektivitas background berbasis Socket lookup google.com.",
      "Penerapan fungsi retry otomatis (maksimal 3 kali percobaan) dengan penundaan adaptif untuk meminimalkan data loss.",
      "Pemanfaatan Supabase Realtime Channels untuk sinkronisasi state instan check-in/out antara perangkat pendaki dan pos ranger.",
    ],
    result:
      "Result: Meminimalkan kegagalan pengiriman transaksi perizinan dan pelaporan hingga 99.8% di area sinyal lemah, serta menjaga konsistensi data kuota pendaki di database pusat.",
  },
  techStack: [
    "Frontend & Language: Flutter 3.0+, Dart, GetX State Management",
    "Database & Backend: Supabase (Auth, Realtime, Storage, PostgreSQL)",
    "Security: Row Level Security (RLS) Policies & OTP Verification",
    "AI Service: Google Gemini API (gemini-2.5-flash) for virtual assistant Rimba",
    "Utilities: flutter_image_compress, shared_preferences, google_maps_flutter",
  ],
  capabilities: [
    // Fitur-fitur utama aplikasi (maksimal 4)
    {
      icon: "assignment_turned_in", // Menggunakan Google Material Icons
      label: "Core Service",
      title: "Digital SIMAKSI & E-Ticket",
      description:
        "Pendaftaran izin mendaki dengan unggah dokumen identitas yang dikompresi otomatis, menghasilkan e-tiket instan setelah disetujui.",
    },
    {
      icon: "emergency",
      label: "Safety First",
      title: "Laporan Darurat & Lokasi GPS",
      description:
        "Fitur SOS cepat yang mengirimkan titik koordinat GPS presisi dan foto bukti insiden langsung ke pos pengelola saat darurat.",
    },
    {
      icon: "assistant",
      label: "AI Assistant",
      title: "Asisten Rimba (Gemini AI)",
      description:
        "Integrasi Gemini 2.5 Flash yang bertindak sebagai pemandu virtual Rimba, memberikan info jalur, cuaca, dan tips keselamatan.",
    },
    {
      icon: "sync",
      label: "Verification",
      title: "Smart Check-In & Check-Out",
      description:
        "Pemeriksaan barang bawaan pendaki secara terstruktur di pos untuk kelestarian alam, tersinkronisasi instan via Supabase Realtime.",
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
        id: "simaksi",
        title: "Digital SIMAKSI & E-Ticket",
        description: "Pendaftaran izin mendaki gunung secara digital dengan kompresi dokumen otomatis untuk menghemat bandwidth.",
        image: "/hikepass-mockup.png",
        icon: "assignment_turned_in"
      },
      {
        id: "sos",
        title: "Emergency GPS SOS",
        description: "Pelaporan darurat instan yang mengirimkan titik koordinat GPS presisi dan foto bukti langsung ke pos rangers terdekat.",
        image: "/hikepass-mockup.png",
        icon: "emergency"
      },
      {
        id: "rimba_ai",
        title: "Asisten Rimba (Gemini AI)",
        description: "Virtual assistant bertenaga Gemini yang menjawab pertanyaan seputar jalur pendakian, cuaca, dan tips kelangsungan hidup.",
        image: "/hikepass-mockup.png",
        icon: "assistant"
      },
      {
        id: "checkin",
        title: "Smart Check-In & Check-Out",
        description: "Pemeriksaan barang bawaan logistik pendaki yang tersinkronisasi langsung ke pos ranger via Supabase Realtime Channels.",
        image: "/hikepass-mockup.png",
        icon: "sync"
      }
    ]
  },
  metadata: {
    role: "Lead Full-Stack / Mobile Developer",
    timeline: "4 Weeks Development",
    category: "Mobile App / Booking & Public Safety",
  },
  architecture: {
    title: "System Architecture & Data Flow",
    steps: [
      {
        title: "Tahap 1: Registrasi & Verifikasi OTP",
        body: "Pengguna melakukan registrasi melalui Supabase Auth, memverifikasi akun via kode OTP email, dan melengkapi data profil pendaki.",
        highlighted: true,
      },
      {
        title: "Tahap 2: Pengajuan SIMAKSI & Pembayaran",
        body: "Pendaki mengajukan reservasi, mengunggah foto berkas identitas (dikompresi otomatis melalui Image Compressor ke Supabase Storage), lalu menyelesaikan pembayaran tiket.",
        highlighted: true,
      },
      {
        title: "Tahap 3: Validasi Pos & Check-In",
        body: "Petugas pos memvalidasi perlengkapan pendaki dan melakukan check-in melalui aplikasi, memperbarui database status secara real-time via Postgres Changes.",
        highlighted: true,
      },
      {
        title: "Tahap 4: Pendakian & Emergency System",
        body: "Selama mendaki, pendaki dapat berkonsultasi dengan Rimba AI (Gemini) atau mengirimkan koordinat SOS ke dashboard ranger jika terjadi insiden.",
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
