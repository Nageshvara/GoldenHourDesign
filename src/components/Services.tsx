import { Parallax } from 'react-scroll-parallax'
import { Camera, Video } from 'lucide-react'
import { IconDrone } from '@tabler/icons-react'

export default function Services() {
  const services = [
    {
      title: "PHOTOGRAPHY",
      description: "Commercial Photography Services for story driven content with a clean and timeless style, creating deeper connections with any audience.",
      icon: <Camera className="w-6 h-6" />,
      gear: ["Sony Alpha A1", "50mm f/1.2 GM Lens", "35 MP Images"],
      image: "/assets/camera.jfif"
    },
    {
      title: "CINEMATOGRAPHY",
      description: "Captivating and meaningful high quality cinematic footage, professional editing, sound design, and color grading.",
      icon: <Video className="w-6 h-6" />,
      gear: ["Up To 8K/60p Recording", "Sony FX6 Cinema Camera", "Graded with DaVinci Resolve"],
      image: "/assets/videogear.jfif"
    },
    {
      title: "AERIAL SERVICES",
      description: "Taking content creation to new heights through breathtaking aerial drone imaging and cinematography for Real Estate, Landscapes and Films.",
      icon: <IconDrone className="w-6 h-6" />,
      gear: ["DJI Mavic 3", "Hasselblad Camera", "Fully Licensed / Insured"],
      image: "/assets/dronecam.jfif"
    }
  ]
  return (
    <Parallax speed={10}>
      <section id="services" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <img
          src='/assets/portbf.jfif'
          alt="Services Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="z-10 text-center p-8 w-full">
        <h2 className="text-5xl font-bold mb-4 text-black" style={{fontFamily:"Qlassy,sans-serif"}}>Services</h2>
        <p className="text-2xl text-slate-600" style={{fontFamily:"Satoshi,sans-serif"}}>Explore our stunning collection of photographs from around the world.</p>
        <div className="bg-background min-h-screen flex items-center justify-center p-4 relative">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg group">
              <img
                src={service.image}
                alt={service.title}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 group-hover:bg-opacity-80">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div className='text-center flex flex-col items-center'>
                    <h3 className="text-white text-xl mb-2 flex items-center">
                      {service.icon}
                      <span className="ml-2" style={{fontFamily:"Qlassy,sans-serif"}}>{service.title}</span>
                    </h3>
                    <p className="text-gray-300 text-sm mb-4" style={{fontFamily:"Satoshi,sans-serif"}}>{service.description}</p>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-2" style={{fontFamily:"Qlassy,sans-serif"}}>
                      {service.title === "PHOTOGRAPHY" ? "PHOTO GEAR" : 
                       service.title === "CINEMATOGRAPHY" ? "VIDEO GEAR" : "DRONE GEAR"}
                    </h4>
                    <ul className="text-gray-300 text-xs" style={{fontFamily:"Satoshi,sans-serif"}}>
                      {service.gear.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
      </section>
    </Parallax>
  )
}
