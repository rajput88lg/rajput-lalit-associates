export interface Blog {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  // Optional: jab purana blog refresh ho, yahan refresh ki date daalein.
  // Page par "Updated" dikhta hai aur schema ka dateModified isse banta hai.
  updated?: string;
  image: string;
  readTime: string;

  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export const blogs: Blog[] = [
  {
    slug: "gst-registration-online-india",

    title: "GST Registration Online in India",

    description:
      "Complete guide to GST Registration in India including eligibility, documents, fees and online process.",

    category: "GST",

    author: "Rajput Lalit & Associates",

    date: "11 July 2026",

    image: "/blogs/gst-registration-online-india.png",

    readTime: "8 min read",

    seoTitle:
      "GST Registration Online in India | Complete Guide 2026",

    seoDescription:
      "Learn GST Registration Online in India including eligibility, required documents, registration process, fees, benefits and FAQs.",

    keywords: [
      "GST Registration",
      "GST Registration Online",
      "GST Registration India",
      "GST Guide",
      "Online GST",
    ],
  },

  {
    slug: "gst-registration-fees-india",

    title: "GST Registration Fees in India",

    description:
      "Know the Government Fee, Professional Charges, Hidden Costs and Complete GST Registration Fee Structure in India.",

    category: "GST",

    author: "Rajput Lalit & Associates",

    date: "14 July 2026",

    updated: "22 September 2026",

    image: "/blogs/gst-registration-fees-india.png",

    readTime: "7 min read",

    seoTitle:
      "GST Registration Fees 2026: ₹0 Govt Fee + Real Costs",

    seoDescription:
      "GST registration government fee is ₹0. See the full 2026 cost breakdown — consultant fees by business type, DSC cost for companies/LLPs, hidden costs and the penalty for not registering.",

    keywords: [
      "GST Registration Fees",
      "GST Registration Cost",
      "GST Registration Charges",
      "GST Registration Fees by Government",
      "GST Registration Fees Kitni Hai",
      "GST Professional Charges",
    ],
  },

  {
    slug: "gst-registration-documents-india",

    title: "GST Registration Documents Required in India",

    description:
      "Complete list of documents required for GST Registration in India for Proprietorship, Partnership, LLP and Private Limited Company.",

    category: "GST",

    author: "Rajput Lalit & Associates",

    date: "14 July 2026",

    updated: "22 September 2026",

    image: "/blogs/gst-registration-documents-india.png",

    readTime: "8 min read",

    seoTitle:
      "Documents for GST Registration 2026 + Address Proof Rules",

    seoDescription:
      "GST registration documents checklist for proprietorship, partnership, LLP and company — plus exactly which address proof works for own, rented or family premises, and why applications get stuck.",

    keywords: [
      "GST Registration Documents",
      "GST Documents",
      "GST Registration Checklist",
      "Documents Required for GST",
      "Address Proof for GST Registration",
      "GST Registration Address Proof",
    ],
  },
    {
    slug: "gst-return-filing-india",

    title: "GST Return Filing in India (2026)",

    description:
      "Complete guide to GST Return Filing in India including GSTR-1, GSTR-3B, due dates, late fees and online filing process.",

    category: "GST",

    author: "Rajput Lalit & Associates",

    date: "19 July 2026",

    image: "/blogs/gst-return-filing-india.png",

    readTime: "10 min read",

    seoTitle:
      "GST Return Filing in India (2026) | Complete Guide",

    seoDescription:
      "Complete GST Return Filing Guide covering GSTR-1, GSTR-3B, annual returns, due dates, penalties and FAQs.",

    keywords: [
      "GST Return Filing",
      "GSTR-1",
      "GSTR-3B",
      "GST Return",
      "GST Filing",
      "GST India",
      
    ],
  },
  {
  slug: "income-tax-return-filing-online-india",

  title: "Income Tax Return Filing Online in India",

  description:
    "Complete guide to Income Tax Return (ITR) Filing Online in India including eligibility, documents, ITR forms, tax regimes, refunds, due dates and FAQs.",

  category: "Income Tax",

  author: "Rajput Lalit & Associates",

  date: "23 July 2026",

  image: "/blogs/income-tax-return-filing-online-india.png",

  readTime: "15 min read",

  seoTitle:
    "Income Tax Return Filing Online in India (2026) | Complete ITR Guide",

  seoDescription:
    "Complete guide to Income Tax Return Filing Online in India including eligibility, documents, ITR forms, filing process, refunds, due dates and FAQs.",

  keywords: [
    "Income Tax Return",
    "ITR Filing",
    "Income Tax Return Filing",
    "ITR Online",
    "Income Tax India",
    "Income Tax Return Online",
    "ITR Guide",
  ],
},
{
  slug: "msme-registration-online-india",
  title: "MSME Registration Online in India",
  description:
    "Complete guide to MSME (Udyam) Registration Online in India including eligibility, documents, benefits, registration process and FAQs.",
  category: "Business Registration",
  author: "Rajput Lalit & Associates",
  date: "July 2026",
  image: "/blogs/msme-registration.png",
  readTime: "12 min read",

  seoTitle:
    "MSME Registration Online in India (2026): Complete Guide | Rajput Lalit & Associates",

  seoDescription:
    "Learn everything about MSME Registration (Udyam Registration) Online in India including eligibility, documents, benefits, registration process and FAQs.",

  keywords: [
    "MSME Registration",
    "MSME Registration Online",
    "Udyam Registration",
    "Udyam Certificate",
    "MSME Certificate",
    "Small Business Registration",
    "MSME Registration India",
    "Udyam Registration Online"
  ]
},
      {
    slug: "gst-registration-cancellation-india",

    title: "GST Registration Cancellation in India (2026)",

    description:
      "Complete guide to GST Registration Cancellation including eligibility, documents, cancellation process, revocation and FAQs.",

    category: "GST",

    author: "Rajput Lalit & Associates",

    date: "19 July 2026",

    image: "/blogs/gst-registration-cancellation-india.png",

    readTime: "10 min read",

    seoTitle:
      "GST Registration Cancellation in India (2026) | Complete Guide",

    seoDescription:
      "Learn GST Registration Cancellation in India including eligibility, required documents, online cancellation process, revocation and FAQs.",
      

    keywords: [
      "GST Registration Cancellation",
      "Cancel GST Registration",
      "GST Cancellation",
      "GST Registration Surrender",
      "GST Revocation",
      "GST India",
    ],
  },
  {
  slug: "gst-notice-reply-online-india",
  title: "GST Notice Reply Online in India",
  description:
    "Complete guide to GST notice reply online in India. Learn common GST notice types, documents required, reply process, mistakes to avoid and FAQs.",
  category: "GST Services",
  author: "Rajput Lalit & Associates",
  date: "August 2026",
  image: "/blogs/gst-notice-reply.png",
  readTime: "10 min read",

  seoTitle:
    "GST Notice Reply Online in India (2026): Types, Process & Documents",

  seoDescription:
    "Received a GST notice? Learn how to verify, understand and reply to GST notices online in India. Guide covering notice types, documents, process and FAQs.",

  keywords: [
    "GST Notice Reply",
    "GST Notice Reply Online",
    "GST Notice Reply India",
    "GST Show Cause Notice Reply",
    "GST Notice Consultant",
    "GST Notice Documents",
    "GST Notice Response",
    "GST Notice Help",
  ],
},
{
  slug: "private-limited-company-registration-india",
  title: "Private Limited Company Registration in India — Process, Cost & Timeline (2026)",
  description:
    "Complete guide to Private Limited Company Registration in India — eligibility, documents, actual government costs, realistic 10-20 day timeline, the Form INC-20A deadline that catches new founders out, benefits, compliance and FAQs.",
  category: "Business Registration",
  author: "Rajput Lalit & Associates",
  date: "13 September 2026",
  image: "/blogs/private-limited-company-registration.png",
  readTime: "12 min read",

  seoTitle:
    "Private Limited Company Registration in India (2026): Cost, Process & Timeline",

  seoDescription:
    "How to register a Private Limited Company in India: eligibility, documents, SPICe+ process, real government costs (₹3,000-6,000), 10-20 day timeline, Form INC-20A deadline, benefits and compliance.",

  keywords: [
    "Private Limited Company Registration",
    "Private Limited Company Registration India",
    "Company Registration Online",
    "Pvt Ltd Company Registration",
    "Private Limited Company Documents",
    "SPICe Plus Registration",
    "Startup Company Registration",
    "Company Incorporation India",
    "Company Registration Cost India",
    "Company Registration Timeline",
    "Form INC-20A",
  ],
},
{
  slug: "how-to-earn-money-in-india",

  title: "How to Earn Money in India: 10 Practical Ways to Increase Your Income",

  description:
    "Learn how to earn money in India with practical methods including freelancing, YouTube, blogging, online services, AI skills, affiliate marketing and small business ideas.",

  category: "Business & Finance",

  author: "Rajput Lalit & Associates",

  date: "8 September 2026",

  image: "/blogs/how-to-earn-money-in-india.png",

  readTime: "9 min read",

  seoTitle:
    "How to Earn Money in India (2026): 10 Practical Ways to Increase Your Income",

  seoDescription:
    "Discover 10 practical ways to earn money in India including freelancing, YouTube, blogging, online services, affiliate marketing, digital products and AI skills.",

  keywords: [
    "How to Earn Money in India",
    "Earn Money Online India",
    "Freelancing India",
    "Online Income Ideas",
    "Ways to Earn Money",
    "Side Income India",
  ],
},
{
  slug: "section-87a-rebate-12-lakh-income-tax",

  title: "₹12 Lakh Tak Zero Tax Kaise? Section 87A Rebate Explained (FY 2026-27)",

  description:
    "Section 87A rebate ke through ₹12 lakh tak income par zero tax kaise possible hai, marginal relief kaise kaam karta hai aur kis income par ye rebate nahi milta - complete guide.",

  category: "Income Tax",

  author: "Rajput Lalit & Associates",

  date: "9 September 2026",

  image: "/blogs/section-87a-rebate-12-lakh-income-tax.png",

  readTime: "8 min read",

  seoTitle:
    "Section 87A Rebate 2026: ₹12 Lakh Tak Zero Income Tax Kaise?",

  seoDescription:
    "Complete guide to Section 87A rebate for FY 2026-27 - how ₹12 lakh income becomes tax-free under new regime, marginal relief calculation and eligibility rules.",

  keywords: [
    "Section 87A Rebate",
    "12 Lakh Income Tax",
    "Zero Tax Income",
    "New Tax Regime Rebate",
    "Income Tax Slab 2026-27",
    "Marginal Relief Income Tax",
  ],
},
  {
    slug: "gst-registration-ambala",

    title: "GST Registration in Ambala: Process, Documents & Fees (2026)",

    description:
      "Step-by-step guide to GST registration in Ambala City and Ambala Cantt — turnover limits in Haryana, documents, biometric verification at GST Suvidha Kendra, timelines and fees.",

    category: "GST",

    author: "Rajput Lalit & Associates",

    date: "11 September 2026",

    image: "/blogs/gst-registration-ambala.png",

    readTime: "9 min read",

    seoTitle:
      "GST Registration in Ambala 2026 — GSK, Documents, Fees",

    seoDescription:
      "Get GST registration in Ambala City & Ambala Cantt. Haryana turnover limits, documents required, biometric verification at GSK, timelines, fees and common mistakes explained.",

    keywords: [
      "GST Registration in Ambala",
      "GST Registration Ambala",
      "GST Consultant in Ambala",
      "GST Registration Ambala Cantt",
      "GST Registration Haryana",
      "GST Registration Documents",
      "GST Suvidha Kendra Ambala",
    ],
  },

  {
    slug: "tds-return-filing-due-dates-late-fee",

    title: "TDS Return Filing Due Dates & Late Fee (FY 2026-27)",

    description:
      "Complete guide to TDS return filing due dates for FY 2026-27, applicable forms (24Q, 26Q, 27Q, 27EQ), late fee under Section 427, penalty under Section 461, and interest on late deduction or deposit.",

    category: "TDS",

    author: "Rajput Lalit & Associates",

    date: "12 September 2026",

    image: "/blogs/tds-return-filing-due-dates-late-fee.png",

    readTime: "8 min read",

    seoTitle:
      "TDS Return Due Dates FY 2026-27 + Late Fee (Sec 427)",

    seoDescription:
      "TDS return due dates FY 2026-27: 31 Jul, 31 Oct, 31 Jan, 31 May. TDS deposit by the 7th (March: 30 April). Late fee ₹200/day under Sec 427 (old 234E), penalty and interest explained.",

    keywords: [
      "TDS Return Filing",
      "TDS Return Due Date FY 2026-27",
      "TDS Late Fee",
      "TDS Return Filing Due Date",
      "Form 24Q 26Q 27Q",
      "TDS Penalty Section 271H",
      "TDS Interest Late Deposit",
    ],
  },

  {
    slug: "belated-revised-itr-ay-2026-27",

    title: "Belated & Revised ITR for AY 2026-27: What to Do If You Missed the Due Date",

    description:
      "Missed the 31 July 2026 ITR due date? Complete guide to filing a belated return (Section 139(4)), revised return (Section 139(5)), late fee under Section 234F, interest under Section 234A, and the updated return (ITR-U) option.",

    category: "Income Tax",

    author: "Rajput Lalit & Associates",

    date: "12 September 2026",

    image: "/blogs/belated-revised-itr-ay-2026-27.png",

    readTime: "9 min read",

    seoTitle:
      "Belated ITR Rules AY 2026-27: Last Date 31 Dec, Late Fee",

    seoDescription:
      "Belated return deadline 31 Dec 2026, revised return deadline 31 Mar 2027, Section 234F late fee, Section 234A interest, and Updated Return (ITR-U) rules for AY 2026-27 explained simply.",

    keywords: [
      "Belated ITR AY 2026-27",
      "Revised ITR",
      "ITR Due Date Missed",
      "Section 234F Late Fee",
      "Belated Return Section 139(4)",
      "Revised Return Section 139(5)",
      "ITR-U Updated Return",
    ],
  },

  {
    slug: "new-income-tax-act-2025-vs-1961",

    title: "New Income-tax Act, 2025 vs Old Act, 1961: What Changes from FY 2026-27",

    description:
      "Complete guide to the Income-tax Act, 2025 vs the Income-tax Act, 1961 — effective date, the new 'Tax Year' concept, section renumbering (80C, 87A, 115BAC, 192, 195, 197 and more), and what does not change.",

    category: "Income Tax",

    author: "Rajput Lalit & Associates",

    date: "13 September 2026",

    image: "/blogs/new-income-tax-act-2025-vs-1961.png",

    readTime: "10 min read",

    seoTitle:
      "Income-tax Act 2025 vs 1961 — What Changes from FY 2026-27 | Full Guide",

    seoDescription:
      "Income-tax Act 2025 explained: effective 1 April 2026, 'Tax Year' replaces Previous/Assessment Year, section renumbering (80C→123, 87A→156, 115BAC→202, 192→392, 195→393(2)), and what stays the same.",

    keywords: [
      "Income Tax Act 2025",
      "Income Tax Act 2025 vs 1961",
      "New Income Tax Act",
      "Tax Year Income Tax Act 2025",
      "Income Tax Act 2025 section mapping",
      "Income Tax Act 2025 effective date",
    ],
  },

  {
    slug: "gstr-9-annual-return-filing-guide-fy-2025-26",

    title: "GSTR-9 Annual Return Filing Guide FY 2025-26 — Due Date, Applicability & Late Fee",

    description:
      "Complete guide to GSTR-9 annual return for FY 2025-26 — due date 31 December 2026, ₹2 crore turnover threshold for GSTR-9, ₹5 crore threshold for GSTR-9C, self-certification rule, late fee, exemptions, and the 3-year time-bar deadline that also falls this year.",

    category: "GST",

    author: "Rajput Lalit & Associates",

    date: "13 September 2026",

    image: "/blogs/gstr-9-annual-return-filing-guide-fy-2025-26.png",

    readTime: "8 min read",

    seoTitle:
      "GSTR-9 Annual Return FY 2025-26 — Due Date, Applicability & Late Fee",

    seoDescription:
      "GSTR-9 due date 31 Dec 2026 for FY 2025-26. Mandatory above ₹2 crore turnover, GSTR-9C above ₹5 crore (self-certified, no CA certificate needed), late fee ₹200/day, and who's exempt.",

    keywords: [
      "GSTR-9 due date FY 2025-26",
      "GST annual return filing",
      "GSTR-9 applicability turnover limit",
      "GSTR-9C due date",
      "GSTR-9 late fee",
      "GST annual return due date 2026",
    ],
  },

  {
    slug: "gst-composition-scheme-eligibility-rates",

    title: "GST Composition Scheme — Eligibility, Tax Rates & Limitations (2026 Guide)",

    description:
      "Complete guide to the GST composition scheme — ₹1.5 crore turnover limit (₹75 lakh special category, ₹50 lakh for services), tax rates of 1%/5%/6%, who cannot opt in, no input tax credit, and CMP-08/GSTR-4 filing deadlines.",

    category: "GST",

    author: "Rajput Lalit & Associates",

    date: "14 September 2026",

    image: "/blogs/gst-composition-scheme-eligibility-rates.png",

    readTime: "7 min read",

    seoTitle:
      "GST Composition Scheme 2026 — Eligibility, Tax Rates & Limitations",

    seoDescription:
      "GST composition scheme explained: ₹1.5 crore turnover limit, 1%/5%/6% tax rates, who cannot opt in, no ITC, and CMP-08/GSTR-4 due dates — full 2026 guide.",

    keywords: [
      "GST composition scheme eligibility",
      "GST composition scheme turnover limit",
      "GST composition scheme tax rate",
      "CMP-08 due date",
      "GSTR-4 due date",
      "composition scheme vs regular GST",
    ],
  },

  {
    slug: "input-tax-credit-gst-rules-reversal",

    title: "Input Tax Credit (ITC) Under GST — Rules, Blocked Credits & 180-Day Reversal",

    description:
      "Complete guide to claiming Input Tax Credit under GST — the 5 conditions under Section 16, blocked credits under Section 17(5) (cars, food, construction), the 180-day supplier payment rule, and the 30 November deadline to claim ITC.",

    category: "GST",

    author: "Rajput Lalit & Associates",

    date: "14 September 2026",

    image: "/blogs/input-tax-credit-gst-rules-reversal.png",

    readTime: "8 min read",

    seoTitle:
      "Input Tax Credit (ITC) Under GST 2026 — Rules & Blocked Credits",

    seoDescription:
      "ITC under GST explained: 5 conditions to claim it, Section 17(5) blocked credits (cars, food, construction), the 180-day payment rule, and the 30 November claim deadline.",

    keywords: [
      "input tax credit GST rules",
      "ITC blocked credits Section 17(5)",
      "ITC 180 days payment rule",
      "ITC claim deadline GST",
      "how to claim GST input tax credit",
      "ineligible ITC GST",
    ],
  },

  {
    slug: "gst-eway-bill-rules-validity-limit",

    title: "GST E-Way Bill — Rules, Threshold Limit, Validity & Penalty",

    description:
      "Complete guide to GST e-way bill — when it's required, the ₹50,000 national threshold and state-wise limits, validity period based on distance, Part A/Part B, exemptions, and penalty for non-compliance.",

    category: "GST",

    author: "Rajput Lalit & Associates",

    date: "14 September 2026",

    image: "/blogs/gst-eway-bill-rules-validity-limit.png",

    readTime: "7 min read",

    seoTitle:
      "GST E-Way Bill Rules 2026 — Threshold, Validity & Limit",

    seoDescription:
      "GST e-way bill explained: ₹50,000 threshold, state-wise limits, validity by distance (200 km/day), Part A & Part B, exemptions, and penalty for non-compliance.",

    keywords: [
      "GST e-way bill rules",
      "e-way bill threshold limit",
      "e-way bill validity period",
      "e-way bill state wise limit",
      "e-way bill Part A Part B",
      "e-way bill penalty",
    ],
  },

  {
    slug: "gst-freelancers-export-of-services-lut",

    title: "GST for Freelancers — Export of Services & LUT Explained",

    description:
      "GST guide for freelancers and consultants with foreign clients — whether GST registration is mandatory, what counts as export of services, zero-rated supply, and how to file a LUT to invoice without paying IGST.",

    category: "GST",

    author: "Rajput Lalit & Associates",

    date: "14 September 2026",

    image: "/blogs/gst-freelancers-export-of-services-lut.png",

    readTime: "7 min read",

    seoTitle:
      "GST for Freelancers 2026 — Export of Services & LUT Guide",

    seoDescription:
      "Does a freelancer with foreign clients need GST registration? Export of services rules, zero-rated supply conditions, and how LUT (RFD-11) avoids paying IGST upfront.",

    keywords: [
      "GST for freelancers export of services",
      "GST registration freelancer foreign clients",
      "LUT GST export services",
      "export of services GST rules",
      "zero rated supply GST freelancer",
      "GST RFD-11 LUT",
    ],
  },

  {
    slug: "gst-tcs-ecommerce-sellers-rules",

    title: "GST for E-commerce Sellers — TCS Under Section 52 Explained",

    description:
      "GST rules for sellers on Amazon, Flipkart and other online marketplaces — compulsory registration regardless of turnover, how TCS (Tax Collected at Source) works, the current 0.5% rate, and how to claim TCS credit in GSTR-3B.",

    category: "GST",

    author: "Rajput Lalit & Associates",

    date: "14 September 2026",

    image: "/blogs/gst-tcs-ecommerce-sellers-rules.png",

    readTime: "6 min read",

    seoTitle:
      "GST for E-commerce Sellers 2026 — TCS Rules & Rate Explained",

    seoDescription:
      "GST for e-commerce sellers explained: compulsory registration (no turnover limit), TCS rate 0.5% under Section 52, how to claim TCS credit, and composition scheme restrictions.",

    keywords: [
      "GST for e-commerce sellers",
      "TCS under GST section 52",
      "GST registration e-commerce mandatory",
      "TCS rate GST 2026",
      "GSTR-8 e-commerce",
      "claim TCS credit GST",
    ],
  },

  {
    slug: "gst-audit-assessment-types-notice",

    title: "GST Audit & Assessment — Types, Notices & What They Mean",

    description:
      "Complete guide to GST scrutiny, audit and assessment — Section 61 scrutiny of returns (ASMT-10), best judgment assessment for non-filers (Section 62), assessment of unregistered persons (Section 63), summary assessment (Section 64), and departmental/special audit (Sections 65 & 66).",

    category: "GST",

    author: "Rajput Lalit & Associates",

    date: "14 September 2026",

    image: "/blogs/gst-audit-assessment-types-notice.png",

    readTime: "8 min read",

    seoTitle:
      "GST Audit & Assessment 2026 — Types & Notices Explained",

    seoDescription:
      "GST scrutiny, audit and assessment explained: ASMT-10 scrutiny notice, best judgment assessment for non-filers, unregistered person assessment, and Section 65/66 audit process.",

    keywords: [
      "GST audit types",
      "GST assessment section 62 63 64",
      "GST scrutiny of returns section 61",
      "ASMT-10 notice GST",
      "GST departmental audit section 65",
      "GST special audit section 66",
    ],
  },

  {
    slug: "advance-tax-payment-due-dates-interest",

    title: "Advance Tax — Who Pays, Due Dates & Interest for Default",

    description:
      "Complete guide to advance tax in India — who must pay (₹10,000 threshold), the 4 quarterly due dates for FY 2026-27, the single-instalment option for 44AD/44ADA taxpayers, and interest under Sections 424 & 425 (old 234B/234C) for missed or short payments.",

    category: "Income Tax",

    author: "Rajput Lalit & Associates",

    date: "14 September 2026",

    image: "/blogs/advance-tax-payment-due-dates-interest.png",

    readTime: "7 min read",

    seoTitle:
      "Advance Tax FY 2026-27 — Due Dates & Interest Explained",

    seoDescription:
      "Advance tax explained: who must pay (₹10,000 threshold), quarterly due dates for FY 2026-27, presumptive taxation single instalment, and interest under Sections 424 & 425.",

    keywords: [
      "advance tax due dates FY 2026-27",
      "who needs to pay advance tax",
      "advance tax interest 234B 234C",
      "advance tax presumptive taxation 44AD",
      "advance tax calculator India",
      "advance tax installment percentage",
    ],
  },

  {
    slug: "form-26as-ais-tis-reconciliation-itr",

    title: "Form 26AS, AIS & TIS — How to Reconcile Before Filing ITR",

    description:
      "How to reconcile Form 26AS, AIS (Annual Information Statement) and TIS (Taxpayer Information Summary) before filing your ITR — what each document shows, how to fix incorrect AIS entries, and why mismatches trigger income tax notices.",

    category: "Income Tax",

    author: "Rajput Lalit & Associates",

    date: "14 September 2026",

    image: "/blogs/form-26as-ais-tis-reconciliation-itr.png",

    readTime: "6 min read",

    seoTitle:
      "Form 26AS vs AIS vs TIS 2026 — Reconciliation Guide Before ITR",

    seoDescription:
      "Form 26AS, AIS and TIS explained: what each shows, how to submit AIS feedback for wrong entries, and a practical checklist to reconcile before filing your ITR.",

    keywords: [
      "Form 26AS AIS TIS difference",
      "AIS reconciliation before ITR filing",
      "how to correct AIS entry income tax",
      "Form 26AS vs AIS",
      "AIS feedback income tax portal",
      "income tax mismatch notice AIS",
    ],
  },

  {
    slug: "capital-gains-tax-shares-mutual-funds-stcg-ltcg",

    title: "Capital Gains Tax on Shares & Mutual Funds — STCG vs LTCG",

    description:
      "Capital gains tax on shares and equity mutual funds explained — the 20% STCG rate on gains held under 12 months, the 12.5% LTCG rate with a ₹1.25 lakh annual exemption, how debt funds are taxed differently, and how to set off capital losses.",

    category: "Income Tax",

    author: "Rajput Lalit & Associates",

    date: "15 September 2026",

    image: "/blogs/capital-gains-tax-shares-mutual-funds-stcg-ltcg.png",

    readTime: "7 min read",

    seoTitle:
      "Capital Gains Tax on Shares & Mutual Funds 2026 — STCG/LTCG Rates",

    seoDescription:
      "STCG and LTCG on shares/mutual funds explained: 20% short-term rate, 12.5% long-term rate with ₹1.25 lakh exemption, debt fund taxation, and capital loss set-off rules.",

    keywords: [
      "capital gains tax shares mutual funds",
      "STCG LTCG rate 2026",
      "long term capital gains exemption limit",
      "short term capital gains equity tax rate",
      "debt mutual fund taxation",
      "capital loss set off carry forward",
    ],
  },

  {
    slug: "huf-hindu-undivided-family-tax-benefits",

    title: "HUF (Hindu Undivided Family) — Tax Benefits & How to Form One",

    description:
      "Complete guide to forming a Hindu Undivided Family (HUF) for tax planning — Karta and coparceners explained, the 3 steps to form an HUF, legitimate sources of HUF income, the clubbing-of-income trap, and HUF tax slabs vs individual slabs.",

    category: "Income Tax",

    author: "Rajput Lalit & Associates",

    date: "15 September 2026",

    image: "/blogs/huf-hindu-undivided-family-tax-benefits.png",

    readTime: "7 min read",

    seoTitle:
      "HUF Tax Benefits 2026 — Formation, Karta & Clubbing Rules",

    seoDescription:
      "HUF tax benefits explained: how to form an HUF (deed, PAN, bank account), legitimate income sources, the clubbing-of-income trap, and HUF tax slabs vs individuals.",

    keywords: [
      "HUF tax benefits",
      "how to form HUF",
      "HUF Karta coparcener",
      "HUF income tax slab",
      "HUF clubbing of income",
      "Hindu Undivided Family tax saving",
    ],
  },

  {
    slug: "tds-on-rent-section-194ib",

    title: "TDS on Rent — Section 194-IB for Tenants Paying Above ₹50,000/Month",

    description:
      "TDS on rent for individual and HUF tenants explained — who must deduct, the 2% rate, once-a-year deduction (not monthly), how to file Form 26QC (Form 141) without a TAN, and issuing Form 16C to your landlord.",

    category: "TDS",

    author: "Rajput Lalit & Associates",

    date: "15 September 2026",

    image: "/blogs/tds-on-rent-section-194ib.png",

    readTime: "6 min read",

    seoTitle:
      "TDS on Rent 2026 — Section 194-IB Guide for Tenants",

    seoDescription:
      "TDS on rent explained: who must deduct (individuals/HUF paying above ₹50,000/month), the 2% rate, Form 26QC (Form 141) filing, and Form 16C for landlords.",

    keywords: [
      "TDS on rent section 194IB",
      "TDS on rent above 50000",
      "Form 26QC filing",
      "TDS on rent individual tenant",
      "Form 16C rent TDS",
      "TDS rent rate 2026",
    ],
  },

  {
    slug: "tds-on-professional-fees-section-194j",

    title: "TDS on Professional Fees — Section 194J Rates & Threshold",

    description:
      "TDS on professional and technical fees explained — 10% rate for professional services, 2% for technical services, the ₹50,000 threshold (raised from ₹30,000 in 2025), who must deduct, and the 30% expense disallowance for non-deduction.",

    category: "TDS",

    author: "Rajput Lalit & Associates",

    date: "15 September 2026",

    image: "/blogs/tds-on-professional-fees-section-194j.png",

    readTime: "6 min read",

    seoTitle:
      "TDS on Professional Fees 2026 — Section 194J Rate & Limit",

    seoDescription:
      "Section 194J TDS explained: 10% on professional fees, 2% on technical fees, ₹50,000 threshold, who must deduct, and consequences of non-deduction.",

    keywords: [
      "TDS on professional fees section 194J",
      "194J TDS rate threshold",
      "TDS professional fees limit 50000",
      "technical services TDS rate",
      "section 393 income tax act",
      "TDS non deduction disallowance",
    ],
  },

  {
    slug: "tds-on-salary-form-16-explained",

    title: "TDS on Salary — Form 16 Explained",

    description:
      "How TDS on salary is calculated by employers — the average rate method, new vs old tax regime declaration (Form 122), Form 16 (now Form 130), and what to check when you change jobs mid-year.",

    category: "TDS",

    author: "Rajput Lalit & Associates",

    date: "15 September 2026",

    image: "/blogs/tds-on-salary-form-16-explained.png",

    readTime: "6 min read",

    seoTitle:
      "TDS on Salary 2026 — How It's Calculated & Form 16 Guide",

    seoDescription:
      "TDS on salary explained: how employers calculate monthly deduction, new regime default, Form 122 declaration, Form 16 (now Form 130), and mid-year job change tips.",

    keywords: [
      "TDS on salary explained",
      "Form 16 income tax",
      "how TDS calculated on salary",
      "new tax regime default TDS",
      "Form 130 income tax",
      "TDS salary section 392",
    ],
  },
  {
    slug: "tax-for-freelancers-consultants-section-44ada-presumptive-taxation",
    title: "Tax for Freelancers & Consultants — Section 44ADA Presumptive Taxation",
    description: "Section 44ADA explained for freelancers, consultants and professionals — who qualifies, the 50% presumptive income rule, the ₹50 lakh/₹75 lakh receipts limit, and when books of account and audit become mandatory.",
    category: "Income Tax",
    author: "Rajput Lalit & Associates",
    date: "15 September 2026",
    image: "/blogs/tax-for-freelancers-consultants-section-44ada-presumptive-taxation.png",
    readTime: "6 min read",
    seoTitle: "Section 44ADA for Freelancers 2026 — Presumptive Tax Guide",
    seoDescription: "Section 44ADA presumptive taxation for freelancers and professionals: 50% income rule, ₹50 lakh/₹75 lakh limit, advance tax in one instalment, and when audit applies.",
    keywords: ["Section 44ADA presumptive taxation", "freelancer tax India", "44ADA 50 percent rule", "presumptive tax professionals", "44ADA limit 75 lakh", "freelancer income tax filing"],
  },
  {
    slug: "income-tax-notice-types-143-1-148-139-9-explained",
    title: "Income Tax Notice Types — Section 143(1), 148 & 139(9) Explained",
    description: "A plain-language guide to the most common income tax notices — 143(1) intimation, 139(9) defective return, and 148 reassessment — what triggers each, response deadlines, and the shortened Section 148 time limits after the 2024 amendment.",
    category: "Income Tax",
    author: "Rajput Lalit & Associates",
    date: "15 September 2026",
    image: "/blogs/income-tax-notice-types-143-1-148-139-9-explained.png",
    readTime: "7 min read",
    seoTitle: "Income Tax Notice Types 2026 — 143(1), 148, 139(9) Guide",
    seoDescription: "Income tax notice types explained: Section 143(1) intimation, 139(9) defective return, and 148 reassessment — triggers, deadlines, and how to respond.",
    keywords: ["income tax notice types", "section 143(1) intimation", "section 139(9) defective return", "section 148 income tax notice", "income tax notice reply", "148 time limit 2024"],
  },
  {
    slug: "llp-registration-process-cost-vs-pvt-ltd",
    title: "LLP Registration — Process, Cost & Comparison with Pvt Ltd",
    description: "Complete guide to LLP registration in India — step-by-step process, government fee slabs, realistic total cost, annual compliance (Form 11, Form 8), and an honest comparison with Private Limited Company on tax, audit and fundraising.",
    category: "Business Registration",
    author: "Rajput Lalit & Associates",
    date: "15 September 2026",
    image: "/blogs/llp-registration-process-cost-vs-pvt-ltd.png",
    readTime: "7 min read",
    seoTitle: "LLP Registration 2026 — Process, Cost & LLP vs Pvt Ltd",
    seoDescription: "LLP registration process and cost in India: fee slabs, DSC, RUN-LLP, FiLLiP, Form 11/Form 8 due dates, and a detailed LLP vs Private Limited Company comparison.",
    keywords: ["LLP registration process", "LLP registration cost India", "LLP vs Pvt Ltd", "LLP annual compliance Form 11 Form 8", "LLP registration fees 2026", "limited liability partnership India"],
  },
  {
    slug: "partnership-firm-registration-and-partnership-deed",
    title: "Partnership Firm Registration & Partnership Deed — Complete Guide",
    description: "Partnership firm registration in India explained — why registration matters even though it's optional, essential partnership deed clauses, partner remuneration and interest tax limits (Section 40(b)), and how the firm and partners are taxed.",
    category: "Business Registration",
    author: "Rajput Lalit & Associates",
    date: "15 September 2026",
    image: "/blogs/partnership-firm-registration-and-partnership-deed.png",
    readTime: "6 min read",
    seoTitle: "Partnership Firm Registration & Deed Guide 2026",
    seoDescription: "Partnership firm registration and partnership deed guide: essential clauses, Section 69 non-registration risks, partner remuneration limits, and firm taxation.",
    keywords: ["partnership firm registration India", "partnership deed format", "partnership firm registration process", "partner remuneration limit section 40b", "unregistered partnership firm risk", "partnership firm taxation"],
  },
  {
    slug: "trademark-registration-for-small-business",
    title: "Trademark Registration for Small Business — Process, Cost & Timeline",
    description: "Trademark registration in India explained for small businesses — government fees per class, the 45-class NICE classification system, realistic timeline, TM vs registered symbol, and why unregistered brands have much weaker protection.",
    category: "Business Registration",
    author: "Rajput Lalit & Associates",
    date: "15 September 2026",
    image: "/blogs/trademark-registration-for-small-business.png",
    readTime: "6 min read",
    seoTitle: "Trademark Registration India 2026 — Process, Cost & Timeline",
    seoDescription: "Trademark registration guide for small businesses: fees per class (₹4,500/₹9,000), 45 NICE classes, 6-18 month timeline, and TM vs registered symbol rules.",
    keywords: ["trademark registration India", "trademark registration cost", "trademark classes India", "TM vs registered symbol", "trademark registration process", "trademark registration for small business"],
  },
  {
    slug: "why-small-businesses-need-monthly-bookkeeping",
    title: "Why Small Businesses Need Monthly Bookkeeping",
    description: "Why monthly bookkeeping matters more than annual accounting for small Indian businesses — GST/ITC reconciliation, Section 44AA legal requirements, cash flow visibility, loan readiness, and the real cost of the 'shoebox of receipts' problem.",
    category: "Accounting",
    author: "Rajput Lalit & Associates",
    date: "15 September 2026",
    image: "/blogs/why-small-businesses-need-monthly-bookkeeping.png",
    readTime: "6 min read",
    seoTitle: "Why Monthly Bookkeeping Matters for Small Businesses 2026",
    seoDescription: "Why small businesses need monthly bookkeeping: GST/ITC reconciliation, Section 44AA thresholds, cash flow visibility, loan readiness, and avoiding tax notices.",
    keywords: ["monthly bookkeeping small business", "why bookkeeping important", "Section 44AA books of accounts", "GST reconciliation bookkeeping", "small business accounting India", "bookkeeping for GST compliance"],
  },
  {
    slug: "nre-nro-fcnr-bank-accounts-explained",
    title: "NRE vs NRO vs FCNR Accounts Explained",
    description: "NRE, NRO and FCNR accounts explained for NRIs — which one holds which type of income, tax treatment of interest, repatriation limits, and exchange rate risk, with a simple rule of thumb for choosing the right account.",
    category: "NRI Taxation",
    author: "Rajput Lalit & Associates",
    date: "15 September 2026",
    image: "/blogs/nre-nro-fcnr-bank-accounts-explained.png",
    readTime: "7 min read",
    seoTitle: "NRE vs NRO vs FCNR Account 2026 — Complete NRI Guide",
    seoDescription: "NRE vs NRO vs FCNR accounts compared: fund sources, tax-free vs taxable interest, repatriation limits (USD 1 million/year for NRO), and exchange rate risk.",
    keywords: ["NRE vs NRO vs FCNR", "NRI bank account types", "NRE account tax free interest", "NRO repatriation limit", "FCNR account India", "NRI banking guide 2026"],
  },

  {
    slug: "gstr-9c-reconciliation-statement-guide-fy-2025-26",
    title: "GSTR-9C Reconciliation Statement Guide — FY 2025-26",
    description: "Complete GSTR-9C guide for FY 2025-26: turnover threshold, due date, self-certification (no CA/CMA signature needed), and a practical reconciliation checklist.",
    category: "GST",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/gstr-9c-reconciliation-statement-guide-fy-2025-26.png",
    readTime: "7 min read",
    seoTitle: "GSTR-9C Reconciliation Statement Guide FY 2025-26 | Due Date & Checklist",
    seoDescription: "GSTR-9C FY 2025-26: applicability above ₹5 crore turnover, due date 31 December 2026, self-certified filing (no CA/CMA signature), and a full reconciliation checklist.",
    keywords: ["GSTR-9C FY 2025-26", "GSTR-9C reconciliation statement", "GSTR-9C due date", "GSTR-9C applicability", "GSTR-9C self certified", "GST annual reconciliation"],
  },
  {
    slug: "gst-rates-2026-slab-list-item-wise",
    title: "GST Rates in India 2026 — Updated Slab List (GST 2.0)",
    description: "Complete, item-wise GST rate slabs after the GST 2.0 reform — 0%, 5%, 18% and 40% — with examples, effective date, and what small businesses need to update immediately.",
    category: "GST",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/gst-rates-2026-slab-list-item-wise.png",
    readTime: "7 min read",
    seoTitle: "GST Rates in India 2026 | GST 2.0 Slab List (0%, 5%, 18%, 40%)",
    seoDescription: "Updated GST rate slabs for 2026 after GST 2.0 — 0%, 5%, 18% and 40% — with item-wise examples and what changed from the earlier 12%/28% slabs.",
    keywords: ["GST rates 2026", "GST 2.0", "GST slab list", "new GST rates", "GST rate changes 2026", "GST 40 percent items"],
  },
  {
    slug: "gst-refund-process-exporters-inverted-duty-structure",
    title: "GST Refund Process for Exporters & Inverted Duty Structure",
    description: "How GST refunds work for exporters (with or without LUT) and for inverted duty structure — process, time limit, provisional refund, and the RFD-01 filing steps.",
    category: "GST",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/gst-refund-process-exporters-inverted-duty-structure.png",
    readTime: "7 min read",
    seoTitle: "GST Refund for Exporters & Inverted Duty Structure | Process & Time Limit",
    seoDescription: "GST refund process for exporters (LUT route or IGST-paid route) and inverted duty structure refunds — RFD-01 filing, 2-year time limit, and 90% provisional refund rule.",
    keywords: ["GST refund exporters", "inverted duty structure GST refund", "GST refund process", "RFD-01", "GST refund time limit", "LUT GST export"],
  },
  {
    slug: "gst-input-service-distributor-isd-rules",
    title: "GST Input Service Distributor (ISD) Rules — Now Mandatory",
    description: "ISD registration under GST became mandatory from 1 April 2025 for businesses with multiple GSTINs under one PAN. Who needs it, how it differs from cross-charge, and the GSTR-6 filing requirement.",
    category: "GST",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/gst-input-service-distributor-isd-rules.png",
    readTime: "6 min read",
    seoTitle: "GST Input Service Distributor (ISD) Rules 2026 | Mandatory Registration Guide",
    seoDescription: "ISD registration under GST is now mandatory (from 1 April 2025) for businesses with multiple GSTINs under one PAN distributing common input service credit. Full guide with GSTR-6 filing.",
    keywords: ["Input Service Distributor GST", "ISD registration mandatory", "ISD vs cross charge", "GSTR-6 filing", "ISD GST rules 2026", "multi GSTIN ITC distribution"],
  },
  {
    slug: "gst-reverse-charge-mechanism-rcm-explained",
    title: "Reverse Charge Mechanism (RCM) Under GST Explained",
    description: "What Reverse Charge Mechanism (RCM) under GST means, which goods/services it applies to, who pays the tax, and how ITC works on RCM payments.",
    category: "GST",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/gst-reverse-charge-mechanism-rcm-explained.png",
    readTime: "7 min read",
    seoTitle: "Reverse Charge Mechanism (RCM) Under GST 2026 | Full Guide",
    seoDescription: "Reverse Charge Mechanism (RCM) under GST — full list of covered services (GTA, legal, director's fees, imports), who is liable to pay, self-invoicing, and ITC availability.",
    keywords: ["reverse charge mechanism GST", "RCM under GST", "RCM list of services", "GST self invoice", "RCM ITC availability", "GTA GST reverse charge"],
  },
  {
    slug: "gst-on-real-estate-under-construction-property",
    title: "GST on Real Estate & Under-Construction Property (2026)",
    description: "GST rates on under-construction flats — affordable housing (1%) vs regular housing (5%), no ITC for builders, and why ready-to-move-in property attracts zero GST.",
    category: "GST",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/gst-on-real-estate-under-construction-property.png",
    readTime: "6 min read",
    seoTitle: "GST on Real Estate 2026 | Under-Construction Flat Rates & ITC Rules",
    seoDescription: "GST on property in 2026: 1% on affordable housing, 5% on other under-construction flats (both without ITC), 0% on ready-to-move-in property with occupancy certificate.",
    keywords: ["GST on real estate", "GST on under construction flat", "GST on affordable housing", "GST on flat purchase 2026", "GST ready to move property", "GST builder ITC"],
  },
  {
    slug: "tax-audit-section-44ab-applicability-turnover-limit",
    title: "Tax Audit Under Section 44AB — Turnover Limit & Due Date",
    description: "Section 44AB tax audit applicability for FY 2025-26 — turnover limits for businesses and professionals, the higher ₹10 crore digital-transactions threshold, due dates, and the new fee-based penalty.",
    category: "Income Tax",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/tax-audit-section-44ab-applicability-turnover-limit.png",
    readTime: "7 min read",
    seoTitle: "Tax Audit Section 44AB 2026 | Turnover Limit, Due Date & Penalty",
    seoDescription: "Section 44AB tax audit for FY 2025-26: ₹1 crore threshold for businesses (₹10 crore if 95%+ transactions are digital), ₹50 lakh for professionals, due date 30 Sept 2026.",
    keywords: ["Section 44AB tax audit", "tax audit turnover limit", "tax audit due date 2026", "tax audit applicability", "44AB penalty", "tax audit professionals limit"],
  },
  {
    slug: "tds-on-cash-withdrawal-ecommerce-section-194n-194o",
    title: "TDS on Cash Withdrawal (194N) & E-commerce Payments (194O)",
    description: "Section 194N TDS on large cash withdrawals and Section 194O TDS on e-commerce operator payments — rates, thresholds, exemptions, and the new Income-tax Act 2025 section numbers.",
    category: "TDS",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/tds-on-cash-withdrawal-ecommerce-section-194n-194o.png",
    readTime: "7 min read",
    seoTitle: "TDS Section 194N & 194O Guide 2026 | Cash Withdrawal & E-commerce",
    seoDescription: "Section 194N (cash withdrawal TDS above ₹1 crore) and Section 194O (0.1% TDS on e-commerce operator payments) explained, with thresholds, exemptions and new Act section numbers.",
    keywords: ["Section 194N TDS", "Section 194O TDS", "TDS cash withdrawal", "TDS ecommerce operator", "194O rate", "TDS on ecommerce sellers"],
  },
  {
    slug: "new-itr-forms-ay-2026-27-changes-explained",
    title: "New ITR Forms for AY 2026-27 — What Changed",
    description: "Key changes in ITR-1 to ITR-4 for AY 2026-27 — expanded eligibility for up to 2 house properties, removed capital gains fields, new disclosure requirements, and which form fits your situation.",
    category: "Income Tax",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/new-itr-forms-ay-2026-27-changes-explained.png",
    readTime: "7 min read",
    seoTitle: "New ITR Forms AY 2026-27 | Key Changes Explained",
    seoDescription: "ITR forms for AY 2026-27: ITR-1/ITR-4 now allow up to 2 house properties, removed old capital gains rate fields, added unrealised rent and representative assessee fields.",
    keywords: ["new ITR forms AY 2026-27", "ITR form changes 2026", "ITR-1 vs ITR-2 vs ITR-3 vs ITR-4", "which ITR form to file", "ITR form eligibility 2026"],
  },
  {
    slug: "income-tax-slabs-new-vs-old-regime-fy-2026-27",
    title: "Income Tax Slabs FY 2026-27 — New Regime vs Old Regime",
    description: "Complete comparison of income tax slabs for FY 2026-27 — new regime (default) vs old regime, Section 87A rebate limits, and how to decide which regime actually saves you more.",
    category: "Income Tax",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/income-tax-slabs-new-vs-old-regime-fy-2026-27.png",
    readTime: "7 min read",
    seoTitle: "Income Tax Slabs FY 2026-27 | New vs Old Regime Comparison",
    seoDescription: "Income tax slab rates FY 2026-27: new regime (default) 0-30% across 7 slabs with ₹60,000 rebate up to ₹12 lakh income; old regime 0-30% across 4 slabs with ₹12,500 rebate up to ₹5 lakh.",
    keywords: ["income tax slabs FY 2026-27", "new tax regime vs old tax regime", "income tax slab 2026", "87A rebate new regime", "which tax regime is better"],
  },
  {
    slug: "deductions-80c-to-80u-old-regime-guide",
    title: "Income Tax Deductions Guide — Section 80C to 80U (Old Regime)",
    description: "Complete list of income tax deductions from 80C to 80U available under the old tax regime — limits for 80C, 80CCD(1B), 80D, 80E, 80G, 80TTA/80TTB — and why most don't apply under the new regime.",
    category: "Income Tax",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/deductions-80c-to-80u-old-regime-guide.png",
    readTime: "8 min read",
    seoTitle: "Section 80C to 80U Deductions Guide (Old Regime) | Limits & Eligibility",
    seoDescription: "Complete 80C to 80U deduction guide: 80C (₹1.5L), 80CCD(1B) NPS (₹50,000 extra), 80D health insurance, 80E education loan, 80G donations, 80TTA/80TTB savings interest — old regime only.",
    keywords: ["80C to 80U deductions", "section 80C limit", "80D health insurance deduction", "80CCD 1B NPS deduction", "80TTA 80TTB", "income tax deductions old regime"],
  },
  {
    slug: "one-person-company-opc-registration-guide",
    title: "One Person Company (OPC) Registration — Process & Cost",
    description: "OPC registration guide — cost (₹6,000-₹20,000+), process via SPICe+, mandatory nominee requirement, and why the earlier mandatory conversion-to-Pvt-Ltd rule no longer applies.",
    category: "Business Registration",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/one-person-company-opc-registration-guide.png",
    readTime: "7 min read",
    seoTitle: "One Person Company (OPC) Registration 2026 | Process, Cost & Rules",
    seoDescription: "OPC registration in India: cost ₹6,000-₹20,000+, SPICe+ process, mandatory nominee, 120-day residency rule, and why mandatory conversion to Pvt Ltd was removed in 2021.",
    keywords: ["OPC registration", "One Person Company registration cost", "OPC vs Pvt Ltd", "OPC nominee requirement", "OPC registration process 2026"],
  },
  {
    slug: "sole-proprietorship-registration-guide-india",
    title: "Sole Proprietorship Registration Guide — Process & Documents",
    description: "How to register a sole proprietorship in India — there's no single 'proprietorship registration', but GST, Shop & Establishment, and MSME Udyam registration together establish it. Documents, process, and liability risk explained.",
    category: "Business Registration",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/sole-proprietorship-registration-guide-india.png",
    readTime: "6 min read",
    seoTitle: "Sole Proprietorship Registration India 2026 | Process & Documents",
    seoDescription: "Sole proprietorship registration guide: no single registration exists — GST, Shop & Establishment Act, and Udyam registration establish your proprietorship, plus unlimited personal liability explained.",
    keywords: ["sole proprietorship registration", "proprietorship registration India", "proprietorship documents required", "how to register proprietorship", "proprietorship vs company"],
  },
  {
    slug: "roc-annual-compliance-calendar-pvt-ltd-llp",
    title: "ROC Annual Compliance Calendar — Pvt Ltd & LLP",
    description: "The recurring annual ROC compliance calendar for Private Limited companies and LLPs — AOC-4, MGT-7/7A, DIR-3 KYC, ADT-1, Form 11 and Form 8 — with the rule for calculating each due date every year.",
    category: "Business Registration",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/roc-annual-compliance-calendar-pvt-ltd-llp.png",
    readTime: "7 min read",
    seoTitle: "ROC Compliance Calendar for Pvt Ltd & LLP 2026 | Due Dates Explained",
    seoDescription: "Annual ROC filing calendar: AOC-4 (30 days from AGM), MGT-7/7A (60 days from AGM), DIR-3 KYC (30 Sept), Form 11 for LLP (30 May), Form 8 for LLP (30 Oct).",
    keywords: ["ROC compliance calendar", "AOC-4 due date", "MGT-7 due date", "DIR-3 KYC due date", "LLP Form 11 Form 8 due date", "annual ROC filing"],
  },
  {
    slug: "digital-signature-certificate-dsc-guide-business-registration",
    title: "Digital Signature Certificate (DSC) — Complete Guide",
    description: "What a Digital Signature Certificate (DSC) is, when you need one (MCA filings, GST, income tax, trademark, tenders), how to get Class 3 DSC, cost, and validity.",
    category: "Business Registration",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/digital-signature-certificate-dsc-guide-business-registration.png",
    readTime: "6 min read",
    seoTitle: "Digital Signature Certificate (DSC) Guide 2026 | Cost, Process & Uses",
    seoDescription: "DSC guide: Class 3 Digital Signature Certificate for MCA/ROC filings, income tax e-verification, GST, trademark e-filing and e-tenders — cost ₹1,000-₹2,500, 1-2 year validity.",
    keywords: ["digital signature certificate", "DSC for company registration", "Class 3 DSC", "DSC cost India", "DSC for GST filing", "how to get DSC"],
  },
  {
    slug: "accrual-vs-cash-accounting-small-business",
    title: "Accrual vs Cash Accounting — Which Should Your Business Use?",
    description: "Accrual vs cash basis of accounting explained for small businesses in India — how each works, why GST liability follows accrual regardless of your books, and which method suits growing businesses.",
    category: "Accounting",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/accrual-vs-cash-accounting-small-business.png",
    readTime: "6 min read",
    seoTitle: "Accrual vs Cash Accounting for Small Business India | Which to Choose",
    seoDescription: "Accrual vs cash accounting compared: cash basis records money when it moves, accrual records revenue/expense when earned/incurred. Why GST liability follows accrual regardless of your bookkeeping method.",
    keywords: ["accrual vs cash accounting", "cash basis vs accrual basis", "accounting method small business India", "Section 145 income tax act accounting"],
  },
  {
    slug: "financial-statements-checklist-bank-loan-cc-limit",
    title: "Financial Statements Checklist for a Bank Loan / CC Limit",
    description: "What banks actually want to see before sanctioning a business loan or cash credit (CC) limit — financial statements, ITR, GST returns, CMA data, and stock statements, with a practical readiness checklist.",
    category: "Accounting",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/financial-statements-checklist-bank-loan-cc-limit.png",
    readTime: "6 min read",
    seoTitle: "Bank Loan & CC Limit Documents Checklist | Financial Statements Guide",
    seoDescription: "Complete document checklist for a business loan or CC limit sanction — 2-3 years of financials, ITR, GST returns, bank statements, CMA data format, and stock/debtor statements.",
    keywords: ["bank loan documents checklist", "CC limit financial statements", "CMA data format", "documents for business loan India", "stock statement bank loan"],
  },
  {
    slug: "nri-sale-of-inherited-property-tax-tds-guide",
    title: "NRI Selling Inherited Property in India — Tax & TDS Guide",
    description: "Tax rules for an NRI selling inherited property in India — TDS the buyer must deduct, how cost of acquisition is computed for inherited property, exemptions available, and the repatriation process.",
    category: "NRI Taxation",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/nri-sale-of-inherited-property-tax-tds-guide.png",
    readTime: "8 min read",
    seoTitle: "NRI Selling Inherited Property in India 2026 | Tax & TDS Guide",
    seoDescription: "NRI inherited property sale: buyer deducts 12.5% TDS on LTCG (30% on STCG) plus surcharge/cess, cost of acquisition uses original owner's cost, Section 54EC exemption, and repatriation limits.",
    keywords: ["NRI selling inherited property", "NRI TDS on property sale", "capital gains inherited property NRI", "Form 13 lower TDS certificate", "NRI repatriation inherited property"],
  },
  {
    slug: "nri-itr-filing-which-form-dtaa-relief",
    title: "NRI Income Tax Return Filing — Which Form & DTAA Relief",
    description: "Which ITR form an NRI should file, when filing becomes mandatory even with income below the exemption limit, and how to claim DTAA relief using Form 10F and a Tax Residency Certificate.",
    category: "NRI Taxation",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/nri-itr-filing-which-form-dtaa-relief.png",
    readTime: "7 min read",
    seoTitle: "NRI ITR Filing Guide 2026 | Which Form & DTAA Relief",
    seoDescription: "NRI ITR filing: use ITR-2 (no business income) or ITR-3 (business/professional income) — never ITR-1/ITR-4. Mandatory filing triggers, and DTAA relief via Form 10F + Tax Residency Certificate.",
    keywords: ["NRI ITR filing which form", "NRI income tax return", "DTAA relief NRI", "Form 10F tax residency certificate", "NRI mandatory ITR filing conditions"],
  },
  {
    slug: "section-195-tds-on-nri-payments-overview",
    title: "Section 195 — TDS on Payments to NRIs (Overview)",
    description: "Section 195 TDS rates on different types of payments made to NRIs — interest, royalty, technical fees, capital gains, other income — plus the Form 15CA/15CB certification requirement.",
    category: "NRI Taxation",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/section-195-tds-on-nri-payments-overview.png",
    readTime: "7 min read",
    seoTitle: "Section 195 TDS on NRI Payments 2026 | Rates & 15CA/15CB Guide",
    seoDescription: "Section 195 TDS rates on payments to non-residents: 12.5% LTCG, 15% STCG (equity), 20% royalty/FTS, 30% other interest/income — plus when Form 15CB CA certification is required.",
    keywords: ["Section 195 TDS", "TDS on payments to non-residents", "Section 195 rates", "Form 15CA 15CB", "TDS NRI remittance"],
  },

  {
    slug: "msme-45-day-payment-rule-section-43b-h",
    title: "MSME 45-Day Payment Rule (Section 43B(h)): What Buyers and Sellers Must Know",
    description: "MSME suppliers ko time par payment na karne par buyer ka expense deduction disallow ho sakta hai. Section 43B(h) (naye Act mein Section 37(2)(g)) ke 45-din rule, kise apply hota hai, aur kaise bachein.",
    category: "Income Tax",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/msme-45-day-payment-rule-section-43b-h.png",
    readTime: "9 min read",
    seoTitle: "MSME 45-Day Payment Rule (Section 43B(h)) Explained | 2026 Guide",
    seoDescription: "Section 43B(h) ka 45-din payment rule kya hai, kise apply hota hai, Micro/Small vs Medium enterprises, aur naye Income-tax Act 2025 mein Section 37(2)(g) mapping — poori jaankari.",
    keywords: ["Section 43B(h)", "MSME 45 day payment rule", "Section 37(2)(g) Income-tax Act 2025", "MSME payment disallowance", "Udyam registration deduction"],
  },
  {
    slug: "gst-2-0-reforms-2026-sector-impact-guide",
    title: "GST 2.0 Reforms 2026: Insurance, Auto aur Daily-Use Goods Par Asar",
    description: "GST 2.0 ke naye 0/5/18/40% slab structure ne insurance, two-wheelers, cars aur daily-use FMCG items par rates kaise badle — small businesses ke liye sector-wise poora breakdown.",
    category: "GST",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/gst-2-0-reforms-2026-sector-impact-guide.png",
    readTime: "10 min read",
    seoTitle: "GST 2.0 Reforms 2026: Sector-Wise Rate Changes Explained",
    seoDescription: "GST 2.0 ke naye 0/5/18/40% slabs, insurance, two-wheelers, cars aur FMCG par rate cuts, aur 2026 mein tobacco/pan masala cess transition — small business ke liye practical guide.",
    keywords: ["GST 2.0 reforms 2026", "GST new slab rates", "GST rate cut insurance", "GST on two wheelers 2026", "GST compensation cess ending"],
  },
  {
    slug: "e-invoicing-mandatory-2026-turnover-limit-guide",
    title: "E-Invoicing Mandatory 2026: Naya Turnover Limit aur Kaise Generate Karein",
    description: "GST e-invoicing ka current ₹5 crore turnover threshold, kaunsi businesses cover hoti hain, IRN generate karne ka process, aur non-compliance par penalty — poori jaankari.",
    category: "GST",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/e-invoicing-mandatory-2026-turnover-limit-guide.png",
    readTime: "8 min read",
    seoTitle: "GST E-Invoicing 2026: Turnover Limit, Process aur Penalty Guide",
    seoDescription: "GST e-invoicing ka current turnover threshold ₹5 crore, IRN generation process step-by-step, aur e-invoice na banane par kya penalty lagta hai — 2026 ka updated guide.",
    keywords: ["e-invoicing mandatory 2026", "e-invoice turnover limit GST", "IRN generation process", "e-invoice penalty GST", "GST e-invoice rules"],
  },
  {
    slug: "gst-invoice-management-system-ims-guide",
    title: "GST Invoice Management System (IMS): Step-by-Step Portal Guide",
    description: "GST IMS kya hai, ITC claim karne ka workflow kaise badla, aur GSTR-2B ke saath iska connection — recipients ke liye step-by-step practical guide.",
    category: "GST",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/gst-invoice-management-system-ims-guide.png",
    readTime: "8 min read",
    seoTitle: "GST IMS (Invoice Management System) Explained | Step-by-Step Guide",
    seoDescription: "GST Invoice Management System (IMS) kya hai, invoices ko Accept/Reject/Pending kaise karein, aur GSTR-2B/ITC par iska asar — poora practical guide.",
    keywords: ["GST IMS guide", "Invoice Management System GST", "GSTR-2B IMS", "GST ITC accept reject", "GST portal IMS"],
  },
  {
    slug: "new-labour-codes-2026-employer-guide",
    title: "India's New Labour Codes 2026: Small Business Owners Ke Liye Kya Zaroori Hai",
    description: "4 naye Labour Codes ke tahat wages ki 50% rule, gratuity in fixed-term employees, working hours, aur employee-count thresholds — small business employers ke liye practical guide.",
    category: "Payroll & Compliance",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/new-labour-codes-2026-employer-guide.png",
    readTime: "10 min read",
    seoTitle: "New Labour Codes 2026: Employer Compliance Guide for Small Business",
    seoDescription: "India ke 4 Labour Codes (21 Nov 2025 se effective) — 50% wage rule, fixed-term employee gratuity, overtime rules, aur thresholds — small business owners ke liye poora guide.",
    keywords: ["new labour codes 2026", "50% wage rule labour code", "fixed term employee gratuity", "labour code compliance small business", "Code on Wages 2026"],
  },
  {
    slug: "income-tax-return-filing-services-in-ambala",
    title: "Income Tax Return Filing Services in Ambala: Local Process aur Deadlines",
    description: "Ambala City mein ITR filing kaise karayein, local Income Tax jurisdiction, aur FY 2025-26 ke liye important deadlines — Ambala ke individuals aur businesses ke liye practical guide.",
    category: "Income Tax",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/income-tax-return-filing-services-in-ambala.png",
    readTime: "7 min read",
    seoTitle: "Income Tax Return Filing in Ambala | Local Process & Deadlines 2026",
    seoDescription: "Ambala City mein ITR filing service — local Income Tax jurisdiction, ITR due dates FY 2025-26, aur Rajput Lalit & Associates se professional ITR filing kaise karayein.",
    keywords: ["ITR filing Ambala", "income tax consultant Ambala", "income tax return Ambala City", "ITR due date 2026", "tax consultant near me Ambala"],
  },
  {
    slug: "company-llp-registration-consultant-ambala",
    title: "Company and LLP Registration Consultant in Ambala: Complete Local Guide",
    description: "Ambala mein company ya LLP register karane ke liye local RoC jurisdiction, Haryana ke professional tax na hone ka fayda, aur SPICe+ process — poora local guide.",
    category: "Business Registration",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/company-llp-registration-consultant-ambala.png",
    readTime: "8 min read",
    seoTitle: "Company & LLP Registration Consultant in Ambala | Local Guide 2026",
    seoDescription: "Ambala mein Pvt Ltd ya LLP registration — Registrar of Companies Haryana (naya, Chandigarh mein), professional tax na hona, aur poora incorporation process — local guide.",
    keywords: ["company registration Ambala", "LLP registration Ambala", "Registrar of Companies Haryana", "business registration consultant Ambala", "Pvt Ltd registration Haryana"],
  },
  {
    slug: "gst-drc-01-demand-notice-reply-guide",
    title: "GST DRC-01 Demand Notice ka Reply Kaise Dein: Step-by-Step Process",
    description: "GST DRC-01 show cause notice kya hai, 30-din ka reply window, Section 73 vs Section 74 ka penalty farak, aur DRC-06 reply kaise file karein — poora practical guide.",
    category: "GST",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/gst-drc-01-demand-notice-reply-guide.png",
    readTime: "9 min read",
    seoTitle: "GST DRC-01 Notice Reply Guide | Section 73 vs 74 Penalty Explained",
    seoDescription: "GST DRC-01 demand notice ka reply kaise dein, 30-din ki deadline, DRC-03 aur DRC-06 process, aur Section 73 vs Section 74 penalty structure — step-by-step guide.",
    keywords: ["GST DRC-01 reply", "GST demand notice reply", "Section 73 74 CGST Act", "DRC-06 reply process", "GST show cause notice"],
  },
  {
    slug: "gst-amnesty-scheme-section-128a-explained",
    title: "GST Amnesty Scheme (Section 128A): Interest aur Penalty Waiver Explained",
    description: "Section 128A CGST Act ka interest/penalty waiver scheme kya tha, kise eligible tha, aur application window ka current status — poori jaankari.",
    category: "GST",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/gst-amnesty-scheme-section-128a-explained.png",
    readTime: "7 min read",
    seoTitle: "GST Amnesty Scheme Section 128A: Eligibility aur Status Explained",
    seoDescription: "Section 128A CGST Act ke tahat GST interest/penalty waiver scheme — eligibility, forms SPL-01/SPL-02, aur application window ka current (2026) status.",
    keywords: ["GST amnesty scheme Section 128A", "GST interest penalty waiver", "SPL-01 SPL-02 GST", "GST amnesty 2026 status"],
  },
  {
    slug: "faceless-assessment-and-appeal-scheme-explained",
    title: "Faceless Assessment aur Faceless Appeal Scheme Explained",
    description: "Income tax ka faceless assessment kaise kaam karta hai, video-conferencing hearing ka right, faceless appeal process, aur agar notice ignore kiya to kya hota hai — poora guide.",
    category: "Income Tax",
    author: "Rajput Lalit & Associates",
    date: "17 September 2026",
    image: "/blogs/faceless-assessment-and-appeal-scheme-explained.png",
    readTime: "9 min read",
    seoTitle: "Faceless Assessment & Faceless Appeal Scheme | Income Tax Guide",
    seoDescription: "Faceless Assessment aur Faceless Appeal kaise kaam karte hain, taxpayer ke rights, deadline, aur common challenges — 2026 ka updated guide.",
    keywords: ["faceless assessment income tax", "faceless appeal scheme", "NFAC income tax", "income tax e-proceedings", "faceless assessment notice reply"],
  },
  {
    slug: "gst-complete-guide-india-2026",
    title: "GST Complete Guide India 2026 — Registration, Returns, Rates, Notices",
    description: "Ek jagah GST ka poora journey — 2026 ke naye rate slabs, registration, composition scheme, ITC, e-way bill, returns (GSTR-1/3B/9/9C), e-invoicing aur notice-reply — har topic ke deep-dive article ke link ke saath.",
    category: "GST",
    author: "Rajput Lalit & Associates",
    date: "20 September 2026",
    image: "/blogs/gst-complete-guide-india-2026.png",
    readTime: "12 min read",
    seoTitle: "GST Complete Guide India 2026 | Registration, Rates, Returns, Notices",
    seoDescription: "The complete 2026 GST guide for India — new GST 2.0 rate slabs, registration, composition scheme, ITC, e-way bill, GSTR-9/9C, e-invoicing and how to reply to a GST notice, all in one place.",
    keywords: ["GST guide 2026", "GST complete guide India", "GST rules 2026", "GST registration returns rates", "how GST works in India"],
  },
  {
    slug: "income-tax-complete-guide-india-2026",
    title: "Income Tax Complete Guide India 2026 — Regime, ITR, Advance Tax, Notices",
    description: "Ek jagah Income Tax ka poora journey — new vs old regime, slabs aur 87A rebate, ITR filing (kaunsa form, due date), advance tax, 26AS/AIS/TIS reconciliation, capital gains, 44ADA presumptive taxation aur notices — har topic ke deep-dive article ke link ke saath.",
    category: "Income Tax",
    author: "Rajput Lalit & Associates",
    date: "22 September 2026",
    image: "/blogs/income-tax-complete-guide-india-2026.png",
    readTime: "13 min read",
    seoTitle: "Income Tax Complete Guide India 2026 | Regime, ITR, Advance Tax, Notices",
    seoDescription: "The complete 2026 Income Tax guide for India — new vs old regime, slabs, 87A rebate, ITR filing, advance tax, 26AS/AIS/TIS reconciliation, capital gains, 44ADA presumptive taxation and notices, all in one place.",
    keywords: ["income tax guide 2026", "income tax complete guide India", "income tax rules 2026", "new vs old tax regime", "how income tax works in India"],
  },
];
