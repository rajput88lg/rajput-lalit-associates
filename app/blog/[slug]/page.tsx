import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetails({ params }: PageProps) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-4">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          {blog.category}
        </span>
      </div>

      <h1 className="text-4xl font-bold text-[#002b5c]">
        {blog.title}
      </h1>

      <div className="flex flex-wrap gap-4 text-gray-500 mt-4 text-sm">
        <span>👤 {blog.author}</span>
        <span>📅 {blog.date}</span>
        <span>⏱️ {blog.readTime}</span>
      </div>

      <p className="mt-10 text-lg leading-8 whitespace-pre-line">
        {blog.content}
      </p>
    </main>
  );
}