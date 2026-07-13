interface PageHeroProps {
  title: string;
  subtitle: string;
}

export default function PageHero({
  title,
  subtitle,
}: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-r from-[#002b5c] to-[#06477f] py-28 overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">

        <p className="uppercase tracking-[0.3em] text-[#f0b84b] font-semibold">
          Rajput Lalit & Associates
        </p>

        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100 leading-8">
          {subtitle}
        </p>

      </div>
    </section>
  );
}