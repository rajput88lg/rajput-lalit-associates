import Link from "next/link";

const faqs = [
  {
    q: "What is the tax rate on short-term capital gains from shares?",
    a: "20% flat, under Section 196 (old Section 111A), on gains from listed equity shares and equity-oriented mutual funds held for 12 months or less, provided Securities Transaction Tax (STT) was paid on the transaction. It's a flat rate regardless of your income slab, and there's no exemption threshold — the entire short-term gain is taxed.",
  },
  {
    q: "How much long-term capital gain from shares is tax-free?",
    a: "The first ₹1,25,000 of long-term capital gains in a financial year, from listed equity shares and equity mutual funds (holding period over 12 months), is exempt under Section 198 (old Section 112A). Gains beyond ₹1,25,000 are taxed at 12.5%. The exemption is per financial year, not per transaction or per fund.",
  },
  {
    q: "Do these rates apply to debt mutual funds too?",
    a: "No. Section 196/198 (111A/112A) apply only to equity-oriented funds — those investing at least 65% of assets in domestic equity. Debt mutual funds purchased on or after 1 April 2023 don't get any long-term/indexation benefit at all — gains are added to your income and taxed at your slab rate, regardless of holding period.",
  },
  {
    q: "What happens if STT wasn't paid on my share transaction?",
    a: "The concessional rates (20% STCG, 12.5% LTCG with exemption) specifically require STT to have been paid. Off-market transfers, unlisted shares, or certain other transactions without STT fall back to regular rules — slab rate for short-term gains, and Section 112 (20% with indexation, or without, depending on the asset) for long-term gains instead of Section 198.",
  },
  {
    q: "How is the 12-month holding period calculated — from purchase to sale date?",
    a: "Yes, calculated from the trade date of purchase to the trade date of sale/redemption (not the settlement date). Shares or mutual fund units held for exactly 12 months or less are short-term; anything beyond 12 months is long-term. For mutual funds, this is typically tracked automatically on your capital gains statement from the fund house or broker.",
  },
  {
    q: "Can I set off share market losses against gains?",
    a: "Short-term capital losses can be set off against both short-term and long-term capital gains. Long-term capital losses can only be set off against long-term capital gains, not short-term. Unused losses can be carried forward for 8 assessment years, provided the loss year's return is filed on time.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function CapitalGainsTaxSharesMutualFundsSTCGLTCG() {
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
        Selling shares or mutual fund units triggers capital gains tax, and
        the rate you pay depends heavily on how long you held the
        investment and what kind of fund it was — mix these up and you
        either overpay or under-report without realising it. Here's how
        STCG and LTCG actually work for equity and mutual funds, in plain
        terms.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>Short-term (≤12 months):</strong> 20% flat rate, no
            exemption — Section 196 (old 111A)
          </li>
          <li>
            <strong>Long-term (&gt;12 months):</strong> 12.5% on gains
            above ₹1,25,000/year — Section 198 (old 112A)
          </li>
          <li>
            <strong>Applies to:</strong> listed equity shares and
            equity-oriented mutual funds (65%+ in domestic equity), with
            STT paid
          </li>
          <li>
            <strong>Debt mutual funds:</strong> no special rate — taxed at
            your slab rate regardless of holding period (for units bought
            on/after 1 Apr 2023)
          </li>
          <li>
            <strong>Loss set-off:</strong> short-term losses offset both
            STCG/LTCG; long-term losses offset only LTCG
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        STCG vs LTCG — Equity Shares &amp; Equity Mutual Funds
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left"></th>
              <th className="border px-4 py-3 text-left">Short-Term (STCG)</th>
              <th className="border px-4 py-3 text-left">Long-Term (LTCG)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3 font-semibold">Holding period</td>
              <td className="border px-4 py-3">12 months or less</td>
              <td className="border px-4 py-3">More than 12 months</td>
            </tr>
            <tr>
              <td className="border px-4 py-3 font-semibold">Tax rate</td>
              <td className="border px-4 py-3">20% flat</td>
              <td className="border px-4 py-3">12.5%</td>
            </tr>
            <tr>
              <td className="border px-4 py-3 font-semibold">Exemption</td>
              <td className="border px-4 py-3">None</td>
              <td className="border px-4 py-3">First ₹1,25,000/year exempt</td>
            </tr>
            <tr>
              <td className="border px-4 py-3 font-semibold">Section</td>
              <td className="border px-4 py-3">196 (old 111A)</td>
              <td className="border px-4 py-3">198 (old 112A)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3 font-semibold">Condition</td>
              <td className="border px-4 py-3" colSpan={2}>STT must be paid on the transaction; applies to listed equity shares and equity-oriented mutual funds only</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          The ₹1,25,000 Exemption Is Per Year, Not Per Investment
        </h3>
        <p className="text-gray-700 leading-8">
          A common misunderstanding: the exemption applies once per
          financial year across all your long-term equity gains combined —
          not ₹1,25,000 per stock, per fund, or per broker account. If your
          total LTCG for the year across everything is ₹3 lakh, only ₹1.75
          lakh gets taxed at 12.5%, not the full ₹3 lakh.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Debt Mutual Funds — A Different, Less Favourable Rule
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Debt mutual funds don't get the concessional STCG/LTCG treatment at
        all. For units purchased on or after 1 April 2023, gains — no
        matter how long you held the units — are added to your total
        income and taxed at your regular slab rate. There's no separate
        long-term rate and no indexation benefit for these units, which
        makes debt funds a meaningfully different tax proposition from
        equity funds.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Setting Off Losses
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Short-term capital loss → can offset both short-term and long-term capital gains</li>
        <li>Long-term capital loss → can only offset long-term capital gains</li>
        <li>Unabsorbed losses can be carried forward for up to 8 assessment years</li>
        <li>Carry-forward is only available if the ITR for the loss year is filed by the due date</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Capital Gains Reporting &amp; ITR Filing
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates helps individuals accurately compute
        and report capital gains from shares, mutual funds and other
        investments while filing ITR.{" "}
        <Link href="/#appointment" className={linkClass}>
          Book a free consultation
        </Link>{" "}
        or see our{" "}
        <Link href="/income-tax-return-filing" className={linkClass}>
          Income Tax Return Filing service
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
        Income-tax Act, 2025 (Sections 196 and 198, corresponding to the
        old Sections 111A and 112A) as applicable to income earned from 1
        April 2026 onward, current as of September 2026. Please verify the
        latest position or consult a professional for your specific
        situation before relying on it.
      </p>
    </>
  );
}
