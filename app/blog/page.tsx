"use client"; // Ye zaroori hai kyunki hum search ke liye 'useState' use kar rahe hain

import { useState } from "react";
import { blogs } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  // Search query ko store karne ke liye state
  const [searchQuery, setSearchQuery] = useState("");

  // Blogs ko search query ke hisaab se filter karna (Title ya Description ke basis par)
  const filteredBlogs = blogs.filter((blog) => {
    // Note: Agar aapke data/blogs.ts mein title ki jagah koi aur field hai, toh usey yahan replace karein
    const title = blog.title ? blog.title.toLowerCase() : "";
    return title.includes(searchQuery.toLowerCase());
  });

  return (
    <main className="bg-gradient-to-b from-blue-50 via-white to-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#002B5C] via-[#004A99] to-[#0066CC] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="bg-white/20 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
            📚 Knowledge Center
          </span>
          <h1 className="text-6xl font-extrabold mt-8 leading-tight">
            GST, Tax &<br /> Business Guides
          </h1>
          <p className="text-xl text-blue-100 mt-8 max-w-3xl mx-auto leading-9">
            India's trusted knowledge hub for GST Registration, Income Tax,
            Accounting, MSME Registration, Company Registration and Business
            Compliance.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur rounded-2xl py-8 shadow-lg hover:bg-white/20 transition duration-300">
              <h3 className="text-4xl font-bold">15+</h3>
              <p className="mt-2 font-medium">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl py-8 shadow-lg hover:bg-white/20 transition duration-300">
              <h3 className="text-4xl font-bold">200+</h3>
              <p className="mt-2 font-medium">Business Clients</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl py-8 shadow-lg hover:bg-white/20 transition duration-300">
              <h3 className="text-4xl font-bold">6000+</h3>
              <p className="mt-2 font-medium">GST & Income Tax Filings</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl py-8 shadow-lg hover:bg-white/20 transition duration-300">
              <h3 className="text-4xl font-bold">100%</h3>
              <p className="mt-2 font-medium">Professional Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 mb-16 relative z-10">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="🔍 Search GST, Income Tax, MSME Articles..."
            className="w-full rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-xl outline-none focus:ring-2 focus:ring-[#002B5C] transition-all text-gray-800"
            aria-label="Search articles"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#002B5C] mb-10">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-xl text-gray-500">
                Koi article nahi mila. Kripya doosra keyword try karein.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-200">
        <div className="bg-[#002B5C] rounded-3xl p-14 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold">
            Need Professional GST & Tax Assistance?
          </h2>
          <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
            Our experts are ready to help your business with GST Registration,
            Income Tax Filing, Accounting and Company Compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <a
              href="tel:9354953603"
              className="bg-white text-[#002B5C] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-md hover:shadow-lg flex items-center gap-2"
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
        </div>
      </section>
    </main>
  );
}