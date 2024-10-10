import { Parallax } from 'react-scroll-parallax'
import { LayoutGridDemo } from './LayoutGridDemo'

export default function Portfolio() {
  return (
    <Parallax speed={10}>
      <section id="portfolio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <img
          src='/assets/portbf.jfif'
          alt="Portfolio Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="z-10 text-center p-8 w-full">
          <h2 className="text-5xl font-bold mb-4 text-black" style={{fontFamily:"Qlassy,sans-serif"}}>Portfolio</h2>
          <p className="text-2xl text-slate-600" style={{fontFamily:"Satoshi,sans-serif"}}>Explore our stunning collection of photographs from around the world.</p>
          <LayoutGridDemo />
        </div>
      </section>
    </Parallax>
  )
}
