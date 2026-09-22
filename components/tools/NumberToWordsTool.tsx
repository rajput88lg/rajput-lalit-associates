"use client";

import { useMemo, useState } from "react";
import { Type, Hash } from "lucide-react";

import { numberToWords } from "@/lib/freeToolsCalculations";
import {
  ToolInputCard,
  ToolResultHeadline,
  ToolPanel,
  ToolRow,
  ToolConsultCta,
  ToolPrintButton,
} from "./ToolShell";

export default function NumberToWordsTool() {
  const [value, setValue] = useState(123456789);

  const words = useMemo(() => numberToWords(value), [value]);
  const indianStyleHint = useMemo(() => {
    // Just a quick Indian-numbering-system display hint (lakh/crore grouping),
    // for users used to that convention — the words themselves stay international.
    if (!Number.isFinite(value)) return "";
    const n = Math.abs(Math.floor(value));
    const s = n.toString();
    if (s.length <= 3) return s;
    const last3 = s.slice(-3);
    const rest = s.slice(0, -3);
    const grouped = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
    return `${grouped},${last3}`;
  }, [value]);

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<Type size={28} />}
          title="Number to Words Converter"
          subtitle="Convert any number into English words — handy for cheques, invoices and legal documents."
        >
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-[#002b5c] mb-2" htmlFor="num-to-words">
              <Hash size={16} className="text-[#d99a2b]" /> Enter a number
            </label>
            <input
              id="num-to-words"
              type="number"
              value={Number.isNaN(value) ? "" : value}
              onChange={(e) => setValue(e.target.value === "" ? 0 : Number(e.target.value))}
              step="1"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
            />
          </div>
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<Type size={24} />}
            label="In words"
            value={words}
          />

          <div className="mt-6">
            <ToolPanel title="Number formatting reference">
              <ToolRow label="Number (International grouping)" value={Math.floor(value).toLocaleString("en-US")} />
              <ToolRow label="Number (Indian grouping — lakh/crore)" value={indianStyleHint} />
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <ToolConsultCta context="writing amounts correctly on cheques, invoices or GST/ITR documents" />
        </div>
      </div>
    </section>
  );
}
