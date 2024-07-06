import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import logo2 from "../../assets/onetouch_onblack_svg.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full  bg-gray-900 ">
      {/* horizontal line */}
      <div className="w-full -ml-5 md:-ml-6">
        <hr className="ml-12" style={{ border: "0.5px solid yellow" }} />
      </div>

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 mb-5">
        {/* first div */}
        <div className="flex flex-col justify-center items-center mt-5 mb-8">
          {/* heading */}

          <h1
            className="text-white text-3xl mt-5 lg:text-2xl font-bold "
            style={{ fontFamily: "sans-serif,cursive " }}
          >
            One Touch Agency
          </h1>
          <p className="text-white font-medium text-center text-md mt-5">
          One-stop solution for all your events and exhibitions 
          </p>

          {/* social icons */}
          <div className="flex mt-5 sm:mr-[1rem] items-center justify-center md:justify-start -ml-2 text-white">
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

          {/* gst number */}
          <div className="text-white mt-5 mb-2">
            <span className="font-bold" style={{ fontFamily: "sans-serif" }}>
              GSTIN/UIN :
            </span>{" "}
            <span className="">27AJUPA4411G1ZD</span> <br />
            <span className="font-bold" style={{ fontFamily: "sans-serif" }}>
              Phone No. :
            </span>{" "}
            <span className="">+91 7021377482</span>
          </div>
        </div>

        {/* second div */}
        <div className="flex flex-col justify-center items-center mt-5 mb-8">
          {/* heading */}
          <h2 className="text-white text-2xl font-bold">COMPANY</h2>

          {/* footer navlinks */}
          <nav className="flex text-lg flex-col  text-center md:text-start mb-8 text-white lg:text-xl mt-4 space-y-2">
            <Link to={"/"} className="text-white hover:text-yellow-300">
              Home
            </Link>

            <Link
              to={"/services2"}
              className="text-white hover:text-yellow-300"
            >
              Services
            </Link>

            <Link
              to={"/portfolio2"}
              className="text-white hover:text-yellow-300"
            >
              Portfolio
            </Link>

            <Link
              to={"/contactus"}
              className="text-white hover:text-yellow-300"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* thid div */}

        {/* address1 */}
        <div className="flex flex-col mb-8 justify-center items-center mt-8">
          <div className="flex items-center justify-center -mt-8">
            <div className="flex gap-2  text-white">
              <div className="mt-2 md:mt-12 lg:mt-[1px] text-3xl">
                <ImLocation />
              </div>
              <p className="text-lg lg:text-xl">
              <h2 className="text-white text-2xl font-bold">ADDRESS</h2>
                {/* <span className="text-2xl font-bold lg:text-2xl  sm:mt-10">
                  ADDRESS
                </span> */}
               
                <br />
                <strong>MUMBAI</strong>
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
              </p>
            </div>
          </div>
        </div>

        {/* fifth div */}
        {/* address -2  */}
        <div className="flex items-center justify-center -mt-6">
          <div className="flex gap-2 text-white">
            {/* <div className="mt-2 md:mt-12 lg:mt-[1px] text-3xl"><ImLocation  /></div> */}
            <p className="text-lg lg:text-xl">
              <br />
              <br />
              <strong>BANGALORE</strong>
              <br />
              No. 49,
              <br />
              3rd Main Road,
              <br />
              5th Cross, Chamarajpet
              <br />
              Near Corporation Bank, 
              <br />
              Bangalore - 560018
              <br />
            </p>
          </div>
        </div>
      </div>

      {/* horizontal line  */}
      <div className="w-full -ml-5 md:-ml-6">
        <hr className="ml-12" style={{ border: "0.5px solid yellow" }} />
      </div>

      <div
        className="flex flex-col ml-2 mr-2 text-gray-400 sm:flex justify-center items-center font-bold "
        style={{ fontFamily: "Adamina, serif" }}
      >
        <div className="mb-5 mt-2 font-serif text-lg">
          {" "}
          @2024 One Touch Agency. Designed By -{" "}
          <a href="https://www.unarrow.com/">Unarrow Digital Solutions</a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
