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
}: ServiceContentData) {
  return (
    <>
      {/* OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#002b5c]">
            {overviewTitle}
          </h2>
          <div className="w-20 h-1 bg-[#d99a2b] mt-5 rounded-full" />
          <div className="mt-8 space-y-5">
            {overviewParagraphs.map((para, i) => (
              <p key={i} className="text-gray-700 leading-8 text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* WHO NEEDS THIS + DOCUMENTS REQUIRED */}
      <section className="py-20 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
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

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#002b5c] text-center">
            Our Process
          </h2>
          <div className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {process.map((step, i) => (
              <div
                key={i}
                className="relative rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition"
              >
                <div className="w-12 h-12 rounded-xl bg-[#002b5c] text-[#f0b84b] flex items-center justify-center font-extrabold text-lg">
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
      <section className="py-20 bg-[#002b5c]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">
            Why Choose Rajput Lalit &amp; Associates?
          </h2>
          <div className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white/[0.07] border border-white/10 rounded-xl p-6"
              >
                <FaCheckCircle className="mt-1 shrink-0 text-[#f0b84b]" size={20} />
                <span className="text-blue-50 leading-7 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#appointment"
              className="inline-block bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-8 py-4 rounded-xl font-bold transition"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
