"use client";
import { useEffect, useState } from "react";

export function useActiveSection(
  registry: React.MutableRefObject<Record<string, HTMLElement | null>>
) {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      for (const [id, el] of Object.entries(registry.current)) {
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActive(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [registry]);

  return active;
}
