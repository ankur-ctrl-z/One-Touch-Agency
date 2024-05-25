import NavBar from './components/Navbar/NavBar'
import Video from "./components/Video/Video"
import Services from './components/Services/Services'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'
import Cards from './components/Cards/Cards'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Clients from './components/Clients/Clients'
import Feedback from './components/Feedback/Feedback'
// import OurServices2 from './Pages/OurServicesSecondary/OurServices2'
// import OutPortfolio2 from './Pages/OurPortfolioSecondary/OutPortfolio2'

function App() {
  return (
      <div>
        <NavBar></NavBar>
        <div id='home'>
          <Video></Video>
        </div>

        <div id='services'>
          <Services></Services>
        </div>

        <div id='cards'>
          <Cards></Cards>
        </div>

        <div id='about'>
          <About></About>
        </div>

        <div id='portfolio'>
          <Portfolio></Portfolio>
        </div>

        <div id='clients'>
          <Clients></Clients>
        </div>

        <div id='feedback'>
          <Feedback></Feedback>
        </div>

        <div id='contact'>
          <ContactForm></ContactForm>
        </div>
        <Footer></Footer>
      </div>
      // <OurServices2></OurServices2>
      // <OutPortfolio2></OutPortfolio2>
  )
}

export default App
