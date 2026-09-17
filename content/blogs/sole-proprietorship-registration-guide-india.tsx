import Link from "next/link";

const faqs = [
  {
    q: "Do I need GST registration to start a proprietorship?",
    a: "Not immediately, if your turnover is below the threshold and you're not selling inter-state or through e-commerce. Many small local proprietorships operate without GST registration until they cross ₹40 lakh (goods) or ₹20 lakh (services) turnover.",
  },
  {
    q: "Can I open a current account without any registration?",
    a: "Most banks require at least one proof of business existence — typically a GST certificate or Shop & Establishment license — to open a current account in your trade name, rather than just your personal savings account.",
  },
  {
    q: "What's the difference between a proprietorship and an OPC?",
    a: "A proprietorship has no legal separation from you personally (unlimited liability); an OPC (One Person Company) is a separate legal entity with limited liability, at the cost of more compliance and cost. See our OPC registration guide for the comparison.",
  },
  {
    q: "Can a proprietorship have employees?",
    a: "Yes — there's no restriction on hiring employees as a sole proprietor. You'll need to handle TDS on salary, PF/ESI registration if applicable thresholds are crossed, and Shop & Establishment compliance around working hours/leave.",
  },
  {
    q: "How do I close a proprietorship?",
    a: "There's no formal 'dissolution' filing the way there is for a company — you cancel your GST registration, close the business bank account, and settle outstanding liabilities. Since there's no separate legal entity, there's nothing further to formally wind up beyond that.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function SoleProprietorshipRegistrationGuideIndia() {
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
        This is one of the most common misunderstandings we see from first-time entrepreneurs — there's no separate government body issuing a "proprietorship registration certificate." A proprietorship is simply you, doing business under a trade name; what actually gets registered are the licenses and registrations that let you operate and open a current account.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>There's no single 'proprietorship registration' certificate — it's established through GST/Shop Act/Udyam registration</li>
          <li>Simplest and cheapest business structure to start — but with unlimited personal liability</li>
          <li>Business income is reported in the proprietor's own personal ITR (ITR-3 or ITR-4)</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        What Actually Establishes Your Proprietorship
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>GST Registration — mandatory once turnover crosses the threshold (₹40 lakh goods/₹20 lakh services in most states), or if you want to sell inter-state/online regardless of turnover</li>
          <li>Shop &amp; Establishment Act registration/license — required in most states for any commercial establishment, including home-based and online businesses in several states</li>
          <li>MSME Udyam Registration — optional but highly recommended (covered in our separate MSME guide) — unlocks priority-sector loans, delayed-payment protection, and various government scheme benefits</li>
          <li>A current account in the business's trade name — banks typically ask for GST certificate or Shop Act license as proof of business existence to open this</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Documents You'll Need
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>Proprietor's PAN and Aadhaar</li>
          <li>Business address proof (rent agreement + electricity bill, or ownership documents)</li>
          <li>Passport-size photograph</li>
          <li>Bank account details (or a cancelled cheque once the current account is open)</li>
      </ul>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        The One Thing to Understand Before You Start — Unlimited Liability
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          No Legal Separation Between You and the Business
        </h3>
        <p className="text-gray-700 leading-8">
          This is the single biggest trade-off of a proprietorship: there's no legal distinction between you and your business. If the business runs into debt or a legal claim, your personal assets — savings, property — are on the line, not just what's invested in the business. This is precisely why businesses with meaningful risk, external investors, or growth ambitions usually move to an LLP or Private Limited structure once they outgrow the simplicity phase.
        </p>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        How Proprietorship Income Is Taxed
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        There's no separate entity-level tax return — your business income is simply reported as "Profits and Gains from Business or Profession" in your own personal income tax return (ITR-3 if you maintain full books, or ITR-4 if you opt for presumptive taxation under Section 44AD/44ADA). Business income is taxed at your individual slab rate, not a flat corporate rate.
      </p>


      <p className="text-gray-700 leading-8 mb-10">
        A proprietorship is genuinely the right starting point for many small, low-risk businesses — the key is knowing when it's time to move to a structure with liability protection. Rajput Lalit &amp; Associates helps set up proprietorships, LLPs, and companies, and advises on when it's time to change structure. See our{" "}<Link href="/gst-registration" className={linkClass}>GST Registration service</Link>{" "}or{" "}<Link href="/#appointment" className={linkClass}>book a free consultation</Link>.
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
        Proprietorship registration requirements (GST, Shop &amp; Establishment Act, Udyam) vary by state and are subject to change. This article reflects the general framework as of September 2026 — please confirm specific state requirements with a professional.
      </p>
    </>
  );
}
