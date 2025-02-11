import { Instagram, Linkedin, Twitter } from "lucide-react";

const sections = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#" }, { name: "Software Development", href: "#" }, { name: "Chatbot Development", href: "#" }, { name: "Mobile App Development", href: "#" }, { name: "UI/UX Design", href: "#" }, { name: "Digital Marketing", href: "#" }, { name: "E-Commerce", href: "#" }, { name: "Data Analysis", href: "#" }, { name: "SEO", href: "#" }
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Our Team", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

const Footer2 = () => {
  return (
    <footer className="py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="./src/assets/images/logo.webp"
                  alt="Maval Logo"
                  className="h-16 opacity-75 mix-blend-multiply"
                  style={{
                    mask: 'radial-gradient(circle at center, black 30%, transparent 70%)',
                    WebkitMask: 'radial-gradient(circle at center, black 30%, transparent 70%)'
                  }}
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Transforming ideas into powerful digital solutions.
            </p>
          </div>

          {/* Navigation Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-gray-800 font-bold text-lg">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p> 2024 Maval. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-4 md:mt-0">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="hover:text-gray-900 transition duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Terms & Privacy */}
          <ul className="flex gap-4 mt-4 md:mt-0">
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
