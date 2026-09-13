"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Send,
  IndianRupee,
  FileCheck2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import {
  determineForm145Part,
  CATEGORY_OPTIONS,
  FORM146_DOCUMENTS,
  type RemittanceCategory,
} from "@/lib/form145RepatriationGuide";

export default function Form145RepatriationGuide() {
  const [category, setCategory] = useState<RemittanceCategory | null>(null);
  const [amount, setAmount] = useState("");
  const [hasCert, setHasCert] = useState(false);

  const needsAmount =
    category !== null &&
    category !== "exempt_list" &&
    category !== "other_unsure" &&
    category !== "inheritance_gift";

  const amountNum = amount === "" ? 0 : Number(amount);
  const needsCertQuestion = needsAmount && amountNum > 500000;

  const ready =
    category !== null && (!needsAmount || amount !== "");

  const result = useMemo(() => {
    if (!ready || category === null) return null;
    return determineForm145Part({
      category,
      aggregateAmount: amountNum,
      hasLowerTdsCertificate: hasCert,
    });
  }, [ready, category, amountNum, hasCert]);

  const badgeColour =
    result?.part === "C"
      ? "bg-[#d99a2b]"
      : result?.part === "UNSURE"
      ? "bg-gray-500"
      : "bg-green-600";

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="guide">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#001d40] via-[#002b5c] to-[#06477f] px-6 md:px-10 py-7 text-white">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#d99a2b] flex items-center justify-center flex-shrink-0">
                <Send size={26} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold">
                  Which Part Applies to You?
                </h2>
                <p className="mt-1 text-blue-100 text-sm">
                  Form 145 (earlier Form 15CA) for remittances from 1 April 2026
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-8">
            <div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 w-7 h-7 rounded-lg bg-[#002b5c] text-[#f0b84b] flex items-center justify-center text-sm font-extrabold flex-shrink-0">
                  1
                </span>
                <div className="min-w-0 flex-1">
                  <label className="block font-bold text-[#002b5c]">
                    What are you remitting abroad?
                  </label>
                  <p className="mt-1.5 text-sm text-gray-500 leading-6">
                    Pick the option that best describes the source of funds.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {CATEGORY_OPTIONS.map((o) => {
                      const active = o.value === category;
                      return (
                        <button
                          key={o.value}
                          type="button"
                          onClick={() => setCategory(o.value)}
                          title={o.hint}
                          className={`px-4 py-3 rounded-xl border text-sm font-semibold text-left transition-all duration-200 max-w-xs ${
                            active
                              ? "bg-[#002b5c] text-white border-[#002b5c] shadow-md"
                              : "bg-white text-gray-700 border-gray-300 hover:border-[#d99a2b]"
                          }`}
                        >
                          {o.label}
                        </button>
                      );
                    })}
                  </div>
                  {category && (
                    <p className="mt-3 text-sm text-gray-500 italic">
                      {CATEGORY_OPTIONS.find((o) => o.value === category)?.hint}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {needsAmount && (
              <div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 w-7 h-7 rounded-lg bg-[#002b5c] text-[#f0b84b] flex items-center justify-center text-sm font-extrabold flex-shrink-0">
                    2
                  </span>
                  <div className="min-w-0 flex-1">
                    <label className="block font-bold text-[#002b5c]">
                      <span className="inline-flex items-center gap-2">
                        <IndianRupee size={16} className="text-[#d99a2b]" />
                        Total remittances of this kind so far this financial
                        year (including this one)?
                      </span>
                    </label>
                    <p className="mt-1.5 text-sm text-gray-500 leading-6">
                      The ₹5 lakh threshold is on your running total for the
                      year, not this one transaction alone.
                    </p>
                    <input
                      type="number"
                      min={0}
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="e.g. 1500000"
                      className="mt-3 w-full sm:w-64 border border-gray-300 rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/25 focus:border-[#d99a2b]"
                    />
                  </div>
                </div>
              </div>
            )}

            {needsCertQuestion && (
              <div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 w-7 h-7 rounded-lg bg-[#002b5c] text-[#f0b84b] flex items-center justify-center text-sm font-extrabold flex-shrink-0">
                    3
                  </span>
                  <div className="min-w-0 flex-1">
                    <label className="block font-bold text-[#002b5c]">
                      Do you already have a Lower/Nil TDS Certificate (Form
                      128, Section 395) for this remittance?
                    </label>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => setHasCert(true)}
                        className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                          hasCert
                            ? "bg-[#002b5c] text-white border-[#002b5c] shadow-md"
                            : "bg-white text-gray-700 border-gray-300 hover:border-[#d99a2b]"
                        }`}
                      >
                        Yes, already obtained
                      </button>
                      <button
                        type="button"
                        onClick={() => setHasCert(false)}
                        className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                          !hasCert
                            ? "bg-[#002b5c] text-white border-[#002b5c] shadow-md"
                            : "bg-white text-gray-700 border-gray-300 hover:border-[#d99a2b]"
                        }`}
                      >
                        No / not applicable
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {!result && (
          <p className="mt-8 text-center text-gray-500">
            Answer the question(s) above to see which Part applies.
          </p>
        )}

        {result && (
          <div className="mt-10">
            <div className="bg-white border-2 border-[#002b5c] rounded-3xl p-7 md:p-10 shadow-xl">
              <p className="text-sm font-bold uppercase tracking-wider text-[#d99a2b]">
                Your result
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                {result.part !== "UNSURE" && result.part !== "EXEMPT" && (
                  <span
                    className={`inline-flex items-center px-6 py-3 rounded-xl text-white text-2xl md:text-3xl font-extrabold ${badgeColour}`}
                  >
                    Part {result.part}
                  </span>
                )}
                <span className="text-xl md:text-2xl font-bold text-[#002b5c]">
                  {result.headline}
                </span>
              </div>

              <ul className="mt-7 space-y-3">
                {result.explanation.map((line, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 leading-7">
                    <CheckCircle2 size={19} className="mt-1 shrink-0 text-[#d99a2b]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              {result.needsCaCertificate && (
                <div className="mt-7 bg-[#f7f9fc] border border-gray-200 rounded-2xl p-6">
                  <h3 className="font-extrabold text-[#002b5c] flex items-center gap-2">
                    <FileCheck2 size={20} className="text-[#d99a2b]" />
                    What your CA needs to prepare Form 146
                  </h3>
                  <ul className="mt-4 space-y-2 text-gray-700 leading-7 text-sm">
                    {FORM146_DOCUMENTS.map((doc) => (
                      <li key={doc} className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#d99a2b] flex-shrink-0" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* CROSS-LINKS to tools 1 & 3 */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white rounded-3xl p-7 shadow-2xl">
                <h3 className="text-xl font-extrabold">
                  Not sure of your capital gain?
                </h3>
                <p className="mt-3 text-blue-100 leading-7 text-sm">
                  Work out the exact TDS and tax on your property sale before
                  you plan the remittance.
                </p>
                <Link
                  href="/nri-property-tds-calculator"
                  className="btn-shine mt-5 inline-flex items-center gap-2 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-5 py-3 rounded-xl font-extrabold transition-all duration-300 shadow-lg hover:-translate-y-1 text-sm"
                >
                  Property TDS Calculator
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="bg-white border-2 border-[#002b5c] rounded-3xl p-7 shadow-lg">
                <h3 className="text-xl font-extrabold text-[#002b5c]">
                  Want to skip the CA certificate?
                </h3>
                <p className="mt-3 text-gray-600 leading-7 text-sm">
                  A Lower/Nil TDS Certificate moves you to the simpler Part B
                  — see exactly what to prepare.
                </p>
                <Link
                  href="/nri-lower-tds-certificate-checklist"
                  className="mt-5 inline-flex items-center gap-2 border-2 border-[#002b5c] text-[#002b5c] hover:bg-[#002b5c] hover:text-white px-5 py-3 rounded-xl font-extrabold transition-all duration-300 text-sm"
                >
                  Form 128 Checklist
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <p className="mt-8 text-xs text-gray-500 leading-6">
              <strong>Disclaimer:</strong> This tool gives a starting-point
              answer based on the category and amount you enter. It does not
              consider DTAA tie-breaker provisions, TRC requirements, or
              unusual fact patterns (part-taxable remittances, multiple
              sources combined in one transfer, and similar). Have your
              bank's specific requirements and the final Form 145/146
              confirmed by a professional before you remit.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
