function Feedback() {
    return (
      <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
        <div className="text-5xl font-bold text-white mb-8">
          <h1>What Our Client Says</h1>
        </div>
        <div className="bg-white w-3/4 h-96 rounded-lg mb-8"></div>
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
  