"use client";
import React, { useEffect, useRef, useState } from "react";

export function HeadshotProgress({
  src = "/assets/headshot.png",
  alt = "Jason Moynihan",
  size = 160,
  gap = 8,
  border = 2,
  duration = 350,
  trigger = false,
}: {
  src?: string;
  alt?: string;
  size?: number;
  gap?: number;
  border?: number;
  duration?: number;
  trigger?: boolean;
}) {
  const [progress, setProgress] = useState(0);
  const [showSweep, setShowSweep] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const ringRadius = (size - border) / 2;
  const circumference = 2 * Math.PI * ringRadius;
  const imgSize = size - 2 * gap - border;

  // Animate sweep when trigger becomes true
  useEffect(() => {
    if (trigger) {
      setShowSweep(true);
      setProgress(0);
      let start = Date.now();
      clearInterval(intervalRef.current!);
      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - start;
        const pct = Math.min(1, elapsed / duration);
        setProgress(pct);
        if (pct === 1) {
          clearInterval(intervalRef.current!);
          // **DON'T hide sweep after it's done**
        }
      }, 16);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return (
    <div
      className="relative select-none group"
      style={{
        width: size,
        height: size,
      }}
    >
      {/* 1. STATIC faint base ring (white/20) */}
      <svg
        className="absolute top-0 left-0 z-10 pointer-events-none"
        width={size}
        height={size}
        style={{ display: "block" }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={ringRadius}
          fill="none"
          stroke="#fff"
          strokeOpacity={0.2}
          strokeWidth={border}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: 0,
            transition: "stroke-opacity 0.25s",
          }}
        />
      </svg>
      {/* 2. ANIMATED sweep ring */}
      <svg
        className="absolute top-0 left-0 z-20 pointer-events-none"
        width={size}
        height={size}
        style={{ display: "block", transform: "rotate(-90deg)" }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={ringRadius}
          fill="none"
          stroke="#fff"
          strokeOpacity={showSweep || progress === 1 ? 1 : 0}
          strokeWidth={border}
          style={{
            filter: progress === 1 ? "drop-shadow(0 0 8px #fff)" : undefined,
            strokeDasharray: circumference,
            strokeDashoffset: circumference * (1 - progress),
            transition:
              "stroke-dashoffset 0.3s, stroke-opacity 0.18s, filter 0.25s",
            pointerEvents: "none",
          }}
        />
      </svg>
      {/* --- Headshot Image --- */}
      <div
        className="absolute top-0 left-0 z-30 flex items-center justify-center rounded-full"
        style={{
          width: size,
          height: size,
        }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="rounded-full object-cover"
          style={{
            width: imgSize,
            height: imgSize,
            borderRadius: "9999px",
            border: "2px solid rgba(255,255,255,0.14)",
            boxShadow: "0 2px 8px 0 rgba(0,0,0,0.18)",
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}
