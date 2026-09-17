"use client";

import { useMemo, useState } from "react";
import { Globe, ArrowLeftRight } from "lucide-react";

import { convertTimezone } from "@/lib/freeToolsCalculations";
import {
  ToolInputCard,
  ToolResultHeadline,
  ToolPanel,
  ToolRow,
  ToolConsultCta,
  ToolPrintButton,
} from "./ToolShell";

const ZONES: { value: string; label: string }[] = [
  { value: "Asia/Kolkata", label: "India — IST (Asia/Kolkata)" },
  { value: "America/New_York", label: "USA East — ET (America/New_York)" },
  { value: "America/Los_Angeles", label: "USA West — PT (America/Los_Angeles)" },
  { value: "America/Chicago", label: "USA Central — CT (America/Chicago)" },
  { value: "Europe/London", label: "UK — GMT/BST (Europe/London)" },
  { value: "Europe/Berlin", label: "Germany/CET (Europe/Berlin)" },
  { value: "Asia/Dubai", label: "UAE — GST (Asia/Dubai)" },
  { value: "Asia/Singapore", label: "Singapore — SGT (Asia/Singapore)" },
  { value: "Asia/Tokyo", label: "Japan — JST (Asia/Tokyo)" },
  { value: "Asia/Shanghai", label: "China — CST (Asia/Shanghai)" },
  { value: "Australia/Sydney", label: "Australia East — AEST/AEDT (Australia/Sydney)" },
  { value: "Pacific/Auckland", label: "New Zealand — NZST/NZDT (Pacific/Auckland)" },
  { value: "UTC", label: "Coordinated Universal Time (UTC)" },
];

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export default function TimezoneConverterTool() {
  const [date, setDate] = useState(todayIso());
  const [time, setTime] = useState("12:00");
  const [fromZone, setFromZone] = useState("Asia/Kolkata");
  const [toZone, setToZone] = useState("America/New_York");

  const result = useMemo(
    () => convertTimezone({ date, time, fromTimeZone: fromZone, toTimeZone: toZone }),
    [date, time, fromZone, toZone]
  );

  const swap = () => {
    setFromZone(toZone);
    setToZone(fromZone);
  };

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<Globe size={28} />}
          title="World Time Zone Converter"
          subtitle="Convert a date and time between any two time zones — handles daylight saving automatically."
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-[#002b5c] mb-2 block">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-[#002b5c] mb-2 block">Time (24-hour)</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-4 items-end">
            <div>
              <label className="text-sm font-bold text-[#002b5c] mb-2 block">From time zone</label>
              <select
                value={fromZone}
                onChange={(e) => setFromZone(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              >
                {ZONES.map((z) => (
                  <option key={z.value} value={z.value}>{z.label}</option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={swap}
              aria-label="Swap zones"
              className="justify-self-center bg-[#002b5c] hover:bg-[#06477f] text-white w-11 h-11 rounded-full flex items-center justify-center transition mb-1"
            >
              <ArrowLeftRight size={18} />
            </button>

            <div>
              <label className="text-sm font-bold text-[#002b5c] mb-2 block">To time zone</label>
              <select
                value={toZone}
                onChange={(e) => setToZone(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              >
                {ZONES.map((z) => (
                  <option key={z.value} value={z.value}>{z.label}</option>
                ))}
              </select>
            </div>
          </div>
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<Globe size={24} />}
            label="Converted time"
            value={`${result.resultTime} on ${result.resultDate}`}
            description={
              <>
                <strong>{time} on {date}</strong> in the origin zone is{" "}
                <strong>{result.resultTime} on {result.resultDate}</strong> in the destination
                zone ({result.resultLabel}).
              </>
            }
          />

          <div className="mt-6">
            <ToolPanel title="Time zone details">
              <ToolRow label="Origin zone offset" value={result.fromOffsetLabel} />
              <ToolRow label="Destination zone offset" value={result.toOffsetLabel} />
              <ToolRow label="Day change" value={result.resultLabel} bold />
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <ToolConsultCta context="scheduling calls with NRI clients or coordinating across time zones" />
        </div>
      </div>
    </section>
  );
}
