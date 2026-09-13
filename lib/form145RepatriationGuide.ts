/**
 * form145RepatriationGuide.ts
 * ----------------------------
 * Pure decision logic for the Form 145 / Form 146 (earlier Form 15CA /
 * Form 15CB) repatriation guide tool.
 *
 * Facts verified 13 Sept 2026 (see claude/implementation-17 doc for sources,
 * cross-checked across cleartax.in, sbnri.com, uja.in, bvaca.com, ebizfiling.com):
 * - Form 15CA -> Form 145 (remitter's self-declaration)
 * - Form 15CB -> Form 146 (Chartered Accountant's certificate)
 * - Rule 37BB -> Rule 220 of the Income-tax Rules, 2026
 * - Effective for remittances on/after 1 April 2026
 * - Four-part structure of Form 145 is UNCHANGED from the old Form 15CA:
 *     Part A — remittance is taxable, aggregate <= Rs 5 lakh in the FY
 *     Part B — remittance is taxable, > Rs 5 lakh, but a Lower/Nil TDS
 *              Certificate (Form 128, Section 395) has already been obtained
 *              from the Assessing Officer -> no CA certificate needed
 *     Part C — remittance is taxable, > Rs 5 lakh, no AO certificate
 *              obtained -> Form 146 (CA certificate) is mandatory
 *     Part D — remittance is not chargeable to tax in India at all
 * - A separate "specified list" (Rule 220, ~33 categories) is exempted from
 *   Form 145 entirely (imports, travel, education/medical abroad, family
 *   maintenance remittances by NRs, etc.) — these don't even need Part D.
 * - The Rs 5 lakh threshold is on AGGREGATE remittances in the financial
 *   year, not per transaction.
 *
 * This tool intentionally keeps categories broad and conservative — it is
 * a starting-point guide, not a determination of taxability. "Not sure"
 * always routes to professional advice rather than guessing.
 */

export type RemittanceCategory =
  | "property_sale"
  | "rental_income"
  | "nro_deposit_interest"
  | "salary_professional_taxed"
  | "inheritance_gift"
  | "exempt_list"
  | "other_unsure";

export interface RepatriationInput {
  category: RemittanceCategory;
  aggregateAmount: number; // total remittances in this FY, in INR
  hasLowerTdsCertificate: boolean; // Form 128 / Section 395 certificate already obtained
}

export type Form145Part = "A" | "B" | "C" | "D" | "EXEMPT" | "UNSURE";

export interface RepatriationResult {
  part: Form145Part;
  needsCaCertificate: boolean;
  headline: string;
  explanation: string[];
}

const THRESHOLD = 500000;

const CATEGORY_TAXABLE: Record<
  Exclude<RemittanceCategory, "exempt_list" | "other_unsure">,
  boolean
> = {
  property_sale: true,
  rental_income: true,
  nro_deposit_interest: true,
  salary_professional_taxed: true,
  inheritance_gift: false,
};

