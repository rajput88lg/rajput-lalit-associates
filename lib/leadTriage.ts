/**
 * Very lightweight lead-urgency triage.
 *
 * Not "AI classification" — just a keyword check against terms that
 * usually mean a client is dealing with a live GST/Income Tax
 * department notice, penalty, or deadline, versus a general enquiry.
 * The point is purely to help Lalit's team scan a busy inbox and
 * call back the "possible notice" leads first — it never blocks or
 * changes what gets sent, it only adds a visible tag to the email.
 */

const URGENT_KEYWORDS = [
  "notice",
  "नोटिस",
  "penalty",
  "जुर्माना",
  "scrutiny",
  "assessment order",
  "demand notice",
  "show cause",
  "scn",
  "seized",
  "seize",
  "raid",
  "survey",
  "summons",
  "प्रॉपर्टी अटैच",
  "attachment",
  "freeze",
  "freezed",
  "frozen",
  "urgent",
  "जल्दी",
  "deadline aa gayi",
  "last date",
  "gstr-3a",
  "section 148",
  "section 144",
];

export function classifyLeadUrgency(text: string): {
  urgent: boolean;
  matchedTerm?: string;
} {
  const lower = text.toLowerCase();
  const match = URGENT_KEYWORDS.find((kw) => lower.includes(kw.toLowerCase()));
  return match ? { urgent: true, matchedTerm: match } : { urgent: false };
}

/** Prefixes an email message/subject-line context with a visible urgency tag when relevant. */
export function tagUrgency(text: string): string {
  const { urgent, matchedTerm } = classifyLeadUrgency(text);
  if (!urgent) return text;
  return `⚠️ POSSIBLE NOTICE / URGENT (matched: "${matchedTerm}") — please prioritize\n\n${text}`;
}
