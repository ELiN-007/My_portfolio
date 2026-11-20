export interface SocialLinks {
  github?: string;
  linkedin?: string;
  facebook?: string;
  twitter?: string;
  email: string;
  discord?: string;
}

export interface StatItem {
  label: string;
  value: string;
  subtext?: string;
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Cloud & DevOps' | 'Tools & Design';
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'AI & Tools' | 'Mobile & Cloud';
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  metrics?: string;
  imageGradient: string;
  badge?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'education';
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  rating: number;
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    roles: string[];
    bioShort: string;
    bioLong: string[];
    location: string;
    availability: string;
    resumeUrl: string;
    phone?: string;
    social: SocialLinks;
  };
  stats: StatItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  services: ServiceItem[];
  testimonials: TestimonialItem[];
}
