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
    <section id="industries" ref={ref} className="section-padding bg-[#0B0C10]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-2xl mb-4">Industries We Serve</h2>
          <p className="text-[#C5C6C7] text-lg max-w-2xl mx-auto">
            Transforming businesses across multiple sectors with immersive technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-[#1F2833]/50 to-[#66FCF1]/5 border border-[#66FCF1]/20 rounded-lg p-6 hover:from-[#1F2833]/80 hover:to-[#66FCF1]/10 hover:border-[#66FCF1]/40 transition-all duration-300 transform text-center group cursor-pointer ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <h3 className="font-semibold text-white mb-2 group-hover:text-[#66FCF1] transition-colors">
                {industry.name}
              </h3>
              <p className="text-sm text-[#C5C6C7]">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
