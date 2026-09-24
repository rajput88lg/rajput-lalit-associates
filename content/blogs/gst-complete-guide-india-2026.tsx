import Link from "next/link";

const faqs = [
  {
    q: "GST 2026 mein kitne rate slabs hain?",
    a: "22 September 2025 se (GST 2.0 reform) sirf 4 slabs hain: 0%, 5%, 18%, aur 40% (sirf demerit/luxury items ke liye). Purane 12% aur 28% slabs ab nahi hain — zyadatar items 5% ya 18% mein shift ho gaye hain.",
  },
  {
    q: "GST registration kab mandatory hota hai?",
    a: "Normal category states mein goods ke liye ₹40 lakh aur services ke liye ₹20 lakh turnover se upar (Haryana normal category mein aata hai). E-commerce sellers ke liye turnover ki koi limit nahi — registration turnover se pehle hi mandatory hai (Section 24(ix)).",
  },
  {
    q: "Composition scheme kis turnover tak available hai?",
    a: "General category states mein ₹1.5 crore tak (goods), special category states mein ₹75 lakh tak, aur services-only composition scheme ₹50 lakh tak (Section 10(2A)) — rates 1% (goods), 5% (restaurants), 6% (services-only).",
  },
  {
    q: "GSTR-9 aur GSTR-9C dono file karne hain kya?",
    a: "GSTR-9 sirf ₹2 crore se zyada turnover par mandatory hai; GSTR-9C (reconciliation statement) sirf ₹5 crore se zyada turnover par, aur wo bhi self-certified hai — CA/CMA certification ab zaroori nahi hai.",
  },
  {
    q: "GST notice mile to sabse pehle kya karein?",
    a: "Pehle notice ka exact type identify karein (scrutiny ASMT-10, best-judgment ASMT-13, ya demand DRC-01) — har type ka apna reply-deadline aur process hai. Deadline miss karna sabse mehngi galti hoti hai, isliye turant professional advice lein.",
  },
  {
    q: "E-invoicing aur e-way bill dono zaroori hain kya?",
    a: "Dono alag cheezein hain — e-invoicing turnover-threshold-based hai (B2B invoices ke liye IRN generate karna), jabki e-way bill goods ki movement ke liye hai (₹50,000+ value par, Haryana mein). Dono ek doosre ko replace nahi karte.",
  },
];

const linkClass = "text-[#0066cc] font-semibold underline hover:text-[#002b5c]";

