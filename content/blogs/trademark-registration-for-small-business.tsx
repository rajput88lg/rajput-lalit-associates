import Link from "next/link";

const faqs = [
  {
    q: "Can I use the TM symbol before my trademark is officially registered?",
    a: "Yes — the ™ symbol can be used immediately on any brand name, logo, or slogan the moment you start using it commercially, even before you file an application. It signals a common-law claim to the mark. The ® symbol is different: you can legally use it only after the registration certificate is actually issued. Using ® before registration is a punishable offence under the Trade Marks Act, 1999.",
  },
  {
    q: "How much does trademark registration cost?",
    a: "Government filing fee is ₹4,500 per class for individuals, startups, and MSMEs filing online (₹5,000 for physical filing), and ₹9,000 per class for companies, LLPs, and other entities (₹10,000 physical). This is per class — if your brand needs protection across multiple classes (e.g., both a product and related services), the fee multiplies accordingly. Filing fees are non-refundable regardless of outcome.",
  },
  {
    q: "How long does trademark registration actually take?",
    a: "Realistically 6-18 months if unopposed — examination takes about 1-3 months, then (if accepted) the mark is published in the Trade Marks Journal for a mandatory 4-month opposition window. If a third party files an opposition, the process can extend well beyond 2 years. You can start using ™ and building your brand immediately after filing; you don't have to wait for the certificate.",
  },
  {
    q: "Which trademark class should I file under?",
    a: "India follows the international NICE Classification system with 45 classes — Classes 1-34 cover goods (products), Classes 35-45 cover services. Protection applies strictly to the class(es) you register in, not to your business as a whole. A mark registered only in Class 25 (clothing) gives zero protection if a competitor uses a similar name for Class 42 (software services) — so it's worth thinking through every product/service line you currently offer or plan to soon.",
  },
  {
    q: "What if I never register my trademark — am I completely unprotected?",
    a: "Not completely, but your protection is much weaker. An unregistered mark can only rely on common law 'passing off' claims, which require proving your brand has built up genuine reputation and goodwill, and that the imitator is deceiving customers — a harder and costlier case to win than simply pointing to a registration certificate. A registered trademark gives you a presumption of ownership and a much stronger, faster legal remedy.",
  },
  {
    q: "Does trademark registration need to be renewed?",
    a: "Yes — a registered trademark is valid for 10 years from the registration date, and must be renewed (Form TM-R) to continue protection. It can be renewed indefinitely, in principle protecting your brand forever, but missing the renewal window means paying a surcharge, and if it lapses further, the mark may need to be restored or could become available for someone else to register.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function TrademarkRegistrationForSmallBusiness() {
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
        Many small businesses build a brand for years before realising
        someone else can legally register the same name first — and once
        that happens, undoing it is far harder (and costlier) than
        registering early would have been. Trademark registration is one
        of the most under-used protections available to small businesses
        in India, largely because the process and cost aren't well
        understood. Here's exactly what's involved.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>Cost:</strong> ₹4,500/class (individual/startup/MSME
            e-filing) or ₹9,000/class (others)
          </li>
          <li>
            <strong>Timeline:</strong> 6-18 months if unopposed; 2+ years
            if opposed
          </li>
          <li>
            <strong>Classes:</strong> 45 total — 1-34 goods, 35-45 services
          </li>
          <li>
            <strong>™ symbol:</strong> usable immediately; <strong>®
            symbol:</strong> only after registration certificate issues
          </li>
          <li>
            <strong>Validity:</strong> 10 years, renewable indefinitely
            (Form TM-R)
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Registration Process &amp; Fees
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Applicant Type</th>
              <th className="border px-4 py-3 text-left">E-filing Fee (per class)</th>
              <th className="border px-4 py-3 text-left">Physical Filing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Individual / Startup / MSME</td>
              <td className="border px-4 py-3">₹4,500</td>
              <td className="border px-4 py-3">₹5,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Company / LLP / Others</td>
              <td className="border px-4 py-3">₹9,000</td>
              <td className="border px-4 py-3">₹10,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        After filing (Form TM-A), the application goes through examination
        — the Registry checks for conflicts with existing marks and
        compliance with the Trade Marks Act. If the examiner raises an
        objection, you get 30 days to respond; missing this can abandon
        your application entirely. Once accepted, the mark is published in
        the Trade Marks Journal for a mandatory 4-month opposition window,
        during which anyone can formally object. If nobody opposes, the
        registration certificate follows.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Choosing the Right Class Matters More Than the Filing Itself
        </h3>
        <p className="text-gray-700 leading-8">
          Trademark protection applies strictly to the class(es) you
          register under — not to your business or brand as a whole.
          India uses the international NICE Classification of 45 classes
          (1-34 for goods, 35-45 for services). A mark registered only for
          clothing (Class 25) gives you zero legal ground against someone
          using a similar name for software services (Class 42). Think
          through every product and service line — current and
          reasonably near-future — before filing, since adding a class
          later means a fresh application and fresh fee.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Why Registered Protection Beats Staying Unregistered
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        An unregistered brand isn't completely without recourse — you can
        still pursue a common-law "passing off" claim — but this requires
        proving your brand has built genuine market reputation and that a
        competitor is actively deceiving customers, which is a slower and
        costlier fight than simply presenting a registration certificate. A
        registered trademark gives you a legal presumption of ownership,
        the right to use ®, and a much faster route to an injunction
        against infringers.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Trademark Registration Support
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates helps small businesses choose the
        right classes, file trademark applications, and respond to
        examination objections.{" "}
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
        Trade Marks Act, 1999 and current Trade Marks Registry fee
        schedules, as of September 2026. Fees, timelines, and procedures
        are subject to periodic revision — please verify the current
        position on the IP India portal or consult a professional before
        relying on it.
      </p>
    </>
  );
}
