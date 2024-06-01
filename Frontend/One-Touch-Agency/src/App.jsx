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

function App() {
    return (
        <div data-scroll-container>
            <NavBar />
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
        </div>
    );
}

export default App;





