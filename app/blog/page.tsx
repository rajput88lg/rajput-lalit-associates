import { blogs } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Knowledge Center
          </span>

          <h1 className="text-5xl font-bold text-[#002b5c] mt-6">
            GST, Tax & Business Guides
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
            Explore expert articles on GST Registration, Income Tax,
            Accounting, MSME Registration, Company Registration and Business
            Compliance across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </main>
  );
}