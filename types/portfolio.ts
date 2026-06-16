import type { IconType } from "react-icons";

export type Accent = "blue" | "purple" | "green";

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export type Service = {
  title: string;
  description: string;
  icon: IconType;
  accent: Accent;
};

export type Skill = {
  name: string;
  level: number;
  accent: Accent;
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  sourceUrl: string;
  accent: Accent;
  visual: "medical" | "maps" | "growth" | "saas" | "realEstate" | "restaurant";
  image?: string;
};

export type Stat = {
  value: number | string;
  suffix?: string;
  label: string;
  animated?: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  icon: IconType;
};
