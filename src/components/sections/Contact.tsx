"use client";
import React, { useState } from "react";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function Contact({
  registry,
  email = "your.email@example.com",
  linkedin = "https://linkedin.com/in/yourprofile",
  github = "https://github.com/yourusername",
  footnote = "© 2025 Jason Moynihan. All rights reserved.",
}: {
  registry: React.RefObject<Record<string, HTMLElement | null>>;
  email?: string;
  linkedin?: string;
  github?: string;
  footnote?: string;
}) {
  const [underlineActive, setUnderlineActive] = useState(false);

  return (
    <Section
      id="contact"
      registry={registry}
      className="relative py-16 md:py-24 px-4 z-20"
    >
      <MotionParallax range={35}>
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
            Let's Connect
          </SectionHeader>
        </MotionReveal>

        <MotionReveal direction="up">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-white/70 font-light max-w-2xl mx-auto mb-12">
              I'm always interested in hearing about new opportunities and
              exciting projects.
            </p>

            <div className="flex gap-6 justify-center mb-16">
              <Button href={`mailto:${email}`} variant="primary">
                Email
              </Button>
              <Button href={linkedin} variant="primary">
                LinkedIn
              </Button>
              <Button href={github} variant="primary">
                GitHub
              </Button>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-white/40 text-sm font-light">{footnote}</p>
            </div>
          </div>
        </MotionReveal>
      </MotionParallax>
    </Section>
  );
}
