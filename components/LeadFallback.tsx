"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/gaEvents";

const WHATSAPP = "919354953603";

/**
 * Shown ONLY when a form's email (EmailJS) send fails.
 *
 * 1. Gives the visitor a one-tap WhatsApp button with everything they
 *    typed already filled in — so the enquiry still reaches the firm.
 * 2. Fires a `form_error` GA4 event the moment it appears, so failing
 *    forms show up in Analytics instead of failing silently.
 */
export default function LeadFallback({
  form,
  fields,
}: {
  /** Short id for analytics, e.g. "contact", "gst_calculator". */
  form: string;
  /** Label → value pairs to prefill in the WhatsApp message. */
  fields: Record<string, string | undefined>;
}) {
  useEffect(() => {
    trackEvent("form_error", { form });
  }, [form]);

  const lines = Object.entries(fields)
    .filter(([, v]) => v && v.trim() !== "")
    .map(([k, v]) => `${k}: ${(v as string).trim().slice(0, 600)}`);

  const text = ["Namaste, website ka form submit nahi hua. Meri enquiry:", ...lines].join("\n");
  const href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("lead_fallback_whatsapp", { form })}
      className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#147438] hover:bg-[#0f5429] px-5 py-3 text-sm font-bold text-white transition"
    >
      Ye message WhatsApp par bhejein
    </a>
  );
}
