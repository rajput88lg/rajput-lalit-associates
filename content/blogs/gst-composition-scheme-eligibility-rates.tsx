import Link from "next/link";

const faqs = [
  {
    q: "What is the turnover limit for GST composition scheme in 2026?",
    a: "₹1.5 crore aggregate turnover in the preceding financial year for most states. For special category states (Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura, Uttarakhand), the limit is ₹75 lakh. A separate composition scheme just for service providers has its own, lower limit of ₹50 lakh.",
  },
  {
    q: "What is the tax rate under composition scheme?",
    a: "1% (0.5% CGST + 0.5% SGST) for manufacturers and traders, 5% (2.5% CGST + 2.5% SGST) for restaurants not serving alcohol, and 6% (3% CGST + 3% SGST) for the separate service-provider composition scheme. This is charged on your turnover, not collected separately from customers.",
  },
  {
    q: "Can a composition dealer claim input tax credit?",
    a: "No. This is the biggest trade-off of the scheme — you pay a small flat percentage of turnover, but you cannot claim ITC on any purchases, including GST paid on raw materials, stock or business expenses.",
  },
  {
    q: "Can a composition dealer sell in other states or on Amazon/Flipkart?",
    a: "No. Composition dealers cannot make inter-state outward supplies of goods, and cannot supply through an e-commerce operator that is required to collect TCS (which covers Amazon, Flipkart, Meesho and most marketplaces). Both restrictions rule the scheme out for many growing businesses.",
  },
  {
    q: "What returns does a composition dealer file?",
    a: "A quarterly payment statement, CMP-08, by the 18th of the month after each quarter ends, and one annual return, GSTR-4, by 30 June following the financial year. This is far simpler than the monthly GSTR-1/GSTR-3B cycle a regular taxpayer files.",
  },
  {
    q: "Who cannot opt for the composition scheme at all?",
    a: "Manufacturers of ice cream, pan masala or tobacco products, casual taxable persons, non-resident taxable persons, suppliers of goods not leviable to GST, and anyone making inter-state supplies or selling through TCS-collecting e-commerce platforms.",
  },
  {
    q: "Can I switch back to the regular GST scheme later if my business grows?",
    a: "Yes. If your turnover is approaching the limit, or you need ITC, or you want to sell inter-state/online, you can opt out of composition and move to the regular scheme going forward. Many businesses start on composition to keep compliance light and switch once they scale.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GSTCompositionSchemeEligibilityRates() {
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
        If you run a small trading, manufacturing or restaurant business and
        find monthly GST returns and input tax credit reconciliation more
        trouble than they're worth, the composition scheme is built for you.
        You pay a small flat percentage of your turnover instead of the
        regular GST rate, and file only once a quarter (plus one annual
        return) instead of every month. The trade-off: no input tax credit,
        and some real restrictions on how you can sell. Here's exactly who
        qualifies, what it costs, and where it falls short.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>Turnover limit:</strong> ₹1.5 crore (₹75 lakh in special
            category states); ₹50 lakh under the separate services-only
            scheme
          </li>
          <li>
            <strong>Tax rate:</strong> 1% goods, 5% restaurants, 6% services
            — charged on turnover, not passed on to customers separately
          </li>
          <li>
            <strong>Returns:</strong> Quarterly CMP-08 (by 18th of next
            month) + annual GSTR-4 (by 30 June)
          </li>
          <li>
            <strong>Biggest limitation:</strong> No input tax credit, no
            inter-state sales, no selling via Amazon/Flipkart-style
            marketplaces
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Who Is Eligible for the GST Composition Scheme?
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        Eligibility is based on your aggregate turnover in the preceding
        financial year — this is your PAN-level turnover across all GST
        registrations, not just one GSTIN.
      </p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Category</th>
              <th className="border px-4 py-3 text-left">Turnover Limit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">
                Manufacturers, traders, restaurants (most states)
              </td>
              <td className="border px-4 py-3">Up to ₹1.5 crore</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">
                Special category states (NE states, Himachal Pradesh)
              </td>
              <td className="border px-4 py-3">Up to ₹75 lakh</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">
                Service providers (separate scheme under Section 10(2A))
              </td>
              <td className="border px-4 py-3">Up to ₹50 lakh</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        A goods trader or manufacturer on the regular composition scheme can
        also supply some services alongside their main business, up to 10%
        of turnover or ₹5 lakh (whichever is higher), without losing
        eligibility. A dedicated service business (consultants, agencies,
        repair shops) instead uses the separate composition scheme for
        services, with its own ₹50 lakh limit and 6% rate.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Tax Rates Under Composition Scheme
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Business Type</th>
              <th className="border px-4 py-3 text-left">Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">
                Manufacturers (except notified goods)
              </td>
              <td className="border px-4 py-3">1% (0.5% CGST + 0.5% SGST)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Traders (resellers)</td>
              <td className="border px-4 py-3">1% (0.5% CGST + 0.5% SGST)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">
                Restaurants (not serving alcohol)
              </td>
              <td className="border px-4 py-3">5% (2.5% CGST + 2.5% SGST)</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">
                Service providers (separate scheme)
              </td>
              <td className="border px-4 py-3">6% (3% CGST + 3% SGST)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        This rate applies to your total turnover for the period, regardless
        of how much profit you actually made — and unlike regular GST, you
        cannot show this tax separately on your bill or collect it extra
        from the customer. A composition dealer issues a{" "}
        <strong>bill of supply</strong>, not a tax invoice.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          The Trade-Off Most People Miss: No Input Tax Credit
        </h3>
        <p className="text-gray-700 leading-8">
          A composition dealer cannot claim input tax credit on anything —
          not on stock purchased, raw materials, rent, or business expenses.
          For a business with high purchase costs and thin margins (say, a
          trader buying and reselling GST-heavy goods), this can sometimes
          cost more than simply paying regular GST and claiming ITC. It's
          worth running the actual numbers before opting in, not just
          assuming a 1% rate is automatically cheaper.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Who Cannot Opt for the Composition Scheme
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Manufacturers of ice cream, pan masala, or tobacco products</li>
        <li>Casual taxable persons and non-resident taxable persons</li>
        <li>Suppliers of goods not leviable to GST</li>
        <li>Anyone making inter-state outward supplies of goods</li>
        <li>
          Anyone supplying through an e-commerce operator required to
          collect TCS under Section 52 (Amazon, Flipkart, Meesho and
          similar marketplaces)
        </li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        And once you're in, a few more restrictions apply: you can't issue a
        tax invoice or charge GST separately, you can't make inter-state
        sales, and reverse charge still applies when you buy from an
        unregistered supplier.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Returns and Deadlines Under Composition Scheme
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Return</th>
              <th className="border px-4 py-3 text-left">Frequency</th>
              <th className="border px-4 py-3 text-left">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">CMP-08</td>
              <td className="border px-4 py-3">Quarterly (tax payment)</td>
              <td className="border px-4 py-3">18th of month after quarter end</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">GSTR-4</td>
              <td className="border px-4 py-3">Annual return</td>
              <td className="border px-4 py-3">30 June, following the financial year</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        This is a fraction of the compliance load of the regular scheme,
        where GSTR-1 and GSTR-3B are filed every month. If your priority is
        keeping accounting simple rather than maximising ITC, that
        difference alone can be worth it.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        How to Opt In (or Out)
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        A new registration can opt for composition at the time of applying
        for GST registration itself. An existing regular taxpayer who wants
        to switch files Form CMP-02 on the GST portal, and it applies from
        the start of the following financial year — the general deadline is{" "}
        <strong>31 March</strong> for opting in from 1 April. If your
        turnover crosses the limit during the year, or you take up an
        activity that disqualifies you, you must exit the scheme immediately
        and move to regular GST from that point, not wait for year-end.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Is Composition Scheme Right for Your Business?
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        It tends to work well for small, local retailers, small manufacturers
        and neighbourhood restaurants with modest turnover, low purchase-side
        GST (so ITC loss doesn't sting much), and no need to sell inter-state
        or online. It tends to work poorly for businesses with high input
        costs, anyone planning to sell on marketplaces, and anyone whose
        B2B customers specifically want a GST tax invoice to claim their own
        ITC — composition dealers can't offer that.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Help Choosing or Switching Schemes
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates advises businesses in Ambala and
        across India on whether composition or regular GST fits their actual
        numbers, and handles the CMP-02 opt-in, CMP-08 quarterly filing and
        GSTR-4 annual return for composition dealers.{" "}
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
        CGST Act, 2017, related rules and current CBIC guidance as of
        September 2026. Turnover limits, rates and due dates can change —
        please verify the latest position or consult a professional before
        acting.
      </p>
    </>
  );
}
