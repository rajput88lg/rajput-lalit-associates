"use client";

import { MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/gaEvents";

const REFERRAL_MESSAGE =
  "I wanted to share a recommendation — Rajput Lalit & Associates handles my GST, Income Tax and Accounting work in Ambala, and I've found them reliable and professional. If you need help with GST, ITR filing, TDS or business registration, you can reach them here: https://www.rajputlalitassociates.in";

type Props = {
  /** Where this button appears, for GA tracking (e.g. "refer_page", "footer"). */
  location: string;
  className?: string;
};

/**
 * One-tap WhatsApp share button for word-of-mouth referrals.
 *
 * Uses wa.me's share intent WITHOUT a phone number, so it opens the
 * visitor's own WhatsApp contact/share picker rather than messaging
 * the firm — the visitor chooses who to send the recommendation to.
 */
export default function WhatsAppReferralButton({ location, className = "" }: Props) {
  const href = `https://wa.me/?text=${encodeURIComponent(REFERRAL_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("referral_share_click", { location })}
      className={
        "inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold px-6 py-3.5 rounded-xl transition shadow-lg " +
        className
      }
    >
      <MessageCircle size={19} />
      Share on WhatsApp
    </a>
  );
}
