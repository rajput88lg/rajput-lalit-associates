"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Lock } from "lucide-react";

import ProductCheckout from "@/components/ProductCheckout";
import { buildNriReport, NRI_COUNTRIES_REPORT, sanitizeNriInput, type NriCountry } from "@/lib/nriHealthCheck";
import { formatPrice, PAID_SERVICES } from "@/lib/paidServices";
import { trackEvent } from "@/lib/gaEvents";

const ITEM = PAID_SERVICES["nri-health-check"];
const inr = (v: number) => "₹" + Math.round(Math.abs(v)).toLocaleString("en-IN");

const inputClass =
  "w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]";

const DAY_FIELDS = [
  { key: "daysThisYear", label: "Days in India this tax year (Apr 2026 – Mar 2027)", hint: "Count arrival and departure days" },
  { key: "daysPrev4Years", label: "Total days in India in the previous 4 tax years" },
  { key: "daysPrev7Years", label: "Total days in India in the previous 7 tax years" },
];

const INCOME_FIELDS = [
  { key: "nroInterest", label: "NRO savings / FD interest" },
  { key: "nreInterest", label: "NRE / FCNR interest" },
  { key: "rent", label: "Rent received from Indian property" },
  { key: "dividends", label: "Dividends from Indian shares / mutual funds" },
  { key: "capitalGains", label: "Capital gains in India (shares, funds, property)" },
  { key: "otherIncome", label: "Any other Indian income" },
  { key: "tdsDeducted", label: "TDS deducted in India (leave blank if unsure)" },
];

export default function NriHealthCheckForm({ defaultCountry = "USA" }: { defaultCountry?: NriCountry }) {
  const [v, setV] = useState<Record<string, string>>({});
  const [country, setCountry] = useState<NriCountry>(defaultCountry);
  const [category, setCategory] = useState("indian_citizen");
  const [purpose, setPurpose] = useState("employment_abroad");
  const [flags, setFlags] = useState({ nonResidentIn9of10: true, planningPropertySale: false, wantsToRepatriate: false });
  const [show, setShow] = useState(false);

  const inputs = useMemo(
    () => sanitizeNriInput({ ...v, ...flags, country, category, purpose }),
    [v, flags, country, category, purpose]
  );
  const report = useMemo(() => (inputs ? buildNriReport(inputs) : null), [inputs]);
  const hasIncome = !!report && report.grossIndianIncome > 0;

  const field = (f: { key: string; label: string; hint?: string }, prefix = "") => (
    <label key={f.key} className="block">
      <span className="text-sm font-semibold text-gray-800">{f.label}</span>
      <input
        className={`${inputClass} mt-1`}
        inputMode="numeric"
        placeholder={prefix ? `${prefix} 0` : "0"}
        value={v[f.key] || ""}
        onChange={(e) => {
          setV({ ...v, [f.key]: e.target.value.replace(/[^\d]/g, "") });
          setShow(false);
        }}
      />
      {f.hint && <span className="mt-1 block text-xs text-gray-500">{f.hint}</span>}
    </label>
  );

  const check = (key: keyof typeof flags, label: string) => (
    <label className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3">
      <input
        type="checkbox"
        className="h-5 w-5 accent-[#d99a2b]"
        checked={flags[key]}
        onChange={(e) => setFlags({ ...flags, [key]: e.target.checked })}
      />
      <span className="text-sm text-gray-800">{label}</span>
    </label>
  );

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-extrabold text-[#002b5c]">1. About you</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-gray-800">Country you live in</span>
            <select className={`${inputClass} mt-1`} value={country} onChange={(e) => setCountry(e.target.value as NriCountry)}>
              {NRI_COUNTRIES_REPORT.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-gray-800">You are</span>
            <select className={`${inputClass} mt-1`} value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="indian_citizen">Indian citizen</option>
              <option value="pio">Person of Indian Origin / OCI</option>
              <option value="foreign_national">Foreign national (not of Indian origin)</option>
            </select>
          </label>
          <label className="block sm:col-span-2">
            <span className="text-sm font-semibold text-gray-800">Your situation</span>
            <select className={`${inputClass} mt-1`} value={purpose} onChange={(e) => setPurpose(e.target.value)}>
              <option value="employment_abroad">I left India for a job / work abroad</option>
              <option value="visiting_india">I live abroad and visit India</option>
              <option value="other">Other</option>
            </select>
          </label>
          {DAY_FIELDS.map((f) => field(f))}
          {check("nonResidentIn9of10", "I was an NRI in at least 9 of the last 10 years")}
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-extrabold text-[#002b5c]">2. Your Indian income this year (in ₹, yearly)</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {INCOME_FIELDS.map((f) => field(f, "₹"))}
          {check("planningPropertySale", "I plan to sell property in India")}
          {check("wantsToRepatriate", "I want to move money from India to abroad")}
        </div>
      </div>

      <button
        type="button"
        disabled={!hasIncome}
        onClick={() => {
          setShow(true);
          trackEvent("nri_health_check_preview", { country });
        }}
        className="w-full rounded-xl bg-[#002b5c] px-6 py-4 font-extrabold text-white transition hover:bg-[#06477f] disabled:opacity-50"
      >
        {hasIncome ? "Show my free India tax check" : "Enter at least one Indian income to continue"}
      </button>

      {show && report && inputs && (
        <div className="overflow-hidden rounded-2xl border-2 border-[#d99a2b] bg-white shadow-lg">
          <div className="bg-[#002b5c] p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#f0b84b]">Free check — tax year 2026-27</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm text-blue-100">Your India status</p>
                <p className="text-2xl font-extrabold">{report.status.status}</p>
              </div>
              <div>
                <p className="text-sm text-blue-100">Indian tax return</p>
                <p className="text-2xl font-extrabold">
                  {report.itr.required ? "Required" : report.itr.recommended ? "Recommended" : "Not required"}
                </p>
              </div>
              <div>
                <p className="text-sm text-blue-100">{report.refundOrDue >= 0 ? "Likely refund" : "Likely tax still due"}</p>
                <p className="text-2xl font-extrabold text-[#f0b84b]">{inr(report.refundOrDue)}</p>
              </div>
            </div>
          </div>
          <div className="grid gap-8 p-6 lg:grid-cols-2">
            <div>
              <p className="flex items-center gap-2 font-bold text-[#002b5c]">
                <Lock size={18} className="text-[#d99a2b]" /> Unlock the full report — {formatPrice(ITEM)}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {[
                  "Why you are NRI / RNOR / resident — the exact rule that applies",
                  "Income-by-income tax working and your TDS refund estimate",
                  `${inputs.country === "Other" ? "Your country" : inputs.country}: what to report there (tax credit, account reporting, tax year mismatch)`,
                  "NRE / NRO rules and how to move money abroad (USD 1 million limit, Form 145/146)",
                  `${report.actions.length}-step personal action plan`,
                  "Print or save as PDF · emailed to you · re-open any time",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-600" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <ProductCheckout
              service="nri-health-check"
              compact
              buttonLabel={`Pay ${formatPrice(ITEM)} & Get Full Report`}
              extra={() => (inputs ? { inputs } : "Please fill in your details first.")}
            />
          </div>
        </div>
      )}
    </div>
  );
}
