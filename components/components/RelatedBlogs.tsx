import Link from "next/link";
import { blogs } from "@/data/blogs";

interface Props {
  currentSlug: string;
}

export default function RelatedBlogs({ currentSlug }: Props) {
  const related = blogs.filter(
    (blog) => blog.slug !== currentSlug
  );

  return (
    <section className="mt-20 border-t pt-12">
      <h2 className="text-3xl font-bold text-[#002b5c] mb-8">
        Related Articles
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="font-bold text-xl text-[#002b5c]">
              {blog.title}
            </h3>

            <p className="text-gray-600 mt-3">
              {blog.description}
            </p>

            <span className="text-blue-700 font-semibold mt-4 inline-block">
              Read More →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}