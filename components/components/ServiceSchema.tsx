interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  dateModified?: string;
}

// 20 Sept 2026 — "dateModified" add kiya E-E-A-T/freshness signal ke liye
// (blogs par pehle se hai, service pages par nahi tha). Har page apni
// exact last-edit date pass kar sakta hai; agar na de to ye default date
// use hoti hai (jab ye technical/schema upgrade batch apply hua tha).
const DEFAULT_LAST_REVIEWED = "2026-09-20";

export default function ServiceSchema({
  name,
  description,
  url,
  dateModified = DEFAULT_LAST_REVIEWED,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    dateModified,
    provider: {
      "@id": "https://www.rajputlalitassociates.in/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: name,
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