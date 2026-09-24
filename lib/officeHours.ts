/**
 * Office hours — single source for the website (Contact, Map, Footer, schema).
 * Set 24 Sept 2026 (Lalit: "jo tumhe thik lge"). Google Business Profile
 * must show the same hours (NAP / hours consistency for local SEO).
 */
export const OFFICE_DAYS_LABEL = "Monday – Saturday";
export const OFFICE_DAYS_SHORT = "Mon – Sat";
export const OFFICE_TIME_LABEL = "10:00 AM – 7:00 PM";
export const OFFICE_TIME_SHORT = "10 AM – 7 PM";
export const OFFICE_CLOSED_LABEL = "Sunday: Closed";
export const WHATSAPP_HOURS_NOTE = "WhatsApp: message anytime, we reply in office hours";

export const OPENING_HOURS_SCHEMA = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
];
