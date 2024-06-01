import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Cards = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [isVisible]);

  return (
    <div className="text-gray-500 body-font bg-gray-900 relative overflow-hidden">
      <div className="absolute left-0 top-0 w-96 h-96 bg-yellow-500 rounded-full animate-move"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-yellow-500 rounded-full animate-move-reverse"></div>

      <div className="container px-5 py-12 mx-auto pt-3">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <div className="h-full bg-gray-900 bg-opacity-75 px-4 py-6 rounded-lg overflow-hidden text-center relative border border-yellow-500">
                  <h1 className="title-font text-2xl font-medium text-white mb-3">
                    <CountUp start={0} end={500} duration={4} redraw={true} delay={0} useEasing={true} useGrouping={true} separator="," startOnMount={isVisible} />
                    + <br />
                    <div className='pt-3 text-2xl'>
                      Event Done
                    </div>
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
          <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <div className="h-full bg-gray-900 bg-opacity-75 px-4 py-6 rounded-lg overflow-hidden text-center relative border border-yellow-500">
                  <h1 className="title-font text-2xl font-medium text-white mb-3">
                    <CountUp start={0} end={10} duration={4} redraw={true} delay={0} useEasing={true} useGrouping={true} separator="," startOnMount={isVisible} />
                    + <br />
                    <div className='pt-3 text-2xl'>
                      Years of Experience
                    </div>
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
          <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <div className="h-full bg-gray-900 bg-opacity-75 px-4 py-6 rounded-lg overflow-hidden text-center relative border border-yellow-500">
                  <h1 className="title-font text-2xl font-medium text-white mb-3">
                    <CountUp start={0} end={350} duration={4} redraw={true} delay={0} useEasing={true} useGrouping={true} separator="," startOnMount={isVisible} />
                    + <br />
                    <div className='pt-3 text-2xl'>
                      Happy Clients
                    </div>
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
          <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <div className="h-full bg-gray-900 bg-opacity-75 px-4 py-6 rounded-lg overflow-hidden text-center relative border border-yellow-500">
                  <h1 className="title-font text-2xl font-medium text-white mb-3">
                    <CountUp start={0} end={150} duration={4} redraw={true} delay={0} useEasing={true} useGrouping={true} separator="," startOnMount={isVisible} />
                    + <br />
                    <div className='pt-3 text-2xl'>
                      Vendors
                    </div>
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </div>
      </div>
      <div className='relative text-9xl font-bold pl-44 pt-20'>
        <h1 className='text-white'>
          We <span className='text-yellow-500'>are </span><span className=' text-yellow-500'>Every<span className='text-white'>where</span></span>
        </h1>
      </div>
      <div className='w-full bg-gray-900 h-52'></div>

      <style jsx>{`
        @keyframes move {
          0% { transform: translate(0, 0); }
          50% { transform: translate(100px, 100px); }
          100% { transform: translate(0, 0); }
        }
        
        @keyframes move-reverse {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-100px, -100px); }
          100% { transform: translate(0, 0); }
        }

        .animate-move {
          animation: move 5s infinite;
        }

        .animate-move-reverse {
          animation: move-reverse 5s infinite;
        }
      `}</style>
    </div>
  );
};

export default Cards;









