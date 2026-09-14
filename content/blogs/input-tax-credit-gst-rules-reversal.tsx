import Link from "next/link";

const faqs = [
  {
    q: "What are the conditions to claim ITC under GST?",
    a: "You must hold a valid tax invoice or debit note, actually receive the goods or services, have your supplier's tax reflected in your GSTR-2B (meaning they filed their return and paid the tax to government), file your own GSTR-3B, and pay your supplier within 180 days of the invoice date. Miss any one of these, and the credit either doesn't arise or gets reversed.",
  },
  {
    q: "What is the last date to claim ITC for a financial year?",
    a: "The earlier of 30 November following the end of that financial year, or the date you file your annual return (GSTR-9) for that year. In practice, since ITC is claimed through GSTR-3B, the effective cutoff is the GSTR-3B for October, due by 20 November. Miss this window and that year's ITC on unclaimed invoices is generally lost.",
  },
  {
    q: "Can I claim ITC on a car bought for my business?",
    a: "Generally no. ITC on motor vehicles for passenger transport (cars, two-wheelers) is blocked under Section 17(5), even if used for business. The exceptions are narrow — businesses that transport passengers for a fare, sell or manufacture vehicles, or run driving schools.",
  },
  {
    q: "What happens if I don't pay my supplier within 180 days?",
    a: "The ITC you already claimed on that invoice gets reversed, along with interest. Once you do pay the supplier (even later), you can re-claim the same credit. This rule exists to stop businesses from claiming credit on purchases they never actually pay for.",
  },
  {
    q: "Can a restaurant claim ITC on the food and beverages it buys to cook and sell?",
    a: "Yes — the block on food and beverage ITC has a specific exception when the same category of goods or services is used to make a further taxable outward supply. A restaurant buying ingredients to cook and sell food is exactly this case, so ITC is generally available (subject to the restaurant's own GST rate structure).",
  },
  {
    q: "Is ITC available on office building construction?",
    a: "No, ITC on construction of an immovable property (other than plant and machinery) is blocked, even if the building is used entirely for business, and even where the cost is capitalised. The exception is for businesses in the business of construction/sale of such property (builders, developers).",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function InputTaxCreditGSTRulesReversal() {
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
        Input tax credit is what makes GST a value-added tax rather than a
        tax on tax — it lets you set off the GST you paid on business
        purchases against the GST you collect from customers. Get it right
        and your working capital improves; get it wrong (claim something
        blocked, miss the deadline, or forget to pay a supplier on time) and
        you can face reversal with interest, or a notice. Here's how ITC
        actually works, what's blocked, and the deadlines that trip people
        up most.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>To claim ITC:</strong> valid invoice, goods/services
            received, supplier's tax reflected in your GSTR-2B, your GSTR-3B
            filed, supplier paid within 180 days
          </li>
          <li>
            <strong>Deadline for a financial year's ITC:</strong> 30
            November of the following year, or your GSTR-9 filing date —
            whichever comes first
          </li>
          <li>
            <strong>Commonly blocked:</strong> cars/two-wheelers, food &amp;
            beverages (unless resold), club membership, building
            construction, goods lost/stolen/gifted
          </li>
          <li>
            <strong>Miss supplier payment by 180 days:</strong> ITC already
            claimed gets reversed with interest, until you actually pay
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        The 5 Conditions to Claim ITC (Section 16)
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        All five of these need to be true — missing even one means the
        credit isn't valid yet, or gets reversed later:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>
          <strong>Tax invoice or debit note</strong> — you must actually hold
          the document from your supplier
        </li>
        <li>
          <strong>Goods or services received</strong> — credit cannot be
          claimed on an invoice for something not yet delivered
        </li>
        <li>
          <strong>Supplier's return reflects the tax</strong> — the supplier
          must have filed their GSTR-1/IFF and the invoice must appear in
          your GSTR-2B; this is why reconciling with your supplier matters
          as much as your own filing
        </li>
        <li>
          <strong>Your GSTR-3B is filed</strong> — ITC is claimed through
          this return
        </li>
        <li>
          <strong>Payment made within 180 days</strong> — you must pay the
          supplier (invoice value + tax) within 180 days of the invoice date
        </li>
      </ul>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          The Condition Most Businesses Get Wrong
        </h3>
        <p className="text-gray-700 leading-8">
          It's not enough that you have a valid invoice — your supplier
          actually has to file their return and pay the tax for the credit
          to legitimately show up in your GSTR-2B. This is why chasing a
          supplier who's slow to file, or stopped filing altogether, matters:
          their non-compliance can block your ITC even though you did
          everything right on your end.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        What's Blocked Under Section 17(5) — Common Cases
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Category</th>
              <th className="border px-4 py-3 text-left">ITC Blocked?</th>
              <th className="border px-4 py-3 text-left">Exception</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Cars, two-wheelers (passenger)</td>
              <td className="border px-4 py-3">Yes</td>
              <td className="border px-4 py-3">Passenger transport business, vehicle dealers, driving schools</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Food, beverages, outdoor catering</td>
              <td className="border px-4 py-3">Yes</td>
              <td className="border px-4 py-3">Used to make a further taxable supply (e.g. restaurants)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Health/life insurance, club membership, gym</td>
              <td className="border px-4 py-3">Yes</td>
              <td className="border px-4 py-3">Where legally obligatory for employer to provide</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Building construction/renovation</td>
              <td className="border px-4 py-3">Yes</td>
              <td className="border px-4 py-3">Builders/developers in the business of construction for sale</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Goods lost, stolen, destroyed, written off, or given as gifts/free samples</td>
              <td className="border px-4 py-3">Yes</td>
              <td className="border px-4 py-3">No exception</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Goods/services for personal use</td>
              <td className="border px-4 py-3">Yes</td>
              <td className="border px-4 py-3">No exception</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        This is a simplified view of the more detailed Section 17(5) list —
        the exact wording and exceptions matter a lot in borderline cases,
        so when a purchase is large or unusual, it's worth checking before
        assuming ITC either way.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        The 180-Day Payment Rule
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        This is the rule that catches businesses with slow-paying habits
        toward their own vendors:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>You claim ITC on an invoice as usual when you receive it</li>
        <li>
          If you haven't paid the supplier (invoice value + GST) within 180
          days of the invoice date, that ITC is added back to your output
          tax liability, with interest, in the return for the period after
          the 180 days lapse
        </li>
        <li>
          Once you do pay the supplier — even after the 180 days — you can
          re-claim the same ITC in the period you make the payment
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Deadline to Claim ITC for a Financial Year
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        Section 16(4) sets a hard outer limit: you can claim ITC for
        invoices/debit notes of a financial year up to whichever is earlier
        of —
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>
          <strong>30 November</strong> of the following financial year
          (practically, the GSTR-3B for October, due by 20 November), or
        </li>
        <li>
          the date you actually file your <strong>annual return
          (GSTR-9)</strong> for that year
        </li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Miss this window on an invoice and that credit is generally lost for
        good — it's one of the most common, and most avoidable, ways
        businesses leave money on the table. Reconciling GSTR-2B against
        your purchase books every month (not just once a year) is the
        practical way to avoid this.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        ITC Reconciliation Help
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates handles monthly GSTR-2B reconciliation,
        ITC eligibility review and GST return filing for businesses across
        India, with in-person support for clients in Ambala.{" "}
        <Link href="/#appointment" className={linkClass}>
          Book a free consultation
        </Link>{" "}
        or see our{" "}
        <Link href="/gst-return-filing" className={linkClass}>
          GST Return Filing service
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
        CGST Act, 2017, related rules and current CBIC guidance as of
        September 2026. ITC rules and exceptions are detailed and
        fact-specific — please verify the latest position or consult a
        professional before acting on a specific transaction.
      </p>
    </>
  );
}
