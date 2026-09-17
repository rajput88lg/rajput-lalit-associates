"use client";

import { useMemo, useState } from "react";
import { Landmark, Coins, Percent, CalendarDays } from "lucide-react";

import { calculateSimpleInterest, formatUSD } from "@/lib/freeToolsCalculations";
import {
  ToolInputCard,
  ToolResultHeadline,
  ToolPanel,
  ToolRow,
  ToolNumberField,
  ToolConsultCta,
  ToolPrintButton,
} from "./ToolShell";

export default function SimpleInterestCalculatorTool() {
  const [principal, setPrincipal] = useState(10000);
  const [ratePct, setRatePct] = useState(6);
  const [years, setYears] = useState(3);

  const result = useMemo(
    () => calculateSimpleInterest(principal, ratePct, years),
    [principal, ratePct, years]
  );

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<Landmark size={28} />}
          title="Simple Interest Calculator"
          subtitle="Classic simple-interest formula: Interest = Principal × Rate × Time ÷ 100."
        >
          <div className="grid sm:grid-cols-3 gap-6">
            <ToolNumberField label="Principal Amount" icon={<Coins size={16} />} value={principal} onChange={setPrincipal} min={0} />
            <ToolNumberField label="Annual Interest Rate" icon={<Percent size={16} />} value={ratePct} onChange={setRatePct} min={0} step={0.1} suffix="%" />
            <ToolNumberField label="Time Period" icon={<CalendarDays size={16} />} value={years} onChange={setYears} min={0} step={0.5} suffix="years" />
          </div>
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<Landmark size={24} />}
            label="Total Amount"
            value={formatUSD(result.totalAmount)}
            description={
              <>
                Interest earned:{" "}
                <strong>{formatUSD(result.interest)}</strong> over {years} years.
              </>
            }
          />

          <div className="mt-6">
            <ToolPanel title="Breakdown">
              <ToolRow label="Principal amount" value={formatUSD(result.principal)} />
              <ToolRow label="Interest rate" value={`${ratePct}% p.a.`} />
              <ToolRow label="Time period" value={`${years} years`} />
              <ToolRow label="Simple interest" value={formatUSD(result.interest)} highlight />
              <ToolRow label="Total amount" value={formatUSD(result.totalAmount)} bold />
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <p className="mt-6 text-xs text-gray-500 leading-6">
            <strong>Note:</strong> Simple interest is charged only on the
            original principal, unlike compound interest which is charged on
            principal + accumulated interest. Most loans and deposits today
            use compound/reducing-balance methods — check our{" "}
            <a href="/compound-interest-calculator" className="underline font-semibold text-[#002b5c]">
              Compound Interest Calculator
            </a>{" "}
            for that.
          </p>

          <ToolConsultCta context="loan or investment interest taxation in India" />
        </div>
      </div>
    </section>
  );
}
