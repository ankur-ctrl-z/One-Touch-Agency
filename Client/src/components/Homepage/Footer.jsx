import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import logo2 from "../../assets/onetouch_onblack_svg.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="w-full  bg-[#1b1918] "
   
    >
      {/* horizontal line */}
      <hr />

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* first div */}
        {/* <div className="h-20 w-20 mt-10">
          <img src={logo2} alt="" />
        </div> */}

        {/* second div */}
        <div className="flex flex-col justify-center items-center">
          {/* heading */}
          
          <h1
            className="text-white text-3xl mt-5 lg:text-2xl font-bold "
            style={{ fontFamily: "sans-serif,cursive " }}
          >
            One Touch Agency
          </h1>
          <p className="text-white font-medium text-center text-md mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit saepe
            sed quo!
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
            <span className="">27AJUPA4411G1ZD</span>
          </div>
        </div>

        {/* third div */}
        <div className="flex flex-col justify-center items-center -mt-1">
          {/* heading */}
          <h2 className="text-white text-2xl font-bold" >COMPANY</h2>

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
              portfolio
            </Link>

            <Link
              to={"/contactus"}
              className="text-white hover:text-yellow-300"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* fourth div */}
        
          {/* address1 */}
        <div className="flex flex-col mb-8 justify-center items-center mt-10">
          <div className="flex items-center justify-center -mt-8">
            <div className="flex gap-2  text-white">
              <div className="mt-2 md:mt-12 lg:mt-[1px] text-3xl"><ImLocation  /></div>
              <p className="text-lg lg:text-xl">
                <span className="text-3xl font-bold lg:text-3xl mb-1 sm:mt-10">
                 Address
                </span>
                <br />
                MUMBAI
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
                BANGLURU
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

      {/* horizontal line  */}
      <hr />

      <div className="text-gray-400 flex justify-center font-bold "
       style={{ fontFamily: "Adamina, serif" }}>
        <p className="mb-5 mt-2 font-serif text-xl"> @2024 One Touch Agency. </p>
        <p className="mb-5 mt-2 font-serif text-xl"> Designed By - <a href="https://www.unarrow.com/">Unarrow Digital Solutions</a></p>
       
      </div>
    </div>
  );
};

export default Footer;
