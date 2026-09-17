"use client";

import { useMemo, useState } from "react";
import { Cake, CalendarDays } from "lucide-react";

import { calculateAge } from "@/lib/freeToolsCalculations";
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

export default function AgeCalculatorTool() {
  const today = useMemo(() => new Date(), []);
  const [birthDateStr, setBirthDateStr] = useState(() => {
    const d = new Date(today);
    d.setFullYear(d.getFullYear() - 25);
    return toDateInputValue(d);
  });
  const [asOfStr, setAsOfStr] = useState(toDateInputValue(today));

  const result = useMemo(() => {
    const birth = new Date(birthDateStr);
    const asOf = new Date(asOfStr);
    if (Number.isNaN(birth.getTime()) || Number.isNaN(asOf.getTime())) {
      return null;
    }
    return calculateAge(birth, asOf);
  }, [birthDateStr, asOfStr]);

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<Cake size={28} />}
          title="Age Calculator"
          subtitle="Find your exact age in years, months and days between any two dates."
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-[#002b5c] mb-2">
                <CalendarDays size={16} className="text-[#d99a2b]" />
                Date of Birth
              </label>
              <input
                type="date"
                value={birthDateStr}
                onChange={(e) => setBirthDateStr(e.target.value)}
                max={asOfStr}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-[#002b5c] mb-2">
                <CalendarDays size={16} className="text-[#d99a2b]" />
                Calculate Age As Of
              </label>
              <input
                type="date"
                value={asOfStr}
                onChange={(e) => setAsOfStr(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              />
            </div>
          </div>
        </ToolInputCard>

        <div className="mt-10">
          {result ? (
            <>
              <ToolResultHeadline
                icon={<Cake size={24} />}
                label="Your Age"
                value={`${result.years}y ${result.months}m ${result.days}d`}
                description={
                  <>
                    That's <strong>{result.totalDays.toLocaleString("en-US")} days</strong> old —
                    your next birthday is in{" "}
                    <strong>{result.nextBirthdayInDays} day{result.nextBirthdayInDays === 1 ? "" : "s"}</strong>.
                  </>
                }
              />

              <div className="mt-6">
                <ToolPanel title="Full Breakdown">
                  <ToolRow label="Years" value={`${result.years}`} />
                  <ToolRow label="Months" value={`${result.months}`} />
                  <ToolRow label="Days" value={`${result.days}`} />
                  <ToolRow label="Total months lived" value={result.totalMonths.toLocaleString("en-US")} />
                  <ToolRow label="Total weeks lived" value={result.totalWeeks.toLocaleString("en-US")} />
                  <ToolRow label="Total days lived" value={result.totalDays.toLocaleString("en-US")} bold />
                </ToolPanel>
              </div>
            </>
          ) : (
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center text-gray-500">
              Please enter a valid date of birth.
            </div>
          )}

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <ToolConsultCta context="tax planning based on your life stage" />
        </div>
      </div>
    </section>
  );
}
