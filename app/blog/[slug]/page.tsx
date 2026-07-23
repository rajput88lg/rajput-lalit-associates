import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";

import IncomeTaxReturnFilingOnlineIndia from "@/content/blogs/income-tax-return-filing-online-india";
import GSTRegistrationOnlineIndia from "@/content/blogs/gst-registration-online-india";
import GSTRegistrationFeesIndia from "@/content/blogs/gst-registration-fees-india";
import GSTRegistrationDocumentsIndia from "@/content/blogs/gst-registration-documents-india";
import GSTReturnFilingIndia from "@/content/blogs/gst-return-filing-india";
import GSTRegistrationCancellationIndia from "@/content/blogs/gst-registration-cancellation-india";

import BlogSchema from "@/components/BlogSchema";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.seoTitle,
    description: blog.seoDescription,
    keywords: blog.keywords,
    alternates: {
      canonical: `https://www.rajputlalitassociates.in/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.seoTitle,
      description: blog.seoDescription,
      url: `https://www.rajputlalitassociates.in/blog/${blog.slug}`,
      type: "article",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.seoTitle,
      description: blog.seoDescription,
      images: [blog.image],
    },
  };
}

export default async function BlogDetails({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  // Component ko dynamically assign karna
  let BlogContent;
  switch (slug) {
    case "gst-registration-online-india":
      BlogContent = GSTRegistrationOnlineIndia;
      break;
    case "gst-registration-fees-india":
      BlogContent = GSTRegistrationFeesIndia;
      break;
    case "gst-registration-documents-india":
      BlogContent = GSTRegistrationDocumentsIndia;
      break;
    case "gst-return-filing-india":
      BlogContent = GSTReturnFilingIndia;
      break;
    case "gst-registration-cancellation-india":
      BlogContent = GSTRegistrationCancellationIndia;
      break;
      case "income-tax-return-filing-online-india":
  BlogContent = IncomeTaxReturnFilingOnlineIndia;
  break;
    default:
      notFound();
      return null;
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-20 flex-grow w-full bg-white">
      
      <BlogSchema
        title={blog.title}
        description={blog.description}
        image={blog.image}
        slug={blog.slug}
        datePublished={blog.date}
        author={blog.author}
      />

      <Image
        src={blog.image}
        alt={blog.title}
        width={1200}
        height={630}
        className="w-full object-cover rounded-2xl shadow-lg mb-8 bg-gray-100"
        priority
      />

      <div className="mb-4">
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
          {blog.category}
        </span>
      </div>

      <h1 className="text-5xl font-extrabold text-[#002b5c] leading-tight mt-4">
        {blog.title}
      </h1>

      <div className="flex flex-wrap items-center gap-6 text-gray-500 mt-6 text-sm border-b border-gray-200 pb-6 font-medium">
        <span className="flex items-center gap-2">👤 {blog.author}</span>
        <span className="flex items-center gap-2">📅 {blog.date}</span>
        <span className="flex items-center gap-2">⏱️ {blog.readTime}</span>
      </div>

      {/* Yahan par ab dynamic content render hoga */}
      <article className="prose prose-lg prose-blue max-w-none mt-12 text-gray-700 leading-loose">
        <BlogContent />
      </article>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#002b5c] to-[#004a99] text-white rounded-3xl p-10 mt-16 text-center shadow-xl">
        <h2 className="text-3xl font-bold">Need Professional Assistance?</h2>
        <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
          Rajput Lalit & Associates provides fast, secure and professional GST, Income Tax, and Business Registration services across India.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-8">
          <a
            href="tel:9354953603"
            className="bg-white text-[#002b5c] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-md hover:shadow-lg flex items-center gap-2"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/919354953603"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition shadow-md hover:shadow-lg flex items-center gap-2"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}