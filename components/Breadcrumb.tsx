import Link from "next/link";
import { FaChevronRight, FaHome } from "react-icons/fa";

interface BreadcrumbProps {
  current: string;
}

// BreadcrumbList schema (20 Sept 2026) — is component ko poore site mein
// 40+ pages use karte hain, isliye ek hi jagah add karne se BreadcrumbList
// rich-result eligibility har us page par mil jaati hai bina har page ko
// individually edit kiye. "current" page ka apna URL yahan available nahi
// hai (component sirf label leta hai), isliye schema mein sirf naam diya
// hai — Google ke liye ye valid hai, bas item-level URL missing hai.
export default function Breadcrumb({ current }: BreadcrumbProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.rajputlalitassociates.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: current,
      },
    ],
  };

  return (
    <div className="bg-gray-100 border-b">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2 text-sm text-gray-600">
        <Link
          href="/"
          className="flex items-center gap-2 hover:text-[#002b5c] transition"
        >
          <FaHome size={14} />
          Home
        </Link>

        <FaChevronRight size={12} />

        <span className="font-semibold text-[#002b5c]">
          {current}
        </span>
      </div>
    </div>
  );
}