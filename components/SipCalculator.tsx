"use client";

import { useId, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  TrendingUp,
  IndianRupee,
  Percent,
  CalendarDays,
  Download,
  Mail,
  Loader2,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

import { calculateSip, formatINR, formatINRShort } from "@/lib/loanCalculations";
import { getAffiliateLink } from "@/lib/affiliateLinks";

export default function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [expectedReturnPct, setExpectedReturnPct] = useState(12);
  const [tenureYears, setTenureYears] = useState(15);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [sending, setSending] = useState(false);
  const [reportReady, setReportReady] = useState(false);
  const [leadError, setLeadError] = useState("");

  const result = useMemo(
    () => calculateSip({ monthlyInvestment, expectedReturnPct, tenureYears }),
    [monthlyInvestment, expectedReturnPct, tenureYears]
  );

  const ctaHref = getAffiliateLink("sip");

  const handleGetReport = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setLeadError("");

    const summary = `
SIP Calculator — enquiry

Name: ${name}
Email: ${email}
Mobile: ${mobile}

--- Inputs ---
Monthly SIP : ${formatINR(monthlyInvestment)}
Expected annual return : ${expectedReturnPct}%
Tenure : ${tenureYears} years

--- Result ---
Total invested : ${formatINR(result.investedAmount)}
Estimated returns : ${formatINR(result.estimatedReturns)}
Maturity value : ${formatINR(result.maturityValue)}
`.trim();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_omi5m0r",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_ni2x60v",
        {
          name,
          email,
          mobile,
          service: "SIP Calculator",
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
                <TrendingUp size={28} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold">
                  Plan Your SIP
                </h2>
                <p className="mt-1 text-blue-100 text-sm">
                  Drag the sliders or type a value. Results update instantly.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-8">
            <SliderField
              label="Monthly Investment"
              icon={<IndianRupee size={18} />}
              value={monthlyInvestment}
              onChange={setMonthlyInvestment}
              min={500}
              max={200000}
              step={500}
              display={formatINRShort(monthlyInvestment)}
            />
            <SliderField
              label="Expected Return (per annum)"
              icon={<Percent size={18} />}
              value={expectedReturnPct}
              onChange={setExpectedReturnPct}
              min={1}
              max={30}
              step={0.5}
              display={`${expectedReturnPct.toFixed(1)}%`}
            />
            <SliderField
              label="Investment Period"
              icon={<CalendarDays size={18} />}
              value={tenureYears}
              onChange={setTenureYears}
              min={1}
              max={40}
              step={1}
              display={`${tenureYears} ${tenureYears === 1 ? "Year" : "Years"}`}
            />
          </div>
        </div>

        {/* ---------------- RESULTS ---------------- */}
        <div className="mt-10" id="sip-report">
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
            <p className="mt-3 font-bold">SIP Calculator — Report</p>
          </div>

          <div className="bg-white border-2 border-[#d99a2b] rounded-3xl p-7 md:p-10 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#d99a2b] text-white flex items-center justify-center flex-shrink-0">
                <TrendingUp size={24} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold uppercase tracking-wider text-[#d99a2b]">
                  Estimated Maturity Value
                </p>
                <p className="mt-2 text-4xl md:text-5xl font-extrabold text-[#002b5c] break-words">
                  {formatINR(result.maturityValue)}
                </p>
                <p className="mt-3 text-gray-700 leading-7">
                  Investing <strong>{formatINR(monthlyInvestment)}/month</strong>{" "}
                  for <strong>{tenureYears} years</strong> at an assumed{" "}
                  <strong>{expectedReturnPct}% annual return</strong>, you invest a
                  total of <strong>{formatINR(result.investedAmount)}</strong> and
                  could earn an estimated{" "}
                  <strong>{formatINR(result.estimatedReturns)}</strong> in returns.
                </p>
              </div>
            </div>

            <a
              href={ctaHref}
              target={ctaHref.startsWith("http") ? "_blank" : undefined}
              rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className="btn-shine mt-6 inline-flex items-center justify-center gap-2 bg-[#002b5c] hover:bg-[#06477f] text-white px-7 py-4 rounded-xl font-extrabold transition-all duration-300 shadow-lg hover:-translate-y-1 print:hidden"
            >
              Start a SIP
              <ExternalLink size={18} />
            </a>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Panel title="Investment Breakdown">
              <Row label="Monthly SIP" value={formatINR(monthlyInvestment)} />
              <Row label="Expected return" value={`${expectedReturnPct}% p.a.`} />
              <Row label="Duration" value={`${tenureYears} years`} />
              <Row label="Total invested" value={formatINR(result.investedAmount)} />
              <Row label="Estimated returns" value={formatINR(result.estimatedReturns)} highlight />
              <Row label="Maturity value" value={formatINR(result.maturityValue)} bold />
            </Panel>

            <Panel title="Year-wise Growth">
              <div className="overflow-x-auto -mx-2">
                <table className="w-full text-sm min-w-[280px]">
                  <thead>
                    <tr className="text-left text-gray-500 border-b border-gray-200">
                      <th className="py-2 px-2 font-semibold">Year</th>
                      <th className="py-2 px-2 font-semibold text-right">Invested</th>
                      <th className="py-2 px-2 font-semibold text-right">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.yearlySchedule
                      .filter((_, i, arr) => arr.length <= 12 || (i + 1) % Math.ceil(arr.length / 12) === 0 || i === arr.length - 1)
                      .map((row) => (
                        <tr key={row.year} className="border-b border-gray-100">
                          <td className="py-2 px-2 text-gray-700">{row.year}</td>
                          <td className="py-2 px-2 text-right text-gray-700">
                            {formatINRShort(row.invested)}
                          </td>
                          <td className="py-2 px-2 text-right font-semibold text-[#002b5c]">
                            {formatINRShort(row.value)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </Panel>
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
                      A full year-wise growth projection you can save or share.
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
                  if useful, discuss your investment plan.
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
            <strong>Disclaimer:</strong> Mutual fund investments are subject
            to market risk. This calculator assumes a constant annual return
            for simplicity — actual returns fluctuate and are never
            guaranteed. This is for general guidance only and is not
            investment advice.
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
