"use client";
import { useEffect, useState } from "react";

export function useActiveSection(
  registry: React.MutableRefObject<Record<string, HTMLElement | null>>
) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    function onScroll() {
      const entries = Object.entries(registry.current);
      let closestId = entries[0]?.[0] ?? "home";
      let minDistance = Infinity;

      // Find section closest to top (past or just below 100px)
      for (const [id, el] of entries) {
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // Only consider sections that are at least a little visible
        if (rect.bottom < 80) continue; // Section already far above view
        const distance = Math.abs(rect.top - 100);
        if (distance < minDistance) {
          minDistance = distance;
          closestId = id;
        }
      }

      // Bottom-of-page: force last as active
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 10
      ) {
        const [lastId, lastEl] = entries[entries.length - 1];
        if (lastEl) closestId = lastId;
      }

      setActive(closestId);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    setTimeout(onScroll, 10);
    return () => window.removeEventListener("scroll", onScroll);
  }, [registry]);

  return active;
}
