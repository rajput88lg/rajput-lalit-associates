"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    /**
     * layout.tsx ki inline script isko check karti hai. Agar ye flag 4 second
     * tak set na ho (matlab React load hi nahi hua), to wo script
     * `reveal-ready` class hata deti hai aur poora content dikhne lagta hai.
     * Isse content kabhi permanently chhupa nahi rehta.
     */
    __revealActive?: boolean;
  }
}

/**
 * ScrollReveal
 * -------------
 * Har us element ko jiske paas `data-reveal` attribute hai, scroll par
 * smoothly fade-in karta hai.
 *
 * Safety (SEO ke liye zaroori):
 * - Element sirf tab hidden hota hai jab <html> par `reveal-ready` class ho.
 *   Wo class layout.tsx ke chhote inline script se lagti hai, jo sirf tab
 *   chalti hai jab browser IntersectionObserver support karta ho aur user ne
 *   reduced-motion set na kiya ho.
 * - Agar JS na chale (ya Googlebot render na kare), koi element hide nahi
 *   hota — poora content normally dikhta hai.
 *
 * Ye component kuch render nahi karta, sirf observer lagata hai.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    const revealAll = () => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => el.classList.add("is-visible"));
    };

    // Reduced motion ya purana browser → sab kuch turant dikhao
    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      window.__revealActive = true;
      root.classList.remove("reveal-ready");
      revealAll();
      return;
    }

    // Inline script ko batao ki observer sambhal liya — wo apna 4-second
    // safety fallback cancel kar dega.
    window.__revealActive = true;
    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll<HTMLElement>(
      "[data-reveal]:not(.is-visible)"
    );

    elements.forEach((el) => observer.observe(el));

    // Safety net: agar kisi wajah se observer fire na ho, 3 second baad
    // sab kuch visible kar do — content kabhi chhupa nahi rehna chahiye.
    const fallback = window.setTimeout(revealAll, 3000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
