import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import clientImage1 from '../../assets/Founder & Manager image/founder image.jpg';
import clientImage2 from '../../assets/Founder & Manager image/manager image.jpg';
import clientImage3 from '../../assets/Founder & Manager image/founder image.jpg';

const feedbacks = [
  {
    text: " We had an exceptional experience with the team. The event was flawlessly executed and our guests were highly impressed.",
    name: "Client Name",
    company: "Company",
    image: clientImage1
  },
  {
    text: " The service provided was outstanding. We couldn't have asked for a better experience.",
    name: "Another Client",
    company: "Another Company",
    image: clientImage2
  },
  {
    text: " Highly professional and detail-oriented. We were very satisfied with the results.",
    name: "Different Client",
    company: "Different Company",
    image: clientImage3
  }
];

function Feedback() {
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex === feedbacks[currentFeedback].text.length) {
        clearInterval(interval);
        return;
      }
      setDisplayedText((prevText) => prevText + feedbacks[currentFeedback].text[currentIndex]);
      currentIndex++;
    }, 100);

    return () => {
      clearInterval(interval);
      setDisplayedText('');
    };
  }, [currentFeedback]);

  const handleNext = () => {
    setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
  };

  const handlePrev = () => {
    setCurrentFeedback((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center relative">
      <div className="text-5xl font-medium text-white mb-32 mt-0">
        <h1 style={{ fontFamily: 'Chivo, sans-serif' }}>What Our Client Says</h1>
      </div>
      <div className="flex items-center justify-center w-full mb-8">
        <button onClick={handlePrev} className="text-white focus:outline-none rounded mr-6">
          <RiArrowLeftSLine className="text-6xl hover:text-yellow-500 transition-colors duration-300" />
        </button>
        <div className="bg-white -mt-10 w-2/3 h-72 rounded-lg relative flex flex-col items-center justify-center p-6 transition-transform duration-500 ease-in-out transform">
          <img
            src={feedbacks[currentFeedback].image}
            alt="Client"
            className="w-24 h-24 rounded-full absolute top-0 transform -translate-y-1/2 transition-all duration-500"
            style={{ top: '0' }}
          />
          <div className="text-gray-900 text-xl text-center flex items-center mt-10">
            <FaQuoteLeft className="text-4xl text-gray-300 mr-4" style={{ marginTop: '-1rem' }} />
            <div>
              {displayedText !== undefined && displayedText !== '' && (
                <p className="mb-4">{displayedText}</p>
              )}
              <p className="font-bold">- {feedbacks[currentFeedback].name}, {feedbacks[currentFeedback].company}</p>
            </div>
            <FaQuoteRight className="text-4xl text-gray-300 ml-4" style={{ marginTop: '-1rem' }} />
          </div>
        </div>
        <button onClick={handleNext} className="text-white focus:outline-none rounded ml-6">
          <RiArrowRightSLine className="text-6xl hover:text-yellow-500 transition-colors duration-300" />
        </button>
      </div>
    </div>
  );
}

export default Feedback;




















  