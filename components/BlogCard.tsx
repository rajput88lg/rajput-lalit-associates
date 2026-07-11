import Link from "next/link";
import { Blog } from "@/data/blogs";

interface Props {
  blog: Blog;
}

export default function BlogCard({ blog }: Props) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="block rounded-xl border border-gray-200 hover:shadow-lg transition overflow-hidden bg-white"
    >
      <div className="p-6">
        <span className="inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
          {blog.category}
        </span>

        <h2 className="text-2xl font-bold mt-4 text-[#002b5c]">
          {blog.title}
        </h2>

        <p className="text-gray-600 mt-3">
          {blog.description}
        </p>

        <div className="flex justify-between mt-6 text-sm text-gray-500">
          <span>{blog.date}</span>
          <span>{blog.readTime}</span>
        </div>
      </div>
    </Link>
  );
}