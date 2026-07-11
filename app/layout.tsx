import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

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
    default: "Rajput Lalit & Associates | GST & Income Tax Consultants in Ambala",
    template: "%s | Rajput Lalit & Associates",
  },

  description:
    "Rajput Lalit & Associates provides GST Registration, GST Return Filing, Income Tax Return, Accounting, TDS, MSME Registration, Company Registration and Tax Consultancy services in Ambala, Haryana.",

  keywords: [
    "GST Consultant Ambala",
    "Income Tax Consultant Ambala",
    "GST Registration",
    "GST Return Filing",
    "Income Tax Return",
    "Accounting Services",
    "Bookkeeping",
    "TDS Filing",
    "MSME Registration",
    "Company Registration",
    "Tax Consultant Haryana",
    "CA Services Ambala",
    "GST Filing Haryana",
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
        alt: "Rajput Lalit & Associates",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rajput Lalit & Associates",
    description:
      "GST, Income Tax, Accounting and Business Registration Services in Ambala.",

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
      <body className="min-h-full flex flex-col">
        {children}
      </body>

      <GoogleAnalytics gaId="G-GMQ64JDQG5" />
    </html>
  );
}