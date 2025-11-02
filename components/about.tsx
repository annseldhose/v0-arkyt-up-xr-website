"use client"

import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" ref={ref} className="section-padding bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-2xl mb-4">About ArkytUP</h2>
          <p className="text-[#C5C6C7] text-lg max-w-2xl mx-auto">
            A Kerala-based XR startup delivering cutting-edge visualization and immersive experiences using Virtual
            Reality, Augmented Reality, and 3D technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`transition-all duration-700 transform ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img
              src="/kerala-tech-startup-office.jpg"
              alt="ArkytUP Team"
              className="rounded-lg border border-[#66FCF1]/30 hover:border-[#66FCF1]/60 transition-colors"
            />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 transform ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="heading-xl text-[#66FCF1] mb-3">Our Mission</h3>
                <ul className="space-y-2 text-[#C5C6C7]">
                  <li className="flex gap-3">
                    <span className="text-[#66FCF1]">•</span>
                    <span>Empower businesses with cutting-edge XR experiences</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#66FCF1]">•</span>
                    <span>Transform visualization and customer engagement</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#66FCF1]">•</span>
                    <span>Lead innovation in immersive technologies across industries</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="heading-xl text-[#66FCF1] mb-3">Our Vision</h3>
                <ul className="space-y-2 text-[#C5C6C7]">
                  <li className="flex gap-3">
                    <span className="text-[#66FCF1]">•</span>
                    <span>Make immersive technology accessible to every business</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#66FCF1]">•</span>
                    <span>Build scalable solutions for evolving digital needs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#66FCF1]">•</span>
                    <span>Create globally impactful experiences from Kerala</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
