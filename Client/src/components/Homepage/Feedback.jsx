import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import clientImage1 from '../../assets/Clients images/bhoomi logo.png'
import clientImage2 from '../../assets/Clients images/chara.png'
import clientImage3 from '../../assets/Clients images/tata nq.png'
import clientImage4 from '../../assets/Clients images/vecmocon.png'

const feedbacks = [
  {
    text: "  We had an exceptional experience with the team.The event was flawlessly executed and our guests were highly impressed.",
    name: "BHOOMI",
    image: clientImage1
  },
  {
    text: " The service provided was outstanding.We couldn't have asked for a better experience.",
    name: "CHARA",
    image: clientImage2
  },
  {
    text: " Highly professional and detail-oriented.We were very satisfied with the results.",
    name: "TATA NQ",
    image: clientImage3
  },

  {
    text: " The event was executed flawlessly.The meticulous planning and coordination ensured that everything ran smoothly, allowing us to focus on enjoying the event without any worries.",
    name: "VECMOCOM",
    image: clientImage4
  },
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
    <div className="bg-gray-900 min-h-screen md:-mt-[2vh] flex flex-col items-center justify-center relative">
      <div className="text-2xl md:text-4xl lg:text-5xl text-center font-medium text-white mb-32 -mt-20 sm:-mt-20">
        <h1 style={{ fontFamily: 'Chivo, sans-serif' }}>What Our Client Says</h1>
      </div>
      <div className="flex items-center justify-center w-full mb-8">
        <button onClick={handlePrev} className="text-white focus:outline-none rounded mr-6">
          <RiArrowLeftSLine className="text-4xl md:text-6xl ml-1 hover:text-yellow-500 transition-colors duration-300" />
        </button>
        <div className="bg-white -mt-10 w-[72%] h-80 rounded-lg relative flex flex-col items-center justify-center p-6 transition-transform duration-500 ease-in-out transform">
          <img
            src={feedbacks[currentFeedback].image}
            alt="Client"
            className="w-24 h-24 rounded-full border border-yellow-300 bg-black absolute top-0 transform -translate-y-1/2 transition-all duration-500"
            style={{ top: '0' }}
          />
          <div className="text-gray-900 text-xl text-center flex items-center mt-10" style={{ fontFamily: 'Adamina, serif' }}>
            <FaQuoteLeft className="text-4xl text-gray-300 mr-5" style={{ marginTop: '-1rem' }} />
            <div>
              {displayedText !== undefined && displayedText !== '' && (
                <p className="mb-4">{displayedText}</p>
              )}
              <p className="font-bold">- {feedbacks[currentFeedback].name}</p>
            </div>
            <FaQuoteRight className="text-4xl text-gray-300 mr-3 md:ml-4" style={{ marginTop: '-1rem' }} />
          </div>
        </div>
        <button onClick={handleNext} className="text-white focus:outline-none rounded ml-2 md:ml-6">
          <RiArrowRightSLine className="text-4xl md:text-6xl hover:text-yellow-500 transition-colors duration-300" />
        </button>
      </div>
    </div>
  );
}

export default Feedback;








  