export default function GSTCompleteGuideIndia2026() {
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
        GST (Goods and Services Tax) India mein har registered business ko chhoo jaata hai —
        registration se lekar monthly returns, input tax credit, notices aur audit tak. Ye guide
        us poore journey ko ek jagah par simple bhasha mein samjhata hai, aur har topic ke liye
        ek dedicated deep-dive article ka link deta hai jahan aapko exact numbers, forms aur
        deadlines milenge. Isse aapko baar-baar alag-alag jagah search nahi karna padega — jo
        bhi chahiye, yahan se seedha related article par pahunch jaayenge.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-[#002b5c] mb-3">Is Guide Mein Kya Hai</h3>
        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>GST 2.0 ke naye rate slabs (0%, 5%, 18%, 40%) aur registration ki basics</li>
          <li>Composition scheme, Input Tax Credit (ITC) aur e-way bill ke rules</li>
          <li>Returns (GSTR-1/3B/9/9C), e-invoicing, IMS aur RCM/ISD jaisi advanced cheezein</li>
          <li>Notice, audit aur assessment se related sab kuch — ek jagah</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        GST Kya Hai, Aur GST 2.0 Mein Kya Badla
      </h2>
      <p className="text-gray-700 leading-8 mb-6">
        GST ek single, destination-based indirect tax hai jo goods aur services dono par lagta
        hai, purane VAT/Excise/Service Tax jaise multiple taxes ki jagah. 22 September 2025 se
        GST Council ne rate structure ko simplify kar diya — ab sirf 4 slabs hain: 0%, 5%, 18%,
        aur 40% (sirf demerit/luxury items jaise badi cars, tobacco-linked products ke liye).
        Daily-use items (shampoo, soap, UHT milk) sasta hua hai, jabki luxury items par 40% lagta
        hai.
      </p>
      <p className="text-gray-700 leading-8 mb-10">
        Poora sector-wise breakdown (insurance, auto, FMCG) aur item-wise rate list dekhne ke
        liye:{" "}
        <Link href="/blog/gst-2-0-reforms-2026-sector-impact-guide" className={linkClass}>
          GST 2.0 Reforms — Sector Impact Guide
        </Link>{" "}
        aur{" "}
        <Link href="/blog/gst-rates-2026-slab-list-item-wise" className={linkClass}>
          GST Rates 2026 — Full Slab List
        </Link>
        .
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">Registration</h2>
      <p className="text-gray-700 leading-8 mb-6">
        Normal category states (Haryana included) mein registration mandatory ho jaata hai goods
        ke liye ₹40 lakh aur services ke liye ₹20 lakh turnover se upar. E-commerce sellers ke
        liye ye limit apply nahi hoti — unhe turnover se pehle hi registration lena padta hai.
        Process online hai — application se 7 working din mein approval mil jaata hai (30 din
        agar physical verification chahiye).
      </p>
      <p className="text-gray-700 leading-8 mb-10">
        Poora step-by-step process, documents aur fees dekhein:{" "}
        <Link href="/gst-registration" className={linkClass}>
          GST Registration Service
        </Link>{" "}
        ya{" "}
        <Link href="/blog/gst-registration-ambala" className={linkClass}>
          GST Registration in Ambala — Local Guide
        </Link>
        .
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Composition Scheme — Chhote Business Ke Liye Simpler Option
      </h2>
      <p className="text-gray-700 leading-8 mb-10">
        Agar aapka turnover general category states mein ₹1.5 crore (goods) ya ₹50 lakh
        (services-only) se kam hai, composition scheme flat 1%/5%/6% rate par tax dene ka option
        deta hai, monthly return ki jagah quarterly payment + annual GSTR-4 ke saath. Lekin isme
        ITC claim nahi kar sakte aur inter-state supply allowed nahi hai. Poori eligibility aur
        rate table dekhein:{" "}
        <Link href="/blog/gst-composition-scheme-eligibility-rates" className={linkClass}>
          GST Composition Scheme — Eligibility &amp; Rates
        </Link>
        .
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Input Tax Credit (ITC) — Sabse Zyada Galtiyan Yahin Hoti Hain
      </h2>
      <p className="text-gray-700 leading-8 mb-10">
        ITC claim karne ke liye Section 16 ke 5 conditions poori honi chahiye, aur Section 17(5)
        ke under kuch cheezein (cars, club membership, personal use) par ITC blocked hai. Supplier
        ko 180 din ke andar payment na karne par ITC reverse karna padta hai. Full checklist aur
        common mistakes:{" "}
        <Link href="/blog/input-tax-credit-gst-rules-reversal" className={linkClass}>
          Input Tax Credit — Rules &amp; Reversal
        </Link>
        .
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Returns — GSTR-1, GSTR-3B, GSTR-9 aur GSTR-9C
      </h2>
      <p className="text-gray-700 leading-8 mb-6">
        Regular taxpayers monthly GSTR-1 (sales) aur GSTR-3B (summary + tax payment) file karte
        hain. Saal ke end mein GSTR-9 (annual return) sirf ₹2 crore se zyada turnover par
        mandatory hai, aur GSTR-9C (reconciliation statement) sirf ₹5 crore se zyada turnover
        par — dono hi FY 2025-26 ke liye 31 December 2026 tak due hain. GSTR-9C ab self-certified
        hai, CA/CMA sign-off zaroori nahi.
      </p>
      <p className="text-gray-700 leading-8 mb-10">
        Detail mein padhein:{" "}
        <Link href="/blog/gstr-9-annual-return-filing-guide-fy-2025-26" className={linkClass}>
          GSTR-9 Annual Return Guide
        </Link>{" "}
        aur{" "}
        <Link href="/blog/gstr-9c-reconciliation-statement-guide-fy-2025-26" className={linkClass}>
          GSTR-9C Reconciliation Guide
        </Link>
        .
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        E-Way Bill aur E-Invoicing — Alag Cheezein, Dono Zaroori
      </h2>
      <p className="text-gray-700 leading-8 mb-6">
        E-way bill goods ki physical movement ke liye hai — Haryana mein ₹50,000+ value ke
        consignment par zaroori, validity 1 din/200 km. E-invoicing alag hai: ek turnover-threshold
        ke upar B2B invoices ke liye IRN (Invoice Reference Number) generate karna padta hai —
        dono systems ek doosre ko replace nahi karte, dono parallel chalte hain.
      </p>
      <p className="text-gray-700 leading-8 mb-10">
        Detail mein:{" "}
        <Link href="/blog/gst-eway-bill-rules-validity-limit" className={linkClass}>
          E-Way Bill Rules &amp; Validity
        </Link>
        ,{" "}
        <Link href="/blog/e-invoicing-mandatory-2026-turnover-limit-guide" className={linkClass}>
          E-Invoicing Mandatory 2026 — Turnover Limit
        </Link>{" "}
        aur{" "}
        <Link href="/blog/gst-invoice-management-system-ims-guide" className={linkClass}>
          GST Invoice Management System (IMS) Guide
        </Link>
        .
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Advanced Topics — RCM, ISD, TCS aur Real Estate
      </h2>
      <p className="text-gray-700 leading-8 mb-10">
        Kuch specific situations ke liye alag rules hain: Reverse Charge Mechanism (RCM) mein
        supplier ki jagah recipient tax deposit karta hai; Input Service Distributor (ISD)
        registration multi-branch businesses ke liye common input services ka credit distribute
        karta hai; e-commerce sellers ke liye 0.5% TCS collect hota hai; aur under-construction
        property par GST ke special rate/ITC rules hain. Har ek ka apna dedicated guide hai:{" "}
        <Link href="/blog/gst-reverse-charge-mechanism-rcm-explained" className={linkClass}>
          Reverse Charge Mechanism
        </Link>
        ,{" "}
        <Link href="/blog/gst-input-service-distributor-isd-rules" className={linkClass}>
          ISD Registration Rules
        </Link>
        ,{" "}
        <Link href="/blog/gst-tcs-ecommerce-sellers-rules" className={linkClass}>
          TCS for E-commerce Sellers
        </Link>{" "}
        aur{" "}
        <Link href="/blog/gst-on-real-estate-under-construction-property" className={linkClass}>
          GST on Real Estate
        </Link>
        .
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Notice, Audit aur Assessment — Jab Department Se Communication Aaye
      </h2>
      <p className="text-gray-700 leading-8 mb-6">
        GST department ki taraf se communication kai forms mein aa sakta hai — scrutiny notice
        (ASMT-10), non-filer best-judgment assessment (ASMT-13), ya ek demand notice (DRC-01).
        Har ek ka apna reply-deadline aur process hai — sabse important cheez hai deadline ko
        miss na karna, kyunki late reply se cases weak ho jaate hain.
      </p>
      <p className="text-gray-700 leading-8 mb-10">
        Poora notice-type breakdown aur reply-strategy:{" "}
        <Link href="/blog/gst-audit-assessment-types-notice" className={linkClass}>
          GST Audit &amp; Assessment Types
        </Link>{" "}
        aur{" "}
        <Link href="/blog/gst-drc-01-demand-notice-reply-guide" className={linkClass}>
          DRC-01 Demand Notice — How to Reply
        </Link>
        . Agar aapko koi bhi GST notice mila hai, hamare{" "}
        <Link href="/gst-notice-reply" className={linkClass}>
          GST Notice Reply service
        </Link>{" "}
        se turant baat karein — deadline ke andar reply zaroori hai.
      </p>

      <h2 className="text-3xl font-bold text-[#002b5c] mb-6">
        Aur Detailed GST Guides
      </h2>
      <p className="text-gray-700 leading-8 mb-6">
        Roz ke GST compliance ke kuch aur practical sawaalon ke liye ye guides dekhein:
      </p>
      <ul className="list-disc pl-6 text-gray-700 leading-8 mb-10">
        <li>
          <Link href="/blog/gst-late-fee-interest-gstr-3b-gstr-1-guide" className={linkClass}>
            GST Late Fee aur Interest — GSTR-3B, GSTR-1
          </Link>
        </li>
        <li>
          <Link href="/blog/gst-on-rent-commercial-residential-property-rcm" className={linkClass}>
            GST on Rent — Commercial aur Residential RCM
          </Link>
        </li>
        <li>
          <Link href="/blog/gst-on-restaurants-hotels-rates-2026" className={linkClass}>
            GST on Restaurant aur Hotel Room 2026
          </Link>
        </li>
        <li>
          <Link href="/blog/gst-tax-invoice-format-mandatory-fields" className={linkClass}>
            GST Tax Invoice Format — Mandatory Fields
          </Link>
        </li>
      </ul>

      <div className="bg-[#fff9ed] border-l-4 border-[#d99a2b] rounded-xl p-6">
        <h3 className="text-xl font-bold text-[#002b5c] mb-2">Ek Baat Yaad Rakhein</h3>
        <p className="text-gray-700 leading-7">
          GST rules regularly update hote rahte hain — is guide mein diye gaye figures 2026 ke
          hisaab se verified hain, lekin har article ke apne date ko check karke confirm
          kar lein ki wo aapki current filing period ke liye applicable hai. Kisi bhi specific
          case ke liye, generic online information par bharosa karne se pehle ek baar humse
          direct consult kar lein.
        </p>
      </div>
    </>
  );
}
