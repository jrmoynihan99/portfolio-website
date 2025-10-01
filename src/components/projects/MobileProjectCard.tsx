import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { MediaDisplay } from "./MediaDisplay";
import { ProjectLinkButton } from "./ProjectLinkButton";
import { MediaNavigation } from "./MediaNavigation";
import type { Project } from "@/data/projects";

export function MobileProjectCard({ project }: { project: Project }) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const nextMedia = () => {
    setCurrentMediaIndex((prev) =>
      prev === project.media.length - 1 ? 0 : prev + 1
    );
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) =>
      prev === 0 ? project.media.length - 1 : prev - 1
    );
  };

  // Use featured styling for featured projects, regular for others
  const titleSize = project.featured ? "text-2xl" : "text-xl";

  return (
    <Card className="overflow-hidden group hover:bg-white/10 hover:border-white/20 transition-all duration-300">
      {/* Media on top */}
      <div className="relative">
        <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-white/5">
          <MediaDisplay media={project.media[currentMediaIndex]} />
        </div>

        <MediaNavigation
          mediaLength={project.media.length}
          currentIndex={currentMediaIndex}
          onPrevious={prevMedia}
          onNext={nextMedia}
          onSelect={setCurrentMediaIndex}
          size="sm"
        />
      </div>

      {/* Content below */}
      <div className="p-5">
        <h3 className={`${titleSize} font-light text-white mb-3`}>
          {project.title}
        </h3>
        <p className="text-white/70 font-light mb-4 leading-relaxed text-sm">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.links?.map((link) => (
            <ProjectLinkButton key={link.href} link={link} size="sm" />
          ))}
        </div>
      </div>
    </Card>
  );
}
