import type { Metadata } from "next";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PurchaseView from "@/components/PurchaseView";

// Private delivery page — every visit carries a signed ?order=&t= link.
export const metadata: Metadata = {
  title: "Your Purchase | Rajput Lalit & Associates",
  robots: { index: false, follow: false },
};

export default function PurchasePage() {
  return (
    <>
      <div className="print:hidden">
        <Navbar />
      </div>
      <main className="bg-[#f7f9fc] py-10 md:py-14 print:bg-white print:py-0">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Suspense
            fallback={
              <p className="flex items-center justify-center gap-2 py-20 text-gray-600">
                <Loader2 className="animate-spin" /> Loading your purchase…
              </p>
            }
          >
            <PurchaseView />
          </Suspense>
        </div>
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}
