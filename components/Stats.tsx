import {
  FaAward,
  FaUsers,
  FaFileAlt,
  FaHandshake,
} from "react-icons/fa";

const stats = [
  {
    icon: FaAward,
    number: "15+",
    label: "Years of Experience",
    text: "Practical experience in tax and accounting services",
  },
  {
    icon: FaUsers,
    number: "200+",
    label: "Happy Clients",
    text: "Individuals, startups and growing businesses",
  },
  {
    icon: FaFileAlt,
    number: "2500+",
    label: "Returns Filed",
    text: "GST and Income Tax compliance handled",
  },
  {
    icon: FaHandshake,
    number: "100%",
    label: "Client Commitment",
    text: "Professional support with personal attention",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#001d40] via-[#002b5c] to-[#06477f] py-16 md:py-20">

      {/* BACKGROUND DECORATION */}

      <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full border-[60px] border-white/[0.03]" />

      <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-[#d99a2b]/5" />


      <div className="relative max-w-7xl mx-auto px-6">

        {/* TOP TEXT */}

        <div className="text-center mb-12">

          <p className="text-[#f0b84b] font-bold uppercase tracking-[0.2em] text-sm">
            Our Journey in Numbers
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">
            Experience, Trust & Professional Commitment
          </h2>

        </div>


        {/* STATS GRID */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group relative overflow-hidden bg-white/[0.08] backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center hover:bg-white/[0.13] hover:-translate-y-1 transition-all duration-300"
              >

                {/* ICON */}

                <div className="mx-auto w-14 h-14 rounded-xl bg-[#d99a2b] text-white flex items-center justify-center shadow-lg group-hover:bg-[#f0b84b] transition">

                  <Icon className="text-2xl" />

                </div>


                {/* NUMBER */}

                <h3 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#f0b84b]">
                  {stat.number}
                </h3>


                {/* LABEL */}

                <p className="mt-2 text-lg font-bold text-white">
                  {stat.label}
                </p>


                {/* SMALL TEXT */}

                <p className="mt-3 text-sm text-blue-100 leading-6">
                  {stat.text}
                </p>


                {/* BOTTOM GOLD LINE */}

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#d99a2b] to-[#f0b84b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}