import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/Navbar/NavBar"

function OutPortfolio2() {
  return (
    // Header

    <div className="w-full min-h-screen bg-gray-900">
    <div>
        <NavBar></NavBar>
    </div>
    {/* First Row */}
    <div className="mt-36 flex justify-start ml-32">
        <div className="w-[36rem] h-[18rem] border border-yellow-500 rounded-3xl"></div>
        <div className="w-[18rem] h-[22rem] border border-yellow-500 rounded-3xl ml-7"></div>
        <div className="w-[18rem] h-[22rem] border border-yellow-500 rounded-3xl ml-5"></div>
    </div>

    {/* Second Row */}
    <div className="flex justify-start -mt-10 ml-28">
        <div className="w-[18rem] h-[22rem] border border-yellow-500 rounded-3xl ml-5"></div>
        <div className="w-[18rem] h-[22rem] border border-yellow-500 rounded-3xl ml-5"></div>
        <div className="w-[36rem] h-[18rem] border border-yellow-500 rounded-3xl mt-16 ml-5"></div>
    </div>

    {/* Third Row */}
    <div className="mt-6 flex justify-start ml-32">
        <div className="w-[36rem] h-[18rem] border border-yellow-500 rounded-3xl"></div>
        <div className="w-[18rem] h-[22rem] border border-yellow-500 rounded-3xl ml-7"></div>
        <div className="w-[18rem] h-[22rem] border border-yellow-500 rounded-3xl ml-5"></div>
    </div>

    {/* Fourth Row */}
    <div className="flex justify-start -mt-10 ml-28">
        <div className="w-[18rem] h-[22rem] border border-yellow-500 rounded-3xl ml-5"></div>
        <div className="w-[18rem] h-[22rem] border border-yellow-500 rounded-3xl ml-5"></div>
        <div className="w-[36rem] h-[18rem] border border-yellow-500 rounded-3xl mt-16 ml-5"></div>
    </div>

    {/* Footer */}

    <div>
        <Footer></Footer>
    </div>
    </div>
  )
}

export default OutPortfolio2

