import Link from "next/link";

const faqs = [
  {
    q: "Do I need audited financials, or is CA-certified enough?",
    a: "It depends on whether your business is legally required to have a statutory or tax audit (see our Section 44AB guide). If you're below the audit threshold, CA-certified (compiled/reviewed) financials are usually acceptable to banks; above the threshold, audited financials are expected and often required.",
  },
  {
    q: "What is CMA data, exactly?",
    a: "CMA (Credit Monitoring Arrangement) data is a standard, bank-prescribed format covering your operating statement, balance sheet, and fund-flow projections across past, current, and future years — used specifically to assess working capital needs for a CC limit, distinct from your regular financial statements.",
  },
  {
    q: "How often do I need to submit a stock statement once I have a CC limit?",
    a: "Typically monthly or quarterly, depending on your bank's terms — this is an ongoing requirement for the life of the limit, not a one-time submission at sanction.",
  },
  {
    q: "My GST turnover is lower than my books because of exempt income — is that a problem?",
    a: "It can raise a question, but it's explainable if genuine (e.g., exempt supplies, or income not subject to GST like certain interest income) — the key is being able to clearly explain and document the difference, not that a difference automatically exists for a bad reason.",
  },
  {
    q: "Can a new business with no financial history get a loan?",
    a: "Yes, but the documentation shifts toward a detailed project report, projected financials, promoter's own financial standing, and collateral — new businesses are assessed differently from established ones with a 2-3 year track record.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function FinancialStatementsChecklistBankLoanCCLimit() {
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
        A loan or CC limit application gets rejected or delayed far more often over documentation mismatches than over the business itself being unbankable. Here's what banks are actually checking, and how to have it ready before you apply rather than scrambling once a relationship manager asks.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Banks typically want 2-3 years of financial statements — audited/CA-certified where applicable</li>
          <li>GST returns and ITR must match the turnover you're claiming in your loan application</li>
          <li>CC limit renewal needs ongoing stock and debtor/creditor statements, not just annual financials</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Core Financial Documents (For Any Loan Application)
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>Last 2-3 years of financial statements — Profit &amp; Loss Account and Balance Sheet, CA-certified (audited, if applicable) for the relevant years</li>
          <li>Income Tax Returns with computation of income, for the same 2-3 years</li>
          <li>GST returns (GSTR-3B and GSTR-1) for at least the last 12 months, matching the turnover shown in your financials</li>
          <li>Bank statements for all operating accounts, typically 6-12 months</li>
          <li>KYC and constitutional documents (partnership deed/LLP agreement/MOA-AOA/proprietorship proof as applicable)</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Why the Numbers Need to Tie Out
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Mismatched Turnover Is the #1 Reason for Delay
        </h3>
        <p className="text-gray-700 leading-8">
          If your ITR shows one turnover figure, your GST returns show another, and your financial statements show a third, expect the bank to pause and ask for a reconciliation before proceeding — regardless of how strong your actual business case is. This is exactly why clean, monthly bookkeeping through the year (rather than a rushed year-end reconstruction) makes loan applications go smoothly.
        </p>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        CC (Cash Credit) Limit — Additional, Ongoing Requirements
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        A CC limit isn't a one-time sanction you forget about — it needs periodic renewal (typically annual) and ongoing monthly/quarterly reporting:
      </p>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>CMA (Credit Monitoring Arrangement) data — a standardised projected and actual financial format banks use specifically for working capital assessment, covering the past year, current year, and 2 future projected years</li>
          <li>Monthly or quarterly stock statements — value of raw material, work-in-progress, and finished goods stock</li>
          <li>Debtor and creditor ageing statements — showing how much is owed to you and by when it's overdue, and vice versa</li>
          <li>Renewal of the limit typically requires the latest year's audited/CA-certified financials, similar to the original sanction</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Getting Ahead of It
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        The businesses that get loan/CC sanctions fastest are the ones whose books were already clean and current when the relationship manager asked — not the ones scrambling to reconstruct a year's worth of transactions in two weeks. This is the practical payoff of the monthly bookkeeping discipline we cover in a separate guide.
      </p>


      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates prepares CA-certified financial statements, CMA data, and stock statements for clients applying for or renewing business loans and CC limits. See our{" "}<Link href="/accounting-bookkeeping-services" className={linkClass}>Accounting &amp; Bookkeeping service</Link>{" "}or{" "}<Link href="/#appointment" className={linkClass}>book a free consultation</Link>.
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
        Bank documentation requirements vary by lender, loan type, and amount. This article reflects commonly-requested documents as of September 2026 — please confirm the exact checklist with your specific bank/lender before applying.
      </p>
    </>
  );
}
