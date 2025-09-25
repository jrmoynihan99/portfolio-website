"use client";
import React from "react";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { HeadshotProgress } from "@/components/ui/HeadshotProgress";

export function Home({
  registry,
  name = "Hi, I'm Jason Moynihan",
  title = "A Frontend Developer crafting exceptional digital experiences with React, AI, Swift, and modern web technologies",
}: {
  registry: React.RefObject<Record<string, HTMLElement | null>>;
  name?: string;
  title?: string;
}) {
  return (
    <Section
      id="home"
      registry={registry}
      className="relative min-h-screen flex items-center justify-center px-4 z-20"
    >
      <MotionParallax range={50}>
        <div className="text-center max-w-4xl mx-auto">
          {/* Headshot */}
          <MotionReveal direction="up" delay={0}>
            <div className="mb-8 flex items-center justify-center">
              <HeadshotProgress size={160} gap={8} border={2} trigger={true} />
            </div>
          </MotionReveal>

          {/* Name */}
          <MotionReveal direction="up" delay={120}>
            <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight">
              {name}
            </h1>
          </MotionReveal>

          {/* Divider line */}
          <MotionReveal direction="up" delay={200}>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8" />
          </MotionReveal>

          {/* Title/description */}
          <MotionReveal direction="up" delay={280}>
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
              {title}
            </p>
          </MotionReveal>

          {/* Buttons */}
          <MotionReveal direction="up" delay={400}>
            <div className="flex gap-4 justify-center mt-8">
              <Button href="#projects" variant="primary">
                <span className="relative z-10">View Projects</span>
              </Button>
              <Button href="#contact" variant="outline">
                Contact Me
              </Button>
            </div>
          </MotionReveal>
        </div>
      </MotionParallax>
      {/* Scroll indicator */}
      {/* Scroll indicator (absolute wrapper stays outside) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform z-20">
        <MotionReveal direction="up" delay={500}>
          <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
          <div className="mt-2 text-white/40 text-xs font-medium">SCROLL</div>
        </MotionReveal>
      </div>
    </Section>
  );
}
