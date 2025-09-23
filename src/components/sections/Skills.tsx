"use client";
import React from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { skills } from "@/data/skills";

export function Skills({
  registry,
}: {
  registry: React.RefObject<Record<string, HTMLElement | null>>;
}) {
  return (
    <Section
      id="skills"
      registry={registry}
      className="relative py-32 px-4 z-20"
    >
      <MotionParallax range={30}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader>Skills</SectionHeader>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skills.map((s, i) => (
              <MotionReveal
                key={s.name}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={(i % 5) * 40}
              >
                <Card className="p-6 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all">
                  <h3 className="font-medium text-white mb-3">{s.name}</h3>
                  <div className="space-y-2">
                    <ProgressBar value={s.level} />
                    <span className="text-xs text-white/40 font-medium">
                      {s.level}%
                    </span>
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
