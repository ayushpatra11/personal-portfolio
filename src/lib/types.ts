export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface CareerItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
  current?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  achievements: string[];
  logo: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}
