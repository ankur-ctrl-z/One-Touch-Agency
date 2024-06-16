import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../Pages/OurPortfolioSecondary/PortfolioImages/11.jpg";
import image2 from "../../assets/Portfolio Images/image 2.jpg";
import image3 from "../../assets/Portfolio Images/image 3.jpg";
import image4 from "../../Pages/OurPortfolioSecondary/PortfolioImages/12.jpg";

const Portfolio = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClick = () => {
    navigate('/portfolio2');
  };

  return (
    <div className="bg-gray-900">
      <div>
        <div className="flex flex-col items-center justify-center">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium title-font mb-0 text-white flex justify-center pt-12"
            style={{ fontFamily: "Chivo, sans-serif" }}
          >
            Our Portfolio
          </h1>
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-10 text-white text-center font-semibold"
            style={{ fontFamily: "Chivo, sans-serif" }}
          >
            Browse Our{" "}
            <span className="text-yellow-500">Successful Events</span>
          </h2>
        </div>
      </div>

      {/* Event Images */}
      <div className="flex flex-wrap justify-center mx-2 md:mx-10  mt-8">
        
        <div
          className={`w-full md:w-[40vw] md:h-[46vw] border md:-ml-[12rem] lg:w-[28vw] lg:h-[40vw] lg:ml-5
       border-yellow-500 rounded-md overflow-hidden transition-transform duration-500 ${
         isHovered ? "hover:-translate-y-2 hover:shadow-lg" : ""
       }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={image1}
            alt="image 1"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div
          className={`w-full md:w-[22vw] md:h-[20vw] lg:h-[19vw] 
      border border-yellow-500 mt-4 sm:mt-0 sm:ml-4 rounded-md overflow-hidden
       transition-transform duration-500 ${
         isHovered ? "hover:-translate-y-2 hover:shadow-lg" : ""
       }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={image2}
            alt="image 2"
            className="w-full h-full object-cover"
          />
        </div>

        
        <div
          className={`w-full md:w-[22vw] md:h-[20vw] lg:h-[19vw]
        md:-mt-[22rem] lg:mt-0 lg:ml-[1rem] md:ml-[31rem] border 
       border-yellow-500 mt-4 rounded-md overflow-hidden 
       transition-transform duration-500 ${
         isHovered ? "hover:-translate-y-2 hover:shadow-lg" : ""
       }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={image3}
            alt="image 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    
      <div className=" flex justify-center mt-4 md:mt-[4rem]">
        <div
          className={`four w-full ml-2 mr-2 md:w-[45.8vw] md:-mt-[11.7rem] md:h-[24.7vw] md:ml-[46.8vw] lg:ml-[43vw] lg:-mt-[20rem] lg:h-[20vw] lg:w-[45vw] border
       border-yellow-500 rounded-md overflow-hidden
        transition-transform duration-500 ${
          isHovered ? "hover:-translate-y-2 hover:shadow-lg" : ""
        }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={image4}
            alt="image 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Button Container */}
      <div className="flex justify-center lg:-mt-14 mx-4 md:ml-12 lg:ml-20 md:mx-0 md:mr-16 lg:mr-32 pb-8">
        <button
          onClick={handleButtonClick}
          style={{ fontFamily: "Chivo, sans-serif" }}
          className="border-[3px] border-white text-white text-xl py-3 px-6 mt-8 mb-5 rounded-2xl shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625]"
        >
          Check Out More
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
