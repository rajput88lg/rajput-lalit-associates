import Link from "next/link";

const structureRows = [
  { metric: "Sections", old: "819", now: "536" },
  { metric: "Schedules", old: "14", now: "16" },
  { metric: "Income-tax Rules", old: "511", now: "333" },
  { metric: "Forms", old: "399", now: "190" },
];

const sectionMap = [
  { topic: "Charge of income-tax", old: "Section 4", now: "Section 4" },
  { topic: "Residential status", old: "Section 6", now: "Section 6" },
  { topic: "Exemptions (incomes not included in total income)", old: "Section 10", now: "Section 11" },
  { topic: "Deductions — LIC, PF, tuition fee etc.", old: "Section 80C", now: "Section 123" },
  { topic: "Deduction — health insurance premium", old: "Section 80D", now: "Section 126" },
  { topic: "Rebate for income up to ₹12 lakh (new regime)", old: "Section 87A", now: "Section 156" },
  { topic: "New tax regime (now the default regime)", old: "Section 115BAC", now: "Section 202" },
  { topic: "Return of income", old: "Section 139", now: "Section 263" },
  { topic: "Capital gains — computation & exemptions", old: "Sections 45–55A", now: "Sections 67–91" },
  { topic: "TDS on salary", old: "Section 192", now: "Section 392" },
  { topic: "TDS on payments to non-residents", old: "Section 195", now: "Section 393(2)" },
  { topic: "Lower/Nil TDS Certificate", old: "Section 197 / Form 13", now: "Section 395 / Form 128" },
];

