import type { ProjectDetailPageData } from "@/app/_types/project-detail";

export const bankSampahProjectData: ProjectDetailPageData = {
  sectionLabel: "Case Study",
  projectName: "Bank Sampah",
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
    title: "Bank Sampah: Waste Management & Recycling Rewards Portal",
    description:
      "A lightweight, highly responsive front-end portal built to digitalize community waste management. It assists users in calculating recycling points, cataloging scrap categories, and requesting pickups entirely via intuitive interfaces.",
    image: {
      src: "/bankSampah-display.png",
      alt: "Bank Sampah home preview",
    },
    metrics: [
      { label: "Page Load Time", value: "< 250ms" },
      { label: "Asset Size", value: "< 1.5MB" },
      { label: "Responsive Grid", value: "100% Bootstrap" },
      { label: "SEO Score", value: "98/100" },
    ],
    primaryAction: { label: "Visit Website", href: "https://simplix07.github.io/bankSampah1.2/" },
    secondaryAction: { label: "GitHub Repo", href: "https://github.com/SIMPLIX07/bankSampah1.2" },
  },
  overview: {
    title: "The Problem & Solution",
    paragraphs: [
      "THE CHALLENGE: Local communities lacked structured systems to track recyclable waste, resulting in poor waste separation and low participation. Existing portals were over-engineered, slow to load, and had confusing navigation for non-technical users.",
      "THE SOLUTION: Bank Sampah simplifies waste accounting. Using semantic HTML5 and Bootstrap grid containers, the portal delivers a responsive, fast-loading interface. It incorporates local JS utilities to help users calculate financial rewards for plastic/paper deposits, encouraging environmental awareness.",
    ],
  },
  challenge: {
    title: "Developing Lightweight Client-Side Offline Calculators",
    problem: "The community portal was designed for users with budget devices and unstable internet connections. Heavy frameworks would degrade page performance and result in incomplete form loads.",
    solution: "Designed the waste reward calculators entirely using raw, vanilla client-side JavaScript. Used optimized custom CSS transitions instead of heavy animation libraries to maintain smooth animations even on low-end smartphones.",
    bullets: [
      "Vanilla JS execution: Operates with 0ms framework overhead, running purely on the browser's main thread.",
      "Pure CSS animations: Minimizes layout thrashing and keeps rendering calculations highly efficient.",
      "Local Session caching: Holds user transactions temporarily in local storage to prevent data loss."
    ],
    result: "Result: Page load times dropped below 250ms with 100% functionality preserved during completely offline states."
  },
  techStack: [
    "HTML5 (Semantic Markup)",
    "CSS3 (Custom Styling)",
    "Bootstrap (UI Grid System)",
    "JavaScript (Client-Side Calculators)",
    "Git Pages (Deployment)",
  ],
  capabilities: [
    {
      icon: "calculate",
      label: "Reward System",
      title: "Recycling Value Calculator",
      description:
        "Client-side calculator that instantly estimates points and rupiah earnings based on waste category and weight (kg).",
    },
    {
      icon: "local_shipping",
      label: "Logistics",
      title: "Waste Pickup Request",
      description:
        "Simple, validation-secured forms enabling users to request scrap collection by local waste collectors.",
    },
    {
      icon: "list_alt",
      label: "Database",
      title: "Category Database",
      description:
        "Comprehensive catalogs explaining plastic types, paper recycling guidelines, and dynamic pricing metrics.",
    },
    {
      icon: "smartphone",
      label: "Design",
      title: "Mobile-First Design",
      description:
        "Responsive Bootstrap layout optimized to run smoothly on budget smartphones used by local collectors in the field.",
    },
  ],
  showcase: {
    title: "Promoting Green Communities",
    visualTitle: "Landing & Calculator Portal",
    visualDescription: "Interactive client-side calculator running entirely on vanilla JavaScript.",
    primaryActionLabel: "Visit Live Site",
    secondaryActionLabel: "View GitHub Repo",
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
    copyrightLabel: "© 2026 Bank Sampah Case Study. Clean neighborhoods start here.",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Back to Top", href: "#top" },
    ],
  },
};
