export default function Stats() {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-5xl font-bold text-yellow-400">15+</h2>
            <p className="mt-2">Years of Experience</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-yellow-400">200+</h2>
            <p className="mt-2">Happy Clients</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-yellow-400">2500+</h2>
            <p className="mt-2">Returns Filed</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-yellow-400">100%</h2>
            <p className="mt-2">Client Satisfaction</p>
          </div>

        </div>
      </div>
    </section>
  );
}