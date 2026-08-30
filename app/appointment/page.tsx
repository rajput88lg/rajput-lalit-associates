import Link from "next/link";
import {
  CheckCircle2,
  Clock3,
  CreditCard,
  LockKeyhole,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Book Website Discussion | Rajput Lalit & Associates",
  description:
    "Book a professional website discussion with Rajput Lalit & Associates for ₹999.",
};

export default function AppointmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white px-6 py-16">
      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-[#002b5c]">
            Website Development Consultation
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#002b5c] md:text-5xl">
            Discuss Your Website Project With an Expert
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Book a focused discussion for your business website, features,
            design, SEO requirements and estimated project scope.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Understand your business requirements",
              "Discuss pages, features and design",
              "Get practical SEO guidance",
              "Receive a clear next-step plan",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-4 shadow-sm"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[#d99a2b]"
                  size={20}
                />
                <p className="font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <div className="flex items-start gap-3">
              <LockKeyhole className="mt-1 shrink-0 text-[#d99a2b]" size={22} />
              <div>
                <h2 className="font-bold text-[#002b5c]">
                  Contact Details Unlock After Payment
                </h2>
                <p className="mt-2 leading-7 text-gray-700">
                  For privacy, direct phone and WhatsApp details are shared
                  only after payment is successfully verified.
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl">
          <div className="flex items-center justify-between border-b border-gray-100 pb-5">
            <div>
              <p className="text-sm font-semibold text-gray-500">
                Website Discussion Fee
              </p>
              <p className="mt-1 text-4xl font-extrabold text-[#002b5c]">
                ₹999
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-3 text-[#002b5c]">
              <MessageSquareText size={28} />
            </div>
          </div>

          <div className="mt-6 space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <Clock3 className="text-[#d99a2b]" size={20} />
              <span>Professional discussion by appointment</span>
            </div>

            <div className="flex items-center gap-3">
              <CreditCard className="text-[#d99a2b]" size={20} />
              <span>Secure online payment</span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#d99a2b]" size={20} />
              <span>Payment verified before contact unlock</span>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-gray-50 p-4 text-sm leading-6 text-gray-600">
            After payment verification, you will receive the direct contact
            details and appointment confirmation.
          </div>

          <button
            type="button"
            disabled
            className="mt-8 flex w-full cursor-not-allowed items-center justify-center rounded-xl bg-[#d99a2b] px-6 py-4 font-bold text-white opacity-70"
          >
            Secure Payment Setup in Progress
          </button>

          <Link
            href="/"
            className="mt-5 block text-center text-sm font-semibold text-[#002b5c] hover:underline"
          >
            Back to Home
          </Link>
        </aside>
      </section>
    </main>
  );
}