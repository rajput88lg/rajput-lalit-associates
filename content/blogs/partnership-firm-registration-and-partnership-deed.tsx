import Link from "next/link";

const faqs = [
  {
    q: "Is it legally compulsory to register a partnership firm?",
    a: "No — registration under the Indian Partnership Act, 1932 is optional, and many small firms operate for years without it. But an unregistered firm loses important legal rights (explained below), so registering is strongly recommended even though it isn't mandatory.",
  },
  {
    q: "What exactly can't an unregistered firm do?",
    a: "Under Section 69 of the Indian Partnership Act, an unregistered firm (or its partners) cannot file a lawsuit in court to enforce a right arising from a contract against a third party, or against another partner. Importantly, this restriction doesn't work both ways — third parties CAN still sue an unregistered firm. So non-registration only weakens the firm's own legal position, it doesn't protect it from being sued.",
  },
  {
    q: "What must a partnership deed contain?",
    a: "At minimum: firm name and address, nature of business, capital contribution of each partner, profit/loss sharing ratio, partner duties and decision-making authority, rules on partner remuneration and interest on capital (within Income Tax Act limits), and clauses covering admission, retirement, death of a partner, and dissolution. A vague or missing deed is one of the most common causes of partner disputes later.",
  },
  {
    q: "How much interest and remuneration can partners legally be paid?",
    a: "Interest on partners' capital is capped at 12% per annum for tax deduction purposes — anything paid above this rate isn't deductible for the firm. Remuneration to working partners (for FY 2024-25 onwards) is capped at ₹3,00,000 or 90% of book profit (whichever is higher) on the first ₹6 lakh of book profit, plus 60% of book profit above that. Both must be authorised by the partnership deed and paid only to working partners to be deductible.",
  },
  {
    q: "How is a partnership firm taxed?",
    a: "The firm itself pays a flat 30% tax on its profits, plus applicable surcharge (12% if income exceeds ₹1 crore) and 4% health & education cess — there's no slab-rate benefit like an individual gets. Once the firm has paid this tax, each partner's share of the profit is fully exempt in their hands. However, remuneration and interest received from the firm ARE taxable in the partner's hands as business income.",
  },
  {
    q: "Do we need GST registration for a partnership firm?",
    a: "Only if your turnover crosses the applicable GST threshold (generally ₹40 lakh for goods, ₹20 lakh for services in most states) or you fall under a category requiring compulsory registration regardless of turnover (like e-commerce sellers). A firm's PAN is mandatory in every case, since a partnership firm is a separate taxable entity from its partners.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function PartnershipFirmRegistrationAndPartnershipDeed() {
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
        A partnership firm is still one of the simplest, cheapest ways for
        two or more people to run a business together in India — but
        "simple" doesn't mean you should skip the paperwork. A weak or
        missing partnership deed, or the decision to stay unregistered,
        both create real legal risk down the line. Here's what the deed
        needs, what registration actually gets you, and how the firm is
        taxed.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>Registration:</strong> optional under the Partnership
            Act, but strongly recommended
          </li>
          <li>
            <strong>Unregistered firm's biggest risk:</strong> can't sue
            third parties or partners to enforce contract rights (Sec 69)
          </li>
          <li>
            <strong>Interest to partners:</strong> capped at 12% p.a. for
            tax deduction
          </li>
          <li>
            <strong>Remuneration to working partners:</strong> capped at
            ₹3L/90% of book profit (first ₹6L) + 60% beyond
          </li>
          <li>
            <strong>Firm tax rate:</strong> flat 30% + surcharge + cess; a
            partner's profit share is then tax-free in their hands
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Registration Process
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Draft the partnership deed covering capital, profit ratio, authority, and exit rules</li>
        <li>Execute it on stamp paper as per your state's stamp duty rules (stamp duty varies by state and by capital contribution amount)</li>
        <li>File with the state Registrar of Firms — optional, but recommended</li>
        <li>Apply for the firm's PAN, and GST registration if applicable</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Timeline is typically 7-15 working days once the deed and stamp
        duty are in order, though this varies by state.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        What Your Partnership Deed Should Cover
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Firm name, registered address, and nature of business</li>
        <li>Capital contribution of each partner and the agreed profit/loss sharing ratio</li>
        <li>Bank signatory authority and spending limits</li>
        <li>Partner duties, roles, and decision-making rights</li>
        <li>Remuneration, interest on capital, and drawing rules — within Income Tax Act limits</li>
        <li>Admission, retirement, death, and incapacity provisions</li>
        <li>Dispute resolution and deadlock-breaking procedures</li>
      </ul>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Staying Unregistered Doesn't Protect You — It Only Weakens You
        </h3>
        <p className="text-gray-700 leading-8">
          Under Section 69 of the Indian Partnership Act, 1932, an
          unregistered firm (or any of its partners) cannot go to court to
          enforce a right arising from a contract — whether against an
          outside party or against a fellow partner. This is a one-way
          restriction: third parties are completely free to sue an
          unregistered firm whenever they want. So skipping registration
          doesn't shield the firm from legal risk; it only takes away the
          firm's own ability to enforce its rights when something goes
          wrong with a customer, vendor, or partner.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Partner Remuneration &amp; Interest — Tax Limits
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Payment</th>
              <th className="border px-4 py-3 text-left">Maximum Deductible Limit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Interest on partners' capital</td>
              <td className="border px-4 py-3">12% per annum</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Remuneration — first ₹6 lakh book profit</td>
              <td className="border px-4 py-3">₹3,00,000, or 90% of book profit, whichever is higher</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Remuneration — book profit above ₹6 lakh</td>
              <td className="border px-4 py-3">60% of the balance book profit</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        These limits (revised upward from ₹1,50,000/₹3 lakh effective 1
        April 2024) apply to the combined remuneration paid to all working
        partners, not per partner. Both interest and remuneration must be
        explicitly authorised in the partnership deed and actually paid to
        qualify as a deductible expense for the firm — anything beyond
        these limits, or paid without deed authorisation, is disallowed.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        How the Firm and Partners Are Taxed
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        A partnership firm pays a <strong>flat 30% tax</strong> on its
        profits (plus 12% surcharge if income exceeds ₹1 crore, and 4%
        health &amp; education cess) — there's no slab-rate benefit the way
        an individual gets. Once this tax is paid at the firm level, each
        partner's share of the profit is <strong>fully exempt</strong> in
        their personal return. However, any remuneration or interest a
        partner receives from the firm is taxable in their hands as
        business income, separate from their tax-free profit share.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Partnership Firm Setup &amp; Compliance Support
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates helps draft partnership deeds, register
        firms, and manage ongoing GST, TDS, and income tax compliance for
        partnerships.{" "}
        <Link href="/#appointment" className={linkClass}>
          Book a free consultation
        </Link>{" "}
        or see our{" "}
        <Link href="/company-registration" className={linkClass}>
          Business Registration service
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
        Indian Partnership Act, 1932 and Income Tax Act provisions (Section
        40(b), some sources indicate this is renumbered as Section 35(e)
        under the Income-tax Act, 2025 effective 1 April 2026) applicable
        as of September 2026. Stamp duty and Registrar of Firms procedures
        vary by state — please verify the current position for your state
        or consult a professional before relying on it.
      </p>
    </>
  );
}
