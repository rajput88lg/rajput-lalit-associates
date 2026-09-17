import Link from "next/link";

const faqs = [
  {
    q: "Is GST charged on the entire flat value or only on the construction portion?",
    a: "GST applies to the construction service component of an under-construction sale (the effective 1%/5% rates already build in an assumed land-value abatement). Once the property is complete with an Occupancy Certificate, there's no GST at all, regardless of the split.",
  },
  {
    q: "Do I pay GST if I buy a resale (already occupied) flat?",
    a: "No — resale of an already-owned property is a sale of immovable property between individuals, entirely outside GST's scope. Stamp duty still applies.",
  },
  {
    q: "Can a builder pass on GST as an extra charge beyond the agreement value?",
    a: "GST on under-construction property should be part of the agreed sale consideration, not an unexpected add-on — this is worth confirming clearly in the builder-buyer agreement before signing.",
  },
  {
    q: "What if my flat meets the area limit but not the ₹45 lakh price limit?",
    a: "Both the area condition and the value condition generally need to be met together for the 1% affordable housing rate to apply — if the price exceeds ₹45 lakh, the property would typically fall under the 5% 'other residential' rate instead, even if the area qualifies.",
  },
  {
    q: "Does GST apply to plot/land purchase?",
    a: "Sale of land itself (without any construction service) is outside GST's scope — it's treated purely as a transfer of immovable property, subject to stamp duty, not GST.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GSTOnRealEstateUnderConstructionProperty() {
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
        One of the most common questions clients ask before buying property: why does the same-looking flat sometimes attract GST and sometimes not? The answer comes down to exactly one thing — whether construction is complete and an Occupancy Certificate has been issued at the time of sale.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Affordable housing (under construction): 1% GST, no ITC to builder</li>
          <li>Other residential flats (under construction): 5% GST, no ITC to builder</li>
          <li>Ready-to-move-in property with Occupancy Certificate: 0% GST — it isn't treated as a 'supply' at all</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        The Rate Structure
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Category</th>
              <th className="border px-4 py-3 text-left">GST Rate</th>
              <th className="border px-4 py-3 text-left">ITC to Builder</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">Affordable housing (under construction)</td>
                <td className="border px-4 py-3">1%</td>
                <td className="border px-4 py-3">Not available</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Other residential flats (under construction)</td>
                <td className="border px-4 py-3">5%</td>
                <td className="border px-4 py-3">Not available</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Ready-to-move-in (Occupancy Certificate issued)</td>
                <td className="border px-4 py-3">0%</td>
                <td className="border px-4 py-3">Not applicable</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Commercial property (under construction)</td>
                <td className="border px-4 py-3">12%</td>
                <td className="border px-4 py-3">Available</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        What Qualifies as 'Affordable Housing'
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Affordable housing status (the 1% rate) applies when the carpet area is up to 60 square metres in metro cities or up to 90 square metres in non-metro cities/towns, and the property value is up to ₹45 lakh — both conditions generally need to be satisfied together.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Why Ready-to-Move-In Property Has No GST at All
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        This surprises a lot of buyers: it's not a discount or exemption — a completed property with an Occupancy Certificate isn't legally treated as a 'supply of construction service' at all under GST. You're buying an already-existing immovable asset, which sits outside GST's scope entirely (stamp duty and registration charges still apply separately, under state law, regardless of construction status).
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Why Builders Can't Claim ITC on Residential Projects
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          No ITC Means the Cost Is Baked Into the Price
        </h3>
        <p className="text-gray-700 leading-8">
          Since GST paid on cement, steel, and other construction inputs cannot be claimed back as input tax credit for residential projects, builders factor that cost into the base selling price rather than passing it through as a separate line item. This is different from commercial property, where builders can claim ITC — one reason commercial projects sometimes price differently against comparable residential ones.
        </p>
      </div>


      <p className="text-gray-700 leading-8 mb-10">
        If you're a builder, developer, or buyer trying to work out the exact GST implication on a specific property or project structure, this is worth a proper review rather than assuming a standard rate applies. Rajput Lalit &amp; Associates advises on GST treatment for real estate transactions.{" "}<Link href="/#appointment" className={linkClass}>Book a free consultation</Link>.
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
        GST rates on real estate depend on project-specific classification and are subject to CBIC notification. This article reflects the commonly-applicable structure as of September 2026 — please get your specific property/project GST treatment confirmed by a professional.
      </p>
    </>
  );
}
