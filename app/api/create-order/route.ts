import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { getPaidService } from "@/lib/paidServices";
import { encodeTaxInput, sanitizeTaxInput } from "@/lib/taxReport";
import { parseCategories } from "@/lib/reminderSchedule";
import { encodeNriInput, sanitizeNriInput } from "@/lib/nriHealthCheck";

// Customer details go into the Razorpay order "notes", so every booking is
// visible in the Razorpay dashboard even if the confirmation email fails.
// Razorpay allows max 15 notes of 256 chars each — keep them short.
function note(value: unknown, max = 200): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  try {
    // Check Environment Variables
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

    const body = await request.json().catch(() => ({}));

    // Price comes from the server-side catalog, never from the browser.
    const service = getPaidService(body?.service);
    if (!service || service.retired) {
      return NextResponse.json(
        { success: false, message: "Unknown service." },
        { status: 400 }
      );
    }

    const name = note(body?.name, 100);
    const mobile = note(body?.mobile, 20);
    if (!name || !mobile) {
      return NextResponse.json(
        { success: false, message: "Name and mobile are required." },
        { status: 400 }
      );
    }

    const email = note(body?.email, 100);
    const extraNotes: Record<string, string> = {};

    // Reports, downloads and reminders are delivered by email — email is a must.
    if (service.kind !== "booking") {
      if (!/^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/.test(email)) {
        return NextResponse.json(
          { success: false, message: "A valid email is required." },
          { status: 400 }
        );
      }
    }

    // Tax report: the inputs ride along in the order notes, so the report
    // can be rebuilt on the server after payment (and again from the link).
    if (service.kind === "report") {
      const input = sanitizeTaxInput(body?.inputs);
      if (!input) {
        return NextResponse.json(
          { success: false, message: "Please enter your salary details." },
          { status: 400 }
        );
      }
      extraNotes.inputs = encodeTaxInput(input);
    }

    if (service.kind === "nri-report") {
      const input = sanitizeNriInput(body?.inputs);
      if (!input) {
        return NextResponse.json(
          { success: false, message: "Please fill in your India stay and income details." },
          { status: 400 }
        );
      }
      extraNotes.inputs = encodeNriInput(input);
    }

    if (service.kind === "subscription") {
      extraNotes.categories = parseCategories(body?.categories).join("|");
    }

    // Razorpay Instance
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // Create Order
    const order = await razorpay.orders.create({
      amount: service.amount * 100, // paise (or cents for USD)
      currency: service.currency ?? "INR",
      receipt: `${service.key}_${Date.now()}`,
      notes: {
        purpose: service.name,
        name,
        mobile,
        email,
        service: service.key,
        topic: note(body?.topic, 100),
        preferred_slot: note(body?.slot, 100),
        query: note(body?.query, 250),
        ...extraNotes,
      },
    });

    return NextResponse.json({
      success: true,
      order,
      // Public key id (not the secret) — needed by the checkout popup.
      keyId: process.env.RAZORPAY_KEY_ID,
    });

  } catch (err) {
    const error = err as {
      statusCode?: number;
      description?: string;
      message?: string;
      error?: { code?: string; description?: string };
    };
    console.error("========== RAZORPAY ERROR ==========");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to create payment order.",
        error: {
          statusCode: error?.statusCode || null,
          code: error?.error?.code || null,
          description:
            error?.error?.description ||
            error?.description ||
            error?.message ||
            "Unknown Error",
        },
      },
      { status: 500 }
    );
  }
}
