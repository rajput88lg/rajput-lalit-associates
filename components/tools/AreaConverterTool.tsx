"use client";

import { useMemo, useState } from "react";
import { LandPlot, ArrowLeftRight } from "lucide-react";

import {
  convertArea,
  formatNumber,
  AREA_UNIT_LABELS,
  type AreaUnit,
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

const ALL_UNITS = Object.keys(AREA_UNIT_LABELS) as AreaUnit[];

export default function AreaConverterTool() {
  const [value, setValue] = useState(1);
  const [fromUnit, setFromUnit] = useState<AreaUnit>("sqft");
  const [toUnit, setToUnit] = useState<AreaUnit>("sqm");

  const result = useMemo(() => convertArea(value, fromUnit, toUnit), [value, fromUnit, toUnit]);

  const allConversions = useMemo(
    () => ALL_UNITS.filter((u) => u !== fromUnit).map((u) => ({ unit: u, value: convertArea(value, fromUnit, u) })),
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
          icon={<LandPlot size={28} />}
          title="Area Converter"
          subtitle="Convert between square feet, square metres, acres, hectares and more — useful for property and land measurements."
        >
          <ToolNumberField label="Value" icon={<LandPlot size={16} />} value={value} onChange={setValue} />

          <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-4 items-end">
            <div>
              <label className="text-sm font-bold text-[#002b5c] mb-2 block" htmlFor="from-area">From</label>
              <select
                id="from-area" value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value as AreaUnit)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              >
                {ALL_UNITS.map((u) => (
                  <option key={u} value={u}>{AREA_UNIT_LABELS[u]}</option>
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
              <label className="text-sm font-bold text-[#002b5c] mb-2 block" htmlFor="to-area">To</label>
              <select
                id="to-area" value={toUnit}
                onChange={(e) => setToUnit(e.target.value as AreaUnit)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              >
                {ALL_UNITS.map((u) => (
                  <option key={u} value={u}>{AREA_UNIT_LABELS[u]}</option>
                ))}
              </select>
            </div>
          </div>
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<LandPlot size={24} />}
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
                <ToolRow key={c.unit} label={AREA_UNIT_LABELS[c.unit]} value={formatNumber(c.value)} />
              ))}
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <ToolConsultCta context="property registration, valuation or capital gains on land/property sale" />
        </div>
      </div>
    </section>
  );
}
