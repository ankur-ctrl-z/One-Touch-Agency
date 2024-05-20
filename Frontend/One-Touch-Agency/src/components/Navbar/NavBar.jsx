import { useState, useEffect } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/R.png';

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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? ' bg-gray-900 bg-opacity-95 shadow-lg text-white' : 'bg-white bg-opacity-10 backdrop-blur-sm text-black'
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-14 h-14 rounded-full bg-indigo-500 ml-2" />
        </div>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-center">
          <a className="nav-link mr-8">Home</a>
          <a className="nav-link mr-8">About Us</a>
          <a className="nav-link mr-8">Services</a>
          <a className="nav-link mr-8">Portfolio</a>
        </nav>

        <div className="flex items-center">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl mx-2 hover:text-pink-800" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl mx-2 hover:text-blue-600" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-3xl mx-2 hover:text-blue-500" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-3xl mx-2 hover:text-blue-600" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;








