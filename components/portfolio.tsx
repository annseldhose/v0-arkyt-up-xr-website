"use client"

import { useInView } from "react-intersection-observer"
import { Play } from "lucide-react"

const portfolioItems = [
  {
    title: "Real Estate Visualization",
    category: "Apartment Showcase",
    description: "Interactive 3D apartment visualization with customization",
    videoUrl: "https://youtu.be/hZfTP558THs?si=7-qOwjOckmrCfwNL",
  },
  {
    title: "VR Interior Design",
    category: "Interior Experience",
    description: "Immersive VR space design and walkthrough experience",
    videoUrl: "https://youtu.be/CObvE8oor_A?si=HAwMbrKb22yY1zXg", // 👈 replace with real link
  },
]

export default function Portfolio() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      id="portfolio"
      ref={ref}
      className="section-padding bg-gradient-to-b from-white to-[#F3F4F6]/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2xl mb-4">Our Portfolio</h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Explore our latest projects and immersive experiences across industries.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-lg overflow-hidden border border-gray-200 hover:border-[#0EA5E9]/60 transition-all duration-300 transform ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Thumbnail / Placeholder */}
              <div className="relative w-full h-80 bg-gray-100 flex items-center justify-center rounded-lg">
                {/* Play Button (Clickable Link) */}
                <a
                  href={item.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-all"
                >
                  <div className="w-16 h-16 rounded-full border-2 border-[#0EA5E9] flex items-center justify-center bg-white/70 backdrop-blur-sm">
                    <Play className="w-6 h-6 text-[#0EA5E9] fill-[#0EA5E9]" />
                  </div>
                </a>
              </div>

              {/* Text Content */}
              <div className="mt-5 text-center">
                <div className="text-sm text-[#0EA5E9] font-semibold mb-2">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-2">{item.title}</h3>
                <p className="text-[#6B7280] text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-lg font-semibold text-center border transition-all hover:opacity-90"
            style={{
              borderColor: "var(--color-accent-cyan)",
              color: "var(--color-accent-cyan)",
            }}
          >
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  )
}

