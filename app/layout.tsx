import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import OrganizationSchema from "@/components/OrganizationSchema";
import ScrollReveal from "@/components/ScrollReveal";
// DHYAAN DEIN: Agar aapke paas Navbar aur Footer components hain, toh unhe yahan import karein
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

/*
  PERFORMANCE NOTE (13 Sept 2026):
  Yahan pehle Geist aur Geist_Mono fonts Google se load ho rahe the, lekin
  site me unka kahin bhi use nahi tha — globals.css me body ka font
  "Arial, Helvetica, sans-serif" set hai, aur --font-geist-sans /
  --font-geist-mono variables kisi bhi component ya CSS me reference nahi hote.
  Matlab har page par do font families bekaar download ho rahi thi.
  Hata di gayi hain — website ka look bilkul same rahega.
*/

const siteUrl = "https://www.rajputlalitassociates.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Rajput Lalit & Associates | GST, Income Tax & Business Registration Services in India",
    template: "%s | Rajput Lalit & Associates",
  },

  description:
    "Rajput Lalit & Associates provides GST Registration, GST Return Filing, Income Tax Return, Accounting, TDS, MSME Registration, Company Registration and Tax Consultancy services across India.",

  keywords: [
    "GST Registration India",
    "GST Return Filing",
    "Income Tax Return Filing",
    "GST Consultant India",
    "Tax Consultant India",
    "Accounting Services",
    "Bookkeeping Services",
    "MSME Registration",
    "Company Registration",
    "Private Limited Company Registration",
    "LLP Registration",
    "Startup Registration",
    "GST Notice Reply",
    "GST Consultant",
    "Business Registration India",
  ],
  authors: [
    {
      name: "Rajput Lalit & Associates",
    },
  ],

  creator: "Rajput Lalit & Associates",

  publisher: "Rajput Lalit & Associates",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Rajput Lalit & Associates | GST & Income Tax Consultants",
    description:
      "Professional GST, Income Tax, Accounting, TDS, MSME and Company Registration Services in Ambala, Haryana.",
    url: siteUrl,
    siteName: "Rajput Lalit & Associates",
    locale: "en_IN",
    type: "website",
    // Pehle yahan /logo.png tha — wo 4000x3111 ka square logo hai, jabki
    // yahan 1200x630 declare kiya gaya tha (galat dimensions), aur social
    // apps use raw download karti hain (555 KB). Ab proper 1200x630 branded
    // OG banner hai, baaki service pages jaisa.
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "Rajput Lalit & Associates — GST, Income Tax & Accounting Consultants, Ambala",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rajput Lalit & Associates",
    description:
      "GST, Income Tax, Accounting and Business Registration Services across India.",
    images: ["/og/home.png"],
  },

  category: "Accounting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">

        {/*
          Ye chhoti script baaki page paint hone se PEHLE chalti hai. Ye <html>
          par `reveal-ready` class lagati hai taaki scroll-animation wale
          elements bina flicker ke hidden start hon.

          Agar browser purana ho ya user ne apne device me "reduce motion" on
          kar rakha ho, ye class lagti hi nahi — poora content normally visible
          rehta hai. Isliye SEO ya accessibility ko koi risk nahi.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(!('IntersectionObserver' in window))return;if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;var d=document.documentElement;d.classList.add('reveal-ready');window.setTimeout(function(){if(!window.__revealActive){d.classList.remove('reveal-ready');}},4000);}catch(e){}})();",
          }}
        />

        <OrganizationSchema />

        <ScrollReveal />
        
        {/* <Navbar /> -- Yahan Navbar add karein taki wo har page par dikhe */}

        {/* flex-grow ensure karega ki chote pages par bhi footer niche rahe */}
        <main className="flex-grow w-full">
          {children}
        </main>

        {/* <Footer /> -- Yahan Footer add karein */}

        {/*
          PERFORMANCE NOTE (13 Sept 2026):
          Elfsight ki platform.js pehle yahan thi, matlab SAARE 23 pages par
          load hoti thi — jabki Google Reviews widget sirf 9 pages par hai.
          Ab wo script components/GoogleReviews.tsx ke andar chali gayi hai,
          `lazyOnload` strategy ke saath. Isse Total Blocking Time kam hota hai.
        */}

      </body>

      {/* Google Analytics Script */}
      <GoogleAnalytics gaId="G-GMQ64JDQG5" />
    </html>
  );
}