import type { ExperienceItem } from "@/app/_types/experience";

export const professionalExperiences: ExperienceItem[] = [
  {
    id: "coe-telkom",
    company: "COE Integrated & Embedded System Telkom University Surabaya",
    companyShort: "COE Telkom Univ",
    role: "Fullstack Developer",
    type: "Internship",
    period: "Agustus 2026 — Present",
    duration: "Present",
    location: "Surabaya, ID",
    status: "active",
    statusLabel: "ACTIVE // PRODUCTION",
    headline: "Smart Kandang Multi-Platform Software & Telemetry Ingestion Ecosystem",
    summary:
      "Mengembangkan ekosistem software multi-platform (Web Dashboard Next.js, Mobile App Flutter, dan Backend NestJS) untuk pemantauan closed-house broiler, berfokus pada arsitektur perangkat lunak dan integrasi penyerapan (ingestion) data telemetri dari IoT gateway ESP32 ke sistem cloud.",
    subsystems: [
      {
        title: "Smart Kandang Multi-Platform Software Ecosystem",
        desc: "Mengembangkan platform pemantauan dan otomasi iklim mikro kandang ayam modern berbasis cloud yang mengintegrasikan Web Dashboard, Mobile App (Flutter), dan pipeline penyerapan data telemetri dari gateway ESP32.",
        badge: "Multi-Platform",
      },
      {
        title: "Web Monitoring & Admin Dashboard",
        desc: "Membangun dashboard pemantauan real-time untuk parameter lingkungan kritis (suhu, kelembaban, gas amonia, heat index), visualisasi tren telemetri interaktif, multi-kandang, threshold preset, dan audit log insiden.",
        badge: "Next.js 14+",
      },
      {
        title: "Peternak Mobile App (Flutter)",
        desc: "Merancang dan mengimplementasikan aplikasi mobile lapangan berarsitektur Clean Architecture / MVVM, dilengkapi push notification darurat FCM, bulk alert acknowledge, dan offline-first data caching.",
        badge: "Mobile App",
      },
      {
        title: "Backend API & IoT Ingestion (NestJS & Prisma)",
        desc: "Mengembangkan arsitektur backend RESTful API micro-modular dengan Role-Based Access Control (Admin, Peternak, Visitor), pipeline penyerapan data edge ESP32, dan validasi Class-Validator ketat.",
        badge: "Backend Microservices",
      },
      {
        title: "Sistem Pelaporan & Audit Data Klien",
        desc: "Merancang generator laporan operasional telemetri berkala (Excel multi-sheet & CSV) yang langsung diproses di sisi browser peramban tanpa membebani komputasi server.",
        badge: "Client Processing",
      },
    ],
    workflows: [
      "Agile/Scrum 2-week sprint cycle berkolaborasi bersama IoT/Hardware Engineer, Software Engineer, dan Peternak Lapangan.",
      "Standardisasi kontrak skema payload telemetri bersama tim hardware, dokumentasi SRS, dan pemodelan ERD.",
      "Code review berbasis Git Pull Request dan pipeline penjaminan mutu (QA) Black Box, White Box, dan Unit Testing otomatis.",
    ],
    metrics: [
      {
        value: "< 500ms",
        label: "Real-Time Latency",
        desc: "Pipeline telemetri sensor edge ESP32 hingga tersaji di antarmuka web & mobile.",
      },
      {
        value: "> 95%",
        label: "Triage Efficiency",
        desc: "Bulk alert acknowledge memangkas waktu mitigasi insiden darurat dari ~3 menit ke <5 detik.",
      },
      {
        value: "100%",
        label: "Offline-First Ready",
        desc: "Local snapshot caching menjamin ketersediaan tampilan data saat internet kandang fluktuatif.",
      },
      {
        value: "> 5.000",
        label: "Rows Export < 1s",
        desc: "Ekstraksi laporan log sensor XLSX/CSV di browser tanpa memory leak atau lag antarmuka.",
      },
      {
        value: "Zero-IP",
        label: "Cloud Cost Saved",
        desc: "Docker Compose & Cloudflare Zero Trust Tunnel mengeliminasi sewa IP publik statis dan hemat biaya server 100%.",
      },
      {
        value: "81+",
        label: "QA Test Scenarios",
        desc: "Skenario pengujian komprehensif (BBT & WBT) dan automated unit test di NestJS (Jest) & Flutter Test Suite.",
      },
    ],
    techStack: [
      {
        category: "Frontend Web",
        items: ["Next.js 14+", "TypeScript", "Tailwind CSS", "Recharts", "Lucide Icons", "ExcelJS / SheetJS"],
      },
      {
        category: "Mobile",
        items: ["Flutter", "Dart", "Provider", "Dio Interceptors", "Flutter Secure Storage", "Firebase FCM"],
      },
      {
        category: "Backend & Database",
        items: ["NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "JWT RBAC", "Swagger OpenAPI", "Class-Validator"],
      },
      {
        category: "IoT & Integration",
        items: ["ESP32 Gateway", "HTTP Ingestion", "Telemetry API", "JSON Schema"],
      },
      {
        category: "DevOps & Tools",
        items: ["Docker", "Docker Compose", "Cloudflare Tunnel", "Linux Ubuntu", "Nginx", "Git / GitHub", "Postman", "Figma"],
      },
    ],
  },
  {
    id: "media-inti",
    company: "CV. Media Inti Teknologi",
    companyShort: "Media Inti Tech",
    role: "Fullstack Developer",
    type: "Internship",
    period: "Juli — Agustus 2026",
    duration: "2 Months",
    location: "Indonesia",
    status: "completed",
    statusLabel: "COMPLETED // SHIPPED",
    headline: "Quenza Conference Information System & CMS",
    summary:
      "Membangun sistem informasi konferensi bernama Quenza Conference. Berkolaborasi dalam tim lintas fungsi (System Analyst, UI/UX Designer, AI Engineer, dan QA) untuk menghasilkan platform manajemen konferensi yang andal.",
    subsystems: [
      {
        title: "CMS Landing Page Portal",
        desc: "Merancang dan membangun antarmuka landing page interaktif berbasis React dengan struktur komponen modular yang memudahkan publikasi agenda, profil narasumber, dan registrasi sesi.",
        badge: "Frontend CMS",
      },
      {
        title: "Manajemen User & Autentikasi",
        desc: "Mengembangkan modul pengelolaan hak akses pengguna dengan arsitektur RESTful API Laravel dan database relasional MySQL untuk memfasilitasi peran peserta dan administrator.",
        badge: "Backend & Auth",
      },
      {
        title: "Kolaborasi Tim Lintas Disiplin",
        desc: "Bekerja sama erat bersama System Analyst dalam penerjemahan kebutuhan, UI/UX untuk presisi desain, AI Engineer untuk integrasi fitur kecerdasan, dan QA untuk verifikasi kualitas.",
        badge: "4-Team Sync",
      },
    ],
    workflows: [
      "Berkolaborasi dengan 4 tim lintas disiplin: System Analyst, UI/UX Designer, AI Engineer, dan Quality Assurance.",
      "Workflow version control terstruktur menggunakan Git dan repositori GitHub.",
      "Pengembangan berbasis spesifikasi antarmuka terintegrasi REST API.",
    ],
    metrics: [
      {
        value: "4 Roles",
        label: "Cross-Discipline Team",
        desc: "Sinkronisasi intensif bersama System Analyst, UI/UX, AI Engineer, dan QA.",
      },
      {
        value: "2 Core",
        label: "Modules Delivered",
        desc: "Menyelesaikan modul krusial CMS Landing Page dan Manajemen User tepat waktu.",
      },
      {
        value: "100%",
        label: "Production Handover",
        desc: "Sistem berhasil diserahterimakan dan siap mendukung operasional kegiatan konferensi.",
      },
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["React", "JavaScript", "HTML5", "CSS3 / Modern CSS"],
      },
      {
        category: "Backend & Database",
        items: ["Laravel", "PHP", "MySQL", "RESTful API"],
      },
      {
        category: "Version Control & Tools",
        items: ["Git", "GitHub", "Postman", "Figma"],
      },
    ],
  },
  {
    id: "telkom-degree",
    company: "Telkom University",
    companyShort: "Telkom Univ (S1)",
    role: "Software Engineering Student",
    type: "Formal Degree",
    period: "2022 — Present",
    duration: "Year 3",
    location: "Bandung, Jawa Barat",
    status: "active",
    statusLabel: "ACADEMIC // YEAR 3",
    headline: "S1 Rekayasa Perangkat Lunak (Software Engineering)",
    summary:
      "Pendidikan formal ilmu komputer dan rekayasa perangkat lunak dengan penekanan pada analisis algoritma, pemodelan sistem berorientasi objek, aljabar relasional, dan paradigma sistem terdistribusi.",
    subsystems: [
      {
        title: "Software Architecture & Clean Code",
        desc: "Pemisahan concerns modular, clean architecture, dependency injection, dan design pattern berstandar industri.",
        badge: "Architecture",
      },
      {
        title: "Database Modeling & ACID Integrity",
        desc: "Normalisasi relasional, strategi indexing query performa tinggi, dan integritas transaksional data.",
        badge: "Databases",
      },
      {
        title: "Mobile Systems & Reactive State",
        desc: "Manajemen lifecycle aplikasi native, caching offline-first, dan state machine reaktif.",
        badge: "Mobile",
      },
      {
        title: "Quality Assurance & System Verification",
        desc: "Automated unit testing, pipeline integrasi berkelanjutan, dan verifikasi spesifikasi antarmuka yang ketat.",
        badge: "Testing",
      },
    ],
    workflows: [
      "Rigorous immersion in theoretical computer science & distributed systems.",
      "Collaborative software engineering studio projects with strict deadlines.",
    ],
    metrics: [
      {
        value: "Year 3",
        label: "Academic Progression",
        desc: "Fokus spesialisasi pada arsitektur sistem backend terdistribusi dan ekosistem mobile.",
      },
      {
        value: "6 Core",
        label: "Discipline Areas",
        desc: "Architecture, Database Modeling, Mobile Systems, QA, Interface Engineering, System Security.",
      },
    ],
    techStack: [
      {
        category: "Theoretical Foundations",
        items: ["Data Structures & Algorithms", "Object-Oriented Design", "Relational Algebra", "Distributed Paradigms"],
      },
      {
        category: "Core Disciplines",
        items: ["Software Architecture", "Database Systems", "Software Quality Assurance", "Interface Engineering"],
      },
    ],
  },
];
