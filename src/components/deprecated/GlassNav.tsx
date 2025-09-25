"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function GlassNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed left-1/2 z-50 -translate-x-1/2 mt-6",
        "glass hover-lift px-4 md:px-6 py-2 md:py-3",
        scrolled && "shadow-glass"
      )}
      role="navigation"
      aria-label="Primary"
    >
      <ul className="flex items-center gap-2 md:gap-4 text-sm md:text-[0.95rem]">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-slate-600 hover:text-accent-600 transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500/30"></span>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
