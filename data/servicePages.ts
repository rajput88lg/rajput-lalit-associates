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

  {
    slug: "accounting-bookkeeping-services",
    metaTitle:
      "Accounting & Bookkeeping Services in Ambala | Rajput Lalit & Associates",
    metaDescription:
      "Monthly accounting and bookkeeping for businesses in Ambala and across India — entries, bank & GST reconciliation, TDS, payroll and year-end financial statements.",
    keywords: [
      "Accounting Services in Ambala",
      "Bookkeeping Services in Ambala",
      "Accounting and Bookkeeping Services",
      "Outsourced Accounting for Small Business",
      "Monthly Bookkeeping Services India",
      "Accountant in Ambala",
      "Financial Statements Preparation",
    ],
    heroTitle: "Accounting & Bookkeeping Services in Ambala",
    heroSubtitle:
      "Monthly bookkeeping, reconciliations and financial statements for small and growing businesses — accurate books that make GST, TDS and ITR filing smooth.",
    schemaName: "Accounting and Bookkeeping Services",
    schemaDescription:
      "Monthly accounting, bookkeeping, bank and GST reconciliation, payroll and financial statement preparation for businesses in Ambala, Haryana and across India.",
    content: {
      overviewTitle: "Accounting & Bookkeeping — Accurate Books, Stress-free Compliance",
      overviewParagraphs: [
        "Saaf aur up-to-date books of account har business ki buniyaad hain. Jab entries time par hoti hain, to har mahine pata rehta hai ki kitna profit ho raha hai, kisse payment leni hai aur kise deni hai — aur GST return, TDS aur Income Tax Return bina last-minute bhaag-daud ke file ho jaate hain.",
        "Kanoon ke hisaab se bhi books rakhna zaroori hai. Income-tax Act, 2025 ke Section 62 (pehle Section 44AA) ke tahat specified professionals aur ek limit se upar ke businesses ko books of account maintain karni hoti hain. GST registered businesses ke liye CGST Act ka Section 35 aur companies ke liye Companies Act, 2013 ka Section 128 bhi books rakhna mandatory karta hai.",
        "Hum Ambala aur poore India ke clients ke liye monthly bookkeeping, bank aur GST reconciliation, TDS aur payroll entries, aur saal ke end mein Profit & Loss Account aur Balance Sheet taiyaar karte hain — taaki aapki books hamesha audit-ready rahein aur aap apne business par focus kar sakein.",
      ],
      servicesIncluded: [
        "Daily sales, purchase, expense aur receipt/payment entries",
        "Monthly bank reconciliation (sabhi business accounts)",
        "GST reconciliation — books vs GSTR-1, GSTR-3B aur GSTR-2B",
        "Debtors/creditors ledger aur outstanding reports",
        "TDS entries aur quarterly TDS compliance support",
        "Payroll aur salary register",
        "Monthly/quarterly MIS — profit, expenses aur cash position",
        "Year-end finalisation — Profit & Loss Account aur Balance Sheet",
        "Tax audit ke liye books aur schedules ki taiyari",
      ],
      relatedLinks: [
        { label: "GST Return Filing", href: "/gst-return-filing" },
        { label: "Income Tax Return Filing", href: "/income-tax-return-filing" },
        { label: "Company Registration", href: "/company-registration" },
      ],
      whoNeedsThis: [
        "Traders, retailers aur wholesalers (proprietorship ya partnership firm)",
        "Manufacturers aur service businesses jinke daily transactions zyada hain",
        "Doctors, lawyers, architects aur consultants jaise professionals",
        "Private Limited companies, LLPs aur startups",
        "GST registered businesses jinhe har mahine ITC reconciliation chahiye",
        "Businesses jinki pichhle mahino ki books pending hain (backlog)",
      ],
      documentsRequired: [
        "Sales aur purchase invoices (ya billing software ka export)",
        "Sabhi business bank accounts ke statements",
        "Expense bills aur cash vouchers",
        "GST portal login ya GSTR-2B (reconciliation ke liye)",
        "Salary details aur TDS challans (agar applicable ho)",
        "Pichhle saal ki Balance Sheet / opening balances",
        "Loan statements aur fixed assets ke purchase bills",
      ],
      process: [
        {
          title: "Understanding & Setup",
          description:
            "Aapka business type, transactions ki volume aur current records samajh kar chart of accounts aur opening balances set karte hain.",
        },
        {
          title: "Monthly Data Collection",
          description:
            "Har mahine invoices, bank statements aur bills email, WhatsApp ya shared folder ke through collect karte hain.",
        },
        {
          title: "Entries & Reconciliation",
          description:
            "Saari entries record karke bank, GST aur party ledgers reconcile karte hain taaki koi mismatch na rahe.",
        },
        {
          title: "Reports & Year-end",
          description:
            "Monthly summary reports share karte hain aur saal ke end mein P&L aur Balance Sheet taiyaar karte hain — ITR aur audit ke liye ready.",
        },
      ],
      whyChooseUs: [
        "Accounting, GST, TDS aur Income Tax — sab ek hi team ke paas, isliye books aur returns mein mismatch nahi",
        "Har mahine time par entries — saal ke end mein backlog ka stress nahi",
        "Reconciled books — notice aur ITC loss ka risk kam",
        "Aapke financial data ki confidentiality ka pura dhyan",
        "Seedhi, simple reports — accounting jargon nahi",
        "Ambala mein in-person meeting aur poore India ke clients ke liye online service",
      ],
    },
    faqs: [
      {
        question: "Kya chhote business ko bhi books of account rakhni zaroori hai?",
        answer:
          "Income-tax Act, 2025 ke Section 62 ke hisaab se individual ya HUF business ko books tab rakhni hoti hain jab pichhle 3 saal mein kisi bhi saal income ₹2.5 lakh ya turnover ₹25 lakh se zyada ho (firm, LLP, company jaise baaki persons ke liye ye limit ₹1.2 lakh income ya ₹10 lakh turnover hai). Doctors, lawyers, CA, engineers jaise specified professionals aur GST registered businesses ke liye bhi books rakhna zaroori hai. Limit se neeche hon tab bhi books rakhna faydemand hai — loan, GST aur ITR mein kaam aati hain.",
      },
      {
        question: "Books of account kitne saal tak sambhal kar rakhni hoti hain?",
        answer:
          "GST ke liye records annual return ki due date se 72 mahine (6 saal) tak rakhne hote hain (CGST Act, Section 36). Companies ko Companies Act ke Section 128 ke tahat 8 financial years tak books preserve karni hoti hain. Income Tax ke liye bhi rules mein prescribed period tak records rakhne hote hain — isliye practically kam se kam 8 saal ka record safe rakhna best rehta hai.",
      },
      {
        question: "Tax audit kab karwana padta hai?",
        answer:
          "Income-tax Act, 2025 ke Section 63 (pehle Section 44AB) ke tahat business ka turnover ₹1 crore se zyada ho to tax audit lagta hai. Agar cash receipts total receipts ke 5% se zyada na hon aur cash payments bhi total payments ke 5% se zyada na hon, to ye limit ₹10 crore ho jaati hai. Professionals ke liye gross receipts ₹50 lakh se zyada hone par audit lagta hai. Presumptive taxation wale cases mein alag conditions hain — apna case humse check karwa sakte hain.",
      },
      {
        question: "Kya aap online bookkeeping service bhi dete hain?",
        answer:
          "Haan. Documents email, WhatsApp ya shared folder se bhej sakte hain, isliye hum poore India ke clients ki books maintain karte hain. Ambala ke clients ke liye office meeting bhi available hai.",
      },
      {
        question: "Hamari pichhle kai mahino ki books pending hain — kya aap catch-up kar sakte hain?",
        answer:
          "Haan. Hum pending (backlog) books ko priority par complete karke bank aur GST ke saath reconcile karte hain, phir aage monthly basis par current rakhte hain.",
      },
      {
        question: "Kya accounting ke saath GST return aur ITR filing bhi karte hain?",
        answer:
          "Haan. Hum GST return filing, TDS returns aur Income Tax Return filing bhi karte hain. Books aur returns ek hi team ke paas hone se figures match rehte hain aur notice ka risk kam hota hai.",
      },
    ],
  },
  {
    slug: "tds-return-filing",
    metaTitle: "TDS Return Filing Services in India | Rajput Lalit & Associates",
    metaDescription:
      "Accurate, on-time TDS Return Filing — Form 24Q, 26Q, 27Q & 27EQ — with challan matching and Form 16/16A generation by Rajput Lalit & Associates, Ambala.",
    keywords: [
      "TDS Return Filing",
      "TDS Return Filing Services",
      "TDS Return Filing Online",
      "Form 24Q Filing",
      "Form 26Q Filing",
      "TDS Return Due Date",
      "TDS Consultant Ambala",
      "Form 16 Form 16A",
    ],
    heroTitle: "TDS Return Filing Services in India",
    heroSubtitle:
      "Timely, error-free TDS Return filing — Form 24Q, 26Q, 27Q aur 27EQ — challan matching aur Form 16/16A issuance ke saath, taaki late fee, interest ya notice ka risk na rahe.",
    schemaName: "TDS Return Filing",
    schemaDescription:
      "Professional TDS Return Filing services (Form 24Q, 26Q, 27Q, 27EQ) with Form 16/16A generation for businesses and individuals across India.",
    content: {
      overviewTitle: "TDS Return Filing — Complete Compliance Support",
      overviewParagraphs: [
        "Salary, professional fees, rent, contractor payments, commission ya property purchase par TDS deduct karne wale har deductor (company, firm, proprietorship ya individual under tax audit) ko har quarter apni TDS statement file karni hoti hai — chahe us quarter mein deduction ho ya na ho. Ye obligation Income-tax Act, 2025 ki Section 397(3)(b) (purani Section 200(3)) aur Rule 219 (purani Rule 31A) ke tahat aata hai.",
        "Due date miss hone par ₹200/din late fee (capped TDS amount tak) aur ₹10,000 se ₹1,00,000 tak ki penalty lag sakti hai, iske alawa deposit late hone par alag se interest bhi charge hota hai. Hum aapke challans sahi se match karke, sahi form (24Q/26Q/27Q/27EQ) select karke, due date se pehle return file karte hain aur employees/vendors ke liye Form 16 ya 16A bhi time par issue karte hain.",
      ],
      servicesIncluded: [
        "TDS applicability aur deduction rate check (salary, professional fees, rent, contractor, commission)",
        "Quarterly TDS return preparation — Form 24Q (salary), 26Q (non-salary resident), 27Q (non-resident), 27EQ (TCS)",
        "Property purchase TDS — Form 26QB/26QC/26QD/26QE filing",
        "Challan verification aur PAN/deductee data matching (FVU validation)",
        "Correction statements (agar pichhli return mein mismatch ho)",
        "Form 16 (annual, salary) aur Form 16A (quarterly, non-salary) generation aur issuance",
        "Late fee, penalty aur interest calculation ki advance jaankari — surprises nahi",
        "TDS compliance calendar — har quarter ki due date ka reminder",
      ],
      relatedLinks: [
        { label: "Income Tax Return Filing", href: "/income-tax-return-filing" },
        { label: "Accounting & Bookkeeping", href: "/accounting-bookkeeping-services" },
        { label: "GST Return Filing", href: "/gst-return-filing" },
      ],
      whoNeedsThis: [
        "Companies, LLPs aur firms jo salary, rent, professional fees ya contractor payments karte hain",
        "Proprietorship/individuals jinka pichhle saal tax audit hua ho (TDS deduct karna mandatory)",
        "Property buyers jinhe ₹50 lakh se zyada ki property purchase par TDS deduct karna hai",
        "Landlords ko rent dene wale tenants jinhe TDS deduct karna zaroori hai",
        "Businesses jinke paas active TAN registration hai aur return file karni hai",
        "Employers jinhe employees ko Form 16 aur vendors ko Form 16A issue karna hai",
      ],
      documentsRequired: [
        "TAN aur PAN details (deductor ke)",
        "Deductees (employees/vendors) ke PAN aur payment details",
        "Challan details — BSR code, challan number, deposit date aur amount",
        "Salary structure / invoice-wise payment aur deduction details",
        "Pichhli quarter ki filed return (correction ke case mein)",
        "Property transactions ki details (26QB/26QC applicable ho to)",
      ],
      process: [
        {
          title: "Data Collection & TAN Verification",
          description:
            "Aapke payments, deductions aur challan details collect karke TAN registration aur deductee PAN details verify karte hain.",
        },
        {
          title: "Return Preparation & Challan Matching",
          description:
            "Sahi form (24Q/26Q/27Q/27EQ) mein data taiyar karke challans se match karte hain taaki FVU validation mein koi error na aaye.",
        },
        {
          title: "Filing Before Due Date",
          description:
            "Return ko due date se pehle TRACES/e-filing portal par file karke acknowledgment aapko share karte hain.",
        },
        {
          title: "Form 16 / 16A Issuance",
          description:
            "Return process hone ke baad TRACES se Form 16 (salary, annual) ya Form 16A (non-salary, quarterly) generate karke employees/vendors ko time par issue karte hain.",
        },
      ],
      whyChooseUs: [
        "Accounting, GST aur TDS ek hi team ke paas — figures mismatch ka risk nahi",
        "Har quarter due date se pehle filing — late fee aur penalty se bachaav",
        "Challan-level matching se FVU/TRACES errors kam",
        "Form 16/16A time par mile isliye employees/vendors ke ITR filing mein delay nahi",
        "Correction statements bhi handle karte hain agar purani return mein mismatch ho",
        "Ambala mein in-person meeting aur poore India ke clients ke liye online service",
      ],
    },
    faqs: [
      {
        question: "TDS return kis quarter mein kab file karni hoti hai?",
        answer:
          "FY 2026-27 ke liye due dates: Q1 (Apr–Jun) 31 July 2026, Q2 (Jul–Sep) 31 October 2026, Q3 (Oct–Dec) 31 January 2027, aur Q4 (Jan–Mar) 31 May 2027. Ye statement Income-tax Act, 2025 ki Section 397(3)(b) (purani Section 200(3)) ke tahat file hoti hai.",
      },
      {
        question: "TDS return late file karne par kya penalty lagti hai?",
        answer:
          "Section 427 (purani Section 234E) ke tahat ₹200 per din late fee lagta hai, jo total TDS amount tak capped hai. Isके alawa Section 461 (purani Section 271H) ke tahat ₹10,000 se ₹1,00,000 tak ki alag penalty bhi lag sakti hai — halaanki return due date se ek mahine ke andar file ho jaaye aur TDS/interest deposit ho chuka ho, to ye penalty nahi lagti (relaxation period).",
      },
      {
        question: "TDS deposit karne ki due date kya hai?",
        answer:
          "Har mahine deduct kiya gaya TDS agle mahine ki 7 tareekh tak deposit karna hota hai. March mahine ke liye ye due date 30 April hai. Government offices ke liye same-day book entry rule alag se applicable hai.",
      },
      {
        question: "TDS return ke liye kaunse forms file karne hote hain?",
        answer:
          "Salary payments ke liye Form 24Q (naya number 138), non-salary resident payments ke liye Form 26Q (140), non-resident payments ke liye Form 27Q (144), aur TCS ke liye Form 27EQ (143) file hota hai. Property purchase par TDS ke liye Form 26QB/26QC/26QD/26QE (141) alag se file hota hai — ye challan-cum-statement hai, isliye TAN ki zaroorat nahi.",
      },
      {
        question: "Form 16 aur Form 16A kab issue karna zaroori hai?",
        answer:
          "Salary ke liye Form 16 (naya number 130) financial year khatam hone ke baad 15 June tak annually issue karna hota hai. Non-salary payments ke liye Form 16A (131) quarterly issue hota hai — generally quarter khatam hone ke 15 din ke andar (15 Aug/Nov/Feb/Jun).",
      },
      {
        question: "TDS late deposit karne par interest kitna lagta hai?",
        answer:
          "Section 398(3) (purani Section 201(1A)) ke tahat agar TDS deduct hi nahi kiya gaya to 1% per month interest lagta hai, aur agar deduct karke deposit karne mein deri hui hai to 1.5% per month interest lagta hai — dono cases mein interest deduction/deposit ke mahine se lekar actual deposit ke mahine tak calculate hota hai (part of a month bhi full month gina jaata hai).",
      },
    ],
  },
];
