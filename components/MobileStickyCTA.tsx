"use client";

import { Phone, MessageCircle } from "lucide-react";
import { trackCallClick, trackWhatsAppClick } from "@/lib/gaEvents";

/**
 * Sticky bottom action bar — mobile only (`sm:hidden`).
 *
 * Mobile visitors on a tax/consultancy site convert far more often by
 * tapping "Call" or "WhatsApp" directly than by scrolling to a contact
 * form. This keeps both one thumb-tap away on every page, without
 * touching desktop layout at all.
 *
 * Positioned at z-40, below the AI chat widget (z-[60]) and its
 * full-screen mobile chat panel, so opening the chat always covers
 * this bar cleanly instead of overlapping it.
 */
export default function MobileStickyCTA() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 border-t border-white/10 shadow-[0_-4px_16px_rgba(0,0,0,0.12)]">
      <a
        href="tel:+919354953603"
        onClick={() => trackCallClick("mobile_sticky_bar")}
        className="flex items-center justify-center gap-2 bg-[#002b5c] text-white py-3.5 font-bold text-sm active:bg-[#001d40] transition"
      >
        <Phone size={17} />
        Call Now
      </a>
      <a
        href="https://wa.me/919354953603"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("mobile_sticky_bar")}
        className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 font-bold text-sm active:bg-[#1ebe57] transition"
      >
        <MessageCircle size={17} />
        WhatsApp
      </a>
    </div>
  );
}
