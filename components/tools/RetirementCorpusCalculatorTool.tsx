"use client";

import { useMemo, useState } from "react";
import { Umbrella, Coins, Percent, CalendarDays } from "lucide-react";

import { calculateSip } from "@/lib/loanCalculations";
import { formatUSD } from "@/lib/freeToolsCalculations";
import {
  ToolInputCard,
  ToolResultHeadline,
  ToolPanel,
  ToolRow,
  ToolNumberField,
  ToolConsultCta,
  ToolPrintButton,
} from "./ToolShell";

export default function RetirementCorpusCalculatorTool() {
  const [monthlyContribution, setMonthlyContribution] = useState(300);
  const [ratePct, setRatePct] = useState(9);
  const [years, setYears] = useState(25);

  const result = useMemo(
    () =>
      calculateSip({
        monthlyInvestment: monthlyContribution,
        expectedReturnPct: ratePct,
        tenureYears: years,
      }),
    [monthlyContribution, ratePct, years]
  );

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<Umbrella size={28} />}
          title="Retirement Corpus Calculator"
          subtitle="See how a monthly contribution grows into a retirement fund over time."
        >
          <div className="grid sm:grid-cols-3 gap-6">
            <ToolNumberField label="Monthly Contribution" icon={<Coins size={16} />} value={monthlyContribution} onChange={setMonthlyContribution} min={0} />
            <ToolNumberField label="Expected Annual Return" icon={<Percent size={16} />} value={ratePct} onChange={setRatePct} min={0} step={0.1} suffix="%" />
            <ToolNumberField label="Years Until Retirement" icon={<CalendarDays size={16} />} value={years} onChange={setYears} min={1} max={50} suffix="years" />
          </div>
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<Umbrella size={24} />}
            label="Projected Retirement Corpus"
            value={formatUSD(result.maturityValue)}
            description={
              <>
                Contributing <strong>{formatUSD(monthlyContribution)}</strong>/month for{" "}
                <strong>{years} years</strong> at <strong>{ratePct}%</strong> expected return.
              </>
            }
          />

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <ToolPanel title="Summary">
              <ToolRow label="Monthly contribution" value={formatUSD(monthlyContribution)} />
              <ToolRow label="Expected annual return" value={`${ratePct}%`} />
              <ToolRow label="Time period" value={`${years} years`} />
              <ToolRow label="Total contributed" value={formatUSD(result.investedAmount)} />
              <ToolRow label="Growth from returns" value={formatUSD(result.estimatedReturns)} highlight />
              <ToolRow label="Projected corpus" value={formatUSD(result.maturityValue)} bold />
            </ToolPanel>

            <ToolPanel title="Growth Over Time">
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
                      .filter((_, i) => i % Math.max(1, Math.floor(result.yearlySchedule.length / 10)) === 0 || i === result.yearlySchedule.length - 1)
                      .slice(0, 10)
                      .map((row) => (
                        <tr key={row.year} className="border-b border-gray-100">
                          <td className="py-2 px-2 text-gray-700">{row.year}</td>
                          <td className="py-2 px-2 text-right text-gray-700">{formatUSD(row.invested)}</td>
                          <td className="py-2 px-2 text-right font-semibold text-[#002b5c]">{formatUSD(row.value)}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <p className="mt-6 text-xs text-gray-500 leading-6">
            <strong>Note:</strong> this is a planning estimate assuming a
            constant monthly contribution and a constant annual return —
            actual investment returns vary and are never guaranteed. Works
            in any currency. In India specifically, see our{" "}
            <a href="/sip-calculator" className="underline font-semibold text-[#002b5c]">SIP Calculator</a>.
          </p>

          <ToolConsultCta context="tax-efficient retirement savings in India (Section 80C, NPS, PPF and more)" />
        </div>
      </div>
    </section>
  );
}
