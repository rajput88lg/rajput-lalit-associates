"use client";

import { useState } from "react";
import { trackCalculatorResult, trackWhatsAppClick } from "@/lib/gaEvents";

/**
 * Freelancer / service-exporter checker.
 * Rules used (verified Sept 2026):
 * - GST: services supplier (incl. export, an inter-state supply) needs
 *   registration once aggregate turnover exceeds ₹20 lakh
 *   (Notification 10/2017-Integrated Tax). Below that it is optional.
 * - LUT (Form GST RFD-11): only for GST-registered exporters; valid for one
 *   financial year, file afresh each year.
 * - Income tax: presumptive scheme for specified professionals — Section 58
 *   of the Income-tax Act, 2025 (old Section 44ADA). 50% of gross receipts;
 *   limit ₹75 lakh if cash receipts ≤ 5%, else ₹50 lakh; residents only.
 */

const GST_LIMIT = 20_00_000;

function inr(n: number) {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

type Result = {
  gst: string;
  gstLevel: "must" | "optional";
  lut: string;
  presumptive: string;
  presumptiveOk: boolean;
  presumptiveIncome: number;
  checklist: string[];
};

export default function FreelancerTaxChecker() {
  const [receipts, setReceipts] = useState("");
  const [indiaReceipts, setIndiaReceipts] = useState("");
  const [cashOver5, setCashOver5] = useState("no");
  const [profession, setProfession] = useState("specified");
  const [resident, setResident] = useState("yes");
  const [gstRegistered, setGstRegistered] = useState("no");
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  const check = () => {
    const foreign = Number(receipts.replace(/[^\d]/g, ""));
    const india = Number(indiaReceipts.replace(/[^\d]/g, "")) || 0;
    if (!foreign && !india) {
      setError("Please enter your yearly receipts.");
      setResult(null);
      return;
    }
    setError("");
    const total = foreign + india;

    const mustRegister = total > GST_LIMIT;
    const registered = gstRegistered === "yes" || mustRegister;

    const limit = cashOver5 === "yes" ? 50_00_000 : 75_00_000;
    const presumptiveOk =
      profession === "specified" && resident === "yes" && total <= limit;

    let presumptive: string;
    if (profession !== "specified") {
      presumptive =
        "Your work may not be a 'specified profession'. Other small businesses can look at the business presumptive scheme, or file on actual profit with books — we check which fits.";
    } else if (resident !== "yes") {
      presumptive =
        "The presumptive scheme for professionals is only for residents. As a non-resident, income is taxed on actual profit — see our NRI services.";
    } else if (!presumptiveOk) {
      presumptive = `Your receipts are above the ${inr(limit)} limit, so the presumptive scheme is not available. You need books of account and likely a tax audit.`;
    } else {
      presumptive = `You can use the presumptive scheme (Section 58 of the Income-tax Act, 2025 — old Section 44ADA): declare at least 50% of receipts as income, no books needed. Indicative taxable profit: ${inr(total * 0.5)} before deductions.`;
    }

    const checklist = [
      "Invoice every foreign client in your name, with date, amount and currency",
      "Keep bank proof of each foreign payment (FIRC / bank advice)",
      "Match foreign receipts with AIS / Form 26AS before filing ITR",
      "Pay advance tax — presumptive professionals can pay it in one go by 15 March",
    ];
    if (registered) {
      checklist.unshift(
        "File LUT (Form GST RFD-11) on the GST portal before the first export invoice of the financial year",
        "Mention 'Supply meant for export under LUT without payment of IGST' on export invoices",
        "File GST returns on time — even when export sales are zero-rated"
      );
    }

    setResult({
      gst: mustRegister
        ? `Your total turnover (${inr(total)}) is above ₹20 lakh — GST registration is compulsory.`
        : `Your total turnover (${inr(total)}) is within ₹20 lakh — GST registration is optional. Many exporters still register to claim back GST on expenses.`,
      gstLevel: mustRegister ? "must" : "optional",
      lut: registered
        ? "As a GST-registered exporter, file a LUT every financial year. Then you invoice foreign clients with 0% GST and no money gets blocked."
        : "LUT is only needed after GST registration. Without registration, you simply don't charge GST.",
      presumptive,
      presumptiveOk,
      presumptiveIncome: total * 0.5,
      checklist,
    });
    trackCalculatorResult("freelancer_tax_checker");
  };

  const waText = encodeURIComponent(
    `Namaste, main freelancer/exporter hoon. Saal ki income approx ${receipts ? "₹" + receipts : "-"} (videsh se). Mujhe GST/LUT aur ITR mein help chahiye.`
  );

  const label = "block text-sm font-bold text-[#002b5c] mb-2";
  const input = "w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white";

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl text-left text-gray-800">
      <h2 className="text-xl font-extrabold text-[#002b5c]">Free Freelancer Tax Checker</h2>
      <p className="mt-1 text-sm text-gray-600">GST, LUT and ITR — see what applies to you in 30 seconds.</p>

      <div className="mt-5 grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fc-foreign" className={label}>Yearly receipts from abroad (₹)</label>
          <input id="fc-foreign" inputMode="numeric" placeholder="e.g. 1200000" value={receipts} onChange={(e) => setReceipts(e.target.value)} className={input} />
        </div>
        <div>
          <label htmlFor="fc-india" className={label}>Yearly receipts from India (₹)</label>
          <input id="fc-india" inputMode="numeric" placeholder="0 if none" value={indiaReceipts} onChange={(e) => setIndiaReceipts(e.target.value)} className={input} />
        </div>
        <div>
          <label htmlFor="fc-prof" className={label}>Your work</label>
          <select id="fc-prof" value={profession} onChange={(e) => setProfession(e.target.value)} className={input}>
            <option value="specified">Professional (IT, design, consulting…)</option>
            <option value="other">Business (goods, trading, other)</option>
          </select>
        </div>
        <div>
          <label htmlFor="fc-cash" className={label}>Cash receipts more than 5% of total?</label>
          <select id="fc-cash" value={cashOver5} onChange={(e) => setCashOver5(e.target.value)} className={input}>
            <option value="no">No — mostly bank / UPI</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div>
          <label htmlFor="fc-res" className={label}>Do you live in India (resident)?</label>
          <select id="fc-res" value={resident} onChange={(e) => setResident(e.target.value)} className={input}>
            <option value="yes">Yes</option>
            <option value="no">No — I am an NRI</option>
          </select>
        </div>
        <div>
          <label htmlFor="fc-gst" className={label}>Already GST registered?</label>
          <select id="fc-gst" value={gstRegistered} onChange={(e) => setGstRegistered(e.target.value)} className={input}>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </div>

      <button
        type="button"
        onClick={check}
        className="mt-5 w-full bg-[#002b5c] hover:bg-[#06477f] text-white py-3.5 rounded-lg font-bold transition"
      >
        Check what applies to me
      </button>
      {error && <p className="mt-3 text-sm font-semibold text-red-700">{error}</p>}

      {result && (
        <div className="mt-6 space-y-4" aria-live="polite">
          <div className={`rounded-xl p-4 border ${result.gstLevel === "must" ? "bg-amber-50 border-amber-200" : "bg-green-50 border-green-200"}`}>
            <p className="font-bold text-[#002b5c]">GST registration</p>
            <p className="mt-1 text-sm leading-6">{result.gst}</p>
          </div>
          <div className="rounded-xl p-4 border bg-[#f7f9fc] border-gray-200">
            <p className="font-bold text-[#002b5c]">LUT (0% GST on exports)</p>
            <p className="mt-1 text-sm leading-6">{result.lut}</p>
          </div>
          <div className={`rounded-xl p-4 border ${result.presumptiveOk ? "bg-green-50 border-green-200" : "bg-amber-50 border-amber-200"}`}>
            <p className="font-bold text-[#002b5c]">Income tax</p>
            <p className="mt-1 text-sm leading-6">{result.presumptive}</p>
          </div>
          <div className="rounded-xl p-4 border bg-white border-gray-200">
            <p className="font-bold text-[#002b5c]">Your checklist</p>
            <ul className="mt-2 space-y-1.5 text-sm leading-6">
              {result.checklist.map((c) => (
                <li key={c}>✓ {c}</li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-gray-500 leading-5">
            General guidance based on the rules as of September 2026, not a final opinion on your case.
            Figures before deductions and tax slabs.
          </p>
          <a
            href={`https://wa.me/919354953603?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("freelancer_checker")}
            className="flex items-center justify-center bg-[#147438] hover:bg-[#0f5429] text-white py-3.5 rounded-lg font-bold transition"
          >
            Get this done by us — WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
