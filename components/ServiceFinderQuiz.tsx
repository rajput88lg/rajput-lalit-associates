"use client";

import { useState } from "react";
import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import { trackQuizComplete } from "@/lib/gaEvents";

type Result = {
  title: string;
  description: string;
  href: string;
};

type Step =
  | { id: "start" }
  | { id: "individual" }
  | { id: "business" }
  | { id: "new-business" }
  | { id: "notice" }
  | { id: "result"; result: Result };

const RESULTS: Record<string, Result> = {
  itr: {
    title: "Income Tax Return Filing",
    description:
      "For salaried individuals, professionals or anyone who needs their personal ITR filed correctly and on time.",
    href: "/income-tax-return-filing",
  },
  gstReg: {
    title: "GST Registration",
    description:
      "You're running a business but not yet GST registered — this gets you registered with complete documentation support.",
    href: "/gst-registration",
  },
  gstReturn: {
    title: "GST Return Filing",
    description:
      "You're already GST registered — this covers accurate, on-time monthly/quarterly GST return filing.",
    href: "/gst-return-filing",
  },
  accounting: {
    title: "Accounting & Bookkeeping",
    description:
      "Keep your books, ledgers and financial statements accurate and audit-ready throughout the year.",
    href: "/accounting-bookkeeping-services",
  },
  tds: {
    title: "TDS Return Filing",
    description:
      "For businesses that deduct TDS on salaries, rent, professional fees or contractor payments.",
    href: "/tds-return-filing",
  },
  company: {
    title: "Company Registration",
    description:
      "For founders incorporating a Private Limited Company or LLP the right way, from day one.",
    href: "/company-registration",
  },
  msme: {
    title: "MSME (Udyam) Registration",
    description:
      "For small businesses and freelancers who want MSME/Udyam benefits and easier access to credit.",
    href: "/msme-registration",
  },
  gstNotice: {
    title: "GST Notice Reply",
    description:
      "Received a GST department notice? Get a professionally drafted, timely reply to avoid penalties.",
    href: "/gst-notice-reply",
  },
};

export default function ServiceFinderQuiz() {
  const [step, setStep] = useState<Step>({ id: "start" });

  const goToResult = (key: keyof typeof RESULTS) => {
    trackQuizComplete(RESULTS[key].title);
    setStep({ id: "result", result: RESULTS[key] });
  };

  const reset = () => setStep({ id: "start" });

  return (
    <div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-7 md:p-9 max-w-3xl mx-auto">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-[#002b5c] flex items-center justify-center flex-shrink-0">
          <Sparkles size={20} className="text-[#f0b84b]" />
        </div>
        <div>
          <p className="text-[#d99a2b] font-bold uppercase tracking-[0.15em] text-xs">
            Not sure where to start?
          </p>
          <h3 className="text-xl md:text-2xl font-extrabold text-[#002b5c]">
            Find the Right Service in 3 Taps
          </h3>
        </div>
      </div>

      <div className="mt-6">
        {step.id === "start" && (
          <QuizOptions
            question="What best describes you?"
            options={[
              { label: "I'm an individual / salaried employee", onClick: () => setStep({ id: "individual" }) },
              { label: "I run a business, shop or freelance work", onClick: () => setStep({ id: "business" }) },
              { label: "I'm starting a new business", onClick: () => setStep({ id: "new-business" }) },
              { label: "I received a GST / Income Tax notice", onClick: () => setStep({ id: "notice" }) },
            ]}
          />
        )}

        {step.id === "individual" && (
          <QuizOptions
            question="What do you need help with?"
            options={[
              { label: "Filing my Income Tax Return (ITR)", onClick: () => goToResult("itr") },
              { label: "I received an Income Tax notice", onClick: () => goToResult("gstNotice") },
            ]}
            onBack={reset}
          />
        )}

        {step.id === "business" && (
          <QuizOptions
            question="Are you already GST registered?"
            options={[
              { label: "No, not yet registered", onClick: () => goToResult("gstReg") },
              { label: "Yes — I need help filing GST returns", onClick: () => goToResult("gstReturn") },
              { label: "Yes — I need accounting / bookkeeping help", onClick: () => goToResult("accounting") },
              { label: "Yes — I need TDS return filing help", onClick: () => goToResult("tds") },
            ]}
            onBack={reset}
          />
        )}

        {step.id === "new-business" && (
          <QuizOptions
            question="What type of business are you starting?"
            options={[
              { label: "A Private Limited Company or LLP", onClick: () => goToResult("company") },
              { label: "A small business / shop / freelance setup", onClick: () => goToResult("msme") },
            ]}
            onBack={reset}
          />
        )}

        {step.id === "notice" && (
          <QuizOptions
            question="Which department sent the notice?"
            options={[
              { label: "GST Department", onClick: () => goToResult("gstNotice") },
              { label: "Income Tax Department", onClick: () => goToResult("itr") },
            ]}
            onBack={reset}
          />
        )}

        {step.id === "result" && (
          <div>
            <p className="text-sm font-bold text-[#d99a2b] uppercase tracking-wide">
              We recommend
            </p>
            <h4 className="mt-1 text-2xl font-extrabold text-[#002b5c]">
              {step.result.title}
            </h4>
            <p className="mt-2 text-gray-600 leading-7">
              {step.result.description}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={step.result.href}
                className="inline-flex items-center gap-2 bg-[#002b5c] hover:bg-[#06477f] text-white font-bold px-6 py-3 rounded-xl transition"
              >
                View {step.result.title}
                <ArrowRight size={18} />
              </a>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 text-gray-500 hover:text-[#002b5c] font-semibold px-3 py-3"
              >
                <RotateCcw size={16} />
                Start over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function QuizOptions({
  question,
  options,
  onBack,
}: {
  question: string;
  options: { label: string; onClick: () => void }[];
  onBack?: () => void;
}) {
  return (
    <div>
      <p className="font-bold text-gray-800">{question}</p>
      <div className="mt-4 grid sm:grid-cols-2 gap-3">
        {options.map((opt) => (
          <button
            key={opt.label}
            onClick={opt.onClick}
            className="text-left bg-[#f7f9fc] hover:bg-blue-50 border border-gray-200 hover:border-[#d99a2b] rounded-xl p-4 font-semibold text-[#002b5c] transition"
          >
            {opt.label}
          </button>
        ))}
      </div>
      {onBack && (
        <button
          onClick={onBack}
          className="mt-4 text-sm text-gray-500 hover:text-[#002b5c] font-semibold"
        >
          ← Back
        </button>
      )}
    </div>
  );
}
