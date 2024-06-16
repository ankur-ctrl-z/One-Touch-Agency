import React from "react";
import MICE1 from "../../assets/All-Services-images/MICE/MICE-1.jpg";
import MICE2 from "../../assets/All-Services-images/MICE/MICE-2.jpg";
import MICE3 from "../../assets/All-Services-images/MICE/MICE-3.jpg";
import { TiArrowRightThick } from "react-icons/ti";
import { Link } from "react-router-dom";




const MICE = () => {
  return (
    <div className="p-5 py-28 sm:py-32 bg-gray-900 w-full min-h-screen text-white">
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
      <img
          className="w-full md:w-1/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0 mt-5 md:mt-0"
          src={MICE1}
          alt="MICE 1"
        />
        <div className="text-content w-full md:w-4/5">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            In the fast-paced world of corporate events, partnering with a
            professional MICE (Meetings, Incentives, Conferences, and
            Exhibitions) event management company can make all the difference.
            If you’re looking to create unforgettable business events that drive
            results, our expert MICE event management services are here to help.
            Whether you need assistance in Mumbai or are searching for a
            reliable MICE company near you, we provide comprehensive solutions
            tailored to your unique needs.
          </h2>
        
        </div>
      </div>
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <div className="text-content w-full md:w-3/5 order-2 md:order-1">
        <h2 className="text-xl sm:text-2xl font-bold mb-5">
            The Importance of Professional MICE Event Management
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Choosing the right MICE events company can significantly impact the
            success of your corporate events. Here's why:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Expert Planning and Execution: Professional MICE event management
              companies bring extensive experience and meticulous planning to
              ensure your event runs smoothly from start to finish.
            </li>
            <li className="mb-2">
              Cost-Effective Solutions: By leveraging their network and
              expertise, MICE companies can provide cost-effective solutions
              without compromising on quality.
            </li>
            <li className="mb-2">
              Innovative Event Designs: With a focus on creativity and
              innovation, MICE event companies craft unique and engaging
              experiences that leave a lasting impression on attendees.
            </li>
            </ul>
        </div>
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0 order-1 md:order-2"
          src={MICE2}
          alt="MICE 2"
        />
      </div>
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
      <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0"
          src={MICE3}
          alt="MICE 3"
        />
        <div className="text-content w-full md:w-3/5">
        <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Why Choose Us as Your MICE Event Management Partner
          </h2>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            When it comes to organizing successful corporate events, our company
            stands out among the top MICE events companies for several reasons:
          </h2>

          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              We offer customized event management services that cater to your
              specific objectives and audience.
            </li>
            <li className="mb-2">
              Our team of seasoned professionals brings a wealth of knowledge
              and expertise, ensuring every aspect of your event is meticulously
              planned and executed.
            </li>
            <li className="mb-2">
              From conceptualization and planning to execution and post-event
              analysis, we provide comprehensive event management solutions.
            </li>
            <li className="mb-2">
              With a track record of successful events, we are trusted by
              numerous businesses for delivering exceptional results.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Investing in professional MICE event management services can elevate
            your corporate events, ensuring they are impactful and memorable.
            Whether you’re looking for top MICE events companies or need a
            trusted partner in Mumbai, we provide exceptional services designed
            to meet your business needs.
          </h2>
        </div>
      </div>
      <div className="flex justify-center m-5 -mb-14 sm:-mb-20 sm:m-10">
        <Link to="/contactus">
          <button className="w-48 sm:w-64 h-16 sm:h-20 border-4 rounded-3xl text-lg sm:text-xl font-semibold flex items-center justify-center shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625]">
            Book Now <TiArrowRightThick size={20} className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MICE;
