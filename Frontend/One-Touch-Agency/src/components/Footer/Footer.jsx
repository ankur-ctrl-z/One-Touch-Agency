import { useState } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeError, setSubscribeError] = useState("");
  const [subscribeSuccess, setSubscribeSuccess] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/subscribe", { email });
      setSubscribeSuccess("Email subscribed successfully!");
      setSubscribeError("");
      setEmail("");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setSubscribeError(error.response.data.error);
      } else {
        setSubscribeError("Something went wrong. Please try again later.");
      }
      setSubscribeSuccess("");
    }
  };

  return (
    <div className="w-full bg-gray-900 relative" style={{ fontFamily: 'Adamina, serif' }}>
      <div className="container px-5 py-4 mx-auto">
        {/* Break Line */}
        <hr className='mt-2' style={{ border: '0.5px solid yellow', width: '100%' }} />

        <div className="w-full flex text-center flex-col">
          <h1 className="title-font text-2xl lg:text-3xl text-white tracking-widest mb-3 mt-5 font-bold" style={{ fontFamily: 'Chivo, sans-serif' }}>
            GET THE LATEST UPDATES
          </h1>
        </div>

        <div className="flex items-center gap-20 flex-col md:flex-row md:justify-between lg:gap-40">
          {/* first div */}
          <div className="md:-mt-20 mt-20 mb-5 md:w-1/3">
            <h1 className="text-white lg:text-3xl text-[22px] font-bold md:mt-24 -mt-16" style={{ fontFamily: 'Chivo, sans-serif' }}>
              One Touch Agency
            </h1>
            {/* nav */}
            <nav className="list-none text-center md:text-start mb-8 text-white text-xl lg:text-2xl mt-8 space-y-2">
              <li>
                <a className="text-white hover:text-yellow-300" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="text-white hover:text-yellow-300" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-yellow-300"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-yellow-300"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
            </nav>

            {/* social icons */}
            <div className="flex items-center justify-center md:justify-start -ml-2 text-white">
              <a
                href="https://www.instagram.com/onetouchagency_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-3xl mx-2 hover:text-pink-800" />
              </a>
              <a
                href="https://www.linkedin.com/company/one-touch-agency1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-3xl mx-2 hover:text-blue-600" />
              </a>
              <a
                href="https://www.facebook.com/p/Onetouch-agency-100076203769169/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-3xl mx-2 hover:text-blue-500" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-3xl mx-2 hover:text-blue-600" />
              </a>
            </div>
          </div>

          {/* second div */}
<form onSubmit={handleSubscribe}>
  <div className="lg:w-1/3 text-center -mt-12 md:text-start">
    <div className="relative w-full mb-4">
      <p className="text-xl text-white mb-2">Enter Your Email Address</p>
      <input
        value={email}
        onChange={handleEmailChange}
        type="email"
        id="footer-field"
        name="footer-field"
        className="w-full lg:w-96 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
    <button className="flex-shrink-0 md:ml-0 md:w-28 text-center inline-flex text-black bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
      Subscribe
    </button>
    <div className="mt-2 flex justify-center md:justify-start">
      {subscribeError && <p className="text-red-500 text-center md:text-left">{subscribeError}</p>}
      {subscribeSuccess && <p className="text-green-500 text-center md:text-left">{subscribeSuccess}</p>}
    </div>
  </div>
</form>


          {/* third div */}
          <div className="lg:w-1/3 text-center -mt-8">
            <div className="flex align-top text-white">
              <p className="text-xl lg:text-2xl">
                <span className="text-3xl lg:text-3xl font-semibold block mb-1 sm:mt-10">Address</span>
                <br />
                147-E, 1st Floor,
                <br />
                Panchratna
                <br />
                Building, Opera
                <br />
                House, Mumbai-
                <br />
                400004
                <br />
                <span className="block mt-10">GSTIN/UIN: 27AJUPA4411G1ZD</span>
              </p>
            </div>
          </div>
        </div>

        {/* horizontal line */}
        <hr
          className="mt-12"
          style={{ border: "0.5px solid yellow", width: "100%" }}
        />

        <div
          className="flex justify-center items-center text-white text-sm md:text-lg mt-3"
          style={{ marginBottom: '0', paddingBottom: '0' }}
        >
          <p>@2024<span className='text-yellow-300'> OneTouch Agency</span> <span>Designed By -</span> <a
            href="https://www.unarrow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            <span className='text-yellow-300'>Unarrow Digital Solutions</span>
          </a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;























