"use client";

import { useMemo, useState } from "react";
import { Thermometer, ArrowLeftRight } from "lucide-react";

import { convertTemperature, type TempUnit } from "@/lib/freeToolsCalculations";
import {
  ToolInputCard,
  ToolResultHeadline,
  ToolPanel,
  ToolRow,
  ToolNumberField,
  ToolConsultCta,
  ToolPrintButton,
} from "./ToolShell";

const UNIT_LABELS: Record<TempUnit, string> = {
  C: "Celsius (°C)",
  F: "Fahrenheit (°F)",
  K: "Kelvin (K)",
};

const UNIT_SYMBOL: Record<TempUnit, string> = { C: "°C", F: "°F", K: "K" };

export default function TemperatureConverterTool() {
  const [value, setValue] = useState(37);
  const [fromUnit, setFromUnit] = useState<TempUnit>("C");
  const [toUnit, setToUnit] = useState<TempUnit>("F");

  const result = useMemo(() => convertTemperature(value, fromUnit, toUnit), [value, fromUnit, toUnit]);

  const allConversions = useMemo(() => {
    return (Object.keys(UNIT_LABELS) as TempUnit[])
      .filter((u) => u !== fromUnit)
      .map((u) => ({ unit: u, value: convertTemperature(value, fromUnit, u) }));
  }, [value, fromUnit]);

  const swap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<Thermometer size={28} />}
          title="Temperature Converter"
          subtitle="Convert between Celsius, Fahrenheit and Kelvin instantly."
        >
          <ToolNumberField label="Temperature" icon={<Thermometer size={16} />} value={value} onChange={setValue} />

          <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-4 items-end">
            <div>
              <label className="text-sm font-bold text-[#002b5c] mb-2 block" htmlFor="from-temp">From</label>
              <select
                id="from-temp" value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value as TempUnit)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              >
                {(Object.keys(UNIT_LABELS) as TempUnit[]).map((u) => (
                  <option key={u} value={u}>{UNIT_LABELS[u]}</option>
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
              <label className="text-sm font-bold text-[#002b5c] mb-2 block" htmlFor="to-temp">To</label>
              <select
                id="to-temp" value={toUnit}
                onChange={(e) => setToUnit(e.target.value as TempUnit)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#d99a2b]"
              >
                {(Object.keys(UNIT_LABELS) as TempUnit[]).map((u) => (
                  <option key={u} value={u}>{UNIT_LABELS[u]}</option>
                ))}
              </select>
            </div>
          </div>
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<Thermometer size={24} />}
            label="Result"
            value={`${result}${UNIT_SYMBOL[toUnit]}`}
            description={
              <>
                <strong>{value}{UNIT_SYMBOL[fromUnit]}</strong> = <strong>{result}{UNIT_SYMBOL[toUnit]}</strong>
              </>
            }
          />

          <div className="mt-6">
            <ToolPanel title={`${value}${UNIT_SYMBOL[fromUnit]} in other units`}>
              {allConversions.map((c) => (
                <ToolRow key={c.unit} label={UNIT_LABELS[c.unit]} value={`${c.value}${UNIT_SYMBOL[c.unit]}`} />
              ))}
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <ToolConsultCta context="tax and compliance matters" />
        </div>
      </div>
    </section>
  );
}
