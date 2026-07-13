import Link from "next/link";
import { FaChevronRight, FaHome } from "react-icons/fa";

interface BreadcrumbProps {
  current: string;
}

export default function Breadcrumb({ current }: BreadcrumbProps) {
  return (
    <div className="bg-gray-100 border-b">
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