"use client";

import { useMemo, useState } from "react";
import { Target, Coins, Package } from "lucide-react";

import { calculateBreakEven, formatUSD, formatNumber } from "@/lib/freeToolsCalculations";
import {
  ToolInputCard,
  ToolResultHeadline,
  ToolPanel,
  ToolRow,
  ToolNumberField,
  ToolConsultCta,
  ToolPrintButton,
} from "./ToolShell";

export default function BreakEvenCalculatorTool() {
  const [fixedCosts, setFixedCosts] = useState(10000);
  const [variableCost, setVariableCost] = useState(20);
  const [pricePerUnit, setPricePerUnit] = useState(50);

  const result = useMemo(
    () => calculateBreakEven(fixedCosts, variableCost, pricePerUnit),
    [fixedCosts, variableCost, pricePerUnit]
  );

  const impossible = result.contributionMarginPerUnit <= 0;

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<Target size={28} />}
          title="Break-Even Point Calculator"
          subtitle="Find how many units you need to sell to cover your fixed costs."
        >
          <div className="grid sm:grid-cols-3 gap-6">
            <ToolNumberField label="Fixed Costs (monthly)" icon={<Coins size={16} />} value={fixedCosts} onChange={setFixedCosts} min={0} />
            <ToolNumberField label="Variable Cost per Unit" icon={<Package size={16} />} value={variableCost} onChange={setVariableCost} min={0} />
            <ToolNumberField label="Selling Price per Unit" icon={<Coins size={16} />} value={pricePerUnit} onChange={setPricePerUnit} min={0} />
          </div>
        </ToolInputCard>

        <div className="mt-10">
          {impossible ? (
            <ToolResultHeadline
              icon={<Target size={24} />}
              label="Break-Even Point"
              value="Not possible"
              description="Your selling price must be higher than your variable cost per unit for break-even to be possible."
            />
          ) : (
            <ToolResultHeadline
              icon={<Target size={24} />}
              label="Units to Break Even"
              value={formatNumber(result.unitsToBreakEven)}
              description={
                <>
                  At <strong>{formatUSD(pricePerUnit)}</strong> per unit, you need{" "}
                  <strong>{formatNumber(result.unitsToBreakEven)}</strong> units in sales (
                  <strong>{formatUSD(result.revenueAtBreakEven)}</strong> revenue) to cover your
                  fixed costs.
                </>
              }
            />
          )}

          <div className="mt-6">
            <ToolPanel title="Breakdown">
              <ToolRow label="Fixed costs" value={formatUSD(fixedCosts)} />
              <ToolRow label="Price per unit" value={formatUSD(pricePerUnit)} />
              <ToolRow label="Variable cost per unit" value={formatUSD(variableCost)} />
              <ToolRow label="Contribution margin per unit" value={formatUSD(result.contributionMarginPerUnit)} highlight />
              <ToolRow label="Contribution margin %" value={`${result.contributionMarginPct}%`} />
              <ToolRow label="Break-even units" value={formatNumber(result.unitsToBreakEven)} bold />
              <ToolRow label="Break-even revenue" value={formatUSD(result.revenueAtBreakEven)} bold />
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <p className="mt-6 text-xs text-gray-500 leading-6">
            <strong>Note:</strong> this is a simplified, single-product
            break-even model. Businesses with multiple products, seasonal
            costs or step-fixed costs should treat this as a starting
            estimate, not a full business plan.
          </p>

          <ToolConsultCta context="business planning, MSME registration and financial statements for loans" />
        </div>
      </div>
    </section>
  );
}
