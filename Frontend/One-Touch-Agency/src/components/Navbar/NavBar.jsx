import { useState, useEffect } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo1 from '../../assets/onetouch_onwhite_svg.svg';
import logo2 from '../../assets/onetouch_onblack_svg.svg';



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
    scrolled ? 'bg-gray-900 bg-opacity-95 shadow-lg rounded-xl text-white' : 'bg-white bg-opacity-10 backdrop-blur-sm text-black rounded-xl'
  }`}
>
  <div className="container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center">
    <div className="flex items-center">
      <img src={logo1} alt="logo" className="w-20 h-16 ml-2 rounded-lg" />
    </div>

    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-center">
      <a href='#home' className="nav-link mx-2">Home</a>
      <a href='#about' className="nav-link mx-2">About Us</a>
      <a href='#services' className="nav-link mx-2">Services</a>
      <a href='#portfolio' className="nav-link mx-2">Portfolio</a>
    </nav>

    <div className="flex items-center">
      <a href="https://www.instagram.com/onetouchagency_/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-2xl mx-2 hover:text-pink-800" />
      </a>
      <a href="https://www.linkedin.com/company/one-touch-agency1/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-2xl mx-2 hover:text-blue-600" />
      </a>
      <a href="https://www.facebook.com/p/Onetouch-agency-100076203769169/" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-2xl mx-2 hover:text-blue-500" />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-2xl mx-2 hover:text-blue-600" />
      </a>
    </div>
  </div>
</header>

  );
};

export default NavBar;








