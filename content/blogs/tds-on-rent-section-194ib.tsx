import Link from "next/link";

const faqs = [
  {
    q: "Do I need to deduct TDS if I'm an individual paying rent for my own flat?",
    a: "Yes, if your monthly rent exceeds ₹50,000 and you're not otherwise required to get a tax audit done (broadly, business turnover under ₹1 crore or professional receipts under ₹50 lakh in the previous year). This applies to ordinary salaried tenants renting a flat, not just businesses — it's one of the most commonly missed TDS obligations because people assume TDS is only a business thing.",
  },
  {
    q: "What rate do I deduct, and has it changed recently?",
    a: "2% of the rent amount, reduced from 5% with effect from 1 October 2024. If your landlord doesn't provide a PAN, the rate jumps to 20% instead of 2% — so always collect the landlord's PAN before the deduction is due.",
  },
  {
    q: "Do I have to deduct TDS every month like a business does?",
    a: "No — for individual/HUF tenants under this rule, TDS is deducted just once a year, either in March (the last month of the financial year) or the month the tenancy ends/property is vacated, whichever is earlier. This is a meaningful simplification compared to regular monthly TDS compliance.",
  },
  {
    q: "What forms do I need to file, and do I need a TAN?",
    a: "No TAN is required for individual/HUF tenants under this provision — you use your PAN instead. You file Form 26QC (now Form 141 under the Income-tax Act, 2025 / Income-tax Rules, 2026 renumbering) online, within 30 days from the end of the month in which TDS was deducted. After filing, download Form 16C from TRACES and give it to your landlord as proof of TDS deducted, so they can claim credit for it.",
  },
  {
    q: "What happens if I forget to deduct or deposit this TDS on time?",
    a: "Interest applies for late deduction/deposit, and a discretionary penalty under Section 271C equal to the TDS amount not deducted can be levied. Beyond the direct cost, unreported rent TDS is also something the department can cross-check against a landlord's declared rental income and your own HRA claim — mismatches here can trigger questions on both sides.",
  },
  {
    q: "Does this apply to commercial rent too, or only residential?",
    a: "It applies to rent for any property — residential, commercial, plant, machinery, furniture — paid by an individual or HUF not subject to tax audit, as long as the monthly rent exceeds ₹50,000. Businesses that ARE subject to tax audit follow the separate, monthly TDS-on-rent rule instead (with its own different threshold and rates).",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function TDSOnRentSection194IB() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <p className="text-gray-700 leading-8 mb-6">
        If you're an individual paying more than ₹50,000 a month in rent —
        for your home or an office — you likely have a TDS obligation most
        tenants don't realise applies to them. This isn't a business-only
        rule; it catches ordinary salaried people renting a flat just as
        much as it catches companies. Here's exactly when it applies and
        how to comply without a TAN.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>Who:</strong> individuals/HUF tenants not subject to tax
            audit, paying rent above ₹50,000/month
          </li>
          <li>
            <strong>Rate:</strong> 2% of rent (reduced from 5%, effective 1
            Oct 2024); 20% if landlord has no PAN
          </li>
          <li>
            <strong>When to deduct:</strong> once a year — March, or when
            vacating, whichever is earlier
          </li>
          <li>
            <strong>No TAN needed</strong> — use your own PAN
          </li>
          <li>
            <strong>File:</strong> Form 26QC (Form 141) within 30 days of
            month-end; give landlord Form 16C
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Who This Applies To
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        This rule targets individuals and HUFs who are tenants and are{" "}
        <strong>not</strong> otherwise required to have a tax audit done
        (broadly: business turnover under ₹1 crore or professional
        receipts under ₹50 lakh in the previous financial year). It covers
        rent for any kind of property — a residential flat, an office, a
        shop, or even plant/machinery/furniture — as long as the monthly
        rent exceeds ₹50,000. It's very commonly missed because most
        people associate "TDS" purely with businesses and employers, not
        with themselves as a tenant.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          The PAN Rule That Costs Tenants the Most
        </h3>
        <p className="text-gray-700 leading-8">
          If your landlord doesn't or won't give you their PAN, the TDS
          rate isn't just higher — it jumps all the way to 20%, ten times
          the normal 2% rate. Since this comes out of the rent you'd
          otherwise pay in full, it's worth collecting the landlord's PAN
          at the start of the tenancy, not scrambling for it near the
          annual deduction deadline.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        How and When to Deduct — Once a Year, Not Monthly
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Unlike regular business TDS, individual/HUF tenants under this
        provision deduct the full year's TDS just once — in March (the
        last month of the financial year), or in the month the tenancy
        ends if you vacate earlier. You compute 2% on the total rent paid
        during the year (or the relevant period), deduct that amount from
        the final rent payment, and pay the balance to your landlord.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Filing — Form 26QC (Form 141) and Form 16C
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>No TAN required — you use your own PAN and the landlord's PAN</li>
        <li>File <strong>Form 26QC</strong> (renumbered <strong>Form 141</strong> under the Income-tax Act, 2025 and Income-tax Rules, 2026) online, within 30 days from the end of the month in which TDS was deducted</li>
        <li>Pay the deducted amount through net banking or an authorised bank branch as part of the same filing</li>
        <li>Download <strong>Form 16C</strong> from TRACES after filing, and hand it to your landlord — this is their proof to claim TDS credit</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Consequences of Getting This Wrong
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Missing or delaying this deduction attracts interest under Section
        201(1A), and a penalty under Section 271C equal to the TDS amount
        that should have been deducted can be levied at the officer's
        discretion. There's also a practical risk: if you're claiming HRA
        exemption on this same rent, an unreported or mismatched rent TDS
        entry can draw scrutiny during cross-verification of your ITR.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        TDS on Rent &amp; ITR Filing Support
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates helps tenants correctly compute,
        deduct and file rent TDS, and helps landlords reconcile TDS
        credit against their rental income.{" "}
        <Link href="/#appointment" className={linkClass}>
          Book a free consultation
        </Link>{" "}
        or see our{" "}
        <Link href="/tds-return-filing" className={linkClass}>
          TDS Return Filing service
        </Link>
        .
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6 mb-10">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2 text-[#002b5c]">{faq.q}</h3>
            <p className="text-gray-700 leading-7">{faq.a}</p>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 leading-6">
        Disclaimer: This article is for general information based on the
        rent-TDS provision widely referred to by its old label, Section
        194-IB, and current TIN/TRACES procedure (Form 26QC / Form 141,
        Form 16C) as of September 2026. Sources checked this session did
        not clearly confirm a specific Income-tax Act, 2025 section number
        replacing 194-IB itself, so this article uses the familiar old
        label for the underlying rule. Please verify the current position
        or consult a professional before relying on it.
      </p>
    </>
  );
}
