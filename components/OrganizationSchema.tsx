export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AccountingService",
        "@id": "https://www.rajputlalitassociates.in/#organization",
        name: "Rajput Lalit & Associates",
        url: "https://www.rajputlalitassociates.in",
        logo: "https://www.rajputlalitassociates.in/logo.png",
        image: "https://www.rajputlalitassociates.in/logo.png",
        telephone: "+91-9354953603",
        email: "gst3603@gmail.com",
        priceRange: "₹₹",
        description:
          "Rajput Lalit & Associates provides GST Registration, GST Return Filing, Income Tax Return Filing, Accounting, TDS, MSME Registration, Company Registration and Tax Consultancy services across India.",

        address: {
          "@type": "PostalAddress",
          streetAddress: "#1805, Sector 9",
          addressLocality: "Ambala City",
          addressRegion: "Haryana",
          postalCode: "134003",
          addressCountry: "IN",
        },

        areaServed: {
          "@type": "Country",
          name: "India",
        },

        founder: {
          "@type": "Person",
          name: "Lalit Rajput",
        },

        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
        ],

        sameAs: [],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}