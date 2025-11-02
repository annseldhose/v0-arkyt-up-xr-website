"use client"

import { useInView } from "react-intersection-observer"
import { useState, useRef } from "react"
import { Play, Pause } from "lucide-react"

const portfolioItems = [
  {
    title: "Real Estate Visualization",
    category: "Apartment Showcase",
    description: "Interactive 3D apartment visualization with customization",
    videoUrl: "/real-estate.mp4",
  },
  {
    title: "VR Interior Design",
    category: "Interior Experience",
    description: "Immersive VR space design and walkthrough experience",
    videoUrl: "/interiors.mp4",
  },
]

export default function Portfolio() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const videoRefs = useRef<HTMLVideoElement[]>([])
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handlePlayPause = (index: number) => {
    const video = videoRefs.current[index]
    if (!video) return

    // Pause all other videos
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) v.pause()
    })

    // Toggle play/pause on selected video
    if (video.paused) {
      video.play()
      setActiveIndex(index)
    } else {
      video.pause()
      setActiveIndex(null)
    }
  }

  const handleVideoEnded = (index: number) => {
    if (activeIndex === index) setActiveIndex(null)
  }

  return (
    <section
      id="portfolio"
      ref={ref}
      className="section-padding bg-gradient-to-b from-white to-[#F3F4F6]/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-2xl mb-4">Our Portfolio</h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Explore our latest projects and immersive experiences across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-lg overflow-hidden border border-gray-200 hover:border-[#0EA5E9]/60 transition-all duration-300 transform ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Video Container */}
              <div className="relative w-full overflow-hidden rounded-lg">
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[index] = el
                  }}
                  src={item.videoUrl}
                  onEnded={() => handleVideoEnded(index)}
                  controls={false}
                  muted={false}
                  playsInline
                  preload="metadata"
                  className="w-full h-80 object-cover rounded-lg"
                />

                {/* Play/Pause Button */}
                <button
                  onClick={() => handlePlayPause(index)}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    activeIndex === index
                      ? "opacity-0 group-hover:opacity-100"
                      : "opacity-100"
                  } bg-transparent hover:bg-black/10`}
                >
                  <div className="w-16 h-16 rounded-full border-2 border-[#0EA5E9] flex items-center justify-center bg-white/70 backdrop-blur-sm">
                    {activeIndex === index ? (
                      <Pause className="w-6 h-6 text-[#0EA5E9]" />
                    ) : (
                      <Play className="w-6 h-6 text-[#0EA5E9] fill-[#0EA5E9]" />
                    )}
                  </div>
                </button>
              </div>

              {/* Text Content Below Video */}
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
