"use client";
import React, { useState } from "react";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { caseStudies } from "@/data/case-studies";

export function TechnicalChallenges({
  registry,
  slug,
}: {
  registry: React.RefObject<Record<string, HTMLElement | null>>;
  slug: string;
}) {
  const [underlineActive, setUnderlineActive] = useState(false);

  // Fetch project data based on slug
  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
    return null;
  }

  const challengesData = caseStudy.technicalChallenges;

  if (!challengesData) {
    return null;
  }

  return (
    <Section
      id="technical-challenges"
      registry={registry}
      className="relative py-16 md:py-24 px-4 z-20"
    >
      <MotionParallax range={30}>
        <div className="max-w-5xl mx-auto">
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
              Technical Challenges
            </SectionHeader>
          </MotionReveal>

          {/* Intro */}
          <MotionReveal direction="up" delay={100}>
            <div className="mb-12">
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                {challengesData.intro}
              </p>
            </div>
          </MotionReveal>

          {/* Challenges List */}
          <div className="space-y-8">
            {challengesData.challenges.map((challenge, index) => (
              <MotionReveal key={index} direction="up" delay={180 + index * 80}>
                <Card padding="p-6 md:p-8" className="group">
                  <div className="space-y-4">
                    {/* Challenge Title */}
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 font-medium text-sm group-hover:bg-white/20 transition-colors">
                        {index + 1}
                      </div>
                      <h3 className="text-xl md:text-2xl text-white font-medium pt-0.5">
                        {challenge.title}
                      </h3>
                    </div>

                    {/* Problem */}
                    <div className="ml-12">
                      <h4 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">
                        Challenge
                      </h4>
                      <p className="text-white/70 leading-relaxed">
                        {challenge.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="ml-12">
                      <h4 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">
                        Solution
                      </h4>
                      <p className="text-white/80 leading-relaxed">
                        {challenge.solution}
                      </p>
                    </div>

                    {/* Technologies Used (if any) */}
                    {challenge.technologies && (
                      <div className="ml-12">
                        <div className="flex flex-wrap gap-2 mt-3">
                          {challenge.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 text-xs font-medium text-white/70 bg-white/10 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </MotionReveal>
            ))}
          </div>
        </div>
      </MotionParallax>
    </Section>
  );
}
