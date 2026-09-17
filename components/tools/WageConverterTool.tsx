"use client";

import { useMemo, useState } from "react";
import { Clock, Coins } from "lucide-react";

import {
  convertWage,
  DEFAULT_WAGE_ASSUMPTIONS,
  formatUSD,
  type WagePeriod,
} from "@/lib/freeToolsCalculations";
import {
  ToolInputCard,
  ToolResultHeadline,
  ToolPanel,
  ToolRow,
  ToolNumberField,
  ToolConsultCta,
  ToolPrintButton,
} from "./ToolShell";

const PERIOD_LABELS: Record<WagePeriod, string> = {
  hourly: "Hourly",
  daily: "Daily",
  weekly: "Weekly",
  monthly: "Monthly",
  annual: "Annual",
};

export default function WageConverterTool() {
  const [amount, setAmount] = useState(25);
  const [period, setPeriod] = useState<WagePeriod>("hourly");
  const [hoursPerDay, setHoursPerDay] = useState(DEFAULT_WAGE_ASSUMPTIONS.hoursPerDay);
  const [daysPerWeek, setDaysPerWeek] = useState(DEFAULT_WAGE_ASSUMPTIONS.daysPerWeek);
  const [weeksPerYear, setWeeksPerYear] = useState(DEFAULT_WAGE_ASSUMPTIONS.weeksPerYear);

  const result = useMemo(
    () => convertWage(amount, period, { hoursPerDay, daysPerWeek, weeksPerYear }),
    [amount, period, hoursPerDay, daysPerWeek, weeksPerYear]
  );

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<Clock size={28} />}
          title="Salary / Wage Converter"
          subtitle="Convert between hourly, daily, weekly, monthly and annual pay."
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <ToolNumberField label="Amount" icon={<Coins size={16} />} value={amount} onChange={setAmount} min={0} />
            <div>
              <label className="text-sm font-bold text-[#002b5c] mb-2 block">Pay Period</label>
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value as WagePeriod)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              >
                {(Object.keys(PERIOD_LABELS) as WagePeriod[]).map((p) => (
                  <option key={p} value={p}>{PERIOD_LABELS[p]}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-bold text-[#002b5c] mb-3 block">
              Work Schedule Assumptions (adjust if yours is different)
            </label>
            <div className="grid sm:grid-cols-3 gap-6">
              <ToolNumberField label="Hours / Day" icon={<Clock size={16} />} value={hoursPerDay} onChange={setHoursPerDay} min={1} max={24} />
              <ToolNumberField label="Days / Week" icon={<Clock size={16} />} value={daysPerWeek} onChange={setDaysPerWeek} min={1} max={7} />
              <ToolNumberField label="Weeks / Year" icon={<Clock size={16} />} value={weeksPerYear} onChange={setWeeksPerYear} min={1} max={52} />
            </div>
          </div>
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<Clock size={24} />}
            label="Annual Equivalent"
            value={formatUSD(result.annual)}
            description={
              <>
                Based on <strong>{formatUSD(amount)}</strong> {PERIOD_LABELS[period].toLowerCase()} pay.
              </>
            }
          />

          <div className="mt-6">
            <ToolPanel title="All Pay Periods">
              <ToolRow label="Hourly" value={formatUSD(result.hourly)} highlight={period === "hourly"} />
              <ToolRow label="Daily" value={formatUSD(result.daily)} highlight={period === "daily"} />
              <ToolRow label="Weekly" value={formatUSD(result.weekly)} highlight={period === "weekly"} />
              <ToolRow label="Monthly" value={formatUSD(result.monthly)} highlight={period === "monthly"} />
              <ToolRow label="Annual" value={formatUSD(result.annual)} bold />
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <p className="mt-6 text-xs text-gray-500 leading-6">
            <strong>Note:</strong> uses your work schedule assumptions above
            (default: 8 hours/day, 5 days/week, 52 weeks/year) — adjust them
            to match your actual working pattern. Figures are gross pay
            before any tax or deductions, and work in any currency.
          </p>

          <ToolConsultCta context="income tax planning and TDS on salary in India" />
        </div>
      </div>
    </section>
  );
}
