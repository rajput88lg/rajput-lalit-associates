"use client";

import { useId, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Home,
  IndianRupee,
  Download,
  Mail,
  Loader2,
  CheckCircle2,
} from "lucide-react";

import { calculateHraExemption, formatINR } from "@/lib/hraCalculator";

export default function HraCalculator() {
  const [annualBasicSalary, setAnnualBasicSalary] = useState(600000);
  const [annualHraReceived, setAnnualHraReceived] = useState(240000);
  const [annualRentPaid, setAnnualRentPaid] = useState(300000);
  const [isMetroCity, setIsMetroCity] = useState(true);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [sending, setSending] = useState(false);
  const [reportReady, setReportReady] = useState(false);
  const [leadError, setLeadError] = useState("");

  const result = useMemo(
    () => calculateHraExemption({ annualBasicSalary, annualHraReceived, annualRentPaid, isMetroCity }),
    [annualBasicSalary, annualHraReceived, annualRentPaid, isMetroCity]
  );

  const handleGetReport = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setLeadError("");

    const summary = `
HRA Exemption Calculator — enquiry

Name: ${name}
Email: ${email}
Mobile: ${mobile}

--- Inputs ---
Annual Basic + DA: ${formatINR(annualBasicSalary)}
Annual HRA received: ${formatINR(annualHraReceived)}
Annual rent paid: ${formatINR(annualRentPaid)}
City type: ${isMetroCity ? "Metro (Delhi/Mumbai/Kolkata/Chennai)" : "Non-metro"}

--- Result ---
HRA exemption: ${formatINR(result.exemptAmount)}
Taxable HRA: ${formatINR(result.taxableHra)}
`.trim();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_omi5m0r",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_ni2x60v",
        {
          name,
          email,
          mobile,
          service: "HRA Exemption Calculator",
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

  const factorLabel = {
    hra: "Actual HRA received",
    rent: "Rent paid minus 10% of salary",
    salary_percent: isMetroCity ? "50% of salary (metro)" : "40% of salary (non-metro)",
  }[result.limitingFactor];

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        {/* ---------------- INPUT CARD ---------------- */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden print:hidden">
          <div className="bg-gradient-to-r from-[#001d40] via-[#002b5c] to-[#06477f] px-6 md:px-10 py-7 text-white">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#d99a2b] flex items-center justify-center flex-shrink-0">
                <Home size={28} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold">
                  Calculate Your HRA Exemption
                </h2>
                <p className="mt-1 text-blue-100 text-sm">
                  Available only if you're on the Old Tax Regime.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-8">
            <SliderField
              label="Annual Basic Salary + DA"
              icon={<IndianRupee size={18} />}
              value={annualBasicSalary}
              onChange={setAnnualBasicSalary}
              min={100000}
              max={3000000}
              step={10000}
              display={formatINR(annualBasicSalary)}
            />
            <SliderField
              label="Annual HRA Received from Employer"
              icon={<IndianRupee size={18} />}
              value={annualHraReceived}
              onChange={setAnnualHraReceived}
              min={0}
              max={1500000}
              step={5000}
              display={formatINR(annualHraReceived)}
            />
            <SliderField
              label="Annual Rent Actually Paid"
              icon={<IndianRupee size={18} />}
              value={annualRentPaid}
              onChange={setAnnualRentPaid}
              min={0}
              max={1500000}
              step={5000}
              display={formatINR(annualRentPaid)}
            />

            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-[#002b5c] mb-3">
                <Home size={18} className="text-[#d99a2b]" />
                City Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsMetroCity(true)}
                  className={`py-3 rounded-xl font-bold text-sm border-2 transition ${
                    isMetroCity
                      ? "bg-[#002b5c] border-[#002b5c] text-white"
                      : "bg-white border-gray-200 text-gray-600 hover:border-[#d99a2b]/50"
                  }`}
                >
                  Metro (Delhi/Mumbai/Kolkata/Chennai)
                </button>
                <button
                  type="button"
                  onClick={() => setIsMetroCity(false)}
                  className={`py-3 rounded-xl font-bold text-sm border-2 transition ${
                    !isMetroCity
                      ? "bg-[#002b5c] border-[#002b5c] text-white"
                      : "bg-white border-gray-200 text-gray-600 hover:border-[#d99a2b]/50"
                  }`}
                >
                  Non-Metro (Every other city)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- RESULTS ---------------- */}
        <div className="mt-10" id="hra-report">
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
            <p className="mt-3 font-bold">HRA Exemption Calculator — Report</p>
          </div>

          <div className="bg-white border-2 border-[#d99a2b] rounded-3xl p-7 md:p-10 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#d99a2b] text-white flex items-center justify-center flex-shrink-0">
                <Home size={24} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold uppercase tracking-wider text-[#d99a2b]">
                  HRA Exemption
                </p>
                <p className="mt-2 text-4xl md:text-5xl font-extrabold text-[#002b5c] break-words">
                  {formatINR(result.exemptAmount)}
                </p>
                <p className="mt-3 text-gray-700 leading-7">
                  Out of {formatINR(annualHraReceived)} HRA received, you can
                  claim <strong>{formatINR(result.exemptAmount)}</strong> as
                  exempt (limited by: <strong>{factorLabel}</strong>). The
                  remaining <strong>{formatINR(result.taxableHra)}</strong>{" "}
                  is added to your taxable salary.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Panel title="The Three Amounts Compared">
              <Row label="Actual HRA received" value={formatINR(result.actualHraReceived)} highlight={result.limitingFactor === "hra"} />
              <Row label="Rent paid − 10% of salary" value={formatINR(result.rentMinusTenPercentSalary)} highlight={result.limitingFactor === "rent"} />
              <Row
                label={isMetroCity ? "50% of salary (metro)" : "40% of salary (non-metro)"}
                value={formatINR(result.percentOfSalaryLimit)}
                highlight={result.limitingFactor === "salary_percent"}
              />
              <Row label="Exemption (lowest of the three)" value={formatINR(result.exemptAmount)} bold />
            </Panel>

            <Panel title="Result Summary">
              <Row label="HRA received" value={formatINR(result.actualHraReceived)} />
              <Row label="HRA exempt" value={formatINR(result.exemptAmount)} highlight />
              <Row label="Taxable HRA" value={formatINR(result.taxableHra)} bold />
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
                      Full HRA breakdown you can save or share with HR.
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
            <strong>Disclaimer:</strong> HRA exemption is available only under
            the Old Tax Regime — it is fully taxable under the New Regime.
            Metro rate (50%) applies only to Delhi, Mumbai, Kolkata and
            Chennai; every other city uses the 40% rate. This is a planning
            estimate — confirm your exact figures with us before filing.
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
