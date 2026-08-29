export type ProductImage = {
  src: string;
  alt: string;
  label?: string;
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  category: string;
  ai: boolean;
  accent: string;
  accentSoft: string;
  icon: string;
  cover: string;
  gallery: ProductImage[];
  features: { title: string; desc: string }[];
  highlights: string[];
  platforms: string[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  privacyPolicyUrl?: string;
  featureGraphic?: string;
};

export const products: Product[] = [
  {
    slug: "pdf-pocket",
    name: "PDF Pocket",
    shortName: "PDF Pocket",
    tagline: "21 PDF tools in your pocket — private, fast, offline-first.",
    description:
      "PDF Pocket is a complete on-device PDF toolkit. Merge, split, compress, convert, edit, protect, repair, and scan — without uploading your documents to the cloud.",
    category: "Documents",
    ai: false,
    accent: "#29B3E2",
    accentSoft: "#D6F1FA",
    icon: "/products/pdf-pocket/icon.png",
    cover: "/products/pdf-pocket/home.png",
    gallery: [
      { src: "/products/pdf-pocket/home.png", alt: "PDF Pocket home", label: "Home" },
      { src: "/products/pdf-pocket/tools.png", alt: "PDF Pocket tools grid", label: "Tools" },
      { src: "/products/pdf-pocket/files.png", alt: "PDF Pocket files", label: "Files" },
      { src: "/products/pdf-pocket/scan.png", alt: "PDF Pocket scan", label: "Scan" },
    ],
    features: [
      {
        title: "Organize",
        desc: "Merge, split, compress, and reorder pages with a clean tool grid.",
      },
      {
        title: "Convert",
        desc: "PDF to Word, PPT, Excel, JPG — and back again.",
      },
      {
        title: "Edit & secure",
        desc: "Page numbers, watermarks, rotate, sign, unlock, protect, and repair.",
      },
      {
        title: "Scan to PDF",
        desc: "Turn camera or gallery pages into crisp PDFs in seconds.",
      },
    ],
    highlights: [
      "Local-first privacy — processing stays on your device",
      "21 tools in one focused app",
      "Share, download, and manage scanned documents",
      "Built for speed on modern phones",
    ],
    platforms: ["iOS", "Android"],
    appStoreUrl: "https://apps.apple.com/us/app/ai-pdf-pocket/id6782362901",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.one2w.pdfpocket",
    privacyPolicyUrl: "/privacy/pdf-pocket#account-deletion",
  },
  {
    slug: "onesnap",
    name: "OneSnap: Photo Editor",
    shortName: "OneSnap",
    tagline: "Professional photo editing with filters, collages, and private albums.",
    description:
      "OneSnap is a polished photo editor for everyday creators. Crop, adjust, filter, collage, watermark, and export — with drafts, templates, and a private album when you need privacy.",
    category: "Photo",
    ai: false,
    accent: "#8736BF",
    accentSoft: "#EFE8FA",
    icon: "/products/onesnap/icon.png",
    cover: "/products/onesnap/home.png",
    gallery: [
      { src: "/products/onesnap/home.png", alt: "OneSnap editor screen", label: "Editor" },
      { src: "/products/onesnap/icon.png", alt: "OneSnap app icon", label: "App icon" },
      { src: "/products/onesnap/preview-1.png", alt: "OneSnap artwork", label: "Artwork" },
    ],
    features: [
      {
        title: "Filters & adjust",
        desc: "Classic, vintage, and effect presets with strength control and fine-tune sliders.",
      },
      {
        title: "Collages & templates",
        desc: "Layouts, borders, frames, and one-tap templates for ready-to-share looks.",
      },
      {
        title: "Export your way",
        desc: "PNG, JPEG, or WEBP — save to gallery, private album, or share instantly.",
      },
      {
        title: "Privacy controls",
        desc: "Optional app lock PIN, watermarks, and a private album for sensitive shots.",
      },
    ],
    highlights: [
      "Autosaved drafts so you never lose progress",
      "Text, stickers, and layered edits",
      "Batch collage import",
      "Accessibility options including large text and high contrast",
    ],
    platforms: ["iOS", "Android"],
    privacyPolicyUrl: "/privacy/onesnap#account-deletion",
  },
  {
    slug: "onecut",
    name: "OneCut: Video Editor & Maker",
    shortName: "OneCut",
    tagline: "Trim, filter, caption, and export polished videos — fast.",
    description:
      "OneCut is a mobile video editor and maker built for quick, beautiful cuts. Trim and split clips, add text, control speed, apply filters, and export ready-to-post videos.",
    category: "Video",
    ai: true,
    accent: "#5B72E0",
    accentSoft: "#E4E8FA",
    icon: "/products/onecut/icon.png",
    cover: "/products/onecut/home.png",
    gallery: [
      { src: "/products/onecut/home.png", alt: "OneCut editor screen", label: "Editor" },
      { src: "/products/onecut/icon.png", alt: "OneCut app icon", label: "App icon" },
      { src: "/products/onecut/preview-1.png", alt: "OneCut artwork", label: "Artwork" },
    ],
    features: [
      {
        title: "Trim & cut",
        desc: "Precise trim, split, and clip control with a clear timeline preview.",
      },
      {
        title: "Text & stickers",
        desc: "Captions with style options — bold, shadow, and positioning.",
      },
      {
        title: "Filters & speed",
        desc: "Look presets and speed control to shape mood and pacing.",
      },
      {
        title: "Export ready",
        desc: "Export polished videos for social, stories, and everyday sharing.",
      },
    ],
    highlights: [
      "Built for creators who need speed without desktop complexity",
      "Before/after preview for filter comparisons",
      "Mute and audio-aware editing tools",
      "AI-assisted enhancements where they speed up creation",
    ],
    platforms: ["iOS", "Android"],
    privacyPolicyUrl: "/privacy/onecut#account-deletion",
  },
  {
    slug: "moveup-gym",
    name: "MoveUp Gym",
    shortName: "MoveUp Gym",
    tagline: "One fitness app for every workout — with or without equipment.",
    description:
      "MoveUp Gym is a no-equipment home workout app with guided programs, a 30-day challenge, exercise library, workout generator, and progress tracking. Train at home, outdoors, or the gym.",
    category: "Fitness",
    ai: false,
    accent: "#1B4D3E",
    accentSoft: "#E7EDE8",
    icon: "/products/moveup-gym/icon.png",
    cover: "/products/moveup-gym/screenshot-2.jpg",
    featureGraphic: "/products/moveup-gym/feature-graphic.jpg",
    gallery: [
      {
        src: "/products/moveup-gym/screenshot-2.jpg",
        alt: "MoveUp Gym exercise library",
        label: "Exercises",
      },
      {
        src: "/products/moveup-gym/home.jpg",
        alt: "MoveUp Gym home screen",
        label: "Home",
      },
      {
        src: "/products/moveup-gym/screenshot-1.jpg",
        alt: "MoveUp Gym workout screen",
        label: "Workouts",
      },
      {
        src: "/products/moveup-gym/screenshot-3.jpg",
        alt: "MoveUp Gym progress tracking",
        label: "Progress",
      },
      {
        src: "/products/moveup-gym/screenshot-4.jpg",
        alt: "MoveUp Gym programs",
        label: "Programs",
      },
    ],
    features: [
      {
        title: "Workout generator",
        desc: "Personalized sessions based on your level, goals, equipment, and available time.",
      },
      {
        title: "Exercise library",
        desc: "Search and filter hundreds of exercises — no gear, dumbbells, bands, and more.",
      },
      {
        title: "Programs & challenge",
        desc: "Structured programs and a 30-day challenge to keep you consistent.",
      },
      {
        title: "Progress & streaks",
        desc: "Track workouts, streaks, achievements, and weekly activity over time.",
      },
    ],
    highlights: [
      "No equipment required — or adapt to what you have",
      "Guided timer player with rest, pause, and skip",
      "26-language support for a global audience",
      "Onboarding tailored to your fitness level and goals",
    ],
    platforms: ["iOS", "Android"],
    privacyPolicyUrl: "/privacy/moveup-gym#account-deletion",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
