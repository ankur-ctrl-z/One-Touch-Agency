import React from "react";
import StallFabrication1 from "../../assets/All-Services-images/Stall-Fabrication/Stall-Fabrication-1.jpeg";
import StallFabrication2 from "../../assets/All-Services-images/Stall-Fabrication/Stall-Fabrication-2.jpg";
import StallFabrication3 from "../../assets/All-Services-images/Stall-Fabrication/Stall-Fabrication-3.jpeg";
import { TiArrowRightThick } from "react-icons/ti";
import { Link } from "react-router-dom";

const StallFabrication = () => {
  return (
    <div className="p-5 py-28 sm:py-32 bg-gray-900 w-full min-h-screen text-white">
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0 mt-5 md:mt-0"
          src={StallFabrication1}
          alt="Stall Fabrication 1"
        />
        <div className="text-content w-full md:w-3/5">
          <h1 className="text-2xl sm:text-4xl font-bold mb-5">
            Maximizing Trade Show Success with Custom Stall Fabrication
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Do you want your next trade show or exhibition to make a powerful
            impression?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Professional stall fabrication is the key to creating a memorable,
            eye-catching space that attracts visitors and promotes your brand.
            We offer customised stall fabrication services to ensure a standout
            presence that drives engagement and boosts sales. We can transform
            your exhibition space with our innovative design and superior
            craftsmanship.
          </p>
        </div>
      </div>
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <div className="text-content w-full md:w-3/5 order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Choosing a professional stall fabricator is important
          </h2>
          <h3 className="text-lg sm:text-xl font-semibold mb-5">
            In exhibition stall fabrication, it's about creating an experience
            that captures attention, communicates your brand message, and
            engages your target audience. Considering professional services has
            the following benefits:
          </h3>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              An attractive stall will make an impression on visitors in a
              crowded exhibition hall, making your brand stand out.
            </li>
            <li className="mb-2">
              Engage your customers with interactive and inviting spaces created
              by professional fabricators.
            </li>
            <li className="mb-2">
              The quality and efficiency of your stall will depend on the
              dedication and expertise of the fabricator.
            </li>
          </ul>
        </div>
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0 order-1 md:order-2"
          src={StallFabrication2}
          alt="Stall Fabrication 2"
        />
      </div>
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0"
          src={StallFabrication3}
          alt="Stall Fabrication 3"
        />
        <div className="text-content w-full md:w-3/5">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Leading stall fabricators in Delhi and Mumbai offer numerous
            advantages
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            The fabricators in these major cities bring local expertise and
            understanding of exhibitors' particular requirements and
            preferences. With a rich innovation history, we offer creative
            solutions tailored to enhance your brand's presence. Additionally,
            in Delhi and Mumbai and major cities we have a proven track record,
            with extensive portfolios showcasing successful projects across
            various industries. This combination of local knowledge, creativity,
            and experience ensures that your exhibition stall will stand out and
            effectively engage your target audience.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            By investing in professional exhibition stall fabrication services,
            you can increase visitor engagement at trade shows as well as
            enhance your brand's visibility
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            A standout stall that attracts attention and converts visitors into
            customers can be created by partnering with experienced fabricators
            in Delhi, Mumbai, or anywhere else.
          </p>
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

export default StallFabrication;
