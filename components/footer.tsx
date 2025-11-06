"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-[#E5E7EB] py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-[#1A73E8] mb-4">ArkytUP</h3>
            <p className="text-[#6B7280] text-sm">
              Transforming ideas into immersive XR experiences for emerging industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#1F2937] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#6B7280]">
              <li>
                <a href="#about" className="hover:text-[#1A73E8] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#1A73E8] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#1A73E8] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#1A73E8] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[#1F2937] mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-[#6B7280]">
              <li>3D Visualization</li>
              <li>VR Development</li>
              <li>AR Solutions</li>
              <li>Digital Twins</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#1F2937] mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-[#6B7280]">
              <p>arkytup@gmail.com</p>
              <p>Kakkanad, Kerala</p>
              <p>India</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E5E7EB] py-8 text-center text-sm text-[#6B7280]">
          <p>&copy; {currentYear} ArkytUP. All rights reserved. Crafted with immersive technology.</p>
        </div>
      </div>
    </footer>
  )
}
