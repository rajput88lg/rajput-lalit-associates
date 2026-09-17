"use client";

import { useMemo, useState } from "react";
import { Laptop, Coins, Clock, CalendarDays } from "lucide-react";

import { calculateFreelancerRate, formatUSD, formatNumber } from "@/lib/freeToolsCalculations";
import {
  ToolInputCard,
  ToolResultHeadline,
  ToolPanel,
  ToolRow,
  ToolNumberField,
  ToolConsultCta,
  ToolPrintButton,
} from "./ToolShell";

export default function FreelancerRateCalculatorTool() {
  const [targetIncome, setTargetIncome] = useState(60000);
  const [annualExpenses, setAnnualExpenses] = useState(6000);
  const [billableHoursPerWeek, setBillableHoursPerWeek] = useState(25);
  const [weeksPerYear, setWeeksPerYear] = useState(48);

  const result = useMemo(
    () => calculateFreelancerRate(targetIncome, annualExpenses, billableHoursPerWeek, weeksPerYear),
    [targetIncome, annualExpenses, billableHoursPerWeek, weeksPerYear]
  );

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<Laptop size={28} />}
          title="Freelancer Hourly Rate Calculator"
          subtitle="Work out the hourly rate you need to charge to hit your target income."
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <ToolNumberField label="Target Annual Income (take-home)" icon={<Coins size={16} />} value={targetIncome} onChange={setTargetIncome} min={0} />
            <ToolNumberField label="Annual Business Expenses" icon={<Coins size={16} />} value={annualExpenses} onChange={setAnnualExpenses} min={0} />
            <ToolNumberField label="Billable Hours per Week" icon={<Clock size={16} />} value={billableHoursPerWeek} onChange={setBillableHoursPerWeek} min={1} max={80} />
            <ToolNumberField label="Working Weeks per Year" icon={<CalendarDays size={16} />} value={weeksPerYear} onChange={setWeeksPerYear} min={1} max={52} />
          </div>
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<Laptop size={24} />}
            label="Hourly Rate to Charge"
            value={formatUSD(result.hourlyRate)}
            description={
              <>
                Based on <strong>{formatNumber(result.totalBillableHours)}</strong> billable hours/year
                to cover <strong>{formatUSD(targetIncome)}</strong> target income plus{" "}
                <strong>{formatUSD(annualExpenses)}</strong> expenses.
              </>
            }
          />

          <div className="mt-6">
            <ToolPanel title="Breakdown">
              <ToolRow label="Target take-home income" value={formatUSD(targetIncome)} />
              <ToolRow label="Business expenses" value={formatUSD(annualExpenses)} />
              <ToolRow label="Revenue needed" value={formatUSD(targetIncome + annualExpenses)} />
              <ToolRow label="Billable hours / year" value={formatNumber(result.totalBillableHours)} />
              <ToolRow label="Hourly rate to charge" value={formatUSD(result.hourlyRate)} bold />
              <ToolRow label="Revenue at this rate" value={formatUSD(result.grossAnnualRevenueAtRate)} highlight />
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <p className="mt-6 text-xs text-gray-500 leading-6">
            <strong>Note:</strong> most freelancers can bill only a fraction
            of their total working hours (the rest goes to admin, marketing,
            unpaid pitches and time off) — that&apos;s why billable hours per
            week is usually lower than your total working hours. This
            doesn&apos;t account for taxes on business income; budget for
            those separately.
          </p>

          <ToolConsultCta context="Section 44ADA presumptive taxation and GST for freelancers in India" />
        </div>
      </div>
    </section>
  );
}