const faqs = [
  {
    q: "Has the Income-tax Act, 1961 been completely scrapped?",
    a: "Yes. The Income-tax Act, 2025 received the President's assent on 21 August 2025 and replaces the 1961 Act with effect from 1 April 2026. However, the 1961 Act continues to apply for any income earned before that date — including the return you file in 2026 for FY 2025-26.",
  },
  {
    q: "Will my tax rate or deductions change because of this new Act?",
    a: "Not on their own. The Income-tax Act, 2025 is officially described as a simplification and consolidation exercise — the government has stated it does not change tax incidence. Slab rates, deduction limits and exemption amounts stay whatever they were under the last applicable Finance Act; the new Act only renumbers and reorganises the law, and removes redundant provisions.",
  },
  {
    q: "What does 'Tax Year' mean, and does it change my filing deadlines?",
    a: "Tax Year is a single 12-month period (1 April to 31 March) that replaces both 'Previous Year' (when you earned the income) and 'Assessment Year' (when you file and pay tax on it) with one number. For example, income earned between 1 April 2026 and 31 March 2027 is simply 'Tax Year 2026-27' — there is no separate assessment year to track. This is a naming simplification only; it does not change due dates or the manner of filing.",
  },
  {
    q: "Which return does the new Act apply to — the one I file in 2026 or 2027?",
    a: "The return you file in 2026 for income earned in FY 2025-26 (AY 2026-27) is still governed entirely by the Income-tax Act, 1961 — old section numbers apply. The Income-tax Act, 2025 applies for the first time to income earned from 1 April 2026 onward (Tax Year 2026-27), which you will file in 2027. Most individual taxpayers will not deal with the new Act's numbering until their next filing season.",
  },
  {
    q: "Why did section numbers change if the tax rules stayed the same?",
    a: "The 1961 Act had grown to 819 sections and 14 schedules over 60+ years of amendments, provisos and explanations bolted on piecemeal. The 2025 Act restructures this into 536 sections and 16 schedules, merges explanations and provisos into plain main-text language, and uses tables instead of dense paragraphs — making the law shorter and easier to read, even though the substance carried forward is largely the same.",
  },
  {
    q: "I keep seeing that LTCG on property is now 12.5% without indexation — is that from this new Act?",
    a: "No, and this is a common mix-up. The 12.5% long-term capital gains rate without indexation (for transfers after 23 July 2024) was introduced through the Finance Act, 2024 — a Budget change under the old 1961 Act. The Income-tax Act, 2025 does not introduce this rate; it simply carries forward whatever rate was already in force under its own new section numbers for capital gains (Sections 67–91).",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function NewIncomeTaxAct2025Vs1961() {
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
        On 21 August 2025, the Income-tax Act, 2025 received the
        President&apos;s assent — the first complete replacement of
        India&apos;s income tax law since 1961. It comes into effect from{" "}
        <strong>1 April 2026</strong> and touches every section number,
        form number and piece of tax terminology you have used for years.
        But the question we get asked most often at our office is simpler
        than all of that: <em>does this mean my tax bill changes?</em> Short
        answer — no, not because of this Act. Here is what actually changes,
        what doesn&apos;t, and which return of yours it applies to.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          Quick Summary
        </h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>
            <strong>Effective date:</strong> 1 April 2026 — applies to income
            earned from that date onward (Tax Year 2026-27)
          </li>
          <li>
            <strong>Your FY 2025-26 return (filed in 2026):</strong> still
            fully governed by the old Income-tax Act, 1961
          </li>
          <li>
            <strong>Structure:</strong> 819 sections / 14 schedules (1961) →
            536 sections / 16 schedules (2025)
          </li>
          <li>
            <strong>Tax rates, slabs, deduction limits:</strong> unchanged by
            this Act — it is a renumbering and simplification exercise
          </li>
          <li>
            <strong>New concept:</strong> &quot;Tax Year&quot; replaces both
            &quot;Previous Year&quot; and &quot;Assessment Year&quot;
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Why a Brand New Act, Not Just Another Amendment?
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        The Income-tax Act, 1961 was amended by every Union Budget for over
        six decades. Each amendment added provisos, explanations and
        cross-references rather than rewriting the section it changed, and
        the result was a law that even experienced practitioners found
        difficult to navigate. The government&apos;s own stated objective for
        the new Act is to provide{" "}
        <strong>
          &quot;a streamlined, simplified, and modern tax code with reduced
          compliance burden&quot;
        </strong>{" "}
        — not to change how much tax anyone pays.
      </p>

      <p className="text-gray-700 leading-8 mb-10">
        Parliament passed the Income Tax (No. 2) Bill, 2025 in August 2025,
        it received Presidential assent on 21 August 2025, and it takes
        effect as the Income-tax Act, 2025 from{" "}
        <strong>1 April 2026</strong>.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        The Numbers: How Much Shorter Is the New Law?
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Metric</th>
              <th className="border px-4 py-3 text-left">
                Income-tax Act, 1961
              </th>
              <th className="border px-4 py-3 text-left">
                Income-tax Act, 2025
              </th>
            </tr>
          </thead>
          <tbody>
            {structureRows.map((row) => (
              <tr key={row.metric}>
                <td className="border px-4 py-3 font-semibold">
                  {row.metric}
                </td>
                <td className="border px-4 py-3">{row.old}</td>
                <td className="border px-4 py-3">{row.now}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-8 mb-10">
        This reduction comes from merging provisos and explanations into
        plain main-text language, replacing dense narrative provisions with
        tables and formulas, and removing sections that had become obsolete.
        Fewer, clearer sections — not fewer rules that actually apply to you.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        &quot;Tax Year&quot; Replaces Previous Year and Assessment Year
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        Under the 1961 Act, every taxpayer juggled two years for the same
        income: the <strong>Previous Year</strong> (when you earned it) and
        the <strong>Assessment Year</strong> (the following year, when you
        filed and paid tax on it). The Income-tax Act, 2025 collapses this
        into a single concept — <strong>Tax Year</strong> — a 12-month period
        running 1 April to 31 March.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Old system (1961 Act)</th>
              <th className="border px-4 py-3 text-left">New system (2025 Act)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-3">
                Previous Year 2026-27 (income earned) + Assessment Year
                2027-28 (return filed) — two numbers for one income
              </td>
              <td className="border px-4 py-3">
                Tax Year 2026-27 — one number covers both the income and the
                return you file on it
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">
          What this does NOT change
        </h3>
        <p className="text-gray-700 leading-8">
          Your return filing due dates, the manner of filing, and the ITR
          forms themselves are unaffected by this renaming — the government
          has been explicit that it is a terminology simplification, not a
          procedural change. A new business or a new source of income can
          still have a Tax Year shorter than 12 months, just as a Previous
          Year could be under the old law.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Which Return Does This Actually Apply To?
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        This is where most confusion happens, so it is worth stating plainly:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>
          <strong>The return you are filing in 2026</strong>, for income
          earned in FY 2025-26 (AY 2026-27), is governed{" "}
          <strong>entirely by the old Income-tax Act, 1961</strong>. Old
          section numbers — 139, 234A, 234F and so on — are the correct
          references for this return, even though you are filing it after 1
          April 2026. Read our guide on{" "}
          <Link href="/blog/belated-revised-itr-ay-2026-27" className={linkClass}>
            belated and revised returns for AY 2026-27
          </Link>{" "}
          if you have missed a due date.
        </li>
        <li>
          <strong>The Income-tax Act, 2025 applies for the first time</strong>{" "}
          to income you earn from 1 April 2026 onward — Tax Year 2026-27 —
          which you will file as a return only in 2027. TDS deducted on
          payments made from 1 April 2026 already follows the new section
          numbers, which is why our{" "}
          <Link href="/blog/tds-return-filing-due-dates-late-fee" className={linkClass}>
            TDS return filing guide for FY 2026-27
          </Link>{" "}
          and our{" "}
          <Link href="/nri-property-tds-calculator" className={linkClass}>
            NRI Property TDS Calculator
          </Link>{" "}
          already use the new Section 393(2) reference for payments to
          non-residents.
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Section Renumbering — What Commonly Comes Up
      </h2>

      <p className="text-gray-700 leading-8 mb-6">
        A full section-by-section mapping runs into hundreds of entries. The
        ones below are the sections an individual taxpayer or small business
        is most likely to actually encounter:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300">
          <thead className="bg-[#002b5c] text-white">
            <tr>
              <th className="border px-4 py-3 text-left">Deals with</th>
              <th className="border px-4 py-3 text-left">1961 Act</th>
              <th className="border px-4 py-3 text-left">2025 Act</th>
            </tr>
          </thead>
          <tbody>
            {sectionMap.map((row) => (
              <tr key={row.topic}>
                <td className="border px-4 py-3">{row.topic}</td>
                <td className="border px-4 py-3">{row.old}</td>
                <td className="border px-4 py-3 font-semibold">{row.now}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-500 leading-6 mb-10">
        Notice that some familiar numbers — Section 4 (charge of tax) and
        Section 6 (residential status) — have not changed at all. Renumbering
        was applied selectively, not to every section.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        What Does NOT Change
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>
          <strong>Tax slabs and rates</strong> — whatever was in force under
          the last applicable Finance Act carries forward under its new
          section number
        </li>
        <li>
          <strong>Deduction and exemption limits</strong> — Section
          80C&apos;s ₹1.5 lakh limit, for example, still applies, just under
          Section 123 now. See our guide on the{" "}
          <Link href="/blog/section-87a-rebate-12-lakh-income-tax" className={linkClass}>
            Section 87A rebate up to ₹12 lakh income
          </Link>{" "}
          (now Section 156) for how that specific relief works
        </li>
        <li>
          <strong>Return filing due dates and forms</strong> — 31 July, 31
          October and the ITR form numbers are unaffected by this Act
        </li>
        <li>
          <strong>Capital gains rates</strong> — the 12.5% LTCG rate without
          indexation came from the Finance Act, 2024 Budget change, not from
          this Act; the 2025 Act only re-houses the same rate under new
          section numbers (Sections 67–91)
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        What You Should Actually Do Now
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8 mb-10">
        <li>
          For your FY 2025-26 return (filed in 2026): nothing changes — file
          exactly as you always have, under the 1961 Act
        </li>
        <li>
          If your accounting or payroll software auto-generates TDS challans
          and returns, confirm with your provider that it has updated section
          and form references for payments made from 1 April 2026 onward
        </li>
        <li>
          Do not act on any advice claiming this Act itself increases your
          tax rate, deduction limits or due dates — verify against the actual
          Finance Act or ask a professional before making a financial
          decision based on it
        </li>
        <li>
          Keep your Form 16/16A (now Form 130/131) and TDS certificates as
          before — the certificates themselves are unaffected, only the
          section reference printed on them changes
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        How We Can Help
      </h2>

      <p className="text-gray-700 leading-8 mb-10">
        Rajput Lalit &amp; Associates tracks these section and form changes
        as part of our regular compliance work — for GST, income tax, TDS
        returns and business registration filings across India, with
        in-person support for clients in Ambala. If you are unsure whether a
        specific provision affects you, or need help with a return under
        either the old or the new Act,{" "}
        <Link href="/#appointment" className={linkClass}>
          book a free consultation
        </Link>{" "}
        or see our{" "}
        <Link href="/tds-return-filing" className={linkClass}>
          TDS Return Filing service
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
        Income-tax Act, 2025, the Income-tax Act, 1961 and related official
        sources as of September 2026. Section mappings cover the provisions
        most relevant to individual taxpayers and small businesses and are
        not an exhaustive list. Rules, forms and portal processes change from
        time to time, so please verify the latest position or consult a
        professional before acting.
      </p>
    </>
  );
}
