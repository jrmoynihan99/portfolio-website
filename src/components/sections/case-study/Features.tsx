"use client";
import React, { useState } from "react";
import clsx from "clsx";
import * as LucideIcons from "lucide-react";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { caseStudies } from "@/data/case-studies";

export function Features({
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

  const featuresData = caseStudy.features;

  return (
    <Section
      id="features"
      registry={registry}
      className="relative py-16 md:py-24 px-4 z-20"
    >
      <MotionParallax range={30}>
        <div className="max-w-6xl mx-auto">
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
              Key Features
            </SectionHeader>
          </MotionReveal>

          {/* Intro */}
          <MotionReveal direction="up" delay={100}>
            <div className="mb-12">
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                {featuresData.intro}
              </p>
            </div>
          </MotionReveal>

          {/* Features Grid - 2 columns */}
          <div className="grid md:grid-cols-2 gap-6">
            {featuresData.features.map((feature, index) => {
              // Calculate which row this item is in (0-indexed)
              const row = Math.floor(index / 2);
              // Even rows (0, 2, 4...) have media on right, odd rows (1, 3, 5...) on left
              const mediaOnRight = row % 2 === 0;

              // Get the Lucide icon component
              const IconComponent = LucideIcons[
                feature.icon as keyof typeof LucideIcons
              ] as React.ComponentType<{ className?: string }>;

              return (
                <MotionReveal
                  key={index}
                  direction="up"
                  delay={180 + index * 60}
                >
                  <div
                    className={clsx(
                      "flex flex-col h-full group",
                      "sm:flex-row gap-3",
                      mediaOnRight ? "sm:flex-row-reverse" : "sm:flex-row"
                    )}
                  >
                    {/* Media Section - Separate from card */}
                    <div className="w-full sm:w-2/5 flex-shrink-0 relative overflow-hidden bg-white/5 rounded-3xl">
                      {feature.media ? (
                        feature.media.type === "image" ? (
                          <img
                            src={feature.media.src}
                            alt={feature.media.alt || feature.title}
                            className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <video
                            src={feature.media.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-48 sm:h-full object-cover"
                          />
                        )
                      ) : (
                        <div className="w-full h-48 sm:h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                          {IconComponent && (
                            <IconComponent className="w-16 h-16 text-white/20" />
                          )}
                        </div>
                      )}
                    </div>

                    {/* Content Card */}
                    <Card
                      padding="p-6 md:p-8"
                      className="flex-1 hover:bg-white/[0.07] transition-all flex flex-col"
                    >
                      {/* Icon */}
                      <div className="mb-3 group-hover:scale-110 transition-transform origin-left">
                        {IconComponent && (
                          <IconComponent className="w-8 h-8 text-white" />
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl text-white font-medium mb-3">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/70 leading-relaxed text-sm flex-1">
                        {feature.description}
                      </p>
                    </Card>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </MotionParallax>
    </Section>
  );
}
