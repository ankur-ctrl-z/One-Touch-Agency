import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import clientImage from '../../assets/Founder & Manager image/founder image.jpg';

function Feedback() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center relative">
      <div className="text-5xl font-bold text-white mb-8">
        <h1>What Our Client Says</h1>
      </div>
      <div className="bg-white w-2/3 h-72 rounded-lg mb-8 relative flex flex-col items-center justify-center p-6">
        <img
          src={clientImage}
          alt="Client"
          className="w-20 h-20 rounded-full absolute top-0 transform -translate-y-1/2"
          style={{ top: '0' }}
        />
        <div className="text-gray-900 text-xl text-center flex items-center mt-10">
          <FaQuoteLeft className="text-4xl text-gray-300 mr-4" />
          <div>
            <p className="mb-4">"We had an exceptional experience with the team. The event was flawlessly executed and our guests were highly impressed."</p>
            <p className="font-bold">- Client Name, Company</p>
          </div>
          <FaQuoteRight className="text-4xl text-gray-300 ml-4" />
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
          Previous
        </button>
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ml-3">
          Next
        </button>
      </div>
    </div>
  );
}

export default Feedback;





  