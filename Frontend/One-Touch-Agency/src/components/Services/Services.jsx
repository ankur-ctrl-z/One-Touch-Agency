import miceImage from '../../assets/Services Images/mice (Corporate Event).jpg'
import awardEventImage from '../../assets/Services Images/Award Ceremony (Corporate Events).jpg'
import stallFabrication from '../../assets/Services Images/Stall Fabrication - Exhibition.jpeg'
import corporateEvent from '../../assets/Services Images/Corporate Conferences Seminars (Corporate Event).jpg'
import fashionShow from '../../assets/Services Images/fashion show - Exhibition.png'

const Services = () => {
  return (
    <div className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-white">
            Our Services
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="h-56 flex flex-col justify-center items-center">
              <p className="leading-relaxed text-opacity-80 text-4xl pt-4 text-center font-bold">
                Discover our standout <br /> services for<br /> unforgettable events.
              </p>
              <button className="flex mx-auto mt-8 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  View All
              </button>
            </div>
          </div>

          <a href="" className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-yellow-500 border-opacity-75 p-6 rounded-lg h-56 relative overflow-hidden">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-4">
          </div>
            <img src={stallFabrication} className="absolute inset-0 w-full h-full object-cover rounded-lg" alt="MICE" />
            <h2 className="text-2xl text-white font-medium title-font absolute bottom-3 left-0 mb-2 ml-4">Stall Fabrication</h2>
          </div>
          </a>


          {/* Awards Event */}
          <a href="" className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-yellow-500 border-opacity-75 p-6 rounded-lg h-56 relative overflow-hidden">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-4">
          </div>
            <img src={miceImage} className="absolute inset-0 w-full h-full object-cover rounded-lg" alt="MICE" />
            <h2 className="text-2xl text-white font-medium title-font absolute bottom-3 left-0 mb-2 ml-4">MICE</h2>
          </div>
          </a>

          {/* Award's Event */}
          <a href="" className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-yellow-500 border-opacity-75 p-6 rounded-lg h-56 relative overflow-hidden">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-4">
          </div>
            <img src={awardEventImage} className="absolute inset-0 w-full h-full object-cover rounded-lg" alt="MICE" />
            <h2 className="text-2xl text-white font-medium title-font absolute bottom-3 left-0 mb-2 ml-4">Award's Event</h2>
          </div>
          </a>

          {/* Corporate Events */}
          <a href="" className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-yellow-500 border-opacity-75 p-6 rounded-lg h-56 relative overflow-hidden">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-4">
          </div>
            <img src={corporateEvent} className="absolute inset-0 w-full h-full object-cover rounded-lg" alt="MICE" />
            <h2 className="text-2xl text-white font-medium title-font absolute bottom-3 left-0 mb-2 ml-4">Corporate Event</h2>
          </div>
          </a>

          {/* Fashion Show */}
          <a href="" className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-yellow-500 border-opacity-75 p-6 rounded-lg h-56 relative overflow-hidden">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-4">
          </div>
            <img src={fashionShow} className="absolute inset-0 w-full h-full object-cover rounded-lg" alt="MICE" />
            <h2 className="text-2xl text-white font-medium title-font absolute bottom-3 left-0 mb-2 ml-4">Fashion Show</h2>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;

