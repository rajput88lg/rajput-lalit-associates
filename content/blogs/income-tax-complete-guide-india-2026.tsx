import Link from "next/link";

const faqs = [
  {
    q: "FY 2026-27 mein konsa tax regime default hai?",
    a: "New tax regime FY 2026-27 mein default hai — agar aap old regime choose karna chahte hain (deductions jaise 80C, HRA claim karne ke liye), to ITR file karte waqt explicitly opt-in karna padta hai. Salaried employees apne employer ko bhi inform kar sakte hain TDS ke liye.",
  },
  {
    q: "Naye regime mein income tax slabs kya hain?",
    a: "New regime mein 7 slabs hain 0% se 30% tak, aur ₹12 lakh tak income par Section 87A rebate ke through effectively zero tax ban jaata hai (₹60,000 tak rebate). Old regime mein 4 slabs hain, rebate sirf ₹5 lakh tak income par (₹12,500 tak).",
  },
  {
    q: "ITR file karne ke liye kaunsa form use karna hai?",
    a: "Salary + ek house property + simple income ke liye ITR-1 (Sahaj); capital gains ya multiple house properties ho to ITR-2; business/professional income ho to ITR-3 ya ITR-4 (Sahaj/presumptive). Galat form choose karne se return defective ho sakta hai.",
  },
  {
    q: "Advance tax kab pay karna hai?",
    a: "Agar aapki net tax liability ₹10,000 se zyada hai, to 4 instalments mein pay karna hai — 15 June (15%), 15 September (45% cumulative), 15 December (75% cumulative), aur 15 March (100%). Freelancers/professionals (44ADA) ek hi instalment (15 March) mein pay kar sakte hain.",
  },
  {
    q: "Belated ya revised ITR file karne ki deadline kya hai?",
    a: "AY 2026-27 ke liye belated return (Section 139(4)) 31 December 2026 tak file ho sakta hai, late fee (Section 234F) ke saath. Revised return (Section 139(5)) ki deadline Budget 2026 ke baad 31 March 2027 hai. Dono mein, assessment complete hone se pehle file karna zaroori hai.",
  },
  {
    q: "Income tax notice mile to sabse pehle kya karein?",
    a: "Pehle notice ka exact section/type identify karein — 143(1) intimation, 139(9) defective return, ya 148 reassessment — kyunki har ek ka apna reply-window aur process hai. Deadline miss karna sabse mehngi galti hai, turant professional advice lein.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function IncomeTaxCompleteGuideIndia2026() {
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
        Income Tax India mein har earning individual, freelancer, professional aur business ko
        chhoo jaata hai — regime choose karne se lekar ITR filing, advance tax, capital gains,
        aur notices tak. Ye guide us poore journey ko ek jagah par simple bhasha mein samjhata
        hai, aur har topic ke liye ek dedicated deep-dive article ka link deta hai jahan aapko
        exact numbers, forms aur deadlines milenge.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">Is Guide Mein Kya Hai</h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>New vs Old tax regime, slabs, aur Section 87A rebate</li>
          <li>ITR filing — kaunsa form, due dates, belated/revised return</li>
          <li>Advance tax, TDS reconciliation (26AS/AIS/TIS) aur capital gains</li>
          <li>Freelancers/professionals ke liye presumptive taxation aur tax audit</li>
          <li>New Income-tax Act 2025 aur notice/assessment se related sab kuch</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        New vs Old Tax Regime — Slabs, Rebate Aur Deductions
      </h2>
      <p className="text-gray-700 leading-8 mb-6">
        FY 2026-27 mein new tax regime default hai — lower slab rates lekin most deductions
        (80C, HRA, home loan interest) available nahi hain. Old regime mein deductions milte
        hain lekin rates thodi zyada hain. Naye regime mein ₹12 lakh tak income par Section 87A
        rebate se effectively zero tax ban jaata hai; old regime mein ye limit sirf ₹5 lakh hai.
      </p>
      <p className="text-gray-700 leading-8 mb-10">
        Poora slab-by-slab comparison aur kaunsa regime aapke liye better hai:{" "}
        <Link href="/blog/income-tax-slabs-new-vs-old-regime-fy-2026-27" className={linkClass}>
          Income Tax Slabs — New vs Old Regime
        </Link>
        ,{" "}
        <Link href="/blog/section-87a-rebate-12-lakh-income-tax" className={linkClass}>
          Section 87A Rebate — ₹12 Lakh Tak Zero Tax
        </Link>{" "}
        aur{" "}
        <Link href="/blog/deductions-80c-to-80u-old-regime-guide" className={linkClass}>
          80C to 80U Deductions Guide (Old Regime)
        </Link>
        .
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        ITR Filing — Kaunsa Form, Due Date Aur Belated/Revised Return
      </h2>
      <p className="text-gray-700 leading-8 mb-6">
        Sahi ITR form choose karna filing ka sabse pehla step hai — salary-only income ke liye
        ITR-1, capital gains/multiple properties ke liye ITR-2, business/professional income ke
        liye ITR-3/ITR-4. AY 2026-27 ke liye forms mein kuch changes bhi aaye hain (2 house
        properties allowed ab ITR-1/4 mein bhi). Agar due date miss ho jaaye, belated return
        file kar sakte hain — late fee ke saath.
      </p>
      <p className="text-gray-700 leading-8 mb-10">
        Detail mein padhein:{" "}
        <Link href="/blog/new-itr-forms-ay-2026-27-changes-explained" className={linkClass}>
          New ITR Forms AY 2026-27 — What Changed
        </Link>
        ,{" "}
        <Link href="/blog/belated-revised-itr-ay-2026-27" className={linkClass}>
          Belated &amp; Revised ITR Guide
        </Link>{" "}
        aur{" "}
        <Link href="/blog/income-tax-return-filing-services-in-ambala" className={linkClass}>
          ITR Filing Services in Ambala
        </Link>
        . Filing ke liye humari{" "}
        <Link href="/income-tax-return-filing" className={linkClass}>
          Income Tax Return Filing service
        </Link>{" "}
        se seedha connect karein.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Advance Tax Aur Form 26AS/AIS/TIS Reconciliation
      </h2>
      <p className="text-gray-700 leading-8 mb-6">
        Agar net tax liability ₹10,000 se zyada hai, advance tax 4 instalments mein pay karna
        hai — miss karne par interest lagta hai. ITR file karne se pehle Form 26AS (tax credits),
        AIS (broad transaction data) aur TIS (AIS summary) teeno ko reconcile karna zaroori hai
        taaki koi income miss na ho aur notice ka risk kam ho.
      </p>
      <p className="text-gray-700 leading-8 mb-10">
        Poore due dates aur reconciliation process ke liye:{" "}
        <Link href="/blog/advance-tax-payment-due-dates-interest" className={linkClass}>
          Advance Tax — Due Dates &amp; Interest
        </Link>{" "}
        aur{" "}
        <Link href="/blog/form-26as-ais-tis-reconciliation-itr" className={linkClass}>
          Form 26AS, AIS &amp; TIS Reconciliation
        </Link>
        . Estimate karne ke liye humara{" "}
        <Link href="/income-tax-calculator" className={linkClass}>
          Income Tax Calculator
        </Link>{" "}
        use karein.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Capital Gains Aur HUF — Investment Aur Family Tax Planning
      </h2>
      <p className="text-gray-700 leading-8 mb-10">
        Shares/mutual funds par STCG flat 20% lagta hai (≤12 months), aur LTCG 12.5% ₹1.25 lakh
        se upar (&gt;12 months) — ye exemption annual aur aggregate hai, per-investment nahi. HUF
        (Hindu Undivided Family) apna alag basic exemption aur most deductions claim kar sakta
        hai, lekin sirf legitimate HUF income (ancestral property, non-member gifts) par — salary
        kabhi HUF ko nahi ja sakti. Detail mein:{" "}
        <Link href="/blog/capital-gains-tax-shares-mutual-funds-stcg-ltcg" className={linkClass}>
          Capital Gains Tax — STCG vs LTCG
        </Link>{" "}
        aur{" "}
        <Link href="/blog/huf-hindu-undivided-family-tax-benefits" className={linkClass}>
          HUF — Tax Benefits &amp; Formation
        </Link>
        .
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Freelancers Aur Professionals — Presumptive Taxation Aur Tax Audit
      </h2>
      <p className="text-gray-700 leading-8 mb-10">
        Specified professionals (CA, doctor, engineer, IT consultant, etc.) Section 44ADA ke
        under gross receipts ka 50% taxable income declare kar sakte hain — ₹50 lakh standard
        limit, ₹75 lakh agar 95%+ receipts banking channels se aaye hon. Isse kam declare karne
        par books maintain karna aur tax audit (Section 44AB) mandatory ho jaata hai. Detail
        mein:{" "}
        <Link
          href="/blog/tax-for-freelancers-consultants-section-44ada-presumptive-taxation"
          className={linkClass}
        >
          44ADA Presumptive Taxation Guide
        </Link>{" "}
        aur{" "}
        <Link href="/blog/tax-audit-section-44ab-applicability-turnover-limit" className={linkClass}>
          Tax Audit Section 44AB — Applicability
        </Link>
        .
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        New Income-tax Act 2025 — Kya Badla
      </h2>
      <p className="text-gray-700 leading-8 mb-10">
        1 April 2026 se purane Income-tax Act, 1961 ki jagah naya Income-tax Act, 2025 applicable
        hai — sections renumber hue hain (jaise 234B→424, 234C→425, 111A→196, 112A→198) lekin
        core concepts mostly same hain. Poora comparison aur section-mapping dekhein:{" "}
        <Link href="/blog/new-income-tax-act-2025-vs-1961" className={linkClass}>
          New Income-tax Act 2025 vs Old Act 1961
        </Link>
        .
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Notice Aur Assessment — Jab Department Se Communication Aaye
      </h2>
      <p className="text-gray-700 leading-8 mb-6">
        Income tax department ki taraf se communication kai forms mein aa sakta hai — 143(1)
        intimation, 139(9) defective return (15 din mein refile karna), ya 148 reassessment
        notice. Zyadatar assessment ab faceless hai — officer se direct interaction ke bina,
        online portal ke through.
      </p>
      <p className="text-gray-700 leading-8 mb-10">
        Poora notice-type breakdown aur faceless process:{" "}
        <Link
          href="/blog/income-tax-notice-types-143-1-148-139-9-explained"
          className={linkClass}
        >
          Income Tax Notice Types — 143(1), 148, 139(9)
        </Link>{" "}
        aur{" "}
        <Link href="/blog/faceless-assessment-and-appeal-scheme-explained" className={linkClass}>
          Faceless Assessment aur Appeal Scheme
        </Link>
        . Agar aapko koi notice mila hai, humse turant consult karein — deadline ke andar reply
        zaroori hai.
      </p>

      <div className="bg-[#fff9ed] border-l-4 border-[#d99a2b] rounded-xl p-6">
        <h3 className="text-xl font-bold text-[#002b5c] mb-2">Ek Baat Yaad Rakhein</h3>
        <p className="text-gray-700 leading-7">
          Income tax rules aur section numbers regularly update hote rahte hain — is guide mein
          diye gaye figures 2026 ke hisaab se verified hain, lekin har article ke apne date ko
          check karke confirm kar lein ki wo aapki current filing period (FY 2026-27 / AY
          2027-28) ke liye applicable hai. Kisi bhi specific case ke liye, generic online
          information par bharosa karne se pehle ek baar humse direct consult kar lein.
        </p>
      </div>
    </>
  );
}
