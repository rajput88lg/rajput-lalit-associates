"use client";

import { useMemo, useState } from "react";
import { HeartPulse, Ruler, Weight } from "lucide-react";

import { calculateBmi, lbToKg, ftInToCm, type BmiCategory } from "@/lib/freeToolsCalculations";
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

type UnitSystem = "metric" | "imperial";

const CATEGORY_COLOR: Record<BmiCategory, string> = {
  Underweight: "text-blue-600",
  Normal: "text-green-600",
  Overweight: "text-amber-600",
  Obese: "text-red-600",
};

export default function BmiCalculatorTool() {
  const [unit, setUnit] = useState<UnitSystem>("metric");

  const [weightKg, setWeightKg] = useState(70);
  const [heightCm, setHeightCm] = useState(170);

  const [weightLb, setWeightLb] = useState(154);
  const [heightFt, setHeightFt] = useState(5);
  const [heightIn, setHeightIn] = useState(7);

  const result = useMemo(() => {
    if (unit === "metric") {
      return calculateBmi(weightKg, heightCm);
    }
    const kg = lbToKg(weightLb);
    const cm = ftInToCm(heightFt, heightIn);
    return calculateBmi(kg, cm);
  }, [unit, weightKg, heightCm, weightLb, heightFt, heightIn]);

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20" id="calculator">
      <div className="max-w-6xl mx-auto px-6">
        <ToolInputCard
          icon={<HeartPulse size={28} />}
          title="BMI Calculator"
          subtitle="Body Mass Index — a quick general screening measure using the standard WHO formula."
        >
          <ToolModeToggle
            options={[
              { value: "metric", label: "Metric (kg / cm)" },
              { value: "imperial", label: "Imperial (lb / ft-in)" },
            ]}
            value={unit}
            onChange={setUnit}
          />

          {unit === "metric" ? (
            <div className="grid sm:grid-cols-2 gap-6">
              <ToolNumberField label="Weight" icon={<Weight size={16} />} value={weightKg} onChange={setWeightKg} min={1} suffix="kg" />
              <ToolNumberField label="Height" icon={<Ruler size={16} />} value={heightCm} onChange={setHeightCm} min={1} suffix="cm" />
            </div>
          ) : (
            <div className="grid sm:grid-cols-3 gap-6">
              <ToolNumberField label="Weight" icon={<Weight size={16} />} value={weightLb} onChange={setWeightLb} min={1} suffix="lb" />
              <ToolNumberField label="Height (feet)" icon={<Ruler size={16} />} value={heightFt} onChange={setHeightFt} min={0} suffix="ft" />
              <ToolNumberField label="Height (inches)" icon={<Ruler size={16} />} value={heightIn} onChange={setHeightIn} min={0} max={11} suffix="in" />
            </div>
          )}
        </ToolInputCard>

        <div className="mt-10">
          <ToolResultHeadline
            icon={<HeartPulse size={24} />}
            label="Your BMI"
            value={`${result.bmi}`}
            description={
              <>
                Category:{" "}
                <strong className={CATEGORY_COLOR[result.category]}>{result.category}</strong>
              </>
            }
          />

          <div className="mt-6">
            <ToolPanel title="WHO BMI Categories (Adults)">
              <ToolRow label="Underweight" value="Below 18.5" highlight={result.category === "Underweight"} />
              <ToolRow label="Normal weight" value="18.5 – 24.9" highlight={result.category === "Normal"} />
              <ToolRow label="Overweight" value="25.0 – 29.9" highlight={result.category === "Overweight"} />
              <ToolRow label="Obese" value="30.0 and above" highlight={result.category === "Obese"} />
            </ToolPanel>
          </div>

          <div className="mt-6 print:hidden">
            <ToolPrintButton />
          </div>

          <p className="mt-6 text-xs text-gray-500 leading-6">
            <strong>Disclaimer:</strong> BMI is a general screening tool based
            on height and weight only — it does not account for muscle mass,
            bone density, age, sex or overall body composition, and is not a
            medical diagnosis. Consult a qualified healthcare professional for
            personal health advice.
          </p>

          <ToolConsultCta context="planning your finances alongside your health goals" />
        </div>
      </div>
    </section>
  );
}
