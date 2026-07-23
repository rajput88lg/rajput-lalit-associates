export interface Blog {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;

  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export const blogs: Blog[] = [
  {
    slug: "gst-registration-online-india",

    title: "GST Registration Online in India",

    description:
      "Complete guide to GST Registration in India including eligibility, documents, fees and online process.",

    category: "GST",

    author: "Rajput Lalit & Associates",

    date: "11 July 2026",

    image: "/blogs/gst-registration-online-india.png",

    readTime: "8 min read",

    seoTitle:
      "GST Registration Online in India | Complete Guide 2026",

    seoDescription:
      "Learn GST Registration Online in India including eligibility, required documents, registration process, fees, benefits and FAQs.",

    keywords: [
      "GST Registration",
      "GST Registration Online",
      "GST Registration India",
      "GST Guide",
      "Online GST",
    ],
  },

  {
    slug: "gst-registration-fees-india",

    title: "GST Registration Fees in India",

    description:
      "Know the Government Fee, Professional Charges, Hidden Costs and Complete GST Registration Fee Structure in India.",

    category: "GST",

    author: "Rajput Lalit & Associates",

    date: "14 July 2026",

    image: "/blogs/gst-registration-fees-india.png",

    readTime: "6 min read",

    seoTitle:
      "GST Registration Fees in India (2026) | Government Fee & Professional Charges",

    seoDescription:
      "Complete guide on GST Registration Fees in India including Government Fee, CA Charges, Professional Fees and FAQs.",

    keywords: [
      "GST Registration Fees",
      "GST Registration Cost",
      "GST Government Fee",
      "GST Professional Charges",
      "GST Registration India",
    ],
  },

  {
    slug: "gst-registration-documents-india",

    title: "GST Registration Documents Required in India",

    description:
      "Complete list of documents required for GST Registration in India for Proprietorship, Partnership, LLP and Private Limited Company.",

    category: "GST",

    author: "Rajput Lalit & Associates",

    date: "14 July 2026",

    image: "/blogs/gst-registration-documents-india.png",

    readTime: "8 min read",

    seoTitle:
      "GST Registration Documents Required in India (2026) | Complete Checklist",

    seoDescription:
      "Check the complete GST Registration document checklist for Proprietorship, Partnership, LLP and Private Limited Company.",

    keywords: [
      "GST Registration Documents",
      "GST Documents",
      "GST Registration Checklist",
      "Documents Required for GST",
      "GST Registration India",
      
    ],
  },
    {
    slug: "gst-return-filing-india",

    title: "GST Return Filing in India (2026)",

    description:
      "Complete guide to GST Return Filing in India including GSTR-1, GSTR-3B, due dates, late fees and online filing process.",

    category: "GST",

    author: "Rajput Lalit & Associates",

    date: "19 July 2026",

    image: "/blogs/gst-return-filing-india.png",

    readTime: "10 min read",

    seoTitle:
      "GST Return Filing in India (2026) | Complete Guide",

    seoDescription:
      "Complete GST Return Filing Guide covering GSTR-1, GSTR-3B, annual returns, due dates, penalties and FAQs.",

    keywords: [
      "GST Return Filing",
      "GSTR-1",
      "GSTR-3B",
      "GST Return",
      "GST Filing",
      "GST India",
      
    ],
  },
      {
    slug: "gst-registration-cancellation-india",

    title: "GST Registration Cancellation in India (2026)",

    description:
      "Complete guide to GST Registration Cancellation including eligibility, documents, cancellation process, revocation and FAQs.",

    category: "GST",

    author: "Rajput Lalit & Associates",

    date: "19 July 2026",

    image: "/blogs/gst-registration-cancellation-india.png",

    readTime: "10 min read",

    seoTitle:
      "GST Registration Cancellation in India (2026) | Complete Guide",

    seoDescription:
      "Learn GST Registration Cancellation in India including eligibility, required documents, online cancellation process, revocation and FAQs.",

    keywords: [
      "GST Registration Cancellation",
      "Cancel GST Registration",
      "GST Cancellation",
      "GST Registration Surrender",
      "GST Revocation",
      "GST India",
    ],
  }
];