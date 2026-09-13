"use client";

import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Calculator,
  AlertTriangle,
  CheckCircle2,
  Download,
  Mail,
  IndianRupee,
  CalendarDays,
  Loader2,
} from "lucide-react";

import {
  calculateNriPropertyTds,
  formatINR,
  formatPct,
} from "@/lib/nriPropertyTds";

const today = new Date().toISOString().split("T")[0];

export default function NriPropertyTdsCalculator() {
  const [form, setForm] = useState({
    saleConsideration: "",
    purchasePrice: "",
    purchaseDate: "",
    saleDate: today,
    improvementCost: "",
    transferExpenses: "",
  });

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [sending, setSending] = useState(false);
  const [reportReady, setReportReady] = useState(false);
  const [leadError, setLeadError] = useState("");

  const num = (v: string) => (v === "" ? 0 : Number(v));

  const ready =
    num(form.saleConsideration) > 0 &&
    num(form.purchasePrice) > 0 &&
    form.purchaseDate !== "" &&
    form.saleDate !== "";

  const result = useMemo(() => {
    if (!ready) return null;
    return calculateNriPropertyTds({
      saleConsideration: num(form.saleConsideration),
      purchasePrice: num(form.purchasePrice),
      purchaseDate: form.purchaseDate,
      saleDate: form.saleDate,
      improvementCost: num(form.improvementCost),
      transferExpenses: num(form.transferExpenses),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, ready]);

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({ ...form, [key]: e.target.value });
    setReportReady(false);
  };

  const handleGetReport = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!result) return;

    setSending(true);
    setLeadError("");

    const summary = `
NRI Property TDS Calculator — enquiry

Name: ${name}
Email: ${email}
Mobile: ${mobile}

--- Inputs ---
Sale consideration : ${formatINR(num(form.saleConsideration))}
Purchase price     : ${formatINR(num(form.purchasePrice))}
Purchase date      : ${form.purchaseDate}
Sale date          : ${form.saleDate}
Improvement cost   : ${formatINR(num(form.improvementCost))}
Transfer expenses  : ${formatINR(num(form.transferExpenses))}

--- Result ---
Holding period     : ${result.holdingMonths} months (${result.gainType})
Capital gain       : ${formatINR(result.capitalGain)}
TDS to be deducted : ${formatINR(result.tdsAmount)} @ ${formatPct(result.tdsEffectiveRate)} of full sale value
Estimated real tax : ${formatINR(result.actualTaxOnGain)}
BLOCKED with dept. : ${formatINR(result.excessTds)}
`.trim();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_omi5m0r",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_ni2x60v",
        {
          name,
          email,
          mobile,
          service: "NRI Property TDS Calculator",
          payment_id: "Free Tool Lead",
          message: summary,
        },
        "aslDxgzgmR4GWDM2D"
      );
      setReportReady(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      // Report abhi bhi de do — lead na jaane par user ko rokna theek nahi
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
                  Enter Your Property Details
                </h2>
                <p className="mt-1 text-blue-100 text-sm">
                  Nothing is stored. Results appear instantly below.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10 grid md:grid-cols-2 gap-6">
            <Field
              label="Sale Consideration (₹)"
              hint="Total agreed sale price of the property"
              icon={<IndianRupee size={18} />}
              value={form.saleConsideration}
              onChange={set("saleConsideration")}
              placeholder="e.g. 15000000"
            />
            <Field
              label="Original Purchase Price (₹)"
              hint="What you originally paid for it"
              icon={<IndianRupee size={18} />}
              value={form.purchasePrice}
              onChange={set("purchasePrice")}
              placeholder="e.g. 4000000"
            />
            <Field
              label="Date of Purchase"
              hint="When you acquired the property"
              icon={<CalendarDays size={18} />}
              value={form.purchaseDate}
              onChange={set("purchaseDate")}
              type="date"
            />
            <Field
              label="Date of Sale"
              hint="Expected or actual registry date"
              icon={<CalendarDays size={18} />}
              value={form.saleDate}
              onChange={set("saleDate")}
              type="date"
            />
            <Field
              label="Cost of Improvement (₹)"
              hint="Optional — construction or major renovation"
              icon={<IndianRupee size={18} />}
              value={form.improvementCost}
              onChange={set("improvementCost")}
              placeholder="Optional"
            />
            <Field
              label="Transfer Expenses (₹)"
              hint="Optional — brokerage, legal fees"
              icon={<IndianRupee size={18} />}
              value={form.transferExpenses}
              onChange={set("transferExpenses")}
              placeholder="Optional"
            />
          </div>
        </div>

        {/* ---------------- RESULTS ---------------- */}
        {!result && (
          <p className="mt-8 text-center text-gray-500 print:hidden">
            Fill in the sale price, purchase price and both dates to see your result.
          </p>
        )}

        {result && (
          <div className="mt-10" id="tds-report">

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
              <p className="mt-3 font-bold">
                NRI Property Sale — TDS &amp; Capital Gains Report
              </p>
            </div>

            {/* HEADLINE: the blocked money */}
            {result.excessTds > 0 && (
              <div className="bg-white border-2 border-[#d99a2b] rounded-3xl p-7 md:p-10 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#d99a2b] text-white flex items-center justify-center flex-shrink-0">
                    <AlertTriangle size={24} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold uppercase tracking-wider text-[#d99a2b]">
                      Money that will be blocked
                    </p>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold text-[#002b5c] break-words">
                      {formatINR(result.excessTds)}
                    </p>
                    <p className="mt-3 text-gray-700 leading-7">
                      The buyer must deduct TDS on the{" "}
                      <strong>full sale value</strong>, not on your actual
                      profit. So{" "}
                      <strong>{formatINR(result.excessTds)}</strong> more than
                      your real tax will go to the Income Tax Department — and
                      you can only get it back later by filing a return and
                      waiting for a refund.
                    </p>
                    <p className="mt-3 text-gray-700 leading-7">
                      A <strong>Lower TDS Certificate (Form 128, Section 395)</strong>{" "}
                      applied for <em>before</em> the registry can prevent most
                      of this.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* NUMBERS */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <Panel title="Your Capital Gain">
                <Row label="Holding period" value={`${result.holdingMonths} months`} />
                <Row
                  label="Type of gain"
                  value={result.gainType}
                  highlight={!result.isLongTerm}
                />
                <Row label="Sale consideration" value={formatINR(num(form.saleConsideration))} />
                <Row label="Less: purchase price" value={"– " + formatINR(num(form.purchasePrice))} />
                {num(form.improvementCost) > 0 && (
                  <Row label="Less: improvement" value={"– " + formatINR(num(form.improvementCost))} />
                )}
                {num(form.transferExpenses) > 0 && (
                  <Row label="Less: transfer expenses" value={"– " + formatINR(num(form.transferExpenses))} />
                )}
                <Row
                  label={result.isLoss ? "Capital LOSS" : "Capital gain"}
                  value={formatINR(result.capitalGain)}
                  bold
                />
                {result.isLongTerm && (
                  <p className="mt-4 text-xs text-gray-500 leading-5">
                    No indexation benefit is available. For transfers on or after
                    23 July 2024 LTCG on property is taxed at a flat 12.5%, and
                    the 20%-with-indexation option is available only to resident
                    individuals and HUFs — not to NRIs.
                  </p>
                )}
              </Panel>

              <Panel title="TDS the Buyer Must Deduct">
                <Row label="Base rate" value={formatPct(result.tdsBaseRate)} />
                <Row
                  label="Surcharge"
                  value={
                    result.tdsSurchargeRate === 0
                      ? "Nil"
                      : formatPct(result.tdsSurchargeRate)
                  }
                />
                <Row label="Health & Education Cess" value="4%" />
                <Row
                  label="Effective TDS rate"
                  value={formatPct(result.tdsEffectiveRate)}
                  bold
                />
                <Row
                  label="Deducted on"
                  value="Full sale value"
                  highlight
                />
                <Row
                  label="TDS amount"
                  value={formatINR(result.tdsAmount)}
                  bold
                />
                <Row
                  label="You receive at registry"
                  value={formatINR(result.amountReceivedAtSale)}
                />
                <p className="mt-4 text-xs text-gray-500 leading-5">
                  Unlike a resident seller, there is <strong>no ₹50 lakh
                  threshold</strong> for an NRI — TDS applies from the first
                  rupee under Section 393(2) of the Income-tax Act, 2025
                  (earlier Section 195).
                </p>
              </Panel>
            </div>

            {/* COMPARISON */}
            <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
              <h3 className="font-extrabold text-[#002b5c] text-xl">
                Why the gap exists
              </h3>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full text-sm min-w-[420px]">
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 text-gray-700">
                        TDS deducted (on full sale value)
                      </td>
                      <td className="py-3 text-right font-bold text-[#002b5c]">
                        {formatINR(result.tdsAmount)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 text-gray-700">
                        Estimated real tax (on your gain)
                      </td>
                      <td className="py-3 text-right font-bold text-[#002b5c]">
                        {formatINR(result.actualTaxOnGain)}
                      </td>
                    </tr>
                    <tr className="bg-[#fff9ed]">
                      <td className="py-3 px-2 font-extrabold text-[#7a5514]">
                        Excess blocked until you file a return
                      </td>
                      <td className="py-3 px-2 text-right font-extrabold text-[#7a5514]">
                        {formatINR(result.excessTds)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-gray-500 leading-5">
                The estimated real tax assumes this sale is your main Indian
                income for the year, since surcharge depends on total income.
                Exemptions you may qualify for (reinvestment in a house or in
                specified bonds) are not applied here — they can reduce this
                further.
              </p>
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
                        A full breakdown you can save or show your buyer, plus
                        the document checklist for a Lower TDS Certificate.
                        We&apos;ll also review your case and tell you how much
                        of the {formatINR(result.excessTds)} can realistically
                        be saved.
                      </p>
                    </div>
                  </div>

                  <form
                    onSubmit={handleGetReport}
                    className="mt-7 grid sm:grid-cols-3 gap-4"
                  >
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
                    No spam. We use your details only to send this report and
                    discuss your property sale.
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
                    Click below to save it as a PDF. Our team will also get in
                    touch about reducing the{" "}
                    {formatINR(result.excessTds)} that would otherwise be blocked.
                  </p>

                  {leadError && (
                    <p className="mt-4 text-sm text-[#f0b84b]">{leadError}</p>
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

            {/* DISCLAIMER */}
            <p className="mt-8 text-xs text-gray-500 leading-6">
              <strong>Disclaimer:</strong> This calculator gives an estimate
              based on the Income-tax Act, 2025 as applicable to transfers on or
              after 1 April 2026, and is for general guidance only. It does not
              account for DTAA relief, reinvestment exemptions, joint ownership,
              inherited property (where the previous owner&apos;s holding period
              and cost apply), or your other Indian income. It is not tax advice
              — please have your specific case reviewed before acting.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- small presentational helpers ---------------- */

function Field({
  label,
  hint,
  icon,
  value,
  onChange,
  placeholder,
  type = "number",
}: {
  label: string;
  hint: string;
  icon: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "number" | "date";
}) {
  const isNumber = type === "number";
  const inputMode: "numeric" | undefined = isNumber ? "numeric" : undefined;

  return (
    <div>
      <label className="block text-sm font-bold text-[#002b5c] mb-2">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d99a2b] pointer-events-none">
          {icon}
        </span>
        <input
          type={type}
          inputMode={inputMode}
          min={isNumber ? 0 : undefined}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full border border-gray-300 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/25 focus:border-[#d99a2b]"
        />
      </div>
      <p className="mt-1.5 text-xs text-gray-500">{hint}</p>
    </div>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
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
      <span
        className={`text-sm text-right ${
          highlight ? "text-[#d99a2b] font-bold" : ""
        }`}
      >
        {value}
      </span>
    </div>
  );
}
