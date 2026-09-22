"use client";

import { useMemo, useState } from "react";
import { Building2, Coins, Percent, CalendarDays } from "lucide-react";

import { calculateEmi } from "@/lib/loanCalculations";
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

export default function LoanAmortizationCalculatorTool() {
  const [principal, setPrincipal] = useState(200000);
  const [ratePct, setRatePct] = useState(7);
  const [years, setYears] = useState(20);

  const result = useMemo(
    () => calculateEmi({ principal, annualRatePct: ratePct, tenureYears: years }),
    [principal, ratePct, years]
  );

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<Building2 size={28} />}
          title="Loan Amortization Calculator"
          subtitle="Work out the monthly payment and full repayment schedule for any loan or mortgage."
        >
          <div className="grid sm:grid-cols-3 gap-6">
            <ToolNumberField label="Loan Amount" icon={<Coins size={16} />} value={principal} onChange={setPrincipal} min={0} />
            <ToolNumberField label="Annual Interest Rate" icon={<Percent size={16} />} value={ratePct} onChange={setRatePct} min={0} step={0.05} suffix="%" />
            <ToolNumberField label="Loan Term" icon={<CalendarDays size={16} />} value={years} onChange={setYears} min={1} max={40} suffix="years" />
          </div>
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<Building2 size={24} />}
            label="Monthly Payment"
            value={formatUSD(result.emi)}
            description={
              <>
                Over <strong>{years} years</strong> you&apos;ll pay{" "}
                <strong>{formatUSD(result.totalPayment)}</strong> in total —{" "}
                <strong>{formatUSD(result.totalInterest)}</strong> of that is interest.
              </>
            }
          />

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <ToolPanel title="Summary">
              <ToolRow label="Loan amount" value={formatUSD(result.principal)} />
              <ToolRow label="Interest rate" value={`${ratePct}% p.a.`} />
              <ToolRow label="Loan term" value={`${years} years`} />
              <ToolRow label="Monthly payment" value={formatUSD(result.emi)} bold />
              <ToolRow label="Total interest" value={formatUSD(result.totalInterest)} highlight />
              <ToolRow label="Total repayment" value={formatUSD(result.totalPayment)} />
            </ToolPanel>

            <ToolPanel title="Year-wise Schedule">
              <div className="overflow-x-auto -mx-2">
                <table className="w-full text-sm min-w-[320px]">
                  <thead>
                    <tr className="text-left text-gray-500 border-b border-gray-200">
                      <th className="py-2 px-2 font-semibold">Year</th>
                      <th className="py-2 px-2 font-semibold text-right">Principal</th>
                      <th className="py-2 px-2 font-semibold text-right">Interest</th>
                      <th className="py-2 px-2 font-semibold text-right">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.yearlySchedule.slice(0, 10).map((row) => (
                      <tr key={row.year} className="border-b border-gray-100">
                        <td className="py-2 px-2 text-gray-700">{row.year}</td>
                        <td className="py-2 px-2 text-right text-gray-700">{formatUSD(row.principalPaid)}</td>
                        <td className="py-2 px-2 text-right text-gray-700">{formatUSD(row.interestPaid)}</td>
                        <td className="py-2 px-2 text-right font-semibold text-[#002b5c]">{formatUSD(row.balanceRemaining)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {result.yearlySchedule.length > 10 && (
                  <p className="mt-2 text-xs text-gray-500 px-2">
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
            <strong>Note:</strong> uses the standard reducing-balance
            amortization formula, the same maths as any mortgage or personal
            loan calculator worldwide — shown in a generic currency since it
            works the same in any currency. In India specifically, see our{" "}
            <a href="/home-loan-emi-calculator" className="underline font-semibold text-[#002b5c]">Home Loan EMI Calculator</a> for
            rate comparisons.
          </p>

          <ToolConsultCta context="business loan documentation and financial statements for lenders" />
        </div>
      </div>
    </section>
  );
}
