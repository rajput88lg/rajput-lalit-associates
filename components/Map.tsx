import {
  FaMapMarkerAlt,
  FaDirections,
  FaClock,
} from "react-icons/fa";

export default function Map() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-20 md:py-24">

      {/* BACKGROUND DECORATION */}

      <div className="absolute top-0 right-0 w-80 h-80 bg-[#002b5c]/5 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#d99a2b]/10 rounded-full blur-3xl" />


      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADING */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-[#d99a2b] font-bold tracking-[0.2em] uppercase text-sm">
            Our Location
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#002b5c]">
            Visit Our Office
          </h2>

          <div className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Visit Rajput Lalit & Associates for professional
            Tax, Accounting and Business Compliance assistance.
          </p>

        </div>


        {/* MAP CARD */}

        <div className="mt-14 bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden">

          <div className="grid lg:grid-cols-[0.75fr_1.25fr]">


            {/* LEFT LOCATION INFO */}

            <div className="relative overflow-hidden bg-gradient-to-br from-[#001d40] via-[#002b5c] to-[#06477f] text-white p-8 md:p-10">

              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border-[45px] border-white/[0.04]" />


              <div className="relative">

                <div className="w-16 h-16 rounded-2xl bg-[#d99a2b] flex items-center justify-center shadow-lg">

                  <FaMapMarkerAlt className="text-3xl" />

                </div>


                <h3 className="mt-6 text-3xl font-extrabold">
                  Rajput Lalit & Associates
                </h3>


                <p className="mt-5 text-blue-100 leading-8">
                  1805, Sector-9,
                  <br />
                  Ambala City,
                  <br />
                  Haryana - 134003
                </p>


                <div className="mt-7 pt-7 border-t border-white/20">

                  <div className="flex items-start gap-3">

                    <FaClock className="text-[#f0b84b] mt-1 flex-shrink-0" />

                    <div>

                      <p className="font-bold">
                        Office Hours
                      </p>

                      <p className="mt-2 text-blue-100 text-sm leading-6">
                        Monday – Friday
                        <br />
                        10:00 AM – 6:00 PM
                        <br />
                        Saturday & Sunday: Closed
                      </p>

                    </div>

                  </div>

                </div>


                <a
                  href="https://www.google.com/maps/search/?api=1&query=1805+Sector+9+Ambala+City+Haryana+134003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-6 py-3.5 rounded-lg font-bold transition shadow-lg"
                >
                  <FaDirections />
                  Get Directions
                </a>

              </div>

            </div>


            {/* RIGHT MAP */}

            <div className="relative min-h-[450px]">

              <iframe
                src="https://www.google.com/maps?q=1805+Sector+9+Ambala+City+Haryana+134003&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  position: "absolute",
                  inset: 0,
                }}
                loading="lazy"
                title="Rajput Lalit & Associates Office Location"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}