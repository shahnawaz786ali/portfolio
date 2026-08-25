export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "mail";
}

export type ProjectStatus = "live" | "private" | "in-development";

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  status: ProjectStatus;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  problem: string;
  solution: string;
  role: string;
  features: ProjectFeature[];
  architecture: string;
  challenges: { title: string; description: string }[];
  outcome: string;
  screenshots: { caption: string; src?: string }[];
  coverImage?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export interface ExperienceEntry {
  id: string;
  period: string;
  title: string;
  organization?: string;
  type: "development" | "education";
  summary: string;
  highlights: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  published: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  message: string;
}
