import image1 from '../../assets/Portfolio Images/image 1.jpg';
import image2 from '../../assets/Portfolio Images/image 2.jpg';
import image3 from '../../assets/Portfolio Images/image 3.jpg'
import image4 from '../../assets/Portfolio Images/image 4.jpg';

const Portfolio = () => {
  return (
    <div className="bg-gray-900">
      <div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-white flex justify-center pt-12">
            Our Portfolio
          </h1>
          <h2 className="text-white mb-4 text-4xl mt-3 font-semibold">
            Browse Our <span className="text-yellow-500">Successful Events</span>
          </h2>
        </div>
      </div>

      <div className="flex justify-start">
        <div className="w-[30rem] h-[30rem] border border-yellow-500 ml-40 rounded-md overflow-hidden">
          <img src={image1} alt="image 1" className="w-full h-full object-cover"/>
        </div>
        <div className="w-[22rem] h-[15rem] border border-yellow-500 ml-4 rounded-md overflow-hidden">
          <img src={image2} alt="image 2" className="w-full h-full object-cover"/>
        </div>
        <div className="w-[22rem] h-[15rem] border border-yellow-500 ml-4 rounded-md overflow-hidden">
          <img src={image3} alt="image 3" className="w-full h-full object-cover"/>
        </div>
      </div>
      <div className="flex justify-end -mt-56 mr-32">
        <div className="w-[45rem] h-[14rem] border border-yellow-500 rounded-md overflow-hidden">
          <img src={image4} alt="image 4" className="w-full h-full object-cover"/>
        </div>
      </div>
      {/* Button Container */}
      <div className="flex justify-end pr-8 pb-8 mr-32">
        <button className="flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
          Checkout More
        </button>
      </div>
    </div>
  );
};

export default Portfolio;

  
  