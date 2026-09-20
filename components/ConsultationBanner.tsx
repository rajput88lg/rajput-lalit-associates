"use client";

import { useEffect, useState } from "react";
import { X, PhoneCall } from "lucide-react";
import { trackEvent } from "@/lib/gaEvents";

const SESSION_KEY = "rla_consult_banner_shown";

/**
 * A single dismissible "Book a Free Consultation" banner.
 *
 * - Desktop: shows on exit-intent (mouse leaves toward the top of the
 *   viewport — the classic "about to close the tab" gesture).
 * - Mobile: there's no mouse, so it shows once the visitor has scrolled
 *   past ~55% of the page — far enough to mean genuine interest, not an
 *   accidental bounce.
 *
 * Shows at most once per browser tab (sessionStorage), so a visitor
 * reading three blog posts in one visit only ever sees it once. Never
 * blocks the page — no overlay, just a bottom banner the visitor can
 * dismiss with one tap.
 */
export default function ConsultationBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    let shown = false;
    try {
      shown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // Private browsing / blocked storage — just fall back to "not shown yet".
    }
    if (shown) return;

    const markShown = () => {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // ignore
      }
    };

    const reveal = () => {
      setVisible(true);
      markShown();
      trackEvent("consultation_banner_shown");
    };

    // Desktop exit-intent: mouse leaves near the top of the window.
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 8) {
        reveal();
      }
    };

    // Mobile fallback: no mouse events, so use scroll depth instead.
    const onScroll = () => {
      const scrolled =
        window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
      if (scrolled > 0.55) {
        reveal();
      }
    };

    const isMobile = window.matchMedia("(pointer: coarse)").matches;

    if (isMobile) {
      window.addEventListener("scroll", onScroll, { passive: true });
    } else {
      document.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  if (!visible || dismissed) return null;

  return (
    <div
      role="complementary"
      aria-label="Free consultation offer"
      className="fixed bottom-14 sm:bottom-5 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto max-w-md"
    >
      <div className="relative bg-white border border-gray-200 shadow-2xl rounded-2xl p-5 pr-10 flex items-start gap-4">
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X size={18} />
        </button>

        <div className="w-11 h-11 rounded-full bg-[#002b5c] flex items-center justify-center flex-shrink-0">
          <PhoneCall size={20} className="text-[#f0b84b]" />
        </div>

        <div>
          <p className="font-extrabold text-[#002b5c]">
            Still deciding? Talk to us — it&apos;s free.
          </p>
          <p className="mt-1 text-sm text-gray-600 leading-6">
            Book a no-obligation consultation for GST, Income Tax or
            Compliance questions.
          </p>
          <a
            href="/appointment"
            onClick={() => trackEvent("consultation_banner_click")}
            className="inline-block mt-3 bg-[#d99a2b] hover:bg-[#c98a1e] text-white text-sm font-bold px-4 py-2 rounded-lg transition"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
