import type { ProjectDetailPageData } from "@/app/_types/project-detail";

export const rideAssistProjectData: ProjectDetailPageData = {
  sectionLabel: "Case Study",
  projectName: "RideAssist",
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
    tags: ["Mobile App", "Offline-First", "GPS Tracking", "Utilities"],
    title: "RideAssist: High-Precision Offline-First Motorcycle Maintenance & GPS Tracker",
    description:
      "A sleek, privacy-focused mobile application built with Flutter & Riverpod. It utilizes intelligent GPS noise-filtering to track real-time odometer metrics and dynamically compute engine health status, 100% offline.",
    image: {
      src: "/rideassist-hero.png",
      alt: "RideAssist Mobile Application Dashboard",
    },
    metrics: [
      { label: "GPS Filter Accuracy", value: "< 15 Meters" },
      { label: "Local Database Latency", value: "< 5ms (SQLite)" },
      { label: "Dynamic Oil Interval", value: "2,000 KM" },
      { label: "Offline Privacy", value: "100% Local" },
    ],
    primaryAction: { label: "Download APK", href: "/downloads/ride_assist.apk" },
    secondaryAction: { label: "View GitHub Repo", href: "https://github.com/tjhhh/ServiceLog-RideAssisst" },
  },
  overview: {
    title: "Latar Belakang & Solusi Proyek",
    paragraphs: [
      "TANTANGAN: Pemilik sepeda motor sering kesulitan melacak riwayat servis dan masa pakai komponen penting secara akurat. Aplikasi pelacak yang ada di pasar umumnya membebani baterai karena sinkronisasi cloud yang terus-menerus, memerlukan internet stabil, dan berisiko membocorkan data rute perjalanan pribadi pengguna.",
      "SOLUSI: RideAssist hadir dengan konsep offline-first yang menyimpan seluruh data riwayat servis, odometer, dan log perjalanan secara lokal menggunakan SQLite. Dilengkapi mesin pelacak GPS dengan filtering noise adaptif, aplikasi ini mencatat total jarak tempuh secara akurat di latar belakang tanpa membebani daya baterai berlebih."
    ],
  },
  challenge: {
    title: "Handling GPS Drift & Noise Filtering in Real-Time Tracking",
    problem: "Saat melakukan pengujian pada sepeda motor, posisi GPS yang aktif di latar belakang mengalami drift (pergeseran koordinat) yang cukup parah saat pengendara berhenti di lampu merah atau kemacetan. Noise ini menggelembungkan total odometer hingga 15% pada rute pendek.",
    solution: "Mengimplementasikan filter koordinat berlapis pada Dart stream. Aplikasi menyaring titik koordinat dengan akurasi horizontal lebih buruk dari 15 meter, mengabaikan perpindahan jarak di bawah 5 meter, serta menyaring data kecepatan tidak masuk akal (di atas 120 km/jam) atau di bawah batas minimum idle (3 km/jam) sebelum diakumulasikan ke total odometer.",
    bullets: [
      "Horizontal Accuracy Filter: Membuang update koordinat dengan deviasi akurasi horizontal > 15 meter.",
      "Distance Threshold: Mengabaikan pergerakan mikro di bawah 5 meter untuk mencegah lonjakan jarak saat berhenti.",
      "Dynamic Idle Threshold: Menjaga state motor tetap 'idle' jika kecepatan di bawah 3 km/jam selama lebih dari 5 detik."
    ],
    result: "Result: Tingkat akurasi kalkulasi odometer meningkat hingga 98.4% dibandingkan dengan rute Google Maps fisik, dan konsumsi baterai berkurang signifikan karena pemrosesan berjalan sepenuhnya di sisi klien."
  },
  techStack: [
    "Framework & Language: Flutter 3 (Material 3), Dart SDK",
    "State Management: Flutter Riverpod & StateNotifier",
    "Local Database: SQLite via Sqflite & path_provider",
    "Hardware API: Geolocator (GPS Tracking Services)",
    "Asset Management: flutter_launcher_icons, flutter_dotenv",
  ],
  capabilities: [
    {
      icon: "speed",
      label: "Odometer",
      title: "Auto-Track GPS Odometer",
      description:
        "Menghitung jarak perjalanan real-time menggunakan GPS stream dengan filter akurasi tinggi untuk menghindari deviasi data.",
    },
    {
      icon: "health_and_safety",
      label: "Health",
      title: "Dynamic Vehicle Health",
      description:
        "Kalkulasi otomatis kesehatan oli dan mesin berbasis interval 2000 KM dengan notifikasi visual saat servis diperlukan.",
    },
    {
      icon: "garage",
      label: "Garage",
      title: "Garage Management",
      description:
        "Kelola garasi berisi beberapa kendaraan sekaligus dalam tampilan kartu modern berbasis Glassmorphism.",
    },
    {
      icon: "database",
      label: "Offline",
      title: "100% SQLite Storage",
      description:
        "Seluruh data riwayat servis, trip log, dan nota servis disimpan aman di penyimpanan lokal tanpa koneksi internet.",
    },
  ],
  showcase: {
    title: "A Deep Dive into RideAssist Interfaces",
    visualTitle: "Interface Preview",
    visualDescription:
      "Tampilan aplikasi mobile RideAssist dengan dashboard modern, kartu informasi kesehatan motor, dan visual timeline riwayat servis.",
    primaryActionLabel: "Download APK",
    secondaryActionLabel: "Read GPS Guide",
    features: [
      {
        id: "dynamic-health",
        title: "Dynamic Vehicle Health Dashboard",
        description: "Kalkulasi otomatis persentase kesehatan mesin berdasarkan jarak odometer saat ini dari interval servis terakhir (batas 2.000 km) untuk memberi peringatan dini.",
        image: "/rideassist-hero.png",
        icon: "health_and_safety"
      },
      {
        id: "gps-tracking",
        title: "Auto-Track GPS & Trip Logging",
        description: "Pelacakan trip perjalanan dengan filter noise geolocator, mengukur jarak riil serta kecepatan rata-rata untuk disimpan sebagai TripRecord.",
        image: "/rideassist-hero.png",
        icon: "speed"
      },
      {
        id: "local-sqlite",
        title: "100% Offline SQLite Database",
        description: "Seluruh data transaksi servis, status motor, dan riwayat perjalanan disimpan langsung ke dalam tabel relasional lokal Sqflite demi privasi data mutlak.",
        image: "/rideassist-hero.png",
        icon: "database"
      },
      {
        id: "glassmorphic-garage",
        title: "Glassmorphism Garage Management",
        description: "Tampilan garasi modern dengan filter visual glassmorphism, memungkinkan pengguna melacak dan beralih di antara beberapa motor dengan mudah.",
        image: "/rideassist-hero.png",
        icon: "garage"
      }
    ]
  },
  metadata: {
    role: "Lead Mobile Developer & UI/UX Designer",
    timeline: "4 Weeks (May 2026)",
    category: "Utility / Mobile Automotive Tracker",
  },
  architecture: {
    title: "Data Flow & Tracking Pipeline",
    steps: [
      {
        title: "Stream Initialization",
        body: "User mengaktifkan tracking; aplikasi memeriksa izin lokasi dan membuat LocationSettings (AndroidSettings/AppleSettings) dengan filter minimal 5m.",
        highlighted: false,
      },
      {
        title: "Intelligent GPS Filtering",
        body: "Dart stream memproses koordinat real-time, mendeteksi dan membuang lonjakan aneh (drift) berdasarkan akurasi horizontal dan batas kecepatan idle.",
        highlighted: true,
      },
      {
        title: "Trip Consolidation",
        body: "Jarak terakumulasi disimpan sebagai model TripRecord (latitude, longitude, duration, speed) saat user menonaktifkan tracking.",
        highlighted: false,
      },
      {
        title: "SQLite Local Commit",
        body: "Sqflite menyimpan record secara lokal; Riverpod melakukan trigger update state, menghitung ulang kesehatan motor, dan merender UI.",
        highlighted: true,
      },
    ],
  },
  footer: {
    copyrightLabel: "© 2026 RideAssist Case Study. Offline-first vehicle management.",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Back to Top", href: "#top" },
    ],
  },
};
