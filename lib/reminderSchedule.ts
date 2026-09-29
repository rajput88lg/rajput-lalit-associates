/**
 * Compliance Reminder Service — which reminders go out on a given day.
 *
 * Dated deadlines come from lib/taxDeadlines.ts (same list as the
 * /tax-deadlines page), so updating a date there updates the reminders too.
 * Recurring monthly dates (TDS deposit, GSTR-1, GSTR-3B) are generated here.
 *
 * A subscriber gets an email REMIND_DAYS_BEFORE days before each due date,
 * only for the categories they chose.
 */

import { TAX_DEADLINES, daysUntil, todayInIndia, type TaxDeadline } from "./taxDeadlines";

export type ReminderCategory = TaxDeadline["category"];

export const REMINDER_CATEGORIES: { key: ReminderCategory; label: string; hint: string }[] = [
  { key: "GST", label: "GST", hint: "GSTR-1, GSTR-3B, annual return, ITC last date" },
  { key: "TDS", label: "TDS", hint: "Monthly TDS deposit, quarterly TDS returns" },
  { key: "Income Tax", label: "Income Tax", hint: "Advance tax, ITR, tax audit, revised/belated ITR" },
  { key: "ROC", label: "ROC (Company / LLP)", hint: "AOC-4, MGT-7, LLP Form 8" },
];

export const REMIND_DAYS_BEFORE = [7, 2];

/** Subscription length. */
export const SUBSCRIPTION_DAYS = 365;
/** Renewal email goes this many days before expiry. */
export const RENEWAL_NOTICE_DAYS = 14;

export type ReminderItem = {
  id: string;
  date: string;
  title: string;
  who: string;
  ifMissed?: string;
  link?: string;
  category: ReminderCategory;
};

export function parseCategories(v: unknown): ReminderCategory[] {
  const keys = REMINDER_CATEGORIES.map((c) => c.key);
  const list = typeof v === "string" ? v.split("|") : Array.isArray(v) ? v : [];
  const picked = list.filter((c): c is ReminderCategory => keys.includes(c as ReminderCategory));
  return picked.length ? Array.from(new Set(picked)) : keys;
}

function iso(y: number, m: number, d: number): string {
  return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** Monthly GST/TDS dates for the given month (m = 1..12). */
function monthlyItems(y: number, m: number): ReminderItem[] {
  const prev = MONTHS[(m + 10) % 12];
  const items: ReminderItem[] = [
    {
      id: `gstr1-${y}-${m}`,
      date: iso(y, m, 11),
      title: `GSTR-1 for ${prev} (monthly filers)`,
      who: "GST-registered businesses filing GSTR-1 every month",
      ifMissed: "Late fee per day, and your buyers can't see the invoices for their ITC",
      link: "/gst-return-filing",
      category: "GST",
    },
    {
      id: `gstr3b-${y}-${m}`,
      date: iso(y, m, 20),
      title: `GSTR-3B & GST payment for ${prev} (monthly filers)`,
      who: "GST-registered businesses filing GSTR-3B every month",
      ifMissed: "Late fee plus 18% interest on the tax paid late",
      link: "/gst-return-filing",
      category: "GST",
    },
  ];
  // TDS deducted in March is due by 30 April; every other month by the 7th.
  items.push({
    id: `tds-deposit-${y}-${m}`,
    date: m === 4 ? iso(y, 4, 30) : iso(y, m, 7),
    title: `TDS / TCS deposit for ${prev}`,
    who: "Anyone who deducted TDS or collected TCS last month",
    ifMissed: "Interest at 1.5% per month on the late deposit",
    link: "/tds-return-filing",
    category: "TDS",
  });
  return items;
}

/** Every deadline in the next ~2 months (dated list + generated monthly ones). */
export function allUpcomingItems(now: Date = new Date()): ReminderItem[] {
  const [y, m] = todayInIndia(now).split("-").map(Number);
  const next = m === 12 ? [y + 1, 1] : [y, m + 1];
  const dated: ReminderItem[] = TAX_DEADLINES.map((d) => ({
    id: d.id,
    date: d.date,
    title: d.title,
    who: d.who,
    ifMissed: d.ifMissed,
    link: d.link?.href,
    category: d.category,
  }));
  return [...dated, ...monthlyItems(y, m), ...monthlyItems(next[0], next[1])]
    .filter((i) => daysUntil(i.date, now) >= 0)
    .sort((a, b) => a.date.localeCompare(b.date));
}

/** Items whose reminder should go out today. */
export function remindersDueToday(now: Date = new Date()): (ReminderItem & { daysLeft: number })[] {
  return allUpcomingItems(now)
    .map((i) => ({ ...i, daysLeft: daysUntil(i.date, now) }))
    .filter((i) => REMIND_DAYS_BEFORE.includes(i.daysLeft));
}
