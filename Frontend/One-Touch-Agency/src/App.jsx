import NavBar from './components/Navbar/NavBar'
import Video from "./components/Video/Video"
import Services from './components/Services/Services'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'
import Cards from './components/Cards/Cards'
import About from './components/About/About'

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Video></Video>
      <Services></Services>
      <Cards></Cards>
      <About></About>
      <ContactForm></ContactForm>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default App
