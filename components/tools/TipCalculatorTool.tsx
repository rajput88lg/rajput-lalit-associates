"use client";

import { useMemo, useState } from "react";
import { Utensils, Percent, Users } from "lucide-react";

import { calculateTip, formatUSD } from "@/lib/freeToolsCalculations";
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

const TIP_PRESETS: { value: number; label: string }[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 18, label: "18%" },
  { value: 20, label: "20%" },
];

export default function TipCalculatorTool() {
  const [billAmount, setBillAmount] = useState(100);
  const [tipPct, setTipPct] = useState(18);
  const [people, setPeople] = useState(2);

  const result = useMemo(() => calculateTip(billAmount, tipPct, people), [billAmount, tipPct, people]);

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<Utensils size={28} />}
          title="Tip Calculator"
          subtitle="Work out the tip, total bill and per-person split in seconds."
        >
          <ToolNumberField label="Bill Amount" icon={<Utensils size={16} />} value={billAmount} onChange={setBillAmount} min={0} />

          <div>
            <label className="text-sm font-bold text-[#002b5c] mb-3 block">Tip Percentage</label>
            <ToolModeToggle options={TIP_PRESETS} value={tipPct} onChange={setTipPct} />
            <div className="mt-3">
              <ToolNumberField label="Or enter a custom tip %" icon={<Percent size={16} />} value={tipPct} onChange={setTipPct} min={0} max={100} suffix="%" />
            </div>
          </div>

          <ToolNumberField label="Number of People Splitting" icon={<Users size={16} />} value={people} onChange={setPeople} min={1} max={50} />
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<Utensils size={24} />}
            label="Total Bill (with tip)"
            value={formatUSD(result.totalAmount)}
            description={
              <>
                Tip amount: <strong>{formatUSD(result.tipAmount)}</strong> — each person pays{" "}
                <strong>{formatUSD(result.perPersonTotal)}</strong>.
              </>
            }
          />

          <div className="mt-6">
            <ToolPanel title="Breakdown">
              <ToolRow label="Bill amount" value={formatUSD(billAmount)} />
              <ToolRow label="Tip amount" value={formatUSD(result.tipAmount)} highlight />
              <ToolRow label="Total (bill + tip)" value={formatUSD(result.totalAmount)} bold />
              <ToolRow label="Per person — tip only" value={formatUSD(result.perPersonTip)} />
              <ToolRow label="Per person — total" value={formatUSD(result.perPersonTotal)} bold />
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <ToolConsultCta context="running the numbers for your restaurant, cafe or hospitality business" />
        </div>
      </div>
    </section>
  );
}
