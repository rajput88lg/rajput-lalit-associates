import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST() {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = await razorpay.orders.create({
      amount: 99900,
      currency: "INR",
      receipt: `consult_${Date.now()}`,
      notes: {
        purpose: "Paid Consultation Appointment",
      },
    });

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Razorpay order error:", error);

    // Yahan humne error ki details add kar di hain taaki screen par pata chal sake
    return NextResponse.json(
      {
        success: false,
        message: "Unable to create payment order",
        exact_error: error // YEH LINE ADD KI HAI
      },
      { status: 500 }
    );
  }
}