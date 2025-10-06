"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { caseStudies } from "@/data/case-studies";

export function Overview({
  registry,
  slug,
  onViewModeChange,
  viewMode,
}: {
  registry: React.RefObject<Record<string, HTMLElement | null>>;
  slug: string;
  onViewModeChange?: (mode: "desktop" | "mobile") => void;
  viewMode?: "desktop" | "mobile";
}) {
  const [underlineActive, setUnderlineActive] = useState(false);
  const [internalViewMode, setInternalViewMode] = useState<
    "desktop" | "mobile"
  >("desktop");
  const [mediaHeight, setMediaHeight] = useState<number | null>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const goalsColumnRef = useRef<HTMLDivElement>(null);

  // Controlled vs internal
  const activeViewMode = viewMode ?? internalViewMode;
  const setViewMode = onViewModeChange ?? setInternalViewMode;

  const caseStudy = caseStudies[slug];
  if (!caseStudy) return null;

  const caseStudyOrientation = caseStudy.orientation || "portrait";
  const overviewData = caseStudy.overview;
  const overviewOrientation = overviewData.orientation || caseStudyOrientation;

  // Orientation that *should* be displayed (based on external toggle)
  const computedOrientation: "portrait" | "landscape" =
    overviewOrientation === "both"
      ? activeViewMode === "desktop"
        ? "landscape"
        : "portrait"
      : (overviewOrientation as "portrait" | "landscape");

  // Animation setup (no remount)
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimation();
  const [visualOrientation, setVisualOrientation] = useState<
    "portrait" | "landscape"
  >(computedOrientation);
  const [visualViewMode, setVisualViewMode] = useState<"desktop" | "mobile">(
    activeViewMode
  );
  const animatingRef = useRef(false);

  // Cross-fade/scale timeline: out → swap → in
  useEffect(() => {
    if (
      visualOrientation === computedOrientation &&
      visualViewMode === activeViewMode
    )
      return;
    if (prefersReducedMotion) {
      setVisualOrientation(computedOrientation);
      setVisualViewMode(activeViewMode);
      return;
    }
    if (animatingRef.current) return;
    animatingRef.current = true;

    (async () => {
      await controls.start({
        opacity: 0,
        scale: 0.98,
        filter: "blur(2px)",
        transition: { duration: 0.16, ease: [0.22, 0.61, 0.36, 1] },
      });

      setVisualOrientation(computedOrientation);
      setVisualViewMode(activeViewMode);

      await controls.start({
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.22, ease: [0.22, 0.61, 0.36, 1] },
      });

      animatingRef.current = false;
    })();
  }, [
    computedOrientation,
    activeViewMode,
    controls,
    prefersReducedMotion,
    visualOrientation,
    visualViewMode,
  ]);

  // Choose media based on *visual* mode to avoid swapping mid-fade
  const activeMedia = overviewData.mediaByDevice
    ? overviewData.mediaByDevice[visualViewMode]
    : overviewData.media;

  // Resize logic should track the *visual* orientation currently shown
  useEffect(() => {
    const refToObserve =
      visualOrientation === "portrait"
        ? leftColumnRef.current
        : goalsColumnRef.current;
    if (!refToObserve) return;

    const updateMediaHeight = () => {
      setMediaHeight(refToObserve?.offsetHeight ?? null);
    };

    updateMediaHeight();
    window.addEventListener("resize", updateMediaHeight);
    const resizeObserver = new ResizeObserver(updateMediaHeight);
    resizeObserver.observe(refToObserve);

    return () => {
      window.removeEventListener("resize", updateMediaHeight);
      resizeObserver.disconnect();
    };
  }, [caseStudy, visualOrientation]);

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
            {/* Persistent container that animates but never remounts */}
            <motion.div
              animate={controls}
              initial={false}
              style={{ willChange: "opacity, transform, filter" }}
            >
              {visualOrientation === "portrait" ? (
                // Portrait: content left, media right (media height matches left column)
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
                              <div className="shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 font-medium text-sm group-hover:bg.white/20 transition-colors">
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
                  {activeMedia && (
                    <div
                      className="relative rounded-4xl overflow-hidden bg-white/5 shadow-2xl border-2 border-white/20 p-1"
                      style={{
                        height: mediaHeight ? `${mediaHeight}px` : "auto",
                        minWidth: "200px",
                        maxWidth: "384px",
                      }}
                    >
                      {activeMedia.type === "video" ||
                      activeMedia.type === "gif" ? (
                        <video
                          key={activeMedia.src}
                          src={activeMedia.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover rounded-4xl"
                        />
                      ) : (
                        <div className="relative w-full h-full rounded-3xl overflow-hidden">
                          <Image
                            src={activeMedia.src}
                            alt={activeMedia.alt || "App preview"}
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
                // Landscape: description + media row, then goals below
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
                    {activeMedia && (
                      <div
                        className={clsx(
                          "relative rounded-3xl overflow-hidden bg-white/5 shadow-2xl border-2 border-white/20 p-2",
                          "flex-shrink-0 w-full lg:w-auto"
                        )}
                        style={{ maxWidth: "600px", aspectRatio: "16/9" }}
                      >
                        {activeMedia.type === "video" ||
                        activeMedia.type === "gif" ? (
                          <video
                            key={activeMedia.src}
                            src={activeMedia.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        ) : (
                          <div className="relative w-full h-full rounded-2xl overflow-hidden">
                            <Image
                              src={activeMedia.src}
                              alt={activeMedia.alt || "App preview"}
                              fill
                              sizes="600px"
                              className="object-cover"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Goals - Full Width */}
                  <div ref={goalsColumnRef}>
                    <h3 className="text-2xl md:text-3xl text-white/90 font-light mb-8">
                      Project Goals
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {overviewData.goals.map((goal, index) => (
                        <Card key={index} padding="p-6" className="group">
                          <div className="flex items-start gap-4">
                            <div className="shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 font-medium text-sm group-hover:bg.white/20 transition-colors">
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
            </motion.div>
          </MotionReveal>
        </div>
      </MotionParallax>
    </Section>
  );
}

// Export helper to determine if toggle should show
export function shouldShowOverviewToggle(slug: string): boolean {
  const cs = caseStudies[slug];
  if (!cs) return false;

  const overviewData = cs.overview;
  const overviewOrientation =
    overviewData.orientation || cs.orientation || "portrait";
  const hasDeviceSpecificMedia = !!overviewData.mediaByDevice;

  return overviewOrientation === "both" && hasDeviceSpecificMedia;
}
