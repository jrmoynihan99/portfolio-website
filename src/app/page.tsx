"use client";

import { useRef } from "react";
import { Background } from "@/components/layout/Background";
import { SiteNav } from "@/components/layout/SiteNav";
import { useActiveSection } from "@/hooks/useActiveSection";

// Sections (create these mirroring your current JSX)
import { Home } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  const registry = useRef<Record<string, HTMLElement | null>>({});
  const active = useActiveSection(registry);

  return (
    <div className="relative min-h-screen">
      <Background variant="sunset" />
      <SiteNav active={active} />

      <Home registry={registry} />
      <About registry={registry} />
      <Projects registry={registry} />
      <Skills registry={registry} />
      <Experience registry={registry} />
      <Contact registry={registry} />
    </div>
  );
}
