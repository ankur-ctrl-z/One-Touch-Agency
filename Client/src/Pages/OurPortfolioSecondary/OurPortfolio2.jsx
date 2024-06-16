import tatac from "../OurPortfolioSecondary/PortfolioImages/11.jpg";
import chara from "../OurPortfolioSecondary/PortfolioImages/12.jpg";
import photoShoot from "../OurPortfolioSecondary/PortfolioImages/13.jpg";
import Bhanderi from "../OurPortfolioSecondary/PortfolioImages/14.jpg";
import dance from "../OurPortfolioSecondary/PortfolioImages/g1.jpg";
import gethering from "../OurPortfolioSecondary/PortfolioImages/c.jpg";
import sitting from "../OurPortfolioSecondary/PortfolioImages/g2.jpg";
import selfy from "../OurPortfolioSecondary/PortfolioImages/g3.jpg";
import sidly from "../OurPortfolioSecondary/PortfolioImages/g4.jpg";
import anchor from "../OurPortfolioSecondary/PortfolioImages/g5.jpg";
import meet from "../OurPortfolioSecondary/PortfolioImages/g6.jpg";
import ont from "../OurPortfolioSecondary/PortfolioImages/ont.jpg";
import { useNavigate } from "react-router-dom";


function OurPortfolio2() {
  const navigate  = useNavigate();

  const homeHandler=()=>{
    navigate('/')
  }
  return (
    <div className="w-full min-h-screen  bg-gray-900 pt-28">
      {/* container */}
      <div className="lg:ml-24 mt-10">
        {/* First Row */}
        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
          <div className="first w-full sm:w-[20rem] lg:w-[40rem] h-[18rem] transition-transform duration-500 hover:-translate-y-2 border border-yellow-500 rounded-3xl p-1 mb-4 lg:mb-0">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={tatac}
              alt=""
            />
          </div>
          <div className="second w-full sm:w-[19rem] transition-transform duration-500 hover:-translate-y-2 lg:w-[20rem] h-[18rem] lg:h-[24rem] border border-yellow-500 rounded-3xl ml-0 lg:ml-7 p-1 mb-4 lg:mb-0">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={Bhanderi}
              alt=""
            />
          </div>
          <div className="third transition-transform duration-500 hover:-translate-y-2 w-full md:w-[40rem] lg:w-[20rem] h-[18rem] lg:h-[24rem] border border-yellow-500 rounded-3xl ml-0 lg:ml-5 p-1">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={gethering}
              alt=""
            />
          </div>
        </div>

        {/* Second Row */}
        <div className=" flex gap-2 flex-wrap justify-center lg:justify-start mt-5  ">
          <div className="fourth transition-transform duration-500 hover:-translate-y-2 w-full md:w-[20rem] lg:w-[20rem] h-[18rem] lg:h-[24rem] lg:-mt-24 border border-yellow-500 rounded-3xl p-1 mb-4 lg:mb-0">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={ont}
              alt=""
            />
          </div>
          <div className="fifth transition-transform duration-500 hover:-translate-y-2 w-full md:w-[20rem] lg:w-[20rem] h-[18rem] lg:h-[24rem] lg:-mt-24 border border-yellow-500 rounded-3xl ml-0 lg:ml-5 p-1 mb-4 lg:mb-0">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={chara}
              alt=""
            />
          </div>
          <div className="sixth transition-transform duration-500 hover:-translate-y-2 w-full md:w-[40rem] lg:w-[40rem] h-[18rem] border border-yellow-500 rounded-3xl lg:mt-0 ml-0 lg:ml-5 p-1">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={photoShoot}
              alt=""
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="mt-5 flex flex-wrap justify-center lg:justify-start lg:mt-5">
          <div className="seventh transition-transform duration-500 hover:-translate-y-2 w-full md:w-[20rem] lg:w-[40rem] h-[18rem] border border-yellow-500 rounded-3xl p-1 -ml-4 mb-4 lg:ml-2 lg:mb-0">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={sidly}
              alt=""
            />
          </div>
          <div className=" eight transition-transform duration-500 hover:-translate-y-2 w-full md:w-[20rem] lg:w-[20rem] h-[18rem] lg:h-[24rem] md:ml-2 border border-yellow-500 rounded-3xl lg:ml-7 p-1 mb-4 lg:mb-0">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={anchor}
              alt=""
            />
          </div>
          <div className="nine transition-transform duration-500 hover:-translate-y-2 w-full md:w-[40rem] lg:w-[20rem] h-[18rem] lg:h-[24rem] border border-yellow-500 rounded-3xl ml-0 lg:ml-8 p-1">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={meet}
              alt=""
            />
          </div>
        </div>

        {/* Fourth Row */}
        <div className="tenth transition-transform duration-500 hover:-translate-y-2 flex flex-wrap gap-2 justify-center lg:justify-start mt-5 lg:mt-5">
          <div className="w-full md:w-[20rem] lg:-mt-20 lg:w-[20rem] h-[18rem] lg:h-[24rem] border border-yellow-500 rounded-3xl ml-0 lg:ml-2 p-1 mb-4 lg:mb-0">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={selfy}
              alt=""
            />
          </div>
          <div className="eleven transition-transform duration-500 hover:-translate-y-2 w-full md:w-[20rem] lg:-mt-20 lg:w-[20rem] h-[18rem] lg:h-[24rem] border border-yellow-500 rounded-3xl ml-0 lg:ml-3  p-1 mb-4 lg:mb-0">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={dance}
              alt=""
            />
          </div>
          <div className="twelfth transition-transform duration-500 hover:-translate-y-2 w-full md:w-[40rem] lg:w-[40rem] h-[19rem]  border border-yellow-500 rounded-3xl lg:mt-0 ml-0 lg:ml-5 p-1">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={sitting}
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button onClick={homeHandler} className="border-[3px] border-white text-white text-xl py-3 px-6 mt-8 mb-5 rounded-2xl shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625]">
            Back To Home
          </button>
        </div>
      
      </div>
    </div>
  );
}

export default OurPortfolio2;
