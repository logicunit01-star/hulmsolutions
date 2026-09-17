"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface DashboardSlide {
  title?: string;
  image: string;
}

interface DashboardCarouselProps {
  slides: DashboardSlide[];
}

export function DashboardCarousel({ slides }: DashboardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play timer (advances every 5s unless hovered)
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide, total]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div
      className="relative max-w-5xl mx-auto px-2 sm:px-4 focus:outline-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="POS Dashboard Preview Carousel"
    >
      {/* Main Image Frame */}
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-[#EBECEF] bg-white p-2 sm:p-3 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
        <div
          className="overflow-hidden rounded-xl md:rounded-2xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="w-full shrink-0 flex items-center justify-center bg-zinc-50"
              >
                <img
                  src={slide.image}
                  alt={slide.title || `Dashboard screen ${i + 1}`}
                  className="w-full h-auto object-contain select-none max-h-[600px]"
                  loading={i === 0 ? "eager" : "lazy"}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prev Arrow Button */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous dashboard slide"
        className="absolute left-0 sm:left-1 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-gray-700 hover:text-[#209f8f] border border-gray-200/90 shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#209f8f]/40 cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
      </button>

      {/* Next Arrow Button */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next dashboard slide"
        className="absolute right-0 sm:right-1 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-gray-700 hover:text-[#209f8f] border border-gray-200/90 shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#209f8f]/40 cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 stroke-[2.2]" />
      </button>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2.5 mt-6 sm:mt-8">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex === i
                ? "w-7 h-2.5 bg-[#209f8f] shadow-xs"
                : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
