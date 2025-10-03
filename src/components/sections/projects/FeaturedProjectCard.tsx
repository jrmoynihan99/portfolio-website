import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { MediaDisplay } from "./MediaDisplay";
import { ProjectLinkButton } from "./ProjectLinkButton";
import type { Project } from "@/data/projects";

export function FeaturedProjectCard({ project }: { project: Project }) {
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

        {/* Right: Stacked Mobile Screens */}
        <div className="relative h-[500px] flex items-center justify-center">
          {/* Show up to 3 media items in a stacked layout with varying heights */}
          {project.media.slice(0, 3).map((media, index) => (
            <div
              key={index}
              className="absolute rounded-3xl overflow-hidden bg-white/5 shadow-2xl border-2 border-white/10 transition-all duration-300 group-hover:shadow-3xl"
              style={{
                width: "200px",
                aspectRatio: "9/19.5",
                transform: `translateX(${(index - 1) * 180}px) translateY(${
                  [0, -20, 15][index]
                }px)`,
                zIndex: index === 1 ? 3 : index === 0 ? 2 : 1,
              }}
            >
              <MediaDisplay media={media} />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
