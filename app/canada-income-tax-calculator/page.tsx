import type { Metadata } from "next";
import GlobalTaxPage from "@/components/GlobalTaxPage";

const SLUG = "canada-income-tax-calculator";
const TITLE = "Canada Income Tax Calculator 2026 — Ontario Take-Home Pay (CPP, EI)";
const DESCRIPTION =
  "Free 2026 Canadian salary calculator: federal tax at the new 14% rate, Ontario tax, surtax and health premium, CPP/CPP2 and EI. See your take-home pay per month.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["Canada income tax calculator 2026", "Ontario take home pay calculator", "salary after tax Canada", "CPP EI calculator 2026", "Ontario tax calculator"],
  alternates: { canonical: `/${SLUG}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `https://www.rajputlalitassociates.in/${SLUG}`, siteName: "Rajput Lalit & Associates", locale: "en_CA", type: "website" },
};

export default function Page() {
  return (
    <GlobalTaxPage
      country="CA"
      badge="2026 tax year · CRA figures"
      heading="Canada Income Tax Calculator 2026"
      subheading="Your Take-Home Pay"
      intro="See federal and Ontario income tax, CPP and EI on your salary — and what you actually take home each month."
      breadcrumb="Canada Income Tax Calculator"
      assumptions={[
        "2026 federal brackets starting at 14%; basic personal amount $16,452 (reduced at high incomes); Canada employment amount $1,501.",
        "CPP 5.95% on earnings between $3,500 and $74,600, CPP2 4% up to $85,000; EI 1.63% up to $68,900.",
        "Ontario 2026 brackets, basic personal amount $12,989, surtax and Ontario Health Premium. Ontario's low-income tax reduction is not included.",
        "\"Other province\" shows federal tax, CPP and EI only — provincial tax is extra.",
        "Employment income only; an estimate for planning.",
      ]}
      faqs={[
        { question: "What is the lowest federal tax rate in 2026?", answer: "14% on taxable income up to $58,523. It was cut from 15% part-way through 2025." },
        { question: "How much CPP will I pay in 2026?", answer: "5.95% on earnings between $3,500 and $74,600 (maximum $4,230.45), plus CPP2 at 4% on earnings from $74,600 to $85,000 (maximum $416)." },
        { question: "What is the Ontario Health Premium?", answer: "An extra amount collected through your Ontario tax, from $0 on taxable income up to $20,000 rising to $900 above $200,600." },
        { question: "I'm from India living in Canada — does India tax me?", answer: "Your Canadian salary isn't taxed in India while you are an NRI. Indian income such as rent or NRO interest is taxed in India, and Canada usually gives a foreign tax credit. Our free NRI tax check shows your Indian position." },
      ]}
    />
  );
}
