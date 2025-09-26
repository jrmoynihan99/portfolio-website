import React, { useEffect, useRef } from "react";
import type { ProjectMedia } from "@/data/projects";

export function MediaDisplay({ media }: { media: ProjectMedia }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current || media.type !== "video") return;
    const vid = videoRef.current;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            vid.play().catch(() => {});
          } else {
            vid.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    io.observe(vid);
    return () => io.disconnect();
  }, [media.type]);

  if (media.type === "video") {
    return (
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        playsInline
        muted
        loop
        autoPlay
        preload="metadata"
        poster={media.poster}
      >
        <source src={media.src} type="video/mp4" />
      </video>
    );
  }

  return (
    <img
      src={media.src}
      alt={media.alt || ""}
      className="h-full w-full object-cover"
    />
  );
}
