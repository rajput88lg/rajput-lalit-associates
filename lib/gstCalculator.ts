/**
 * GST Calculator — Add GST / Remove GST
 * =======================================
 * Standard GST slabs in India: 5%, 12%, 18%, 28% (a custom rate is also
 * allowed for less common cases like 0.25%/3% on precious stones/metals).
 */

export type GstMode = "add" | "remove";

export type GstInput = {
  amount: number;
  ratePct: number;
  mode: GstMode;
};

export type GstResult = {
  baseAmount: number;
  gstAmount: number;
  totalAmount: number;
  cgst: number;
  sgst: number;
};

export function calculateGst(input: GstInput): GstResult {
  const { amount, ratePct, mode } = input;
  const rate = ratePct / 100;

  let baseAmount: number;
  let gstAmount: number;
  let totalAmount: number;

  if (mode === "add") {
    baseAmount = amount;
    gstAmount = amount * rate;
    totalAmount = amount + gstAmount;
  } else {
    totalAmount = amount;
    baseAmount = amount / (1 + rate);
    gstAmount = amount - baseAmount;
  }

  return {
    baseAmount: Math.round(baseAmount * 100) / 100,
    gstAmount: Math.round(gstAmount * 100) / 100,
    totalAmount: Math.round(totalAmount * 100) / 100,
    cgst: Math.round((gstAmount / 2) * 100) / 100,
    sgst: Math.round((gstAmount / 2) * 100) / 100,
  };
}

export function formatINR(value: number): string {
  return "₹" + value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
