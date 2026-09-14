import Link from "next/link";

const faqs = [
  {
    q: "Do I need GST registration to sell on Amazon, Flipkart or Meesho?",
    a: "Yes — compulsorily, regardless of your turnover. Section 24(ix) of the CGST Act specifically requires anyone supplying goods or services through an e-commerce operator to register for GST, overriding the usual ₹20 lakh/₹40 lakh threshold that applies to businesses selling directly. Even a seller doing ₹2 lakh a year through a marketplace must be registered.",
  },
  {
    q: "What is TCS under GST and how much does the platform deduct?",
    a: "Tax Collected at Source (Section 52) is 0.5% of the net taxable value of your sales, deducted by the e-commerce operator (Amazon, Flipkart, etc.) before paying you, and deposited with the government on your behalf. It's split as 0.25% CGST + 0.25% SGST for intra-state sales, or 0.5% IGST for inter-state sales. This was reduced from 1% with effect from 10 July 2024.",
  },
  {
    q: "Is TCS an extra tax on top of my GST liability?",
    a: "No — it's an advance collection, not an additional tax. The TCS deducted shows up in your GSTR-2B and electronic cash ledger, and you claim it as credit against your actual GST liability when filing GSTR-3B. Net effect: it's cash flow timing, not extra cost, as long as you claim the credit correctly.",
  },
  {
    q: "Can a composition scheme dealer sell through an e-commerce platform?",
    a: "No. Section 10(2)(d) specifically bars composition scheme taxpayers from making any supply of goods through an e-commerce operator required to collect TCS. If you're registered under composition and want to sell on a marketplace, you'd need to opt out of the composition scheme first and move to regular GST.",
  },
  {
    q: "What happens if I don't claim my TCS credit?",
    a: "It simply sits unused in your electronic cash ledger — it doesn't expire in the way ITC deadlines work, but it's still your money sitting idle instead of reducing what you pay in tax or being available for refund. Reconciling GSTR-8 (filed by the operator) against your own records every month is the practical way to make sure every rupee of TCS is claimed.",
  },
  {
    q: "What if there's a mismatch between what the platform reports and what I actually sold?",
    a: "Mismatches happen — returns, cancellations, and platform reporting errors are common. Since GSTR-8 auto-populates your GSTR-2B, an unreconciled mismatch can either understate your available credit or, worse, overstate your reported turnover in ways that don't match your own books. Monthly reconciliation between your sales records, the platform's settlement reports, and GSTR-8 is essential, not optional, for active marketplace sellers.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GSTTCSEcommerceSellersRules() {
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
        Selling on Amazon, Flipkart, Meesho or any online marketplace comes
        with GST rules that catch many first-time sellers off guard — GST
        registration is compulsory the moment you sell through a platform,
        regardless of how small your turnover is, and every sale has tax
        collected at source before you even receive the payment. Here's
        exactly how it works and what you need to track.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>GST registration:</strong> compulsory for every
            e-commerce seller, no turnover threshold (Section 24(ix))
          </li>
          <li>
            <strong>TCS rate:</strong> 0.5% of net taxable sales value
            (0.25% CGST + 0.25% SGST intra-state, or 0.5% IGST inter-state)
          </li>
          <li>
            <strong>Who deducts it:</strong> the platform, before paying you
            — deposited to government via their GSTR-8
          </li>
          <li>
            <strong>What you do with it:</strong> claim it as credit in
            GSTR-3B against your GST liability, not lost money
          </li>
          <li>
            <strong>Composition dealers:</strong> cannot sell through
            e-commerce operators at all
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Registration Is Compulsory — No Threshold Exemption
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        For any business selling directly, GST registration only becomes
        mandatory above ₹40 lakh turnover for goods or ₹20 lakh for
        services (lower in special category states). None of that applies
        once you sell through an e-commerce operator — Section 24(ix)
        overrides the threshold entirely. A seller doing a few thousand
        rupees a month through a marketplace still needs a GSTIN before
        listing a single product.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        How TCS Actually Works
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Step</th>
              <th className="border px-4 py-3 text-left">What Happens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">1. Sale happens</td>
              <td className="border px-4 py-3">Customer pays the platform for your product/service</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">2. TCS deducted</td>
              <td className="border px-4 py-3">Platform deducts 0.5% of net taxable value before settling your payout</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">3. Platform files GSTR-8</td>
              <td className="border px-4 py-3">By the 10th of the following month, with seller-wise TCS detail</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">4. TCS reflects in your GSTR-2B</td>
              <td className="border px-4 py-3">Auto-populated from the platform's GSTR-8</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">5. You claim the credit</td>
              <td className="border px-4 py-3">In GSTR-3B, against your output tax liability for that period</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          TCS Is Not an Extra Cost — If You Track It
        </h3>
        <p className="text-gray-700 leading-8">
          The 0.5% deducted by the platform isn't a fee you're paying to
          the government on top of your GST — it's collected in advance
          and credited straight back to you against your actual tax bill.
          The only way it becomes a real cost is if you forget to
          reconcile and claim it — which happens more often than sellers
          expect, especially across multiple marketplaces with different
          settlement cycles.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Composition Scheme Sellers — Not Eligible
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Section 10(2)(d) specifically excludes anyone supplying goods
        through an e-commerce operator that's required to collect TCS from
        the composition scheme. If your business is currently under
        composition and you want to start selling on a marketplace, you'll
        need to formally opt out and move to regular GST first — you
        cannot do both at once.{" "}
        <Link href="/blog/gst-composition-scheme-eligibility-rates" className={linkClass}>
          See our composition scheme guide
        </Link>{" "}
        for the opt-out process.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Monthly Reconciliation — The Habit That Protects Your Cash
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Match your platform settlement reports against your own sales records</li>
        <li>Check that TCS shown in GSTR-2B matches what the platform actually deducted</li>
        <li>Claim the full eligible TCS credit in GSTR-3B every month, not occasionally</li>
        <li>Flag and follow up on mismatches with the platform's seller support promptly, before they compound across months</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        GST Compliance for Online Sellers
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates handles GST registration, monthly
        return filing and TCS reconciliation for e-commerce sellers across
        India.{" "}
        <Link href="/#appointment" className={linkClass}>
          Book a free consultation
        </Link>{" "}
        or see our{" "}
        <Link href="/gst-registration" className={linkClass}>
          GST Registration service
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
        CGST Act, 2017 (Section 24, 52, 10(2)(d)) and current CBIC rates as
        of September 2026. TCS rates and e-commerce-specific rules have
        changed before and can change again — please verify the current
        position or consult a professional for your specific situation.
      </p>
    </>
  );
}
