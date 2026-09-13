import Link from "next/link";
import { Calculator, UserCheck, ArrowRight, Sparkles } from "lucide-react";

/**
 * FreeToolsBand
 * --------------
 * Compact homepage band that surfaces the NRI India-Tax Toolkit.
 *
 * The homepage is the site's strongest page, so linking the tools from here
 * does two jobs: visitors actually discover them, and the tool pages receive
 * internal link equity from the highest-authority page on the domain.
 *
 * Kept deliberately short — the homepage is already long, so this is a band,
 * not a full section. Detail lives on /tools.
 */

const tools = [
  {
    href: "/nri-property-tds-calculator",
    icon: Calculator,
    title: "NRI Property Sale TDS Calculator",
    line: "See how much TDS the buyer must deduct — and how much of your money gets blocked until you claim a refund.",
  },
  {
    href: "/nri-residential-status-calculator",
    icon: UserCheck,
    title: "NRI Residential Status Calculator",
    line: "Are you an NRI, RNOR or Resident this year? Find out what India can actually tax.",
  },
];

export default function FreeToolsBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white py-16 md:py-20">
      <div className="float-soft absolute -top-28 -right-16 w-80 h-80 rounded-full border-[50px] border-white/[0.03]" />
      <div className="float-soft-slow absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-[#d99a2b]/5" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto" data-reveal>
          <p className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm font-semibold">
            <Sparkles size={15} className="text-[#f0b84b]" />
            Free Tools — no sign-up
          </p>

          <h2 className="mt-5 text-3xl md:text-5xl font-extrabold">
            Built for NRIs
            <span className="block text-[#f0b84b] mt-2">
              dealing with Indian tax
            </span>
          </h2>

          <p className="mt-5 text-blue-100 text-lg leading-8">
            Calculators that apply the Income-tax Act, 2025 as it stands today —
            written and maintained by our practice.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.href}
                href={tool.href}
                data-reveal
                data-reveal-delay={i + 1}
                className="group flex items-start gap-5 bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 hover:border-[#f0b84b]/40 rounded-2xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="icon-pop w-14 h-14 rounded-xl bg-[#d99a2b] text-white flex items-center justify-center flex-shrink-0 shadow-lg group-hover:bg-[#f0b84b] transition">
                  <Icon size={26} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl font-extrabold group-hover:text-[#f0b84b] transition-colors">
                    {tool.title}
                  </h3>
                  <p className="mt-2 text-blue-100 leading-7 text-sm">
                    {tool.line}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#f0b84b]">
                    Open tool
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center" data-reveal>
          <Link
            href="/tools"
            className="btn-shine inline-flex items-center gap-2 border border-white/40 hover:bg-white hover:text-[#002b5c] px-7 py-3.5 rounded-xl font-bold transition-all duration-300"
          >
            See all free tools
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
