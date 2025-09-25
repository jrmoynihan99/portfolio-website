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
          {/* Animate underline in sync with reveal (using onViewportEnter) */}
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
              underlineDelay={0} // The delay is handled above!
            >
              About
            </SectionHeader>
          </MotionReveal>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <MotionReveal direction="right">
              <div className="space-y-6">
                <p className="text-lg text-white/70 leading-relaxed font-light">
                  Computer Science graduate with a unique blend of technical
                  expertise and entrepreneurial spirit. After three years
                  developing embedded software for critical medical devices, I
                  took a leap into entrepreneurship, founding and running a
                  successful clothing brand.
                </p>
                <p className="text-lg text-white/70 leading-relaxed font-light">
                  This journey taught me the importance of user experience,
                  design, and business strategy. Now, I'm channeling these
                  insights back into tech, specializing in creating beautiful,
                  performant React applications with a focus on AI integration
                  and cutting-edge frontend technologies.
                </p>
                <p className="text-lg text-white/70 leading-relaxed font-light">
                  I believe great software isn't just functional—it should
                  delight users with thoughtful interactions, smooth
                  performance, and intuitive design.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal direction="left" delay={80}>
              <Card>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-white/60 font-medium">
                      Available for opportunities
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1">
                        Location
                      </p>
                      <p className="text-white font-light">
                        Open to Remote / Relocation
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1">
                        Focus Areas
                      </p>
                      <p className="text-white font-light">
                        React • AI Integration • UI/UX • Performance
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1">
                        Interests
                      </p>
                      <p className="text-white font-light">
                        Design Systems • WebGL • Creative Coding
                      </p>
                    </div>
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
