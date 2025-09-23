import React from "react";

export function SectionHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`text-center mb-20 group ${className}`}>
      <h2 className="text-4xl md:text-5xl font-light text-white mb-4 inline-block">
        {children}
      </h2>
      <div className="mx-auto h-px w-16 origin-center bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-300 group-hover:scale-x-125" />
    </div>
  );
}
