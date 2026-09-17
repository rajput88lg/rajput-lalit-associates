"use client";

import { useMemo, useState } from "react";
import { CalendarRange, CalendarDays } from "lucide-react";

import { calculateDateDifference } from "@/lib/freeToolsCalculations";
import {
  ToolInputCard,
  ToolResultHeadline,
  ToolPanel,
  ToolRow,
  ToolConsultCta,
  ToolPrintButton,
} from "./ToolShell";

function toDateInputValue(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export default function DateDifferenceCalculatorTool() {
  const today = useMemo(() => new Date(), []);
  const [startStr, setStartStr] = useState(() => {
    const d = new Date(today);
    d.setMonth(d.getMonth() - 1);
    return toDateInputValue(d);
  });
  const [endStr, setEndStr] = useState(toDateInputValue(today));

  const result = useMemo(() => {
    const start = new Date(startStr);
    const end = new Date(endStr);
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return null;
    return calculateDateDifference(start, end);
  }, [startStr, endStr]);

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<CalendarRange size={28} />}
          title="Date Difference Calculator"
          subtitle="Find the exact number of years, months, days or weeks between two dates."
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-[#002b5c] mb-2">
                <CalendarDays size={16} className="text-[#d99a2b]" />
                Start Date
              </label>
              <input
                type="date"
                value={startStr}
                onChange={(e) => setStartStr(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-[#002b5c] mb-2">
                <CalendarDays size={16} className="text-[#d99a2b]" />
                End Date
              </label>
              <input
                type="date"
                value={endStr}
                onChange={(e) => setEndStr(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              />
            </div>
          </div>
        </ToolInputCard>

        <div className="mt-10">
          {result ? (
            <>
              <ToolResultHeadline
                icon={<CalendarRange size={24} />}
                label="Difference"
                value={`${result.years}y ${result.months}m ${result.days}d`}
                description={
                  <>
                    That's a total of{" "}
                    <strong>{result.totalDays.toLocaleString("en-US")} days</strong> (
                    {result.totalWeeks.toLocaleString("en-US")} weeks).
                  </>
                }
              />

              <div className="mt-6">
                <ToolPanel title="Full Breakdown">
                  <ToolRow label="Years" value={`${result.years}`} />
                  <ToolRow label="Months" value={`${result.months}`} />
                  <ToolRow label="Days" value={`${result.days}`} />
                  <ToolRow label="Total weeks" value={result.totalWeeks.toLocaleString("en-US")} />
                  <ToolRow label="Total days" value={result.totalDays.toLocaleString("en-US")} bold />
                </ToolPanel>
              </div>
            </>
          ) : (
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center text-gray-500">
              Please enter two valid dates.
            </div>
          )}

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <ToolConsultCta context="deadline and compliance-date planning" />
        </div>
      </div>
    </section>
  );
}
