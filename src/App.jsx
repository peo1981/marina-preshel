import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import FinBot from './components/FinBot'
import Footer from './components/Footer'

import './styles/Nav.css'
import './styles/Hero.css'
import './styles/About.css'
import './styles/Services.css'
import './styles/HowItWorks.css'
import './styles/Reviews.css'
import './styles/Contact.css'
import './styles/FinBot.css'
import './styles/Footer.css'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Reviews />
      <FinBot />
      <Contact />
      <Footer />
    </>
  )
}
