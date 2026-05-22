import type { ProjectDetailPageData } from "@/app/_types/project-detail";

export const projectDetailTemplate: ProjectDetailPageData = {
  sectionLabel: "[Section Label]",
  projectName: "[Project Name]",
  backHref: "/projects",
  backLabel: "Back to Projects",
  navLinks: [
    { label: "Overview", href: "#overview" },
    { label: "Stack", href: "#stack" },
    { label: "Showcase", href: "#showcase" },
    { label: "Architecture", href: "#architecture" },
  ],
  hero: {
    tags: ["[Tag 1]", "[Tag 2]", "[Tag 3]"],
    title: "[Project Title]",
    description: "[Short hero description about the project and its main value.]",
    image: {
      src: "[Hero Image URL]",
      alt: "[Hero image alt text]",
    },
    metrics: [
      { label: "[Metric Label 1]", value: "[Metric Value 1]" },
      { label: "[Metric Label 2]", value: "[Metric Value 2]" },
    ],
    primaryAction: {
      label: "[Primary Action Label]",
      href: "[Primary Action Link]",
    },
    secondaryAction: {
      label: "[Secondary Action Label]",
      href: "[Secondary Action Link]",
    },
  },
  overview: {
    title: "Project Overview",
    paragraphs: [
      "[Paragraph 1: describe the project goals, scope, and outcome.]",
      "[Paragraph 2: describe how it works, who uses it, or why it matters.]",
    ],
  },
  techStack: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
  capabilities: [
    {
      icon: "[material icon name]",
      label: "[Capability Label 1]",
      title: "[Capability Title 1]",
      description: "[Capability description 1.]",
    },
    {
      icon: "[material icon name]",
      label: "[Capability Label 2]",
      title: "[Capability Title 2]",
      description: "[Capability description 2.]",
    },
    {
      icon: "[material icon name]",
      label: "[Capability Label 3]",
      title: "[Capability Title 3]",
      description: "[Capability description 3.]",
    },
  ],
  showcase: {
    title: "Showcase",
    visualTitle: "[Showcase Visual Title]",
    visualDescription: "[Short description for the showcase visual or preview area.]",
    primaryActionLabel: "[Primary Showcase Action]",
    secondaryActionLabel: "[Secondary Showcase Action]",
  },
  metadata: {
    role: "[Role]",
    timeline: "[Timeline]",
    category: "[Category]",
  },
  architecture: {
    title: "System Architecture",
    steps: [
      {
        title: "[Step 1 Title]",
        body: "[Step 1 description.]",
        highlighted: false,
      },
      {
        title: "[Step 2 Title]",
        body: "[Step 2 description.]",
        highlighted: true,
      },
      {
        title: "[Step 3 Title]",
        body: "[Step 3 description.]",
        highlighted: false,
      },
    ],
  },
  footer: {
    copyrightLabel: "© [Year] [Project Name] Case Study",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Back to Top", href: "#top" },
    ],
  },
};
