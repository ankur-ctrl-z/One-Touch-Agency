import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";

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
          <div>
            {/* Images for Achievement */}
            <div className="flex justify-center items-center">
              <img
                src={image1}
                className="h-80 rounded-3xl mt-4 ml-2 mr-2 border"
                alt="image 1"
              />
              <img
                src={image2}
                className="w-64 h-168 rounded-2xl mt-8 ml-2 mr-2 border"
                alt="image 2"
              />
              <img
                src={image3}
                className="w-64 h-168 rounded-2xl m-4 border"
                alt="image 3"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={image4}
                className="w-64 h-168 rounded-2xl m-2 border"
                alt="image 4"
              />
              <img
                src={image5}
                className="w-64 h-168 rounded-2xl m-2 border"
                alt="image 5"
              />
              <img
                src={image6}
                className="h-80 rounded-3xl mt-2 ml-2 mr-2 border"
                alt="image 6"
              />
            </div>
          </div>
          {/* Button Container */}
          <div className="flex justify-end pr-8 pb-8 mr-32">
            <button className="flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Checkout More
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;
  
  