
import { LucideIcon } from 'lucide-react';

export interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  highlight?: boolean;
  cta: string;
  checkoutUrl?: string;
}

export interface Testimonial {
  user: string;
  role?: string;
  title: string;
  content: string;
  streakDay: number;
  avatar?: string;
  platform?: 'reddit' | 'community';
}

export interface Expert {
  name: string;
  role: string;
  description: string;
  stats: { label: string; value: string }[];
  image: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan?: number; // For bento grid layout (1 or 2)
  bgImage?: string;
  cta?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

export interface Achievement {
  name: string;
  level: string;
  color: string;
}

export interface Benefit {
  title: string;
  icon: LucideIcon;
}
