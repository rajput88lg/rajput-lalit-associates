# Paid Products — Setup & Management (Hinglish)

Website par 3 naye income products live hain. Teeno Razorpay se payment lete hain aur
**apne aap deliver** hote hain — aapko manually kuch nahi bhejna padta.

| Product | Page | Price | Delivery |
|---|---|---|---|
| Personal Tax Saving Report | `/tax-saving-report` | ₹249 | Screen par turant + email link |
| Templates Store (6 kits + bundle) | `/business-templates` | ₹99 – ₹2,999 | Download links (screen + email) |
| Compliance Reminder Service | `/compliance-reminders` | ₹999 / saal | Roz subah 8 baje auto email |

Har sale ki copy `info@rajputlalitassociates.in` par "New sale: ..." subject se aayegi.

## Vercel par ek baar karna hai (zaroori)

1. **CRON_SECRET** add karein — Vercel → Project → Settings → Environment Variables →
   Name `CRON_SECRET`, Value koi bhi lamba random password (jaise 32 letters/numbers).
   Iske bina reminder emails nahi jayengi.
2. Ye pehle se set hone chahiye (booking ke liye already hain): `RAZORPAY_KEY_ID`,
   `RAZORPAY_KEY_SECRET` (LIVE keys), `SMTP_PASS`.
3. Deploy ke baad Vercel → Project → **Cron Jobs** tab mein `/api/cron/reminders` dikhna chahiye.

## Test kaise karein (deploy ke baad)

- `/tax-saving-report` kholein, salary bharein → free check dikhna chahiye.
- ₹99 wala Rent Receipt kit khud khareed kar dekhein → download + email aana chahiye.
- Reminder dry-run (kuch send nahi hota, sirf dikhata hai kisko kya jayega):
  ```
  curl -H "Authorization: Bearer <CRON_SECRET>" "https://www.rajputlalitassociates.in/api/cron/reminders?dry=1"
  ```

## Kuch badalna ho to

- **Price**: `lib/paidServices.ts` mein `amount` badlein.
- **Due dates / extension**: `lib/taxDeadlines.ts` — wahi date `/tax-deadlines` page aur reminder
  emails dono mein update ho jaati hai. Monthly dates (7th TDS, 11th GSTR-1, 20th GSTR-3B)
  `lib/reminderSchedule.ts` mein hain. **Har saal April se pehle next FY ki dates add karein.**
- **Tax slabs**: `lib/incomeTaxCalculator.ts` — free calculator aur paid report dono update.
- **Excel/Word kits**: `scripts/build-digital-products.py` edit karke chalayein:
  `pip install openpyxl python-docx && python scripts/build-digital-products.py`
  Files `private-downloads/` mein banti hain (ye folder public nahi hai — sirf paid link se milti hain).

## Kaise kaam karta hai (technical, short)

- Koi database nahi: customer ki details aur tax inputs Razorpay order ke `notes` mein save hote hain.
  Reminder subscribers = pichle 365 din ke paid `compliance-reminders` orders.
- Customer ka link `/purchase?order=...&t=...` HMAC se signed hai (RAZORPAY_KEY_SECRET se) —
  bina payment koi link nahi bana sakta.
- Subscription auto-renew nahi hoti; khatam hone se 14 din pehle renewal email jaata hai.

## Dhyan dein

- Aapka GST registration hai to in digital sales par GST lagega — price GST-inclusive maana gaya hai.
  Apne turnover ke hisaab se confirm kar lein.
- Refund policy page par digital products ka section add kar diya gaya hai.

---

# Round 2 — NRI & International (USD)

| Product / Page | Price | Kya hai |
|---|---|---|
| NRI India Tax Health Check — `/nri-tax-health-check` | US$59 | Free check + paid report (status, ITR, TDS refund, country pointers, action plan) |
| NRI ITR filing — `/nri-in-usa#services` | US$119 | Booking (aap manually file karte hain) |
| NRI ITR after property sale — `/nri-in-usa#services` | US$229 | Booking |
| NRI in the USA guide — `/nri-in-usa` | — | Traffic page: India + US points, free check, USD plans |
| Free calculators — `/us-income-tax-calculator`, `/canada-income-tax-calculator`, `/australia-income-tax-calculator` | Free | Videsh se traffic; har result ke neeche NRI check ka link |

## Zaroori (iske bina USD payment nahi chalega)

1. **Razorpay → International Payments enable karwaiye** (Razorpay support ko request). Tab tak USD
   checkout par "payment couldn't start" + WhatsApp button dikhega — site tootegi nahi.
2. **GST LUT (Form RFD-11)** file karne ke baare mein apne CA view se decide kariye — foreign currency
   mein export of service zero-rated ho sakti hai.

## Har saal update karna hai

- US / Canada / Australia rates: `lib/globalTaxCalculators.ts` (upar comment mein sab figures aur saal likhe hain).
  US: har November (IRS naye brackets), Canada: har January, Australia: har July.
- NRI report ke India rules: `lib/nriHealthCheck.ts` + existing `lib/nriResidentialStatus.ts`.
- USD prices: `lib/paidServices.ts` (`currency: "USD"` wale items).

## Note
`/nri-tax-services` page par INR fees (NRI ITR ₹5,000 etc.) abhi bhi purani hain. USD plans usse mehenge hain —
chahein to INR fees bhi badha lein ya dono ko same rakhein.

---

# Round 3 — Store upgrade (October 2026)

| Kit (service key) | Price | Files |
|---|---|---|
| Complete Business Tax Bundle (`business-tax-bundle`) | ₹2,499 | GST + Accounting + ITR + Freelancer kits |
| GST Compliance Kit (`gst-invoice-kit`) | ₹999 | `GST-Compliance-Kit.xlsx` |
| Small Business Accounting Kit (`bookkeeping-kit`) | ₹1,499 | `Small-Business-Accounting-Kit.xlsx` |
| ITR Filing Checklist & Organizer (`itr-organizer-kit`) | ₹399 | `ITR-Filing-Checklist-Organizer.xlsx` |
| Freelancer Tax Kit (`freelancer-tax-kit`) | ₹999 | `Freelancer-Tax-Kit.xlsx` |
| GST Notice Reply Kit (`notice-reply-kit`) | ₹2,999 | 14 Word formats + `GST-Notice-Reconciliation-Workbook.xlsx` |
| Rent Receipt & HRA Kit (`rent-receipt-kit`) | ₹99 | unchanged |

- Purane buyers ke links chalte rahenge — unhe ab upgraded file milegi. Purana ₹799 bundle (`business-kit-bundle`)
  `retired: true` hai: naya order nahi banta, sirf purane links kaam karte hain.
- ₹999+ kits par "free 15-minute setup call" promise hai — band karna ho to `app/business-templates/page.tsx` mein
  `SETUP_CALL_FROM = Infinity` kar dein.
- "Free updates for 12 months" — rules/rates badlein to `scripts/build-digital-products.py` update karke dobara chalayein;
  same link se nayi file milegi.
- Har saal April se pehle: GST kit ka due-date calendar aur `FY_MONTHS`, freelancer kit ke slabs, ITR kit ke due dates.
