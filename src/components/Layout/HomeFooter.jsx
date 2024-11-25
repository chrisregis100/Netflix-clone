import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    about: ["About Netflix", "Jobs", "For Investors", "Ways to Watch"],
    help: ["Help Center", "Account", "Media Center", "Contact Us"],
    legal: [
      "Privacy",
      "Terms of Use",
      "Cookie Preferences",
      "Corporate Information",
    ],
    related: ["Gift Cards", "Netflix Shop", "Speed Test", "Legal Notices"],
  };

  return (
    <footer className="bg-black text-gray-400 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Social Media Links */}
        <div className="flex gap-6 mb-8">
          <Facebook className="w-6 h-6 cursor-pointer hover:text-white transition" />
          <Instagram className="w-6 h-6 cursor-pointer hover:text-white transition" />
          <Twitter className="w-6 h-6 cursor-pointer hover:text-white transition" />
          <Youtube className="w-6 h-6 cursor-pointer hover:text-white transition" />
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:underline hover:text-white transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Code Button */}
        <button className="mt-8 mb-6 border border-gray-400 px-4 py-2 text-sm hover:text-white transition">
          Service Code
        </button>

        {/* Copyright */}
        <p className="text-sm">© {new Date().getFullYear()} Netflix, Inc.</p>
      </div>
    </footer>
  );
}
