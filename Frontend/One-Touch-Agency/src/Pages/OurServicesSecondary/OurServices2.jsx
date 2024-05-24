import NavBar from "../../components/Navbar/NavBar"
import Footer from "../../components/Footer/Footer"

function OurServices2() {
  return (
    
    <div>
      <NavBar></NavBar>
    <div className="bg-gray-900 w-full min-h-screen mt-32">
        <div>
            <h1 className="text-white text-3xl flex justify-center font-bold">Our Services</h1>
            <h1 className="text-6xl text-white flex justify-start ml-64 mt-5">Tailoring Startegies to Ignite Action</h1>
            <h1 className="text-6xl text-white flex justify-center mt-5">for Your Brand</h1>
        </div>
        {/* First Row */}
        <div className="flex justify-start mt-10 gap-8 ml-36 rounded-lg">
        <div className="h-96 w-96 border border-white rounded-lg"></div>
        <div className="h-96 w-96 border border-white rounded-lg"></div>
        <div className="h-96 w-96 border border-white rounded-lg"></div>
        </div>
        {/* Second Row */}
        <div className="flex justify-start mt-24 gap-8 ml-36">
        <div className="h-96 w-96 border border-white rounded-lg"></div>
        <div className="h-96 w-96 border border-white rounded-lg"></div>
        <div className="h-96 w-96 border border-white rounded-lg"></div> 
        </div>
        {/* Third Row */}
        <div className="flex justify-start mt-24 gap-8 ml-36">
        <div className="h-96 w-96 border border-white rounded-lg"></div>
        <div className="h-96 w-96 border border-white rounded-lg"></div>
        <div className="h-96 w-96 border border-white rounded-lg"></div> 
        </div>

        <div className='flex justify-center mt-8'>
        <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
          Book Now
        </button>
        </div>

        {/* FOOTER */}

        <div>
          <Footer></Footer>
        </div>
    </div>
  </div>
  )
}

export default OurServices2