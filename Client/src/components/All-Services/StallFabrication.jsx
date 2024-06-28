import React from "react";
import StallFabrication2 from "../../assets/All-Services-images/Stall-Fabrication/Stall-Fabrication-2.jpg";
import { Link } from "react-router-dom";
import { PiArrowCircleRightBold } from "react-icons/pi";

const StallFabrication = () => {
  return (
    <div className="text-white mx-auto bg-[#1b1918] px-4 sm:px-6 lg:px-8 mt-24">
      <div className="flex flex-col">
        <div className="flex justify-center mt-2 items-center">
          <img
            className="w-full sm:h-[25rem] sm:w-[40rem] rounded-lg mr-0 md:mr-5 md:mb-0 mt-5 md:mt-10"
            src={StallFabrication2}
            alt="Stall fabrication Image"
          />
        </div>

        <div className="text-content w-full">
          <p className="text-base sm:text-lg leading-relaxed mt-10">
            Do you want your next trade show or exhibition to make a powerful
            impression? Professional stall fabrication is the key to creating a
            memorable, eye-catching space that attracts visitors and promotes
            your brand. We offer customised stall fabrication services to ensure
            a standout presence that drives engagement and boosts sales. We can
            transform your exhibition space with our innovative design and
            superior craftsmanship.
          </p>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            Choosing a professional stall fabricator is important
          </h3>

          <p className="text-base sm:text-lg leading-relaxed mb-5 mt-5">
            In exhibition stall fabrication, it's about creating an experience
            that captures attention, communicates your brand message, and
            engages your target audience. Considering professional services has
            the following benefits:
          </p>

          <ul className="text-base sm:text-lg leading-relaxed mb-5 list-disc list-inside">
            <li >
              An attractive stall will make an impression on visitors in a
              crowded exhibition hall, making your brand stand out.
            </li>
            <li>
              Engage your customers with interactive and inviting spaces created
              by professional fabricators.
            </li>
            <li>
              The quality and efficiency of your stall will depend on the
              dedication and expertise of the fabricator.
            </li>
          </ul>

          <p className="text-base sm:text-lg leading-relaxed mt-5">
            Leading stall fabricators in Delhi and Mumbai offer numerous
            advantages. The fabricators in these major cities bring local
            expertise and understanding of exhibitors' particular requirements
            and preferences. With a rich innovation history, we offer creative
            solutions tailored to enhance your brand's presence. Additionally,
            in Delhi and Mumbai and major cities we have a proven track record,
            with extensive portfolios showcasing successful projects across
            various industries. This combination of local knowledge, creativity,
            and experience ensures that your exhibition stall will stand out and
            effectively engage your target audience.
          </p>

          <p className="text-base sm:text-lg leading-relaxed mt-5">
            By investing in professional exhibition stall fabrication services,
            you can increase visitor engagement at trade shows as well as
            enhance your brand's visibility. A standout stall that attracts
            attention and converts visitors into customers can be created by
            partnering with experienced fabricators in Delhi, Mumbai, or
            anywhere else.
          </p>

          <div className="flex justify-center m-5 sm:mb-10 sm:m-10">
            <Link to="/contactus">
              <button className="w-48 sm:w-64 h-16 sm:h-20 border-4 rounded-3xl text-lg sm:text-xl font-semibold 
              flex items-center justify-center shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625]">
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

export default StallFabrication;
