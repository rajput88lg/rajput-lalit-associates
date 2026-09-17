# Round 3 — 10 Naye Blogs — Deploy Steps (Hinglish)

Ye zip aapke Next.js project ke andar **merge** karna hai (extract nahi karke alag folder banana — seedha copy/merge karna hai).

## Files is zip mein

- `content/blogs/*.tsx` — 10 naye blog components
- `public/blogs/*.png` — 10 naye featured images
- `data/blogs.ts` — **poori updated file** (56 purane + 10 naye = 66 blogs)
- `app/blog/[slug]/page.tsx` — **poori updated file** (naye imports + switch cases)

Zip ke andar `app/`, `content/`, `data/`, `public/` root par hain (koi extra wrapping folder nahi hai).

## Windows (PowerShell) — Recommended

1. Apne project folder mein jaayein jahan `package.json` hai (last baar jo `rajput-website-new` folder use kiya tha, wahi):
   ```powershell
   cd C:\Users\rajpu\rajput-lalit-associates\rajput-website-new
   ```
2. Is zip ko **Downloads** mein hi rehne dein (extract mat karein khud se — agar Windows auto-extract kar deta hai to jo folder banta hai uske andar jaake copy karein).
3. Zip ke andar ke saare folders (`app`, `content`, `data`, `public`) ko apne project folder mein copy/merge karein:
   ```powershell
   Copy-Item -Path "C:\Users\rajpu\Downloads\round3-blogs\*" -Destination ".\" -Recurse -Force
   ```
   (Path apne actual extract-location ke hisaab se adjust karein.)
4. Build test karein:
   ```powershell
   npm run build
   ```
   Agar ye clean pass ho jaaye (jaisa Round 2 mein hua tha), to aage badhein.
5. Git commit + push:
   ```powershell
   git add .
   git commit -m "Add 10 new blogs - Round 3"
   git push
   ```
6. Vercel apne aap deploy kar dega (2-3 minute mein live ho jaayega).

## Yaad rakhne wali baatein (pichli baar ki dikkat se)

- Hamesha `npm run build` chalane se pehle terminal prompt check karein ki wo **sahi project folder** mein hai (prompt mein `rajput-website-new>` dikhna chahiye, sirf `rajput-lalit-associates>` nahi).
- Agar `npm run build` ya `git status` "not found" / "not a git repository" jaisi error de, to `dir /a` chala kar check karein ki folder khaali to nahi hai — agar khaali hai, matlab terminal galat folder mein hai, apna asli project folder khaali nahi hua.

## Verification (deploy ke baad)

- `https://www.rajputlalitassociates.in/sitemap.xml` khol kar dekhein — ismein 66 blog URLs honi chahiye (pehle 56 the).
- Koi bhi 1-2 naye blog URL khol kar check karein ki content aur image sahi dikh rahi hai, jaise:
  `https://www.rajputlalitassociates.in/blog/gst-2-0-reforms-2026-sector-impact-guide`
