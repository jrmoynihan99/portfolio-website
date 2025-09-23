export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export const projects: ProjectItem[] = [
  {
    title: "AI-Powered Chat Interface",
    description:
      "Modern chat app with AI integration, real-time responses, markdown rendering, and a sleek dark mode interface.",
    tech: ["React", "Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Interactive Data Visualization",
    description:
      "Dynamic data visualization tools with D3.js and React, featuring smooth animations and responsive design.",
    tech: ["React", "D3.js", "TypeScript", "REST APIs"],
    link: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce solution with cart functionality, payment integration, and an admin dashboard.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Real-time Collaboration Tool",
    description:
      "Collaborative workspace with WebSocket integration, multi-user live cursors, and real-time updates.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    link: "#",
  },
];
