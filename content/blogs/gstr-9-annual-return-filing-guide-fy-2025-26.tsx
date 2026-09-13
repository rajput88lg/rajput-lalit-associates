import Link from "next/link";

const faqs = [
  {
    q: "What is the due date for GSTR-9 for FY 2025-26?",
    a: "31 December 2026. This is the annual return covering all outward and inward supplies, tax paid, and input tax credit claimed during FY 2025-26 (1 April 2025 to 31 March 2026).",
  },
  {
    q: "Is GSTR-9 mandatory for my business?",
    a: "It is mandatory only if your aggregate turnover in FY 2025-26 exceeded ₹2 crore. Below that, filing is optional — CBIC has continued this exemption for small taxpayers through Notification No. 15/2025-Central Tax, dated 17 September 2025, under the first proviso to Section 44(1) of the CGST Act. You can still file voluntarily even if you're below the threshold, and once you start filing GSTR-9 you generally shouldn't skip it in a later year without good reason, since it affects your compliance record.",
  },
  {
    q: "Do I also need to file GSTR-9C?",
    a: "Only if your aggregate turnover in FY 2025-26 exceeded ₹5 crore. GSTR-9C is a reconciliation statement matching your GSTR-9 figures against your audited financial statements. It is filed alongside GSTR-9, by the same 31 December 2026 due date.",
  },
  {
    q: "Do I need a CA to certify GSTR-9C?",
    a: "No — and this trips up a lot of taxpayers who remember the older rule. Since FY 2020-21, GSTR-9C is self-certified by the taxpayer, not certified by a Chartered Accountant or Cost Accountant. A CA can still prepare it for you (most businesses use one, given the reconciliation work involved), but the mandatory third-party certification requirement was removed years ago.",
  },
  {
    q: "What is the late fee for missing the GSTR-9 due date?",
    a: "₹200 per day of delay (₹100 under CGST plus ₹100 under SGST), capped at 0.25% of your turnover in the relevant state or Union Territory. There is no separate late fee prescribed for GSTR-9C itself — since it cannot be filed before GSTR-9, any delay effectively only accrues the GSTR-9 late fee.",
  },
  {
    q: "Who is exempt from filing GSTR-9 altogether, regardless of turnover?",
    a: "Composition scheme taxpayers (who file GSTR-4 instead, due 30 June following the financial year), casual taxable persons, input service distributors, non-resident taxable persons, persons paying TDS under Section 51 of the CGST Act, and e-commerce operators collecting TCS under Section 52.",
  },
  {
    q: "What happens if I never filed GSTR-9 for an old financial year?",
    a: "There is now a hard cut-off. Under the GST return time-bar rule (Sections 37, 39, 44 and 52 of the CGST Act, enforced on the portal from the July 2025 tax period), any return — including GSTR-9 — becomes permanently unfileable once three years pass from its original due date. For FY 2022-23, whose GSTR-9 was due 31 December 2023, that three-year window closes on 31 December 2026 — the same date the FY 2025-26 GSTR-9 is due. If you have a pending GSTR-9 from FY 2022-23, this is effectively your last chance.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GSTR9AnnualReturnFilingGuideFY202526() {
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
        GSTR-9, the annual GST return, brings together an entire financial
        year of GSTR-1 and GSTR-3B filings into one consolidated statement.
        For FY 2025-26, the due date is <strong>31 December 2026</strong> —
        and this year, that date carries an extra deadline for anyone with an
        old pending annual return. Here is who must file, who is exempt, what
        it costs to be late, and why waiting until December is riskier than
        usual this time.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>Due date (FY 2025-26):</strong> 31 December 2026
          </li>
          <li>
            <strong>GSTR-9 mandatory if:</strong> aggregate turnover exceeded
            ₹2 crore in FY 2025-26 (optional below that)
          </li>
          <li>
            <strong>GSTR-9C mandatory if:</strong> aggregate turnover exceeded
            ₹5 crore — self-certified, no CA/CMA certificate required
          </li>
          <li>
            <strong>Late fee:</strong> ₹200/day (₹100 CGST + ₹100 SGST),
            capped at 0.25% of turnover in the state/UT
          </li>
          <li>
            <strong>Exempt:</strong> composition taxpayers (file GSTR-4
            instead), casual taxable persons, ISDs, non-resident taxable
            persons, TDS deductors (Sec 51), e-commerce TCS collectors (Sec
            52)
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Who Must File GSTR-9 for FY 2025-26?
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        Under Section 44 of the CGST Act, 2017, every registered person is
        required to file an annual return — but CBIC has, every year since
        the early years of GST, notified an exemption for smaller taxpayers.
        For FY 2025-26, that exemption continues via{" "}
        <strong>Notification No. 15/2025-Central Tax (17 September 2025)</strong>:
      </p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">
                Aggregate Turnover (FY 2025-26)
              </th>
              <th className="border px-4 py-3 text-left">GSTR-9</th>
              <th className="border px-4 py-3 text-left">GSTR-9C</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">Up to ₹2 crore</td>
              <td className="border px-4 py-3">Optional</td>
              <td className="border px-4 py-3">Not applicable</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Above ₹2 crore, up to ₹5 crore</td>
              <td className="border px-4 py-3">Mandatory</td>
              <td className="border px-4 py-3">Not applicable</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">Above ₹5 crore</td>
              <td className="border px-4 py-3">Mandatory</td>
              <td className="border px-4 py-3">Mandatory (self-certified)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        "Aggregate turnover" here is your PAN-level turnover across all GST
        registrations, all-India — not just the turnover under one GSTIN. A
        business with a smaller Ambala registration but a bigger combined
        PAN-level turnover across states can still cross these thresholds.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Who Is Exempt From GSTR-9 Regardless of Turnover?
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        A few categories of registered persons don't file GSTR-9 at all, no
        matter how large their turnover is — because their compliance track
        runs through a different return entirely:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>
          <strong>Composition scheme taxpayers</strong> — they file{" "}
          <strong>GSTR-4</strong> as their annual return instead, due{" "}
          <strong>30 June</strong> following the financial year (30 June 2026
          for FY 2025-26). GSTR-9A, the older composition annual return form,
          was scrapped from FY 2019-20 onward.
        </li>
        <li>Casual taxable persons</li>
        <li>Input Service Distributors (ISD)</li>
        <li>Non-resident taxable persons</li>
        <li>Persons required to deduct TDS under Section 51 of the CGST Act</li>
        <li>E-commerce operators required to collect TCS under Section 52</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        GSTR-9C — The Reconciliation Statement
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        If your turnover crossed ₹5 crore, GSTR-9C reconciles the figures in
        your GSTR-9 against your audited (or otherwise finalised) financial
        statements — turnover, tax paid, and input tax credit. The rule most
        people get wrong here:
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Myth: "GSTR-9C needs a CA's certificate"
        </h3>
        <p className="text-gray-700 leading-8">
          Not since FY 2020-21. GSTR-9C is now <strong>self-certified by
          the taxpayer</strong> — the mandatory Chartered Accountant / Cost
          Accountant certification was removed by an amendment that took
          effect from FY 2020-21 onward. In practice, most businesses still
          engage a CA to prepare the reconciliation given how detailed it is,
          but the law no longer requires a third-party certificate.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Late Fee for Missing the GSTR-9 Due Date
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        Section 47 of the CGST Act prescribes a late fee of{" "}
        <strong>₹100 per day under CGST plus ₹100 per day under SGST</strong>{" "}
        — ₹200 per day in total — from the day after the due date until the
        return is actually filed. This is capped at{" "}
        <strong>0.25% of your turnover</strong> in the relevant state or
        Union Territory (so 0.25% under CGST and 0.25% under SGST — 0.5% of
        turnover in total, at the outer limit). No separate late fee is
        prescribed specifically for GSTR-9C — since it can only be filed
        alongside or after GSTR-9, the GSTR-9 late fee is what applies in
        practice.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">Example</h3>
        <p className="text-gray-700 leading-8">
          If your GSTR-9 (due 31 December 2026) is actually filed on 20
          January 2027, that's 20 days of delay. Late fee = 20 × ₹200 =
          ₹4,000, subject to the 0.25%-of-turnover cap on each side (CGST and
          SGST).
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Why 31 December 2026 Is a Double Deadline This Year
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        Since the GSTN portal began enforcing the GST return time-bar rule
        (from the July 2025 tax period, covering returns under Sections 37,
        39, 44 and 52 of the CGST Act — GSTR-1, GSTR-3B, GSTR-9 and others),
        any return that crosses <strong>three years past its original due
        date</strong> becomes permanently blocked from filing on the portal.
        No exceptions are made after the window closes.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        GSTR-9 for FY 2022-23 was due on 31 December 2023. Three years later
        — <strong>31 December 2026</strong> — is exactly when that window
        shuts. If you (or a business you advise) still has an unfiled GSTR-9
        from FY 2022-23, this is genuinely the last opportunity to file it,
        on the very same date the new FY 2025-26 return falls due. If this
        applies to you, treat it as more urgent than the current year's
        filing and get it done first.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Getting Ready to File — What to Reconcile First
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>Match your books' turnover against the total of all GSTR-1s and GSTR-3Bs filed for the year</li>
        <li>Reconcile input tax credit claimed in GSTR-3B against GSTR-2B / IMS-accepted invoices</li>
        <li>Capture any amendments made between April and November 2026 relating to FY 2025-26 supplies in the annual return's amendment tables</li>
        <li>Check HSN-wise summary requirements apply correctly at your turnover level</li>
        <li>If turnover crossed ₹5 crore, start the GSTR-9C reconciliation early — it takes longer than most people expect</li>
        <li>Don't wait for late December — a rushed filing close to the deadline is where most reconciliation errors happen</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        GSTR-9 Filing Help
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates handles GSTR-9 and GSTR-9C preparation
        and filing — reconciliation against books, GSTR-1/3B and GSTR-2B,
        amendment reporting, and the full annual return — for businesses
        across India, with in-person support for clients in Ambala.{" "}
        <Link href="/#appointment" className={linkClass}>
          Book a consultation
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
        CGST Act, 2017, related rules and CBIC notifications as of September
        2026. Rules, thresholds and portal processes change from time to
        time, so please verify the latest position or consult a professional
        before acting.
      </p>
    </>
  );
}
