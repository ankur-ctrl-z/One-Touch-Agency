import Footer from "../../components/Footer/Footer";
import NavBar from "../OurPortfolioSecondary/NavBar";
import tatac from "../OurPortfolioSecondary/PortfolioImages/11.jpg";
import chara from "../OurPortfolioSecondary/PortfolioImages/12.jpg";
import photoShoot from "../OurPortfolioSecondary/PortfolioImages/13.jpg";
import Bhanderi from "../OurPortfolioSecondary/PortfolioImages/14.jpg";
import dance from "../OurPortfolioSecondary/PortfolioImages/g1.jpg";
import gethering from '../OurPortfolioSecondary/PortfolioImages/c.jpg'
import sitting from "../OurPortfolioSecondary/PortfolioImages/g2.jpg";
import selfy from "../OurPortfolioSecondary/PortfolioImages/g3.jpg";
import sidly from "../OurPortfolioSecondary/PortfolioImages/g4.jpg";
import anchor from "../OurPortfolioSecondary/PortfolioImages/g5.jpg";
import meet from "../OurPortfolioSecondary/PortfolioImages/g6.jpg";
import ont from "../OurPortfolioSecondary/PortfolioImages/ont.jpg";


function OutPortfolio2() {
  return (
    <div>
      <NavBar />

      <div className="w-full min-h-screen bg-gray-900 pt-28">
        <div className="w-11/12 mx-auto">
          {/* container */}
          <div className="lg:ml-24">
            {/* First Row */}
            <div className="flex justify-start">
              <div className="w-[36rem] h-[18rem] border border-yellow-500 rounded-3xl p-1">
                <img className="w-full h-full object-cover rounded-3xl" src={tatac} alt="" />
              </div>
              <div className="w-[18rem] h-[22rem] border border-yellow-500 rounded-3xl ml-7 p-1">
                <img className="w-full h-full object-cover rounded-3xl" src={Bhanderi} alt="" />
              </div>
              <div className="w-[18rem] h-[22rem] border border-yellow-500 rounded-3xl ml-5 p-1">
                <img className="w-full h-full object-cover rounded-3xl" src={gethering} alt="" />
              </div>
            </div>

            {/* Second Row */}
            <div className="">
              <div className="flex justify-start -mt-10 ml-28">
                <div className="w-[18rem] h-[22rem] -ml-28 border border-yellow-500 rounded-3xl p-1">
                  <img className="w-full h-full object-cover rounded-3xl" src={ont} alt="" />
                </div>
                <div className="w-[18rem] h-[22rem] border border-yellow-500 rounded-3xl ml-5 p-1">
                  <img className="w-full h-full object-cover rounded-3xl" src={chara} alt="" />
                </div>

                <div className="w-[36rem] h-[18rem] border border-yellow-500 rounded-3xl mt-16 ml-5 p-1">
                  <img className="w-full h-full object-cover rounded-3xl" src={photoShoot} alt="" />
                </div>
              </div>

              {/* Third Row */}
              <div className="mt-6 flex justify-start">
                <div className="w-[36rem] h-[18rem] border border-yellow-500 rounded-3xl p-1">
                  <img className="w-full h-full object-cover rounded-3xl" src={sidly} alt="" />
                </div>
                <div className="w-[18rem] h-[22rem] border border-yellow-500 rounded-3xl ml-7 p-1">
                  <img className="w-full h-full object-cover rounded-3xl" src={anchor} alt="" />
                </div>
                <div className="w-[18rem] h-[22rem] border border-yellow-500 rounded-3xl ml-5 p-1">
                  <img className="w-full h-full object-cover rounded-3xl" src={meet} alt="" />
                </div>
              </div>

              {/* Fourth Row */}
              <div className="flex justify-start -mt-10 -ml-5">
                <div className="w-[18rem] h-[22rem] border border-yellow-500 rounded-3xl ml-5 p-1">
                  <img className="w-full h-full object-cover rounded-3xl" src={selfy} alt="" />
                </div>
                <div className="w-[18rem] h-[22rem] border border-yellow-500 rounded-3xl ml-5 p-1">
                  <img className="w-full h-full object-cover rounded-3xl" src={dance} alt="" />
                </div>
                <div className="w-[36rem] h-[18rem] border border-yellow-500 rounded-3xl mt-16 ml-5 p-1">
                  <img className="w-full h-full object-cover rounded-3xl" src={sitting} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default OutPortfolio2;




