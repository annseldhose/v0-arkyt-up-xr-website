"use client"

import { useInView } from "react-intersection-observer"
import { Check } from "lucide-react"

const advantages = [
  "Tailored XR solutions for every business need",
  "Experienced developers & designers in Unreal, Unity & 3D tech",
  "Scalable, cross-platform deployment (Web, PC, VR, AR)",
  "Competitive pricing & strong client collaboration",
]

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-[#F3F4F6]/50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`transition-all duration-700 transform ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img
              src="/xr-vr-technology-development.jpg"
              alt="Our Advantages"
              className="rounded-lg border border-[#1A73E8]/30 hover:border-[#1A73E8]/60 transition-colors"
            />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 transform ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="heading-2xl mb-8">Why Choose ArkytUP</h2>

            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex gap-4">
                  <Check className="w-6 h-6 text-[#1A73E8] flex-shrink-0 mt-1" />
                  <p className="text-[#6B7280] text-lg">{advantage}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block px-6 py-3 rounded-lg font-semibold text-center transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-accent-cyan)", color: "var(--color-bg-dark)" }}
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
