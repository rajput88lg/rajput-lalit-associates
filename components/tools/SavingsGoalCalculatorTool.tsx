"use client";

import { useMemo, useState } from "react";
import { PiggyBank, Coins, Percent, CalendarDays } from "lucide-react";

import { calculateSavingsGoal, formatUSD } from "@/lib/freeToolsCalculations";
import {
  ToolInputCard,
  ToolResultHeadline,
  ToolPanel,
  ToolRow,
  ToolNumberField,
  ToolConsultCta,
  ToolPrintButton,
} from "./ToolShell";

export default function SavingsGoalCalculatorTool() {
  const [targetAmount, setTargetAmount] = useState(10000);
  const [years, setYears] = useState(3);
  const [ratePct, setRatePct] = useState(6);

  const months = Math.round(years * 12);
  const result = useMemo(
    () => calculateSavingsGoal(targetAmount, ratePct, months),
    [targetAmount, ratePct, months]
  );

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<PiggyBank size={28} />}
          title="Savings Goal Calculator"
          subtitle="Find out how much you need to save each month to hit a target amount."
        >
          <div className="grid sm:grid-cols-3 gap-6">
            <ToolNumberField label="Savings Target" icon={<Coins size={16} />} value={targetAmount} onChange={setTargetAmount} min={0} />
            <ToolNumberField label="Time to Reach Goal" icon={<CalendarDays size={16} />} value={years} onChange={setYears} min={0.5} max={50} step={0.5} suffix="years" />
            <ToolNumberField label="Expected Annual Return" icon={<Percent size={16} />} value={ratePct} onChange={setRatePct} min={0} step={0.1} suffix="%" />
          </div>
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<PiggyBank size={24} />}
            label="Required Monthly Saving"
            value={formatUSD(result.requiredMonthlyContribution)}
            description={
              <>
                Save this every month for <strong>{years} years</strong> at{" "}
                <strong>{ratePct}%</strong> expected annual return to reach{" "}
                <strong>{formatUSD(targetAmount)}</strong>.
              </>
            }
          />

          <div className="mt-6">
            <ToolPanel title="Breakdown">
              <ToolRow label="Savings target" value={formatUSD(targetAmount)} />
              <ToolRow label="Time period" value={`${years} years (${months} months)`} />
              <ToolRow label="Expected annual return" value={`${ratePct}%`} />
              <ToolRow label="Required monthly saving" value={formatUSD(result.requiredMonthlyContribution)} bold />
              <ToolRow label="Total you contribute" value={formatUSD(result.totalContributed)} />
              <ToolRow label="Growth from returns" value={formatUSD(result.totalGrowth)} highlight />
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <p className="mt-6 text-xs text-gray-500 leading-6">
            <strong>Note:</strong> assumes a constant monthly saving and a
            constant annual return compounded monthly — real investment
            returns vary year to year and are never guaranteed. Works in any
            currency.
          </p>

          <ToolConsultCta context="tax-efficient savings and investment planning in India" />
        </div>
      </div>
    </section>
  );
}
