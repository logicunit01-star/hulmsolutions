export interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
}

export interface HeroSection {
  headline: string;
  subheadline?: string;
  description?: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  image?: {
    src: string;
    alt: string;
  };
}

export interface Feature {
  title: string;
  description: string;
  icon: string; // Will map to Lucide icons or similar
}

export interface FeaturesSection {
  heading: string;
  subheading?: string;
  items: Feature[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
}

export interface TestimonialsSection {
  heading: string;
  subheading?: string;
  items: Testimonial[];
}

export interface StandardPageContent {
  seo: SEOProps;
  hero: HeroSection;
  features?: FeaturesSection;
  testimonials?: TestimonialsSection;
  // Allows for extending with specific sections in the future without breaking the base type
  additionalSections?: any[];
}
