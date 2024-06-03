import NavBar from '../OurServicesSecondary/NavBar'
import Footer from "../../components/Footer/Footer";
import StallFabrication from "./ServicesImages/Stall Fabrication - Exhibition.jpeg";
import CorporateEvents from "./ServicesImages/Award Ceremony (Corporate Events).jpg";
import mice from "./ServicesImages/mice (Corporate Event).jpg";
import awardEvent from "./ServicesImages/Appreciation Ceremony (Corporate Events).jpg";
import themeParty from "./ServicesImages/Live Event or Full Setup (Corporate Events).jpg";
import celebration from "./ServicesImages/Corporate Conferences Seminars (Corporate Event).jpg";
import gala from "./ServicesImages/gala dinner exibition.jpg";
import security from "./ServicesImages/event security - Additional Services.jpg";
import visitor from "./ServicesImages/Visitor Management Exhibition.jpeg.png";
import VRTechnology from "./ServicesImages/AI VR technology - Additional Services.jpg";
import brand from "./ServicesImages/Brand Exhibitions.jpg";
import celebrity from "./ServicesImages/celebrity management - additional services.jpg";
import decorAndStyling from "./ServicesImages/Decor and styling - Additional Services.jpg";
import digitalMarketing from "./ServicesImages/digital Marketing - Additional Services.jpg";
import fashionShow from "./ServicesImages/fashion show - Exhibition.png";
import productLaunch from "./ServicesImages/product-launch(Corporate Events).jpg";
import roadShow from "./ServicesImages/Road show Exhibition.jpg";
import tradeShow from "./ServicesImages/Trade Show (Corporate Event).jpg";
import venueSource from "./ServicesImages/Venue Sourcing - Additional Services.jpg";
import politicalRoadShow from "./ServicesImages/Political Road show Exhibition.jpg";

import { useState } from "react";

