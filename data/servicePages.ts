import { ServiceContentData } from "@/components/ServiceContentBlock";

export type ServicePageData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroSubtitle: string;
  schemaName: string;
  schemaDescription: string;
  content: ServiceContentData;
  faqs: { question: string; answer: string }[];
};

// Ye 5 pages GST Registration ke alawa baaki uन services ke liye hain jo
// abhi tak sirf homepage ke "#services" section mein ek line ke roop mein
// thi — ab har ek ka apna dedicated, keyword-focused URL hai taaki Google
// har service ko individually rank kar sake.
export const servicePages: ServicePageData[] = [
  {
    slug: "gst-return-filing",
    metaTitle: "GST Return Filing Services in India | Rajput Lalit & Associates",
    metaDescription:
      "Professional GST Return Filing services across India — GSTR-1, GSTR-3B, annual returns, timely filing and compliance support by Rajput Lalit & Associates, Ambala.",
    keywords: [
      "GST Return Filing",
      "GST Return Filing Services",
      "GSTR-1 Filing",
      "GSTR-3B Filing",
      "GST Compliance India",
      "GST Return Filing Consultant",
      "Monthly GST Return Filing",
    ],
    heroTitle: "GST Return Filing Services in India",
    heroSubtitle:
      "Timely and accurate GST Return Filing — GSTR-1, GSTR-3B and annual returns — so your business stays fully compliant without penalties or last-minute stress.",
    schemaName: "GST Return Filing",
    schemaDescription:
      "Professional GST Return Filing services (GSTR-1, GSTR-3B, annual returns) for businesses across India.",
    content: {
      overviewTitle: "GST Return Filing — Complete Compliance Support",
      overviewParagraphs: [
        "Har GST-registered business ke liye monthly, quarterly ya annually GST returns file karna mandatory hai — chahe us mahine mein sale hui ho ya nahi. Late filing par penalty aur interest dono lagte hain, isliye timely aur accurate filing bahut zaroori hai.",
        "Hum aapke business type (regular, composition scheme, ya e-commerce seller) ke hisaab se sahi return form select karke, sales aur purchase data reconcile karke, GSTR-1 aur GSTR-3B jaise returns due date se pehle file karte hain — taaki aapko koi penalty ya notice na aaye.",
      ],
      whoNeedsThis: [
        "Har GST-registered proprietorship, partnership, LLP ya company",
        "Composition scheme mein registered small businesses",
        "E-commerce sellers aur online service providers",
        "Businesses jinko GSTR-1, GSTR-3B ya annual return (GSTR-9) file karni hai",
      ],
      documentsRequired: [
        "Sales aur purchase invoices (current period ke)",
        "GST login credentials",
        "Bank statement (agar reconciliation ke liye chahiye ho)",
        "Purchase register / expense details",
        "Pichhli filed returns (agar available ho)",
      ],
      process: [
        {
          title: "Data Collection",
          description:
            "Aapke sales, purchase aur expense data collect karte hain, chahe wo Excel, invoicing software ya manual records se ho.",
        },
        {
          title: "Reconciliation",
          description:
            "GSTR-2B/2A ke saath purchase data reconcile karte hain taaki input tax credit sahi claim ho.",
        },
        {
          title: "Return Preparation & Review",
          description:
            "Sahi return form (GSTR-1, GSTR-3B, etc.) prepare karke aapko final figures share karte hain review ke liye.",
        },
        {
          title: "Filing & Confirmation",
          description:
            "Due date se pehle return file karke aapko acknowledgment aur filing confirmation bhejte hain.",
        },
      ],
      whyChooseUs: [
        "Har due date ki reminder aur timely filing",
        "Input Tax Credit maximize karne mein help",
        "Composition aur regular scheme dono ke liye experience",
        "Late fee aur notice se bachne ke liye proactive tracking",
        "Ambala aur poore India ke clients ke liye online service",
      ],
    },
    faqs: [
      {
        question: "GST Return kitni baar file karni hoti hai?",
        answer:
          "Ye aapke registration type par depend karta hai — regular taxpayers ke liye monthly (GSTR-1, GSTR-3B) aur composition scheme walon ke liye quarterly filing hoti hai. Iske alawa saal mein ek annual return (GSTR-9) bhi file hoti hai.",
      },
      {
        question: "Agar koi sale nahi hui to bhi return file karni hai?",
        answer:
          "Haan. Sale na hone par bhi 'Nil Return' file karna mandatory hai, warna late fee lag sakti hai.",
      },
      {
        question: "Late filing par kya penalty lagti hai?",
        answer:
          "Late fee aur interest dono lagte hain, jo har din ke hisaab se badhte hain. Isliye due date se pehle filing karna best hai — hum isi mein aapki help karte hain.",
      },
      {
        question: "Kya aap Ambala ke bahar bhi GST return filing service dete hain?",
        answer:
          "Haan, hum poore Haryana aur India mein online GST Return Filing service provide karte hain.",
      },
    ],
  },

  {
    slug: "income-tax-return-filing",
    metaTitle:
      "Income Tax Return (ITR) Filing Services in India | Rajput Lalit & Associates",
    metaDescription:
      "Accurate and timely Income Tax Return (ITR) filing for individuals, professionals and businesses across India — correct ITR form selection, deduction planning and expert support.",
    keywords: [
      "Income Tax Return Filing",
      "ITR Filing Services",
      "ITR Filing Consultant",
      "Income Tax Return India",
      "ITR Filing Online",
      "Income Tax Consultant India",
    ],
    heroTitle: "Income Tax Return (ITR) Filing Services",
    heroSubtitle:
      "Accurate, deadline-driven Income Tax Return filing for salaried individuals, professionals and businesses — with the right ITR form and every eligible deduction claimed.",
    schemaName: "Income Tax Return Filing",
    schemaDescription:
      "Professional Income Tax Return (ITR) filing services for individuals, professionals and businesses across India.",
    content: {
      overviewTitle: "Income Tax Return Filing — Done Right, On Time",
      overviewParagraphs: [
        "Income Tax Return (ITR) filing sirf ek formality nahi hai — galat ITR form select karna, income sources miss karna, ya deductions claim na karna, aapko refund kam milne ya notice aane ka risk create kar sakta hai.",
        "Hum aapki income sources — salary, business, professional income, capital gains, ya rental income — samajh kar sahi ITR form select karte hain, eligible deductions (80C, 80D, HRA, etc.) maximize karte hain, aur due date se pehle accurate filing complete karte hain.",
      ],
      whoNeedsThis: [
        "Salaried individuals jinki income taxable limit se zyada hai",
        "Freelancers, professionals aur consultants",
        "Business owners aur proprietorship firms",
        "Individuals jinke paas capital gains, rental income ya foreign income hai",
        "Refund claim karne wale taxpayers",
      ],
      documentsRequired: [
        "PAN Card aur Aadhaar Card",
        "Form 16 (salaried individuals ke liye) ya income proof",
        "Bank statements",
        "Investment proofs (80C, 80D, etc.)",
        "Capital gains statement (agar applicable ho)",
        "Business/professional income details (agar applicable ho)",
      ],
      process: [
        {
          title: "Income Assessment",
          description:
            "Aapki sabhi income sources aur applicable deductions ka assessment karte hain.",
        },
        {
          title: "Correct ITR Form Selection",
          description:
            "Aapki income category ke hisaab se sahi ITR form (ITR-1, ITR-2, ITR-3, ITR-4) select karte hain.",
        },
        {
          title: "Computation & Review",
          description:
            "Tax computation taiyaar karke aapke saath review karte hain — refund ya payable tax dono clear batate hain.",
        },
        {
          title: "Filing & Acknowledgment",
          description:
            "Return file karke aapko ITR-V acknowledgment aur filing proof provide karte hain.",
        },
      ],
      whyChooseUs: [
        "Har income type ke liye sahi ITR form selection",
        "Eligible deductions aur exemptions maximize karne ka focus",
        "Due date se pehle timely filing",
        "Old aur new tax regime dono ka comparison guidance",
        "Ambala ke clients ke liye in-person, baaki India ke liye online support",
      ],
    },
    faqs: [
      {
        question: "ITR file karna kab mandatory hai?",
        answer:
          "Agar aapki income basic exemption limit se zyada hai, ya aap refund claim karna chahte hain, ya business/professional income hai, to ITR filing mandatory ya faydemand hoti hai. Hum aapki specific situation dekh kar guide karte hain.",
      },
      {
        question: "Kaunsa ITR form mere liye sahi hai?",
        answer:
          "Ye aapki income sources par depend karta hai — salary, business, capital gains, etc. Hum aapki income assess karke sahi form select karte hain, aapko khud decide karne ki zaroorat nahi.",
      },
      {
        question: "Old ya new tax regime — kaunsa better hai?",
        answer:
          "Ye aapke deductions aur income structure par depend karta hai. Hum dono regimes mein computation karke aapko wahi option suggest karte hain jisme kam tax bane.",
      },
      {
        question: "Kya aap ITR filing ke saath tax planning bhi karte hain?",
        answer:
          "Haan, hum sirf filing hi nahi, balki aane wale saal ke liye tax-saving investments aur planning guidance bhi dete hain.",
      },
    ],
  },

  {
    slug: "company-registration",
    metaTitle:
      "Company Registration Services in India | Private Limited, LLP, Partnership",
    metaDescription:
      "Complete Company Registration services in India — Private Limited Company, LLP, Partnership Firm and Proprietorship — with MCA filing, PAN/TAN and full documentation support.",
    keywords: [
      "Company Registration",
      "Private Limited Company Registration",
      "LLP Registration",
      "Partnership Firm Registration",
      "Company Registration India",
      "Business Registration Consultant",
    ],
    heroTitle: "Company & Business Registration Services",
    heroSubtitle:
      "Start your business with the right legal structure — Private Limited Company, LLP, Partnership Firm or Proprietorship — with complete MCA filing and documentation support.",
    schemaName: "Company Registration",
    schemaDescription:
      "Company and business registration services (Private Limited, LLP, Partnership) across India.",
    content: {
      overviewTitle: "Company Registration — Start Right, Stay Compliant",
      overviewParagraphs: [
        "Business shuru karte waqt sahi legal structure choose karna bahut important hota hai — ye aapke liability, taxation aur future funding options par asar daalta hai. Private Limited Company, LLP, Partnership Firm ya Proprietorship — har structure ke apne fayde aur compliance requirements hain.",
        "Hum aapke business goals, funding plans aur team size ke hisaab se sahi structure suggest karke, MCA filings, PAN/TAN application aur baaki registrations se lekar aapke business ko legally set up karne tak poora process handle karte hain.",
      ],
      whoNeedsThis: [
        "Naye entrepreneurs jo business formally shuru karna chahte hain",
        "Startups jo investment/funding raise karne ki planning kar rahe hain",
        "2 ya zyada partners ke saath business karne wale",
        "Existing proprietorship ko company/LLP mein convert karne wale businesses",
      ],
      documentsRequired: [
        "PAN Card aur Aadhaar Card (sabhi directors/partners ke)",
        "Passport-size photographs",
        "Registered office address proof (electricity bill/rent agreement)",
        "NOC from property owner (agar rented ho)",
        "Digital Signature Certificate (DSC) — hum arrange karne mein help karte hain",
      ],
      process: [
        {
          title: "Structure Consultation",
          description:
            "Aapke business type aur goals ke hisaab se sahi entity structure (Pvt Ltd, LLP, Partnership) suggest karte hain.",
        },
        {
          title: "Name Approval & DSC",
          description:
            "Company/LLP name approval aur Digital Signature Certificate arrange karte hain.",
        },
        {
          title: "MCA Filing (SPICe+/LLP Form)",
          description:
            "Ministry of Corporate Affairs par incorporation forms file karte hain complete documentation ke saath.",
        },
        {
          title: "PAN, TAN & Certificate",
          description:
            "Incorporation certificate, PAN aur TAN prapt hote hi aapko sab documents hand over karte hain.",
        },
      ],
      whyChooseUs: [
        "Har business type ke liye sahi structure guidance",
        "End-to-end MCA filing aur documentation",
        "PAN, TAN aur bank account opening mein support",
        "Registration ke baad compliance calendar bhi provide karte hain",
        "Haryana ke naye entrepreneurs ke liye special guidance",
      ],
    },
    faqs: [
      {
        question: "Private Limited Company aur LLP mein kya farak hai?",
        answer:
          "Private Limited Company funding raise karne aur growth-stage startups ke liye better hoti hai, jabki LLP kam compliance ke saath professional services ya small partnerships ke liye suitable hai. Hum aapki zaroorat ke hisaab se sahi option suggest karte hain.",
      },
      {
        question: "Company registration mein kitna time lagta hai?",
        answer:
          "Documents complete hone ke baad, generally 7-15 working days mein incorporation process complete ho jata hai — ye MCA processing time par bhi depend karta hai.",
      },
      {
        question: "Kya company registration ke baad koi ongoing compliance hoti hai?",
        answer:
          "Haan — annual filing, ROC compliance, aur accounting jaisi ongoing requirements hoti hain. Hum ye sab bhi handle karte hain taaki aap business par focus kar sakein.",
      },
      {
        question: "Kya proprietorship ko baad mein company mein convert kar sakte hain?",
        answer:
          "Haan, proprietorship ya partnership ko Private Limited Company ya LLP mein convert kiya ja sakta hai. Hum ye conversion process bhi handle karte hain.",
      },
    ],
  },

  {
    slug: "msme-registration",
    metaTitle: "MSME (Udyam) Registration Services in India | Rajput Lalit & Associates",
    metaDescription:
      "Fast and error-free MSME (Udyam) Registration for small and medium businesses in India — unlock government subsidies, easier loans and MSME scheme benefits.",
    keywords: [
      "MSME Registration",
      "Udyam Registration",
      "MSME Registration Online",
      "Udyam Certificate",
      "MSME Registration Consultant",
    ],
    heroTitle: "MSME (Udyam) Registration Services",
    heroSubtitle:
      "Register your small or medium business under Udyam and unlock government subsidies, priority lending and MSME scheme benefits — fast and error-free.",
    schemaName: "MSME Registration",
    schemaDescription:
      "MSME (Udyam) Registration services for small and medium businesses across India.",
    content: {
      overviewTitle: "MSME (Udyam) Registration — Unlock Government Benefits",
      overviewParagraphs: [
        "MSME (Udyam) Registration se small aur medium businesses ko government subsidies, collateral-free loans, tender preferences aur delayed payment protection jaise kai benefits milte hain — lekin galat category ya galat details ke saath registration karne se ye benefits miss ho sakte hain.",
        "Hum aapke business ke turnover aur investment ke hisaab se sahi MSME category (Micro, Small ya Medium) determine karke, poori Udyam registration process online complete karte hain — taaki aapko scheme benefits jaldi aur bina kisi error ke milna shuru ho jaayen.",
      ],
      whoNeedsThis: [
        "Manufacturing aur service sector ki small/medium businesses",
        "Proprietorship, partnership, LLP ya companies jo govt schemes ka fayda uthana chahti hain",
        "Businesses jo bank loan ya credit facility easily lena chahte hain",
        "Vendors jo government tenders mein participate karna chahte hain",
      ],
      documentsRequired: [
        "Aadhaar Card (proprietor/partner/director ka)",
        "PAN Card of business",
        "Business address proof",
        "Bank account details",
        "Investment aur turnover details (plant/machinery/equipment)",
      ],
      process: [
        {
          title: "Eligibility Check",
          description:
            "Aapke investment aur turnover ke hisaab se sahi MSME category (Micro/Small/Medium) determine karte hain.",
        },
        {
          title: "Udyam Portal Filing",
          description:
            "Government ke Udyam Registration portal par accurate details ke saath application file karte hain.",
        },
        {
          title: "Verification",
          description:
            "PAN aur GST details ke saath auto-verification process complete karte hain.",
        },
        {
          title: "Udyam Certificate",
          description:
            "Registration successful hote hi aapko Udyam Certificate provide karte hain.",
        },
      ],
      whyChooseUs: [
        "Sahi MSME category selection — koi confusion nahi",
        "Fast, error-free online registration",
        "Government scheme benefits ke baare mein guidance",
        "Existing GST/business data ke saath easy verification",
        "Poore Haryana aur India ke businesses ke liye service",
      ],
    },
    faqs: [
      {
        question: "MSME Registration se kya fayda hota hai?",
        answer:
          "Collateral-free bank loans, lower interest rates, government tender preference, delayed payment protection aur various subsidy schemes ka fayda milta hai.",
      },
      {
        question: "MSME Registration ke liye GST number zaroori hai?",
        answer:
          "Kuch categories mein GST number zaroori hota hai, lekin kuch chhote businesses (jo GST se exempt hain) bina GST ke bhi Udyam Registration kar sakte hain. Hum aapki eligibility check kar lete hain.",
      },
      {
        question: "MSME Registration mein kitna time lagta hai?",
        answer:
          "Sahi documents ke saath, generally 1-3 working days mein Udyam Registration certificate mil jata hai.",
      },
      {
        question: "Kya existing business bhi MSME Registration kar sakta hai?",
        answer:
          "Haan, naye aur existing dono tarah ke businesses Udyam Registration kar sakte hain, bas unka investment aur turnover MSME limits ke andar hona chahiye.",
      },
    ],
  },

  {
    slug: "gst-notice-reply",
    metaTitle: "GST Notice Reply Services in India | Rajput Lalit & Associates",
    metaDescription:
      "Received a GST notice? Get professional, timely GST Notice Reply and assessment support across India from experienced GST consultants at Rajput Lalit & Associates.",
    keywords: [
      "GST Notice Reply",
      "GST Notice Reply Services",
      "GST Show Cause Notice Reply",
      "GST Notice Consultant",
      "GST Assessment Support",
    ],
    heroTitle: "GST Notice Reply & Assessment Support",
    heroSubtitle:
      "Received a GST notice? Don't panic — get a carefully analyzed, professionally drafted and timely reply from experienced GST consultants.",
    schemaName: "GST Notice Reply",
    schemaDescription:
      "Professional GST notice reply and assessment support services across India.",
    content: {
      overviewTitle: "GST Notice Reply — Professional, Timely, Accurate",
      overviewParagraphs: [
        "GST department se notice aana stressful ho sakta hai, lekin sahi tarike se aur time par reply karne se zyadatar matters resolve ho jaate hain. Har notice ka apna reason aur deadline hota hai — chahe wo mismatch notice ho, show cause notice ho ya scrutiny notice.",
        "Hum aapke notice ko carefully analyze karke, uski exact reason samajh kar, sahi documentation ke saath professional reply taiyaar karte hain — aur agar zaroorat pade to assessment proceedings mein bhi represent karte hain.",
      ],
      whoNeedsThis: [
        "Businesses jinhe GSTR mismatch ya scrutiny notice mila ho",
        "Businesses jinhe Show Cause Notice (SCN) mila ho",
        "Late filing ya non-filing ki wajah se notice paane wale taxpayers",
        "Input Tax Credit (ITC) mismatch ke notices",
        "Assessment ya audit proceedings ka samna kar rahe businesses",
      ],
      documentsRequired: [
        "GST Notice ki copy",
        "GST Registration Certificate",
        "Relevant period ki filed returns",
        "Sales/purchase invoices (jo notice se related ho)",
        "Bank statements (agar zaroorat pade)",
      ],
      process: [
        {
          title: "Notice Analysis",
          description:
            "Notice ko carefully padh kar uska exact reason aur deadline identify karte hain.",
        },
        {
          title: "Documentation Review",
          description:
            "Relevant returns, invoices aur records collect karke case prepare karte hain.",
        },
        {
          title: "Reply Drafting",
          description:
            "Professional, legally sound reply draft karke GST portal par submit karte hain.",
        },
        {
          title: "Follow-up & Representation",
          description:
            "Zaroorat pade to assessment/hearing proceedings mein bhi represent karte hain jab tak matter resolve na ho.",
        },
      ],
      whyChooseUs: [
        "Har type ke GST notice ka experience (SCN, scrutiny, mismatch)",
        "Timely reply — deadline miss hone ka risk nahi",
        "Clear communication — kya ho raha hai, hamesha update milta hai",
        "Penalty aur complications minimize karne ka focus",
        "Ambala aur poore Haryana ke businesses ke liye assessment support",
      ],
    },
    faqs: [
      {
        question: "GST Notice ka reply kitne time mein dena hota hai?",
        answer:
          "Ye notice type par depend karta hai — generally 7 se 30 din ka time diya jata hai. Notice milte hi jitni jaldi ho sake hume contact karein taaki deadline miss na ho.",
      },
      {
        question: "Agar main notice ignore kar doon to kya hoga?",
        answer:
          "Notice ignore karne se penalty, interest, ya registration cancellation tak ho sakta hai. Isliye timely aur sahi reply dena bahut zaroori hai.",
      },
      {
        question: "Kya har notice serious hota hai?",
        answer:
          "Nahi, kai notices simple clarification ya mismatch ke liye hote hain jo sahi documentation se easily resolve ho jaate hain. Hum pehle notice analyze karke exact situation batate hain.",
      },
      {
        question: "Kya aap assessment hearing mein bhi represent karte hain?",
        answer:
          "Haan, zaroorat padne par hum aapki taraf se documentation aur representation dono mein support karte hain.",
      },
    ],
  },
];
