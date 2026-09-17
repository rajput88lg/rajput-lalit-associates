import Link from "next/link";

const faqs = [
  {
    q: "When did the new GST 2.0 rate slabs take effect?",
    a: "22 September 2025. Any invoice raised on or after this date should reflect the new 0%/5%/18%/40% structure.",
  },
  {
    q: "Are the 12% and 28% slabs completely gone?",
    a: "Yes, as standard working slabs — items that were taxed at 12% or 28% have been reassigned into the 5%, 18% or 40% brackets depending on the category. A small number of special rates (like on gold/precious metals) may continue to sit outside this four-slab structure.",
  },
  {
    q: "Why is there a 40% slab now instead of 28% + cess?",
    a: "The 40% slab consolidates what used to be a 28% GST rate plus a separate compensation cess on luxury/sin goods into one straightforward number, mainly applying to tobacco, aerated drinks, and select luxury vehicles.",
  },
  {
    q: "My product's rate seems to have changed — how do I confirm the correct current rate?",
    a: "Cross-check your HSN/SAC code against the latest CBIC rate notification, or have your GST consultant verify it — classification disputes are common enough that a quick professional check before large billing runs is worth the time.",
  },
  {
    q: "Does this affect GST registration thresholds?",
    a: "No — the ₹40 lakh/₹20 lakh (goods/services) registration thresholds are unrelated to the rate slabs and have not changed because of GST 2.0.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GSTRates2026SlabListItemWise() {
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
        GST 2.0 was the biggest rate-structure overhaul since GST launched in 2017. Instead of four working slabs (5%, 12%, 18%, 28%) plus cess, the Council collapsed everything into a simpler four-tier system — and moved a large number of everyday items down a slab. If your invoicing, billing software, or price lists still reflect the old rates, this is worth checking immediately.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>GST 2.0 reduced the structure to 4 slabs: 0%, 5%, 18%, 40%</li>
          <li>Effective from 22 September 2025 — the old 12% and 28% slabs were removed</li>
          <li>40% is now reserved for luxury and 'sin' goods (tobacco, aerated drinks, high-end vehicles)</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        The Four Slabs (Effective 22 September 2025)
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Slab</th>
              <th className="border px-4 py-3 text-left">Typical Items</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">0% (Nil-rated)</td>
                <td className="border px-4 py-3">Maps, charts, globes, pencils, exercise books, notebooks, and other specified essentials</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">5%</td>
                <td className="border px-4 py-3">Hair oil, toothpaste, soap, milk, butter, ghee, utensils, packaged snacks, sanitary napkins</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">18% (Standard)</td>
                <td className="border px-4 py-3">Automobiles (most categories), electronic appliances, ACs, TVs above 32", apparel priced above ₹2,500</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">40% (Luxury/Sin)</td>
                <td className="border px-4 py-3">Aerated and carbonated beverages, tobacco products, pan masala, motorcycles above 350cc, personal-use aircraft</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        What Actually Changed
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        The earlier 12% and 28% slabs have been eliminated — items that sat in those brackets were reclassified, mostly moving down to 5% or 18%, with only genuinely luxury/sin categories pushed up to the new 40% slab. The stated intent was to simplify classification disputes (a large share of GST litigation historically involved arguing whether something belonged in 12% vs 18%, or 18% vs 28%) and to make everyday goods cheaper.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        What Small Businesses Need to Check Right Now
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>Update your billing/invoicing software's rate master — an invoice raised at an old, incorrect rate is a compliance problem, not just a pricing one</li>
          <li>Re-check your HSN/SAC code to rate mapping — reclassification can mean the same HSN code now attracts a different rate</li>
          <li>Review pending contracts/quotations that assumed the old rate structure</li>
          <li>If you deal in goods that moved from 28% to 18%, check whether accumulated ITC needs any adjustment</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        A Word of Caution
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Rates Get Revised — Verify Before You Price/Invoice
        </h3>
        <p className="text-gray-700 leading-8">
          GST rate notifications are amended periodically, and specific product classifications are sometimes clarified or corrected after the initial rollout. Before finalising pricing on a new product line or a large invoice, it's worth a quick verification against the current CBIC notification rather than relying on last year's rate card.
        </p>
      </div>


      <p className="text-gray-700 leading-8 mb-10">
        Getting your rate master wrong isn't a small mistake — it flows into every GSTR-1 and GSTR-3B you file afterward. Rajput Lalit &amp; Associates helps businesses re-map their rate structure after GST 2.0 and handles ongoing{" "}<Link href="/gst-return-filing" className={linkClass}>GST Return Filing</Link>.{" "}<Link href="/#appointment" className={linkClass}>Book a free consultation</Link>{" "}if you're unsure whether your current rates are correct.
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
        GST rate slabs are set by CBIC notification and can be amended. This article reflects the GST 2.0 structure as understood as of September 2026 — please verify the current rate for your specific HSN/SAC code on the GST portal or with a professional before invoicing.
      </p>
    </>
  );
}
