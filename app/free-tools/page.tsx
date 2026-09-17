import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Breadcrumb";

import {
  Percent,
  Cake,
  HeartPulse,
  TrendingUp,
  CalendarRange,
  Tag,
  Utensils,
  Landmark,
  Ruler,
  Thermometer,
} from "lucide-react";

const SLUG = "free-tools";
const PAGE_URL = `https://www.rajputlalitassociates.in/${SLUG}`;
const OG_IMAGE = `/og/${SLUG}.png`;

const TITLE =
  "50+ Free Online Calculators & Tools — Finance, Health, Converters | Rajput Lalit & Associates";
const DESCRIPTION =
  "Free online calculators and tools used worldwide — percentage, age, BMI, compound interest, date difference, discount, tip, simple interest calculators, plus length and temperature converters. No sign-up needed. More tools added regularly.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "free online calculators",
    "free calculator tools",
    "percentage calculator",
    "age calculator",
    "bmi calculator",
    "compound interest calculator",
    "unit converter",
    "free tools worldwide",
  ],
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Rajput Lalit & Associates",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Free Online Calculators & Tools — Rajput Lalit & Associates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const financeTools = [
  {
    href: "/compound-interest-calculator",
    icon: TrendingUp,
    title: "Compound Interest Calculator",
    description:
      "See how your money grows with compound interest — annually, quarterly or monthly — over any time period, with a year-wise growth schedule.",
  },
  {
    href: "/simple-interest-calculator",
    icon: Landmark,
    title: "Simple Interest Calculator",
    description:
      "Calculate simple interest and total amount using the classic Principal × Rate × Time formula.",
  },
  {
    href: "/discount-calculator",
    icon: Tag,
    title: "Discount Calculator",
    description:
      "Work out the sale price from a discount %, or the discount % from the final price — either direction.",
  },
  {
    href: "/tip-calculator",
    icon: Utensils,
    title: "Tip Calculator",
    description:
      "Work out the tip amount, total bill, and per-person split for any group size, anywhere in the world.",
  },
];

const everydayTools = [
  {
    href: "/percentage-calculator",
    icon: Percent,
    title: "Percentage Calculator",
    description:
      "Find X% of Y, what percent one number is of another, or the percentage increase/decrease between two values.",
  },
  {
    href: "/age-calculator",
    icon: Cake,
    title: "Age Calculator",
    description:
      "Find your exact age in years, months and days — or your age on any specific past or future date.",
  },
  {
    href: "/bmi-calculator",
    icon: HeartPulse,
    title: "BMI Calculator",
    description:
      "Calculate your Body Mass Index using the standard WHO formula, in metric or imperial units.",
  },
  {
    href: "/date-difference-calculator",
    icon: CalendarRange,
    title: "Date Difference Calculator",
    description:
      "Find the exact number of years, months, days or weeks between any two dates.",
  },
];

const converterTools = [
  {
    href: "/length-converter",
    icon: Ruler,
    title: "Length Converter",
    description:
      "Convert between millimetres, centimetres, metres, kilometres, inches, feet, yards and miles instantly.",
  },
  {
    href: "/temperature-converter",
    icon: Thermometer,
    title: "Temperature Converter",
    description:
      "Convert between Celsius, Fahrenheit and Kelvin instantly, with all three shown at once.",
  },
];

const allTools = [...financeTools, ...everydayTools, ...converterTools];

const listSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Free Online Calculators & Tools",
  url: PAGE_URL,
  itemListElement: allTools.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.title,
    url: `https://www.rajputlalitassociates.in${t.href}`,
  })),
};

function ToolGrid({ tools }: { tools: typeof allTools }) {
  return (
    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {tools.map((tool, i) => {
        const Icon = tool.icon;
        return (
          <Link
            key={tool.href}
            href={tool.href}
            data-reveal
            data-reveal-delay={Math.min(i + 1, 6)}
            className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#d99a2b]/40 transition-all duration-300"
          >
            <div className="icon-pop w-16 h-16 rounded-2xl bg-[#002b5c] text-[#f0b84b] flex items-center justify-center shadow-lg group-hover:bg-[#d99a2b] group-hover:text-white transition duration-300">
              <Icon size={30} />
            </div>
            <h3 className="mt-6 text-2xl font-extrabold text-[#002b5c] group-hover:text-[#d99a2b] transition-colors">
              {tool.title}
            </h3>
            <p className="mt-3 text-gray-600 leading-7">{tool.description}</p>
            <span className="mt-6 inline-flex items-center gap-2 font-bold text-[#002b5c] group-hover:text-[#d99a2b] transition-colors">
              Use this tool →
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />

      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white">
          <div className="blob-top-right absolute top-0 right-0 w-[520px] h-[520px] bg-white/5 rounded-full blur-3xl" />
          <div className="blob-bottom-left absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d99a2b]/10 rounded-full blur-3xl" />

          <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-24 text-center">
            <p className="hero-in hero-in-1 inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm font-semibold">
              <span className="soft-pulse w-2 h-2 bg-[#f0b84b] rounded-full" />
              Free • Used Worldwide • No sign-up required
            </p>

            <h1 className="hero-in hero-in-2 mt-7 text-4xl md:text-6xl font-extrabold leading-tight">
              Free Online Calculators
              <span className="block text-[#f0b84b] mt-2">&amp; Everyday Tools</span>
            </h1>

            <p className="hero-in hero-in-3 mt-6 text-lg md:text-xl text-blue-100 leading-8 max-w-3xl mx-auto">
              Simple, accurate calculators for finance, health and everyday
              conversions — built for anyone, anywhere in the world. No
              sign-up, no ads getting in the way, just instant answers.
              We're adding more tools regularly.
            </p>

            <p className="hero-in hero-in-4 mt-4 text-sm text-blue-200">
              Based in India and looking for GST, income tax or loan
              calculators instead?{" "}
              <Link href="/tools" className="font-bold underline decoration-[#d99a2b] decoration-2 underline-offset-4 hover:text-[#f0b84b] transition">
                See our India Tax &amp; Loan Calculators
              </Link>
              .
            </p>
          </div>

          <div className="gold-shimmer h-1" />
        </section>

        <Breadcrumb current="Free Tools" />

        <section className="py-20 bg-[#f7f9fc]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c] text-center">
              Finance &amp; Everyday Money Calculators
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />
            <ToolGrid tools={financeTools} />
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c] text-center">
              Everyday &amp; Health Calculators
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />
            <ToolGrid tools={everydayTools} />
          </div>
        </section>

        <section className="py-20 bg-[#f7f9fc]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 data-reveal className="text-3xl md:text-4xl font-extrabold text-[#002b5c] text-center">
              Unit Converters
            </h2>
            <div data-reveal className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />
            <ToolGrid tools={converterTools} />
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div
              data-reveal
              className="bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white rounded-3xl p-9 md:p-12"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold">
                Need GST, Income Tax or Business Compliance Help?
              </h3>
              <p className="mt-4 text-blue-100 leading-7 max-w-2xl mx-auto">
                Rajput Lalit &amp; Associates handles GST registration and
                returns, income tax filing, TDS, accounting and business
                registration for individuals and businesses across India. The
                first consultation is free.
              </p>
              <Link
                href="/#appointment"
                className="btn-shine mt-7 inline-flex items-center gap-2 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
