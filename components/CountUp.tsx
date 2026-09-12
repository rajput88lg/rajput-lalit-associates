"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Final number, e.g. 200 */
  end: number;
  /** Text after the number, e.g. "+" or "%" */
  suffix?: string;
  /** Text before the number */
  prefix?: string;
  /** Animation length in milliseconds */
  duration?: number;
  className?: string;
};

/**
 * CountUp
 * --------
 * Number ko 0 se final value tak animate karta hai jab wo screen par aata hai.
 *
 * SEO-safe design:
 * - Server-rendered HTML me ASLI number hota hai (e.g. "200"), 0 nahi.
 *   Isse Google ko sahi content dikhta hai.
 * - Number 0 par tabhi reset hota hai jab element screen me aata hai aur
 *   animation actually start ho rahi hai.
 * - Reduced-motion users ke liye animation skip — final number seedha dikhta hai.
 */
export default function CountUp({
  end,
  suffix = "",
  prefix = "",
  duration = 1700,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);
  const [value, setValue] = useState(end);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      return; // final number as-is
    }

    let frame = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || startedRef.current) return;

          startedRef.current = true;
          observer.disconnect();

          const startTime = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // easeOutCubic — tez shuru, halka sa slow finish
            const eased = 1 - Math.pow(1 - progress, 3);

            setValue(Math.round(eased * end));

            if (progress < 1) {
              frame = requestAnimationFrame(tick);
            }
          };

          setValue(0);
          frame = requestAnimationFrame(tick);
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
