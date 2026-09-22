"use client";

import { useMemo, useState } from "react";
import { Divide } from "lucide-react";

import { decimalToFraction, fractionToDecimal } from "@/lib/freeToolsCalculations";
import {
  ToolInputCard,
  ToolResultHeadline,
  ToolModeToggle,
  ToolConsultCta,
  ToolPrintButton,
} from "./ToolShell";

type Mode = "toFraction" | "toDecimal";

export default function FractionDecimalConverterTool() {
  const [mode, setMode] = useState<Mode>("toFraction");
  const [decimalInput, setDecimalInput] = useState("0.75");
  const [numerator, setNumerator] = useState(3);
  const [denominator, setDenominator] = useState(4);

  const fractionResult = useMemo(() => decimalToFraction(decimalInput || "0"), [decimalInput]);
  const decimalResult = useMemo(() => fractionToDecimal(numerator, denominator), [numerator, denominator]);

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<Divide size={28} />}
          title="Fraction ⇄ Decimal Converter"
          subtitle="Convert decimals to simplified fractions, or fractions to decimals."
        >
          <ToolModeToggle<Mode>
            options={[
              { value: "toFraction", label: "Decimal → Fraction" },
              { value: "toDecimal", label: "Fraction → Decimal" },
            ]}
            value={mode}
            onChange={setMode}
          />

          {mode === "toFraction" ? (
            <div>
              <label className="text-sm font-bold text-[#002b5c] mb-2 block" htmlFor="frac-decimal">Enter a decimal</label>
              <input
                id="frac-decimal"
                type="text"
                inputMode="decimal"
                value={decimalInput}
                onChange={(e) => setDecimalInput(e.target.value)}
                placeholder="e.g. 0.75"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 items-end">
              <div>
                <label className="text-sm font-bold text-[#002b5c] mb-2 block" htmlFor="frac-numerator">Numerator</label>
                <input
                  id="frac-numerator"
                  type="number"
                  value={Number.isNaN(numerator) ? "" : numerator}
                  onChange={(e) => setNumerator(e.target.value === "" ? 0 : Number(e.target.value))}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
                />
              </div>
              <div>
                <label className="text-sm font-bold text-[#002b5c] mb-2 block" htmlFor="frac-denominator">Denominator</label>
                <input
                  id="frac-denominator"
                  type="number"
                  value={Number.isNaN(denominator) ? "" : denominator}
                  onChange={(e) => setDenominator(e.target.value === "" ? 0 : Number(e.target.value))}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
                />
              </div>
            </div>
          )}
        </ToolInputCard>

        <div className="mt-10">
          {mode === "toFraction" ? (
            <ToolResultHeadline
              icon={<Divide size={24} />}
              label="Simplified fraction"
              value={fractionResult.simplified}
              description={<><strong>{decimalInput}</strong> as a simplified fraction.</>}
            />
          ) : (
            <ToolResultHeadline
              icon={<Divide size={24} />}
              label="Decimal value"
              value={String(decimalResult)}
              description={<><strong>{numerator}/{denominator}</strong> as a decimal.</>}
            />
          )}

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <ToolConsultCta context="calculating tax rates, ratios or ownership shares expressed as fractions" />
        </div>
      </div>
    </section>
  );
}
