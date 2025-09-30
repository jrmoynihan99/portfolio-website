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
      "Anonymous, non-profit accountability app with push notifications, moderation tools, and scheduled AI-generated daily content.",
    tech: [
      "React",
      "Expo",
      "Firebase",
      "Cloud Functions",
      "AI Integration",
      "Typescript",
    ],
    media: [
      {
        type: "image",
        src: "/media/anchor-1.jpg",
        alt: "Anchor app home screen",
      },
      {
        type: "image",
        src: "/media/anchor-2.jpg",
        alt: "Anchor app goal setting",
      },
      {
        type: "image",
        src: "/media/anchor-3.jpg",
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
    ],
    featured: true,
  },
  {
    title: "Dialed - AI Meal Planner",
    slug: "dialed",
    summary:
      "Guided planning with streaming GPT + structured JSON and an optimizer to hit calorie/protein targets.",
    tech: ["Next.js", "TypeScript", "Zustand", "GLPK.js", "OpenAI"],
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
      { type: "live", label: "Live Demo", href: "https://your-demo-url.com" },
      {
        type: "github",
        label: "GitHub",
        href: "https://github.com/you/meal-planner",
      },
      { type: "case", label: "Case Study", href: "/projects/dialed" },
    ],
  },
  {
    title: "Interactive Data Visualization",
    slug: "viz",
    summary:
      "Dynamic D3 + React visualizations with smooth animations and responsive layouts for complex datasets.",
    tech: ["React", "D3.js", "TypeScript", "WebGL", "REST APIs"],
    media: [
      {
        type: "image",
        src: "/media/viz-1.jpg",
        alt: "Data visualization dashboard",
      },
      {
        type: "image",
        src: "/media/viz-2.jpg",
        alt: "Interactive chart controls",
      },
      {
        type: "video",
        src: "/media/viz-demo.mp4",
        poster: "/media/viz-poster.jpg",
        alt: "Data visualization demo",
      },
    ],
    links: [
      { type: "live", href: "https://viz-demo.com" },
      { type: "github", href: "https://github.com/you/viz" },
    ],
  },
  {
    title: "Real-time Collaboration Tool",
    slug: "collab",
    summary:
      "Multi-user live cursors, presence indicators, and synced state over WebSockets with conflict resolution.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB", "Redis"],
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
      { type: "live", href: "https://collab-demo.com" },
      { type: "github", href: "https://github.com/you/collab" },
    ],
  },
];
