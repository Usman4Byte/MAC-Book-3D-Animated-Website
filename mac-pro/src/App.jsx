import React from 'react'
import Navbar from './components/Navbar.jsx' // Changed to default import
import Hero from './components/Hero.jsx'
import ProductViewer from './components/ProductViewer.jsx'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Showcase from './components/Showcase.jsx'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </div>
  )
}

export default App