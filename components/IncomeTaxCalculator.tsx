"use client";

import { useId, useMemo, useState } from "react";
import { sendLead } from "@/lib/sendLead";
import LeadFallback from "@/components/LeadFallback";
import {
  Calculator,
  IndianRupee,
  Users,
  Download,
  Mail,
  Loader2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { calculateIncomeTax, formatINR, type AgeGroup } from "@/lib/incomeTaxCalculator";

export default function IncomeTaxCalculator() {
  const [annualIncome, setAnnualIncome] = useState(1000000);
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("below60");
  const [oldRegimeDeductions, setOldRegimeDeductions] = useState(150000);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [sending, setSending] = useState(false);
  const [reportReady, setReportReady] = useState(false);
  const [leadError, setLeadError] = useState("");

  const result = useMemo(
    () => calculateIncomeTax({ annualIncome, ageGroup, oldRegimeDeductions }),
    [annualIncome, ageGroup, oldRegimeDeductions]
  );

  const handleGetReport = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setLeadError("");

    const summary = `
Income Tax Calculator (Old vs New Regime) — enquiry

Name: ${name}
Email: ${email}
Mobile: ${mobile}

--- Inputs ---
Annual income: ${formatINR(annualIncome)}
Age group: ${ageGroup}
Old regime deductions claimed: ${formatINR(oldRegimeDeductions)}

--- Result ---
New Regime tax: ${formatINR(result.newRegime.totalTax)}
Old Regime tax: ${formatINR(result.oldRegime.totalTax)}
Recommended: ${result.recommended === "same" ? "Both are equal" : result.recommended === "new" ? "New Regime" : "Old Regime"}
Savings: ${formatINR(result.savings)}
`.trim();

    try {
      await sendLead(
        "income-tax-calculator",
        {
          name,
          email,
          mobile,
          service: "Income Tax Calculator (Old vs New Regime)",
          payment_id: "Free Tool Lead",
          message: summary,
        }
      );
      setReportReady(true);
    } catch (err) {
      console.error("Lead email error:", err);
      setReportReady(true);
      setLeadError(
        "Report taiyaar hai. (Humein aapki details bhejne mein dikkat aayi — zaroorat ho to seedha call kar lein.)"
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        {/* ---------------- INPUT CARD ---------------- */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden print:hidden">
          <div className="bg-gradient-to-r from-[#001d40] via-[#002b5c] to-[#06477f] px-6 md:px-10 py-7 text-white">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#d99a2b] flex items-center justify-center flex-shrink-0">
                <Calculator size={28} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold">
                  Compare Old vs New Regime
                </h2>
                <p className="mt-1 text-blue-100 text-sm">
                  For FY 2025-26 (AY 2026-27) — the return being filed now.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-8">
            <SliderField
              label="Annual Gross Income (Salaried)"
              icon={<IndianRupee size={18} />}
              value={annualIncome}
              onChange={setAnnualIncome}
              min={300000}
              max={5000000}
              step={10000}
              display={formatINR(annualIncome)}
            />

            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-[#002b5c] mb-3">
                <Users size={18} className="text-[#d99a2b]" />
                Age Group
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(
                  [
                    { key: "below60", label: "Below 60" },
                    { key: "60to79", label: "60 – 79 yrs" },
                    { key: "80plus", label: "80+ yrs" },
                  ] as { key: AgeGroup; label: string }[]
                ).map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setAgeGroup(opt.key)}
                    className={`py-3 rounded-xl font-bold text-sm border-2 transition ${
                      ageGroup === opt.key
                        ? "bg-[#002b5c] border-[#002b5c] text-white"
                        : "bg-white border-gray-200 text-gray-600 hover:border-[#d99a2b]/50"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Age group only affects the Old Regime slabs — the New Regime uses the same slabs for everyone.
              </p>
            </div>

            <SliderField
              label="Deductions you'd claim under Old Regime (80C, 80D, HRA, home loan interest, etc.)"
              icon={<IndianRupee size={18} />}
              value={oldRegimeDeductions}
              onChange={setOldRegimeDeductions}
              min={0}
              max={500000}
              step={5000}
              display={formatINR(oldRegimeDeductions)}
            />
          </div>
        </div>

        {/* ---------------- RESULTS ---------------- */}
        <div className="mt-10" id="tax-report">
          <div className="hidden print:block mb-6 border-b-2 border-[#d99a2b] pb-4">
            <h1 className="text-2xl font-extrabold text-[#002b5c]">
              Rajput Lalit &amp; Associates
            </h1>
            <p className="text-sm text-gray-600">
              GST • Income Tax • Accounting — Ambala City, Haryana
            </p>
            <p className="text-sm text-gray-600">
              +91 93549 53603 • www.rajputlalitassociates.in
            </p>
            <p className="mt-3 font-bold">Income Tax Calculator — Report</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <RegimeCard
              title="New Regime"
              tax={result.newRegime.totalTax}
              recommended={result.recommended === "new"}
            >
              <Row label="Gross income" value={formatINR(result.newRegime.grossIncome)} />
              <Row label="Standard deduction" value={formatINR(result.newRegime.standardDeduction)} />
              <Row label="Taxable income" value={formatINR(result.newRegime.taxableIncome)} />
              <Row label="Tax before rebate" value={formatINR(result.newRegime.taxBeforeRebate)} />
              <Row label="Section 87A rebate" value={formatINR(result.newRegime.rebate)} />
              {result.newRegime.marginalRelief > 0 && (
                <Row label="Marginal relief" value={formatINR(result.newRegime.marginalRelief)} />
              )}
              <Row label="Health & education cess (4%)" value={formatINR(result.newRegime.cess)} />
              <Row label="Total tax payable" value={formatINR(result.newRegime.totalTax)} bold />
            </RegimeCard>

            <RegimeCard
              title="Old Regime"
              tax={result.oldRegime.totalTax}
              recommended={result.recommended === "old"}
            >
              <Row label="Gross income" value={formatINR(result.oldRegime.grossIncome)} />
              <Row label="Standard deduction" value={formatINR(result.oldRegime.standardDeduction)} />
              <Row label="Other deductions (80C/80D/HRA etc.)" value={formatINR(result.oldRegime.otherDeductions)} />
              <Row label="Taxable income" value={formatINR(result.oldRegime.taxableIncome)} />
              <Row label="Tax before rebate" value={formatINR(result.oldRegime.taxBeforeRebate)} />
              <Row label="Section 87A rebate" value={formatINR(result.oldRegime.rebate)} />
              <Row label="Health & education cess (4%)" value={formatINR(result.oldRegime.cess)} />
              <Row label="Total tax payable" value={formatINR(result.oldRegime.totalTax)} bold />
            </RegimeCard>
          </div>

          <div className="mt-6 bg-white border-2 border-[#d99a2b] rounded-3xl p-7 md:p-9 text-center">
            {result.recommended === "same" ? (
              <p className="text-xl font-extrabold text-[#002b5c]">
                Both regimes give you the same tax — {formatINR(result.newRegime.totalTax)}
              </p>
            ) : (
              <p className="text-xl md:text-2xl font-extrabold text-[#002b5c]">
                <span className="text-[#d99a2b]">
                  {result.recommended === "new" ? "New Regime" : "Old Regime"}
                </span>{" "}
                saves you {formatINR(result.savings)} this year
              </p>
            )}
          </div>

          <div className="mt-8 bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white rounded-3xl p-7 md:p-10 shadow-2xl print:hidden">
            {!reportReady ? (
              <>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#d99a2b] flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold">
                      Get this as a detailed report
                    </h3>
                    <p className="mt-2 text-blue-100 leading-7">
                      Full slab-by-slab breakdown for both regimes, sent to your inbox.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleGetReport} className="mt-7 grid sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    required
                    aria-label="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="rounded-xl px-4 py-3.5 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
                  />
                  <input
                    type="email"
                    required
                    aria-label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="rounded-xl px-4 py-3.5 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
                  />
                  <input
                    type="tel"
                    required
                    aria-label="Phone number, with country code"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Phone (with country code)"
                    className="rounded-xl px-4 py-3.5 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
                  />

                  <button
                    type="submit"
                    disabled={sending}
                    className="sm:col-span-3 btn-shine inline-flex items-center justify-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white py-4 rounded-xl font-extrabold transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-60"
                  >
                    {sending ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Preparing your report...
                      </>
                    ) : (
                      <>
                        <Download size={20} />
                        Get My Detailed Report
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-4 text-xs text-blue-200">
                  No spam. We use your details only to send this report and,
                  if useful, discuss your tax filing.
                </p>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#d99a2b] flex items-center justify-center">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="mt-5 text-2xl md:text-3xl font-extrabold">
                  Your report is ready
                </h3>
                <p className="mt-3 text-blue-100 leading-7 max-w-xl mx-auto">
                  Click below to save it as a PDF, or talk to us directly.
                </p>

                {leadError && <p className="mt-4 text-sm text-[#f0b84b]">{leadError}</p>}
                {leadError && <LeadFallback form="income_tax_calculator" fields={{ Naam: name, Mobile: mobile, Tool: "Income Tax Calculator" }} />}

                <div className="mt-7 flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="btn-shine inline-flex items-center justify-center gap-3 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-7 py-4 rounded-xl font-extrabold transition-all duration-300 shadow-lg"
                  >
                    <Download size={20} />
                    Save Report as PDF
                  </button>
                  <a
                    href="https://wa.me/919354953603"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 border border-white/40 hover:bg-white hover:text-[#002b5c] px-7 py-4 rounded-xl font-extrabold transition"
                  >
                    Talk to a Consultant
                  </a>
                </div>
              </div>
            )}
          </div>

          <p className="mt-8 text-xs text-gray-500 leading-6">
            <strong>Disclaimer:</strong> This calculator assumes salaried income
            only (standard deduction applied automatically) and does not
            account for business income, capital gains taxed at special
            rates, or surcharge on very high incomes. It is a planning
            estimate, not a substitute for a proper tax computation — talk to
            us before filing.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- small presentational helpers ---------------- */

function SliderField({
  label,
  icon,
  value,
  onChange,
  min,
  max,
  step,
  display,
}: {
  label: string;
  icon: React.ReactNode;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  display: string;
}) {
  const inputId = useId();
  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-2">
        <label className="flex items-center gap-2 text-sm font-bold text-[#002b5c]" htmlFor={inputId}>
          <span className="text-[#d99a2b]">{icon}</span>
          {label}
        </label>
        <span className="text-sm font-extrabold text-[#002b5c] bg-[#f7f9fc] border border-gray-200 rounded-lg px-3 py-1">
          {display}
        </span>
      </div>
      <input
        id={inputId}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#d99a2b]"
      />
      <div className="flex justify-between mt-1 text-xs text-gray-500">
        <span>{min.toLocaleString("en-IN")}</span>
        <span>{max.toLocaleString("en-IN")}</span>
      </div>
    </div>
  );
}

function RegimeCard({
  title,
  tax,
  recommended,
  children,
}: {
  title: string;
  tax: number;
  recommended: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`bg-white border-2 rounded-2xl p-6 md:p-8 relative ${
        recommended ? "border-[#d99a2b]" : "border-gray-200"
      }`}
    >
      {recommended && (
        <span className="absolute -top-3 right-6 bg-[#d99a2b] text-white text-xs font-extrabold px-3 py-1 rounded-full">
          Recommended
        </span>
      )}
      <h3 className="font-extrabold text-[#002b5c] text-xl flex items-center justify-between">
        {title}
        <ArrowRight size={18} className="text-[#d99a2b]" />
      </h3>
      <p className="mt-1 text-3xl font-extrabold text-[#002b5c]">{formatINR(tax)}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between gap-4 py-2.5 border-b border-gray-100 last:border-0 ${
        bold ? "font-extrabold text-[#002b5c]" : "text-gray-700"
      }`}
    >
      <span className="text-sm">{label}</span>
      <span className="text-sm text-right">{value}</span>
    </div>
  );
}
