"use client";
import React, { useState } from "react";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/data/case-studies";
import { HeadshotProgress } from "@/components/ui/HeadshotProgress";

export function CaseStudyHero({
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
    return null; // Or handle missing case study
  }

  const projectData = caseStudy.hero;

  return (
    <Section
      id="hero"
      registry={registry}
      className="relative min-h-screen flex items-center justify-center px-4 z-20"
    >
      <MotionParallax range={50}>
        <div className="text-center max-w-5xl mx-auto">
          <MotionReveal direction="up" delay={0}>
            <div className="mb-8 flex items-center justify-center">
              <HeadshotProgress
                image="anchor"
                size={160}
                gap={8}
                border={2}
                trigger={true}
              />
            </div>
          </MotionReveal>
          {/* Project Title */}
          <MotionReveal
            direction="up"
            delay={120}
            onViewportEnter={() => {
              setTimeout(() => setUnderlineActive(true), 300);
            }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight">
              {projectData.title}
            </h1>
          </MotionReveal>

          {/* Animated Divider line */}
          <MotionReveal direction="up" delay={120}>
            <div
              className="relative mx-auto w-24 h-px mb-8"
              style={{ minWidth: "6rem" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div
                className="absolute top-0 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent shadow-sm shadow-white/20 transition-all duration-700 ease-out"
                style={{
                  width: underlineActive ? "12rem" : 0,
                  opacity: underlineActive ? 1 : 0,
                  transitionDelay: underlineActive ? "100ms" : "0ms",
                }}
              />
            </div>
          </MotionReveal>

          {/* Tagline */}
          <MotionReveal direction="up" delay={200}>
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto mb-12">
              {projectData.tagline}
            </p>
          </MotionReveal>

          {/* Action Buttons */}
          <MotionReveal direction="up" delay={300}>
            <div className="flex flex-wrap gap-4 justify-center">
              {projectData.liveUrl && (
                <Button
                  href={projectData.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  <span className="relative z-10">View Live Site</span>
                </Button>
              )}
              {projectData.githubUrl && (
                <Button
                  href={projectData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                >
                  View on GitHub
                </Button>
              )}
            </div>
          </MotionReveal>
        </div>
      </MotionParallax>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform z-20">
        <MotionReveal direction="up" delay={400}>
          <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
          <div className="mt-2 text-white/40 text-xs font-medium">SCROLL</div>
        </MotionReveal>
      </div>
    </Section>
  );
}
