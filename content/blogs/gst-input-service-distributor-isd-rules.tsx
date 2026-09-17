import Link from "next/link";

const faqs = [
  {
    q: "Is ISD registration mandatory for every business with multiple GST registrations?",
    a: "It's mandatory specifically when there's common input service credit to distribute — i.e., an invoice for a service used across branches is received at one location but benefits others. If every branch only ever incurs its own separate expenses with no shared services, the trigger doesn't arise as often, but it's worth a professional review rather than assuming it doesn't apply.",
  },
  {
    q: "What happens if I don't register as an ISD when required?",
    a: "You risk being unable to legitimately distribute that credit to branches at all, exposure to interest and penalty on any credit wrongly claimed at the head office instead, and increased scrutiny in GST audits.",
  },
  {
    q: "Does ISD registration replace my branch's regular GST registration?",
    a: "No — ISD is a distinct registration type used only for credit distribution. Each branch still holds and uses its own regular GSTIN for its outward supplies and other input credits.",
  },
  {
    q: "Can an ISD distribute credit on goods, or only services?",
    a: "Only services. If common goods are procured and used across branches, that's typically handled through cross-charge (a deemed supply), not the ISD mechanism.",
  },
  {
    q: "What return does an ISD file, and how often?",
    a: "GSTR-6, filed monthly, due by the 13th of the following month — there's no annual-only option for ISD reporting.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GSTInputServiceDistributorISDRules() {
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
        If your business has branches or units registered under separate GSTINs but the same PAN — say, a head office in Ambala paying for a pan-India software subscription or a legal retainer used by every branch — you now have a compliance obligation you may not have had before. ISD registration used to be optional. It isn't anymore.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>ISD registration is mandatory (not optional) from 1 April 2025</li>
          <li>Applies to businesses with multiple GSTINs under the same PAN distributing common input service credit</li>
          <li>ISD must file GSTR-6 by the 13th of the following month</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        What an Input Service Distributor Actually Is
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        An ISD is a GST-registered office of your business (typically the head office) that receives invoices for input services used across multiple branches/units, and formally distributes the input tax credit on those services to the relevant branches — proportionate to their turnover or actual usage. It's a credit-distribution mechanism, not a separate taxable supply.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Why It Matters Now
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Until 1 April 2025, businesses often just "cross-charged" between branches informally, or distributed common credit loosely without a dedicated ISD registration. That's no longer an option: if you have multiple GSTINs under one PAN and any common input service is billed centrally, ISD registration is now compulsory for distributing that credit correctly.
      </p>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        ISD vs Cross-Charge — Don't Mix These Up
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left"></th>
              <th className="border px-4 py-3 text-left">ISD</th>
              <th className="border px-4 py-3 text-left">Cross-Charge</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-3">Applies to</td>
                <td className="border px-4 py-3">Input services only</td>
                <td className="border px-4 py-3">Goods and services (deemed supply between distinct persons)</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Mechanism</td>
                <td className="border px-4 py-3">Distributes existing credit, no fresh tax paid</td>
                <td className="border px-4 py-3">Treated as a supply — GST is charged and paid on the internal invoice</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Return</td>
                <td className="border px-4 py-3">GSTR-6</td>
                <td className="border px-4 py-3">Regular GSTR-1/GSTR-3B of the supplying branch</td>
              </tr>
          </tbody>
        </table>
      </div>


      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Compliance Once Registered
      </h2>

      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
          <li>File GSTR-6 every month by the 13th, listing ITC received and distributed</li>
          <li>Distribution must be proportionate — generally based on the turnover of each recipient unit in the preceding financial year</li>
          <li>Credit can only be distributed to units that are eligible to use it — an ISD cannot distribute credit to an exempt unit's ineligible portion</li>
      </ul>


      <p className="text-gray-700 leading-8 mb-10">
        If your firm operates from more than one GSTIN under the same PAN, this is worth checking before it becomes a notice rather than a choice. Rajput Lalit &amp; Associates helps multi-branch businesses set up ISD registration and manage the monthly GSTR-6 filing.{" "}<Link href="/#appointment" className={linkClass}>Book a free consultation</Link>{" "}or see our{" "}<Link href="/gst-registration" className={linkClass}>GST Registration service</Link>.
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
        ISD registration rules became mandatory under CGST Rules effective 1 April 2025. This article reflects the general framework as of September 2026 — specific applicability to your business structure should be confirmed with a GST professional.
      </p>
    </>
  );
}
