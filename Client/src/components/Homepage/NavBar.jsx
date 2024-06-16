import { useState, useEffect } from 'react';
 import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo1 from '../../assets/onetouch_onwhite_svg.svg';
import logo2 from '../../assets/onetouch_onblack_svg.svg';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

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
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex -ml-[13rem] lg:ml-16 md:-ml-4">
          <img
            src={scrolled ? logo2 : logo1}
            alt="logo"
            className="w-28 h-24 ml-2 rounded-lg transition-all duration-300"
          />
        </div>

        <nav className="hidden md:block md:ml-9 md:mt-4 md:mr-auto lg:mt-1 lg:ml-[22rem] flex-wrap items-center text-xl md:text-2xl justify-center">
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

        <div className="social hidden md:flex gap-1 mt-3 text-white items-center lg:ml-[15rem] md:ml-8">
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


        {/* for small devices */}
        <div className="-mt-5 h-[2rem] text-white  mx-auto">
          <div
            onClick={navHandler}
            className="md:hidden font-bold text-white -mt-14 ml-[16rem] text-4xl"
          >
            {nav ? (
              <div className="ml-1">
                <RxCross2 />
              </div>
            ) : (
              <div className='mt-2'>
                {" "}
                <IoMenu />
              </div>
            )}
          </div>
          {nav && (
            <ul
              className="w-[85rem] md:hidden transition-all duration-75 text-white bg-opacity-95 rounded-md"
              style={{ fontFamily: "Adamina, serif" }}
            >

              <nav className="flex md:ml-auto ml-2 md:mr-auto -mt-8 flex-wrap text-[1rem] ">
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
                  href="#"
                  className={`nav-link lg:mx-4 ${
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
                  className={`nav-link mx-1 lg:mx-4 ${
                    scrolled ? "text-white" : "text-white"
                  }`}
                  style={{ fontFamily: "Adamina, serif" }}
                  to={"/our-portfolio-2"}
                >
                  Portfolio
                </Link>
              </nav>

              {/* social icons */}
              <div className="flex ml-11 gap-1 mt-5 text-white lg:mr-2">
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
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;


