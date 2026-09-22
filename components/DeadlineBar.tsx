"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { upcomingDeadlines, daysUntil, formatDeadlineDate, type TaxDeadline } from "@/lib/taxDeadlines";
import { trackEvent } from "@/lib/gaEvents";

/**
 * Slim strip at the very top of every page showing the next tax/GST
 * deadline, linking to /tax-deadlines.
 *
 * - Computed in the browser (not at build time), so the "days left" is
 *   always today's number and a passed deadline never shows.
 * - Renders nothing on the server → no hydration mismatch.
 * - Hides itself once every date in lib/taxDeadlines.ts has passed.
 * - Close button hides it for the rest of this page view only.
 */
export default function DeadlineBar() {
  const [next, setNext] = useState<TaxDeadline | null>(null);
  const [days, setDays] = useState(0);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const upcoming = upcomingDeadlines();
    if (upcoming.length > 0) {
      setNext(upcoming[0]);
      setDays(daysUntil(upcoming[0].date));
    }
  }, []);

  if (!next || closed) return null;

  const when =
    days === 0 ? "aaj last date hai" : days === 1 ? "kal last date hai" : `sirf ${days} din baaki`;

  return (
    <div className="bg-[#002b5c] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3">
        <p className="flex-1 text-center leading-6">
          <span aria-hidden="true">⏰ </span>
          <strong>{next.short}</strong> — {formatDeadlineDate(next.date)},{" "}
          <span className="text-[#f0b84b] font-semibold">{when}</span>.{" "}
          <Link
            href="/tax-deadlines"
            onClick={() => trackEvent("deadline_bar_click", { deadline: next.id })}
            className="underline font-semibold hover:text-[#f0b84b] whitespace-nowrap"
          >
            Saari deadlines dekhein →
          </Link>
        </p>
        <button
          type="button"
          onClick={() => setClosed(true)}
          aria-label="Close deadline notice"
          className="p-1 rounded hover:bg-white/10 shrink-0"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
