import { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";

const baseUrl = "https://www.rajputlalitassociates.in";

// NOTE: Ye sitemap ab DYNAMIC hai. Naya blog "data/blogs.ts" mein add karte
// hi wo automatically yahan aa jaayega — is file ko manually edit karne ki
// zaroorat nahi padegi. Nayi service page banane par bas neeche "servicePages"
// array mein uska path add kar dein.

const servicePages = [
  "/gst-registration",
  "/gst-return-filing",
  "/income-tax-return-filing",
  "/company-registration",
  "/msme-registration",
  "/gst-notice-reply",
  "/accounting-bookkeeping-services",
  "/tds-return-filing",
  // Free tools — NRI India-Tax Toolkit
  "/nri-property-tds-calculator",
  "/nri-residential-status-calculator",
  "/nri-lower-tds-certificate-checklist",
  "/nri-fund-repatriation-guide",
  "/nri-itr-filing-requirement-checker",
  "/tools",
  // Free tools — Loan & Investment Calculators
  "/home-loan-emi-calculator",
  "/business-loan-emi-calculator",
  "/sip-calculator",
  "/emi-calculator",
  // Free tools — Tax Calculators
  "/income-tax-calculator",
  "/hra-exemption-calculator",
  "/gst-calculator",
  // Free tools — Worldwide Calculators & Converters (Round 1, merged into /tools)
  "/percentage-calculator",
  "/age-calculator",
  "/bmi-calculator",
  "/compound-interest-calculator",
  "/date-difference-calculator",
  "/discount-calculator",
  "/tip-calculator",
  "/simple-interest-calculator",
  "/length-converter",
  "/temperature-converter",
  // Free tools — Business & Finance Calculators (Round 2, merged into /tools)
  "/sales-tax-calculator",
  "/markup-calculator",
  "/profit-margin-calculator",
  "/break-even-calculator",
  "/savings-goal-calculator",
  "/loan-amortization-calculator",
  "/retirement-corpus-calculator",
  "/salary-wage-converter",
  "/freelancer-rate-calculator",
  "/rule-of-72-calculator",
  // Free tools — Converters & Everyday Math (Round 3, merged into /tools)
  "/weight-converter",
  "/area-converter",
  "/volume-converter",
  "/speed-converter",
  "/world-time-zone-converter",
  "/number-to-words-converter",
  "/roman-numeral-converter",
  "/gpa-calculator",
  "/fraction-decimal-converter",
  "/random-number-generator",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/website-development`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Legal pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const servicePageEntries: MetadataRoute.Sitemap = servicePages.map(
    (path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    })
  );

  const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...servicePageEntries, ...blogEntries];
}
