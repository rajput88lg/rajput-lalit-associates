"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  UserCheck,
  CalendarDays,
  Globe2,
  IndianRupee,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import {
  determineResidentialStatus,
  type PersonCategory,
  type Purpose,
} from "@/lib/nriResidentialStatus";

export default function NriResidentialStatusChecker() {
  const [daysThisYear, setDaysThisYear] = useState("");
  const [daysPrev4Years, setDaysPrev4Years] = useState("");
  const [category, setCategory] = useState<PersonCategory>("indian_citizen");
  const [purpose, setPurpose] = useState<Purpose>("employment_abroad");
  const [indianIncomeAbove15L, setIncomeAbove] = useState(false);
  const [liableToTaxAbroad, setLiableAbroad] = useState(true);
  const [nonResidentIn9of10, setNr9of10] = useState(true);
  const [daysPrev7Years, setDaysPrev7] = useState("");

  const n = (v: string) => (v === "" ? 0 : Number(v));

  const ready = daysThisYear !== "";

  const result = useMemo(() => {
    if (!ready) return null;
    return determineResidentialStatus({
      daysThisYear: n(daysThisYear),
      daysPrev4Years: n(daysPrev4Years),
      category,
      purpose,
      indianIncomeAbove15L,
      liableToTaxAbroad,
      nonResidentIn9of10,
      daysPrev7Years: n(daysPrev7Years),
    });
  }, [
    ready, daysThisYear, daysPrev4Years, category, purpose,
    indianIncomeAbove15L, liableToTaxAbroad, nonResidentIn9of10, daysPrev7Years,
  ]);

  const badgeColour =
    result?.shortLabel === "NRI"
      ? "bg-green-600"
      : result?.shortLabel === "RNOR"
      ? "bg-[#d99a2b]"
      : "bg-[#002b5c]";

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="checker">
      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#001d40] via-[#002b5c] to-[#06477f] px-6 md:px-10 py-7 text-white">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#d99a2b] flex items-center justify-center flex-shrink-0">
                <UserCheck size={28} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold">
                  Answer 6 Questions
                </h2>
                <p className="mt-1 text-blue-100 text-sm">
                  For tax year 2026-27 (1 April 2026 – 31 March 2027)
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-8">

            <Q
              num={1}
              icon={<CalendarDays size={18} />}
              label="How many days were you in India during this tax year?"
              hint="Count the day you arrived and the day you left as full days in India."
            >
              <input
                type="number"
                min={0}
                max={366}
                value={daysThisYear}
                onChange={(e) => setDaysThisYear(e.target.value)}
                placeholder="e.g. 45"
                className="w-full sm:w-56 border border-gray-300 rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/25 focus:border-[#d99a2b]"
              />
            </Q>

            <Q
              num={2}
              icon={<CalendarDays size={18} />}
              label="Total days in India across the previous 4 tax years?"
              hint="Add up all four years. If it comes to 365 or more, the second test can apply to you."
            >
              <input
                type="number"
                min={0}
                value={daysPrev4Years}
                onChange={(e) => setDaysPrev4Years(e.target.value)}
                placeholder="e.g. 200"
                className="w-full sm:w-56 border border-gray-300 rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/25 focus:border-[#d99a2b]"
              />
            </Q>

            <Q
              num={3}
              icon={<Globe2 size={18} />}
              label="Which describes you?"
              hint="Some relaxations apply only to Indian citizens and people of Indian origin."
            >
              <Choices
                value={category}
                onChange={(v) => setCategory(v as PersonCategory)}
                options={[
                  { value: "indian_citizen", label: "Indian citizen" },
                  { value: "pio", label: "Person of Indian Origin (PIO/OCI)" },
                  { value: "foreign_national", label: "Foreign national" },
                ]}
              />
            </Q>

            <Q
              num={4}
              icon={<Globe2 size={18} />}
              label="What best describes your situation this year?"
              hint="Leaving India for a job, and visiting India from abroad, are treated differently."
            >
              <Choices
                value={purpose}
                onChange={(v) => setPurpose(v as Purpose)}
                options={[
                  { value: "employment_abroad", label: "I live/work abroad (left India for employment)" },
                  { value: "visiting_india", label: "I live abroad and was visiting India" },
                  { value: "other", label: "Neither of these" },
                ]}
              />
            </Q>

            <Q
              num={5}
              icon={<IndianRupee size={18} />}
              label="Is your Indian income more than ₹15 lakh this year?"
              hint="Indian-source income only — rent, capital gains, interest, business income in India. This decides whether the stricter 120-day rule applies."
            >
              <Toggle
                value={indianIncomeAbove15L}
                onChange={setIncomeAbove}
                yes="Yes, above ₹15 lakh"
                no="No, ₹15 lakh or less"
              />
            </Q>

            {indianIncomeAbove15L && category === "indian_citizen" && (
              <Q
                num={6}
                icon={<Globe2 size={18} />}
                label="Are you liable to pay tax in any other country?"
                hint="By reason of residence or domicile there. If you are not taxed anywhere, India may deem you resident regardless of days."
              >
                <Toggle
                  value={liableToTaxAbroad}
                  onChange={setLiableAbroad}
                  yes="Yes, I am taxed abroad"
                  no="No, I am not taxed anywhere"
                />
              </Q>
            )}

            {/* Only relevant once someone may be resident */}
            <div className="pt-2 border-t border-gray-100">
              <p className="text-sm font-bold text-[#002b5c] mb-4">
                Only needed if you might be a resident — helps separate RNOR from full resident
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#002b5c] mb-2">
                    Were you a non-resident in 9 of the last 10 years?
                  </label>
                  <Toggle
                    value={nonResidentIn9of10}
                    onChange={setNr9of10}
                    yes="Yes"
                    no="No"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#002b5c] mb-2">
                    Total days in India over the last 7 years
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={daysPrev7Years}
                    onChange={(e) => setDaysPrev7(e.target.value)}
                    placeholder="e.g. 400"
                    className="w-full border border-gray-300 rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/25 focus:border-[#d99a2b]"
                  />
                  <p className="mt-1.5 text-xs text-gray-500">
                    729 days or fewer keeps you in the lighter RNOR category.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- RESULT ---------------- */}
        {!result && (
          <p className="mt-8 text-center text-gray-500">
            Enter your days in India above to see your status.
          </p>
        )}

        {result && (
          <div className="mt-10">
            <div className="bg-white border-2 border-[#002b5c] rounded-3xl p-7 md:p-10 shadow-xl">
              <p className="text-sm font-bold uppercase tracking-wider text-[#d99a2b]">
                Your status for tax year 2026-27
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <span
                  className={`inline-flex items-center px-6 py-3 rounded-xl text-white text-2xl md:text-3xl font-extrabold ${badgeColour}`}
                >
                  {result.shortLabel}
                </span>
                <span className="text-xl md:text-2xl font-bold text-[#002b5c]">
                  {result.status}
                </span>
              </div>

              <div className="mt-7">
                <h3 className="font-extrabold text-[#002b5c]">Why</h3>
                <ul className="mt-3 space-y-3">
                  {result.reasons.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 leading-7">
                      <CheckCircle2
                        size={19}
                        className="mt-1 shrink-0 text-[#d99a2b]"
                      />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 bg-[#f7f9fc] border border-gray-200 rounded-2xl p-6">
                <h3 className="font-extrabold text-[#002b5c]">
                  What India can tax
                </h3>
                <p className="mt-3 text-gray-700 leading-7">{result.taxScope}</p>
              </div>

              {result.shortLabel === "RNOR" && (
                <div className="mt-5 bg-[#fff9ed] border border-[#d99a2b]/30 rounded-2xl p-6">
                  <p className="text-[#7a5514] leading-7">
                    <strong>RNOR is usually good news.</strong> It is a
                    transition status that lets returning NRIs keep foreign
                    income outside the Indian tax net for a limited period. It
                    is worth planning around deliberately — the year you slip
                    into ordinary residence, your worldwide income becomes
                    taxable.
                  </p>
                </div>
              )}
            </div>

            {/* CROSS-LINK to tool #1 */}
            <div className="mt-8 bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white rounded-3xl p-7 md:p-10 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-extrabold">
                Selling property in India?
              </h3>
              <p className="mt-3 text-blue-100 leading-7">
                {result.shortLabel === "NRI"
                  ? "As a non-resident, the buyer must deduct TDS on the full sale value — not on your profit — with no ₹50 lakh threshold. Work out exactly how much, and how much of it gets blocked."
                  : "Your residential status directly changes how TDS is deducted on a property sale. Check what it would mean in your case."}
              </p>
              <Link
                href="/nri-property-tds-calculator"
                className="btn-shine mt-6 inline-flex items-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-7 py-4 rounded-xl font-extrabold transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                Open the Property TDS Calculator
                <ArrowRight size={20} />
              </Link>
            </div>

            <p className="mt-8 text-xs text-gray-500 leading-6">
              <strong>Disclaimer:</strong> This tool applies the day-count tests
              in Section 6 of the Income-tax Act, 2025 to the answers you give.
              It does not consider tie-breaker rules under a Double Taxation
              Avoidance Agreement, split-year treatment in your country of
              residence, or unusual cases such as crew of Indian ships. Residency
              decides your entire Indian tax exposure, so please have a borderline
              case reviewed rather than relying on an online estimate.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- helpers ---------------- */

function Q({
  num,
  icon,
  label,
  hint,
  children,
}: {
  num: number;
  icon: React.ReactNode;
  label: string;
  hint: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <span className="mt-0.5 w-7 h-7 rounded-lg bg-[#002b5c] text-[#f0b84b] flex items-center justify-center text-sm font-extrabold flex-shrink-0">
          {num}
        </span>
        <div className="min-w-0 flex-1">
          <label className="block font-bold text-[#002b5c]">
            <span className="inline-flex items-center gap-2">
              <span className="text-[#d99a2b]">{icon}</span>
              {label}
            </span>
          </label>
          <p className="mt-1.5 text-sm text-gray-500 leading-6">{hint}</p>
          <div className="mt-3">{children}</div>
        </div>
      </div>
    </div>
  );
}

function Choices({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 ${
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
  );
}

function Toggle({
  value,
  onChange,
  yes,
  no,
}: {
  value: boolean;
  onChange: (v: boolean) => void;
  yes: string;
  no: string;
}) {
  return (
    <Choices
      value={value ? "yes" : "no"}
      onChange={(v) => onChange(v === "yes")}
      options={[
        { value: "yes", label: yes },
        { value: "no", label: no },
      ]}
    />
  );
}
