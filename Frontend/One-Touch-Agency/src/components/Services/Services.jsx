import { useState } from 'react';
import miceImage from '../../assets/Services Images/mice (Corporate Event).jpg';
import awardEventImage from '../../assets/Services Images/Award Ceremony (Corporate Events).jpg';
import stallFabrication from '../../assets/Services Images/Stall Fabrication - Exhibition.jpeg';
import corporateEvent from '../../assets/Services Images/Corporate Conferences Seminars (Corporate Event).jpg';
import fashionShow from '../../assets/Services Images/fashion show - Exhibition.png';

const Services = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <div className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto -mt-12">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-white">
            Our Services
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="h-56 flex flex-col justify-center items-center">
              <p className="leading-relaxed text-opacity-80 text-4xl pt-4 text-center font-bold text-white">
                Discover our standout <br /> services for<br /> unforgettable events.
              </p>
              <button className="flex mx-auto mt-8 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                View All
              </button>
            </div>
          </div>

          {[
            { img: stallFabrication, title: 'Stall Fabrication' },
            { img: miceImage, title: 'MICE' },
            { img: awardEventImage, title: "Award's Event" },
            { img: corporateEvent, title: 'Corporate Event' },
            { img: fashionShow, title: 'Fashion Show' },
          ].map((service, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`xl:w-1/3 md:w-1/2 p-4 transition-transform duration-300 cursor-pointer ${
                clickedIndex === index ? 'scale-125 border-yellow-500 border-4' : 'hover:scale-110'
              }`}
            >
              <div className={`border border-yellow-500 border-opacity-75 p-6 rounded-lg relative overflow-hidden ${clickedIndex === index ? 'h-96' : 'h-64'}`}>
                <img src={service.img} className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-300 ${clickedIndex === index ? 'scale-150' : ''}`} alt={service.title} />
                <h2 className={`text-2xl text-white font-medium title-font absolute bottom-3 left-0 mb-2 ml-4 transition-all duration-300 ${clickedIndex === index ? 'bottom-0 mb-0 transform -translate-y-20' : ''}`}>
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



