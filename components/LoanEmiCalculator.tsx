"use client";

import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Calculator,
  IndianRupee,
  Percent,
  CalendarDays,
  Download,
  Mail,
  Loader2,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

import { calculateEmi, formatINR, formatINRShort } from "@/lib/loanCalculations";
import { affiliateLinks, getAffiliateLink } from "@/lib/affiliateLinks";

type Props = {
  /** Which entry in lib/affiliateLinks.ts this calculator's CTA button uses */
  affiliateKey: keyof typeof affiliateLinks;
  /** Shown in the "Get My Detailed Report" email lead — e.g. "Home Loan EMI Calculator" */
  serviceName: string;
  /** Text on the main affiliate CTA button, e.g. "Compare Home Loan Offers" */
  ctaLabel: string;
  defaultPrincipal: number;
  minPrincipal: number;
  maxPrincipal: number;
  principalStep: number;
  defaultRatePct: number;
  minRatePct: number;
  maxRatePct: number;
  defaultTenureYears: number;
  minTenureYears: number;
  maxTenureYears: number;
};

export default function LoanEmiCalculator({
  affiliateKey,
  serviceName,
  ctaLabel,
  defaultPrincipal,
  minPrincipal,
  maxPrincipal,
  principalStep,
  defaultRatePct,
  minRatePct,
  maxRatePct,
  defaultTenureYears,
  minTenureYears,
  maxTenureYears,
}: Props) {
  const [principal, setPrincipal] = useState(defaultPrincipal);
  const [ratePct, setRatePct] = useState(defaultRatePct);
  const [tenureYears, setTenureYears] = useState(defaultTenureYears);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [sending, setSending] = useState(false);
  const [reportReady, setReportReady] = useState(false);
  const [leadError, setLeadError] = useState("");

  const result = useMemo(
    () => calculateEmi({ principal, annualRatePct: ratePct, tenureYears }),
    [principal, ratePct, tenureYears]
  );

  const ctaHref = getAffiliateLink(affiliateKey);

  const handleGetReport = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setLeadError("");

    const summary = `
${serviceName} — enquiry

Name: ${name}
Email: ${email}
Mobile: ${mobile}

--- Inputs ---
Loan amount : ${formatINR(principal)}
Interest rate : ${ratePct}% p.a.
Tenure : ${tenureYears} years

--- Result ---
Monthly EMI : ${formatINR(result.emi)}
Total interest payable : ${formatINR(result.totalInterest)}
Total payment (principal + interest) : ${formatINR(result.totalPayment)}
`.trim();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_omi5m0r",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_ni2x60v",
        {
          name,
          email,
          mobile,
          service: serviceName,
          payment_id: "Free Tool Lead",
          message: summary,
        },
        "aslDxgzgmR4GWDM2D"
      );
      setReportReady(true);
    } catch (err) {
      console.error("EmailJS error:", err);
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
                  Enter Your Loan Details
                </h2>
                <p className="mt-1 text-blue-100 text-sm">
                  Drag the sliders or type a value. Results update instantly.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-8">
            <SliderField
              label="Loan Amount"
              icon={<IndianRupee size={18} />}
              value={principal}
              onChange={setPrincipal}
              min={minPrincipal}
              max={maxPrincipal}
              step={principalStep}
              display={formatINRShort(principal)}
            />
            <SliderField
              label="Interest Rate (per annum)"
              icon={<Percent size={18} />}
              value={ratePct}
              onChange={setRatePct}
              min={minRatePct}
              max={maxRatePct}
              step={0.05}
              display={`${ratePct.toFixed(2)}%`}
            />
            <SliderField
              label="Loan Tenure"
              icon={<CalendarDays size={18} />}
              value={tenureYears}
              onChange={setTenureYears}
              min={minTenureYears}
              max={maxTenureYears}
              step={1}
              display={`${tenureYears} ${tenureYears === 1 ? "Year" : "Years"}`}
            />
          </div>
        </div>

        {/* ---------------- RESULTS ---------------- */}
        <div className="mt-10" id="emi-report">
          {/* Print-only letterhead */}
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
            <p className="mt-3 font-bold">{serviceName} — Report</p>
          </div>

          {/* HEADLINE: the EMI */}
          <div className="bg-white border-2 border-[#d99a2b] rounded-3xl p-7 md:p-10 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#d99a2b] text-white flex items-center justify-center flex-shrink-0">
                <Calculator size={24} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold uppercase tracking-wider text-[#d99a2b]">
                  Your Monthly EMI
                </p>
                <p className="mt-2 text-4xl md:text-5xl font-extrabold text-[#002b5c] break-words">
                  {formatINR(result.emi)}
                </p>
                <p className="mt-3 text-gray-700 leading-7">
                  For a loan of <strong>{formatINR(result.principal)}</strong> at{" "}
                  <strong>{ratePct}% p.a.</strong> over{" "}
                  <strong>{tenureYears} years</strong>, you will pay a total of{" "}
                  <strong>{formatINR(result.totalPayment)}</strong> — of which{" "}
                  <strong>{formatINR(result.totalInterest)}</strong> is interest.
                </p>
              </div>
            </div>

            <a
              href={ctaHref}
              target={ctaHref.startsWith("http") ? "_blank" : undefined}
              rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className="btn-shine mt-6 inline-flex items-center justify-center gap-2 bg-[#002b5c] hover:bg-[#06477f] text-white px-7 py-4 rounded-xl font-extrabold transition-all duration-300 shadow-lg hover:-translate-y-1 print:hidden"
            >
              {ctaLabel}
              <ExternalLink size={18} />
            </a>
          </div>

          {/* NUMBERS */}
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Panel title="Payment Breakdown">
              <Row label="Loan amount" value={formatINR(result.principal)} />
              <Row label="Interest rate" value={`${ratePct}% p.a.`} />
              <Row label="Tenure" value={`${tenureYears} years`} />
              <Row label="Monthly EMI" value={formatINR(result.emi)} bold />
              <Row label="Total interest payable" value={formatINR(result.totalInterest)} highlight />
              <Row label="Total amount payable" value={formatINR(result.totalPayment)} bold />
            </Panel>

            <Panel title="Year-wise Breakdown">
              <div className="overflow-x-auto -mx-2">
                <table className="w-full text-sm min-w-[320px]">
                  <thead>
                    <tr className="text-left text-gray-500 border-b border-gray-200">
                      <th className="py-2 px-2 font-semibold">Year</th>
                      <th className="py-2 px-2 font-semibold text-right">Principal</th>
                      <th className="py-2 px-2 font-semibold text-right">Interest</th>
                      <th className="py-2 px-2 font-semibold text-right">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.yearlySchedule.slice(0, 10).map((row) => (
                      <tr key={row.year} className="border-b border-gray-100">
                        <td className="py-2 px-2 text-gray-700">{row.year}</td>
                        <td className="py-2 px-2 text-right text-gray-700">
                          {formatINRShort(row.principalPaid)}
                        </td>
                        <td className="py-2 px-2 text-right text-gray-700">
                          {formatINRShort(row.interestPaid)}
                        </td>
                        <td className="py-2 px-2 text-right font-semibold text-[#002b5c]">
                          {formatINRShort(row.balanceRemaining)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {result.yearlySchedule.length > 10 && (
                  <p className="mt-2 text-xs text-gray-400 px-2">
                    Showing first 10 years of {result.yearlySchedule.length}.
                  </p>
                )}
              </div>
            </Panel>
          </div>

          {/* ---------------- LEAD CAPTURE ---------------- */}
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
                      A full year-wise breakdown you can save or share, plus a
                      quick review of whether this EMI fits your budget.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleGetReport} className="mt-7 grid sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="rounded-xl px-4 py-3.5 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="rounded-xl px-4 py-3.5 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
                  />
                  <input
                    type="tel"
                    required
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
                  if useful, discuss your loan/investment plan.
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
            <strong>Disclaimer:</strong> This is an estimate for general
            guidance only, based on a standard reducing-balance EMI
            calculation. Actual EMI, processing fees, and eligibility depend
            on the lender&apos;s own assessment and current rates. This is not
            a loan approval or a guarantee of the rate shown.
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
  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-2">
        <label className="flex items-center gap-2 text-sm font-bold text-[#002b5c]">
          <span className="text-[#d99a2b]">{icon}</span>
          {label}
        </label>
        <span className="text-sm font-extrabold text-[#002b5c] bg-[#f7f9fc] border border-gray-200 rounded-lg px-3 py-1">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#d99a2b]"
      />
      <div className="flex justify-between mt-1 text-xs text-gray-400">
        <span>{typeof min === "number" ? min.toLocaleString("en-IN") : min}</span>
        <span>{typeof max === "number" ? max.toLocaleString("en-IN") : max}</span>
      </div>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
      <h3 className="font-extrabold text-[#002b5c] text-xl">{title}</h3>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Row({
  label,
  value,
  bold,
  highlight,
}: {
  label: string;
  value: string;
  bold?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 py-2.5 border-b border-gray-100 last:border-0 ${
        bold ? "font-extrabold text-[#002b5c]" : "text-gray-700"
      }`}
    >
      <span className="text-sm">{label}</span>
      <span className={`text-sm text-right ${highlight ? "text-[#d99a2b] font-bold" : ""}`}>
        {value}
      </span>
    </div>
  );
}