export function determineForm145Part(
  input: RepatriationInput
): RepatriationResult {
  const { category, aggregateAmount, hasLowerTdsCertificate } = input;

  if (category === "exempt_list") {
    return {
      part: "EXEMPT",
      needsCaCertificate: false,
      headline: "No Form 145 needed at all",
      explanation: [
        "This category of remittance is on the Rule 220 specified list, which is exempted from Form 145 entirely — not even Part D.",
        "Your bank may still ask for a simple declaration for their own records, but no income-tax form is legally required.",
      ],
    };
  }

  if (category === "other_unsure") {
    return {
      part: "UNSURE",
      needsCaCertificate: false,
      headline: "This needs a professional to confirm",
      explanation: [
        "Whether a remittance is taxable in India depends on the specific facts — the source of funds, any tax already paid, and applicable DTAA provisions.",
        "Guessing wrong here can delay your remittance at the bank or, worse, mean tax was under-reported. Get this checked before you approach your bank.",
      ],
    };
  }

  const taxable = CATEGORY_TAXABLE[category];

  if (!taxable) {
    return {
      part: "D",
      needsCaCertificate: false,
      headline: "Part D — not chargeable to tax",
      explanation: [
        "Receipts like inheritance are generally capital receipts and not chargeable to tax in India in the hands of the recipient.",
        "You (or your bank) file only Part D of Form 145 — no CA certificate (Form 146) is required.",
        "Note: this covers the inherited amount itself. Any future income the inherited asset generates (rent, interest, capital gains on eventual sale) is separately taxable.",
      ],
    };
  }

  if (aggregateAmount <= THRESHOLD) {
    return {
      part: "A",
      needsCaCertificate: false,
      headline: "Part A — taxable, but within the ₹5 lakh limit",
      explanation: [
        `Your remittance is taxable, but your total remittances for this financial year are ₹${aggregateAmount.toLocaleString(
          "en-IN"
        )}, at or under the ₹5 lakh threshold.`,
        "Only Part A of Form 145 is required — a self-declaration with no CA certificate needed.",
        "Remember this ₹5 lakh limit is on your AGGREGATE remittances for the whole financial year, not per transaction — track your running total carefully.",
      ],
    };
  }

  if (hasLowerTdsCertificate) {
    return {
      part: "B",
      needsCaCertificate: false,
      headline: "Part B — you already have an AO certificate",
      explanation: [
        "Your remittance is taxable and above ₹5 lakh, but because you already hold a Lower/Nil TDS Certificate (Form 128, Section 395) from the Assessing Officer, you can file Part B instead of Part C.",
        "Form 146 (the CA certificate) is not required in this case — the Assessing Officer has already determined the correct tax treatment.",
      ],
    };
  }

  return {
    part: "C",
    needsCaCertificate: true,
    headline: "Part C — Form 146 (CA certificate) is required",
    explanation: [
      "Your remittance is taxable and above ₹5 lakh, and you do not have a Lower/Nil TDS Certificate from the Assessing Officer.",
      "You need both Part C of Form 145 and Form 146 — a Chartered Accountant's certificate confirming the nature of the remittance, its taxability, applicable DTAA relief, and the correct TDS rate.",
      "If the amount involved is large, it may be worth applying for a Lower/Nil TDS Certificate (Form 128) first — that moves you to the simpler Part B and skips the CA certificate requirement.",
    ],
  };
}

export interface CategoryOption {
  value: RemittanceCategory;
  label: string;
  hint: string;
}

export const CATEGORY_OPTIONS: CategoryOption[] = [
  {
    value: "property_sale",
    label: "Sale proceeds of property in India",
    hint: "Almost always taxable — capital gains apply.",
  },
  {
    value: "rental_income",
    label: "Rental income collected in India",
    hint: "Taxable as income from house property.",
  },
  {
    value: "nro_deposit_interest",
    label: "NRO account / FD balance and interest",
    hint: "The interest portion is taxable.",
  },
  {
    value: "salary_professional_taxed",
    label: "Salary or professional income already earned in India",
    hint: "Taxable, though tax may already be substantially paid via TDS.",
  },
  {
    value: "inheritance_gift",
    label: "Inheritance or gift received",
    hint: "Generally not taxable as a capital receipt.",
  },
  {
    value: "exempt_list",
    label: "Import payment, travel, education/medical abroad, or family maintenance",
    hint: "Covered by the Rule 220 specified list — usually exempt.",
  },
  {
    value: "other_unsure",
    label: "Something else / I'm not sure",
    hint: "We'll flag this for a professional check rather than guess.",
  },
];

export const FORM146_DOCUMENTS = [
  "Sale agreement / invoice / contract underlying the remittance",
  "Computation of income and tax on the remittance (capital gains working, if a property sale)",
  "PAN of the remitter (you) and, where relevant, the payee",
  "Tax Residency Certificate (TRC) and Form 10F, if claiming a DTAA benefit",
  "Bank account details (NRO/NRE) the funds are being remitted from",
  "Lower/Nil TDS Certificate (Form 128), if you have already obtained one",
  "Proof of tax already paid or TDS already deducted, if applicable",
];
