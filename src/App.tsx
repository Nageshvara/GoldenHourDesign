"use client"

import { useState } from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { Menu, X, ChevronDown } from 'lucide-react'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

export default function PhotographyWebsite() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-black text-white">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md" style={{fontFamily:"Satoshi,sans-serif"}}>
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-4xl" style={{fontFamily:"Aotten,sans-serif"}}>Golden Hour</h1>
            <div className="w-6"></div> {/* Placeholder for symmetry */}
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-90 flex flex-col items-center justify-center" style={{fontFamily:"Satoshi,sans-serif"}}>
            <a href="#portfolio" className="text-2xl my-4 hover:text-gray-300" onClick={toggleMenu}>Portfolio</a>
            <a href="#services" className="text-2xl my-4 hover:text-gray-300" onClick={toggleMenu}>Services</a>
            <a href="#about" className="text-2xl my-4 hover:text-gray-300" onClick={toggleMenu}>About</a>
            <a href="#contact" className="text-2xl my-4 hover:text-gray-300" onClick={toggleMenu}>Contact</a>
          </div>
        )}

        {/* Hero Section */}
        <Parallax speed={-20}>
          <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
            <img
              src="/assets/download.jpg"
              alt="Hero Background"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className='flex flex-col items-center justify-center md:mt-60'>
              <img
                src="/assets/logoimg.png"
                alt="Brand Logo"
                width={300}
                height={300}
                className="z-10 mb-8 opacity-100"
              />
              <div className="flex flex-col animate-bounce z-10 items-center">
                <ChevronDown size={32} />
                <p className="text-sm mt-2">Explore</p>
              </div>
            </div>
          </section>
        </Parallax>
        <Portfolio />
        <About />
        <Services />
        <Contact />
        <footer className="bg-black py-8 text-center" style={{fontFamily:"Satoshi,sans-serif"}}>
          <p>&copy; 2024 Golden Hour. All rights reserved.</p>
        </footer>
      </div>
    </ParallaxProvider>
  )
}
