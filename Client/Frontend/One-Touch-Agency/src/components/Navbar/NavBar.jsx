import { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo1 from "../../assets/onetouch_onwhite_svg.svg";
import logo2 from "../../assets/onetouch_onblack_svg.svg";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900 bg-opacity-95 shadow-lg text-white"
          : "bg-white bg-opacity-10 backdrop-blur-sm text-black"
      }`}
    >
      <div className="container mx-auto flex flex-wrap py-1 flex-col md:flex-row items-center relative overflow-hidden">
        <div className="flex items-center">
          <img
            src={scrolled ? logo2 : logo1}
            alt="logo"
            className="w-28 h-24 ml-2 rounded-lg transition-all duration-300"
          />
        </div>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-2xl justify-center">
          <a
            href="#home"
            className={`nav-link mx-2 ${
              scrolled ? "text-white" : "text-black"
            }`}
            style={{ fontFamily: "Adamina, serif" }}
          >
            Home
          </a>
          <a
            href="#about"
            className={`nav-link mx-2 ${
              scrolled ? "text-white" : "text-black"
            }`}
            style={{ fontFamily: "Adamina, serif" }}
          >
            About Us
          </a>
          <a
            href="#services"
            className={`nav-link mx-2 ${
              scrolled ? "text-white" : "text-black"
            }`}
            style={{ fontFamily: "Adamina, serif" }}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className={`nav-link mx-2 ${
              scrolled ? "text-white" : "text-black"
            }`}
            style={{ fontFamily: "Adamina, serif" }}
          >
            Portfolio
          </a>
        </nav>

        <div className="flex items-center gap-1">
          <a
            href="https://www.instagram.com/onetouchagency_/"
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link mx-2 ${
              scrolled ? "text-white" : "text-black"
            }`}
          >
            <FaInstagram className="text-3xl transition-colors duration-300 hover:text-pink-800" />
          </a>
          <a
            href="https://www.linkedin.com/company/one-touch-agency1/"
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link mx-2 ${
              scrolled ? "text-white" : "text-black"
            }`}
          >
            <FaLinkedin className="text-3xl transition-colors duration-300 hover:text-blue-600" />
          </a>
          <a
            href="https://www.facebook.com/p/Onetouch-agency-100076203769169/"
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link mx-2 ${
              scrolled ? "text-white" : "text-black"
            }`}
          >
            <FaFacebook className="text-3xl transition-colors duration-300 hover:text-blue-500" />
          </a>
          <a
            href="https://x.com/onetouchagency3"
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link mx-2 ${
              scrolled ? "text-white" : "text-black"
            }`}
          >
            <FaTwitter className="text-3xl transition-colors duration-300 hover:text-blue-600" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
