import { useEffect, useMemo, useState } from "react";

/**
 * Tracks whether the viewport has crossed the bottom of the hero section.
 *
 * @param heroSelector CSS selector for the hero root element
 * @param offsetPx Used to account for fixed navbar height
 */
export function useHeroBoundary(heroSelector: string, offsetPx: number) {
  const [heroBottomPx, setHeroBottomPx] = useState<number | null>(null);

  useEffect(() => {
    const el = document.querySelector(heroSelector) as HTMLElement | null;
    if (!el) return;

    const compute = () => {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      // bottom position relative to document
      const bottom = rect.bottom + scrollTop;
      setHeroBottomPx(bottom);
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [heroSelector]);



  // We need reactivity on scroll; we intentionally keep the hook simple.
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const onScroll = () => setTick((t) => t + 1);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const past = useMemo(() => {
    if (heroBottomPx == null) return false;
    return (window.scrollY || 0) >= heroBottomPx - offsetPx;
  }, [heroBottomPx, tick]);

  return { past };
}

