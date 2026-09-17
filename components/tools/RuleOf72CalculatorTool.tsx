"use client";

import { useMemo, useState } from "react";
import { Repeat, Percent, CalendarDays } from "lucide-react";

import {
  calculateYearsToDouble,
  calculateRequiredRateToDouble,
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

type Mode = "rateToYears" | "yearsToRate";

export default function RuleOf72CalculatorTool() {
  const [mode, setMode] = useState<Mode>("rateToYears");
  const [ratePct, setRatePct] = useState(8);
  const [years, setYears] = useState(9);

  const yearsResult = useMemo(() => calculateYearsToDouble(ratePct), [ratePct]);
  const rateResult = useMemo(() => calculateRequiredRateToDouble(years), [years]);

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<Repeat size={28} />}
          title="Rule of 72 (Doubling Time) Calculator"
          subtitle="Quickly estimate how long it takes your money to double at a given rate of return."
        >
          <ToolModeToggle
            options={[
              { value: "rateToYears", label: "I know the rate" },
              { value: "yearsToRate", label: "I know the years" },
            ]}
            value={mode}
            onChange={setMode}
          />

          {mode === "rateToYears" ? (
            <ToolNumberField label="Expected Annual Return" icon={<Percent size={16} />} value={ratePct} onChange={setRatePct} min={0.1} step={0.1} suffix="%" />
          ) : (
            <ToolNumberField label="Years to Double" icon={<CalendarDays size={16} />} value={years} onChange={setYears} min={0.5} step={0.5} suffix="years" />
          )}
        </ToolInputCard>

        <div className="mt-10">
          {mode === "rateToYears" ? (
            <ToolResultHeadline
              icon={<Repeat size={24} />}
              label="Years to Double Your Money"
              value={`${yearsResult.yearsToDouble} yrs`}
              description={
                <>
                  At <strong>{ratePct}%</strong> annual return, your money roughly doubles every{" "}
                  <strong>{yearsResult.yearsToDouble} years</strong> (Rule of 72: 72 ÷ rate).
                </>
              }
            />
          ) : (
            <ToolResultHeadline
              icon={<Repeat size={24} />}
              label="Rate Needed to Double"
              value={`${rateResult.ratePct}%`}
              description={
                <>
                  To double your money in <strong>{years} years</strong>, you&apos;d need roughly a{" "}
                  <strong>{rateResult.ratePct}%</strong> annual return (Rule of 72: 72 ÷ years).
                </>
              }
            />
          )}

          <div className="mt-6">
            <ToolPanel title="Quick Reference">
              <ToolRow label="4% annual return" value="≈ 18 years to double" />
              <ToolRow label="6% annual return" value="≈ 12 years to double" />
              <ToolRow label="8% annual return" value="≈ 9 years to double" />
              <ToolRow label="12% annual return" value="≈ 6 years to double" />
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <p className="mt-6 text-xs text-gray-500 leading-6">
            <strong>Note:</strong> the Rule of 72 is a quick mental-math
            approximation, most accurate for annual rates roughly between
            6% and 10%. For an exact figure, use our{" "}
            <a href="/compound-interest-calculator" className="underline font-semibold text-[#002b5c]">Compound Interest Calculator</a>.
          </p>

          <ToolConsultCta context="tax-efficient investing and financial planning in India" />
        </div>
      </div>
    </section>
  );
}
