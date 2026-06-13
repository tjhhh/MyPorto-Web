export type ProjectDetailNavLink = {
  label: string;
  href: string;
};

export type ProjectDetailFooterLink = {
  label: string;
  href: string;
};

export type ProjectDetailMetric = {
  label: string;
  value: string;
};

export type ProjectDetailCapability = {
  icon: string;
  label: string;
  title: string;
  description: string;
};

export type ProjectDetailArchitectureStep = {
  title: string;
  body: string;
  highlighted?: boolean;
};

export type ProjectDetailChallenge = {
  title: string;
  problem: string;
  solution: string;
  bullets?: string[];
  result?: string;
};

export type ProjectDetailFeature = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
};

export type ProjectDetailPageData = {
  sectionLabel: string;
  projectName: string;
  backHref: string;
  backLabel: string;
  navLinks: ProjectDetailNavLink[];
  hero: {
    tags: string[];
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
    metrics: ProjectDetailMetric[];
    primaryAction: {
      label: string;
      href: string;
      icon?: string;
    };
    secondaryAction: {
      label: string;
      href: string;
      icon?: string;
    };
  };
  overview: {
    title: string;
    paragraphs: string[];
  };
  challenge?: ProjectDetailChallenge;
  techStack: string[];
  capabilities: ProjectDetailCapability[];
  showcase: {
    title: string;
    visualTitle: string;
    visualDescription: string;
    primaryActionLabel: string;
    secondaryActionLabel: string;
    primaryActionIcon?: string;
    secondaryActionIcon?: string;
    features?: ProjectDetailFeature[];
  };
  metadata: {
    role: string;
    timeline: string;
    category: string;
  };
  architecture: {
    title: string;
    image?: string;
    steps: ProjectDetailArchitectureStep[];
  };
  footer: {
    copyrightLabel: string;
    links: ProjectDetailFooterLink[];
  };
};
