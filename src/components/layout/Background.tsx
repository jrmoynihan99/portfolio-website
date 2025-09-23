"use client";
import React from "react";
import { useMouseGlow } from "@/hooks/useMouseGlow";

export function Background() {
  const mouse = useMouseGlow();
  return (
    <>
      {/* Gradient base */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950" />

      {/* Subtle grid */}
      <div className="fixed inset-0 opacity-[0.02] -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Mouse glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(220px at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.08), rgba(0,0,0,0) 60%)`,
          transition: "background-position 40ms linear",
        }}
      />
    </>
  );
}
