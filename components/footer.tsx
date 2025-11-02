"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B0C10] border-t border-[#1F2833] py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-[#66FCF1] mb-4">ArkytUP</h3>
            <p className="text-[#C5C6C7] text-sm">
              Transforming ideas into immersive XR experiences for emerging industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#C5C6C7]">
              <li>
                <a href="#about" className="hover:text-[#66FCF1] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#66FCF1] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#66FCF1] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#66FCF1] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-[#C5C6C7]">
              <li>3D Visualization</li>
              <li>VR Development</li>
              <li>AR Solutions</li>
              <li>Digital Twins</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-[#C5C6C7]">
              <p>arkytup@gmail.com</p>
              <p>Kakkanad, Kerala</p>
              <p>India</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1F2833] py-8 text-center text-sm text-[#C5C6C7]">
          <p>&copy; {currentYear} ArkytUP. All rights reserved. Crafted with immersive technology.</p>
        </div>
      </div>
    </footer>
  )
}
