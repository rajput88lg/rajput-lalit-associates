import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

type ProcessStep = {
  title: string;
  description: string;
};

export type ServiceContentData = {
  overviewTitle: string;
  overviewParagraphs: string[];
  whoNeedsThis: string[];
  documentsRequired: string[];
  process: ProcessStep[];
  whyChooseUs: string[];
  // Optional — sirf un pages par dikhte hain jinke data mein ye diye gaye
  // hon. Purane 5 service pages par koi farak nahi padta.
  servicesIncluded?: string[];
  relatedLinks?: { label: string; href: string }[];
};

// Generic, reusable content section for service pages (Income Tax Return
// Filing, Company Registration, MSME Registration, GST Notice Reply, GST
// Return Filing, etc.) — GST Registration page ke bespoke components
// (GSTRegistrationContent, GSTRegistrationProcess, GSTEligibility,
// WhyChooseGST) jaisa hi visual pattern follow karta hai, taaki design
// site ke saath consistent rahe, bina har service ke liye alag-alag
// components dobara likhe.
export default function ServiceContentBlock({
  overviewTitle,
  overviewParagraphs,
  whoNeedsThis,
  documentsRequired,
  process,
  whyChooseUs,
  servicesIncluded,
  relatedLinks,
}: ServiceContentData) {
  return (
    <>
      {/* OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            data-reveal
            className="text-3xl md:text-4xl font-extrabold text-[#002b5c]"
          >
            {overviewTitle}
          </h2>
          <div data-reveal className="w-20 h-1 bg-[#d99a2b] mt-5 rounded-full" />
          <div className="mt-8 space-y-5">
            {overviewParagraphs.map((para, i) => (
              <p
                key={i}
                data-reveal
                data-reveal-delay={Math.min(i + 1, 4)}
                className="text-gray-700 leading-8 text-lg"
              >
                {para}
              </p>
            ))}
          </div>

          {relatedLinks && relatedLinks.length > 0 && (
            <div data-reveal className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-[#002b5c]">
                Related services:
              </span>
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm px-4 py-2 rounded-full border border-[#d99a2b]/40 text-[#002b5c] hover:bg-[#d99a2b] hover:text-white transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SERVICES INCLUDED (optional) */}
      {servicesIncluded && servicesIncluded.length > 0 && (
        <section className="pb-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2
              data-reveal
              className="text-3xl md:text-4xl font-extrabold text-[#002b5c] text-center"
            >
              What&apos;s Included
            </h2>
            <div
              data-reveal
              className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full"
            />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {servicesIncluded.map((item, i) => (
                <div
                  key={i}
                  data-reveal
                  data-reveal-delay={(i % 3) + 1}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 bg-[#f7f9fc] p-5 hover:border-[#d99a2b]/40 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-[#d99a2b]" />
                  <span className="text-gray-700 leading-7">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHO NEEDS THIS + DOCUMENTS REQUIRED */}
      <section className="py-20 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div
            data-reveal="left"
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-extrabold text-[#002b5c]">
              Who Needs This?
            </h3>
            <div className="mt-6 space-y-4">
              {whoNeedsThis.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#d99a2b]" />
                  <span className="text-gray-700 leading-7">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            data-reveal="right"
            data-reveal-delay="1"
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-extrabold text-[#002b5c]">
              Documents Required
            </h3>
            <div className="mt-6 space-y-4">
              {documentsRequired.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#d99a2b]" />
                  <span className="text-gray-700 leading-7">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            data-reveal
            className="text-3xl md:text-4xl font-extrabold text-[#002b5c] text-center"
          >
            Our Process
          </h2>
          <div
            data-reveal
            className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full"
          />

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {process.map((step, i) => (
              <div
                key={i}
                data-reveal
                data-reveal-delay={Math.min(i + 1, 6)}
                className="group relative rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#d99a2b]/40 transition-all duration-300"
              >
                <div className="icon-pop w-12 h-12 rounded-xl bg-[#002b5c] text-[#f0b84b] flex items-center justify-center font-extrabold text-lg group-hover:bg-[#d99a2b] group-hover:text-white transition-colors duration-300">
                  {i + 1}
                </div>
                <h4 className="mt-5 text-lg font-bold text-[#002b5c]">
                  {step.title}
                </h4>
                <p className="mt-2 text-gray-600 leading-6">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden py-20 bg-[#002b5c]">

        {/* BACKGROUND DECORATION */}
        <div className="float-soft absolute -top-28 -right-16 w-80 h-80 rounded-full border-[50px] border-white/[0.03]" />
        <div className="float-soft-slow absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-[#d99a2b]/5" />

        <div className="relative max-w-6xl mx-auto px-6">
          <h2
            data-reveal
            className="text-3xl md:text-4xl font-extrabold text-white text-center"
          >
            Why Choose Rajput Lalit &amp; Associates?
          </h2>
          <div
            data-reveal
            className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full"
          />

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                data-reveal
                data-reveal-delay={(i % 3) + 1}
                className="flex items-start gap-4 bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 hover:border-[#f0b84b]/30 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <FaCheckCircle className="mt-1 shrink-0 text-[#f0b84b]" size={20} />
                <span className="text-blue-50 leading-7 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div data-reveal className="mt-12 text-center">
            <Link
              href="/#appointment"
              className="btn-shine inline-block bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
