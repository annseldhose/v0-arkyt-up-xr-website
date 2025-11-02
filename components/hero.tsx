"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-dark pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0EA5E9 1px, transparent 1px), linear-gradient(to bottom, #0EA5E9 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            animation: "drift 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="heading-2xl mb-6 leading-tight">
            Innovative <span className="text-[#0EA5E9]">XR Solutions</span> for Real Estate and Emerging Industries
          </h1>

          <p className="text-lg text-[#6B7280] mb-8 max-w-2xl leading-relaxed">
            ArkytUP transforms ideas into immersive 3D, VR, and AR experiences — helping businesses visualize, engage,
            and grow in the digital frontier.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#portfolio"
              className="inline-block px-6 py-3 rounded-lg font-semibold text-center transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-accent-cyan)", color: "var(--color-bg-dark)" }}
            >
              Explore Our Work
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-lg font-semibold text-center border transition-all hover:opacity-90"
              style={{
                borderColor: "var(--color-accent-cyan)",
                color: "var(--color-accent-cyan)",
                backgroundColor: "transparent",
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* 3D Preview Placeholder */}
        <div
          className={`mt-12 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative h-96 bg-gradient-to-b from-[#0EA5E9]/10 to-transparent rounded-lg border border-[#0EA5E9]/20 flex items-center justify-center overflow-hidden group">
            <img
              src="/3d-apartment-visualization-xr.jpg"
              alt="XR Visualization Preview"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes drift {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(25px, 25px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </section>
  )
}
