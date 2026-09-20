import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";
import WhatsAppReferralButton from "@/components/WhatsAppReferralButton";
import { Users, ShieldCheck, Heart } from "lucide-react";

const PAGE_URL = "https://www.rajputlalitassociates.in/refer-a-friend";

export const metadata: Metadata = {
  title: "Refer a Friend | Rajput Lalit & Associates",
  description:
    "Know someone who needs help with GST, Income Tax, Accounting or Business Registration? Refer them to Rajput Lalit & Associates in one tap.",
  alternates: { canonical: "/refer-a-friend" },
  openGraph: {
    title: "Refer a Friend | Rajput Lalit & Associates",
    description:
      "Know someone who needs help with GST, Income Tax, Accounting or Business Registration? Refer them to Rajput Lalit & Associates in one tap.",
    url: PAGE_URL,
    siteName: "Rajput Lalit & Associates",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function ReferAFriendPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          title="Refer a Friend or Business Contact"
          subtitle="If someone you know needs help with GST, Income Tax, Accounting or Business Registration, a personal recommendation from you means more than any advertisement."
        />

        <Breadcrumb current="Refer a Friend" />

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
              <Users size={28} className="text-[#002b5c]" />
            </div>

            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-[#002b5c]">
              Know Someone Who Needs Us?
            </h2>

            <p className="mt-5 text-gray-600 text-lg leading-8">
              Many of our clients come to us because an existing client
              recommended us. If you know a friend, family member or business
              contact who needs help with GST registration, GST returns,
              Income Tax filing, TDS, accounting or company registration, feel
              free to pass on our details — we&apos;re always glad to help
              people you trust.
            </p>

            <div className="mt-9">
              <WhatsAppReferralButton location="refer_page" />
            </div>

            <div className="mt-14 grid sm:grid-cols-2 gap-6 text-left">
              <div className="bg-[#f7f9fc] border border-gray-200 rounded-2xl p-6">
                <ShieldCheck size={22} className="text-[#d99a2b]" />
                <p className="mt-3 font-bold text-[#002b5c]">
                  Same Professional Care
                </p>
                <p className="mt-2 text-sm text-gray-600 leading-6">
                  Anyone you refer receives the same accurate, professional
                  service every client of Rajput Lalit & Associates gets —
                  nothing less.
                </p>
              </div>

              <div className="bg-[#f7f9fc] border border-gray-200 rounded-2xl p-6">
                <Heart size={22} className="text-[#d99a2b]" />
                <p className="mt-3 font-bold text-[#002b5c]">
                  We Genuinely Appreciate It
                </p>
                <p className="mt-2 text-sm text-gray-600 leading-6">
                  Referrals are how a small, dedicated practice grows.
                  Whenever you refer someone, do let us know — we&apos;re
                  always happy to prioritize and personally thank clients who
                  send business our way.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
