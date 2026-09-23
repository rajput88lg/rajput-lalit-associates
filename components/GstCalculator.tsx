"use client";

import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import LeadFallback from "@/components/LeadFallback";
import {
  Percent,
  IndianRupee,
  Download,
  Mail,
  Loader2,
  CheckCircle2,
} from "lucide-react";

import { calculateGst, formatINR, type GstMode } from "@/lib/gstCalculator";
import { trackCalculatorResult } from "@/lib/gaEvents";

const RATE_OPTIONS = [5, 12, 18, 28];

export default function GstCalculator() {
  const [amount, setAmount] = useState(10000);
  const [ratePct, setRatePct] = useState(18);
  const [mode, setMode] = useState<GstMode>("add");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [sending, setSending] = useState(false);
  const [reportReady, setReportReady] = useState(false);
  const [leadError, setLeadError] = useState("");

  const result = useMemo(() => calculateGst({ amount, ratePct, mode }), [amount, ratePct, mode]);

  const handleGetReport = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setLeadError("");

    const summary = `
GST Calculator — enquiry

Name: ${name}
Email: ${email}
Mobile: ${mobile}

--- Inputs ---
Mode: ${mode === "add" ? "Add GST (amount is exclusive of GST)" : "Remove GST (amount is inclusive of GST)"}
Amount entered: ${formatINR(amount)}
GST rate: ${ratePct}%

--- Result ---
Base amount: ${formatINR(result.baseAmount)}
GST amount: ${formatINR(result.gstAmount)} (CGST ${formatINR(result.cgst)} + SGST ${formatINR(result.sgst)})
Total amount: ${formatINR(result.totalAmount)}
`.trim();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_omi5m0r",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_ni2x60v",
        {
          name,
          email,
          mobile,
          service: "GST Calculator",
          payment_id: "Free Tool Lead",
          message: summary,
        },
        "aslDxgzgmR4GWDM2D"
      );
      setReportReady(true);
      trackCalculatorResult("GST Calculator");
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
                <Percent size={28} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold">GST Calculator</h2>
                <p className="mt-1 text-blue-100 text-sm">
                  Add GST to a base price, or find the base price from a GST-inclusive amount.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-8">
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-[#002b5c] mb-3">
                What do you want to do?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setMode("add")}
                  className={`py-3 rounded-xl font-bold text-sm border-2 transition ${
                    mode === "add"
                      ? "bg-[#002b5c] border-[#002b5c] text-white"
                      : "bg-white border-gray-200 text-gray-600 hover:border-[#d99a2b]/50"
                  }`}
                >
                  Add GST (amount excludes GST)
                </button>
                <button
                  type="button"
                  onClick={() => setMode("remove")}
                  className={`py-3 rounded-xl font-bold text-sm border-2 transition ${
                    mode === "remove"
                      ? "bg-[#002b5c] border-[#002b5c] text-white"
                      : "bg-white border-gray-200 text-gray-600 hover:border-[#d99a2b]/50"
                  }`}
                >
                  Remove GST (amount includes GST)
                </button>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <label className="flex items-center gap-2 text-sm font-bold text-[#002b5c]" htmlFor="gst-amount">
                  <IndianRupee size={18} className="text-[#d99a2b]" />
                  {mode === "add" ? "Amount (excluding GST)" : "Amount (including GST)"}
                </label>
                <span className="text-sm font-extrabold text-[#002b5c] bg-[#f7f9fc] border border-gray-200 rounded-lg px-3 py-1">
                  {formatINR(amount)}
                </span>
              </div>
              <input
                id="gst-amount"
                type="range"
                min={0}
                max={1000000}
                step={100}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-[#d99a2b]"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-[#002b5c] mb-3">
                <Percent size={18} className="text-[#d99a2b]" />
                GST Rate
              </label>
              <div className="grid grid-cols-4 gap-3">
                {RATE_OPTIONS.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRatePct(r)}
                    className={`py-3 rounded-xl font-bold text-sm border-2 transition ${
                      ratePct === r
                        ? "bg-[#002b5c] border-[#002b5c] text-white"
                        : "bg-white border-gray-200 text-gray-600 hover:border-[#d99a2b]/50"
                    }`}
                  >
                    {r}%
                  </button>
                ))}
              </div>
              <div className="mt-3">
                <label className="text-xs text-gray-500" htmlFor="gst-custom-rate">Or enter a custom rate:</label>
                <input
                  id="gst-custom-rate"
                  type="number"
                  min={0}
                  max={100}
                  step={0.01}
                  value={ratePct}
                  onChange={(e) => setRatePct(Number(e.target.value) || 0)}
                  className="mt-1 w-32 rounded-lg border border-gray-200 px-3 py-2 text-sm font-semibold text-[#002b5c]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- RESULTS ---------------- */}
        <div className="mt-10" id="gst-report">
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
            <p className="mt-3 font-bold">GST Calculator — Report</p>
          </div>

          <div className="bg-white border-2 border-[#d99a2b] rounded-3xl p-7 md:p-10 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#d99a2b] text-white flex items-center justify-center flex-shrink-0">
                <Percent size={24} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold uppercase tracking-wider text-[#d99a2b]">
                  Total Amount
                </p>
                <p className="mt-2 text-4xl md:text-5xl font-extrabold text-[#002b5c] break-words">
                  {formatINR(result.totalAmount)}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Panel title="Breakdown">
              <Row label="Base amount" value={formatINR(result.baseAmount)} />
              <Row label="GST amount" value={formatINR(result.gstAmount)} highlight />
              <Row label="Total amount" value={formatINR(result.totalAmount)} bold />
            </Panel>

            <Panel title="Intra-State Split (CGST + SGST)">
              <Row label={`CGST (${(ratePct / 2).toFixed(2)}%)`} value={formatINR(result.cgst)} />
              <Row label={`SGST (${(ratePct / 2).toFixed(2)}%)`} value={formatINR(result.sgst)} />
              <Row label="Total GST" value={formatINR(result.gstAmount)} bold />
              <p className="mt-3 text-xs text-gray-500">
                For inter-state supply, the full amount is charged as IGST ({ratePct}%) instead of CGST+SGST.
              </p>
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
                      A saveable breakdown you can attach to an invoice or quote.
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
                  if useful, discuss your GST filing.
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
                {leadError && <LeadFallback form="gst_calculator" fields={{ Naam: name, Mobile: mobile, Tool: "GST Calculator" }} />}

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
            <strong>Disclaimer:</strong> This is a simple GST calculation
            tool for planning purposes. Actual GST treatment can vary by
            HSN/SAC code, exemptions, composition scheme eligibility and
            place of supply rules — talk to us for your specific case.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- small presentational helpers ---------------- */

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
