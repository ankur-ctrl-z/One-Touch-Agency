import tatac from "../OurPortfolioSecondary/PortfolioImages/11.jpg";
import chara from "../OurPortfolioSecondary/PortfolioImages/12.jpg";
import photoShoot from "../OurPortfolioSecondary/PortfolioImages/13.jpg";
import Bhanderi from "../OurPortfolioSecondary/PortfolioImages/14.jpg";
import dance from "../OurPortfolioSecondary/PortfolioImages/s2.jpg";
import gethering from "../OurPortfolioSecondary/PortfolioImages/g8.jpg";
import sitting from "../OurPortfolioSecondary/PortfolioImages/s1.jpg";
import selfy from "../OurPortfolioSecondary/PortfolioImages/s3.jpg";
import sidly from "../OurPortfolioSecondary/PortfolioImages/g4.jpg";
import anchor from "../OurPortfolioSecondary/PortfolioImages/g07.jpg";
import meet from "../OurPortfolioSecondary/PortfolioImages/g6.jpg";
import ont from "../OurPortfolioSecondary/PortfolioImages/ont.jpg";
import { useNavigate } from "react-router-dom";

function OurPortfolio2() {
  const navigate = useNavigate();

  const homeHandler = () => {
    navigate("/");
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 pt-28">
      {/* Container */}
      <div className="container mx-auto px-4 lg:px-24 mt-10">
        <div className="flex flex-col justify-center items-center ">

          {/* first row */}
          <div className="lg:flex gap-2">
            
            <div className="w-full md:w-[40rem] lg:w-[28rem] xl:w-[36rem] h-[20rem] lg:h-[20rem] xl:h-[22rem] transition-transform duration-500 hover:-translate-y-2 border border-yellow-500 rounded-3xl p-1 mb-4">
              <img className="w-full h-full rounded-3xl" src={tatac} alt="" />
            </div>

            <div className="sm:flex gap-2">
              <div className="w-full md:w-[20rem] h-[18rem] md:h-[22rem] lg:w-[16rem] lg:h-[20rem] xl:w-[20rem] xl:h-[22rem] transition-transform duration-500 hover:-translate-y-2 border border-yellow-500 rounded-3xl p-1 mb-4">
                <img
                  className="w-full h-full rounded-3xl"
                  src={Bhanderi}
                  alt=""
                />
              </div>
              <div className="w-full md:w-[20rem] h-[18rem] md:h-[22rem] lg:w-[16rem] lg:h-[20rem] xl:w-[20rem] xl:h-[22rem] transition-transform duration-500 hover:-translate-y-2 border border-yellow-500 rounded-3xl p-1 mb-4">
                <img
                  className="w-full h-full rounded-3xl"
                  src={gethering}
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* second row */}
          <div className="lg:flex gap-2">

            <div className="sm:flex gap-2">
              <div className="w-full md:w-[20rem] h-[18rem] md:h-[22rem] lg:w-[16rem] lg:h-[20rem] xl:w-[20rem] xl:h-[22rem] transition-transform duration-500 hover:-translate-y-2 border border-yellow-500 rounded-3xl p-1 mb-4">
                <img className="w-full h-full rounded-3xl" src={chara} alt="" />
              </div>
              <div className="w-full md:w-[20rem] h-[18rem] md:h-[22rem] lg:w-[16rem] lg:h-[20rem] xl:w-[20rem] xl:h-[22rem] transition-transform duration-500 hover:-translate-y-2 border border-yellow-500 rounded-3xl p-1 mb-4">
                <img
                  className="w-full h-full rounded-3xl"
                  src={photoShoot}
                  alt=""
                />
              </div>
            </div>

            <div className="w-full md:w-[40rem] lg:w-[28rem] xl:w-[36rem] h-[20rem] lg:h-[20rem] xl:h-[22rem] transition-transform duration-500 hover:-translate-y-2 border border-yellow-500 rounded-3xl p-1 mb-4">
              <img className="w-full h-full rounded-3xl" src={ont} alt="" />
            </div>

          </div>

          {/* third row */}
          <div className="lg:flex gap-2">

            <div className="w-full md:w-[40rem] lg:w-[28rem] xl:w-[36rem] h-[20rem] lg:h-[20rem] xl:h-[22rem] transition-transform duration-500 hover:-translate-y-2 border border-yellow-500 rounded-3xl p-1 mb-4">
              <img className="w-full h-full rounded-3xl" src={sidly} alt="" />
            </div>

            <div className="sm:flex gap-2">
              <div className="w-full md:w-[20rem] h-[18rem] md:h-[22rem] lg:w-[16rem] lg:h-[20rem] xl:w-[20rem] xl:h-[22rem] transition-transform duration-500 hover:-translate-y-2 border border-yellow-500 rounded-3xl p-1 mb-4">
                <img
                  className="w-full h-full rounded-3xl"
                  src={anchor}
                  alt=""
                />
              </div>
              <div className="w-full md:w-[20rem] h-[18rem] md:h-[22rem] lg:w-[16rem] lg:h-[20rem] xl:w-[20rem] xl:h-[22rem] transition-transform duration-500 hover:-translate-y-2 border border-yellow-500 rounded-3xl p-1 mb-4">
                <img className="w-full h-full rounded-3xl" src={meet} alt="" />
              </div>
            </div>

          </div>

          {/* fourth row */}
          <div className="lg:flex gap-2">

            <div className="sm:flex gap-2">
              <div className="w-full md:w-[20rem] h-[18rem] md:h-[22rem] lg:w-[16rem] lg:h-[20rem] xl:w-[20rem] xl:h-[22rem] transition-transform duration-500 hover:-translate-y-2 border border-yellow-500 rounded-3xl p-1 mb-4">
                <img className="w-full h-full rounded-3xl" src={selfy} alt="" />
              </div>
              <div className="w-full md:w-[20rem] h-[18rem] md:h-[22rem] lg:w-[16rem] lg:h-[20rem] xl:w-[20rem] xl:h-[22rem] transition-transform duration-500 hover:-translate-y-2 border border-yellow-500 rounded-3xl p-1 mb-4">
                <img className="w-full h-full rounded-3xl" src={dance} alt="" />
              </div>
            </div>

            <div className="w-full md:w-[40rem] lg:w-[28rem] xl:w-[36rem] h-[20rem] lg:h-[20rem] xl:h-[22rem] transition-transform duration-500 hover:-translate-y-2 border border-yellow-500 rounded-3xl p-1 mb-4">
              <img className="w-full h-full rounded-3xl" src={sitting} alt="" />
            </div>

          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={homeHandler}
            className="border-[3px] border-white text-white text-xl py-3 px-6 mt-8 mb-5 rounded-2xl shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625]"
          >
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurPortfolio2;
