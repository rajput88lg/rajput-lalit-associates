"use client";

import { useId, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import LeadFallback from "@/components/LeadFallback";
import { trackCalculatorResult } from "@/lib/gaEvents";
import {
  Calculator,
  IndianRupee,
  Briefcase,
  Download,
  Mail,
  Loader2,
  CheckCircle2,
  CalendarClock,
  AlertTriangle,
} from "lucide-react";

import {
  calculateAdvanceTax,
  formatINR,
  formatDueDate,
  type TaxpayerType,
} from "@/lib/advanceTaxCalculator";

export default function AdvanceTaxCalculator() {
  const [netTaxLiability, setNetTaxLiability] = useState(200000);
  const [taxpayerType, setTaxpayerType] = useState<TaxpayerType>("regular");
  const [paidSoFar, setPaidSoFar] = useState(0);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [sending, setSending] = useState(false);
  const [reportReady, setReportReady] = useState(false);
  const [leadError, setLeadError] = useState("");

  const result = useMemo(
    () => calculateAdvanceTax({ netTaxLiability, taxpayerType, paidSoFar }),
    [netTaxLiability, taxpayerType, paidSoFar]
  );

  const handleGetReport = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setLeadError("");

    const scheduleText = result.instalments
      .map(
        (i) =>
          `${i.label} — Due ${formatDueDate(i.dueDate)} — ${i.cumulativePercent}% cumulative — ${formatINR(i.cumulativeAmountDue)}${i.isDue ? (i.shortfall > 0 ? ` (shortfall: ${formatINR(i.shortfall)}, est. interest: ${formatINR(i.interest)})` : " (paid/on track)") : " (upcoming)"}`
      )
      .join("\n");

    const summary = `
Advance Tax Calculator (FY 2026-27) — enquiry

Name: ${name}
Email: ${email}
Mobile: ${mobile}

--- Inputs ---
Estimated net tax liability (after TDS): ${formatINR(netTaxLiability)}
Taxpayer type: ${taxpayerType === "presumptive" ? "Presumptive (44AD/44ADA)" : "Regular"}
Advance tax already paid: ${formatINR(paidSoFar)}

--- Result ---
Advance tax applicable: ${result.applicable ? "Yes" : "No (below ₹10,000 threshold)"}
${scheduleText}
Estimated total interest (Section 425 / old 234C) on past shortfalls: ${formatINR(result.totalShortfallInterest)}
`.trim();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_omi5m0r",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_ni2x60v",
        {
          name,
          email,
          mobile,
          service: "Advance Tax Calculator (FY 2026-27)",
          payment_id: "Free Tool Lead",
          message: summary,
        },
        "aslDxgzgmR4GWDM2D"
      );
      setReportReady(true);
      trackCalculatorResult("Advance Tax Calculator");
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
                  Your Advance Tax Schedule
                </h2>
                <p className="mt-1 text-blue-100 text-sm">
                  For FY 2026-27 — the year currently running.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-8">
            <SliderField
              label="Estimated Total Tax Payable This Year (after TDS/TCS)"
              icon={<IndianRupee size={18} />}
              value={netTaxLiability}
              onChange={setNetTaxLiability}
              min={0}
              max={2000000}
              step={5000}
              display={formatINR(netTaxLiability)}
            />

            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-[#002b5c] mb-3">
                <Briefcase size={18} className="text-[#d99a2b]" />
                Taxpayer Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                {(
                  [
                    { key: "regular", label: "Regular (4 instalments)" },
                    { key: "presumptive", label: "Presumptive — 44AD/44ADA" },
                  ] as { key: TaxpayerType; label: string }[]
                ).map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setTaxpayerType(opt.key)}
                    className={`py-3 px-2 rounded-xl font-bold text-sm border-2 transition ${
                      taxpayerType === opt.key
                        ? "bg-[#002b5c] border-[#002b5c] text-white"
                        : "bg-white border-gray-200 text-gray-600 hover:border-[#d99a2b]/50"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Presumptive taxpayers under Sections 44AD/44ADA pay the full
                amount in one instalment by 15 March instead of 4 quarterly
                instalments.
              </p>
            </div>

            <SliderField
              label="Advance Tax Already Paid This Year"
              icon={<IndianRupee size={18} />}
              value={paidSoFar}
              onChange={setPaidSoFar}
              min={0}
              max={2000000}
              step={5000}
              display={formatINR(paidSoFar)}
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
            <p className="mt-3 font-bold">Advance Tax Calculator — Report (FY 2026-27)</p>
          </div>

          {!result.applicable ? (
            <div className="bg-white border-2 border-[#d99a2b] rounded-3xl p-8 md:p-10 text-center">
              <CheckCircle2 size={40} className="mx-auto text-[#d99a2b]" />
              <p className="mt-4 text-xl font-extrabold text-[#002b5c]">
                Advance tax is not required this year
              </p>
              <p className="mt-2 text-gray-600 leading-7 max-w-xl mx-auto">
                Advance tax applies only when your estimated tax payable
                (after TDS/TCS) is ₹10,000 or more for the year. At{" "}
                {formatINR(netTaxLiability)}, you&apos;re below that
                threshold — you can pay any remaining tax as self-assessment
                tax while filing your return.
              </p>
            </div>
          ) : (
            <>
              <div className="bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 divide-y divide-gray-100">
                  {result.instalments.map((inst) => (
                    <div
                      key={inst.id}
                      className={`p-6 md:p-7 flex flex-col sm:flex-row sm:items-center gap-4 ${
                        inst.isDue && inst.shortfall > 0 ? "bg-red-50" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3 sm:w-64 flex-shrink-0">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            inst.isDue ? "bg-[#002b5c]" : "bg-[#d99a2b]"
                          }`}
                        >
                          <CalendarClock size={20} className="text-white" />
                        </div>
                        <div>
                          <p className="font-extrabold text-[#002b5c]">{inst.label}</p>
                          <p className="text-xs text-gray-500">Due {formatDueDate(inst.dueDate)}</p>
                        </div>
                      </div>

                      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                        <div>
                          <p className="text-gray-500 text-xs">Cumulative %</p>
                          <p className="font-bold text-[#002b5c]">{inst.cumulativePercent}%</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs">Cumulative amount due</p>
                          <p className="font-bold text-[#002b5c]">{formatINR(inst.cumulativeAmountDue)}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs">Status</p>
                          {!inst.isDue ? (
                            <p className="font-bold text-[#d99a2b]">Upcoming</p>
                          ) : inst.shortfall > 0 ? (
                            <p className="font-bold text-red-600">
                              Short by {formatINR(inst.shortfall)}
                            </p>
                          ) : (
                            <p className="font-bold text-green-600">On track</p>
                          )}
                        </div>
                      </div>

                      {inst.isDue && inst.shortfall > 0 && (
                        <div className="sm:text-right sm:w-48 flex-shrink-0">
                          <p className="text-xs text-gray-500">Est. interest (Sec. 425)</p>
                          <p className="font-extrabold text-red-600">{formatINR(inst.interest)}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 bg-white border-2 border-[#d99a2b] rounded-3xl p-7 md:p-9 text-center">
                {result.totalShortfallInterest > 0 ? (
                  <p className="text-xl md:text-2xl font-extrabold text-[#002b5c]">
                    Estimated interest so far:{" "}
                    <span className="text-red-600">{formatINR(result.totalShortfallInterest)}</span>
                  </p>
                ) : (
                  <p className="text-xl md:text-2xl font-extrabold text-[#002b5c]">
                    No shortfall in the instalments due so far
                  </p>
                )}
                {result.nextInstalment && (
                  <p className="mt-2 text-gray-600">
                    Next due: <strong>{formatDueDate(result.nextInstalment.dueDate)}</strong> —{" "}
                    {formatINR(result.nextInstalment.cumulativeAmountDue)} cumulative (
                    {result.nextInstalment.cumulativePercent}%)
                  </p>
                )}
              </div>

              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-3">
                <AlertTriangle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-900 leading-6">
                  This assumes the amount you&apos;ve &quot;already paid&quot; was
                  paid on or before each due date shown. It also does not
                  compute Section 424 (old Section 234B) interest, which
                  depends on your self-assessment tax payment date — talk to
                  us for the exact figure at return-filing time.
                </p>
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
                          Get this schedule as a report
                        </h3>
                        <p className="mt-2 text-blue-100 leading-7">
                          Full instalment-by-instalment breakdown, sent to
                          your inbox.
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
                      No spam. We use your details only to send this report
                      and, if useful, discuss your tax filing.
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
                    {leadError && (
                      <LeadFallback
                        form="advance_tax_calculator"
                        fields={{ Naam: name, Mobile: mobile, Tool: "Advance Tax Calculator" }}
                      />
                    )}

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
            </>
          )}

          <p className="mt-8 text-xs text-gray-500 leading-6">
            <strong>Disclaimer:</strong> This calculator gives a planning
            estimate only. It assumes the tax liability figure you enter is
            accurate and that any amount already paid was paid on or before
            each instalment date it&apos;s checked against. It does not
            compute Section 424 (old 234B) interest or surcharge. It is not a
            substitute for a proper computation — talk to us before making a
            payment.
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
