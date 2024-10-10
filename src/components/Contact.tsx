import { Parallax } from 'react-scroll-parallax'
import { Button } from './ui/button'

export default function Contact() {
  return (
    <Parallax speed={10}>
      <section id="contact" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <img
          src='/assets/fogfor.jfif'
          alt="Contact Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-8" style={{fontFamily:"Qlassy,sans-serif"}}>
          LET'S BRING YOUR VISION TO LIFE.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors duration-300" style={{fontFamily:"Satoshi,sans-serif"}}>
            LEARN MORE
          </Button>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors duration-300" style={{fontFamily:"Satoshi,sans-serif"}}>
            CONNECT NOW
          </Button>
        </div>
      </div>
      </section>
    </Parallax>
  )
}
