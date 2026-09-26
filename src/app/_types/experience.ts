export interface ExperienceSubsystem {
  title: string;
  desc: string;
  badge?: string;
}

export interface ExperienceMetric {
  value: string;
  label: string;
  desc: string;
}

export interface ExperienceTechStack {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyShort: string;
  role: string;
  type: string;
  period: string;
  duration?: string;
  location: string;
  status: "active" | "completed";
  statusLabel: string;
  headline: string;
  summary: string;
  subsystems: ExperienceSubsystem[];
  metrics: ExperienceMetric[];
  workflows?: string[];
  techStack: ExperienceTechStack[];
}
