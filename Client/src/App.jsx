import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import gsap from "gsap";
import { useEffect } from "react";
import "./global.css";
import NavBar from "./components/Homepage/NavBar";
import Footer from "./components/Homepage/Footer";
import OurPortfolio2 from "./Pages/OurPortfolioSecondary/OurPortfolio2";
import HomePage from "./components/Homepage/Homepage";
import OurServices2 from "./Pages/OurServicesSecondary/OurServices2";
import ContactForm2 from "./Pages/ContactForm2";
import AIVRTechnology from "./components/All-Services/AIVRTechnology";
import AppreciationCeremony from "./components/All-Services/AppreciationCeremony";
import AwardCeremony from "./components/All-Services/AwardCeremony";
import Branding from "./components/All-Services/Branding";
import CelebrityManagement from "./components/All-Services/CelebrityManagement";
import CorporateEvent from "./components/All-Services/CorporateEvent";
import DecorStyling from "./components/All-Services/DecorStyling";
import DigitalMarketing from "./components/All-Services/DigitalMarketing";
import EventSecurity from "./components/All-Services/Security";
import FashionShow from "./components/All-Services/FashionShow";
import GalaDinner from "./components/All-Services/GalaDinner";
import LiveEventFullSetup from "./components/All-Services/LiveEventFullSetup";
import MICE from "./components/All-Services/MICE";
import PoliticalRoadShow from "./components/All-Services/PoliticalRoadShow";
import ProductLaunch from "./components/All-Services/ProductLaunch";
import RoadShow from "./components/All-Services/RoadShow";
import StallFabrication from "./components/All-Services/StallFabrication";
import TradeShow from "./components/All-Services/TradeShow";
import VenueSourcing from "./components/All-Services/VenueSourcing";
import VisitorManagement from "./components/All-Services/VisitorManagement";

function App() {
  useEffect(() => {

            const handleMouseMove = (dets) => {
              gsap.to(".cursor", {
                x: dets.x,
                y: dets.y,
                ease: "power3.out",
                duration: 0.2,
              });
            };
    
            window.addEventListener("mousemove", handleMouseMove);
            return () => {
              window.removeEventListener("mousemove", handleMouseMove);
            };
          }, []);
  return (
    
    <Router>
      <div className="cursor h-[1rem] w-[1rem] rounded-full absolute z-[9999] top-[2%] left-[0%] -translate-x-1/2 -translate-y-1/2 bg-[#FCB900]"></div>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services2" element={<OurServices2 />} />
        <Route path="/portfolio2" element={<OurPortfolio2 />} />
        <Route path="/contactus" element={<ContactForm2 />} />

        {/* sub services */}
        <Route path="/services/ai-vr-technology" element={<AIVRTechnology />} />
        <Route
          path="/services/appreciation-ceremony"
          element={<AppreciationCeremony />}
        />
        <Route path="/services/award-ceremony" element={<AwardCeremony />} />
        <Route path="/services/brand-exhibitions" element={<Branding />} />
        <Route
          path="/services/celebrity-management"
          element={<CelebrityManagement />}
        />
        <Route path="/services/corporate-event" element={<CorporateEvent />} />
        <Route path="/services/decor-styling" element={<DecorStyling />} />
        <Route
          path="/services/digital-marketing"
          element={<DigitalMarketing />}
        />
        <Route path="/services/security" element={<EventSecurity />} />
        <Route path="/services/fashion-show" element={<FashionShow />} />
        <Route path="/services/gala-dinner" element={<GalaDinner />} />
        <Route path="/services/theme-party" element={<LiveEventFullSetup />} />
        <Route path="/services/mice" element={<MICE />} />
        <Route
          path="/services/political-road-show"
          element={<PoliticalRoadShow />}
        />
        <Route path="/services/product-launch" element={<ProductLaunch />} />
        <Route path="/services/road-show" element={<RoadShow />} />
        <Route
          path="/services/stall-fabrication"
          element={<StallFabrication />}
        />
        <Route path="/services/trade-show" element={<TradeShow />} />
        <Route path="/services/venue-sourcing" element={<VenueSourcing />} />
        <Route
          path="/services/client-meeting"
          element={<VisitorManagement />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
