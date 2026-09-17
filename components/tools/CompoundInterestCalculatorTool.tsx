"use client";

import { useMemo, useState } from "react";
import { TrendingUp, Coins, Percent, CalendarDays } from "lucide-react";

import {
  calculateCompoundInterest,
  formatUSD,
  type CompoundFrequency,
} from "@/lib/freeToolsCalculations";
import {
  ToolInputCard,
  ToolResultHeadline,
  ToolPanel,
  ToolRow,
  ToolNumberField,
  ToolModeToggle,
  ToolConsultCta,
  ToolPrintButton,
} from "./ToolShell";

const FREQUENCY_OPTIONS: { value: CompoundFrequency; label: string }[] = [
  { value: 1, label: "Annually" },
  { value: 2, label: "Semi-Annually" },
  { value: 4, label: "Quarterly" },
  { value: 12, label: "Monthly" },
];

export default function CompoundInterestCalculatorTool() {
  const [principal, setPrincipal] = useState(10000);
  const [ratePct, setRatePct] = useState(8);
  const [years, setYears] = useState(10);
  const [frequency, setFrequency] = useState<CompoundFrequency>(12);

  const result = useMemo(
    () => calculateCompoundInterest(principal, ratePct, years, frequency),
    [principal, ratePct, years, frequency]
  );

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<TrendingUp size={28} />}
          title="Compound Interest Calculator"
          subtitle="See how your money grows when interest is compounded over time."
        >
          <div className="grid sm:grid-cols-3 gap-6">
            <ToolNumberField label="Principal Amount" icon={<Coins size={16} />} value={principal} onChange={setPrincipal} min={0} />
            <ToolNumberField label="Annual Interest Rate" icon={<Percent size={16} />} value={ratePct} onChange={setRatePct} min={0} step={0.1} suffix="%" />
            <ToolNumberField label="Time Period" icon={<CalendarDays size={16} />} value={years} onChange={setYears} min={1} max={50} suffix="years" />
          </div>

          <div>
            <label className="text-sm font-bold text-[#002b5c] mb-3 block">Compounding Frequency</label>
            <ToolModeToggle options={FREQUENCY_OPTIONS} value={frequency} onChange={setFrequency} />
          </div>
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<TrendingUp size={24} />}
            label="Maturity Amount"
            value={formatUSD(result.maturityAmount)}
            description={
              <>
                Your <strong>{formatUSD(result.principal)}</strong> grows to{" "}
                <strong>{formatUSD(result.maturityAmount)}</strong> in {years} years — that's{" "}
                <strong>{formatUSD(result.totalInterest)}</strong> in interest earned.
              </>
            }
          />

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <ToolPanel title="Summary">
              <ToolRow label="Principal amount" value={formatUSD(result.principal)} />
              <ToolRow label="Interest rate" value={`${ratePct}% p.a.`} />
              <ToolRow label="Time period" value={`${years} years`} />
              <ToolRow label="Compounding" value={FREQUENCY_OPTIONS.find((f) => f.value === frequency)?.label ?? ""} />
              <ToolRow label="Total interest earned" value={formatUSD(result.totalInterest)} highlight />
              <ToolRow label="Maturity amount" value={formatUSD(result.maturityAmount)} bold />
            </ToolPanel>

            <ToolPanel title="Year-wise Growth">
              <div className="overflow-x-auto -mx-2">
                <table className="w-full text-sm min-w-[280px]">
                  <thead>
                    <tr className="text-left text-gray-500 border-b border-gray-200">
                      <th className="py-2 px-2 font-semibold">Year</th>
                      <th className="py-2 px-2 font-semibold text-right">Amount</th>
                      <th className="py-2 px-2 font-semibold text-right">Interest So Far</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.yearlySchedule.slice(0, 10).map((row) => (
                      <tr key={row.year} className="border-b border-gray-100">
                        <td className="py-2 px-2 text-gray-700">{row.year}</td>
                        <td className="py-2 px-2 text-right text-gray-700">{formatUSD(row.amount)}</td>
                        <td className="py-2 px-2 text-right font-semibold text-[#002b5c]">{formatUSD(row.interestSoFar)}</td>
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
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <p className="mt-6 text-xs text-gray-500 leading-6">
            <strong>Note:</strong> Amounts are shown with a generic currency
            symbol ($) since this calculator is used worldwide — the maths
            works identically in any currency, just read the figures in your
            own. This is a planning estimate; actual returns from any
            investment product depend on its own terms and are never
            guaranteed.
          </p>

          <ToolConsultCta context="tax-efficient investing in India (Section 80C, ELSS, PPF and more)" />
        </div>
      </div>
    </section>
  );
}
