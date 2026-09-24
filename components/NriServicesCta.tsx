import Link from "next/link";

/** Shown under each free NRI tool — turns a calculator result into a next step. */
export default function NriServicesCta() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-[#002b5c] text-white rounded-2xl p-8 md:p-10 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-extrabold">Want us to handle this for you?</h2>
          <p className="mt-4 text-blue-100 leading-7">
            NRI income tax returns from ₹5,000, property-sale TDS refunds, Form 128 lower TDS
            certificates and money transfers abroad — fully online, with fees shown upfront.
          </p>
          <Link
            href="/nri-tax-services"
            className="mt-6 inline-flex items-center justify-center bg-[#147438] hover:bg-[#0f5429] text-white px-8 py-3 rounded-lg font-bold transition"
          >
            See NRI services &amp; fees →
          </Link>
        </div>
      </div>
    </section>
  );
}
