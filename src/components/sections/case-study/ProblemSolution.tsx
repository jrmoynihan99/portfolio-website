"use client";
import React, { useState } from "react";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { caseStudies } from "@/data/case-studies";

export function ProblemSolution({
  registry,
  slug,
}: {
  registry: React.RefObject<Record<string, HTMLElement | null>>;
  slug: string;
}) {
  const [underlineActive, setUnderlineActive] = useState(false);
  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
    return null;
  }

  const data = caseStudy.problemSolution;

  return (
    <Section
      id="problem-solution"
      registry={registry}
      className="relative py-16 md:py-24 px-4 z-20"
    >
      <MotionParallax range={30}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <MotionReveal
            direction="up"
            delay={0}
            onViewportEnter={() =>
              setTimeout(() => setUnderlineActive(true), 300)
            }
          >
            <SectionHeader
              activateUnderline={underlineActive}
              underlineDelay={80}
            >
              Problems & Solutions
            </SectionHeader>
          </MotionReveal>

          {/* Problem-Solution Pairs */}
          <div className="space-y-8">
            {data.pairs.map((pair, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-6 lg:items-stretch"
              >
                {/* Problem Card */}
                <MotionReveal direction="up" delay={100 + index * 80}>
                  <Card padding="p-8" className="h-full flex items-center">
                    <div className="w-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 font-medium">
                          {index + 1}
                        </div>
                        <h3 className="text-xl md:text-2xl text-white font-medium pt-1">
                          {pair.problem.title}
                        </h3>
                      </div>
                      <p className="text-white/70 leading-relaxed">
                        {pair.problem.description}
                      </p>
                    </div>
                  </Card>
                </MotionReveal>

                {/* Arrow - visible only on large screens */}
                <div className="hidden lg:flex items-center justify-center px-4">
                  <MotionReveal direction="up" delay={140 + index * 80}>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white/30"
                    >
                      <path
                        d="M8 20H32M32 20L24 12M32 20L24 28"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </MotionReveal>
                </div>

                {/* Solution Card */}
                <MotionReveal direction="up" delay={180 + index * 80}>
                  <Card padding="p-8" className="h-full bg-white/[0.07]">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 font-medium">
                        ✓
                      </div>
                      <h3 className="text-xl md:text-2xl text-white font-medium pt-1">
                        {pair.solution.title}
                      </h3>
                    </div>
                    <p className="text-white/70 leading-relaxed mb-4">
                      {pair.solution.description}
                    </p>
                    {/* Technical highlights */}
                    {pair.solution.tech && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {pair.solution.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </Card>
                </MotionReveal>
              </div>
            ))}
          </div>
        </div>
      </MotionParallax>
    </Section>
  );
}
