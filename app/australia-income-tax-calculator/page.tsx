import type { Metadata } from "next";
import GlobalTaxPage from "@/components/GlobalTaxPage";

const SLUG = "australia-income-tax-calculator";
const TITLE = "Australia Income Tax Calculator 2026-27 — Take-Home Pay (New 15% Rate)";
const DESCRIPTION =
  "Free 2026-27 Australian pay calculator with the new 15% tax rate from 1 July 2026, low income tax offset and Medicare levy. See your take-home pay per month and fortnight.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["Australia income tax calculator 2026-27", "take home pay calculator Australia", "ATO tax calculator 2026", "salary after tax Australia", "15% tax rate 2026"],
  alternates: { canonical: `/${SLUG}` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `https://www.rajputlalitassociates.in/${SLUG}`, siteName: "Rajput Lalit & Associates", locale: "en_AU", type: "website" },
};

export default function Page() {
  return (
    <GlobalTaxPage
      country="AU"
      badge="2026-27 income year · ATO rates"
      heading="Australia Income Tax Calculator 2026-27"
      subheading="Your Take-Home Pay"
      intro="Includes the cut from 16% to 15% from 1 July 2026, the low income tax offset and the Medicare levy."
      breadcrumb="Australia Income Tax Calculator"
      assumptions={[
        "Resident rates for 2026-27: 0% to $18,200, 15% to $45,000, 30% to $135,000, 37% to $190,000, 45% above.",
        "Low income tax offset up to $700; Medicare levy 2% with the single low-income threshold ($28,011).",
        "Not included: HELP/HECS repayments, Medicare levy surcharge, other offsets. Super is paid by your employer on top of salary.",
        "An estimate for planning — the ATO works out your final tax when you lodge.",
      ]}
      faqs={[
        { question: "What changed on 1 July 2026?", answer: "The tax rate on income between $18,201 and $45,000 fell from 16% to 15%, saving up to about $268 a year." },
        { question: "What is the Medicare levy?", answer: "2% of taxable income for most residents, on top of income tax. Low-income earners pay less or nothing." },
        { question: "What is the low income tax offset?", answer: "Up to $700 off your tax if you earn $37,500 or less, reducing gradually until it cuts out at $66,667." },
        { question: "I'm Indian and live in Australia — do I pay tax in India too?", answer: "Your Australian salary isn't taxed in India while you are an NRI. Indian rent, NRO interest or property sales are taxed in India, and Australia usually gives a foreign income tax offset. Note Australia's July–June year differs from India's April–March. Try our free NRI tax check." },
      ]}
    />
  );
}
