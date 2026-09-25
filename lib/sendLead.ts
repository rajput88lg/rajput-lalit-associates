/**
 * Sends a website lead (contact form, appointment, calculator, AI chat) to
 * our own /api/lead route, which emails it from and to
 * info@rajputlalitassociates.in (Hostinger mailbox).
 *
 * Replaces EmailJS (Batch 11, Sept 2026): EmailJS sent through a separate
 * Gmail account and no enquiry was ever seen in the inbox.
 * Throws on failure so each form can show its WhatsApp fallback.
 */
export type LeadParams = Record<string, string | number | null | undefined>;

export async function sendLead(source: string, fields: LeadParams): Promise<void> {
  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source,
      page: typeof window !== "undefined" ? window.location.pathname : "",
      fields,
    }),
  });
  if (!res.ok) {
    throw new Error(`Lead email failed (${res.status})`);
  }
}

/** Collects all named fields of a <form> into plain params. */
export function formToParams(form: HTMLFormElement): LeadParams {
  const params: LeadParams = {};
  new FormData(form).forEach((value, key) => {
    if (typeof value === "string") params[key] = value;
  });
  return params;
}
