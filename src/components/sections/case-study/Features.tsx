"use client";
import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
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
  // onViewModeChange, // (unused)
  viewMode,
}: {
  registry: React.RefObject<Record<string, HTMLElement | null>>;
  slug: string;
  onViewModeChange?: (mode: "desktop" | "mobile") => void;
  viewMode?: "desktop" | "mobile";
}) {
  // ==== DO NOT RETURN BEFORE HOOKS (avoid conditional hooks) ====
  const caseStudy = caseStudies[slug];
  const missing = !caseStudy;
  // State
  const [underlineActive, setUnderlineActive] = useState(false);
  const [highlightedFeatures, setHighlightedFeatures] = useState<number[]>([]);
  const [internalViewMode] = useState<"desktop" | "mobile">("desktop");
  // Motion controls (single persistent node, no remount)
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimation();
  const animatingRef = useRef(false);
  // SAFARI FIX: Add reRenderKey to force layout recalculation
  const [reRenderKey, setReRenderKey] = useState(0);
  // Derived data (safe defaults when missing)
  const activeViewMode = viewMode ?? internalViewMode;
  const caseStudyOrientation = caseStudy?.orientation || "portrait";
  const featuresData = caseStudy?.features;
  const featuresOrientation = featuresData?.orientation || caseStudyOrientation;
  const computedOrientation: "portrait" | "landscape" =
    featuresOrientation === "both"
      ? activeViewMode === "desktop"
        ? "landscape"
        : "portrait"
      : (featuresOrientation as "portrait" | "landscape");
  // Visual state (lags during transition)
  const [visualOrientation, setVisualOrientation] = useState<
    "portrait" | "landscape"
  >(computedOrientation);
  const [visualViewMode, setVisualViewMode] = useState<"desktop" | "mobile">(
    activeViewMode
  );
  // Cross-fade/scale timeline (out → swap → in), no remount
  useEffect(() => {
    if (
      visualOrientation === computedOrientation &&
      visualViewMode === activeViewMode
    )
      return;
    if (prefersReducedMotion) {
      setVisualOrientation(computedOrientation);
      setVisualViewMode(activeViewMode);
      setReRenderKey((prev) => prev + 1); // SAFARI FIX: Force reflow
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
      setReRenderKey((prev) => prev + 1); // SAFARI FIX: Force reflow
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
  // Hash highlight
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
  // Grid layout from visual orientation
  const gridCols =
    visualOrientation === "portrait" ? "md:grid-cols-2" : "md:grid-cols-1";
  const itemsPerRow = visualOrientation === "portrait" ? 2 : 1;
  // If data missing, render nothing AFTER hooks (no conditional hooks)
  if (missing || !featuresData) return null;
  return (
    <Section
      id="features"
      registry={registry}
      className="relative py-16 md:py-24 px-4 z-20"
    >
      <MotionParallax range={30}>
        <div className="max-w-7xl mx-auto">
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
          <MotionReveal direction="up" delay={60}>
            <div className="mb-8">
              <p className="text-lg md:text-xl text-white/70 leading-relaxed text-center">
                {featuresData.intro}
              </p>
            </div>
          </MotionReveal>
          {/* Persistent animated wrapper */}
          <motion.div
            animate={controls}
            initial={false}
            style={{ willChange: "opacity, transform, filter" }}
            className={clsx("grid gap-6", gridCols)}
          >
            {featuresData.features.map((feature, index) => {
              const row = Math.floor(index / itemsPerRow);
              const col = index % itemsPerRow;
              const mediaOnRight = row % 2 === 0;
              const isHighlighted = highlightedFeatures.includes(index);
              const IconComponent = icons[
                feature.icon as keyof typeof icons
              ] as React.ComponentType<{ className?: string }> | undefined;
              const activeMedia = feature.mediaByDevice
                ? feature.mediaByDevice[visualViewMode]
                : feature.media;
              const mediaWidthClass =
                visualOrientation === "portrait" ? "sm:w-2/5" : "sm:w-1/2";
              return (
                <MotionReveal key={index} direction="up" delay={col * 80}>
                  <div
                    id={`feature-${index}`}
                    className={clsx(
                      "flex flex-col h-full group",
                      "sm:flex-row gap-3",
                      mediaOnRight ? "sm:flex-row-reverse" : "sm:flex-row",
                      "transition-all duration-500",
                      isHighlighted && "ring-2 ring-blue-400/50 rounded-4xl"
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
                    {/* Media - SAFARI FIX: Let media maintain natural aspect ratio */}
                    <div
                      key={`media-${index}-${reRenderKey}`}
                      className={clsx(
                        "flex-shrink-0 relative overflow-hidden bg-white/5 rounded-4xl shadow-2xl border-2 border-white/20 p-0",
                        mediaWidthClass
                      )}
                    >
                      {activeMedia ? (
                        activeMedia.type === "image" ? (
                          <div className="relative w-full rounded-2xl overflow-hidden">
                            <Image
                              src={activeMedia.src}
                              alt={activeMedia.alt || feature.title}
                              width={1000}
                              height={1000}
                              sizes="(max-width: 640px) 100vw, 50vw"
                              className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        ) : (
                          <video
                            key={activeMedia.src}
                            src={activeMedia.src}
                            poster={activeMedia.poster}
                            loop
                            muted
                            playsInline
                            className="w-full h-auto rounded-2xl"
                          />
                        )
                      ) : (
                        <div className="w-full aspect-video bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center rounded-2xl">
                          {IconComponent && (
                            <IconComponent className="w-16 h-16 text-white/20" />
                          )}
                        </div>
                      )}
                    </div>
                    {/* Content */}
                    <Card
                      padding="p-6 md:p-8"
                      className={clsx(
                        "flex-1 hover:bg-white/[0.07] transition-all flex flex-col justify-center",
                        isHighlighted && "bg-white/[0.1]"
                      )}
                    >
                      <div className="mb-3 group-hover:scale-110 transition-transform origin-left">
                        {IconComponent && (
                          <IconComponent className="w-8 h-8 text-white" />
                        )}
                      </div>
                      <h3 className="text-xl text-white font-medium mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </Card>
                  </div>
                </MotionReveal>
              );
            })}
          </motion.div>
        </div>
      </MotionParallax>
    </Section>
  );
}
// Helper
export function shouldShowFeaturesToggle(slug: string): boolean {
  const cs = caseStudies[slug];
  if (!cs) return false;
  const featuresData = cs.features;
  const featuresOrientation =
    featuresData.orientation || cs.orientation || "portrait";
  const hasDeviceSpecificMedia = featuresData.features.some(
    (f) => f.mediaByDevice
  );
  return featuresOrientation === "both" && hasDeviceSpecificMedia;
}
