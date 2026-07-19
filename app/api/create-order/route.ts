import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST() {
  try {
    // Environment Variables Check
    if (
      !process.env.RAZORPAY_KEY_ID ||
      !process.env.RAZORPAY_KEY_SECRET
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Razorpay environment variables are missing.",
        },
        { status: 500 }
      );
    }

    // Razorpay Instance
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // Create Order
    const order = await razorpay.orders.create({
      amount: 99900, // ₹999.00
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
  } catch (error: any) {
    console.error("Razorpay Order Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to create payment order.",
        error: error?.message || "Unknown Error",
      },
      { status: 500 }
    );
  }
}