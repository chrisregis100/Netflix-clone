import { useState } from "react";
import logo from "../../assets/logo.png";
import Bell from "../icons/Bell";
import ChevronDown from "../icons/ChevronDown";
import Search from "../icons/Search";
import { useEffect } from "react";

function HomeHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 text-lg ${
        isScrolled ? "bg-primary-dark" : "bg-gradient-to-b from-primary-dark/70"
      }`}
    >
      <div className="px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img src={logo} alt="Netflix" className="h-[40px] w-[148px]" />
          <div className="hidden md:flex gap-6">
            <a href="#" className="hover:text-primary/40">
              Home
            </a>
            <a href="#" className="hover:text-primary/40">
              TV Shows
            </a>
            <a href="#" className="hover:text-primary/40">
              Movies
            </a>
            <a href="#" className="hover:text-primary/40">
              New & Popular
            </a>
            <a href="#" className="hover:text-primary/40">
              My List
            </a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Search className="w-5 h-5 cursor-pointer" />
          <Bell className="w-5 h-5 cursor-pointer" />
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
              alt="Profile"
              className="w-8 h-8 rounded"
            />
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HomeHeader;
