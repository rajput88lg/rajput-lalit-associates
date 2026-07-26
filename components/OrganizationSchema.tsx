export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
  "@type": "Organization",
  "@id": "https://www.rajputlalitassociates.in/#organization",
  "name": "Rajput Lalit & Associates",
   "url": "https://www.rajputlalitassociates.in",
  "logo": "https://www.rajputlalitassociates.in/logo.png",
  image: "https://www.rajputlalitassociates.in/logo.png",
description:
  "Rajput Lalit & Associates is a professional accounting and tax consultancy firm providing GST, Income Tax, Accounting, Business Registration and Website Development services across India.",
  "email": "info@rajputlalitassociates.in",
  "founder": {
    "@type": "Person",
    "name": "Lalit Rajput"
  }
},
      {
  "@type": "AccountingService",
  "@id": "https://www.rajputlalitassociates.in/#accountingservice",

provider: {
  "@id": "https://www.rajputlalitassociates.in/#organization",
},
        name: "Rajput Lalit & Associates",
        url: "https://www.rajputlalitassociates.in",
        logo: "https://www.rajputlalitassociates.in/logo.png",
        image: "https://www.rajputlalitassociates.in/logo.png",
        email: "info@rajputlalitassociates.in",
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
    ],
    opens: "09:00",
    closes: "18:00",
  },
],

        sameAs: [
  "https://www.linkedin.com/in/lalit-rajput-b874a8157/",
  "https://www.facebook.com/deshinglallyg",
  "https://maps.app.goo.gl/XJzsuWudtty1zJrL8"
],
      },
      {
  "@type": "WebSite",
  "@id": "https://www.rajputlalitassociates.in/#website",
  "url": "https://www.rajputlalitassociates.in",
  "name": "Rajput Lalit & Associates",
  "description": "Professional GST, Income Tax, Accounting, Business Registration and Website Development Services across India.",
  "publisher": {
    "@id": "https://www.rajputlalitassociates.in/#organization"
  },
  "inLanguage": "en-IN"
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