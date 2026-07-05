"use client";

import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Amit Kumar",
    text: "Excellent service for GST return filing and accounting work. Professional and timely support.",
  },
  {
    name: "Rahul Sharma",
    text: "Very good experience with Rajput Lalit & Associates. Quick response and proper guidance for taxation matters.",
  },
  {
    name: "Prince Sales",
    text: "Reliable accounting and GST consultancy services. Highly recommended for business taxation work.",
  },
];

export default function GoogleReviews() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Client Testimonials
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 mt-3">
            Trusted by businesses and individuals for professional tax and
            accounting services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed">
                “{review.text}”
              </p>

              <div className="mt-5 border-t pt-4">
                <h3 className="font-bold text-gray-900">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-500">
                  Verified Client
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://share.google/GDC4uTSqNAa8cXrGR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Review us on Google
            <ExternalLink size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}