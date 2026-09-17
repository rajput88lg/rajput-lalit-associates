"use client";

import { useMemo, useState } from "react";
import { Percent } from "lucide-react";

import { percentOf, whatPercentOf, percentChange, formatNumber } from "@/lib/freeToolsCalculations";
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

type Mode = "of" | "isWhatPercent" | "change";

export default function PercentageCalculatorTool() {
  const [mode, setMode] = useState<Mode>("of");

  const [percent, setPercent] = useState(20);
  const [base, setBase] = useState(500);

  const [part, setPart] = useState(50);
  const [whole, setWhole] = useState(200);

  const [oldValue, setOldValue] = useState(100);
  const [newValue, setNewValue] = useState(150);

  const ofResult = useMemo(() => percentOf(percent, base), [percent, base]);
  const isWhatPercentResult = useMemo(() => whatPercentOf(part, whole), [part, whole]);
  const changeResult = useMemo(() => percentChange(oldValue, newValue), [oldValue, newValue]);

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<Percent size={28} />}
          title="Percentage Calculator"
          subtitle="Three of the most common percentage calculations, in one place."
        >
          <ToolModeToggle
            options={[
              { value: "of", label: "X% of Y" },
              { value: "isWhatPercent", label: "X is what % of Y" },
              { value: "change", label: "% Increase / Decrease" },
            ]}
            value={mode}
            onChange={setMode}
          />

          {mode === "of" && (
            <div className="grid sm:grid-cols-2 gap-6">
              <ToolNumberField label="Percentage" icon={<Percent size={16} />} value={percent} onChange={setPercent} suffix="%" />
              <ToolNumberField label="Of this number" icon={<Percent size={16} />} value={base} onChange={setBase} />
            </div>
          )}

          {mode === "isWhatPercent" && (
            <div className="grid sm:grid-cols-2 gap-6">
              <ToolNumberField label="This number" icon={<Percent size={16} />} value={part} onChange={setPart} />
              <ToolNumberField label="Is what % of this number" icon={<Percent size={16} />} value={whole} onChange={setWhole} />
            </div>
          )}

          {mode === "change" && (
            <div className="grid sm:grid-cols-2 gap-6">
              <ToolNumberField label="Old value" icon={<Percent size={16} />} value={oldValue} onChange={setOldValue} />
              <ToolNumberField label="New value" icon={<Percent size={16} />} value={newValue} onChange={setNewValue} />
            </div>
          )}
        </ToolInputCard>

        <div className="mt-10">
          {mode === "of" && (
            <ToolResultHeadline
              icon={<Percent size={24} />}
              label="Result"
              value={formatNumber(ofResult)}
              description={
                <>
                  <strong>{percent}%</strong> of <strong>{formatNumber(base)}</strong> is{" "}
                  <strong>{formatNumber(ofResult)}</strong>.
                </>
              }
            />
          )}
          {mode === "isWhatPercent" && (
            <ToolResultHeadline
              icon={<Percent size={24} />}
              label="Result"
              value={`${formatNumber(isWhatPercentResult)}%`}
              description={
                <>
                  <strong>{formatNumber(part)}</strong> is{" "}
                  <strong>{formatNumber(isWhatPercentResult)}%</strong> of{" "}
                  <strong>{formatNumber(whole)}</strong>.
                </>
              }
            />
          )}
          {mode === "change" && (
            <ToolResultHeadline
              icon={<Percent size={24} />}
              label={changeResult >= 0 ? "Percentage Increase" : "Percentage Decrease"}
              value={`${formatNumber(Math.abs(changeResult))}%`}
              description={
                <>
                  Going from <strong>{formatNumber(oldValue)}</strong> to{" "}
                  <strong>{formatNumber(newValue)}</strong> is a{" "}
                  <strong>{formatNumber(Math.abs(changeResult))}% {changeResult >= 0 ? "increase" : "decrease"}</strong>.
                </>
              }
            />
          )}

          <div className="mt-6">
            <ToolPanel title="All three, at a glance">
              <ToolRow label={`${percent}% of ${formatNumber(base)}`} value={formatNumber(ofResult)} />
              <ToolRow label={`${formatNumber(part)} is what % of ${formatNumber(whole)}`} value={`${formatNumber(isWhatPercentResult)}%`} />
              <ToolRow label={`Change from ${formatNumber(oldValue)} to ${formatNumber(newValue)}`} value={`${changeResult >= 0 ? "+" : ""}${formatNumber(changeResult)}%`} />
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <ToolConsultCta context="tax, GST or business calculations" />
        </div>
      </div>
    </section>
  );
}
