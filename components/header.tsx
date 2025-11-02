"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Portfolio", href: "#portfolio" },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-[#0EA5E9]">ArkytUP</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-[#6B7280] hover:text-[#0EA5E9] transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-semibold border transition-all hover:opacity-90 inline-block"
              style={{ borderColor: "var(--color-accent-cyan)", color: "var(--color-accent-cyan)" }}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#0EA5E9]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#6B7280] hover:text-[#0EA5E9] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-semibold border transition-all hover:opacity-90 inline-block w-full text-center mt-2"
              style={{ borderColor: "var(--color-accent-cyan)", color: "var(--color-accent-cyan)" }}
            >
              Contact Us
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
