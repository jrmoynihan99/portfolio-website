"use client";
import React from "react";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function Hero({
  registry,
  name = "Your Name",
  title = "Frontend Developer crafting exceptional digital experiences with React, AI, and modern web technologies",
}: {
  registry: React.RefObject<Record<string, HTMLElement | null>>;
  name?: string;
  title?: string;
}) {
  return (
    <Section
      id="hero"
      registry={registry}
      className="relative min-h-screen flex items-center justify-center px-4 z-20"
    >
      <MotionParallax range={50}>
        <MotionReveal direction="up">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight">
                {name}
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8" />
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
                {title}
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <Button href="#projects" variant="primary">
                <span className="relative z-10">View Projects</span>
              </Button>
              <Button href="#contact" variant="outline">
                Contact Me
              </Button>
            </div>
          </div>
        </MotionReveal>
      </MotionParallax>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
        <div className="mt-2 text-white/40 text-xs font-medium">SCROLL</div>
      </div>
    </Section>
  );
}
