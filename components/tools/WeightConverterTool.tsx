"use client";

import { useMemo, useState } from "react";
import { Weight, ArrowLeftRight } from "lucide-react";

import {
  convertWeight,
  formatNumber,
  WEIGHT_UNIT_LABELS,
  type WeightUnit,
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

const ALL_UNITS = Object.keys(WEIGHT_UNIT_LABELS) as WeightUnit[];

export default function WeightConverterTool() {
  const [value, setValue] = useState(1);
  const [fromUnit, setFromUnit] = useState<WeightUnit>("kg");
  const [toUnit, setToUnit] = useState<WeightUnit>("lb");

  const result = useMemo(() => convertWeight(value, fromUnit, toUnit), [value, fromUnit, toUnit]);

  const allConversions = useMemo(
    () => ALL_UNITS.filter((u) => u !== fromUnit).map((u) => ({ unit: u, value: convertWeight(value, fromUnit, u) })),
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
          icon={<Weight size={28} />}
          title="Weight / Mass Converter"
          subtitle="Convert between kilograms, pounds, ounces, stone and more."
        >
          <ToolNumberField label="Value" icon={<Weight size={16} />} value={value} onChange={setValue} />

          <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-4 items-end">
            <div>
              <label className="text-sm font-bold text-[#002b5c] mb-2 block">From</label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value as WeightUnit)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              >
                {ALL_UNITS.map((u) => (
                  <option key={u} value={u}>{WEIGHT_UNIT_LABELS[u]}</option>
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
                onChange={(e) => setToUnit(e.target.value as WeightUnit)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              >
                {ALL_UNITS.map((u) => (
                  <option key={u} value={u}>{WEIGHT_UNIT_LABELS[u]}</option>
                ))}
              </select>
            </div>
          </div>
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<Weight size={24} />}
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
                <ToolRow key={c.unit} label={WEIGHT_UNIT_LABELS[c.unit]} value={formatNumber(c.value)} />
              ))}
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <ToolConsultCta context="asset valuation, import/export or inventory documentation" />
        </div>
      </div>
    </section>
  );
}
