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

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Video></Video>
      <Services></Services>
      <Cards></Cards>
      <About></About>
      <Portfolio></Portfolio>
      <Clients></Clients>
      <Feedback></Feedback>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  )
}

export default App
