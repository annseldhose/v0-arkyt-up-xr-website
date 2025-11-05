"use client"

import { useInView } from "react-intersection-observer"

const industries = [
  {
    name: "Real Estate & Architecture",
    description: "Visualize properties and designs before construction",
  },
  {
    name: "Interior Design",
    description: "Interactive interior customization and visualization",
  },
  {
    name: "Construction & Infrastructure",
    description: "Project visualization and stakeholder engagement",
  },
  {
    name: "Education & Training",
    description: "Immersive learning experiences and simulations",
  },
  {
    name: "Marketing & Product Demos",
    description: "Engaging product demonstrations and brand experiences",
  },
]

export default function Industries() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="industries" ref={ref} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-2xl mb-4">Industries We Serve</h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Transforming businesses across multiple sectors with immersive technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-[#F3F4F6]/50 to-[#1A73E8]/5 border border-[#1A73E8]/20 rounded-lg p-6 hover:from-[#F3F4F6]/80 hover:to-[#0EA5E9]/10 hover:border-[#0EA5E9]/40 transition-all duration-300 transform text-center group cursor-pointer ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <h3 className="font-semibold text-[#1F2937] mb-2 group-hover:text-[#1A73E8] transition-colors">
                {industry.name}
              </h3>
              <p className="text-sm text-[#6B7280]">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
