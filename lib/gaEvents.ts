/**
 * GA4 custom event helper.
 *
 * `@next/third-parties/google`'s <GoogleAnalytics /> (already loaded
 * site-wide in app/layout.tsx) sets up `window.dataLayer` and
 * `window.gtag` the same way the standard GA4 snippet does. This
 * helper just calls `window.gtag("event", ...)` safely — it no-ops
 * during server rendering and if GA hasn't loaded yet (ad blocker,
 * slow network, consent not yet given, etc.) instead of throwing.
 *
 * Usage:
 *   import { trackEvent } from "@/lib/gaEvents";
 *   trackEvent("whatsapp_click", { location: "mobile_sticky_bar" });
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>
) {
  try {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }
    window.gtag("event", eventName, params ?? {});
  } catch {
    // Analytics failing silently should never break the user's flow.
  }
}

/** Fired when a visitor taps a WhatsApp link/button anywhere on the site. */
export function trackWhatsAppClick(location: string) {
  trackEvent("whatsapp_click", { location });
}

/** Fired when a visitor taps a Call Now (tel:) link/button. */
export function trackCallClick(location: string) {
  trackEvent("call_click", { location });
}

/** Fired when a lead-generation form (appointment / contact) is submitted successfully. */
export function trackFormSubmit(formName: string) {
  trackEvent("form_submit", { form_name: formName });
}

/** Fired when a calculator/tool produces a result for the visitor. */
export function trackCalculatorResult(toolName: string) {
  trackEvent("calculator_result", { tool_name: toolName });
}

/** Fired when a visitor completes the "which service do I need" quiz. */
export function trackQuizComplete(recommendedService: string) {
  trackEvent("quiz_complete", { recommended_service: recommendedService });
}
