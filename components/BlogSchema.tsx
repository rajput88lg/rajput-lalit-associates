interface BlogSchemaProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  datePublished: string;
  author: string;
}

// blog.date aata hai human-readable format mein (jaise "12 September 2026"),
// lekin Google ka BlogPosting schema ek proper ISO 8601 datetime (timezone
// ke saath) maangta hai — warna Rich Results Test mein "Invalid datetime
// value" aur "missing a time zone" jaisi non-critical warnings aati hain.
// Ye function usi human date ko IST midnight ke ISO format mein convert
// karta hai, bina data/blogs.ts mein display wali date ko chhede.
function toISODateTime(humanDate: string): string {
  const parsed = new Date(humanDate);
  if (isNaN(parsed.getTime())) {
    // Parse fail ho jaaye (kabhi na kabhi format badal jaaye) to safe
    // fallback — original string hi bhej dein, page break nahi hoga.
    return humanDate;
  }
  const yyyy = parsed.getUTCFullYear();
  const mm = String(parsed.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(parsed.getUTCDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}T00:00:00+05:30`;
}

export default function BlogSchema({
  title,
  description,
  image,
  slug,
  datePublished,
  author,
}: BlogSchemaProps) {
  const isoDate = toISODateTime(datePublished);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: title,
    description,
    image: `https://www.rajputlalitassociates.in${image}`,

    datePublished: isoDate,
    dateModified: isoDate,

    author: {
      "@type": "Person",
      name: author,
      url: "https://www.rajputlalitassociates.in/about",
    },

    publisher: {
      "@type": "Organization",
      name: "Rajput Lalit & Associates",
      logo: {
        "@type": "ImageObject",
        url: "https://www.rajputlalitassociates.in/logo.png",
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.rajputlalitassociates.in/blog/${slug}`,
    },
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