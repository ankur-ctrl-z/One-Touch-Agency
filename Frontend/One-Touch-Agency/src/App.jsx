import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './global.css';
import NavBar from './components/Navbar/NavBar';
import Video from "./components/Video/Video";
import Services from './components/Services/Services';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Clients from './components/Clients/Clients';
import Feedback from './components/Feedback/Feedback';
import OutPortfolio2 from './Pages/OurPortfolioSecondary/OutPortfolio2';
import OurServices2 from './Pages/OurServicesSecondary/OurServices2'; // Import the Services2 component

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <div id='home'>
                                <Video />
                            </div>
                            <div id='services'>
                                <Services />
                            </div>
                            <div id='cards'>
                                <Cards />
                            </div>
                            <div id='about'>
                                <About />
                            </div>
                            <div id='portfolio'>
                                <Portfolio />
                            </div>
                            <div id='clients'>
                                <Clients />
                            </div>
                            <div id='feedback'>
                                <Feedback />
                            </div>
                            <div id='contact'>
                                <ContactForm />
                            </div>
                            <Footer />
                        </>
                    } />
                    <Route path="/out-portfolio-2" element={<OutPortfolio2 />} />
                    <Route path="/services-2" element={<OurServices2 />} /> {/* Add new route for Services2 */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;








