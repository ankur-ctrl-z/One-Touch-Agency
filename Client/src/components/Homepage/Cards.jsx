import { useState, useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Cards = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [isVisible]);

  return (
    // bg-gray-900
    <div
      className="text-gray-500 body-font bg-[#1b1918] relative overflow-hidden ]"
      style={{ fontFamily: "Adamina, serif" }}
    >
      <div
        className="absolute left-0 top-0 w-24 h-24 mt-[28rem] md:mt-[1rem] lg:mt-0 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-[#1b1918]  rounded-full"
        style={{ left: "10%", top: "38%", border: "4px solid yellow" }}
      ></div>  
      <div
        className="absolute right-0 bottom-0 w-24 h-24 mb-[3.5rem]  md:w-48 md:h-48 lg:w-64 lg:h-64 bg-[#1b1918]  rounded-full"
        style={{ right: "7%", bottom: "22%", border: "4px solid yellow" }}
      ></div>
      <div
        className="absolute left-0 top-0 w-6 hidden sm:block h-6 mt-[31rem] md:mt-10 lg:mt-0 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-[#1b1918]  rounded-full"
        style={{ left: "8%", top: "30%", border: "4px solid yellow" }}
      ></div>
      <div
        className="absolute right-0 bottom-0 hidden sm:block w-6 h-6  md:w-12 md:h-12 lg:w-16 lg:h-16 bg-[#1b1918]  rounded-full"
        style={{ right: "4%", bottom: "17%", border: "4px solid yellow" }}
      ></div>

      <div className="container px-5 py-12 mx-auto mt-3 pt-3">
        <div className="flex justify-center flex-wrap -m-2">
          <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <div className="h-full bg-[#1b1918]  bg-opacity-75 px-4 py-6 rounded-lg overflow-hidden text-center relative border border-yellow-500">
                  <h1 className="title-font text-4xl font-medium text-white mb-3 card-text">
                    <CountUp
                      start={0}
                      end={500}
                      duration={4}
                      redraw={true}
                      delay={0}
                      useEasing={true}
                      useGrouping={true}
                      separator=","
                      startOnMount={isVisible}
                    />
                    + <br />
                    <div className="pt-3 text-2xl">Event Done</div>
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
          <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <div className="h-full bg-[#1b1918] bg-opacity-75 px-4 py-6 rounded-lg overflow-hidden text-center relative border border-yellow-500">
                  <h1 className="title-font text-4xl font-medium text-white mb-3 card-text">
                    <CountUp
                      start={0}
                      end={10}
                      duration={4}
                      redraw={true}
                      delay={0}
                      useEasing={true}
                      useGrouping={true}
                      separator=","
                      startOnMount={isVisible}
                    />
                    + <br />
                    <div className="pt-3 text-2xl">Years of Experience</div>
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
          <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <div className="h-full bg-[#1b1918]  bg-opacity-75 px-4 py-6 rounded-lg overflow-hidden text-center relative border border-yellow-500">
                  <h1 className="title-font text-4xl font-medium text-white mb-3 card-text">
                    <CountUp
                      start={0}
                      end={350}
                      duration={4}
                      redraw={true}
                      delay={0}
                      useEasing={true}
                      useGrouping={true}
                      separator=","
                      startOnMount={isVisible}
                    />
                    + <br />
                    <div className="pt-3 text-2xl">Happy Clients</div>
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
          <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <div className="h-full bg-[#1b1918]  bg-opacity-75 px-4 py-6 rounded-lg overflow-hidden text-center relative border border-yellow-500">
                  <h1 className="title-font text-4xl font-medium text-white mb-3 card-text">
                    <CountUp
                      start={0}
                      end={150}
                      duration={4}
                      redraw={true}
                      delay={0}
                      useEasing={true}
                      useGrouping={true}
                      separator=","
                      startOnMount={isVisible}
                    />
                    + <br />
                    <div className="pt-3 text-2xl">Vendors</div>
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </div>
      </div>
      <div className="relative text-5xl lg:text-9xl md:text-7xl -ml-40 font-bold pl-44 pt-20">
        <h1 className="text-white text-center hover-text-container">
          <span className="hover-text">We</span> <span className="hover-text"> are </span>{" "}
          <span className="hover-text text-yellow-500">Every</span>{" "}
          <span className="hover-text text-yellow-500"> where</span>
        </h1>
      </div>

      <div className="w-full bg-[#1b1918]  h-52"></div>

      <style jsx>{`
        @keyframes move {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(100px, 100px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes move-reverse {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-100px, -100px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        .animate-move {
          animation: move 5s infinite;
        }

        .animate-move-reverse {
          animation: move-reverse 5s infinite;
        }

        .hover-text-container span {
          transition: transform 0.6s, font-size 0.6s;
          display: inline-block;
        }

        .hover-text-container span:hover {
          transform: scale(1.3);
        }

        .hover-text-container span:hover ~ span {
          transform: scale(1);
        }

        .hover-text-container span:not(:hover) {
          transform: scale(1);
        }

        .hover-text {
          transition: transform 0.6s, font-size 0.6s;
        }

        .hover-text:hover {
          transform: scale(1.1);
        }

        .hover-text:hover ~ .hover-text {
          transform: scale(1);
        }

        .card-text {
          transition: transform 0.6s, font-size 0.6s;
        }

        .card-text:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default Cards;