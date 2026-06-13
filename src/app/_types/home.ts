export type Project = {
  title: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
  type: string;
  role: "Fullstack" | "Backend" | "Frontend" | "App Development";
  team: "Solo" | "Group";
  repoUrl: string | null;
  liveUrl: string | null;
  detailHref: string;
  coreCapabilities?: string[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  appPreviewImages?: string[];
};

export type ProjectTechIconMap = Record<string, string>;

export type TechStackItem = {
  name: string;
  logo: string;
};

export type TechStackCategory = {
  label: string;
  items: TechStackItem[];
};

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};
