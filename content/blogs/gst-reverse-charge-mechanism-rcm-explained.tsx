import Link from "next/link";

const faqs = [
  {
    q: "Do I have to pay RCM on every purchase from an unregistered supplier?",
    a: "No — this is a common misconception. RCM on unregistered purchases applies only to specific, notified categories, not as a blanket rule on every single unregistered vendor. Most day-to-day purchases from small unregistered vendors don't automatically trigger RCM.",
  },
  {
    q: "Can I use my existing ITC balance to pay RCM liability?",
    a: "No. RCM must be paid in cash through the electronic cash ledger — you cannot offset it against your existing input tax credit balance, even if that balance is sufficient.",
  },
  {
    q: "Is GST on imported services always under RCM?",
    a: "Yes — import of services from a supplier located outside India is squarely under RCM, and the Indian recipient must self-invoice and pay IGST, regardless of the value, unless a specific exemption applies.",
  },
  {
    q: "If I pay RCM, can I claim it back as ITC in the same month?",
    a: "Generally yes, subject to normal ITC eligibility conditions (the expense must relate to your business, not be a blocked credit under Section 17(5), etc.). It's reported and claimed through GSTR-3B in the same return period it was paid.",
  },
  {
    q: "Does a company have to pay RCM on director remuneration?",
    a: "RCM applies specifically to services rendered by a director in a personal/professional capacity outside their role as an employee — salary paid to a whole-time director as an employee is a different matter and generally outside GST altogether. This distinction is worth getting a professional opinion on for your specific arrangement.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GSTReverseChargeMechanismRCMExplained() {
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
        Normally, the supplier collects GST from you and deposits it with the government. Reverse Charge Mechanism flips that — for a specific, notified list of goods and services, you (the recipient) are the one legally responsible for paying GST directly, even though you're the buyer, not the seller.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Under RCM, the recipient pays GST directly to the government instead of the supplier</li>
          <li>Common categories: GTA freight, legal services from advocates, director's fees, imported services</li>
          <li>ITC on RCM tax paid is generally available in the same period, subject to normal conditions</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Main Categories Covered Under RCM
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>Goods Transport Agency (GTA) services — road freight, where the GTA hasn't charged GST itself (GTAs can choose 5% without ITC or 12% with ITC; if they opt for 5%, RCM applies and the recipient pays)</li>
          <li>Legal services from an individual advocate, senior advocate, or a firm of advocates, to a business</li>
          <li>Services rendered by a company's directors in their personal/professional capacity to that company</li>
          <li>Insurance agent services provided to an insurance company</li>
          <li>Recovery agent services provided to banks, NBFCs, or financial institutions</li>
          <li>Import of services from a supplier located outside India</li>
          <li>Purchases from an unregistered supplier, in specific notified categories only (this is not a blanket rule for all unregistered purchases)</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Who Actually Pays, and How
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        The recipient of the service self-invoices (since the supplier, being unregistered or specifically exempted, doesn't issue a GST invoice), calculates GST at the applicable rate, and pays it directly through the electronic cash ledger — this can't be paid using existing input tax credit; RCM liability must be discharged in cash.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        ITC on RCM — Yes, You Can Claim It Back
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        This is the part people often miss: tax paid under RCM is reported in Table 3.1(d) of GSTR-3B, and once paid, it's generally available as input tax credit in the same period — subject to the same eligibility conditions as any other ITC (the service must be used for business purposes, not blocked under Section 17(5), etc.). So for most businesses, RCM is largely a cash-flow timing issue, not a real additional cost, as long as the credit is actually usable.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Common Mistake to Avoid
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          RCM Doesn't Appear on a Supplier Invoice — That's the Point
        </h3>
        <p className="text-gray-700 leading-8">
          Because the supplier (e.g., an advocate or an unregistered GTA) doesn't charge GST on their invoice, businesses sometimes simply skip GST entirely on that expense. That's the mistake — RCM liability exists independently of what the supplier billed, and it's the recipient's own compliance obligation to self-invoice and pay it.
        </p>
      </div>


      <p className="text-gray-700 leading-8 mb-10">
        RCM is easy to miss precisely because there's no supplier invoice pointing to it. Rajput Lalit &amp; Associates reviews expense heads during monthly GST filing specifically to catch RCM liability before it becomes a notice. See our{" "}<Link href="/blog/gst-audit-assessment-types-notice" className={linkClass}>GST Audit &amp; Assessment guide</Link>{" "}or{" "}<Link href="/#appointment" className={linkClass}>book a free consultation</Link>.
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
        The RCM list of goods and services is notified by the government and revised periodically. This article reflects the commonly-applicable RCM categories as of September 2026 — please verify the current notified list for your specific transaction with a GST professional before treatment.
      </p>
    </>
  );
}
