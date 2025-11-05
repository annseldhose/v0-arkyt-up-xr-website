"use client"

import { useInView } from "react-intersection-observer"
import { Cable as Cube, Glasses, Zap, Palette, Video } from "lucide-react"

const services = [
  {
    icon: Cube,
    title: "Apartment Visualization",
    description: "Stunning 3D apartment visualizations that help real estate clients make confident decisions.",
  },
  {
    icon: Glasses,
    title: "VR Interior & Exterior",
    description: "Immersive VR experiences with interactive configurators for space customization.",
  },
  {
    icon: Zap,
    title: "Digital Twins & 3D Platforms",
    description: "3D interactive platforms and digital twin technology for complex environments.",
  },
  {
    icon: Palette,
    title: "Custom XR Experiences",
    description: "Bespoke XR solutions tailored to your unique business challenges and goals.",
  },
  {
    icon: Video,
    title: "Product Visualization",
    description: "Interactive 3D product demonstrations that drive engagement and conversions.",
  },
  {
    icon: Cube,
    title: "Extended Reality Solutions",
    description: "Full-spectrum XR solutions across web, PC, mobile, VR, and AR platforms.",
  },
]

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="services" ref={ref} className="section-padding bg-gradient-to-b from-white to-[#F3F4F6]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-2xl mb-4">What We Offer</h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Comprehensive XR solutions designed to transform how your business engages with customers and stakeholders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`bg-[#F3F4F6]/40 border border-[#1A73E8]/20 rounded-lg p-8 hover:border-[#1A73E8]/60 hover:bg-[#F3F4F6]/60 transition-all duration-300 transform ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Icon className="w-12 h-12 text-[#0EA5E9] mb-4" />
                <h3 className="heading-xl mb-2 text-[#1F2937]">{service.title}</h3>
                <p className="text-[#6B7280]">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-lg font-semibold text-center transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--color-accent-cyan)", color: "var(--color-bg-dark)" }}
          >
            Learn More About Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
