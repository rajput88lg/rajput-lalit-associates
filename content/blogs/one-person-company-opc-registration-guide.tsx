import Link from "next/link";

const faqs = [
  {
    q: "Can an OPC have more than one director?",
    a: "Yes — an OPC can appoint more than one director for day-to-day management, but it can only ever have one member (shareholder). Director count and member count are separate things.",
  },
  {
    q: "Is a nominee the same as a director?",
    a: "No. The nominee is the person who would step in as the member if something happens to the original sole member — they don't need to have any role in running the company unless separately appointed as a director.",
  },
  {
    q: "Can an NRI set up an OPC in India?",
    a: "Yes, since the 2021 amendment — NRIs meeting the (reduced) 120-day residency-in-preceding-year condition can now be a member or nominee of an OPC, which wasn't allowed under the earlier rules.",
  },
  {
    q: "Do I have to convert my OPC to a Pvt Ltd once my turnover grows?",
    a: "No — since the 2021 rule change, there's no mandatory conversion trigger tied to turnover or paid-up capital anymore. You can choose to convert voluntarily whenever it suits your business, such as when you want to bring in outside investors.",
  },
  {
    q: "What's the annual compliance burden for an OPC compared to a Pvt Ltd?",
    a: "Lighter in a few respects (for instance, an OPC is generally exempt from holding an AGM), but it still needs to file annual returns (MGT-7A) and financial statements (AOC-4) with the ROC each year, similar in substance to a small Pvt Ltd company.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function OnePersonCompanyOPCRegistrationGuide() {
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
        If you're a solo founder who wants limited liability and a separate legal entity, but doesn't want (or need) co-founders or shareholders, an OPC is worth understanding properly — it's one of the least-explained company structures despite being genuinely well-suited to exactly this situation.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Total cost typically ₹6,000-₹20,000+ with professional help, for authorized capital up to ₹15 lakh</li>
          <li>A nominee must be named at incorporation — mandatory, not optional</li>
          <li>Mandatory conversion to Pvt Ltd on crossing a turnover/capital limit was removed in 2021 — conversion is now voluntary</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Cost Breakdown
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Component</th>
              <th className="border px-4 py-3 text-left">Cost</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">SPICe+ filing fee (authorized capital up to ₹15 lakh)</td>
                <td className="border px-4 py-3">Nil</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Name reservation (if filed separately)</td>
                <td className="border px-4 py-3">₹1,000</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Digital Signature Certificate (Class 3)</td>
                <td className="border px-4 py-3">~₹2,500</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Stamp duty</td>
                <td className="border px-4 py-3">State-specific</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">PAN + TAN</td>
                <td className="border px-4 py-3">₹155</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Professional fees</td>
                <td className="border px-4 py-3">Starting ~₹1,999 + 18% GST, typically ₹6,000-₹20,000 all-in</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Eligibility &amp; the Mandatory Nominee
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Only a natural person who is an Indian citizen and a resident of India (having stayed in India for at least 120 days in the preceding financial year — this residency threshold was reduced from 182 days in 2021) can be a member or nominee of an OPC. Every OPC must name a nominee at the time of incorporation — someone who would become the member in case of the original member's death or incapacity. This is a legal requirement, not optional paperwork.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        What Changed in 2021 — No More Forced Conversion
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Conversion to Pvt Ltd Is Now Voluntary
        </h3>
        <p className="text-gray-700 leading-8">
          Earlier rules required an OPC to compulsorily convert to a private or public company once paid-up capital or average turnover crossed a specified limit. That mandatory trigger was removed by the Companies (Incorporation) Second Amendment Rules, 2021. Today, conversion to a Pvt Ltd company is entirely your choice, whenever it makes sense for your business — not something forced on you by a turnover threshold. The 2021 amendment also opened OPC formation to NRIs, which wasn't previously allowed.
        </p>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        OPC vs Private Limited — Quick Comparison
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>OPC: one member, mandatory nominee, simpler compliance, no ability to raise equity from investors (single shareholder structure)</li>
          <li>Pvt Ltd: minimum 2 shareholders and 2 directors, can raise funding from multiple investors, generally a better fit once you plan to bring in co-founders or external capital</li>
      </ul>


      <p className="text-gray-700 leading-8 mb-10">
        An OPC is a genuinely useful structure for a solo founder who wants limited liability without the complexity of multiple shareholders — but it's worth thinking through your 2-3 year plan before choosing it over a Pvt Ltd. Rajput Lalit &amp; Associates helps founders pick the right structure and handles registration end-to-end. See our{" "}<Link href="/company-registration" className={linkClass}>Company Registration service</Link>{" "}or{" "}<Link href="/#appointment" className={linkClass}>book a free consultation</Link>.
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
        OPC registration rules, fees, and compliance requirements are governed by the Companies Act, 2013 and its rules, and are subject to amendment. This article reflects the position as commonly understood as of September 2026 — please confirm current fees and eligibility with a professional before registering.
      </p>
    </>
  );
}
