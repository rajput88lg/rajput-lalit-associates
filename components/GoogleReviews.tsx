"use client";

import {
  Star,
  ExternalLink,
  Quote,
  BadgeCheck,
} from "lucide-react";

const reviews = [
  {
    name: "Amit Kumar",
    initial: "A",
    text: "Excellent service for GST return filing and accounting work. Professional and timely support.",
  },
  {
    name: "Rahul Sharma",
    initial: "R",
    text: "Very good experience with Rajput Lalit & Associates. Quick response and proper guidance for taxation matters.",
  },
  {
    name: "Prince Sales",
    initial: "P",
    text: "Reliable accounting and GST consultancy services. Highly recommended for business taxation work.",
  },
];

export default function GoogleReviews() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24">

      {/* BACKGROUND DECORATION */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-[#002b5c]/5 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#d99a2b]/10 rounded-full blur-3xl" />


      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADING */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-[#d99a2b] font-bold tracking-[0.2em] uppercase text-sm">
            Client Testimonials
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#002b5c]">
            What Our Clients Say
          </h2>

          <div className="w-20 h-1 bg-[#d99a2b] mx-auto mt-5 rounded-full" />

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Trusted by individuals and businesses for professional
            tax, accounting and compliance support.
          </p>

        </div>


        {/* GOOGLE RATING STRIP */}

        <div className="mt-10 max-w-3xl mx-auto bg-[#f7f9fc] border border-gray-200 rounded-2xl px-6 py-5 shadow-sm">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center text-2xl font-extrabold">

                <span className="text-blue-600">G</span>

              </div>


              <div>

                <p className="font-extrabold text-[#002b5c] text-lg">
                  Client Reviews
                </p>

                <div className="flex items-center gap-1 mt-1">

                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className="fill-[#f0b84b] text-[#f0b84b]"
                    />
                  ))}

                </div>

              </div>

            </div>


            <a
              href="https://share.google/GDC4uTSqNAa8cXrGR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#002b5c] hover:bg-[#06477f] text-white px-5 py-3 rounded-lg font-bold transition"
            >
              View on Google
              <ExternalLink size={17} />
            </a>

          </div>

        </div>


        {/* REVIEW CARDS */}

        <div className="mt-10 grid md:grid-cols-3 gap-7">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* QUOTE ICON */}

              <div className="absolute top-5 right-5 text-[#d99a2b]/15">
                <Quote size={50} fill="currentColor" />
              </div>


              {/* STARS */}

              <div className="flex gap-1">

                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={19}
                    className="fill-[#f0b84b] text-[#f0b84b]"
                  />
                ))}

              </div>


              {/* REVIEW TEXT */}

              <p className="relative mt-6 text-gray-600 leading-8 min-h-[128px]">
                “{review.text}”
              </p>


              {/* CLIENT */}

              <div className="mt-6 pt-5 border-t border-gray-200 flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#002b5c] to-[#06477f] text-white flex items-center justify-center font-extrabold text-lg shadow-md">

                  {review.initial}

                </div>


                <div>

                  <h3 className="font-extrabold text-[#002b5c]">
                    {review.name}
                  </h3>

                  <div className="flex items-center gap-1.5 mt-1 text-sm text-gray-500">

                    <BadgeCheck
                      size={16}
                      className="text-[#d99a2b]"
                    />

                    Client Review

                  </div>

                </div>

              </div>


              {/* HOVER LINE */}

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#d99a2b] to-[#f0b84b] group-hover:w-full transition-all duration-500" />

            </div>
          ))}

        </div>


        {/* BOTTOM CTA */}

        <div className="mt-12 text-center">

          <p className="text-gray-600 mb-5">
            Have you worked with Rajput Lalit & Associates?
            Your feedback helps us improve our services.
          </p>

          <a
            href="https://share.google/GDC4uTSqNAa8cXrGR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#d99a2b] hover:bg-[#f0b84b] text-white px-7 py-3.5 rounded-lg font-bold transition shadow-lg"
          >
            Review Us on Google
            <ExternalLink size={18} />
          </a>

        </div>

      </div>
    </section>
  );
}