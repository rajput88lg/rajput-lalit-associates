import Link from "next/link";

const faqs = [
  {
    q: "I already do my accounting once a year before filing returns — isn't that enough?",
    a: "It's enough to file a return, but not enough to run a business well. Annual, after-the-fact bookkeeping means you only discover cash flow problems, wrong GST claims, or costly errors months after they happened, when it's too late to fix them. Monthly bookkeeping catches these issues while there's still time to act — and it's also what banks, investors, and the tax department actually expect to see.",
  },
  {
    q: "How does monthly bookkeeping help with GST specifically?",
    a: "GST returns are monthly (or quarterly) filings, and every one of them depends on accurate books at that point in time — reconciling your purchase register against GSTR-2B to correctly claim Input Tax Credit, matching sales with GSTR-1, and catching mismatches before they turn into a GST notice. Trying to reconstruct a full year's transactions at year-end makes accurate GST filing practically impossible, and ITC claims have strict monthly/annual deadlines that can't be fixed retroactively.",
  },
  {
    q: "Is there a legal requirement to maintain books of account?",
    a: "Yes, under Section 44AA. Specified professionals (legal, medical, engineering, accountancy, etc.) must maintain books regardless of income level. For other businesses/professions, individuals and HUFs must maintain books once income exceeds ₹2,50,000 or turnover exceeds ₹25 lakh in any of the preceding 3 years; for non-individual entities like firms, the thresholds are lower — income above ₹1,20,000 or turnover above ₹10 lakh.",
  },
  {
    q: "Can monthly bookkeeping actually help me get a loan?",
    a: "Yes, significantly. Banks and NBFCs want to see consistent, up-to-date financial records — recent P&L, current receivables/payables, and clean bank reconciliations — not a rushed reconstruction done just before the loan application. A business with reliable monthly books looks lower-risk and typically moves through loan processing faster than one presenting only annual figures.",
  },
  {
    q: "What exactly should be reviewed every month?",
    a: "At minimum: bank reconciliation (books vs actual bank statement), GST return preparation and 2A/2B reconciliation, TDS deducted and deposited on time, a basic profit & loss review to see if the business is actually profitable and where costs are trending, and outstanding receivables/payables so nothing slips through unnoticed.",
  },
  {
    q: "What's the real risk of not doing this monthly?",
    a: "The most common pattern is a 'shoebox of receipts' problem — a full year of unsorted invoices and bank statements handed over right before a deadline, leading to missed ITC claims, incorrect TDS compliance, cash flow surprises, and a much higher chance of triggering a GST or income tax notice due to mismatches that a monthly process would have caught and corrected as they happened.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function WhySmallBusinessesNeedMonthlyBookkeeping() {
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
        Most small business owners treat bookkeeping as something you do
        once a year, right before filing returns. The problem is that
        India's compliance system — GST returns, TDS deposits, advance
        tax — runs on a monthly clock, not an annual one. By the time
        year-end accounting reveals a problem, the window to fix it has
        usually already closed. Here's why monthly bookkeeping isn't
        just tidier, it's genuinely necessary.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>GST filings are monthly</strong> — accurate books at
            each filing point protect your ITC claims
          </li>
          <li>
            <strong>Legal requirement:</strong> Section 44AA mandates books
            above income/turnover thresholds
          </li>
          <li>
            <strong>Cash flow:</strong> monthly visibility catches problems
            while there's time to act
          </li>
          <li>
            <strong>Loan readiness:</strong> lenders want consistent
            monthly records, not year-end reconstruction
          </li>
          <li>
            <strong>Biggest risk of skipping it:</strong> the "shoebox of
            receipts in March" problem — missed ITC, notices, surprises
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        GST Runs on a Monthly Clock — So Should Your Books
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Every GST return depends on your books being accurate at that
        specific point in time — reconciling your purchase register
        against GSTR-2B to correctly claim Input Tax Credit, matching
        sales against GSTR-1, and catching supplier mismatches before they
        become a notice. ITC has strict claim deadlines that can't be
        fixed after the fact. Trying to reconstruct an entire year's
        transactions at year-end makes accurate, on-time GST compliance
        practically impossible — errors compound instead of getting caught
        early.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          It's Also a Legal Requirement — Section 44AA
        </h3>
        <p className="text-gray-700 leading-8">
          Specified professionals (legal, medical, engineering,
          accountancy, and similar) must maintain books of account{" "}
          <strong>regardless of income level</strong>. For other
          businesses and professions, individuals/HUFs must maintain books
          once income exceeds <strong>₹2,50,000</strong> or turnover
          exceeds <strong>₹25 lakh</strong> in any of the preceding 3
          years; for non-individual entities like partnership firms, the
          thresholds are lower — income above ₹1,20,000 or turnover above
          ₹10 lakh. Many small businesses cross these thresholds without
          realising it, making "I'll sort it out at year-end" a compliance
          risk, not just an inefficiency.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        What Monthly Bookkeeping Actually Gives You
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li><strong>Cash flow visibility:</strong> knowing whether you can cover upcoming payments, before it becomes urgent</li>
        <li><strong>Loan/funding readiness:</strong> banks and NBFCs want consistent, recent financial records — not a rushed reconstruction right before a loan application</li>
        <li><strong>Informed decisions:</strong> a monthly P&L shows whether you're actually profitable and where costs are drifting, in time to correct course mid-year</li>
        <li><strong>Fewer notices:</strong> catching GST/TDS mismatches monthly means they get fixed before they trigger department scrutiny</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        The "Shoebox in March" Problem
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        The most common pattern we see with businesses that skip monthly
        bookkeeping: a full year of unsorted invoices and bank statements
        handed over right before a filing deadline. This almost always
        means missed ITC claims (because the deadline to claim them has
        already passed), incomplete TDS compliance, cash flow surprises
        that could have been planned around, and a meaningfully higher
        chance of a GST or income tax notice from mismatches that monthly
        reconciliation would have caught immediately.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Monthly Bookkeeping &amp; Accounting Support
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates provides monthly bookkeeping,
        GST reconciliation, and TDS compliance for small businesses.{" "}
        <Link href="/#appointment" className={linkClass}>
          Book a free consultation
        </Link>{" "}
        or see our{" "}
        <Link href="/accounting-bookkeeping-services" className={linkClass}>
          Accounting &amp; Bookkeeping service
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
        Disclaimer: This article is for general information based on
        Section 44AA of the Income Tax Act and standard GST compliance
        practice as applicable for FY 2026-27, current as of September
        2026. Please verify the current position for your specific
        business or consult a professional before relying on it.
      </p>
    </>
  );
}
