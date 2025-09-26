"use client";
import React, { useState } from "react";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export function About({
  registry,
}: {
  registry: React.RefObject<Record<string, HTMLElement | null>>;
}) {
  const [underlineActive, setUnderlineActive] = useState(false);

  return (
    <Section
      id="about"
      registry={registry}
      className="relative py-16 md:py-24 px-4 z-20"
    >
      <MotionParallax range={40}>
        <div className="max-w-6xl mx-auto">
          {/* Header + underline timing */}
          <MotionReveal
            direction="up"
            delay={0}
            onViewportEnter={() =>
              setTimeout(() => setUnderlineActive(true), 240)
            }
          >
            <SectionHeader
              activateUnderline={underlineActive}
              underlineDelay={80}
            >
              About
            </SectionHeader>
          </MotionReveal>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: brief professional summary (no fluff) */}
            <MotionReveal direction="right">
              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed font-light">
                  I’m a product-minded front-end engineer focused on React/Next
                  and AI-powered UX. I started my software journey in embedded
                  medical devices. I then founded and ran a 7 figure clothing
                  brand with my wife. Now, I'm applying that mix of rigor and
                  customer empathy along with a passion for intuitive design to
                  building fast, beautiful user interfaces.
                </p>
                <p className="text-lg text-white/70 leading-relaxed font-light">
                  Today my work centers on clean architecture, smooth
                  interaction design, and measurable performance— shipping
                  interfaces that feel intuitive, solve real problems, and make
                  users lives better.
                </p>
              </div>
            </MotionReveal>

            {/* Right: single concise facts/availability card */}
            <MotionReveal direction="left" delay={60}>
              <Card className="hover:bg-white/10 transition-colors">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-white/80 font-medium">
                      Open to opportunities
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1">
                        Role
                      </p>
                      <p className="text-white font-light">
                        AI Frontend / Full-Stack Engineer
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1">
                        Focus
                      </p>
                      <p className="text-white font-light">
                        React • Next.js • TypeScript • AI
                      </p>
                    </div>
                  </div>

                  <div className="pt-1 flex flex-wrap gap-4">
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium group"
                    >
                      View Projects
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
                          d="M17 8l4 4m0 0-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                    <a
                      href="#experience"
                      className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium group"
                    >
                      Experience
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
                          d="M17 8l4 4m0 0-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium group"
                    >
                      Contact
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
                          d="M17 8l4 4m0 0-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </Card>
            </MotionReveal>
          </div>
        </div>
      </MotionParallax>
    </Section>
  );
}
