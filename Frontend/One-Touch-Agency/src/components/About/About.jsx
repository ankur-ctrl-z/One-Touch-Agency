import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import founderImage from '../../assets/Founder & Manager image/founder image.jpg';
import managerImage from '../../assets/Founder & Manager image/manager image.jpg';

const About = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate('/services-2');
  };

  return (
    <div className="text-gray-600 body-font overflow-hidden bg-gray-900">
      {/* Break Line */}
      <hr style={{ border: '0.5px solid yellow', width: '100%' }} />
      <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-white flex justify-center pt-12">
        About Us
      </h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          
          <div className="h-[26rem] w-[14rem] relative rounded-lg mb-6 lg:mb-0">
            <h1 className="text-white text-center text-2xl mb-2">Founder</h1>
            <img alt="founder" src={founderImage} className="w-full h-full object-cover border border-yellow-500 rounded-lg" />
          </div>

          <div className="lg:w-1/4 w-full lg:h-auto h-32 relative rounded-lg mb-6 lg:mb-0 lg:pl-6 pt-12">
            <h1 className="text-white text-center text-2xl mb-2">Manager</h1>
            <img alt="manager" src={managerImage} className="w-full h-full object-cover border border-yellow-500 rounded-lg" />
          </div>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 pl-5">
            <div className="flex mb-4">
              <h2 className="text-white ml-3 text-4xl">Crafting Unforgettable Experiences:<br /> <span className='text-yellow-500'>Your Event, Our Expertise</span></h2>
            </div>
            <div className="leading-relaxed text-white pl-5 flex items-start mb-2">
              <FaCheckCircle className="text-yellow-500 mr-2 mt-2" />
              <h3>We create custom solutions that fit your needs and budget perfectly.</h3>
            </div>
            <div className="leading-relaxed text-white pl-5 flex items-start mb-2">
              <FaCheckCircle className="text-yellow-500 mr-2 mt-2" />
              <h3>Our founder has over 20 years of experience in event management.</h3>
            </div>
            <div className="leading-relaxed text-white pl-5 flex items-start mb-2">
              <FaCheckCircle className="text-yellow-500 mr-2 mt-2" />
              <h3>We ensure your event is delivered on time with exceptional results.</h3>
            </div>

            {/* Break Line */}
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div className="mt-4 ml-2 md:ml-6 lg:ml-6 flex-shrink-0 border-[3px] border-white py-2 px-6 rounded-2xl shadow-[#F2F625] shadow-md hover:cursor-pointer transition-all duration-300 hover:text-[#F2F625] hover:border-[#F2F625] hover:py-3 hover:px-7">
              <button onClick={handleViewAllClick} className="text-white text-[18px]">View All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;







