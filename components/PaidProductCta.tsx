import Link from "next/link";
import { Sparkles } from "lucide-react";

/** Small banner that points a free-tool visitor to a related paid product. */
export default function PaidProductCta({
  title,
  text,
  href,
  cta,
}: {
  title: string;
  text: string;
  href: string;
  cta: string;
}) {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 print:hidden">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-2xl border-2 border-[#d99a2b] bg-amber-50 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="flex items-center gap-2 text-lg font-extrabold text-[#002b5c]">
            <Sparkles size={18} className="text-[#d99a2b]" /> {title}
          </p>
          <p className="mt-1 text-sm leading-6 text-gray-700">{text}</p>
        </div>
        <Link
          href={href}
          className="shrink-0 rounded-xl bg-[#002b5c] px-5 py-3 text-center font-bold text-white transition hover:bg-[#06477f]"
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}
