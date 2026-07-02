export default function Map() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
          Visit Our Office
        </h2>

        <iframe
          src="https://www.google.com/maps?q=1805+Sector+9+Ambala+City+Haryana+134003&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>

      </div>
    </section>
  );
}