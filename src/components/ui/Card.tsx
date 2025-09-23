import React from "react";
import clsx from "clsx";

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}
