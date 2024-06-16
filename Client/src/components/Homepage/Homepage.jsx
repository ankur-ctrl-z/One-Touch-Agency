import React from "react";
import Cards from "./Cards";
import Clients from "./Clients";
import ContactForm from "./ContactForm";
import Feedback from "./Feedback";
// import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Video from "./Video";
import About from "./About";
// import Navbar from "./NavBar";

const Homepage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Video />
      <Services />
      <Cards />
      <About />
      <Portfolio />
      <Clients />
      <Feedback />
      <ContactForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Homepage;