"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  FileQuestion,
  IndianRupee,
  CheckCircle2,
  XCircle,
  Info,
  ArrowRight,
} from "lucide-react";

import {
  checkItrFilingRequirement,
  type TaxRegime,
} from "@/lib/nriItrFilingRequirement";

export default function NriItrFilingChecker() {
  const [income, setIncome] = useState("");
  const [regime, setRegime] = useState<TaxRegime>("new");
  const [tdsDeducted, setTdsDeducted] = useState(false);
  const [carryForwardLoss, setCarryForwardLoss] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(false);
  const [foreignTravel, setForeignTravel] = useState(false);
  const [electricity, setElectricity] = useState(false);

  const ready = income !== "";

  const result = useMemo(() => {
    if (!ready) return null;
    return checkItrFilingRequirement({
      totalIndianIncome: Number(income),
      regime,
      tdsDeducted,
      wantsToCarryForwardLoss: carryForwardLoss,
      currentAccountDepositOver1Cr: currentAccount,
      foreignTravelSpendOver2L: foreignTravel,
      electricitySpendOver1L: electricity,
    });
  }, [
    ready, income, regime, tdsDeducted, carryForwardLoss,
    currentAccount, foreignTravel, electricity,
  ]);

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="checker">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#001d40] via-[#002b5c] to-[#06477f] px-6 md:px-10 py-7 text-white">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#d99a2b] flex items-center justify-center flex-shrink-0">
                <FileQuestion size={28} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold">
                  Do I Need to File?
                </h2>
                <p className="mt-1 text-blue-100 text-sm">
                  For tax year 2026-27 (1 April 2026 – 31 March 2027)
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-8">
            <div>
              <label className="block font-bold text-[#002b5c]">
                <span className="inline-flex items-center gap-2">
                  <IndianRupee size={16} className="text-[#d99a2b]" />
                  Your total Indian-source income this year
                </span>
              </label>
              <p className="mt-1.5 text-sm text-gray-500 leading-6">
                Rent, capital gains, interest, business/professional income
                earned in India — before deductions.
              </p>
              <input
                type="number"
                min={0}
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                placeholder="e.g. 350000"
                className="mt-3 w-full sm:w-64 border border-gray-300 rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/25 focus:border-[#d99a2b]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#002b5c] mb-3">
                Which tax regime applies to you?
              </label>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setRegime("new")}
                  className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                    regime === "new"
                      ? "bg-[#002b5c] text-white border-[#002b5c] shadow-md"
                      : "bg-white text-gray-700 border-gray-300 hover:border-[#d99a2b]"
                  }`}
                >
                  New regime (default) — ₹4L exempt
                </button>
                <button
                  type="button"
                  onClick={() => setRegime("old")}
                  className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                    regime === "old"
                      ? "bg-[#002b5c] text-white border-[#002b5c] shadow-md"
                      : "bg-white text-gray-700 border-gray-300 hover:border-[#d99a2b]"
                  }`}
                >
                  Old regime (opted) — ₹2.5L exempt
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100 space-y-4">
              <p className="text-sm font-bold text-[#002b5c]">
                A few more questions — check any that apply to you this year
              </p>

              <CheckRow
                checked={tdsDeducted}
                onChange={setTdsDeducted}
                label="TDS was deducted on some of my Indian income"
                hint="On rent, property sale, interest, etc."
              />
              <CheckRow
                checked={carryForwardLoss}
                onChange={setCarryForwardLoss}
                label="I have a business or capital loss I want to carry forward"
              />
              <CheckRow
                checked={currentAccount}
                onChange={setCurrentAccount}
                label="I deposited more than ₹1 crore in a current account in India"
              />
              <CheckRow
                checked={foreignTravel}
                onChange={setForeignTravel}
                label="I spent more than ₹2 lakh on foreign travel (for myself or someone else), paid from India"
              />
              <CheckRow
                checked={electricity}
                onChange={setElectricity}
                label="I spent more than ₹1 lakh on electricity in India this year"
              />
            </div>
          </div>
        </div>

        {!result && (
          <p className="mt-8 text-center text-gray-500">
            Enter your income above to see whether filing is required.
          </p>
        )}

        {result && (
          <div className="mt-10">
            <div
              className={`bg-white border-2 rounded-3xl p-7 md:p-10 shadow-xl ${
                result.required
                  ? "border-[#d99a2b]"
                  : result.recommended
                  ? "border-[#06477f]"
                  : "border-green-600"
              }`}
            >
              <p className="text-sm font-bold uppercase tracking-wider text-[#d99a2b]">
                Your result
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                {result.required ? (
                  <>
                    <XCircle size={40} className="text-[#d99a2b]" />
                    <span className="text-2xl md:text-3xl font-extrabold text-[#002b5c]">
                      Yes — filing is mandatory
                    </span>
                  </>
                ) : result.recommended ? (
                  <>
                    <Info size={40} className="text-[#06477f]" />
                    <span className="text-2xl md:text-3xl font-extrabold text-[#002b5c]">
                      Not mandatory, but you should file
                    </span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 size={40} className="text-green-600" />
                    <span className="text-2xl md:text-3xl font-extrabold text-[#002b5c]">
                      No, filing is not required
                    </span>
                  </>
                )}
              </div>

              <ul className="mt-7 space-y-3">
                {result.reasons.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 leading-7">
                    <CheckCircle2 size={19} className="mt-1 shrink-0 text-[#d99a2b]" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CROSS-LINK */}
            {(result.required || result.recommended) && (
              <div className="mt-8 bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white rounded-3xl p-7 md:p-10 shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-extrabold">
                  Had TDS deducted on a property sale?
                </h3>
                <p className="mt-3 text-blue-100 leading-7">
                  Filing your return is the only way to get excess TDS back.
                  See exactly how much was deducted versus your real tax
                  liability.
                </p>
                <Link
                  href="/nri-property-tds-calculator"
                  className="btn-shine mt-6 inline-flex items-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-7 py-4 rounded-xl font-extrabold transition-all duration-300 shadow-lg hover:-translate-y-1"
                >
                  Open the Property TDS Calculator
                  <ArrowRight size={20} />
                </Link>
              </div>
            )}

            <p className="mt-8 text-xs text-gray-500 leading-6">
              <strong>Disclaimer:</strong> This tool applies the basic
              exemption limit and the three fixed-threshold mandatory-filing
              conditions in current use. It does not net off deductions and
              exemptions against your gross income, and it does not cover
              every possible filing trigger (a CBDT-prescribed condition
              category exists for future use, and various less-common
              situations can also require filing). If your case is
              borderline, have it confirmed rather than relying on this
              estimate.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function CheckRow({
  checked,
  onChange,
  label,
  hint,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  hint?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`w-full text-left flex items-start gap-3 p-4 rounded-xl border transition-all duration-200 ${
        checked
          ? "bg-blue-50 border-[#06477f]/40"
          : "bg-white border-gray-200 hover:border-[#d99a2b]/50"
      }`}
    >
      {checked ? (
        <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-[#06477f]" />
      ) : (
        <span className="mt-0.5 w-[22px] h-[22px] rounded-full border-2 border-gray-300 flex-shrink-0" />
      )}
      <span>
        <span className="font-semibold text-[#002b5c]">{label}</span>
        {hint && (
          <span className="block mt-1 text-sm text-gray-500 leading-6">
            {hint}
          </span>
        )}
      </span>
    </button>
  );
}
