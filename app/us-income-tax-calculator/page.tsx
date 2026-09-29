import type { Metadata } from "next";
import GlobalTaxPage from "@/components/GlobalTaxPage";

const SLUG = "us-income-tax-calculator";
const TITLE = "US Income Tax Calculator 2026 — Take-Home Pay After Federal Tax & FICA";
const DESCRIPTION =
  "Free 2026 US paycheck calculator: federal income tax with the new $16,100 standard deduction, Social Security, Medicare, 401(k) and your state rate. See your take-home pay per month instantly.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["US income tax calculator 2026", "take home pay calculator USA", "federal tax calculator 2026", "paycheck calculator", "2026 tax brackets calculator"],
  alternates: { canonical: `/${SLUG}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `https://www.rajputlalitassociates.in/${SLUG}`, siteName: "Rajput Lalit & Associates", locale: "en_US", type: "website" },
};

export default function Page() {
  return (
    <GlobalTaxPage
      country="US"
      badge="Tax year 2026 · IRS figures"
      heading="US Income Tax Calculator 2026"
      subheading="Your Take-Home Pay"
      intro="Enter your salary to see federal income tax, Social Security, Medicare and state tax — and what actually lands in your bank account each month."
      breadcrumb="US Income Tax Calculator"
      assumptions={[
        "2026 federal brackets and standard deduction ($16,100 single, $32,200 married filing jointly) per IRS Rev. Proc. 2025-32.",
        "Social Security 6.2% on wages up to $184,500; Medicare 1.45% plus 0.9% above $200,000 (single) or $250,000 (joint).",
        "Salary income only, standard deduction, no credits (child tax credit etc.). State tax uses the flat rate you enter.",
        "401(k) contributions reduce income tax but not Social Security/Medicare, and are shown as not reaching your paycheck.",
        "An estimate for planning — your actual return may differ.",
      ]}
      faqs={[
        { question: "What is the standard deduction for 2026?", answer: "$16,100 for single filers and married filing separately, $32,200 for married couples filing jointly and $24,150 for heads of household." },
        { question: "What are the 2026 federal tax brackets?", answer: "Seven rates — 10%, 12%, 22%, 24%, 32%, 35% and 37%. For a single filer the 37% rate starts above $640,600 of taxable income; for joint filers above $768,700." },
        { question: "Why is my take-home lower than salary minus federal tax?", answer: "Because Social Security (6.2%) and Medicare (1.45%) are also withheld from every paycheck, plus state and local tax in most states." },
        { question: "I'm an Indian living in the US — do I pay tax in India too?", answer: "Your US salary isn't taxed in India if you are an NRI. But income from India — rent, NRO interest, a property sale — is taxed in India, and you usually claim credit for that Indian tax on your US return. Our free NRI tax check shows where you stand." },
      ]}
    />
  );
}
