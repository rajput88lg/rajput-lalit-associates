# Implementation 40 — Website Strengthening, Batch 2 (security, anti-spam, intake triage, audits)

**Banaya:** 20 September 2026
**Continues:** Batch 1 (`implementation-39-website-strengthening-batch-1.md`) — same 105-idea research doc.

This batch is smaller and more audit-heavy than Batch 1: a few real code additions, plus several items from the 105-list that were checked and confirmed already fine (documented below so they don't get re-checked later), and one real finding that needs your decision before I touch it.

`npm run build`, `npm run validate:schema`, and `npm audit` all pass cleanly after these changes.

---

## What was done

### 1. Security
1. **Content-Security-Policy — Report-Only** added in `next.config.ts`. *(Idea #58)* This does **not block anything** — it only tells the browser to log CSP violations to the console, so we can see what a full CSP would break before ever enforcing one. Enforcing a real CSP on a site that loads Google Analytics, EmailJS, the Elfsight Google Reviews widget and (eventually) Razorpay checkout is genuinely risky to get right blind — this report-only version is the safe first step, and the policy already allowlists all four of those.
2. **Honeypot spam-trap** added to `Contact.tsx` and `AppointmentForm.tsx`. *(Idea #63, lightweight version)* A hidden field (invisible to real visitors, `aria-hidden`, not keyboard-focusable) that most basic spam bots fill in automatically. If it has a value, the form silently pretends to succeed without actually sending an email. This costs nothing and needs no third-party service (no Cloudflare Turnstile/hCaptcha account needed) — it stops simple bots, not sophisticated ones, but that's most of what actually hits small-business contact forms.

### 2. Lead intake triage
3. **`lib/leadTriage.ts`** (new) — a keyword-based (not AI/ML — just an honest keyword match) check for notice/penalty/deadline-related terms (English + Hindi: "notice", "नोटिस", "penalty", "जुर्माना", "scrutiny", "seized", "raid", "urgent", etc.). *(Idea #96, lightweight/honest version)*
4. Wired into all three lead channels: the AI chat widget's lead-capture email, `Contact.tsx`'s message field, and `AppointmentForm.tsx` (also auto-tags any booking for the "GST Notice Reply" service). When a match is found, the email your team receives gets a visible `⚠️ POSSIBLE NOTICE / URGENT` tag at the top — purely additive, nothing is blocked or hidden, so your team can scan a busy inbox and call back urgent-looking leads first.

### 3. Audits performed — confirmed clean, no code change needed
5. **Redirect chains** *(Idea #45)* — checked every redirect in `next.config.ts`: none of the 11 redirect destinations are themselves a redirect source. No chains.
6. **Mobile/desktop content parity** *(Idea #47)* — the site is Next.js SSR/SSG by default (confirmed no page relies on client-side-only rendering for its core content), so Google's mobile-first indexing sees the same content mobile and desktop. No hidden-only-on-mobile content found in a spot-check of the main components.
7. **Image alt text** *(Idea #65)* — checked every `next/image` usage across `app/` and `components/`: every one has a real, descriptive `alt` — none missing, none empty.
8. **Heading hierarchy** *(Idea #69)* — spot-checked the homepage's Hero/About/Services components: clean H1 → H2 → H3, no skipped levels.

### 4. A real finding — needs your decision before I change anything
9. **Text contrast (Idea #66)** — I ran the actual WCAG contrast-ratio math on the site's color palette. Most combinations pass comfortably (navy-on-white: 14:1, white-on-navy: 14:1, gold-on-navy: 5.7:1). **But the gold accent color (`#d99a2b`) used directly on a *white* background — the small uppercase "eyebrow" labels like "Get in Touch" / "Contact Information" seen across many sections — only measures 2.44:1, which fails WCAG AA's 4.5:1 requirement for normal text** (these labels are ~14px bold, which is just under the "large text" threshold that would only need 3:1, and even that isn't met at 2.44:1).

   This is a real, previously-unflagged issue — on a bright screen or for anyone with slightly reduced contrast sensitivity, those labels are genuinely hard to read.

   **I have NOT changed this** because it's a brand-color decision, not a bug fix — the current gold works fine on navy backgrounds (where it's mostly used for buttons/backgrounds), it's specifically the gold-*text*-on-*white* usage that fails. A ready fix: a darker gold variant like `#9a6c1c` measures 4.63:1 (passes) and is still recognizably "gold," just deeper — I can add it as a second CSS variable (e.g. `--gold-on-white`) used only where gold text sits directly on a white/light background, leaving every gold button and gold-on-navy usage untouched. **Batao agar ye fix apply karna hai** — 10-minute change, but it does slightly change how those labels look, so main aapki confirmation ke bina brand color nahi badal raha.

---

## Verification performed
- `npm run build` — clean, 0 errors.
- `npm run validate:schema` — 226 JSON-LD blocks, all valid (unchanged from Batch 1 — no schema touched this round).
- `npm audit` — 0 vulnerabilities (unchanged).
- `npm run lint` — no new errors/warnings introduced by any file in this batch.

## Files changed
- `next.config.ts` — CSP-Report-Only header added.
- `lib/leadTriage.ts` — new.
- `components/AIChatWidget.tsx`, `components/Contact.tsx`, `components/AppointmentForm.tsx` — honeypot + urgency tagging wired in.

## Next steps
Confirm on the gold-contrast fix (#9 above), and let me know which cluster to tackle next — client portal (#21-30, biggest effort), content/GEO batch (#31-41, #72-79), or the rest of Trust/CRO (#1-8, #11-12, #20).
