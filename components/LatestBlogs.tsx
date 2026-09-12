import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";

export default function LatestBlogs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14" data-reveal>
          <h2 className="text-4xl font-bold text-[#002b5c]">
            Latest Articles
          </h2>

          <p className="text-gray-600 mt-4">
            Learn GST, Income Tax, Accounting and Business Compliance through
            our expert guides.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.slice(0, 3).map((blog, index) => (

            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              data-reveal
              data-reveal-delay={index + 1}
              className="group bg-white rounded-2xl shadow hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >

              {/*
                Pehle yahan plain <img> tha, jo 1.9 MB ki original PNG
                seedha download karta tha (3 cards = ~5.6 MB) — yahi mobile
                PageSpeed par LCP 23s ka sabse bada karan tha.
                next/image automatically sahi size bhejta hai, WebP me
                convert karta hai, aur neeche wali images lazy-load karta hai.
              */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">

                <span className="text-sm text-blue-600 font-semibold">
                  {blog.category}
                </span>

                <h3 className="text-2xl font-bold mt-3 text-[#002b5c] group-hover:text-[#d99a2b] transition-colors duration-300">
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

        <div className="text-center mt-12" data-reveal>

          <Link
            href="/blog"
            className="btn-shine inline-block bg-[#002b5c] text-white px-8 py-4 rounded-xl hover:bg-blue-900 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
          >
            View All Articles
          </Link>

        </div>

      </div>
    </section>
  );
}