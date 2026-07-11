import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import GSTRegistrationOnlineIndia from "@/content/blogs/gst-registration-online-india";
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
    title: blog.title,
    description: blog.description,

    alternates: {
      canonical: `https://www.rajputlalitassociates.in/blog/${blog.slug}`,
    },

    openGraph: {
      title: blog.title,
      description: blog.description,
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
      title: blog.title,
      description: blog.description,
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

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
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
        className="w-full rounded-2xl shadow-lg mb-8"
        priority
      />

      <div className="mb-4">
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
          {blog.category}
        </span>
      </div>

      <h1 className="text-5xl font-bold text-[#002b5c] leading-tight">
        {blog.title}
      </h1>

      <div className="flex flex-wrap gap-6 text-gray-500 mt-5 text-sm border-b pb-6">
        <span>👤 {blog.author}</span>
        <span>📅 {blog.date}</span>
        <span>⏱️ {blog.readTime}</span>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-10">
        <h2 className="text-2xl font-bold text-[#002b5c] mb-4">
          📑 Table of Contents
        </h2>

        <ul className="space-y-3 text-blue-700 font-medium">
          <li>• What is GST Registration?</li>
          <li>• Who Needs GST Registration?</li>
          <li>• Documents Required</li>
          <li>• GST Registration Process</li>
          <li>• GST Registration Fees</li>
          <li>• Benefits of GST Registration</li>
          <li>• Frequently Asked Questions</li>
        </ul>
      </div>

      <article className="prose prose-lg max-w-none mt-12">
        <GSTRegistrationOnlineIndia />
      </article>

      <section className="bg-[#002b5c] text-white rounded-2xl p-10 mt-16 text-center">
        <h2 className="text-3xl font-bold">
          Need GST Registration?
        </h2>

        <p className="mt-4 text-gray-200 text-lg">
          Rajput Lalit & Associates provides fast, secure and professional GST
          Registration services across India.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-8">
          <a
            href="tel:9354953603"
            className="bg-white text-[#002b5c] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919354953603"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}