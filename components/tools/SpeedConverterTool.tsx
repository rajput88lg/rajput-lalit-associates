"use client";

import { useMemo, useState } from "react";
import { Gauge, ArrowLeftRight } from "lucide-react";

import {
  convertSpeed,
  formatNumber,
  SPEED_UNIT_LABELS,
  type SpeedUnit,
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

const ALL_UNITS = Object.keys(SPEED_UNIT_LABELS) as SpeedUnit[];

export default function SpeedConverterTool() {
  const [value, setValue] = useState(60);
  const [fromUnit, setFromUnit] = useState<SpeedUnit>("kmh");
  const [toUnit, setToUnit] = useState<SpeedUnit>("mph");

  const result = useMemo(() => convertSpeed(value, fromUnit, toUnit), [value, fromUnit, toUnit]);

  const allConversions = useMemo(
    () => ALL_UNITS.filter((u) => u !== fromUnit).map((u) => ({ unit: u, value: convertSpeed(value, fromUnit, u) })),
    [value, fromUnit]
  );

  const swap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<Gauge size={28} />}
          title="Speed Converter"
          subtitle="Convert between km/h, mph, m/s and knots instantly."
        >
          <ToolNumberField label="Value" icon={<Gauge size={16} />} value={value} onChange={setValue} />

          <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-4 items-end">
            <div>
              <label className="text-sm font-bold text-[#002b5c] mb-2 block" htmlFor="from-speed">From</label>
              <select
                id="from-speed" value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value as SpeedUnit)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              >
                {ALL_UNITS.map((u) => (
                  <option key={u} value={u}>{SPEED_UNIT_LABELS[u]}</option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={swap}
              aria-label="Swap units"
              className="justify-self-center bg-[#002b5c] hover:bg-[#06477f] text-white w-11 h-11 rounded-full flex items-center justify-center transition mb-1"
            >
              <ArrowLeftRight size={18} />
            </button>

            <div>
              <label className="text-sm font-bold text-[#002b5c] mb-2 block" htmlFor="to-speed">To</label>
              <select
                id="to-speed" value={toUnit}
                onChange={(e) => setToUnit(e.target.value as SpeedUnit)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              >
                {ALL_UNITS.map((u) => (
                  <option key={u} value={u}>{SPEED_UNIT_LABELS[u]}</option>
                ))}
              </select>
            </div>
          </div>
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<Gauge size={24} />}
            label="Result"
            value={`${formatNumber(result)} ${toUnit}`}
            description={
              <>
                <strong>{formatNumber(value)} {fromUnit}</strong> = <strong>{formatNumber(result)} {toUnit}</strong>
              </>
            }
          />

          <div className="mt-6">
            <ToolPanel title={`${formatNumber(value)} ${fromUnit} in other units`}>
              {allConversions.map((c) => (
                <ToolRow key={c.unit} label={SPEED_UNIT_LABELS[c.unit]} value={formatNumber(c.value)} />
              ))}
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <ToolConsultCta context="business travel, logistics or transport-related expense records" />
        </div>
      </div>
    </section>
  );
}
