"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { caseStudies } from "@/data/case-studies";

export function Overview({
  registry,
  slug,
}: {
  registry: React.RefObject<Record<string, HTMLElement | null>>;
  slug: string;
}) {
  const [underlineActive, setUnderlineActive] = useState(false);
  const [mediaHeight, setMediaHeight] = useState<number | null>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const goalsColumnRef = useRef<HTMLDivElement>(null);

  const caseStudy = caseStudies[slug];
  const orientation = caseStudy?.orientation || "portrait";

  useEffect(() => {
    const refToObserve =
      orientation === "portrait"
        ? leftColumnRef.current
        : goalsColumnRef.current;
    if (!refToObserve) return;

    const updateMediaHeight = () => {
      if (refToObserve) {
        const height = refToObserve.offsetHeight;
        setMediaHeight(height);
      }
    };

    updateMediaHeight();
    window.addEventListener("resize", updateMediaHeight);
    const resizeObserver = new ResizeObserver(updateMediaHeight);
    resizeObserver.observe(refToObserve);

    return () => {
      window.removeEventListener("resize", updateMediaHeight);
      resizeObserver.disconnect();
    };
  }, [caseStudy, orientation]);

  if (!caseStudy) {
    return null;
  }

  const overviewData = caseStudy.overview;

  return (
    <Section
      id="overview"
      registry={registry}
      className="relative py-16 md:py-24 px-4 z-20"
    >
      <MotionParallax range={30}>
        <div className="max-w-5xl mx-auto">
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
              Overview
            </SectionHeader>
          </MotionReveal>

          <MotionReveal direction="up">
            {orientation === "portrait" ? (
              /* Portrait Layout: Content Left, Media Right - IDENTICAL to original */
              <div className="flex flex-col lg:flex-row gap-12 mb-16 lg:items-start">
                {/* Left Column: Description + Goals */}
                <div ref={leftColumnRef} className="space-y-12 flex-1">
                  {/* Description */}
                  <div>
                    <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                      {overviewData.description}
                    </p>
                  </div>
                  {/* Goals */}
                  <div>
                    <h3 className="text-2xl md:text-3xl text-white/90 font-light mb-8">
                      Project Goals
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {overviewData.goals.map((goal, index) => (
                        <Card key={index} padding="p-6" className="group">
                          <div className="flex items-start gap-4">
                            <div className="shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 font-medium text-sm group-hover:bg-white/20 transition-colors">
                              {index + 1}
                            </div>
                            <p className="text-white/80 leading-relaxed pt-1">
                              {goal}
                            </p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Portrait Media with border */}
                {overviewData.media && (
                  <div
                    className="relative rounded-3xl overflow-hidden bg-white/5 shadow-2xl border-2 border-white/20 p-1"
                    style={{
                      height: mediaHeight ? `${mediaHeight}px` : "auto",
                      minWidth: "200px",
                      maxWidth: "384px",
                    }}
                  >
                    {overviewData.media.type === "video" ||
                    overviewData.media.type === "gif" ? (
                      <video
                        src={overviewData.media.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-3xl"
                      />
                    ) : (
                      <div className="relative w-full h-full rounded-3xl overflow-hidden">
                        <Image
                          src={overviewData.media.src}
                          alt={overviewData.media.alt || "App preview"}
                          fill
                          sizes="384px"
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              /* Landscape Layout: Description + Media Row, then Goals below */
              <div className="space-y-12 mb-16">
                {/* Description + Media Row */}
                <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
                  {/* Description */}
                  <div className="flex-1">
                    <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                      {overviewData.description}
                    </p>
                  </div>

                  {/* Landscape Media */}
                  {overviewData.media && (
                    <div
                      className="relative rounded-3xl overflow-hidden bg-white/5 shadow-2xl border-2 border-white/20 p-2 flex-shrink-0"
                      style={{
                        width: "100%",
                        maxWidth: "600px",
                        aspectRatio: "16/9",
                      }}
                    >
                      {overviewData.media.type === "video" ||
                      overviewData.media.type === "gif" ? (
                        <video
                          src={overviewData.media.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      ) : (
                        <div className="relative w-full h-full rounded-2xl overflow-hidden">
                          <Image
                            src={overviewData.media.src}
                            alt={overviewData.media.alt || "App preview"}
                            fill
                            sizes="600px"
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Goals - Full Width Single Column */}
                <div>
                  <h3 className="text-2xl md:text-3xl text-white/90 font-light mb-8">
                    Project Goals
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {overviewData.goals.map((goal, index) => (
                      <Card key={index} padding="p-6" className="group">
                        <div className="flex items-start gap-4">
                          <div className="shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 font-medium text-sm group-hover:bg-white/20 transition-colors">
                            {index + 1}
                          </div>
                          <p className="text-white/80 leading-relaxed pt-1">
                            {goal}
                          </p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </MotionReveal>
        </div>
      </MotionParallax>
    </Section>
  );
}
