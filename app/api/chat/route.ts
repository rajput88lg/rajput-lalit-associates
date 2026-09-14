import { NextResponse } from "next/server";
import {
  buildSystemPrompt,
  CHAT_MODEL,
  MAX_HISTORY_MESSAGES,
  MAX_MESSAGE_LENGTH,
  MAX_MESSAGES_PER_CONVERSATION,
  MAX_OUTPUT_TOKENS,
  RATE_LIMIT_MAX_REQUESTS,
  RATE_LIMIT_WINDOW_MS,
} from "@/lib/chatConfig";

// Route handlers run per-request; this uses plain `fetch` to call the
// Anthropic API directly, so no extra npm package/install is needed.

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

// ---- Very simple in-memory per-IP rate limiter -----------------------------
// Resets whenever the serverless function cold-starts / a new instance spins
// up, so this is a cost-control safety net, not a strong abuse-prevention
// system. Good enough for a small business site's traffic levels.
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );

  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  requestLog.set(ip, timestamps);

  // Prevent unbounded growth of the map over a long-running instance.
  if (requestLog.size > 5000) {
    requestLog.clear();
  }

  return false;
}

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: Request) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error("ANTHROPIC_API_KEY is not set");
      return NextResponse.json(
        {
          error:
            "Chat is temporarily unavailable. Please call " +
            "+91 93549 53603 or book a free consultation instead.",
        },
        { status: 500 }
      );
    }

    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          error:
            "Aapne bahut saare messages bhej diye hain thodi der mein. " +
            "Kripya kuch minute baad try karein, ya seedha +91 93549 53603 par call karein.",
        },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    const incoming = body?.messages;

    if (!Array.isArray(incoming) || incoming.length === 0) {
      return NextResponse.json(
        { error: "Invalid request." },
        { status: 400 }
      );
    }

    if (incoming.length > MAX_MESSAGES_PER_CONVERSATION) {
      return NextResponse.json(
        {
          error:
            "Ye conversation kaafi lambi ho gayi hai. Kripya free consultation book karein ya call karein — " +
            "+91 93549 53603.",
        },
        { status: 400 }
      );
    }

    // Sanitise + cap each message, then keep only the most recent N for context.
    const messages: ChatMessage[] = incoming
      .filter(
        (m: any) =>
          m &&
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string" &&
          m.content.trim().length > 0
      )
      .map((m: any) => ({
        role: m.role,
        content: String(m.content).slice(0, MAX_MESSAGE_LENGTH),
      }))
      .slice(-MAX_HISTORY_MESSAGES);

    if (messages.length === 0 || messages[messages.length - 1].role !== "user") {
      return NextResponse.json(
        { error: "Invalid request." },
        { status: 400 }
      );
    }

    const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: CHAT_MODEL,
        max_tokens: MAX_OUTPUT_TOKENS,
        system: buildSystemPrompt(),
        messages,
      }),
    });

    if (!anthropicRes.ok) {
      const errText = await anthropicRes.text().catch(() => "");
      console.error("Anthropic API error:", anthropicRes.status, errText);
      return NextResponse.json(
        {
          error:
            "Abhi jawab dene mein dikkat aa rahi hai. Kripya thodi der baad try karein ya " +
            "+91 93549 53603 par call karein.",
        },
        { status: 502 }
      );
    }

    const data = await anthropicRes.json();
    const reply: string =
      data?.content
        ?.filter((block: any) => block.type === "text")
        ?.map((block: any) => block.text)
        ?.join("\n")
        ?.trim() ||
      "Maaf kijiye, main abhi jawab nahi de paayi. Kripya call karein — +91 93549 53603.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        error:
          "Kuch galat ho gaya. Kripya thodi der baad try karein ya +91 93549 53603 par call karein.",
      },
      { status: 500 }
    );
  }
}