function OurServices2() {
  const [viewMore, setViewMore] = useState(false);

  const handleMore = () => {
    setViewMore(!viewMore);
  };

  return (
    <div className="bg-gray-900 w-full min-h-screen">
      <NavBar></NavBar>
      <div className="w-11/12 mx-auto">
        <div>
          <h1 className="text-white text-3xl flex justify-center font-bold">
            Our Services
          </h1>
          <h1 className="text-6xl text-white flex justify-center text-center mt-5">
            Tailoring Startegies to Ignite Action
          </h1>
          <h1 className="text-6xl text-white flex justify-center text-center mt-5">
            for Your <span className="text-[#fcb900] px-2">Brand</span>
          </h1>
        </div>

        <div className="">
        {/* First Row */}
        <div className="flex justify-start mt-10 md:gap-8 gap-4 rounded-lg">
          <div className="h-96 w-[48rem] border border-white rounded-lg">
            <img className="w-full h-full" src={CorporateEvents} alt="" />
            <div className="py-4 px-8 bg-white -mt-16  blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl">
              <h2 className="text-black text-center font-bold hover:cursor-pointer ">
                Carporate Event
              </h2>
            </div>
          </div>

          <div className="h-96 w-[48rem] border border-white rounded-lg">
            <img className="w-full h-full" src={StallFabrication} alt="" />
            <div className="py-4 px-8 bg-white -mt-16 blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl">
              <h2 className="text-black font-bold text-center hover:cursor-pointer ">
                Stall Fabrication
              </h2>
            </div>
          </div>
          <div className="h-96 w-[48rem] border border-white rounded-lg">
            <img
              className="w-full h-full"
              src={mice}
              alt="this is a mice image"
            />
            <div className="py-4 px-8 bg-white -mt-16  blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl">
              <h2 className="text-black font-bold text-center hover:cursor-pointer ">
                MICE
              </h2>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex justify-start mt-10 md:gap-8 gap-4">
          <div className="h-96 w-[48rem] border border-white rounded-lg">
            <img className="w-full h-full" src={awardEvent} alt="" />
            <div className="py-4 px-8 bg-white -mt-16  blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl">
              <h2 className="text-black font-bold text-center hover:cursor-pointer ">
               Appreciation Ceremony
              </h2>
            </div>
          </div>
          <div className="h-96 w-[48rem] border border-white rounded-lg">
            <img className="w-full h-full" src={themeParty} alt="" />
            <div className="py-4 px-8 bg-white -mt-16  blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl">
              <h2 className="text-black font-bold text-center hover:cursor-pointer ">
                Theme Party
              </h2>
            </div>
          </div>
          <div className="h-96 w-[48rem] border border-white rounded-lg">
            <img
              className="w-full h-full"
              src={celebration}
              alt="celebration image"
            />
            <div className="py-4 px-8 bg-white -mt-16  blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl">
              <h2 className="text-black font-bold text-center hover:cursor-pointer ">
               Award Cereony
              </h2>
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div className="flex justify-start mt-10 md:gap-8 gap-4">
          <div className="h-96 w-[48rem] border border-white rounded-lg">
            <img className="w-full h-full" src={gala} alt="" />
            <div className="py-4 px-8 bg-white -mt-16  blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl">
              <h2 className="text-black font-bold text-center hover:cursor-pointer ">
                Gala Dinner
              </h2>
            </div>
          </div>
          <div className="h-96 w-[48rem] border border-white rounded-lg">
            <img className="w-full h-full" src={security} alt="" />
            <div className="py-4 px-8 bg-white -mt-16  blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl">
              <h2 className="text-black font-bold text-center hover:cursor-pointer ">
                Security
              </h2>
            </div>
          </div>
          <div className="h-96 w-[48rem] border border-white rounded-lg">
            <img className="w-full h-full" src={visitor} alt="" />
            <div className="py-4 px-8 bg-white -mt-16  blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl">
              <h2 className="text-black font-bold text-center hover:cursor-pointer ">
                Client Meeting
              </h2>
            </div>
          </div>
        </div>
      </div>

        {/* more services */}

        {viewMore && (
          <div>
            {/* 4th Row */}
            <div className="flex justify-start mt-10 md:gap-8 gap-4">
              <div className="h-96 w-[48rem] border border-white rounded-lg">
                <img className="w-full h-full" src={VRTechnology} alt="" />
                <div className="py-4 px-8 bg-white -mt-16  blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl">
                  <h2 className="text-black font-bold text-center hover:cursor-pointer ">
                    AI VR Technology
                  </h2>
                </div>
              </div>
              <div className="h-96 w-[48rem] border border-white rounded-lg">
                <img className="w-full h-full" src={brand} alt="" />
                <div className="py-4 px-8 bg-white -mt-16  blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl">
                  <h2 className="text-black font-bold text-center hover:cursor-pointer ">
                    Brand Exhibitions
                  </h2>
                </div>
              </div>
              <div className="h-96 w-[48rem] border border-white rounded-lg">
                <img className="w-full h-full" src={celebrity} alt="" />
                <div className="py-4 px-8 bg-white -mt-16  blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl">
                  <h2 className="text-black font-bold text-center hover:cursor-pointer ">
                    Celebrity Management
                  </h2>
                </div>
              </div>
            </div>

            {/* fifth row */}
            <div className="flex justify-start mt-10 md:gap-8 gap-4">
              <div className="h-96 w-[48rem] border border-white rounded-lg">
                <img className="w-full h-full" src={decorAndStyling} alt="" />
                <div className="py-4 px-8 bg-white -mt-16  blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl">
                  <h2 className="text-black font-bold text-center hover:cursor-pointer ">
                    Decor And Styling
                  </h2>
                </div>
              </div>
              <div className="h-96 w-[48rem] border border-white rounded-lg">
                <img className="w-full h-full" src={digitalMarketing} alt="" />
                <div className="py-4 px-8 bg-white -mt-16  blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl">
                  <h2 className="text-black font-bold text-center hover:cursor-pointer ">
                    Digital Marketing
                  </h2>
                </div>
              </div>
              <div className="h-96 w-[48rem] border border-white rounded-lg">
                <img className="w-full h-full" src={fashionShow} alt="" />
                <div className="py-4 px-8 bg-white -mt-16  blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl">
                  <h2 className="text-black font-bold text-center hover:cursor-pointer ">
                    Fashion Show
                  </h2>
                </div>
              </div>
            </div>

            {/* 6th row */}
            <div className="flex justify-start mt-10 md:gap-8 gap-4">
              <div className="h-96 w-[48rem] border border-white rounded-lg">
                <img className="w-full h-full" src={roadShow} alt="" />
                <div className="py-4 px-8 bg-white -mt-16  blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl">
                  <h2 className="text-black font-bold text-center hover:cursor-pointer ">
                    Road Show
                  </h2>
                </div>
              </div>
              <div className="h-96 w-[48rem] border border-white rounded-lg">
                <img className="w-full h-full" src={productLaunch} alt="" />
                <div className="py-4 px-8 bg-white -mt-16  blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl">
                  <h2 className="text-black font-bold text-center hover:cursor-pointer ">
                    Product Launch
                  </h2>
                </div>
              </div>
              <div className="h-96 w-[48rem] border border-white rounded-lg">
                <img className="w-full h-full" src={politicalRoadShow} alt="" />
                <div className="py-4 px-8 bg-white -mt-16  blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl">
                  <h2 className="text-black font-bold text-center hover:cursor-pointer ">
                    Political Road Show
                  </h2>
                </div>
              </div>
            </div>

            {/* 7th row */}
            <div className="flex justify-start mt-10 md:gap-8 gap-4">
              <div className="h-96 w-[48rem] border border-white rounded-lg">
                <img className="w-full h-full" src={tradeShow} alt="" />
                <div className="py-4 px-8 bg-white -mt-16  blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl">
                  <h2 className="text-black font-bold text-center hover:cursor-pointer ">
                    Trade Show
                  </h2>
                </div>
              </div>

              <div className="flex justify-start md:gap-8 gap-4">
                <div className="h-96 w-[2rem] border border-white rounded-lg">
                  <img className="w-full h-full" src={venueSource} alt="" />
                  <div className="py-4 px-8 bg-white -mt-16  blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl">
                    <h2 className="text-black font-bold text-center hover:cursor-pointer ">
                      venue Sourcing
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* button */}

        <div className="flex justify-center mt-8 gap-5">
          <div className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            {viewMore ? (
              <button onClick={handleMore}>Show Less</button>
            ) : (
              <button onClick={handleMore}>View More</button>
            )}
          </div>
          <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Book Now
          </button>
        </div>
      </div>

      {/* footer */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default OurServices2;