import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SECURITY HEADERS (20 Sept 2026) — site-wide, koi page-level change nahi
  // chahiye. In sabka koi negative SEO/UX impact nahi hai, sirf browser ko
  // extra protection instructions milte hain.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            // HTTPS enforce karta hai future visits ke liye bhi (agar
            // koi galti se http:// link follow kare) — preload list ke
            // liye eligible banata hai.
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            // Browser ko file ka declared Content-Type hi trust karne
            // deta hai, MIME-sniffing attacks rokta hai.
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            // Site ko kisi doosri site ke iframe ke andar load hone se
            // rokta hai (clickjacking protection).
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            // Dusri sites par jaate waqt poora URL nahi, sirf origin
            // bhejta hai — privacy improvement, koi analytics break nahi
            // hota.
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            // Camera/microphone/location jaisi browser permissions is
            // site par kabhi use nahi hoti — explicitly disable kar do.
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            // CONTENT SECURITY POLICY — REPORT-ONLY (20 Sept 2026).
            //
            // Isse abhi kuch bhi BLOCK nahi hota — koi script/style/embed
            // (Google Analytics, EmailJS, Elfsight Google Reviews widget,
            // Razorpay checkout jab live hoga) tootega nahi. Ye sirf
            // browser console mein violations LOG karta hai, taaki
            // future mein enforce karne se pehle safely test kiya ja
            // sake. "-Report-Only" hata kar isे enforce banaya ja sakta
            // hai, lekin tabhi jab har allowed source live test ho chuka
            // ho — verify kiye bina enforce karna site tod sakta hai.
            key: "Content-Security-Policy-Report-Only",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://elfsightcdn.com https://static.elfsight.com https://checkout.razorpay.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://api.emailjs.com https://*.elfsight.com https://api.razorpay.com",
              "frame-src https://elfsightcdn.com https://api.razorpay.com https://checkout.razorpay.com",
              "object-src 'none'",
              "base-uri 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },

  // Purane "/services/..." URLs (HTML sitemap aur ek purane blog mein
  // link the) ka koi page exist nahi karta tha — 404 aata tha. Ab ye
  // sahi service pages par redirect hote hain, taaki visitors aur Google
  // dono ko broken link na mile.
  async redirects() {
    return [
      { source: "/services/gst-registration", destination: "/gst-registration", permanent: true },
      { source: "/services/gst-return-filing", destination: "/gst-return-filing", permanent: true },
      { source: "/services/income-tax-return", destination: "/income-tax-return-filing", permanent: true },
      { source: "/services/income-tax-return-filing", destination: "/income-tax-return-filing", permanent: true },
      { source: "/services/accounting", destination: "/accounting-bookkeeping-services", permanent: true },
      { source: "/services/msme-registration", destination: "/msme-registration", permanent: true },
      { source: "/services/company-incorporation", destination: "/company-registration", permanent: true },
      { source: "/services/company-registration", destination: "/company-registration", permanent: true },
      // TDS ka dedicated page ab ban gaya hai — permanent redirect.
      { source: "/services/tds", destination: "/tds-return-filing", permanent: true },
      { source: "/services/tds-return-filing", destination: "/tds-return-filing", permanent: true },
      // PAN ka dedicated page abhi nahi hai — temporary redirect.
      { source: "/services/pan-card", destination: "/services", permanent: false },
      // /free-tools ek alag hub page tha, ab /tools mein hi merge kar diya
      // gaya hai (sab calculators ek hi jagah) — permanent redirect.
      { source: "/free-tools", destination: "/tools", permanent: true },
      // Short, easy link for asking clients for a Google review — goes on
      // visiting cards and WhatsApp messages: rajputlalitassociates.in/review
      { source: "/review", destination: "https://share.google/Ss4gF3tVmHwbOUEKk", permanent: false },
      // GSTR-9 blog ke purane URLs — Google Search Console mein abhi bhi
      // position 1 par impressions aa rahe the, lekin page 404 deta tha.
      // Ab ye current GSTR-9 guide par jaate hain, ranking bhi transfer hoti hai.
      { source: "/blog/gstr-9-annual-return", destination: "/blog/gstr-9-annual-return-filing-guide-fy-2025-26", permanent: true },
      { source: "/blog/gstr-9-annual-return-filing-guide-due-date-applicability-rules", destination: "/blog/gstr-9-annual-return-filing-guide-fy-2025-26", permanent: true },
    ];
  },
};

export default nextConfig;
