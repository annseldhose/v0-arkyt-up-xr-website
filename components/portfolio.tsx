"use client"

import { useInView } from "react-intersection-observer"
import { Play } from "lucide-react"

const portfolioItems = [
  {
    title: "Real Estate Visualization",
    category: "Apartment Showcase",
    description: "Interactive 3D apartment visualization with customization",
  },
  {
    title: "VR Interior Design",
    category: "Interior Experience",
    description: "Immersive VR space design and walkthrough experience",
  },
  {
    title: "Product Demo",
    category: "Interactive Display",
    description: "3D product visualization with interactive features",
  },
  {
    title: "Digital Twin",
    category: "Infrastructure",
    description: "Digital twin of architectural complex with analytics",
  },
]

export default function Portfolio() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="portfolio" ref={ref} className="section-padding bg-gradient-to-b from-[#0B0C10] to-[#1F2833]/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-2xl mb-4">Our Portfolio</h2>
          <p className="text-[#C5C6C7] text-lg max-w-2xl mx-auto">
            Explore our latest projects and immersive experiences across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg border border-[#66FCF1]/20 hover:border-[#66FCF1]/60 transition-all duration-300 transform ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <img
                src={`/.jpg?height=400&width=500&query=${item.title.replace(/\s+/g, "-").toLowerCase()}-xr`}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/40 to-transparent flex flex-col justify-end p-6">
                <div className="transform group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm text-[#66FCF1] font-semibold mb-2">{item.category}</div>
                  <h3 className="heading-xl text-white mb-2">{item.title}</h3>
                  <p className="text-[#C5C6C7] text-sm mb-4">{item.description}</p>
                </div>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0B0C10]/40">
                <div className="w-16 h-16 rounded-full border-2 border-[#66FCF1] flex items-center justify-center hover:bg-[#66FCF1]/20">
                  <Play className="w-6 h-6 text-[#66FCF1] fill-[#66FCF1]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-lg font-semibold text-center border transition-all hover:opacity-90"
            style={{ borderColor: "var(--color-accent-cyan)", color: "var(--color-accent-cyan)" }}
          >
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  )
}
