"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  MessageCircle,
  X,
  Send,
  Loader2,
  Phone,
  Sparkles,
  User,
  Mail,
  CheckCircle2,
} from "lucide-react";

import { FIRM, MAX_MESSAGES_PER_CONVERSATION } from "@/lib/chatConfig";
import { tagUrgency } from "@/lib/leadTriage";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  isError?: boolean;
};

const GREETING: ChatMessage = {
  role: "assistant",
  content:
    "Namaste! Main Rajput Lalit & Associates ki AI Assistant hoon. GST, " +
    "Income Tax, Accounting, TDS ya Business Registration se juda koi bhi " +
    "sawaal pooch sakte hain. Exact fees aur aapke case ke liye humari " +
    "team se FREE consultation book karna sabse best rahega.",
};

const QUICK_REPLIES = [
  "GST registration kaise karein?",
  "ITR filing ki last date kya hai?",
  "Company registration mein kya lagta hai?",
  "Free consultation book karni hai",
];

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);

  const [leadName, setLeadName] = useState("");
  const [leadMobile, setLeadMobile] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadSending, setLeadSending] = useState(false);
  const [leadSent, setLeadSent] = useState(false);
  const [leadError, setLeadError] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);
  const userMessageCount = messages.filter((m) => m.role === "user").length;
  const limitReached = userMessageCount >= MAX_MESSAGES_PER_CONVERSATION;

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading, showLeadForm]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading || limitReached) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages
            .filter((m) => !m.isError)
            .map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              data?.error ||
              "Kuch galat ho gaya. Kripya thodi der baad try karein ya call karein.",
            isError: true,
          },
        ]);
        return;
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply as string },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Network mein dikkat aa rahi hai. Kripya apna internet check karein ya seedha " +
            `${FIRM.phone} par call karein.`,
          isError: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  async function handleLeadSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLeadSending(true);
    setLeadError("");

    const transcript = messages
      .map((m) => `${m.role === "user" ? "Visitor" : "AI"}: ${m.content}`)
      .join("\n");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_omi5m0r",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_ni2x60v",
        {
          name: leadName,
          mobile: leadMobile,
          email: leadEmail,
          service: "AI Chatbot Enquiry",
          payment_id: "AI Chat Lead (Free)",
          message: tagUrgency(
            `New lead from the website AI chatbot.\n\nName: ${leadName}\nMobile: ${leadMobile}\nEmail: ${leadEmail}\n\n--- Chat so far ---\n${transcript}`
          ),
        },
        "aslDxgzgmR4GWDM2D"
      );
      setLeadSent(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setLeadError(
        "Aapki details save nahi ho payi — kripya seedha call karein: " + FIRM.phone
      );
    } finally {
      setLeadSending(false);
    }
  }

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with our AI assistant"}
        className="fixed bottom-20 right-5 sm:bottom-5 z-[60] w-16 h-16 rounded-full bg-[#002b5c] hover:bg-[#06477f] text-white shadow-2xl flex items-center justify-center transition"
      >
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#d99a2b]/40 animate-ping" />
        )}
        {open ? (
          <X size={26} />
        ) : (
          <MessageCircle size={26} className="relative" />
        )}
      </button>

      {/* CHAT PANEL */}
      {open && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-5 z-[60] w-full h-full sm:w-[380px] sm:h-[560px] sm:max-h-[80vh] bg-white sm:rounded-3xl sm:border sm:border-gray-200 shadow-2xl flex flex-col overflow-hidden">
          {/* HEADER */}
          <div className="bg-gradient-to-r from-[#001d40] via-[#002b5c] to-[#06477f] text-white px-5 py-4 flex items-start justify-between gap-3 flex-shrink-0">
            <div className="flex items-start gap-3 min-w-0">
              <div className="w-10 h-10 rounded-full bg-[#d99a2b] flex items-center justify-center flex-shrink-0">
                <Sparkles size={20} />
              </div>
              <div className="min-w-0">
                <p className="font-extrabold leading-tight truncate">
                  AI Assistant
                </p>
                <p className="text-xs text-blue-100 truncate">
                  {FIRM.name}
                </p>
                <p className="text-[11px] text-[#f0b84b] font-semibold truncate">
                  Typically replies within a few minutes
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href={`tel:${FIRM.phone.replace(/\s+/g, "")}`}
                aria-label="Call us"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
              >
                <Phone size={16} />
              </a>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          <p className="px-5 py-2 text-[11px] leading-snug text-gray-500 bg-[#f7f9fc] border-b border-gray-200 flex-shrink-0">
            AI-generated general guidance — not a substitute for professional
            advice. Book a free consultation for your specific case.
          </p>

          {/* MESSAGES */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-white"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-[#002b5c] text-white rounded-br-sm"
                      : m.isError
                      ? "bg-red-50 text-red-700 border border-red-200 rounded-bl-sm"
                      : "bg-[#f7f9fc] text-gray-800 border border-gray-200 rounded-bl-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs font-semibold text-[#002b5c] bg-white border border-[#d99a2b]/50 hover:bg-[#fff8ec] rounded-full px-3 py-1.5 transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#f7f9fc] border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
                  <Loader2 size={14} className="animate-spin text-[#d99a2b]" />
                  <span className="text-xs text-gray-500">
                    Type ho raha hai...
                  </span>
                </div>
              </div>
            )}

            {limitReached && !showLeadForm && (
              <div className="text-center text-xs text-gray-500 pt-1">
                Ye chat kaafi lambi ho gayi hai — aage ki madad ke liye niche
                se free consultation book karein.
              </div>
            )}

            {/* LEAD CAPTURE */}
            {showLeadForm && (
              <div className="bg-[#f7f9fc] border border-gray-200 rounded-2xl p-4">
                {leadSent ? (
                  <div className="text-center py-2">
                    <CheckCircle2
                      size={28}
                      className="mx-auto text-green-600 mb-2"
                    />
                    <p className="text-sm font-bold text-[#002b5c]">
                      Dhanyavaad, {leadName || "aapki"} details mil gayi!
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Hamari team jald hi aapko call karegi.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-2">
                    <p className="text-xs font-bold text-[#002b5c] mb-1">
                      Apni details chhodein, humari team call karegi:
                    </p>
                    <div className="relative">
                      <User
                        size={15}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#d99a2b]"
                      />
                      <input
                        required
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        placeholder="Naam"
                        className="w-full text-sm border border-gray-300 rounded-lg py-2 pl-9 pr-3 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/20 focus:border-[#d99a2b]"
                      />
                    </div>
                    <div className="relative">
                      <Phone
                        size={15}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#d99a2b]"
                      />
                      <input
                        required
                        type="tel"
                        value={leadMobile}
                        onChange={(e) => setLeadMobile(e.target.value)}
                        placeholder="Mobile number"
                        className="w-full text-sm border border-gray-300 rounded-lg py-2 pl-9 pr-3 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/20 focus:border-[#d99a2b]"
                      />
                    </div>
                    <div className="relative">
                      <Mail
                        size={15}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#d99a2b]"
                      />
                      <input
                        type="email"
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                        placeholder="Email (optional)"
                        className="w-full text-sm border border-gray-300 rounded-lg py-2 pl-9 pr-3 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/20 focus:border-[#d99a2b]"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={leadSending}
                      className="w-full flex items-center justify-center gap-2 bg-[#002b5c] hover:bg-[#06477f] text-white py-2.5 rounded-lg text-sm font-bold transition disabled:opacity-50"
                    >
                      {leadSending ? (
                        <Loader2 size={15} className="animate-spin" />
                      ) : (
                        <Send size={15} />
                      )}
                      {leadSending ? "Bhej rahe hain..." : "Request Call Back"}
                    </button>
                    {leadError && (
                      <p className="text-xs text-red-600 text-center">
                        {leadError}
                      </p>
                    )}
                  </form>
                )}
              </div>
            )}
          </div>

          {/* FOOTER / INPUT */}
          <div className="border-t border-gray-200 p-3 flex-shrink-0 bg-white">
            {!showLeadForm && (
              <button
                onClick={() => setShowLeadForm(true)}
                className="w-full mb-2 text-xs font-bold text-[#002b5c] bg-[#fff8ec] hover:bg-[#fdf0d6] border border-[#d99a2b]/40 rounded-lg py-2 transition"
              >
                📞 Talk to our team — Free Consultation
              </button>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading || limitReached}
                placeholder={
                  limitReached
                    ? "Free consultation book karein →"
                    : "Apna sawaal likhein..."
                }
                className="flex-1 text-sm border border-gray-300 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#d99a2b]/20 focus:border-[#d99a2b] disabled:bg-gray-100"
              />
              <button
                type="submit"
                disabled={loading || limitReached || !input.trim()}
                aria-label="Send message"
                className="w-10 h-10 flex-shrink-0 rounded-xl bg-[#002b5c] hover:bg-[#06477f] text-white flex items-center justify-center transition disabled:opacity-40"
              >
                {loading ? (
                  <Loader2 size={17} className="animate-spin" />
                ) : (
                  <Send size={17} />
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
