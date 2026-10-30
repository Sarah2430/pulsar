import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import IncidentBanner from './components/IncidentBanner'
import Activities from './components/Activities'
import CompanyDetails from './components/CompanyDetails'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  // Fade sections in as they scroll into view.
  // Any element with the "reveal" class gets "is-visible" once it appears on screen.
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <IncidentBanner />
        <Activities />
        <CompanyDetails />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
