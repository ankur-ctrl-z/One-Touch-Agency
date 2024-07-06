import { useState } from 'react';
import miceImage from '../../assets/Services Images/mice (Corporate Event).jpg';
import awardEventImage from '../../assets/Services Images/Award Ceremony (Corporate Events).jpg';
import stallFabrication from '../../assets/Services Images/Stall Fabrication - Exhibition.jpeg';
import corporateEvent from '../../assets/Services Images/Corporate Conferences Seminars (Corporate Event).jpg';
import fashionShow from '../../assets/Services Images/fashion show - Exhibition.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [clickedIndex, setClickedIndex] = useState(null);
 
  const handleClick = (index) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  const navigate = useNavigate();

  const handleServiceClick = (servicePath) => {
    navigate(servicePath);
  };


  return (
 
    <div className="text-gray-400 body-font -mt-[4.9rem] bg-gray-900 ">
      <div className="container px-5 py-9 mx-auto -mt-12">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-5xl text-2xl mt-10 font-medium title-font mb-2 text-white" style={{ fontFamily: 'Chivo, sans-serif' }}>
            Our Services
          </h1>
        </div>
        <div className="flex flex-wrap -mt-20  -m-4">
          <div className="xl:w-1/3 md:w-1/2 w-full p-4">
            <div className="h-56 flex flex-col justify-center items-center">
              <p className="lg:leading-snug text-opacity-80 text-4xl pt-4 md:mt-36 text-center font-bold text-yellow-300" style={{ fontFamily: 'Adamina, serif' }}>
                <span className="text-white">Discover Our Standout</span> <br />
                <span className="text-white">Services{" "}</span>
                <span className="text-yellow-300">For</span>
                <br />
                <span className="text-yellow-300">Unforgettable Events.</span>
              </p>

              <Link to={'/services2'}>
              <div
                 style={{ fontFamily: 'Adamina, serif' }}
                className="mt-4 ml-2 md:ml-6 lg:ml-6 flex-shrink-0 border-[3px] border-white py-2 px-6 rounded-2xl shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625]"
              >
                <button className="text-white text-[18px]">View All</button>
              </div>
              </Link>
            </div>
          </div>

          {[
            { img: stallFabrication, title: "STALL FABRICATION" ,path: "/services/stall-fabrication" },
            { img: miceImage, title: "MICE", path: "/services/mice" },
            { img: awardEventImage, title: "AWARDS's EVENT" ,path: "/services/award-ceremony" },
            { img: corporateEvent, title: "CORPORATE EVENT" , path: "/services/corporate-event" },
            { img: fashionShow, title: "FASHION SHOW" ,path: "/services/fashion-show" },
          ].map((service, index) => (
            <div
              key={index} onClick={() => handleServiceClick(service.path)}
              className={`xl:w-1/3 md:w-1/2 w-full p-2  mt-14 transition-transform duration-700 hover:cursor-pointer ${
                clickedIndex === index ? 'border-yellow-500': ''
              }`}
            >
            
            <div onClick={() => handleServiceClick(service.path)}
                className={`border w-[16.5rem] ml-[0.6rem] md:w-[21.1rem] hover:scale-105 transition-all duration-300 lg:w-[29rem] xl:w-[24rem] 2xl:w-[29.2rem]  border-yellow-500  border-opacity-75 p-6 rounded-lg relative overflow-hidden ${
                  clickedIndex === index ? 'h-64' : 'h-64'
                }`}
              >
                <img
                  src={service.img}
                  className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-300 ${
                    clickedIndex === index ? "scale-150" : ""
                  }`}
                  alt={service.title}
                />
                <h2
                  className={`md:text-2xl text-yellow-300 font-medium title-font absolute bottom-0 left-0 mb-2 ml-4 transition-all duration-300 ${
                    clickedIndex === index ? "transform -translate-y-20" : ""
                  }`}
                >
                  {service.title}
                </h2>
              </div>
      
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

