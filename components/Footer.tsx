export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Rajput Lalit & Associates
          </h2>

          <p className="text-gray-300">
            Your Trusted Partner for Tax, Accounting &
            Business Compliance.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Services
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>GST Services</li>
            <li>Income Tax</li>
            <li>Accounting</li>
            <li>Business Registration</li>
            <li>LEI Registration</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p>📞 +91 9354953603</p>
          <p>📧 rajput88lg@gmail.com</p>
          <p>📍 Ambala City, Haryana</p>
        </div>

      </div>

      <hr className="my-8 border-gray-700" />

      <div className="text-center text-gray-400">
        © 2026 Rajput Lalit & Associates. All Rights Reserved.
      </div>
    </footer>
  );
}