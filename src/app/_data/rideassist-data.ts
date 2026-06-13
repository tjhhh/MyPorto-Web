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
      src: "/rideassist/RideAssists_TN.jpg",
      alt: "RideAssist Mobile Application Dashboard",
    },
    metrics: [
      { label: "GPS Filter Accuracy", value: "< 15 Meters" },
      { label: "Local Database Latency", value: "< 5ms (SQLite)" },
      { label: "Dynamic Oil Interval", value: "2,000 KM" },
      { label: "Offline Privacy", value: "100% Local" },
    ],
    primaryAction: { label: "Download APK", href: "https://drive.google.com/drive/folders/136Uzuj8OTN-IjGRPsclrkIpc9cNp20zj?usp=sharing", icon: "download" },
    secondaryAction: { label: "", href: "" },
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
    "Framework & Language: Flutter 3 (Material 3 & Glassmorphism UI), Dart SDK",
    "State Management: Riverpod (flutter_riverpod & state_notifier)",
    "Local Database & Storage: SQLite (sqflite) & Shared Preferences (shared_preferences)",
    "Cloud Services & Auth: Firebase Authentication & Cloud Firestore (Cloud Sync)",
    "Device API & Location: Geolocator (Background GPS Stream) & Permission Handler",
    "Media & Image Processing: Image Picker & Image Cropper (Nota Servis Scan)",
  ],
  capabilities: [
    {
      icon: "map",
      label: "Tracking",
      title: "GPS Odometer",
      description:
        "Kalkulasi jarak perjalanan real-time menggunakan GPS latar belakang dengan filter drift akurasi tinggi.",
    },
    {
      icon: "build",
      label: "Diagnostics",
      title: "Masa Pakai Part",
      description:
        "Monitoring sisa masa pakai suku cadang (oli, busi, ban) secara dinamis berdasarkan akumulasi kilometer tempuh.",
    },
    {
      icon: "garage",
      label: "Garage",
      title: "Manajemen Garasi",
      description:
        "Kelola beberapa sepeda motor dalam satu aplikasi terintegrasi dengan data riwayat servis yang terpisah.",
    },
    {
      icon: "database",
      label: "Privacy",
      title: "Penyimpanan Lokal",
      description:
        "Seluruh data riwayat servis, trip log, dan nota disimpan 100% offline di database SQLite lokal demi privasi.",
    },
  ],
  showcase: {
    title: "A Deep Dive into RideAssist Interfaces",
    visualTitle: "Interface Preview",
    visualDescription:
      "Tampilan aplikasi mobile RideAssist dengan dashboard modern, kartu informasi kesehatan motor, dan visual timeline riwayat servis.",
    primaryActionLabel: "Download APK",
    primaryActionIcon: "download",
    secondaryActionLabel: "",
    features: [
      {
        id: "autotrack",
        title: "Pelacakan Perjalanan GPS",
        description: "Merekam trip perjalanan dan kecepatan rata-rata menggunakan background GPS tracking dengan filtering koordinat presisi.",
        image: "/rideassist/AutoTrack.jpeg",
        icon: "map"
      },
      {
        id: "garage",
        title: "Manajemen Garasi Motor",
        description: "Kelola data beberapa sepeda motor Anda sekaligus dalam garasi virtual, lengkap dengan visualisasi status masing-masing kendaraan.",
        image: "/rideassist/ShowroomMotor.jpeg",
        icon: "garage"
      },
      {
        id: "usage",
        title: "Status Suku Cadang & Oli",
        description: "Pantau persentase masa pakai suku cadang penting seperti oli mesin, filter, busi, dan ban secara dinamis berdasarkan kilometer tempuh.",
        image: "/rideassist/InformasiPenggunaanPart.jpeg",
        icon: "build"
      },
      {
        id: "history",
        title: "Log & Riwayat Perawatan",
        description: "Simpan riwayat penggantian komponen, catatan biaya perawatan, dan riwayat servis berkala secara teratur dan offline.",
        image: "/rideassist/HistoryService.jpeg",
        icon: "history"
      },
      {
        id: "notif",
        title: "Pengingat & Notifikasi Servis",
        description: "Kustomisasi interval batas pemakaian suku cadang dan terima notifikasi peringatan saat komponen sudah mendekati batas pemakaian.",
        image: "/rideassist/NotifService.jpeg",
        icon: "notifications_active"
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
        body: "User mengaktifkan tracking; aplikasi memeriksa izin lokasi (Permission Handler) dan menginisialisasi GPS stream latar belakang.",
        highlighted: false,
      },
      {
        title: "Intelligent GPS Filtering",
        body: "Dart stream memproses koordinat secara real-time, menyaring pergeseran (drift) menggunakan Geolocator berdasarkan horizontal accuracy (toleransi < 15 meter) dan idle threshold (kecepatan < 3 km/jam atau pergerakan < 5 meter).",
        highlighted: true,
      },
      {
        title: "Trip Consolidation & Local Commit",
        body: "Data perjalanan yang telah difilter dikonsolidasikan dan disimpan ke database SQLite lokal (Sqflite). State Riverpod diperbarui untuk memicu kalkulasi ulang persentase kesehatan suku cadang (part health) dan memperbarui tampilan UI dashboard.",
        highlighted: true,
      },
      {
        title: "Firebase Auth & Firestore Cloud Sync",
        body: "Jika perangkat terhubung dengan internet, data lokal yang baru disimpan akan disinkronisasikan secara asinkron (di latar belakang) ke Cloud Firestore menggunakan kredensial dari Firebase Authentication.",
        highlighted: false,
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
