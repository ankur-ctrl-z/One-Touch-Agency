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
                Tailoring Strategies <br /> to Ignite Action for <br /> Your Brand
              </p>
              <button className="flex mx-auto mt-8 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  View All
              </button>
            </div>
          </div>

          {/* MICE */}
          <a href="" className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-yellow-500 border-opacity-75 p-6 rounded-lg h-56">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <h2 className="text-xl text-white font-medium title-font mb-2">MICE</h2>
            </div>
          </a>

          {/* Awards Event */}
          <a href="" className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-yellow-500 border-opacity-75 p-6 rounded-lg h-56">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 className="text-xl text-white font-medium title-font mb-2">Awards Event</h2>
            </div>
          </a>

          {/* Theme Party */}
          <a href="" className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-yellow-500 border-opacity-75 p-6 rounded-lg h-56">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                </svg>
              </div>
              <h2 className="text-xl text-white font-medium title-font mb-2">Theme Party</h2>
            </div>
          </a>

          {/* Corporate Events */}
          <a href="" className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-yellow-500 border-opacity-75 p-6 rounded-lg h-56">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                </svg>
              </div>
              <h2 className="text-xl text-white font-medium title-font mb-2">Corporate Events</h2>
            </div>
          </a>

          {/* Stall Fabrication */}
          <a href="" className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-yellow-500 border-opacity-75 p-6 rounded-lg h-56">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-xl text-white font-medium title-font mb-2">Stall Fabrication</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;

