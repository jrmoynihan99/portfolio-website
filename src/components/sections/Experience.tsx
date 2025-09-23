"use client";
import React from "react";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { experiences } from "@/data/experiences";

export function Experience({
  registry,
}: {
  registry: React.RefObject<Record<string, HTMLElement | null>>;
}) {
  return (
    <Section
      id="experience"
      registry={registry}
      className="relative py-32 px-4 z-20"
    >
      <MotionParallax range={40}>
        <SectionHeader>Experience</SectionHeader>

        <div className="space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <MotionReveal
              key={exp.title}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <Card className="transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-light text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-white/60 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-white/40 font-medium text-sm mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-white/70 font-light mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((h) => (
                    <Tag key={h}>{h}</Tag>
                  ))}
                </div>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </MotionParallax>
    </Section>
  );
}
