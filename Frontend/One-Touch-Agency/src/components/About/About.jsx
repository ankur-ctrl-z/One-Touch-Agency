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
      <hr className="ml-40" style={{ border: '0.5px solid yellow', width: '81%',}} />
      <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-white flex justify-center pt-8" style={{ fontFamily: 'Chivo, sans-serif' }}>
        About Us
      </h1>
      <div className="container px-5 py-12 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          
          <div className="h-[26rem] w-[14rem] relative rounded-lg mb-6 lg:mb-0">
            <h1 className="text-white text-center text-2xl mb-2" style={{ fontFamily: 'Adamina, serif', marginTop: '0.5rem', color:'white' }}>Founder</h1>
            <img alt="founder" src={founderImage} className="w-full h-full object-cover border border-yellow-500 rounded-lg" />
            <h1 className="text-white text-center text-2xl mb-2" style={{ fontFamily: 'Adamina, serif', marginTop: '0.5rem', color:'yellow' }}>POONAM AMBAVAT</h1>
          </div>

          <div className="h-[29rem] w-[15rem] relative rounded-lg mb-6 lg:mb-0 lg:pl-6 pt-12">
            <h1 className="text-white text-center text-2xl mb-2" style={{ fontFamily: 'Adamina, serif', marginTop: '0.5rem', color:'white' }}>Co-Founder</h1>
            <img alt="manager" src={managerImage} className="w-full h-full object-cover border border-yellow-500 rounded-lg" />
            <h1 className="text-white text-center text-2xl mb-2" style={{ fontFamily: 'Adamina, serif', marginTop: '0.5rem', color:'yellow' }}>PRIYANKA JAIN</h1>
          </div>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 pl-5">
            <div className="flex mb-4">
              <h2 className="text-white ml-3 text-4xl" style={{ fontFamily: 'Chivo, sans-serif' }}>Memorable Moments<br /> <span className='text-yellow-300'>Your Event, Our Expertise</span></h2>
            </div>
            <div className="leading-relaxed text-white pl-5 flex items-start mb-2" style={{ fontFamily: 'Adamina, serif' }}>
              <FaCheckCircle className="text-yellow-300 mr-2 mt-2 text-xl" />
              <h3 className='text-xl'>We create custom solutions that fit your needs and budget perfectly.</h3>
            </div>
            <div className="leading-relaxed text-white pl-5 flex items-start mb-2" style={{ fontFamily: 'Adamina, serif' }}>
              <FaCheckCircle className="text-yellow-300 mr-2 mt-2 text-xl" />
              <h3 className='text-xl'>Our founder has over 20 years of experience in event management.</h3>
            </div>
            <div className="leading-relaxed text-white pl-5 flex items-start mb-2" style={{ fontFamily: 'Adamina, serif' }}>
              <FaCheckCircle className="text-yellow-300 mr-2 mt-2 text-xl" />
              <h3 className='text-xl'>We ensure your event is delivered on time with exceptional results.</h3>
            </div>

            {/* Break Line */}
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div className="flex justify-end mt-4 mr-5 md:ml-1 lg:ml-2">
              <button
                onClick={handleViewAllClick}
                className="border-[3px] border-white text-white text-xl py-2 px-6 rounded-2xl shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625]"
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="ml-40 mt-36" style={{ border: '0.5px solid yellow', width: '81%',}} />
    </div>
  );
};

export default About;









