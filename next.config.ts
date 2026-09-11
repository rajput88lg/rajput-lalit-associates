import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Purane "/services/..." URLs (HTML sitemap aur ek purane blog mein
  // link the) ka koi page exist nahi karta tha — 404 aata tha. Ab ye
  // sahi service pages par redirect hote hain, taaki visitors aur Google
  // dono ko broken link na mile.
  async redirects() {
    return [
      { source: "/services/gst-registration", destination: "/gst-registration", permanent: true },
      { source: "/services/gst-return-filing", destination: "/gst-return-filing", permanent: true },
      { source: "/services/income-tax-return", destination: "/income-tax-return-filing", permanent: true },
      { source: "/services/income-tax-return-filing", destination: "/income-tax-return-filing", permanent: true },
      { source: "/services/accounting", destination: "/accounting-bookkeeping-services", permanent: true },
      { source: "/services/msme-registration", destination: "/msme-registration", permanent: true },
      { source: "/services/company-incorporation", destination: "/company-registration", permanent: true },
      { source: "/services/company-registration", destination: "/company-registration", permanent: true },
      // TDS / PAN ka dedicated page abhi nahi hai — temporary redirect,
      // page banne par isse badal denge.
      { source: "/services/tds", destination: "/services", permanent: false },
      { source: "/services/tds-return-filing", destination: "/services", permanent: false },
      { source: "/services/pan-card", destination: "/services", permanent: false },
    ];
  },
};

export default nextConfig;
