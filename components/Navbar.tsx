import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">

  <Image
    src="/logo.png"
    alt="Rajput Lalit & Associates"
    width={60}
    height={60}
  />

  <div>
    <h1 className="text-2xl font-bold">
      Rajput Lalit & Associates
    </h1>

    <p className="text-sm text-gray-200">
      GST • Income Tax • Accounting
    </p>
  </div>

</div>

        <ul className="hidden md:flex gap-8 font-medium">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}