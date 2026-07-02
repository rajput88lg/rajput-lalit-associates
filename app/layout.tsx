import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rajput Lalit & Associates | GST & Income Tax Consultants",
    template: "%s | Rajput Lalit & Associates",
  },

  description:
    "Rajput Lalit & Associates provides GST Registration, GST Return Filing, Income Tax Return, Accounting, TDS, MSME Registration and Tax Consultancy services in Ambala, Haryana.",

  keywords:
    "GST Consultant, Income Tax Consultant, GST Registration, GST Return Filing, Accounting Services, Bookkeeping, TDS Filing, MSME Registration, Company Registration, Ambala, Haryana",

  authors: [
    {
      name: "Rajput Lalit & Associates",
    },
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Rajput Lalit & Associates",
    description:
      "Professional GST, Income Tax & Accounting Services in Ambala, Haryana.",
    url: "https://rajput-lalit-associates.vercel.app",
    siteName: "Rajput Lalit & Associates",
    type: "website",
  },
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
    </html>
  );
}