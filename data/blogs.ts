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
];