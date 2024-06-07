import { useState } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [service, setService] = useState('');

  const handleSubscribe = async () => {
    try {
      const response = await fetch('http://localhost:3001/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message, service }),
      });

      if (response.ok) {
        alert('Subscribed successfully!');
      } else {
        const responseData = await response.json();
        console.error('Response data:', responseData);
        alert('Subscription failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Subscription failed.');
    }
  };

  return (
    <div className="body-font bg-gray-900 relative" style={{ fontFamily: 'Adamina, serif' }}>
      <div className="container px-5 py-4 mx-auto">
        <hr style={{ border: '0.5px solid yellow', width: '100%' }} />
        <div className="w-full flex flex-col items-center">
          <h1 className="title-font text-3xl text-white tracking-widest mb-3 mt-5 font-bold" style={{ fontFamily: 'Chivo, sans-serif' }}>
            GET THE LATEST UPDATES
          </h1>
        </div>
        <div className='flex justify-end align-top text-white'>
          <p className='text-2xl pl-3'>
            <span className='text-3xl block mb-1 mt-22'>Address</span>
            <br />
            147-E, 1st Floor,<br />
            Panchratna<br />
            Building, Opera<br />
            House, Mumbai-<br />
            400004
            <br></br>
            <span className='block mt-10'>GSTIN/UIN: 27AJUPA4411G1ZD</span>
          </p>
        </div>
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 -mt-48">
            <h1 className="text-white text-3xl font-bold -mt-28" style={{ fontFamily: 'Chivo, sans-serif' }}>One Touch Agency</h1>
            <nav className="list-none mb-8 text-white text-2xl mt-8 space-y-2">
              <li>
                <a className="text-white hover:text-yellow-300" href="#home">Home</a>
              </li>
              <li>
                <a className="text-white hover:text-yellow-300" href="#about">About Us</a>
              </li>
              <li>
                <a className="text-white hover:text-yellow-300" href="#services">Services</a>
              </li>
              <li>
                <a className="text-white hover:text-yellow-300" href="#portfolio">Portfolio</a>
              </li>
            </nav>
            <div className="flex items-center text-white pt-5 -ml-2">
              <a href="https://www.instagram.com/onetouchagency_/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl mx-2 hover:text-pink-800" />
              </a>
              <a href="https://www.linkedin.com/company/one-touch-agency1/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl mx-2 hover:text-blue-600" />
              </a>
              <a href="https://www.facebook.com/p/Onetouch-agency-100076203769169/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl mx-2 hover:text-blue-500" />
              </a>
              <a href="https://x.com/onetouchagency3" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-3xl mx-2 hover:text-blue-600" />
              </a>
            </div>
          </div>
          <div className="w-full px-4 mt-10 flex flex-col items-center">
            <div className="flex flex-col items-center justify-center pd-10 -mt-64">
              <div className="relative w-40 sm:w-auto mb-4 ml-3">
                <p className="text-white text-xl mb-2">Input Your Email Address</p>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-80 sm:w-96 bg-gray-900 bg-opacity-50 rounded border border-yellow-400 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                onClick={handleSubscribe}
                className="flex-shrink-0 inline-flex text-black bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded mr-64">
                Subscribe
              </button>
            </div>
          </div>
          <hr style={{ border: '0.5px solid yellow', width: '100%' }} />
        </div>
        <div className='flex justify-center items-center text-white text-lg mt-3' style={{ marginBottom: '0', paddingBottom: '0' }}>
          <span className='mr-2'>@2024 OneTouch Agency</span>
          <span className='mr-2'>|</span>
          <span className='mr-2'>Designed by</span>
          <a href="https://www.unarrow.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">Unarrow Digital Solutions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;























