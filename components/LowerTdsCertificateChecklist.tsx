"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  FileCheck2,
  CheckCircle2,
  Circle,
  ArrowRight,
  Printer,
  AlertTriangle,
} from "lucide-react";

import {
  CHECKLIST,
  TOTAL_ITEM_COUNT,
  completionPercent,
  PROCESS_STEPS,
} from "@/lib/lowerTdsChecklist";

export default function LowerTdsCertificateChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const percent = useMemo(() => completionPercent(checked), [checked]);
  const checkedCount = checked.size;

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const barColour =
    percent === 100
      ? "bg-green-600"
      : percent >= 50
      ? "bg-[#d99a2b]"
      : "bg-[#06477f]";

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="checklist">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden print:shadow-none print:border-0">
          <div className="bg-gradient-to-r from-[#001d40] via-[#002b5c] to-[#06477f] px-6 md:px-10 py-7 text-white print:bg-none print:text-[#002b5c]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#d99a2b] flex items-center justify-center flex-shrink-0 print:hidden">
                <FileCheck2 size={28} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold">
                  Document Checklist
                </h2>
                <p className="mt-1 text-blue-100 text-sm print:text-gray-600">
                  Form 128 (earlier Form 13) — Lower/Nil TDS Certificate for
                  property sale
                </p>
              </div>
            </div>
          </div>

          {/* PROGRESS BAR */}
          <div className="px-6 md:px-10 pt-6 print:hidden">
            <div className="flex items-center justify-between text-sm font-bold text-[#002b5c] mb-2">
              <span>
                {checkedCount} of {TOTAL_ITEM_COUNT} ready
              </span>
              <span>{percent}%</span>
            </div>
            <div className="h-3 rounded-full bg-gray-100 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${barColour}`}
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-8">
            {CHECKLIST.map((category) => (
              <div key={category.id}>
                <h3 className="font-extrabold text-[#002b5c] text-lg mb-4">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item) => {
                    const isChecked = checked.has(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggle(item.id)}
                        className={`w-full text-left flex items-start gap-3 p-4 rounded-xl border transition-all duration-200 print:border-0 print:p-1 ${
                          isChecked
                            ? "bg-green-50 border-green-300"
                            : "bg-white border-gray-200 hover:border-[#d99a2b]/50"
                        }`}
                      >
                        {isChecked ? (
                          <CheckCircle2
                            size={22}
                            className="mt-0.5 shrink-0 text-green-600"
                          />
                        ) : (
                          <Circle
                            size={22}
                            className="mt-0.5 shrink-0 text-gray-300 print:text-gray-500"
                          />
                        )}
                        <span>
                          <span
                            className={`font-semibold ${
                              isChecked
                                ? "text-green-800 line-through decoration-green-400 print:no-underline print:text-gray-800"
                                : "text-[#002b5c]"
                            }`}
                          >
                            {item.label}
                          </span>
                          {item.note && (
                            <span className="block mt-1 text-sm text-gray-500 leading-6">
                              {item.note}
                            </span>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="px-6 md:px-10 pb-8 print:hidden">
            <button
              type="button"
              onClick={() => window.print()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[#002b5c] text-[#002b5c] hover:bg-[#002b5c] hover:text-white px-6 py-3.5 rounded-xl font-bold transition-all duration-300"
            >
              <Printer size={18} />
              Save / Print This Checklist
            </button>
          </div>
        </div>

        {/* TIMING WARNING */}
        <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 print:hidden">
          <div className="flex items-start gap-3">
            <AlertTriangle size={22} className="text-amber-600 mt-0.5 shrink-0" />
            <p className="text-gray-700 leading-7">
              <strong>Timing matters more than paperwork here.</strong> File
              Form 128 as soon as a buyer is finalised — well before the sale
              deed is registered. Processing typically takes{" "}
              <strong>4 to 8 weeks</strong>, and the certificate is
              buyer-specific: if the buyer changes, you need a fresh
              application.
            </p>
          </div>
        </div>

        {/* PROCESS TIMELINE */}
        <div className="mt-10 print:hidden">
          <h3 className="text-2xl font-extrabold text-[#002b5c] mb-6">
            How the Application Actually Goes
          </h3>
          <div className="space-y-4">
            {PROCESS_STEPS.map((s) => (
              <div
                key={s.step}
                className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5"
              >
                <span className="w-9 h-9 rounded-full bg-[#002b5c] text-[#f0b84b] flex items-center justify-center font-extrabold flex-shrink-0">
                  {s.step}
                </span>
                <div>
                  <p className="font-bold text-[#002b5c]">{s.title}</p>
                  <p className="mt-1 text-gray-600 leading-7 text-sm">
                    {s.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CROSS-LINK to tool #1 */}
        <div className="mt-10 bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white rounded-3xl p-7 md:p-10 shadow-2xl print:hidden">
          <h3 className="text-2xl md:text-3xl font-extrabold">
            Not sure it's worth applying?
          </h3>
          <p className="mt-3 text-blue-100 leading-7">
            Form 128 is worth the effort when the gap between standard TDS
            and your real tax is large. Check your numbers first — see
            exactly how much TDS would otherwise be blocked.
          </p>
          <Link
            href="/nri-property-tds-calculator"
            className="btn-shine mt-6 inline-flex items-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-7 py-4 rounded-xl font-extrabold transition-all duration-300 shadow-lg hover:-translate-y-1"
          >
            Open the Property TDS Calculator
            <ArrowRight size={20} />
          </Link>
        </div>

        <p className="mt-8 text-xs text-gray-500 leading-6 print:mt-4">
          <strong>Disclaimer:</strong> This checklist covers documents
          commonly required for a Form 128 (Lower/Nil TDS Certificate)
          application for an NRI property sale, based on current published
          guidance. The Assessing Officer may ask for additional documents
          specific to your case, and approval of a lower rate is at their
          discretion — this tool does not guarantee approval or predict the
          rate that will be granted.
        </p>
      </div>
    </section>
  );
}
