"use client"

export default function PortfolioVideos() {
  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="heading-2xl mb-4">Our Portfolio</h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Explore our immersive 3D and XR visualizations — bringing spaces to life before they’re built.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Real Estate Visualization */}
          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/hZfTP558THs?si=S7C43Fem7TMYKxHK"
              title="Real Estate Visualization"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
                Real Estate Visualization
              </h3>
              <p className="text-[#6B7280] text-sm">
                A realistic walkthrough of apartments and properties before construction.
              </p>
            </div>
          </div>

          {/* Interior & Exterior Visualization */}
          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/CObvE8oor_A?si=BNhRNgWZZK9PnGdW"
              title="Interior and Exterior Visualization"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
                Interior & Exterior Visualization
              </h3>
              <p className="text-[#6B7280] text-sm">
                Detailed rendering of home interiors and exteriors with realistic textures and lighting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

