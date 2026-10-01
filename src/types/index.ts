export interface SiteConfig {
  name: string;
  shortName: string;
  role: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  leetcode: string;
  resume: string;
  ogImage: string;
  profileImage: string;
  siteUrl: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
  features: string[];
  category: string;
  highlight: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  duration: string;
  location: string;
  technologies: string[];
  description: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface AIEngineeringArea {
  title: string;
  subtitle: string;
  body: string;
}

export interface EngineeringCaseStudy {
  title: string;
  project: string;
  tags: string[];
  body: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { id: "home", label: "Intro", href: "#home" },
  { id: "about", label: "Developer", href: "#about" },
  { id: "projects", label: "Built Systems", href: "#projects" },
  { id: "engineering", label: "GenAI", href: "#engineering" },
  { id: "systems", label: "System Design", href: "#systems" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "skills", label: "Toolkit", href: "#skills" },
  { id: "contact", label: "Contact", href: "#contact" },
];
