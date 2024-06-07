import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import NavBar from '../OurServicesSecondary/NavBar';
import Footer from "../../components/Footer/Footer";
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

  useEffect(() => {
    setNavBarRendered(true);
  }, []);

  const handleMore = () => {
    setViewMore(!viewMore);
  };

  const services = [
    { name: "Corporate Event", image: CorporateEvents },
    { name: "Stall Fabrication", image: StallFabrication },
    { name: "MICE", image: mice },
    { name: "Appreciation Ceremony", image: awardEvent },
    { name: "Theme Party", image: themeParty },
    { name: "Award Ceremony", image: celebration },
    { name: "Gala Dinner", image: gala },
    { name: "Security", image: security },
    { name: "Client Meeting", image: visitor },
    { name: "AI VR Technology", image: VRTechnology },
    { name: "Brand Exhibitions", image: brand },
    { name: "Celebrity Management", image: celebrity },
    { name: "Decor And Styling", image: decorAndStyling },
    { name: "Digital Marketing", image: digitalMarketing },
    { name: "Fashion Show", image: fashionShow },
    { name: "Road Show", image: roadShow },
    { name: "Product Launch", image: productLaunch },
    { name: "Political Road Show", image: politicalRoadShow },
    { name: "Trade Show", image: tradeShow },
    { name: "Venue Sourcing", image: venueSource },
  ];

  return (
    <div className="bg-gray-900 w-full min-h-screen">
      <NavBar />
      {navBarRendered && (
        <div className="pt-28">
          <h1 className="text-3xl flex justify-center text-yellow-300 font-bold" style={{ fontFamily: 'Adamina, serif' }}>Our Services</h1>
          <h1 className="text-5xl text-white flex justify-center text-center mt-5" style={{ fontFamily: 'Chivo, sans-serif' }}>
            Tailoring Strategies to Ignite Action
          </h1>
          <h1 className="text-5xl text-white flex justify-center text-center mt-5" style={{ fontFamily: 'Chivo, sans-serif' }}>
             <span className="text-[#fcb900] px-2">for Your Brand</span>
          </h1>

          <div className={`bg-gray-900 w-full flex-wrap justify-center gap-8 mt-10 grid ${viewMore ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} grid-cols-1 md:grid-cols-2`}>
            {services.slice(0, viewMore ? services.length : 9).map((service, index) => (
              <div key={index} className='w-[21rem] h-[22rem] border border-yellow-300 rounded-xl overflow-hidden mx-2 my-4'>
                <img className='w-full h-full object-cover' src={service.image} alt={service.name} />
                <div className='py-4 px-8 bg-white -mt-16 blur-[0.5px] rounded-lg shadow-lg hover:shadow-2xl'>
                  <h2 className='text-black text-center text-3xl font-bold hover:cursor-pointer' style={{ fontFamily: 'Adamina, serif' }}>{service.name}</h2>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16 pl-8 gap-4 mb-12">
            <button 
              onClick={handleMore} 
              className="border-[3px] border-white text-white text-xl flex justify-center py-3 px-6 rounded-2xl shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625]"
              style={{ fontFamily: 'Adamina, serif' }}>
              {viewMore ? "Show Less" : "Show More"}
            </button>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="border-[3px] border-white text-white text-xl flex justify-center py-3 px-6 rounded-2xl shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625]"
              style={{ fontFamily: 'Adamina, serif' }}>
              Book Now
            </Link>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default OurServices2;














