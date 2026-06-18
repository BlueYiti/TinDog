import { useState, useCallback, useRef, useEffect } from "react";
import { cn } from "../../utils/cn";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  slidesPerView?: number;
  className?: string;
  trackClassName?: string;
}

export function Carousel<T>({
  items,
  renderItem,
  slidesPerView = 1,
  className,
  trackClassName,
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = Math.max(0, items.length - slidesPerView + 1);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < totalSlides - 1;

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, totalSlides - 1));
      setCurrentIndex(clamped);
    },
    [totalSlides]
  );

  const goNext = useCallback(() => {
    if (canGoNext) goTo(currentIndex + 1);
  }, [canGoNext, currentIndex, goTo]);

  const goPrev = useCallback(() => {
    if (canGoPrev) goTo(currentIndex - 1);
  }, [canGoPrev, currentIndex, goTo]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && canGoNext) {
        goNext();
      } else if (diff < 0 && canGoPrev) {
        goPrev();
      }
    }
    setTouchStart(0);
    setTouchEnd(0);
  }, [touchStart, touchEnd, canGoNext, canGoPrev, goNext, goPrev]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && canGoPrev) {
        goPrev();
      } else if (e.key === "ArrowRight" && canGoNext) {
        goNext();
      }
    };

    const container = containerRef.current;
    container?.addEventListener("keydown", handleKeyDown);
    return () => container?.removeEventListener("keydown", handleKeyDown);
  }, [canGoNext, canGoPrev, goNext, goPrev]);

  if (items.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials carousel"
      tabIndex={0}
    >
      <div
        className={cn("overflow-x-hidden overflow-y-visible", trackClassName)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={cn(
            "flex transition-transform duration-500",
            reducedMotion && "transition-none"
          )}
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="shrink-0 px-3"
              style={{ width: `${100 / slidesPerView}%` }}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${items.length}`}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={goPrev}
          disabled={!canGoPrev}
          className={cn(
            "p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-orange",
            canGoPrev
              ? "text-neutral-700 hover:bg-neutral-200"
              : "text-neutral-300 cursor-not-allowed"
          )}
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="flex gap-2" role="tablist" aria-label="Slide indicators">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-orange",
                i === currentIndex
                  ? "bg-brand-orange scale-110"
                  : "bg-neutral-300 hover:bg-neutral-400"
              )}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          disabled={!canGoNext}
          className={cn(
            "p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-orange",
            canGoNext
              ? "text-neutral-700 hover:bg-neutral-200"
              : "text-neutral-300 cursor-not-allowed"
          )}
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}