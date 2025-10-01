import React, { useEffect, useRef, useState } from "react";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { MobileProjectCard } from "./MobileProjectCard";
import type { Project } from "@/data/projects";

interface MobileProjectCardsProps {
  projects: Project[];
}

export function MobileProjectCards({ projects }: MobileProjectCardsProps) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll snap for mobile
  const scrollToProject = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const projectWidth = container.scrollWidth / projects.length;
    container.scrollTo({
      left: projectWidth * index,
      behavior: "smooth",
    });
    setCurrentProjectIndex(index);
  };

  // Handle scroll events to update current index
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const projectWidth = container.scrollWidth / projects.length;
      const newIndex = Math.round(scrollLeft / projectWidth);
      setCurrentProjectIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [projects.length]);

  return (
    <>
      {/* Horizontal scroll container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, index) => (
          <div key={project.title} className="flex-none w-[85vw] snap-center">
            <MotionReveal direction="up" delay={100 + index * 50}>
              <MobileProjectCard project={project} />
            </MotionReveal>
          </div>
        ))}
      </div>

      {/* Mobile Navigation Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToProject(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentProjectIndex ? "bg-white" : "bg-white/30"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
