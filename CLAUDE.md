@AGENTS.md

## Blog workflow & brand rules

Naya blog add karte waqt hamesha ye 4 steps follow karo:

1. `content/blogs/<slug>.tsx` mein blog content banao — existing blogs (jaise `content/blogs/gst-registration-ambala.tsx`) jaisa Tailwind styling follow karo, FAQ section aur inline `FAQPage` JSON-LD schema (`<script type="application/ld+json">`) zaroor add karo.
2. `data/blogs.ts` ke `blogs` array mein entry add karo — `slug`, `title`, `description`, `category`, `author`, `date`, `image`, `readTime`, `seoTitle`, `seoDescription`, `keywords` sab fields fill karo.
3. `app/blog/[slug]/page.tsx` mein naye blog component ka import add karo aur `switch (slug)` mein uska `case` add karo.
4. `public/blogs/<slug>.png` featured image banao (1536x1024) — **har blog image mein firm ka logo (`public/logo.png`) zaroor include karo**, site ke blue/amber brand colors (`#002b5c`, `#005a9c`, `#d99a2b`) follow karte hue.

Additional rules:
- Tax/legal content likhne se pehle latest sections, forms aur due dates web par verify karo — unverified facts mat likho.
- Internal links jahan applicable ho wahan add karo (e.g. `/income-tax-return-filing`, `/#appointment`) — sirf un routes ko link karo jo actually site par exist karte hain.
- Professional, simple English/Hinglish likho; keyword stuffing avoid karo.
