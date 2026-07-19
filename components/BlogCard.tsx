import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/data/blogs";

interface Props {
  blog: Blog;
}

export default function BlogCard({ blog }: Props) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group block rounded-2xl border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden bg-white flex flex-col h-full"
    >
      <article className="flex flex-col h-full">
        
        {/* Image Section: Agar data mein image hai tabhi dikhegi */}
        {blog.image && (
          <div className="relative w-full h-48 overflow-hidden bg-gray-100 border-b border-gray-100">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        <div className="p-6 flex flex-col flex-grow">
          {/* Category */}
          <div className="mb-4">
            <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-[#002b5c] group-hover:text-blue-600 transition-colors line-clamp-2">
            {blog.title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 mt-3 flex-grow line-clamp-3 leading-relaxed">
            {blog.description}
          </p>

          {/* Footer Metadata */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-4">
              <span>📅 {blog.date}</span>
              <span>⏱️ {blog.readTime}</span>
            </div>
          </div>
          
          {/* Action Text */}
          <div className="mt-4 text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform flex items-center">
            Read Article <span className="ml-1">→</span>
          </div>
        </div>

      </article>
    </Link>
  );
}