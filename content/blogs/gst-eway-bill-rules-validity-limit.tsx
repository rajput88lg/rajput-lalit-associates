import Link from "next/link";

const faqs = [
  {
    q: "What is the minimum value for which an e-way bill is required?",
    a: "₹50,000 is the standard national threshold for inter-state movement of goods. For movement within the same state, several states have set a higher threshold under their own rules — for example ₹1 lakh in Maharashtra, Tamil Nadu, Bihar and Madhya Pradesh, and up to ₹2 lakh within city limits in Rajasthan. Haryana follows the standard ₹50,000 limit for intra-state movement too, so check your specific state's rule before assuming a higher limit applies.",
  },
  {
    q: "How long is an e-way bill valid?",
    a: "For normal (non-over-dimensional) cargo, validity is 1 day for every 200 km or part thereof, counted from the time Part B (vehicle details) is entered. So a consignment travelling 450 km needs 3 days' validity. The clock starts fresh each time you re-generate or extend the e-way bill.",
  },
  {
    q: "Who is responsible for generating the e-way bill — the supplier or the transporter?",
    a: "Whoever causes the movement of goods. In practice this is usually the registered supplier (Part A), who then either enters vehicle details themselves (Part B) or authorises the transporter to do so. If neither the supplier nor recipient generates it, the transporter carrying goods worth more than the threshold must generate it before starting the movement.",
  },
  {
    q: "Do I need an e-way bill for goods sent for job work or on a delivery challan?",
    a: "Yes. E-way bill rules apply to any movement of goods above the threshold value regardless of whether it's a sale — job work, stock transfers between your own branches, goods sent on approval, and exhibition stock all require one, generated against a delivery challan where there's no tax invoice yet.",
  },
  {
    q: "What happens if goods are transported without a valid e-way bill?",
    a: "The vehicle can be detained and the goods seized under Section 129 of the CGST Act. Release typically requires payment of the applicable tax plus a penalty (generally 100% of the tax amount, or a fixed sum for exempted goods), on top of the commercial disruption of a stopped shipment. Keeping e-way bills current for every eligible consignment is far cheaper than a roadside detention.",
  },
  {
    q: "Can an e-way bill be cancelled or edited after it is generated?",
    a: "It can be cancelled within 24 hours of generation if the goods weren't transported or details were entered wrong — but only if it hasn't already been verified in transit by an officer. Part B (vehicle number) can be updated multiple times during the validity period if the vehicle changes en route. The core Part A details (invoice, value, parties) cannot be edited once generated; you'd need to cancel and create a fresh one.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GSTEwayBillRulesValidityLimit() {
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
        If your business moves goods worth more than ₹50,000 — by truck,
        rail, air or courier — an e-way bill is usually required before the
        vehicle leaves. Get it wrong and the consequence isn't a warning
        letter later; it's your goods stopped and seized on the highway,
        right now. Here's exactly when it's required, how long it stays
        valid, and the state-specific limits that catch businesses off
        guard.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>National threshold:</strong> ₹50,000 per consignment for
            inter-state movement of goods
          </li>
          <li>
            <strong>Intra-state (within one state):</strong> varies by
            state — some states set a higher limit, Haryana follows ₹50,000
          </li>
          <li>
            <strong>Validity:</strong> 1 day for every 200 km (or part
            thereof) of travel distance
          </li>
          <li>
            <strong>Two parts:</strong> Part A (invoice/value/parties) and
            Part B (vehicle number) — both needed before the goods move
          </li>
          <li>
            <strong>Non-compliance:</strong> detention of vehicle, seizure of
            goods, tax + penalty to release them
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        When Is an E-Way Bill Required?
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        An e-way bill is mandatory whenever the value of a consignment of
        goods being moved exceeds the applicable threshold — and this
        applies far more broadly than just to sales:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Sale of goods (against a tax invoice)</li>
        <li>
          Stock transfer between your own branches or godowns, even within
          the same state
        </li>
        <li>Goods sent for job work and returned after processing</li>
        <li>Goods sent on approval basis, or for exhibition/fairs</li>
        <li>Sales returns above the threshold value</li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Where there's no tax invoice yet (job work, branch transfer, goods
        on approval), the e-way bill is generated against a delivery
        challan instead.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Threshold Limits — National vs State
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Movement Type</th>
              <th className="border px-4 py-3 text-left">Threshold</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Inter-state (across state borders)</td>
              <td className="border px-4 py-3">₹50,000 — uniform across India</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Intra-state — Haryana, Gujarat, West Bengal, most north-eastern states</td>
              <td className="border px-4 py-3">₹50,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Intra-state — Maharashtra, Tamil Nadu, Bihar, Jharkhand, Madhya Pradesh</td>
              <td className="border px-4 py-3">₹1,00,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Intra-state — Rajasthan</td>
              <td className="border px-4 py-3">₹2,00,000 within city limits, ₹1,00,000 between cities</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        State-level intra-state limits change from time to time, so if
        you're moving goods only within a state (not crossing a state
        border), it's worth confirming the current limit for that state
        rather than assuming ₹50,000 applies everywhere. For any movement
        that crosses a state border, ₹50,000 is the number to work with,
        no exceptions.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          For Businesses in Ambala and Haryana
        </h3>
        <p className="text-gray-700 leading-8">
          Since Haryana applies the standard ₹50,000 threshold for
          movement within the state as well, most local businesses end up
          needing an e-way bill for nearly every meaningful shipment — not
          just for goods leaving the state. It's worth building e-way bill
          generation into your regular billing process rather than treating
          it as a separate, easily-forgotten step.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Validity Period — How Long Before It Expires
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Distance</th>
              <th className="border px-4 py-3 text-left">Validity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Up to 200 km</td>
              <td className="border px-4 py-3">1 day</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">201–400 km</td>
              <td className="border px-4 py-3">2 days</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">401–600 km</td>
              <td className="border px-4 py-3">3 days</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Every additional 200 km (or part)</td>
              <td className="border px-4 py-3">+1 day</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        Validity is counted from the time Part B (vehicle number) is
        entered, not from when Part A was created. If a shipment genuinely
        can't reach its destination in time (breakdown, traffic, natural
        causes), the validity can be extended on the portal before it
        lapses — extending after expiry isn't possible, so this needs to be
        done proactively.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Part A and Part B — What Goes Where
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>
          <strong>Part A:</strong> GSTIN of supplier and recipient, place of
          delivery, invoice/challan number and date, value of goods, HSN
          code, and reason for transportation
        </li>
        <li>
          <strong>Part B:</strong> vehicle number (for road transport) or
          transporter ID, transport document number
        </li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        An e-way bill isn't complete — and isn't valid for movement — until
        both parts are filled. A common mistake is generating Part A well
        in advance and forgetting to add Part B before the truck actually
        leaves.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        When an E-Way Bill Is NOT Required
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Goods transported by a non-motorised conveyance (e.g. handcart)</li>
        <li>
          Movement from port/airport/customs station to an inland container
          depot or container freight station for customs clearance
        </li>
        <li>Goods specified as exempt from e-way bill in the exempted goods list (includes most fresh fruits, vegetables, and certain other specified items)</li>
        <li>
          Movement within a state up to a distance the state itself
          exempts (some states waive Part B for very short local
          movements — check your state's specific notification)
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        E-Way Bill and GST Compliance Support
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates helps businesses in Ambala and across
        India set up correct e-way bill and e-invoicing processes alongside
        regular GST return filing, so shipments don't get held up over
        paperwork.{" "}
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
        CGST Rules, 2017 (e-way bill provisions under Rule 138) and
        state-specific notifications as of September 2026. Intra-state
        thresholds and exemptions vary by state and are revised from time
        to time — please verify the current limit for your state or
        consult a professional before relying on a specific figure.
      </p>
    </>
  );
}
