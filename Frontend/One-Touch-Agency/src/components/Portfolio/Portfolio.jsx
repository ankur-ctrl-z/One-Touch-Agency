import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../../assets/Portfolio Images/image 1.jpg';
import image2 from '../../assets/Portfolio Images/image 2.jpg';
import image3 from '../../assets/Portfolio Images/image 3.jpg';
import image4 from '../../assets/Portfolio Images/image 4.jpg';

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
    navigate('/out-portfolio-2');
  };

  return (
    <div className="bg-gray-900">
      <div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-0 text-white flex justify-center pt-12">
            Our Portfolio
          </h1>
          <h2 className="text-white mb-2 text-4xl mt-3 font-semibold">
            Browse Our <span className="text-yellow-500">Successful Events</span>
          </h2>
        </div>
      </div>
      <div className="flex justify-start">
        <div
          className={`w-[30rem] h-[30rem] mt-5 border border-yellow-500 ml-40 rounded-md overflow-hidden transition-transform duration-500 ${
            isHovered ? 'hover:-translate-y-2 hover:shadow-lg' : ''
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={image1} alt="image 1" className="w-full h-full object-cover" />
        </div>
        <div
          className={`w-[22rem] h-[15rem] mt-5 border border-yellow-500 ml-4 rounded-md overflow-hidden transition-transform duration-500 ${
            isHovered ? 'hover:-translate-y-2 hover:shadow-lg' : ''
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={image2} alt="image 2" className="w-full h-full object-cover" />
        </div>
        <div
          className={`w-[22rem] h-[15rem] mt-5 border border-yellow-500 ml-4 rounded-md overflow-hidden transition-transform duration-500 ${
            isHovered ? 'hover:-translate-y-2 hover:shadow-lg' : ''
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={image3} alt="image 3" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex justify-end -mt-56 mr-32">
        <div
          className={`w-[45rem] h-[14rem] border border-yellow-500 rounded-md overflow-hidden transition-transform duration-500 ${
            isHovered ? 'hover:-translate-y-2 hover:shadow-lg' : ''
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={image4} alt="image 4" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* Button Container */}
      <div className="flex justify-end pr-8 pb-8 mr-32">
  <button 
    onClick={handleButtonClick} 
    className="ml-36 md:ml-40 lg:ml-80 border-[3px] border-white text-white text-xl flex justify-center py-3 px-6 mt-8 mb-5 rounded-2xl shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625]">
    Check Out More
  </button>
  </div>
    </div>
  );
};

export default Portfolio;








  
  