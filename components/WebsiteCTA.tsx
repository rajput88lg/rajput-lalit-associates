import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function WebsiteCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#002b5c] via-[#003d82] to-[#002b5c] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Ready to Grow Your Business Online?
        </h2>

        <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto leading-8">
          Get a professional, SEO-friendly and mobile responsive website
          designed for your business. Contact us today to discuss your
          requirements and receive a customized solution.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-14">

          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
            <h3 className="text-2xl font-bold text-[#d99a2b]">Fast Delivery</h3>
            <p className="mt-3 text-gray-200">
              Timely project completion with quality work.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
            <h3 className="text-2xl font-bold text-[#d99a2b]">SEO Optimized</h3>
            <p className="mt-3 text-gray-200">
              Built with best SEO practices to improve online visibility.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
            <h3 className="text-2xl font-bold text-[#d99a2b]">
              Ongoing Support
            </h3>
            <p className="mt-3 text-gray-200">
              Website maintenance and technical assistance after launch.
            </p>
          </div>

        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-5">

          <a
            href="tel:9354953603"
            className="bg-[#d99a2b] hover:bg-[#c88920] px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition"
          >
            <Phone size={22} />
            Call Now
          </a>

          <a
            href="https://wa.me/919354953603"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white hover:bg-white hover:text-[#002b5c] px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition"
          >
            <MessageCircle size={22} />
            WhatsApp Now
          </a>

        </div>

        <div className="mt-12 flex justify-center items-center gap-2 text-[#d99a2b] font-semibold">
          Let's Build Something Amazing Together
          <ArrowRight size={20} />
        </div>

      </div>
    </section>
  );
}