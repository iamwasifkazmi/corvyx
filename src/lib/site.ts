export const siteConfig = {
  name: "Corvyx",
  legalName: "Corvyx",
  tagline: "Mobile apps that make everyday life easier.",
  description:
    "Corvyx builds elegant mobile apps — with and without AI — that simplify documents, photos, video, and daily workflows.",
  url: "https://corvyx.co",
  locale: "en_US",
  email: "hello@corvyx.co",
  supportEmail: "support@corvyx.co",
  twitter: "@corvyx",
  ogImage: "/og.png",
} as const;

export const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
] as const;
