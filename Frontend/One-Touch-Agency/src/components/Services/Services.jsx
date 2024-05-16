import image from '../../assets/stall fabrication.jpeg';

function Services() {
  return (
    <div className='bg-black'>
      {/* Text with Button */}
      <div className="text-white text-2xl flex justify-center">
        <p>Our Services----</p>
      </div>
      <div className="text-4xl text-white">
        <h1>Tailoring <br></br>Strategies <br></br>to Ignite <br></br>Action for <br></br>Your Brand</h1>
      </div>
      <div className="text-white">
        <button>View All</button>
      </div>

      {/* Cards */}
      <div className="flex justify-center">
        {/* Original Card */}
        <div className='relative w-44 h-80 border-gray-500 rounded-lg overflow-hidden ml-auto' style={{ top: '-220px' }}>
          <img src={image} className='w-full h-full object-cover' alt="Stall Fabrication"></img>
          <p className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2'>Stall fabrication</p>
        </div>

        {/* Duplicated Cards */}
        <div className='relative w-44 h-80 border-gray-500 rounded-lg overflow-hidden ml-auto' style={{ top: '-220px' }}>
          <img src={image} className='w-full h-full object-cover' alt="Stall Fabrication"></img>
          <p className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2'>Stall fabrication</p>
        </div>

        <div className='relative w-44 h-80 border-gray-500 rounded-lg overflow-hidden ml-auto' style={{ top: '-220px' }}>
          <img src={image} className='w-full h-full object-cover' alt="Stall Fabrication"></img>
          <p className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2'>Stall fabrication</p>
        </div>
      </div>

      {/* Experience section */}

      <div >
            <h1 className="bold text-white text-9xl w-full">We are <span className='text-yellow-300'>Everywhere</span></h1>
        </div>
    </div>
  );
}

export default Services;