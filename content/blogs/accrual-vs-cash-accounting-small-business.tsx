import Link from "next/link";

const faqs = [
  {
    q: "Can I use cash basis for my books but still file GST correctly?",
    a: "Yes, but it takes deliberate tracking — you'll need a separate invoice-date register purely for GST time-of-supply purposes, since your cash-basis books alone won't capture it. Most businesses find it simpler to just move to accrual accounting entirely rather than maintaining two parallel systems.",
  },
  {
    q: "Which method do banks prefer when I apply for a loan?",
    a: "Accrual-basis financial statements are the near-universal expectation for loan applications, CC limit assessments, and CMA data — cash-basis books are generally not accepted as sufficient on their own for this purpose.",
  },
  {
    q: "Can I switch from cash to accrual accounting mid-year?",
    a: "It's possible but needs careful handling of the transition (to avoid double-counting or omitting transactions during the changeover), and once changed, the new method needs to be followed consistently going forward — this is best done with professional guidance rather than as a DIY mid-year switch.",
  },
  {
    q: "Does accrual accounting mean I pay tax on money I haven't received yet?",
    a: "Yes, potentially — this is an important practical consequence. If you invoice in March and get paid in June, that income is still taxable in the year it was earned/accrued (March), not when cash actually arrived, which is something to plan cash flow around.",
  },
  {
    q: "Is accrual accounting mandatory for companies?",
    a: "In practice, yes — companies are required under the Companies Act to prepare financial statements on an accrual basis, so cash-basis accounting isn't really an option once you're operating as a Pvt Ltd or LLP with statutory financial statement requirements.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function AccrualVsCashAccountingSmallBusiness() {
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
        This sounds like a technical bookkeeping choice, but it actually changes how accurate your profit figure is at any given moment — which matters the moment you're trying to get a loan, bring in an investor, or simply understand whether your business is actually making money.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Cash basis: records income/expense only when money actually moves</li>
          <li>Accrual basis: records income/expense when earned/incurred, regardless of payment timing</li>
          <li>GST liability arises on time of supply (broadly, invoice date) regardless of which accounting method your books use</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Cash Basis — Simple, But Can Be Misleading
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Under cash accounting, you record a sale only when payment is received, and an expense only when it's actually paid. It's simple and matches your bank balance closely — but it can paint a misleading picture. A business that delivered ₹10 lakh of work in March but gets paid in May shows zero revenue for that work in March's books, even though the business genuinely earned it that month.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Accrual Basis — Matches Income to When It Was Earned
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Under accrual (mercantile) accounting, that same ₹10 lakh is recorded as revenue in March, when the work was completed and invoiced, regardless of when the client actually pays. Expenses work the same way — a bill received in March for services used in March is recorded then, even if you pay it in April. This gives a far more accurate month-to-month profitability picture.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Why This Isn't Fully Your Choice for GST
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          GST Follows 'Time of Supply', Not Your Bank Account
        </h3>
        <p className="text-gray-700 leading-8">
          Regardless of which accounting method your internal books use, your GST liability is triggered by the 'time of supply' rules — broadly, the invoice date (or the earliest of invoice/payment/completion of service, depending on the transaction type) — not by when you actually receive payment. A business that keeps cash-basis books but doesn't separately track invoice dates for GST purposes is one of the most common sources of GST-vs-books mismatches we see at reconciliation time.
        </p>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        What Income Tax Law Requires
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Section 145 of the Income-tax Act allows either the cash or mercantile (accrual) system, as long as it's followed consistently year to year — you can't switch back and forth to manage your tax outcome. Most businesses beyond a very small scale use accrual accounting paired with double-entry bookkeeping, since it's also what's expected for financial statements shown to banks and investors.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Our Recommendation for Growing Businesses
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        If you're still on cash-basis, informal bookkeeping and you're planning to apply for a loan, bring in a partner, or simply want to know your real monthly profitability, moving to accrual-based, proper double-entry bookkeeping is one of the highest-value changes you can make — well before you're forced into it by a bank's documentation requirements.
      </p>


      <p className="text-gray-700 leading-8 mb-10">
        Choosing (and correctly maintaining) the right accounting method underlies everything else — your GST reconciliation, your tax audit readiness, and your loan application all depend on it. Rajput Lalit &amp; Associates provides monthly bookkeeping on a proper accrual basis for small businesses. See our{" "}<Link href="/accounting-bookkeeping-services" className={linkClass}>Accounting &amp; Bookkeeping service</Link>{" "}or{" "}<Link href="/blog/why-small-businesses-need-monthly-bookkeeping" className={linkClass}>why monthly bookkeeping matters</Link>.
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
        This article explains accounting method concepts generally applicable under Section 145 of the Income-tax Act and standard GST time-of-supply rules as of September 2026. Specific treatment can vary by transaction type and entity structure — please consult a professional for your business.
      </p>
    </>
  );
}
