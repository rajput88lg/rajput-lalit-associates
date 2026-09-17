"use client";

import { useMemo, useState } from "react";
import { Tag, ShoppingBag, Percent } from "lucide-react";

import {
  calculateDiscountFromPercent,
  calculateDiscountFromFinalPrice,
  formatUSD,
} from "@/lib/freeToolsCalculations";
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

type Mode = "percent" | "finalPrice";

export default function DiscountCalculatorTool() {
  const [mode, setMode] = useState<Mode>("percent");

  const [originalPrice, setOriginalPrice] = useState(1000);
  const [discountPct, setDiscountPct] = useState(20);
  const [finalPriceInput, setFinalPriceInput] = useState(800);

  const result = useMemo(() => {
    if (mode === "percent") {
      return calculateDiscountFromPercent(originalPrice, discountPct);
    }
    return calculateDiscountFromFinalPrice(originalPrice, finalPriceInput);
  }, [mode, originalPrice, discountPct, finalPriceInput]);

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<Tag size={28} />}
          title="Discount Calculator"
          subtitle="Work out the sale price from a discount %, or the discount % from a sale price."
        >
          <ToolModeToggle
            options={[
              { value: "percent", label: "I know the discount %" },
              { value: "finalPrice", label: "I know the final price" },
            ]}
            value={mode}
            onChange={setMode}
          />

          <div className="grid sm:grid-cols-2 gap-6">
            <ToolNumberField label="Original Price" icon={<ShoppingBag size={16} />} value={originalPrice} onChange={setOriginalPrice} min={0} />
            {mode === "percent" ? (
              <ToolNumberField label="Discount" icon={<Percent size={16} />} value={discountPct} onChange={setDiscountPct} min={0} max={100} suffix="%" />
            ) : (
              <ToolNumberField label="Final (Sale) Price" icon={<ShoppingBag size={16} />} value={finalPriceInput} onChange={setFinalPriceInput} min={0} />
            )}
          </div>
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<Tag size={24} />}
            label="You Pay"
            value={formatUSD(result.finalPrice)}
            description={
              <>
                You save <strong>{formatUSD(result.discountAmount)}</strong> (
                <strong>{result.savingsPct}%</strong> off).
              </>
            }
          />

          <div className="mt-6">
            <ToolPanel title="Breakdown">
              <ToolRow label="Original price" value={formatUSD(originalPrice)} />
              <ToolRow label="Discount amount" value={formatUSD(result.discountAmount)} highlight />
              <ToolRow label="Discount percentage" value={`${result.savingsPct}%`} />
              <ToolRow label="Final price" value={formatUSD(result.finalPrice)} bold />
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <ToolConsultCta context="pricing, invoicing or margin calculations for your business" />
        </div>
      </div>
    </section>
  );
}
