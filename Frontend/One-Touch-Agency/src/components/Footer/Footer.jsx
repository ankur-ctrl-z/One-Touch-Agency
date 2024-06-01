import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="body-font bg-gray-900">
      <div className="container px-5 py-20 mx-auto">
        {/* Break Line */}
        <hr style={{ border: '0.5px solid yellow', width: '100%' }} />
        <div className="w-full flex flex-col items-center">
          <h1 className="title-font text-3xl text-white tracking-widest mb-3 mt-5 font-bold">
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
            <h1 className="text-white text-3xl font-bold -mt-28">One Touch Agency</h1>
            <nav className="list-none mb-8 text-white text-2xl mt-8 space-y-2">
              <li>
                <a className="text-white hover:text-yellow-500" href="#home">Home</a>
              </li>
              <li>
                <a className="text-white hover:text-yellow-500" href="#about">About Us</a>
              </li>
              <li>
                <a className="text-white hover:text-yellow-500" href="#services">Services</a>
              </li>
              <li>
                <a className="text-white hover:text-yellow-500" href="#portfolio">Portfolio</a>
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
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-3xl mx-2 hover:text-blue-600" />
              </a>
            </div>
          </div>
          <div className="w-full px-4 mt-10 flex flex-col items-center">
            <div className="flex flex-col items-center justify-center pd-10 -mt-64">
              <div className="relative w-40 sm:w-auto mb-4 ml-3">
                <p className="text-white mb-2">Email Address :-</p>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-80 sm:w-96 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="flex-shrink-0 inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded mr-64">
                Subscribe
              </button>
            </div>
          </div>
          <hr style={{ border: '0.5px solid yellow', width: '100%' }} />
        </div>
        <div className='flex justify-center text-white text-lg mt-3'>@2024 OneTouch Agency</div>
      </div>
    </div>
  );
};

export default Footer;







