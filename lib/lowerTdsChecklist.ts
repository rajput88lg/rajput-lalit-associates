/**
 * lowerTdsChecklist.ts
 * --------------------
 * Static reference data + small pure helpers for the Lower/Nil TDS
 * Certificate (Form 128, earlier Form 13) document checklist tool.
 *
 * This is deliberately NOT a calculator — Form 128 approval depends on an
 * Assessing Officer's judgment on the applicant's estimated tax liability,
 * which this site cannot compute reliably. What we CAN do reliably is tell
 * an NRI seller exactly which documents to have ready before they apply,
 * so the process doesn't stall waiting on paperwork.
 *
 * Facts verified 13 Sept 2026 (see claude/implementation-15 doc for sources):
 * - Old Form 13 (Section 197) -> Form 128 (Section 395(1)) w.e.f. 1 Apr 2026
 * - Applicant: the NRI seller (not the buyer)
 * - Filed electronically via TRACES + Income Tax e-filing login
 * - Typical processing: 4-8 weeks from complete submission (varies by AO)
 * - Certificate validity: date of issue to 31 March of that financial year
 * - Certificate is buyer-specific — a new buyer needs a fresh application
 * - PAN is mandatory for the applicant; a non-PAN NRI must get a PAN first
 */

export interface ChecklistItem {
  id: string;
  label: string;
  note?: string;
}

export interface ChecklistCategory {
  id: string;
  title: string;
  items: ChecklistItem[];
}

export const CHECKLIST: ChecklistCategory[] = [
  {
    id: "identity",
    title: "Identity & NRI Status",
    items: [
      {
        id: "pan",
        label: "PAN card",
        note: "Mandatory — Form 128 cannot be filed without a PAN. Apply for one first if you don't have it.",
      },
      {
        id: "passport-visa",
        label: "Passport copy with visa/immigration stamps",
        note: "Used as proof of NRI status and time spent outside India.",
      },
      {
        id: "oci-pio",
        label: "OCI / PIO card (if applicable)",
      },
      {
        id: "portal-login",
        label: "Income Tax e-filing portal login + TRACES registration",
        note: "Form 128 is filed online — set this up before you need it, it can take a day or two the first time.",
      },
    ],
  },
  {
    id: "property",
    title: "Property Being Sold",
    items: [
      {
        id: "draft-agreement",
        label: "Draft Agreement to Sell / MOU with the buyer",
        note: "Must show the agreed sale consideration and property details — apply only once a buyer is finalised.",
      },
      {
        id: "purchase-deed",
        label: "Original purchase deed / builder agreement / allotment letter",
        note: "Proves your cost of acquisition and holding period (long-term vs short-term).",
      },
      {
        id: "circle-rate",
        label: "Circle rate / stamp duty valuation evidence",
      },
      {
        id: "improvement-bills",
        label: "Cost of improvement bills, if any renovation was done",
      },
    ],
  },
  {
    id: "computation",
    title: "Capital Gains & Tax History",
    items: [
      {
        id: "cg-computation",
        label: "Capital gains computation (sale price, cost, expenses)",
        note: "Your CA prepares this — it is the core of what the Assessing Officer reviews.",
      },
      {
        id: "transfer-expenses",
        label: "Proof of transfer expenses (brokerage, legal fees)",
      },
      {
        id: "past-itr",
        label: "Last 3 years' ITR copies (if you have filed in India)",
      },
      {
        id: "26as-ais",
        label: "Form 26AS / AIS statements",
      },
      {
        id: "exemption-proof",
        label: "Evidence for exemption claims, if any",
        note: "E.g. a new property booking (Section 54) or capital gains bonds — only if you plan to claim reinvestment exemption.",
      },
    ],
  },
  {
    id: "buyer",
    title: "Buyer's Details",
    items: [
      {
        id: "buyer-pan",
        label: "Buyer's PAN",
      },
      {
        id: "buyer-tan",
        label: "Buyer's TAN (or confirmation they will apply for one)",
        note: "The buyer needs a TAN to deduct TDS on a payment to an NRI seller — check this early, it surprises a lot of buyers.",
      },
      {
        id: "buyer-address",
        label: "Buyer's address proof",
      },
    ],
  },
  {
    id: "financial",
    title: "Bank & Repatriation",
    items: [
      {
        id: "nro-nre",
        label: "NRO/NRE bank account details",
        note: "Where sale proceeds and any refund will be credited.",
      },
      {
        id: "poa",
        label: "Power of Attorney document, if someone is signing on your behalf",
      },
      {
        id: "poa-id",
        label: "POA holder's PAN and Aadhaar, if applicable",
      },
    ],
  },
];

export const TOTAL_ITEM_COUNT = CHECKLIST.reduce(
  (sum, cat) => sum + cat.items.length,
  0
);

export function completionPercent(checkedIds: Set<string>): number {
  if (TOTAL_ITEM_COUNT === 0) return 0;
  let checked = 0;
  for (const cat of CHECKLIST) {
    for (const item of cat.items) {
      if (checkedIds.has(item.id)) checked += 1;
    }
  }
  return Math.round((checked / TOTAL_ITEM_COUNT) * 100);
}

export interface ProcessStep {
  step: number;
  title: string;
  detail: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Finalise the buyer and draft agreement",
    detail:
      "Apply only once you have a buyer and an agreed sale price — the application needs these details. This should happen well before the sale deed is registered.",
  },
  {
    step: 2,
    title: "Prepare the capital gains computation",
    detail:
      "Cost of acquisition, cost of improvement, transfer expenses and any exemption you plan to claim — this determines the lower rate you are asking for.",
  },
  {
    step: 3,
    title: "File Form 128 on TRACES",
    detail:
      "Submit the application online with all supporting documents, and e-verify using DSC, EVC or Aadhaar OTP.",
  },
  {
    step: 4,
    title: "Respond to the Assessing Officer's queries",
    detail:
      "The AO may ask for clarification or additional documents — timely replies keep the application from stalling.",
  },
  {
    step: 5,
    title: "Receive the certificate and share it with the buyer",
    detail:
      "Once approved, download the certificate and give it to the buyer before they make payment — it fixes the rate at which they deduct TDS.",
  },
];
