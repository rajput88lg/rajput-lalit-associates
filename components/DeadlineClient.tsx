"use client";

import { useEffect, useState } from "react";
import {
  daysUntil,
  upcomingDeadlines,
  formatDeadlineDate,
  deadlineWhatsAppLink,
  type TaxDeadline,
} from "@/lib/taxDeadlines";
import { trackWhatsAppClick } from "@/lib/gaEvents";

/** "12 din baaki" / "Aaj" / "Beet gaya" — computed in the browser. */
export function DaysLeftBadge({ date }: { date: string }) {
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => setDays(daysUntil(date)), [date]);
  if (days === null) return null;

  if (days < 0) {
    return (
      <span className="inline-block rounded-full bg-gray-100 text-gray-600 px-3 py-1 text-xs font-semibold">
        Beet gaya
      </span>
    );
  }
  const urgent = days <= 7;
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
        urgent ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"
      }`}
    >
      {days === 0 ? "Aaj last date" : `${days} din baaki`}
    </span>
  );
}

export function DeadlineWhatsAppButton({ deadline }: { deadline: TaxDeadline }) {
  return (
    <a
      href={deadlineWhatsAppLink(deadline)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(`deadline_${deadline.id}`)}
      className="inline-flex items-center justify-center rounded-lg bg-[#147438] hover:bg-[#0f5429] text-white text-sm font-bold px-4 py-2 transition"
    >
      WhatsApp par help lein
    </a>
  );
}

/** Big "next deadline" card at the top of /tax-deadlines. */
export function NextDeadlineCard() {
  const [next, setNext] = useState<TaxDeadline | null>(null);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const upcoming = upcomingDeadlines();
    if (upcoming.length > 0) {
      setNext(upcoming[0]);
      setDays(daysUntil(upcoming[0].date));
    }
  }, []);

  if (!next) return null;

  return (
    <div className="bg-[#002b5c] text-white rounded-2xl p-6 md:p-8 shadow-lg">
      <p className="text-[#f0b84b] font-bold uppercase tracking-wider text-sm">Agli deadline</p>
      <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug">{next.title}</h2>
          <p className="mt-2 text-blue-100">
            {formatDeadlineDate(next.date)} · {next.who}
          </p>
        </div>
        <div className="text-left md:text-right shrink-0">
          <p className="text-5xl font-extrabold text-[#f0b84b] leading-none">
            {days === 0 ? "Aaj" : days}
          </p>
          <p className="mt-1 text-blue-100 text-sm">{days === 0 ? "last date hai" : "din baaki"}</p>
        </div>
      </div>
      <div className="mt-6">
        <DeadlineWhatsAppButton deadline={next} />
      </div>
    </div>
  );
}
