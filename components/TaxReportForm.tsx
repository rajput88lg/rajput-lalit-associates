"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Lock, Sparkles } from "lucide-react";

import ProductCheckout from "@/components/ProductCheckout";
import { buildTaxReport, sanitizeTaxInput } from "@/lib/taxReport";
import { formatINR } from "@/lib/incomeTaxCalculator";
import { trackEvent } from "@/lib/gaEvents";
import { PAID_SERVICES } from "@/lib/paidServices";

const PRICE = PAID_SERVICES["tax-report"].amount;

type Field = {
  key: string;
  label: string;
  hint?: string;
};

const INCOME_FIELDS: Field[] = [
  { key: "salary", label: "Gross annual salary", hint: "CTC minus employer PF — as in Form 16 / salary slip × 12" },
  { key: "basic", label: "Annual Basic + DA", hint: "Needed for HRA and NPS" },
  { key: "hraReceived", label: "Annual HRA received", hint: "0 if not part of salary" },
  { key: "rentPaid", label: "Annual rent you pay", hint: "0 if you live in your own house" },
  { key: "otherIncome", label: "Other income (FD/savings interest, rent received)", hint: "Yearly total" },
];

const DEDUCTION_FIELDS: Field[] = [
  { key: "sec80C", label: "80C: EPF + PPF + ELSS + LIC + home loan principal + tuition fee" },
  { key: "healthSelf", label: "80D: Health insurance premium (self & family)" },
  { key: "healthParents", label: "80D: Health insurance premium (parents)" },
  { key: "npsSelf", label: "80CCD(1B): Your own extra NPS contribution" },
  { key: "homeLoanInterest", label: "Home loan interest (self-occupied house)" },
  { key: "employerNps", label: "Employer's NPS contribution (80CCD(2))" },
];

const inputClass =
  "w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]";

export default function TaxReportForm() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [ageGroup, setAgeGroup] = useState("below60");
  const [metro, setMetro] = useState(false);
  const [parentsSenior, setParentsSenior] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const inputs = useMemo(
    () => sanitizeTaxInput({ ...values, ageGroup, metro, parentsSenior }),
    [values, ageGroup, metro, parentsSenior]
  );
  const report = useMemo(() => (inputs ? buildTaxReport(inputs) : null), [inputs]);

  const numberInput = (f: Field) => (
    <label key={f.key} className="block">
      <span className="text-sm font-semibold text-gray-800">{f.label}</span>
      <input
        className={`${inputClass} mt-1`}
        inputMode="numeric"
        placeholder="₹ 0"
        value={values[f.key] || ""}
        onChange={(e) => {
          setValues({ ...values, [f.key]: e.target.value.replace(/[^\d]/g, "") });
          setShowPreview(false);
        }}
      />
      {f.hint && <span className="mt-1 block text-xs text-gray-500">{f.hint}</span>}
    </label>
  );

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-extrabold text-[#002b5c]">1. Your income (yearly)</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-gray-800">Your age</span>
            <select className={`${inputClass} mt-1`} value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}>
              <option value="below60">Below 60</option>
              <option value="60to79">60 to 79</option>
              <option value="80plus">80 or above</option>
            </select>
          </label>
          {INCOME_FIELDS.map(numberInput)}
          <label className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3">
            <input type="checkbox" className="h-5 w-5 accent-[#d99a2b]" checked={metro} onChange={(e) => setMetro(e.target.checked)} />
            <span className="text-sm text-gray-800">I live in Delhi, Mumbai, Kolkata or Chennai</span>
          </label>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-extrabold text-[#002b5c]">2. What you already invest / pay (yearly)</h3>
        <p className="mt-1 text-sm text-gray-600">Leave 0 where it doesn&apos;t apply — the report will tell you what you are missing.</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {DEDUCTION_FIELDS.map(numberInput)}
          <label className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3">
            <input type="checkbox" className="h-5 w-5 accent-[#d99a2b]" checked={parentsSenior} onChange={(e) => setParentsSenior(e.target.checked)} />
            <span className="text-sm text-gray-800">My parents are 60 or older</span>
          </label>
        </div>
      </div>

      <button
        type="button"
        disabled={!report}
        onClick={() => {
          setShowPreview(true);
          trackEvent("tax_report_preview");
        }}
        className="w-full rounded-xl bg-[#002b5c] px-6 py-4 font-extrabold text-white transition hover:bg-[#06477f] disabled:opacity-50"
      >
        {report ? "Show my free tax check" : "Enter your salary to continue"}
      </button>

      {showPreview && report && (
        <div className="overflow-hidden rounded-2xl border-2 border-[#d99a2b] bg-white shadow-lg">
          <div className="bg-[#002b5c] p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#f0b84b]">Free tax check — {report.fy}</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm text-blue-100">Better regime for you</p>
                <p className="text-2xl font-extrabold">{report.recommended === "new" ? "New regime" : "Old regime"}</p>
              </div>
              <div>
                <p className="text-sm text-blue-100">Your tax right now</p>
                <p className="text-2xl font-extrabold">{formatINR(Math.min(report.oldRegime.totalTax, report.newRegime.totalTax))}</p>
              </div>
              <div>
                <p className="text-sm text-blue-100">You could save up to</p>
                <p className="text-2xl font-extrabold text-[#f0b84b]">{formatINR(report.potentialSaving)} more</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 p-6 lg:grid-cols-2">
            <div>
              <p className="flex items-center gap-2 font-bold text-[#002b5c]">
                <Lock size={18} className="text-[#d99a2b]" /> Unlock your full report for ₹{PRICE}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {[
                  "Old vs New regime — line-by-line working",
                  "Section-wise table: what you used, what's left, tax saved if you use it",
                  "Break-even point: when the old regime starts winning for you",
                  "Employer NPS salary restructuring saving",
                  `${report.actions.length}-step personal action plan with exact amounts`,
                  "Print or save as PDF · emailed to you · re-open any time",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-600" /> {t}
                  </li>
                ))}
              </ul>
              {report.potentialSaving > PRICE && (
                <p className="mt-4 flex items-start gap-2 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
                  <Sparkles size={16} className="mt-0.5 shrink-0" />
                  The report costs ₹{PRICE}; the saving it shows you is {formatINR(report.potentialSaving)}.
                </p>
              )}
            </div>
            <ProductCheckout
              service="tax-report"
              compact
              buttonLabel={`Pay ₹${PRICE} & Get Full Report`}
              extra={() => (inputs ? { inputs } : "Please enter your salary first.")}
            />
          </div>
        </div>
      )}
    </div>
  );
}
