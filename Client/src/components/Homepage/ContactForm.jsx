import { useState, useEffect } from "react";
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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
    if (!/^\d{10}$/.test(formData.phone)) {
      setError("Phone number must be exactly 10 digits.");
      setSuccess("");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/save-phone", formData);
      if (response.status === 200) {
        setSuccess("Form submitted successfully!");
        setError("");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        setError("Error submitting form. Please try again.");
        setSuccess("");
      }
    } catch (error) {
      setError("Error submitting form. Please try again.");
      setSuccess("");
    }
  };

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess("");
        setError("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success, error]);

  return (
    <div className="text-gray-600 body-font relative bg-gray-900 -mt-12" style={{ fontFamily: "Adamina, serif" }}>
      {/* Horizontal Line */}
      <div className="w-full -ml-5 md:-ml-6">
        <hr className="ml-12" style={{ border: "0.5px solid yellow" }} />
      </div>

      <h1 className="text-5xl mt-12 font-medium flex justify-center text-white" style={{ fontFamily: "Chivo, sans-serif" }}>
        Contact Us
      </h1>
      <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe 
            width="100%"
            height="100%"
            className="absolute inset-0 bg-gray-400"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?q=18.95541174712792,72.81646177585895&hl=en&z=14&output=embed"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/3 md:w-1/2 bg-gray-200 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg">
          <h1 className="text-black text-2xl font-bold title-font pl-5 mt-5 md:-mt-3 ml-5">
            GET IN TOUCH
          </h1>

          <form className="flex flex-col justify-center items-center space-y-4" onSubmit={handleSubmit}>
            
            <div style={{ minHeight: "1.5rem" }}>
              {error && <p className="text-red-500 text-center mt-2">{error}</p>}
              {success && <p className="text-green-500 text-center mt-4">{success}</p>}
            </div>
          
            <div className="flex justify-center items-center mt-10">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-[16rem] md:w-[14rem] lg:w-[17rem] xl:w-[23rem] p-4 rounded-3xl hover:border-yellow-300 border-2 border-black card-color focus:outline-none"
                required
              />
            </div>
            <div className="flex justify-center">
              <input
                type="tel" 
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-[16rem] md:w-[14rem] lg:w-[17rem] xl:w-[23rem] p-4 rounded-3xl hover:border-yellow-300 border-2 border-black card-color focus:outline-none"
                required
              />
            </div>
            <div className="flex justify-center">
              <textarea
                name="message"
                placeholder="Message..."
                value={formData.message}
                onChange={handleChange}
                className="w-[16rem] md:w-[14rem] lg:w-[17rem] xl:w-[23rem] h-30 p-4 rounded-[1.8rem] hover:border-yellow-300 border-2 border-black card-color focus:outline-none"
                required
              ></textarea>
            </div>
              
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-black button-submit text-white text-xl flex justify-center py-3 px-8 mt-8 mb-10 border-[3px] border-white rounded-2xl shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625] focus:outline-none"
                style={{ fontFamily: 'Chivo, sans-serif' }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;







