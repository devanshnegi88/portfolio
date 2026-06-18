export interface SiteMeta {
  title: string;
  description: string;
  url: string;
  author: string;
  keywords: string[];
  ogImage: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Hero {
  greeting: string;
  name: string;
  title: string;
  titleAccent: string;
  tagline: string;
  cta: { label: string; href: string; variant: 'primary' | 'secondary' | 'ghost' }[];
  availableForWork: boolean;
}

export interface About {
  bio: string[];
  highlights: { icon: string; label: string; value: string }[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  color: 'indigo' | 'violet' | 'cyan' | 'emerald';
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  current?: boolean;
  achievements: string[];
  tech: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  highlights: string[];
  architecture: string[];
  links: { github?: string; live?: string };
  featured: boolean;
  status: 'live' | 'wip' | 'archived'| 'completed';
  metrics?: { label: string; value: string }[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  type: 'work' | 'course' | 'project';
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  focus: string;
}

export interface Contact {
  headline: string;
  subheadline: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  formEndpoint?: string;
}

export interface Footer {
  note: string;
  links: { label: string; href: string }[];
}

export interface PersonalInfo {
  name: string;
  email: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  location: string;
  resume: string;
  profileImage: string;
}
