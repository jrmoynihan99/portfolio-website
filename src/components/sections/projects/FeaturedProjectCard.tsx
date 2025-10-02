import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { MediaDisplay } from "./MediaDisplay";
import { ProjectLinkButton } from "./ProjectLinkButton";
import { MediaNavigation } from "./MediaNavigation";
import type { Project } from "@/data/projects";

export function FeaturedProjectCard({ project }: { project: Project }) {
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

  return (
    <Card className="overflow-hidden group hover:bg-white/10 hover:border-white/20 transition-all duration-300">
      <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-8">
        {/* Left: Project Info */}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-light text-white mb-4">
            {project.title}
          </h3>

          <p className="text-white/80 font-light mb-6 text-lg leading-relaxed">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {project.links?.map((link) => (
              <ProjectLinkButton key={link.href} link={link} />
            ))}
          </div>
        </div>

        {/* Right: Media Gallery */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/5">
            <MediaDisplay media={project.media[currentMediaIndex]} />
          </div>

          <MediaNavigation
            mediaLength={project.media.length}
            currentIndex={currentMediaIndex}
            onPrevious={prevMedia}
            onNext={nextMedia}
            onSelect={setCurrentMediaIndex}
            size="lg"
          />
        </div>
      </div>
    </Card>
  );
}
