import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import OrganizationSchema from "@/components/OrganizationSchema";
// DHYAAN DEIN: Agar aapke paas Navbar aur Footer components hain, toh unhe yahan import karein
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Rajput Lalit & Associates Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rajput Lalit & Associates",
    description:
      "GST, Income Tax, Accounting and Business Registration Services across India.",
    images: ["/logo.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        
        <OrganizationSchema />
        
        {/* <Navbar /> -- Yahan Navbar add karein taki wo har page par dikhe */}

        {/* flex-grow ensure karega ki chote pages par bhi footer niche rahe */}
        <main className="flex-grow w-full">
          {children}
        </main>

        {/* <Footer /> -- Yahan Footer add karein */}

      </body>

      {/* Google Analytics Script */}
      <GoogleAnalytics gaId="G-GMQ64JDQG5" />
    </html>
  );
}