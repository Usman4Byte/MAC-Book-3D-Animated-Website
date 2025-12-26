import React from 'react'
import Navbar from './components/Navbar.jsx' // Changed to default import
import Hero from './components/Hero.jsx'
import ProductViewer from './components/ProductViewer.jsx'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductViewer />
    </div>
  )
}

export default App