import { blogs } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  return (
    <main className="bg-gradient-to-b from-blue-50 via-white to-gray-50 min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#002B5C] via-[#004A99] to-[#0066CC] text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="bg-white/20 px-5 py-2 rounded-full text-sm font-semibold">
            📚 Knowledge Center
          </span>

          <h1 className="text-6xl font-extrabold mt-8 leading-tight">
            GST, Tax &
            <br />
            Business Guides
          </h1>

          <p className="text-xl text-blue-100 mt-8 max-w-3xl mx-auto leading-9">
            India's trusted knowledge hub for GST Registration,
            Income Tax, Accounting, MSME Registration,
            Company Registration and Business Compliance.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-16">

            <div className="bg-white/10 backdrop-blur rounded-2xl py-8">
              <h3 className="text-4xl font-bold">15+</h3>
              <p className="mt-2">Years Experience</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl py-8">
              <h3 className="text-4xl font-bold">200+</h3>
              <p className="mt-2">Business Clients</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl py-8">
              <h3 className="text-4xl font-bold">6000+</h3>
              <p className="mt-2">GST & Income Tax Filings</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl py-8">
              <h3 className="text-4xl font-bold">100%</h3>
              <p className="mt-2">Professional Support</p>
            </div>

          </div>

        </div>

      </section>

      {/* Search */}

      <div className="max-w-5xl mx-auto px-6 -mt-10 mb-16">

        <input
          type="text"
          placeholder="🔍 Search GST, Income Tax, MSME Articles..."
          className="w-full rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-xl outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Heading */}

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-[#002B5C] mb-10">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}

        </div>

      </div>

      {/* CTA */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="bg-[#002B5C] rounded-3xl p-14 text-center text-white">

          <h2 className="text-4xl font-bold">
            Need Professional GST & Tax Assistance?
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Our experts are ready to help your business with GST Registration,
            Income Tax Filing, Accounting and Company Compliance.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-10">

            <a
              href="tel:9354953603"
              className="bg-white text-[#002B5C] px-8 py-4 rounded-xl font-bold"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919354953603"
              className="bg-green-500 px-8 py-4 rounded-xl font-bold"
            >
              💬 WhatsApp
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}