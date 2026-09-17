"use client";

import { useMemo, useState } from "react";
import { Landmark, ArrowLeftRight } from "lucide-react";

import { toRoman, fromRoman } from "@/lib/freeToolsCalculations";
import {
  ToolInputCard,
  ToolResultHeadline,
  ToolModeToggle,
  ToolConsultCta,
  ToolPrintButton,
} from "./ToolShell";

type Mode = "toRoman" | "toNumber";

export default function RomanNumeralConverterTool() {
  const [mode, setMode] = useState<Mode>("toRoman");
  const [numberInput, setNumberInput] = useState(1994);
  const [romanInput, setRomanInput] = useState("MCMXCIV");

  const romanResult = useMemo(() => toRoman(numberInput), [numberInput]);
  const numberResult = useMemo(() => fromRoman(romanInput), [romanInput]);

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<Landmark size={28} />}
          title="Roman Numeral Converter"
          subtitle="Convert numbers to Roman numerals and back, both ways."
        >
          <ToolModeToggle<Mode>
            options={[
              { value: "toRoman", label: "Number → Roman" },
              { value: "toNumber", label: "Roman → Number" },
            ]}
            value={mode}
            onChange={setMode}
          />

          {mode === "toRoman" ? (
            <div>
              <label className="text-sm font-bold text-[#002b5c] mb-2 block">
                Enter a number (1–3999)
              </label>
              <input
                type="number"
                value={Number.isNaN(numberInput) ? "" : numberInput}
                onChange={(e) => setNumberInput(e.target.value === "" ? 0 : Number(e.target.value))}
                min={1}
                max={3999}
                step={1}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              />
            </div>
          ) : (
            <div>
              <label className="text-sm font-bold text-[#002b5c] mb-2 block">
                Enter a Roman numeral
              </label>
              <input
                type="text"
                value={romanInput}
                onChange={(e) => setRomanInput(e.target.value.toUpperCase())}
                placeholder="e.g. MCMXCIV"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              />
            </div>
          )}
        </ToolInputCard>

        <div className="mt-10">
          {mode === "toRoman" ? (
            <ToolResultHeadline
              icon={<Landmark size={24} />}
              label="Roman numeral"
              value={romanResult}
              description={<><strong>{numberInput}</strong> in Roman numerals.</>}
            />
          ) : (
            <ToolResultHeadline
              icon={<ArrowLeftRight size={24} />}
              label="Number"
              value={numberResult === null ? "Invalid Roman numeral" : String(numberResult)}
              description={
                numberResult === null
                  ? "Please enter a valid Roman numeral using only I, V, X, L, C, D, M."
                  : <><strong>{romanInput}</strong> as a number.</>
              }
            />
          )}

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <ToolConsultCta context="reading legal documents, certificates or historical financial records using Roman numerals" />
        </div>
      </div>
    </section>
  );
}
