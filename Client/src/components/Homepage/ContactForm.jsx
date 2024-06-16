import { useState } from "react";
import axios from 'axios';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    services: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/save-email", formData);
      if (response.status === 200) {
        setSuccess("Form submitted successfully!");
        setError("");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Error submitting form. Please try again.");
        setSuccess("");
      }
    } catch (error) {
      setError("Error submitting form. Please try again.");
      setSuccess("");
    }
  };
  return (
    <div
      className="text-gray-600 body-font relative bg-gray-900 -mt-12"
      style={{ fontFamily: "Adamina, serif" }}
    >
      {/* horizontal line */}
      <div className="w-full -ml-5  md:-ml-6">
        <hr className="ml-12 " style={{ border: "0.5px solid yellow" }} />
      </div>

      <h1
        className="text-5xl mt-12 font-medium flex justify-center text-white "
        style={{ fontFamily: "Chivo, sans-serif" }}
      >
        Contact Us
      </h1>
      <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?q=18.95541174712792,72.81646177585895&hl=en&z=14&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="bg-white -ml-7 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg">
                ADDRESS
              </h2>
              <p className="mt-1 font-bold text-lg">MUMBAI</p>
              <br />
              <span className="-mt-2 text-lg">
                147-E, 1st Floor, Panchratna Building, Opera House,
                Mumbai-400004
              </span>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed text-lg">
                contact@onetouchagency.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-lg">+91 7021377482</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg">
          <h1 className="text-gray-900 text-2xl mb-2 font-bold title-font pl-5 mt-5 md:-mt-3 ml-5">
            GET IN TOUCH
          </h1>
          <form onSubmit={handleSubmit}>
          <div className="relative mb-4 pl-5 pr-5">
            <label htmlFor="email" className="leading-7 text-lg text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4 pl-5 pr-5">
            <label
              htmlFor="service" className="leading-7 text-lg text-gray-600">
              Services
            </label>
            <input
              type="text"
              id="services"
              name="services"
              value={formData.services}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4 pl-5 pr-5 w-full">
            <label
              htmlFor="message" className="leading-7 text-lg text-gray-600 w-full">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-yellow-500 border-0 pl-5 pr-5 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg mr-5 ml-5 overflow-hidden"
          >
            Send
          </button>
          </form>
          {/* Highlighted Line */}
          <div style={{ minHeight: "1.5rem" }}>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          {success && <p className="text-green-500 text-center mt-4">{success}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;



