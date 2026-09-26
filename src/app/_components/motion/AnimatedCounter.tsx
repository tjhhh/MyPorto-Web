"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number; // ms, default 1200ms
  delay?: number; // ms delay
  trigger?: boolean;
  className?: string;
}

interface ParsedMetric {
  prefix: string;
  targetNumber: number | null;
  suffix: string;
  hasCommaOrDot: boolean;
  isNumeric: boolean;
}

function parseMetricValue(raw: string): ParsedMetric {
  const trimmed = raw.trim();

  // Match optional prefix like "< ", "> ", "~", "+ "
  const prefixMatch = trimmed.match(/^([<>~+\s]+)/);
  const prefix = prefixMatch ? prefixMatch[1] : "";
  const rest = prefix ? trimmed.slice(prefix.length).trim() : trimmed;

  // Match number with possible dots or commas (e.g. 5.000, 500, 95)
  const numberMatch = rest.match(/^(\d+(?:[.,]\d+)*)/);

  if (!numberMatch) {
    return {
      prefix: "",
      targetNumber: null,
      suffix: trimmed,
      hasCommaOrDot: false,
      isNumeric: false,
    };
  }

  const numStr = numberMatch[1];
  const hasCommaOrDot = numStr.includes(".") || numStr.includes(",");
  // For Indonesian/European format like "5.000", convert to 5000
  const cleanNum = parseFloat(numStr.replace(/[.,]/g, ""));
  const suffix = rest.slice(numStr.length).trim();

  return {
    prefix,
    targetNumber: isNaN(cleanNum) ? null : cleanNum,
    suffix: suffix ? ` ${suffix}`.replace(/\s+([%+])/g, "$1") : "",
    hasCommaOrDot,
    isNumeric: !isNaN(cleanNum),
  };
}

// Ease out expo: starts fast, lands smoothly
function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

export function AnimatedCounter({
  value,
  duration = 1200,
  delay = 0,
  trigger = true,
  className = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!trigger || hasAnimatedRef.current) return;

    // Check prefers-reduced-motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplayValue(value);
      hasAnimatedRef.current = true;
      return;
    }

    const parsed = parseMetricValue(value);
    if (!parsed.isNumeric || parsed.targetNumber === null) {
      setDisplayValue(value);
      hasAnimatedRef.current = true;
      return;
    }

    let animationFrameId: number;
    let startTime: number | null = null;
    const target = parsed.targetNumber;

    const timeout = setTimeout(() => {
      hasAnimatedRef.current = true;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutExpo(progress);

        const currentNum = Math.round(target * easedProgress);

        // Format formatted number
        let formattedNum = currentNum.toString();
        if (parsed.hasCommaOrDot && target >= 1000) {
          formattedNum = currentNum.toLocaleString("id-ID");
        }

        setDisplayValue(`${parsed.prefix}${formattedNum}${parsed.suffix}`);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setDisplayValue(value);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration, delay, trigger]);

  return (
    <span ref={elementRef} className={className}>
      {displayValue}
    </span>
  );
}
