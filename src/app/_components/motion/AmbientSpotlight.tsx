"use client";

import { useEffect, useState, useRef } from "react";

export function AmbientSpotlight() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const posRef = useRef({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    // Only enable on pointer-fine devices
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let rafId: number;
    let targetX = -1000;
    let targetY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const updatePosition = () => {
      // Lerp position for silky smooth movement
      posRef.current.x += (targetX - posRef.current.x) * 0.12;
      posRef.current.y += (targetY - posRef.current.y) * 0.12;

      if (containerRef.current) {
        containerRef.current.style.setProperty(
          "--spotlight-x",
          `${posRef.current.x}px`
        );
        containerRef.current.style.setProperty(
          "--spotlight-y",
          `${posRef.current.y}px`
        );
      }

      rafId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        background: `radial-gradient(650px circle at var(--spotlight-x, -1000px) var(--spotlight-y, -1000px), rgba(90, 23, 31, 0.045), rgba(216, 197, 165, 0.015) 45%, transparent 75%)`,
      }}
    />
  );
}
