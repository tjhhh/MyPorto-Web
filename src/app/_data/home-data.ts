import type {
  NavLink,
  Project,
  ProjectTechIconMap,
  SocialLink,
  TechStackCategory,
} from "@/app/_types/home";

export const allProjects: Project[] = [
  {
    title: "FutsalPro",
    description:
      "Website full-stack untuk manajemen futsal dengan booking, notifikasi email, dan alur pembayaran online.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
    tags: ["NextJS", "Tailwind", "Supabase", "Resend", "Midtrans", "Vercel", "PostgreSQL"],
    type: "Website - Full Stack",
    role: "Fullstack",
    team: "Solo",
    repoUrl: "https://github.com/tjhhh/FutsalPro",
    liveUrl: "https://futsalpro.my.id",
  },
  {
    title: "RideAssist",
    description:
      "Aplikasi mobile asistensi berkendara dengan arsitektur ringan untuk pengalaman real-time dan stabil.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Flutter", "Firebase"],
    type: "Mobile - App Development",
    role: "App Development",
    team: "Solo",
    repoUrl: "https://github.com/tjhhh/ServiceLog-RideAssisst",
    liveUrl: null,
  },
  {
    title: "Antitheft",
    description:
      "Aplikasi keamanan mobile untuk monitoring anti pencurian dengan dukungan backend NextJS.",
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80",
    tags: ["Flutter", "NextJS (Server)"],
    type: "Mobile - App Development",
    role: "Backend",
    team: "Solo",
    repoUrl: "https://github.com/tjhhh/ji_antitheft",
    liveUrl: null,
  },
  {
    title: "Bank Sampah",
    description:
      "Website informatif dan operasional bank sampah untuk digitalisasi proses pengelolaan sederhana.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    type: "Website - Frontend",
    role: "Frontend",
    team: "Group",
    repoUrl: "https://github.com/SIMPLIX07/BankSampah",
    liveUrl: "https://simplix07.github.io/bankSampah1.2/",
  },
  {
    title: "HikePass Mobile",
    description:
      "Aplikasi mobile untuk kebutuhan pendakian dengan autentikasi, manajemen data, dan notifikasi email.",
    image:
      "https://images.unsplash.com/photo-1464822759844-d150ad6d1dce?auto=format&fit=crop&w=1200&q=80",
    tags: ["Flutter", "Supabase", "GetX", "Resend"],
    type: "Mobile - App Development",
    role: "App Development",
    team: "Group",
    repoUrl: "https://github.com/hikepassapp/hikepassApp",
    liveUrl: null,
  },
  {
    title: "HikePass Website",
    description:
      "Website full-stack pendukung ekosistem HikePass untuk pengelolaan data dan operasional pengguna.",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
    tags: ["Vue", "Laravel", "NodeJS"],
    type: "Website - Full Stack",
    role: "Fullstack",
    team: "Group",
    repoUrl: "https://github.com/orgs/hikepassapp/repositories",
    liveUrl: null,
  },
  {
    title: "IDAMAN-TSL",
    description:
      "Website full-stack untuk kebutuhan internal tim dengan antarmuka cepat dan struktur komponen terukur.",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80",
    tags: ["NextJS", "Tailwind"],
    type: "Website - Full Stack",
    role: "Fullstack",
    team: "Group",
    repoUrl: "https://github.com/IDAMAN-TSL/idamantsl-webapp",
    liveUrl: "https://idaman-tsl.github.io/idamantsl-webapp/",
  },
];

export const featuredProjectTitles = ["FutsalPro", "RideAssist", "IDAMAN-TSL", "HikePass Mobile"];

export const featuredProjects: Project[] = allProjects.filter((project) =>
  featuredProjectTitles.includes(project.title),
);

export const projectTechIcons: ProjectTechIconMap = {
  NextJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  Tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  Supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  Resend: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/resend.svg",
  Midtrans: "https://midtrans.com/assets/img/logo.svg",
  Vercel: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vercel.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "NextJS (Server)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  GetX: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/flutter.svg",
  Vue: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  Laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  NodeJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
};

export const techStack: TechStackCategory[] = [
  {
    label: "Frontend",
    items: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Vue",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Bootstrap",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Flutter",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
    ],
  },
  {
    label: "Backend",
    items: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "REST API",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "NestJS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      },
      {
        name: "Firebase",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
  },
  {
    label: "Tools",
    items: [
      {
        name: "Figma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Vercel",
        logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vercel.svg",
      },
      {
        name: "Supabase",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      },
      {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg",
      },
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
    ],
  },
];

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Tech", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const footerSocialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/mffauzaannn" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mffauzaannn/" },
  { label: "GitHub", href: "https://github.com/tjhhh" },
];
