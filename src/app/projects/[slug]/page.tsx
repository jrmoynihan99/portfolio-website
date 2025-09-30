"use client";

import React, { useRef } from "react";
import { Background } from "@/components/layout/Background";
import { SiteNav } from "@/components/layout/SiteNav";
import { BackButton } from "@/components/layout/BackButton";
import { useActiveSection } from "@/hooks/useActiveSection";

// Case study sections
import { CaseStudyHero } from "@/components/sections/case-study/Hero";
import { Overview } from "@/components/sections/case-study/Overview";
import { ProblemSolution } from "@/components/sections/case-study/ProblemSolution";
import { Features } from "@/components/sections/case-study/Features";
import { TechStack } from "@/components/sections/case-study/TechStack";
import { TechnicalChallenges } from "@/components/sections/case-study/TechnicalChallenges";
import { Results } from "@/components/sections/case-study/Results";
import { Gallery } from "@/components/sections/case-study/Gallery";

// Define case study sections for navigation
const caseStudySections = [
  { id: "hero", label: "Home" },
  { id: "overview", label: "Overview" },
  { id: "problem-solution", label: "Problems & Solutions" },
  { id: "features", label: "Features" },
  { id: "tech", label: "Tech Stack" },
  { id: "technical-challenges", label: "Technical Challenges" },
  { id: "results", label: "Results" },
  { id: "gallery", label: "Gallery" },
];

export default function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const registry = useRef<Record<string, HTMLElement | null>>({});
  const active = useActiveSection(registry);

  const { slug } = React.use(params);

  return (
    <div className="relative min-h-screen ">
      <Background variant={slug} />
      <BackButton href="/#projects" />
      <SiteNav active={active} sections={caseStudySections} />

      <CaseStudyHero registry={registry} slug={slug} />
      <Overview registry={registry} slug={slug} />
      <ProblemSolution registry={registry} slug={slug} />
      <Features registry={registry} slug={slug} />
      <TechStack registry={registry} slug={slug} />
      <TechnicalChallenges registry={registry} slug={slug} />
      <Results registry={registry} slug={slug} />
      <Gallery registry={registry} slug={slug} />
    </div>
  );
}
