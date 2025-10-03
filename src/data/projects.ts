// src/data/projects.ts

export type ProjectLinkType = "appstore" | "live" | "github" | "case";

export interface ProjectLink {
  type: ProjectLinkType;
  label?: string;
  href: string;
}

export interface ProjectMedia {
  type: "video" | "image";
  src: string;
  poster?: string;
  alt?: string;
}

export interface Project {
  title: string;
  slug?: string;
  summary: string;
  tech: string[];
  media: ProjectMedia[]; // Changed to array for gallery
  links?: ProjectLink[];
  featured?: boolean; // Added back for layout control
}

export const projects: Project[] = [
  {
    title: "Anchor",
    slug: "anchor",
    summary:
      "Nonprofit iOS accountability app built with React Native and Firebase — helping young men fight pornography addiction through anonymous support, AI-generated daily content, and AI moderation.",
    tech: [
      "React",
      "Typescript",
      "Expo",
      "Firebase",
      "Cloud Functions",
      "AI Integration",
    ],
    media: [
      {
        type: "image",
        src: "/assets/case-studies/anchor/anchor-sos.jpg",
        alt: "Anchor app home screen",
      },
      {
        type: "image",
        src: "/assets/case-studies/anchor/anchor-home.jpg",
        alt: "Anchor app goal setting",
      },
      {
        type: "image",
        src: "/assets/case-studies/anchor/anchor-messages.jpg",
        alt: "Anchor app notifications",
      },
      {
        type: "video",
        src: "/media/anchor-demo.mp4",
        poster: "/media/anchor-poster.jpg",
        alt: "Anchor app demo video",
      },
    ],
    links: [
      { type: "case", label: "Case Study", href: "/projects/anchor" },
      {
        type: "appstore",
        label: "App Store",
        href: "https://apps.apple.com/your-app",
      },
      {
        type: "github",
        label: "GitHub",
        href: "https://github.com/jrmoynihan99/anchor-accountability",
      },
    ],
    featured: true,
  },
  {
    title: "Dialed - AI Meal Planner",
    slug: "dialed",
    summary:
      "AI meal planner that uses your targets and preferences to create custom meals with images and recipes, and builds portion-accurate weekly plans with swaps and grocery lists.",
    tech: ["React", "Next.js", "TypeScript", "Zustand", "GLPK.js", "OpenAI"],
    media: [
      {
        type: "image",
        src: "/media/meal-planner-1.jpg",
        alt: "AI Meal Planner dashboard",
      },
      {
        type: "image",
        src: "/media/meal-planner-2.jpg",
        alt: "Meal optimization interface",
      },
      {
        type: "image",
        src: "/media/meal-planner-3.jpg",
        alt: "Recipe suggestions",
      },
    ],
    links: [
      { type: "case", label: "Case Study", href: "/projects/dialed" },
      {
        type: "live",
        label: "Demo",
        href: "https://meal-planner-ai-app.vercel.app/",
      },
    ],
  },
  {
    title: "LiqGlass Component Library",
    slug: "liqglass",
    summary:
      "Modern React/Tailwind component library inspired by IOS 26's Liquid Glass",
    tech: ["React", "Tailwind", "Vercel"],
    media: [
      {
        type: "image",
        src: "/media/collab-1.jpg",
        alt: "Realtime collaboration interface",
      },
      {
        type: "image",
        src: "/media/collab-2.jpg",
        alt: "User presence indicators",
      },
      {
        type: "image",
        src: "/media/collab-3.jpg",
        alt: "Live cursor tracking",
      },
    ],
    links: [
      { type: "live", label: "Demo", href: "https://collab-demo.com" },
      { type: "github", href: "https://github.com/you/collab" },
    ],
  },
  {
    title: "AI Smart Light Intersection",
    slug: "ai-light-intersection",
    summary:
      "Artificial Intelligence project where a light intersection learns through reinforcement learning. ",
    tech: ["C++"],
    media: [
      {
        type: "image",
        src: "/assets/case-studies/intersection/intersection.jpg",
        alt: "Data visualization dashboard",
      },
    ],
    links: [
      {
        type: "github",
        href: "https://github.com/jrmoynihan99/Smart-Light-Intersection",
      },
    ],
  },
];
