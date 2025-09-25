import React from "react";
import clsx from "clsx";

export function Card({
  children,
  className = "",
  padding = "p-8",
}: {
  children: React.ReactNode;
  className?: string;
  padding?: string; // Accepts Tailwind padding classes, e.g. "p-4", "py-2 px-4"
}) {
  return (
    <div
      className={clsx(
        "bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl",
        padding, // now controlled by prop, defaults to "p-8"
        className
      )}
    >
      {children}
    </div>
  );
}
