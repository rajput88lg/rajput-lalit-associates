export interface Blog {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
  content: string;
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
    image: "/blogs/gst-registration.jpg",
    readTime: "8 min read",
    content: `
This is the first demo blog.

GST Registration is mandatory for eligible businesses in India.

This article will soon contain a complete professional guide.
`,
  },
];