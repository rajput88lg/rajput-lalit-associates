import Link from "next/link";

const faqs = [
  {
    q: "What exactly is an HUF and why does it save tax?",
    a: "A Hindu Undivided Family (HUF) is a separate legal entity recognised under Indian law and tax law, with its own PAN and its own income tax return — distinct from the individual returns of its members. Income that genuinely belongs to the HUF (not income diverted from a member) gets taxed under the HUF's own slab rates and its own basic exemption limit, effectively giving the family a second set of tax slabs to work with.",
  },
  {
    q: "Who can be part of an HUF?",
    a: "Only Hindu, Jain, Sikh or Buddhist families can form an HUF. It needs at least two members — a single person can't form one. The senior-most member (traditionally male, but since the 2005 Hindu Succession Amendment, a woman can also be Karta) manages it as 'Karta'. Coparceners — sons and daughters equally, post-2005 — have a right to demand partition and inherit; other relatives like spouses are 'members' without that right.",
  },
  {
    q: "How do I actually form an HUF?",
    a: "Three steps: draft an HUF deed on stamp paper naming the Karta, coparceners and members and declaring the HUF's formation; apply for a separate PAN for the HUF (via NSDL/UTIITSL, using the deed and the Karta's ID); and open a bank account in the HUF's name using that PAN. An HUF often forms automatically on marriage/inheriting ancestral property in Hindu law, but you need the deed, PAN and bank account to actually use it for tax purposes.",
  },
  {
    q: "Can I just gift my own money to my HUF to save tax?",
    a: "No — this is the most common mistake. If a member transfers their own separately-earned money or property to the HUF without adequate consideration, the clubbing provisions kick in: income from that money is still taxed in the member's own hands, not the HUF's. Simply moving your salary or business income into an HUF bank account doesn't shift the tax liability — the HUF needs genuinely independent income (ancestral property, gifts from non-members like relatives-in-law or friends within limits, or income the HUF itself generates from its own assets).",
  },
  {
    q: "What are legitimate ways for an HUF to have its own income?",
    a: "Ancestral property (rental income, agricultural income), gifts received from people who are not members of that HUF (such as relatives from the other side of the family, subject to normal gift-tax rules), profits from a business genuinely run in the HUF's name, and returns on investments the HUF itself holds (shares, mutual funds, fixed deposits, real estate) once it has its own capital. Salary can never be assigned to an HUF — that stays taxed in the individual's hands regardless of any arrangement.",
  },
  {
    q: "Does an HUF get the same deductions and rebate as an individual?",
    a: "Mostly yes, with one key exception. Under the old tax regime, an HUF can claim Section 80C, 80D and most other common deductions just like an individual, plus its own ₹2,50,000 basic exemption. Under the new regime, the basic exemption is ₹4,00,000 but most deductions aren't available — same structure as for individuals. The one thing an HUF does NOT get is the Section 87A rebate, which for individuals effectively makes income up to a certain level tax-free — this rebate simply doesn't apply to HUFs.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function HUFHinduUndividedFamilyTaxBenefits() {
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
        An HUF is one of the few genuinely legal ways a Hindu, Jain, Sikh
        or Buddhist family can create a second taxpayer within the family
        — with its own PAN, its own return, and its own slab rates. Used
        correctly (with real HUF income, not just money moved around to
        dodge tax), it's a legitimate planning tool. Used incorrectly, the
        clubbing provisions make sure it saves nothing. Here's how it
        actually works.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>What it is:</strong> a separate legal/tax entity for
            Hindu, Jain, Sikh or Buddhist families — own PAN, own ITR
          </li>
          <li>
            <strong>Who runs it:</strong> Karta (manager) + coparceners
            (equal rights for sons and daughters since 2005) + members
          </li>
          <li>
            <strong>To form:</strong> HUF deed → separate PAN → HUF bank
            account
          </li>
          <li>
            <strong>Tax benefit:</strong> separate basic exemption + slabs
            (₹2.5L old regime / ₹4L new regime), most deductions available
          </li>
          <li>
            <strong>Key limitation:</strong> Section 87A rebate NOT
            available to HUFs; clubbing rules block gifting your own income
            into it to dodge tax
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Karta, Coparceners &amp; Members
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>
          <strong>Karta:</strong> manages the HUF's finances and legal
          affairs, typically the senior-most family member. Since the 2005
          Hindu Succession (Amendment) Act, a woman can also be Karta.
        </li>
        <li>
          <strong>Coparceners:</strong> have a legal right to demand
          partition of HUF property and to inherit it — sons and daughters
          (married or unmarried) have equal coparcenary rights since 2005.
        </li>
        <li>
          <strong>Members:</strong> other relatives (such as spouses of
          coparceners) who are part of the HUF but don't have partition
          rights.
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Forming an HUF — 3 Steps
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Step</th>
              <th className="border px-4 py-3 text-left">What's Needed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">1. HUF Deed</td>
              <td className="border px-4 py-3">Drafted on stamp paper, names Karta/coparceners/members, declares formation, signed by all adult members</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">2. Separate PAN</td>
              <td className="border px-4 py-3">Applied via NSDL/UTIITSL using the deed and Karta's identity/address proof</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">3. HUF Bank Account</td>
              <td className="border px-4 py-3">Opened in the HUF's name using its own PAN, operated by the Karta</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          The Mistake That Voids the Whole Benefit
        </h3>
        <p className="text-gray-700 leading-8">
          Gifting your own salary or business income into your HUF's bank
          account doesn't move the tax liability — clubbing provisions
          keep taxing that income in your own hands as the original
          earner, because the transfer was made without adequate
          consideration. An HUF only genuinely saves tax when it has
          income that's legitimately its own: ancestral property, gifts
          from people outside the HUF, or returns generated by assets the
          HUF already holds in its own name.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Where HUF Income Legitimately Comes From
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Rental or agricultural income from ancestral property</li>
        <li>Gifts received from people who are not members of that HUF</li>
        <li>Profits from a business genuinely operated in the HUF's name</li>
        <li>
          Investment returns (shares, mutual funds, FDs, property) on
          capital the HUF already owns
        </li>
      </ul>

      <p className="text-gray-700 leading-8 mb-10">
        Salary income can never be assigned to an HUF under any
        circumstance — it always stays taxable in the individual employee's
        hands.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Tax Slabs — What an HUF Gets and Doesn't
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        An HUF is taxed on the same slab structure as an individual, and
        can claim most of the same deductions under the old regime
        (Section 80C, 80D, and more) with its own separate ₹2,50,000 basic
        exemption; under the new regime, the exemption is ₹4,00,000 with
        most deductions unavailable — same as for individuals. The one
        significant exception: <strong>the Section 87A rebate does not
        apply to HUFs</strong>, so the effective "nil tax" benefit
        individuals get on income up to a certain level simply isn't
        available to an HUF's return.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        HUF Formation &amp; Tax Planning Support
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates helps families set up an HUF
        correctly — deed, PAN, and legitimate income structuring — and
        files HUF income tax returns.{" "}
        <Link href="/#appointment" className={linkClass}>
          Book a free consultation
        </Link>{" "}
        or see our{" "}
        <Link href="/income-tax-return-filing" className={linkClass}>
          Income Tax Return Filing service
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
        Disclaimer: This article is for general information based on Hindu
        law and income tax provisions applicable to HUFs as of September
        2026. Family structuring and clubbing-of-income rules are
        fact-specific — please consult a professional before setting up or
        transferring assets to an HUF.
      </p>
    </>
  );
}
