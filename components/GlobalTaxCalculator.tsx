"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Globe2 } from "lucide-react";

import {
  calculateAustraliaTax,
  calculateCanadaTax,
  calculateUsTax,
  money,
  type CaProvince,
  type TaxResult,
  type UsFilingStatus,
} from "@/lib/globalTaxCalculators";

type Country = "US" | "CA" | "AU";

const inputClass =
  "w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]";

const DEFAULTS: Record<Country, string> = { US: "85000", CA: "85000", AU: "95000" };

export default function GlobalTaxCalculator({ country }: { country: Country }) {
  const [salary, setSalary] = useState(DEFAULTS[country]);
  const [extra, setExtra] = useState("");
  const [status, setStatus] = useState<UsFilingStatus>("single");
  const [stateRate, setStateRate] = useState("0");
  const [province, setProvince] = useState<CaProvince>("ON");

  const n = (s: string) => Number(s.replace(/[^\d.]/g, "")) || 0;

  const r: TaxResult = useMemo(() => {
    if (country === "US") {
      return calculateUsTax({ salary: n(salary), status, retirement401k: n(extra), stateRatePct: n(stateRate) });
    }
    if (country === "CA") return calculateCanadaTax({ salary: n(salary), province, rrsp: n(extra) });
    return calculateAustraliaTax({ salary: n(salary), deductions: n(extra) });
  }, [country, salary, extra, status, stateRate, province]);

  const extraLabel =
    country === "US" ? "Pre-tax 401(k) contributions" : country === "CA" ? "RRSP contributions" : "Work-related deductions";
  const cur = r.currency;
  const per = (d: number) => money(r.takeHome / d, cur);

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
      <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <label className="block">
          <span className="text-sm font-semibold text-gray-800">Annual salary (before tax)</span>
          <input className={`${inputClass} mt-1`} inputMode="decimal" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </label>
        {country === "US" && (
          <>
            <label className="block">
              <span className="text-sm font-semibold text-gray-800">Filing status</span>
              <select className={`${inputClass} mt-1`} value={status} onChange={(e) => setStatus(e.target.value as UsFilingStatus)}>
                <option value="single">Single</option>
                <option value="married">Married filing jointly (one income)</option>
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-gray-800">State + local income tax rate (%)</span>
              <input className={`${inputClass} mt-1`} inputMode="decimal" value={stateRate} onChange={(e) => setStateRate(e.target.value)} />
              <span className="mt-1 block text-xs text-gray-500">0 for Texas, Florida, Washington etc. Use your state&apos;s approximate rate.</span>
            </label>
          </>
        )}
        {country === "CA" && (
          <label className="block">
            <span className="text-sm font-semibold text-gray-800">Province</span>
            <select className={`${inputClass} mt-1`} value={province} onChange={(e) => setProvince(e.target.value as CaProvince)}>
              <option value="ON">Ontario</option>
              <option value="OTHER">Other province (federal only)</option>
            </select>
          </label>
        )}
        <label className="block">
          <span className="text-sm font-semibold text-gray-800">{extraLabel} (yearly)</span>
          <input className={`${inputClass} mt-1`} inputMode="decimal" placeholder="0" value={extra} onChange={(e) => setExtra(e.target.value)} />
        </label>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="bg-[#002b5c] p-6 text-white">
          <p className="text-sm text-blue-100">Your take-home pay</p>
          <p className="text-4xl font-extrabold text-[#f0b84b]">{money(r.takeHome, cur)}</p>
          <p className="mt-1 text-sm text-blue-100">
            {per(12)} / month · {per(26)} every two weeks
          </p>
        </div>
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-3">Gross salary</td>
              <td className="px-6 py-3 text-right tabular-nums">{money(r.gross, cur)}</td>
            </tr>
            {r.lines.map((l) => (
              <tr key={l.label} className="border-b border-gray-200">
                <td className="px-6 py-3 text-gray-700">{l.label}</td>
                <td className="px-6 py-3 text-right tabular-nums text-red-700">−{money(l.amount, cur)}</td>
              </tr>
            ))}
            <tr className="border-b border-gray-200 font-bold text-[#002b5c]">
              <td className="px-6 py-3">Total tax &amp; contributions</td>
              <td className="px-6 py-3 text-right tabular-nums">{money(r.totalTax, cur)}</td>
            </tr>
            <tr>
              <td className="px-6 py-3 text-gray-700">Average / marginal rate</td>
              <td className="px-6 py-3 text-right tabular-nums">
                {(r.effectiveRate * 100).toFixed(1)}% / {(r.marginalRate * 100).toFixed(1)}%
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-start gap-3 border-t border-gray-200 bg-amber-50 p-5 text-sm text-gray-800">
          <Globe2 size={20} className="mt-0.5 shrink-0 text-[#d99a2b]" />
          <p>
            <strong className="text-[#002b5c]">Have income or property in India?</strong> Rent, NRO interest or a property sale is taxed
            in India too — and you may be owed a TDS refund.{" "}
            <Link href="/nri-tax-health-check" className="font-bold text-[#06477f] underline">
              Free NRI tax check
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
