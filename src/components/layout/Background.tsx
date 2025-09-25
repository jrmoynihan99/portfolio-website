"use client";
import React from "react";
import { MouseGlowLayer } from "@/components/animations/MouseGlowLayer";

type BackgroundVariant =
  | "slate"
  | "beige"
  | "forest"
  | "midnight"
  | "sunset"
  | "ocean"
  | "purple";

const backgroundVariants = {
  // Original dark slate
  slate: "bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950",

  // Dark warm beige/brown tones
  beige: "bg-gradient-to-br from-stone-950 via-neutral-900 to-slate-950",

  // Muted forest (more gray-green)
  forest: "bg-gradient-to-br from-slate-900 via-gray-800 to-stone-900",

  // Muted midnight (subtle blue-gray)
  midnight: "bg-gradient-to-br from-slate-950 via-blue-950/50 to-gray-950",

  // Muted sunset (subtle warm grays)
  sunset: "bg-gradient-to-br from-stone-900 via-slate-800 to-gray-900",

  // Muted ocean (gray-blue)
  ocean: "bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950",

  // Muted purple (gray-purple)
  purple: "bg-gradient-to-br from-slate-900 via-gray-900 to-stone-950",
};

export function Background({
  variant = "slate",
}: {
  variant?: BackgroundVariant;
}) {
  return (
    <>
      {/* Gradient base */}
      <div className={`fixed inset-0 -z-20 ${backgroundVariants[variant]}`} />

      {/* Subtle grid */}
      <div className="fixed inset-0 -z-10 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Mouse glow w/ trailing tail */}
      {/*<MouseGlowLayer /> */}
    </>
  );
}

// Usage examples in comments:
/*
<Background variant="slate" />    // Original dark slate
<Background variant="beige" />    // Dark warm stone/neutral tones
<Background variant="forest" />   // Muted gray-green
<Background variant="midnight" /> // Subtle blue-gray
<Background variant="sunset" />   // Muted warm grays
<Background variant="ocean" />    // Muted gray-blue
<Background variant="purple" />   // Subtle gray-purple
*/
