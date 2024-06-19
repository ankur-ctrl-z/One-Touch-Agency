import { useState } from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");

  const handleSubscribe = async () => {
    try {
      const response = await fetch("https://www.api.onetouchagency.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message, service }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      alert("Subscribed successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Subscription failed.");
    }
  };

  return (
    <div
      className="w-full bg-gray-900 relative"
      style={{ fontFamily: "Adamina, serif" }}
    >
      <div className="container px-5 py-4 mx-auto">
        {/* Break Line */}
        <hr
          className="mt-2"
          style={{ border: "0.5px solid yellow", width: "100%" }}
        />

        <div className="w-full flex text-center flex-col">
          <h1
            className="title-font text-2xl lg:text-3xl text-white tracking-widest mb-3 mt-5 font-bold"
            style={{ fontFamily: "Chivo, sans-serif" }}
          >
            GET THE LATEST UPDATES
          </h1>
        </div>

        <div className="flex items-center gap-20 flex-col md:flex-row md:justify-between lg:gap-40">
          {/* first div */}
          <div className="md:-mt-20 mt-20 mb-5 md:w-1/3">
            <h1
              className="text-white text-[20px] lg:text-3xl font-bold -mt-16 md:mt-24"
              style={{ fontFamily: "Chivo, sans-serif" }}
            >
              One Touch Agency
            </h1>

            {/* nav */}
            <nav className="flex flex-col ml-10 sm:ml-0 text-2xl pt-10 pb-10">
              <a
                href="/"
                className="text-white"
                style={{ fontFamily: "Adamina, serif" }}
              >
                Home
              </a>

              <a
                href="/"
                className="text-white "
                style={{ fontFamily: "Adamina, serif" }}
              >
                About Us
              </a>

              <Link
                className="  text-white"
                style={{ fontFamily: "Adamina, serif" }}
                to={"/our-services-2"}
              >
                Services
              </Link>
              <Link
                className="text-white"
                style={{ fontFamily: "Adamina, serif" }}
                to={"/our-portfolio-2"}
              >
                Portfolio
              </Link>
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
           
              <a  href="https://x.com/onetouchagency3" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-3xl mx-2 hover:text-blue-600" />
              </a>
            </div>
          </div>

          {/* second div */}
          <div className="lg:w-1/3 text-center -mt-12 md:text-start ">
            <div className="relative w-full mb-4">
              <p className="text-xl text-white mb-2">
                Enter Your Email Address
              </p>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full lg:w-96 bg-gray-800 bg-opacity-50 rounded border-2 border-yellow-300 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button className="flex-shrink-0 md:ml-0 md:w-28 text-center inline-flex text-black bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
              Subscribe
            </button>
          </div>

          {/* third div */}
          <div className="lg:w-1/3 text-center -mt-8 lg:-ml-8 ">
            <div className="flex align-top  text-white">
              <p className="text-xl lg:text-2xl">
                <span className="text-3xl lg:text-3xl font-semibold block mb-1 sm:mt-10">
                  Address
                </span>
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
          style={{ marginBottom: "0", paddingBottom: "0" }}
        >
          <p>
            @2024<span className="text-yellow-300"> OneTouch Agency</span>{" "}
            <span>Designed By -</span>{" "}
            <a
              href="https://www.unarrow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              <span className="text-yellow-300">Unarrow Digital Solutions</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;


