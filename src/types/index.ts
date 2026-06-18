export interface Testimonial {
  id: number;
  name: string;
  petType: string;
  rating: number;
  quote: string;
  avatarSrc: string;
  petAvatarSrc: string;
}

export interface Partner {
  id: number;
  name: string;
  logoSrc: string;
  alt: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: "facebook" | "twitter" | "instagram" | "phone" | "email";
}

export interface SiteContent {
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
  };
  cta: {
    tagline: string;
    headline: string;
    buttonText: string;
  };
}