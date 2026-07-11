import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function LatestBlogs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#002b5c]">
            Latest Articles
          </h2>

          <p className="text-gray-600 mt-4">
            Learn GST, Income Tax, Accounting and Business Compliance through
            our expert guides.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.slice(0, 3).map((blog) => (

            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >

              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <span className="text-sm text-blue-600 font-semibold">
                  {blog.category}
                </span>

                <h3 className="text-2xl font-bold mt-3 text-[#002b5c]">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {blog.description}
                </p>

                <div className="flex justify-between mt-6 text-sm text-gray-500">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>

              </div>

            </Link>

          ))}

        </div>

        <div className="text-center mt-12">

          <Link
            href="/blog"
            className="inline-block bg-[#002b5c] text-white px-8 py-4 rounded-xl hover:bg-blue-900 transition"
          >
            View All Articles
          </Link>

        </div>

      </div>
    </section>
  );
}