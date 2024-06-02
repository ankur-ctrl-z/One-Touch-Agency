import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/onetouch_onblack_svg.svg';

const NavBar = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-gray-900 bg-opacity-95 shadow-lg text-white transition-all duration-300">
      <div className="container mx-auto flex flex-wrap py-1 flex-col md:flex-row items-center relative overflow-hidden">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-28 h-24 ml-2 rounded-lg transition-all duration-300" />
        </div>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-2xl justify-center">
          <Link to="/" className="nav-link mx-2 text-white">
            Home
          </Link>
          <Link to="/#about" className="nav-link mx-2 text-white">
            About Us
          </Link>
          <Link to="/#services" className="nav-link mx-2 text-white">
            Services
          </Link>
          <Link to="/#portfolio" className="nav-link mx-2 text-white">
            Portfolio
          </Link>
        </nav>

        <div className="flex items-center gap-1">
          <a href="https://www.instagram.com/onetouchagency_/" target="_blank" rel="noopener noreferrer" className="social-link mx-2 text-white">
            <FaInstagram className="text-3xl transition-colors duration-300 hover:text-pink-800" />
          </a>
          <a href="https://www.linkedin.com/company/one-touch-agency1/" target="_blank" rel="noopener noreferrer" className="social-link mx-2 text-white">
            <FaLinkedin className="text-3xl transition-colors duration-300 hover:text-blue-600" />
          </a>
          <a href="https://www.facebook.com/p/Onetouch-agency-100076203769169/" target="_blank" rel="noopener noreferrer" className="social-link mx-2 text-white">
            <FaFacebook className="text-3xl transition-colors duration-300 hover:text-blue-500" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="social-link mx-2 text-white">
            <FaTwitter className="text-3xl transition-colors duration-300 hover:text-blue-600" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;