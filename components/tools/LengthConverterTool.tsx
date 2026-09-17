"use client";

import { useMemo, useState } from "react";
import { Ruler, ArrowLeftRight } from "lucide-react";

import {
  convertLength,
  formatNumber,
  LENGTH_UNIT_LABELS,
  type LengthUnit,
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

const ALL_UNITS = Object.keys(LENGTH_UNIT_LABELS) as LengthUnit[];
const COMMON_TARGETS: LengthUnit[] = ["mm", "cm", "m", "km", "in", "ft", "yd", "mi"];

export default function LengthConverterTool() {
  const [value, setValue] = useState(1);
  const [fromUnit, setFromUnit] = useState<LengthUnit>("m");
  const [toUnit, setToUnit] = useState<LengthUnit>("ft");

  const result = useMemo(() => convertLength(value, fromUnit, toUnit), [value, fromUnit, toUnit]);

  const allConversions = useMemo(
    () => COMMON_TARGETS.filter((u) => u !== fromUnit).map((u) => ({ unit: u, value: convertLength(value, fromUnit, u) })),
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
          icon={<Ruler size={28} />}
          title="Length Converter"
          subtitle="Convert between metric and imperial length units instantly."
        >
          <ToolNumberField label="Value" icon={<Ruler size={16} />} value={value} onChange={setValue} />

          <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-4 items-end">
            <div>
              <label className="text-sm font-bold text-[#002b5c] mb-2 block">From</label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value as LengthUnit)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              >
                {ALL_UNITS.map((u) => (
                  <option key={u} value={u}>{LENGTH_UNIT_LABELS[u]}</option>
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
              <label className="text-sm font-bold text-[#002b5c] mb-2 block">To</label>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value as LengthUnit)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              >
                {ALL_UNITS.map((u) => (
                  <option key={u} value={u}>{LENGTH_UNIT_LABELS[u]}</option>
                ))}
              </select>
            </div>
          </div>
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<Ruler size={24} />}
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
                <ToolRow key={c.unit} label={LENGTH_UNIT_LABELS[c.unit]} value={formatNumber(c.value)} />
              ))}
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <ToolConsultCta context="property area/measurement questions for registration or valuation" />
        </div>
      </div>
    </section>
  );
}
