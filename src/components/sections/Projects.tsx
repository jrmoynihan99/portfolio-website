"use client";
import React, { useState } from "react";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/data/projects";

export function Projects({
  registry,
}: {
  registry: React.RefObject<Record<string, HTMLElement | null>>;
}) {
  const [underlineActive, setUnderlineActive] = useState(false);

  return (
    <Section
      id="projects"
      registry={registry}
      className="relative py-16 md:py-24 px-4 z-20"
    >
      <MotionParallax range={30}>
        {/* Section header reveal + underline animation */}
        <MotionReveal
          direction="up"
          delay={0}
          onViewportEnter={() => {
            // Add a small delay for perfect timing, or set to 0 for exactly in sync
            setTimeout(() => setUnderlineActive(true), 400);
          }}
        >
          <SectionHeader
            activateUnderline={underlineActive}
            underlineDelay={80}
          >
            Projects
          </SectionHeader>
        </MotionReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <MotionReveal
              key={p.title}
              direction={i % 2 === 0 ? "right" : "left"}
            >
              <Card className="transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-102">
                <h3 className="text-2xl font-light text-white mb-4">
                  {p.title}
                </h3>
                <p className="text-white/70 font-light mb-6 leading-relaxed">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 font-medium group"
                >
                  View Project
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </MotionParallax>
    </Section>
  );
}
