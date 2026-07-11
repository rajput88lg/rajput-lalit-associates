import {
  Atom,
  Database,
  Server,
  Globe,
  Search,
  ShieldCheck,
  Smartphone,
  Rocket,
  Code2,
  Cloud,
  Mail,
  CreditCard,
} from "lucide-react";

const technologies = [
  {
    icon: <Atom size={40} />,
    title: "Next.js",
    desc: "Modern React framework for high-performance websites.",
  },
  {
    icon: <Code2 size={40} />,
    title: "React",
    desc: "Interactive and responsive user interfaces.",
  },
  {
    icon: <Server size={40} />,
    title: "Node.js",
    desc: "Powerful backend development for scalable applications.",
  },
  {
    icon: <Database size={40} />,
    title: "PostgreSQL / MySQL",
    desc: "Secure and reliable database solutions.",
  },
  {
    icon: <Cloud size={40} />,
    title: "Vercel Deployment",
    desc: "Fast and secure global website hosting.",
  },
  {
    icon: <Search size={40} />,
    title: "SEO Optimization",
    desc: "Improve visibility on Google Search.",
  },
  {
    icon: <Smartphone size={40} />,
    title: "Mobile Responsive",
    desc: "Optimized for phones, tablets and desktops.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Website Security",
    desc: "SSL, backups and security best practices.",
  },
  {
    icon: <Mail size={40} />,
    title: "Business Email",
    desc: "Professional email setup for your company.",
  },
  {
    icon: <CreditCard size={40} />,
    title: "Payment Integration",
    desc: "Secure online payment integration where appropriate.",
  },
  {
    icon: <Globe size={40} />,
    title: "Google Business Profile",
    desc: "Improve local business visibility.",
  },
  {
    icon: <Rocket size={40} />,
    title: "Performance",
    desc: "Fast loading websites optimized for Core Web Vitals.",
  },
];

export default function Technologies() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="bg-blue-100 text-[#002b5c] px-5 py-2 rounded-full font-semibold">
            Modern Technologies
          </span>

          <h2 className="text-5xl font-extrabold text-[#002b5c] mt-6">
            Technologies We Use
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We build websites using modern technologies that deliver
            performance, security and scalability.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16">

          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-[#002b5c] text-white flex items-center justify-center mb-6">
                {tech.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#002b5c]">
                {tech.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {tech.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}