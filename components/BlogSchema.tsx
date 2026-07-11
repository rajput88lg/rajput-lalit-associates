interface BlogSchemaProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  datePublished: string;
  author: string;
}

export default function BlogSchema({
  title,
  description,
  image,
  slug,
  datePublished,
  author,
}: BlogSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: title,
    description,
    image: `https://www.rajputlalitassociates.in${image}`,

    datePublished,
    dateModified: datePublished,

    author: {
      "@type": "Person",
      name: author,
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