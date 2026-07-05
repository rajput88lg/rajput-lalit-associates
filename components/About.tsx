import {
  FaAward,
  FaHandshake,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 md:py-24"
    >
      {/* Background Decoration */}
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#d99a2b]/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* SECTION HEADING */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-[#d99a2b] font-bold tracking-[0.2em] uppercase text-sm">
            About Us
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#002b5c]">
            Your Trusted Partner in Growth
          </h2>

          <div className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Rajput Lalit & Associates is a professional Tax and
            Accounting consultancy firm based in Ambala City, Haryana.
            We help individuals, startups and businesses manage taxation,
            accounting and regulatory compliance with professional guidance.
          </p>

        </div>


        {/* MAIN ABOUT GRID */}
        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT CARD */}
          <div className="bg-gradient-to-br from-[#002b5c] to-[#06477f] text-white rounded-2xl p-8 md:p-10 shadow-xl">

            <p className="text-[#f0b84b] font-bold uppercase tracking-wider text-sm">
              Who We Are
            </p>

            <h3 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
              Professional Tax & Business Consultancy
            </h3>

            <p className="mt-6 text-blue-100 leading-8">
              With more than 15 years of practical experience,
              Rajput Lalit & Associates provides reliable support
              in GST, Income Tax, Accounting, TDS, Business Registration
              and other compliance matters.
            </p>

            <p className="mt-4 text-blue-100 leading-8">
              Our approach is focused on clear communication,
              timely compliance and practical solutions according
              to the specific requirements of every client.
            </p>


            {/* CHECK POINTS */}
            <div className="mt-7 grid sm:grid-cols-2 gap-4">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#f0b84b] flex-shrink-0" />
                <span>Professional Guidance</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#f0b84b] flex-shrink-0" />
                <span>Timely Compliance</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#f0b84b] flex-shrink-0" />
                <span>Practical Solutions</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#f0b84b] flex-shrink-0" />
                <span>Client-Focused Service</span>
              </div>

            </div>

          </div>


          {/* RIGHT FEATURES */}
          <div className="grid gap-5">

            <div className="group bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-xl bg-[#002b5c] text-[#f0b84b] flex items-center justify-center flex-shrink-0">
                  <FaAward className="text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#002b5c]">
                    15+ Years of Experience
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    Practical experience in taxation, accounting,
                    business compliance and consultancy services.
                  </p>
                </div>

              </div>
            </div>


            <div className="group bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-xl bg-[#002b5c] text-[#f0b84b] flex items-center justify-center flex-shrink-0">
                  <FaHandshake className="text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#002b5c]">
                    Trusted Client Relationships
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    We believe in transparent communication,
                    professional support and long-term client relationships.
                  </p>
                </div>

              </div>
            </div>


            <div className="group bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-xl bg-[#002b5c] text-[#f0b84b] flex items-center justify-center flex-shrink-0">
                  <FaChartLine className="text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#002b5c]">
                    Business-Focused Solutions
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    Our services are designed to reduce compliance
                    burden and help clients focus on business growth.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}