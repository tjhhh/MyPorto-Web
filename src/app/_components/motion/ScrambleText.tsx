"use client";

import { useEffect, useState, useRef } from "react";

interface ScrambleTextProps {
  text: string;
  characters?: string;
  speed?: number; // ms per frame
  delay?: number; // ms before start
  className?: string;
  as?: "span" | "div" | "p";
  triggerOnHover?: boolean;
}

const DEFAULT_CHARS = "!<>-_\\/[]{}—=+*^?#0123456789";

export function ScrambleText({
  text,
  characters = DEFAULT_CHARS,
  speed = 28,
  delay = 0,
  className = "",
  as: Component = "span",
  triggerOnHover = false,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const isScramblingRef = useRef(false);

  const startScramble = () => {
    if (isScramblingRef.current) return;

    // Check prefers-reduced-motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplayText(text);
      return;
    }

    isScramblingRef.current = true;
    let iteration = 0;
    const maxIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        isScramblingRef.current = false;
      }

      iteration += 1 / 2; // Resolve 1 character every 2 frames
    }, speed);

    return () => {
      clearInterval(interval);
      isScramblingRef.current = false;
    };
  };

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    const timeout = setTimeout(() => {
      cleanup = startScramble();
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (cleanup) cleanup();
    };
  }, [text, delay]);

  return (
    <Component
      className={className}
      onMouseEnter={triggerOnHover ? startScramble : undefined}
    >
      {displayText}
    </Component>
  );
}
