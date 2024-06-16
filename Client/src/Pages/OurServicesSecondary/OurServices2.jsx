import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CorporateEvents from "./ServicesImages/Award Ceremony (Corporate Events).jpg";
import StallFabrication from "./ServicesImages/Stall Fabrication - Exhibition.jpeg";
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

function OurServices2() {
  const [viewMore, setViewMore] = useState(false);
  const [navBarRendered, setNavBarRendered] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setNavBarRendered(true);
  }, []);

  const handleMore = () => {
    setViewMore(!viewMore);
  };
  const handleServiceClick = (servicePath) => {
    navigate(servicePath);
  };

  const services = [
    {
      name: "Corporate Event",
      image: CorporateEvents,
      path: "/services/corporate-event",
    },
    {
      name: "Stall Fabrication",
      image: StallFabrication,
      path: "/services/stall-fabrication",
    },
    { name: "MICE", image: mice, path: "/services/mice" },
    {
      name: "Appreciation Ceremony",
      image: awardEvent,
      path: "/services/appreciation-ceremony",
    },
    { name: "Theme Party", image: themeParty, path: "/services/theme-party" },
    {
      name: "Award Ceremony",
      image: celebration,
      path: "/services/award-ceremony",
    },
    { name: "Gala Dinner", image: gala, path: "/services/gala-dinner" },
    { name: "Security", image: security, path: "/services/security" },
    {
      name: "Client Meeting",
      image: visitor,
      path: "/services/client-meeting",
    },
    {
      name: "AI VR Technology",
      image: VRTechnology,
      path: "/services/ai-vr-technology",
    },
    {
      name: "Brand Exhibitions",
      image: brand,
      path: "/services/brand-exhibitions",
    },
    {
      name: "Celebrity Management",
      image: celebrity,
      path: "/services/celebrity-management",
    },
    {
      name: "Decor And Styling",
      image: decorAndStyling,
      path: "/services/decor-styling",
    },
    {
      name: "Digital Marketing",
      image: digitalMarketing,
      path: "/services/digital-marketing",
    },
    {
      name: "Fashion Show",
      image: fashionShow,
      path: "/services/fashion-show",
    },
    { name: "Road Show", image: roadShow, path: "/services/road-show" },
    {
      name: "Product Launch",
      image: productLaunch,
      path: "/services/product-launch",
    },
    {
      name: "Political Road Show",
      image: politicalRoadShow,
      path: "/services/political-road-show",
    },
    { name: "Trade Show", image: tradeShow, path: "/services/trade-show" },
    {
      name: "Venue Sourcing",
      image: venueSource,
      path: "/services/venue-sourcing",
    },
  ];

  return (
    <div className="bg-gray-900 w-full min-h-screen">
      {navBarRendered && (
        <div className="pt-28 ">
          <h1
            className="text-3xl flex justify-center text-yellow-300 font-bold"
            style={{ fontFamily: "Adamina, serif" }}
          >
            Our Services
          </h1>
          <h1
            className="text-5xl text-white flex justify-center text-center mt-5"
            style={{ fontFamily: "Chivo, sans-serif" }}
          >
            Tailoring Strategies to Ignite Action
          </h1>
          <h1
            className="text-5xl text-white flex justify-center text-center mt-5"
            style={{ fontFamily: "Chivo, sans-serif" }}
          >
            <span className="text-[#fcb900] px-2">for Your Brand</span>
          </h1>

          <div
            className={`bg-gray-900 w-full flex-wrap justify-center gap-4 sm:gap-4 grid ${
              viewMore ? "lg:grid-cols-4" : "lg:grid-cols-3 "
            } grid-cols-1 md:grid-cols-2`}
          >
            {services
              .slice(0, viewMore ? services.length : 9)
              .map((service, index) => (
                <div
                  key={index}
                  className="items-center md:ml-5 md:mr-5 md:h-[18rem] border transition-transform duration-700 hover:scale-105 border-yellow-300 rounded-xl overflow-hidden mx-2 my-4"
                  onClick={() => handleServiceClick(service.path)}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={service.image}
                    alt={service.name}
                  />
                  <div className="blur-[0.5px] capitalize mt-14 rounded-lg shadow-lg hover:shadow-2xl">
                  <h2
                  className="md:text-2xl  text-yellow-300 font-medium title-font absolute bottom-0 left-0 mb-2 ml-4 transition-all duration-300 transform -translate-y-20" 
                >
                  {service.name}
                </h2>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex justify-center mt-16 pl-8 gap-4 ">
            <button
              onClick={handleMore}
              className="border-[3px] mb-5 border-white text-white text-xl flex justify-center py-3 px-6 rounded-2xl shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625]"
              style={{ fontFamily: "Adamina, serif" }}
            >
              {viewMore ? "Show Less" : "Show More"}
            </button>

            <Link
              to="/contactus"
              smooth={true}
              duration={500}
              className="border-[3px] mb-5 border-white text-white text-xl flex justify-center py-3 px-6 rounded-2xl shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625]"
              style={{ fontFamily: "Adamina, serif" }}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default OurServices2;
