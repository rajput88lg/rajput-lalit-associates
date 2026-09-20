import { MetadataRoute } from "next";

// 20 Sept 2026 — AI search-crawlers (jo ChatGPT/Perplexity jaise AI answer
// engines live-retrieval ke liye use karte hain) explicitly allow kiye
// gaye hain, taaki site AI-search answers mein cite ho sake (GEO — see
// claude/GROWTH-IDEAS-100-PLUS-worldwide-website-strengthening-2026.md).
// Generic "*" rule already sabko allow karti thi, ye extra rules sirf
// explicit/future-proof hain — koi behavior change nahi kar rahe.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "Claude-SearchBot", "ClaudeBot"],
        allow: "/",
      },
    ],
    sitemap: "https://www.rajputlalitassociates.in/sitemap.xml",
    host: "https://www.rajputlalitassociates.in",
  };
}