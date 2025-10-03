"use client";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { icons } from "@/components/icons/lucide-icons";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { caseStudies } from "@/data/case-studies";
import Image from "next/image";

export function Features({
  registry,
  slug,
}: {
  registry: React.RefObject<Record<string, HTMLElement | null>>;
  slug: string;
}) {
  const [underlineActive, setUnderlineActive] = useState(false);
  const [highlightedFeatures, setHighlightedFeatures] = useState<number[]>([]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash?.slice(1);
      const m = hash?.match(/^feature-(.+)$/);
      if (!m) return;
      const indices = m[1]
        .split(",")
        .map((s) => parseInt(s.trim(), 10))
        .filter((n) => !Number.isNaN(n));
      if (!indices.length) return;
      setTimeout(() => {
        const el = document.getElementById(`feature-${indices[0]}`);
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
        setHighlightedFeatures(indices);
        setTimeout(() => setHighlightedFeatures([]), 2000);
      }, 100);
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const caseStudy = caseStudies[slug];
  const orientation = caseStudy?.orientation || "portrait";

  if (!caseStudy) return null;

  const featuresData = caseStudy.features;
  const gridCols =
    orientation === "portrait" ? "md:grid-cols-3" : "md:grid-cols-1";
  const itemsPerRow = orientation === "portrait" ? 3 : 1;

  return (
    <Section
      id="features"
      registry={registry}
      className="relative py-16 md:py-24 px-4 z-20"
    >
      <MotionParallax range={30}>
        <div className="max-w-7xl mx-auto">
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
          <MotionReveal direction="up" delay={60}>
            <div className="mb-12">
              <p className="text-lg md:text-xl text-white/70 leading-relaxed text-center">
                {featuresData.intro}
              </p>
            </div>
          </MotionReveal>

          {/* Features Grid - Responsive based on orientation */}
          <div className={clsx("grid gap-6", gridCols)}>
            {featuresData.features.map((feature, index) => {
              const row = Math.floor(index / itemsPerRow);
              const col = index % itemsPerRow;
              const mediaOnRight = row % 2 === 0;
              const isHighlighted = highlightedFeatures.includes(index);
              const IconComponent = icons[
                feature.icon as keyof typeof icons
              ] as React.ComponentType<{ className?: string }>;

              // Media width: portrait = 40%, landscape = 50%
              const mediaWidthClass =
                orientation === "portrait" ? "sm:w-2/5" : "sm:w-1/2";

              return (
                <MotionReveal key={index} direction="up" delay={col * 80}>
                  <div
                    id={`feature-${index}`}
                    className={clsx(
                      "flex flex-col h-full group",
                      "sm:flex-row gap-3",
                      mediaOnRight ? "sm:flex-row-reverse" : "sm:flex-row",
                      "transition-all duration-500",
                      isHighlighted && "ring-2 ring-blue-400/50 rounded-3xl"
                    )}
                    onMouseEnter={(e) => {
                      const video = e.currentTarget.querySelector("video");
                      if (video) video.play();
                    }}
                    onMouseLeave={(e) => {
                      const video = e.currentTarget.querySelector("video");
                      if (video) {
                        video.pause();
                        video.currentTime = 0;
                        video.load();
                      }
                    }}
                  >
                    {/* Media Section */}
                    <div
                      className={clsx(
                        "w-full flex-shrink-0 relative overflow-hidden bg-white/5 rounded-3xl shadow-2xl border-2 border-white/20 p-0",
                        mediaWidthClass,
                        // Portrait mode: keep h-full behavior to match card height
                        orientation === "portrait" && "h-48 sm:h-full",
                        // Landscape mode: fixed 16:9 aspect ratio
                        orientation === "landscape" &&
                          "h-48 sm:h-auto sm:aspect-video"
                      )}
                    >
                      {feature.media ? (
                        feature.media.type === "image" ? (
                          <div className="relative w-full h-full rounded-2xl overflow-hidden">
                            <Image
                              src={feature.media.src}
                              alt={feature.media.alt || feature.title}
                              fill
                              sizes="(max-width: 640px) 100vw, 50vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        ) : (
                          <video
                            src={feature.media.src}
                            poster={feature.media.poster}
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        )
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center rounded-2xl">
                          {IconComponent && (
                            <IconComponent className="w-16 h-16 text-white/20" />
                          )}
                        </div>
                      )}
                    </div>

                    {/* Content Card */}
                    <Card
                      padding="p-6 md:p-8"
                      className={clsx(
                        "flex-1 hover:bg-white/[0.07] transition-all flex flex-col justify-center",
                        isHighlighted && "bg-white/[0.1]"
                      )}
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
                      <p className="text-white/70 leading-relaxed text-sm">
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
