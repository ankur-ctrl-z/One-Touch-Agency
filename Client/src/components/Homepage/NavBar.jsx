import { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo1 from "../../assets/onetouch_onwhite_svg.svg";
import logo2 from "../../assets/onetouch_onblack_svg.svg";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const navHandler = () => {
    setNav(!nav);
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
          ? "bg-gray-950 bg-opacity-95 shadow-lg text-white"
          : "bg-white bg-opacity-10 backdrop-blur-lg text-black rounded-xl"
      }`}
    >
      <div className="sm:flex flex-wrap">
        <div className="flex -mt-5">
          <img
            src={scrolled ? logo2 : logo1}
            alt="logo"
            className="w-28 h-28 ml-2 rounded-lg transition-all duration-300"
          />
        </div>

        <nav className="hidden md:block sm:mt-7 lg:mr-10 sm:ml-auto sm:mr-auto items-center text-xl md:text-2xl justify-center">
          <a
            href="/"
            className={`nav-link mx-2 lg:mx-4 ${
              scrolled ? "text-white" : "text-white"
            }`}
            style={{ fontFamily: "Adamina, serif" }}
          >
            Home
          </a>
          
          <Link to={'/contactus'}
          className={`nav-link mx-2 lg:mx-4 ${
              scrolled ? "text-white" : "text-white"
            }`}
            style={{ fontFamily: "Adamina, serif" }}
          >
            Contact Us
          </Link>

          <Link
            className={`nav-link mx-2 lg:mx-4 ${
              scrolled ? "text-white" : "text-white"
            }`}
            style={{ fontFamily: "Adamina, serif" }}
            to={"/services2"}
          >
            Services
          </Link>

          <Link
            className={`nav-link mx-2 lg:mx-4 ${
              scrolled ? "text-white" : "text-white"
            }`}
            style={{ fontFamily: "Adamina, serif" }}
            to={"/portfolio2"}
          >
            Portfolio
          </Link>

        </nav>

        <div className="hidden md:flex gap-1 sm:mt-7 sm:ml-auto lg:mr-10 sm:mr-auto text-white ">
          <a
            href="https://www.instagram.com/onetouchagency_/"
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link mx-2 ${
              scrolled ? "text-white" : "text-yellow-300"
            }`}
          >
            <FaInstagram className="text-3xl transition-colors duration-300 hover:text-pink-800 " />
          </a>
          <a
            href="https://www.linkedin.com/company/one-touch-agency1/"
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link mx-2 ${
              scrolled ? "text-white" : "text-yellow-300"
            }`}
          >
            <FaLinkedin className="text-3xl transition-colors duration-300 hover:text-blue-600 " />
          </a>
          <a
            href="https://www.facebook.com/p/Onetouch-agency-100076203769169/"
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link mx-2 ${
              scrolled ? "text-white" : "text-yellow-300"
            }`}
          >
            <FaFacebook className="text-3xl transition-colors duration-300 hover:text-blue-500 " />
          </a>
          <a
            href="https://x.com/onetouchagency3"
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link mx-2 ${
              scrolled ? "text-white" : "text-yellow-300"
            }`}
          >
            <FaTwitter className="text-3xl transition-colors duration-300 hover:text-blue-600 " />
          </a>
        </div>
      </div>


      {/* for small devices  */}
      <div className="py-2 px-2 sm:hidden">
        <div
          onClick={navHandler}
          className="flex justify-end mr-5 -mt-[4.4rem] text-white font-bold text-4xl "
        >
          {nav ? (
            <div className="font-bold">
              <RxCross2 />
            </div>
          ) : (
            <div>
              <IoMenu />
            </div>
          )}
        </div>

        <div className="mt-2">
          {nav && (
            <div className="flex flex-col gap-2 ">
              {/* nav bar */}
              <nav className="flex items-center justify-center sm:mt-10 lg:mr-10 sm:ml-auto sm:mr-auto text-lg md:text-2xl">
                <a
                  href="/"
                  className={`nav-link mx-2 lg:mx-4 ${
                    scrolled ? "text-white" : "text-white"
                  }`}
                  style={{ fontFamily: "Adamina, serif" }}
                >
                  Home
                </a>
                <a
                  href="/"
                  className={`nav-link mx-2 lg:mx-4 ${
                    scrolled ? "text-white" : "text-white"
                  }`}
                  style={{ fontFamily: "Adamina, serif" }}
                >
                  About Us
                </a>
                <Link
                  className={`nav-link mx-2 lg:mx-4 ${
                    scrolled ? "text-white" : "text-white"
                  }`}
                  style={{ fontFamily: "Adamina, serif" }}
                  to={"/our-services-2"}
                >
                  Services
                </Link>
                <Link
                  className={`nav-link mx-2 lg:mx-4 ${
                    scrolled ? "text-white" : "text-white"
                  }`}
                  style={{ fontFamily: "Adamina, serif" }}
                  to={"/our-portfolio-2"}
                >
                  Portfolio
                </Link>
              </nav>
              
              {/*social icons */}

              <div className="flex items-center justify-center gap-1 sm:mt-10 sm:ml-auto lg:mr-10 sm:mr-auto text-white ">
                <a
                  href="https://www.instagram.com/onetouchagency_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link mx-2 ${
                    scrolled ? "text-white" : "text-yellow-300"
                  }`}
                >
                  <FaInstagram className="text-3xl transition-colors duration-300 hover:text-pink-800 " />
                </a>
                <a
                  href="https://www.linkedin.com/company/one-touch-agency1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link mx-2 ${
                    scrolled ? "text-white" : "text-yellow-300"
                  }`}
                >
                  <FaLinkedin className="text-3xl transition-colors duration-300 hover:text-blue-600 " />
                </a>
                <a
                  href="https://www.facebook.com/p/Onetouch-agency-100076203769169/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link mx-2 ${
                    scrolled ? "text-white" : "text-yellow-300"
                  }`}
                >
                  <FaFacebook className="text-3xl transition-colors duration-300 hover:text-blue-500 " />
                </a>
                <a
                  href="https://x.com/onetouchagency3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link mx-2 ${
                    scrolled ? "text-white" : "text-yellow-300"
                  }`}
                >
                  <FaTwitter className="text-3xl transition-colors duration-300 hover:text-blue-600 " />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>


    </header>
  );
};

export default NavBar;
