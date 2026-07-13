import Link from "next/link";

export const metadata = {
  title: "HTML Sitemap | Rajput Lalit & Associates",
  description:
    "Browse all pages of Rajput Lalit & Associates from one place.",
};

const sections = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Book Consultation", href: "/appointment" },
      { name: "Packages", href: "/packages" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { name: "GST Registration", href: "/services/gst-registration" },
      { name: "GST Return Filing", href: "/services/gst-return-filing" },
      { name: "Income Tax Return", href: "/services/income-tax-return" },
      { name: "Accounting Services", href: "/services/accounting" },
      { name: "TDS Services", href: "/services/tds" },
      { name: "MSME Registration", href: "/services/msme-registration" },
      { name: "Company Incorporation", href: "/services/company-incorporation" },
      { name: "Website Development", href: "/website-development" },
    ],
  },
  {
    title: "Legal Pages",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-and-conditions" },
      { name: "Refund & Rescheduling Policy", href: "/refund-policy" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8 md:p-12">

        <h1 className="text-4xl font-bold text-[#002B5C] mb-3">
          Website Sitemap
        </h1>

        <p className="text-gray-600 mb-10">
          Browse all important pages available on our website.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-semibold text-[#002B5C] mb-5">
                {section.title}
              </h2>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-blue-700 hover:text-blue-900 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="mt-12 border-t pt-8">
          <Link
            href="/"
            className="inline-block bg-[#002B5C] text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}