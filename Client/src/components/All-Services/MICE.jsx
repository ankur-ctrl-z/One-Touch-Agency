import React from "react";
import MICE1 from "../../assets/All-Services-images/MICE/MICE-1.jpg";
import { Link } from "react-router-dom";
import { PiArrowCircleRightBold } from "react-icons/pi";

const MICE = () => {
  return (
    <div className="text-white mx-auto bg-[#1b1918] px-4 sm:px-6 lg:px-8 mt-24">
      <div className="flex flex-col">
        <div className="flex justify-center mt-2 items-center">
          <img
            className="w-full sm:h-[25rem] sm:w-[40rem] rounded-lg mr-0 md:mr-5 md:mb-0 mt-5 md:mt-10"
            src={MICE1}
            alt="mice Image"
          />
        </div>

        <div className="text-content w-full">
          <p className="text-base sm:text-lg leading-relaxed mb-5 mt-5">
            In the fast-paced world of corporate events, partnering with a
            professional MICE (Meetings, Incentives, Conferences, and
            Exhibitions) event management company can make all the difference.
            If you’re looking to create unforgettable business events that drive
            results, our expert MICE event management services are here to help.
            Whether you need assistance in Mumbai or are searching for a
            reliable MICE company near you, we provide comprehensive solutions
            tailored to your unique needs.
          </p>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            The Importance of Professional MICE Event Management
          </h3>

          <p className="text-base sm:text-lg leading-relaxed mb-5 mt-5">
            Choosing the right MICE events company can significantly impact the
            success of your corporate events. Here's why:
          </p>

          <ul className="text-base sm:text-lg leading-relaxed mb-5 list-disc list-inside">
            <li>
              <span className="text-xl font-bold">
                Expert Planning and Execution:
              </span>{" "}
              Professional MICE event management companies bring extensive
              experience and meticulous planning to ensure your event runs
              smoothly from start to finish.
            </li>
            <li>
              <span className="text-xl font-bold">
                Cost-Effective Solutions:{" "}
              </span>
              By leveraging their network and expertise, MICE companies can
              provide cost-effective solutions without compromising on quality.
            </li>
            <li>
              <span className="text-xl font-bold">
                Innovative Event Designs:
              </span>{" "}
              With a focus on creativity and innovation, MICE event companies
              craft unique and engaging experiences that leave a lasting
              impression on attendees.
            </li>
          </ul>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5 mb-5">Why Choose Us as Your MICE Event Management Partner</h3>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            When it comes to organizing successful corporate events, our company
            stands out among the top MICE events companies for several reasons:
          </p>

          <ul className="text-base sm:text-lg leading-relaxed mb-5 list-disc list-inside">
            <li>
              We offer customized event management services that cater to your
              specific objectives and audience.
            </li>
            <li>
              Our team of seasoned professionals brings a wealth of knowledge
              and expertise, ensuring every aspect of your event is meticulously
              planned and executed.
            </li>
            <li>
              From conceptualization and planning to execution and post-event
              analysis, we provide comprehensive event management solutions.
            </li>

            <li>
              With a track record of successful events, we are trusted by
              numerous businesses for delivering exceptional results.
            </li>
          </ul>

          <h3 className="text-xl sm:text-2xl font-bold mt-5 mb-5">
            Investing in professional MICE event management services can elevate
            your corporate events, ensuring they are impactful and memorable.
            Whether you’re looking for top MICE events companies or need a
            trusted partner in Mumbai, we provide exceptional services designed
            to meet your business needs.
          </h3>

          <div className="flex justify-center m-5 sm:mb-10 sm:m-10">
            <Link to="/contactus">
              <button className="w-48 sm:w-64 h-16 sm:h-20 border-4 rounded-3xl text-lg sm:text-xl font-semibold flex items-center justify-center shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625]">
                Book Now{" "}
                <PiArrowCircleRightBold size={20} className="ml-2 mt-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MICE;
