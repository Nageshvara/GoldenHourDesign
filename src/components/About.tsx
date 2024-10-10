import { Parallax } from 'react-scroll-parallax'
import { Button } from './ui/button'

export default function About() {
  return (
    <Parallax speed={10}>
      <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        
        {/* Background Image */}
        <img
          src='/assets/abtbg.jfif'
          alt="About Background"
          className="absolute inset-0 object-cover w-full h-full z-0"
        />
        
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Main content */}
        <div className="relative max-w-6xl w-full bg-background rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-20 m-8">
          {/* Image section */}
          <div className="md:w-1/2 relative">
            <img
              src="/assets/personimg.jfif"  // Ensure this image is relevant
              alt="Ram from the movie 96"
              width={600}
              height={300}  // Reduced height for the image
              className="w-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
            />
          </div>
          
          {/* Text content */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <div className="text-yellow-400 text-sm font-semibold mb-2" style={{fontFamily:"Satoshi,sans-serif"}}>MEET RAM</div>
            <h2 className="text-white text-5xl mb-4" style={{fontFamily:"Qlassy,sans-serif"}}>RAM</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6" style={{fontFamily:"Satoshi,sans-serif"}}>
              A nostalgic photographer who captures the essence of love and memories.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6" style={{fontFamily:"Satoshi,sans-serif"}}>
              Ram is portrayed as a sensitive and introspective character who deeply cherishes his past.He specializes in visual storytelling, highlighting the beauty of relationships and the pain of separation, often evoking a sense of longing in his photographs.
            </p>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-[#0a192f] transition-colors duration-300 self-start" style={{fontFamily:"Satoshi,sans-serif"}}>
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>
    </Parallax>
  )
}
