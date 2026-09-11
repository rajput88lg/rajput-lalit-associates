import type { Metadata } from "next";

// "app/blog/page.tsx" ek Client Component hai (search ke liye useState use
// karta hai), isliye wahan directly "export const metadata" nahi diya ja
// sakta — Next.js App Router mein metadata sirf Server Component se export
// hoti hai. Isliye ye alag Layout file banayi hai jo Server Component hai
// aur /blog page ke liye unique title/description deti hai (pehle ye
// homepage jaisa hi title/description use kar raha tha — duplicate meta
// issue tha).

export const metadata: Metadata = {
  title: "GST, Tax & Business Guides – Knowledge Center",
  description:
    "Free, practical guides on GST Registration, GST Return Filing, Income Tax Return, MSME Registration, Company Registration and Business Compliance in India — written by tax experts at Rajput Lalit & Associates.",
  alternates: {
    canonical: "https://www.rajputlalitassociates.in/blog",
  },
  openGraph: {
    title: "GST, Tax & Business Guides – Knowledge Center | Rajput Lalit & Associates",
    description:
      "Free, practical guides on GST Registration, Income Tax, MSME, Company Registration and Business Compliance in India.",
    url: "https://www.rajputlalitassociates.in/blog",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
