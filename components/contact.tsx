"use client"

import { useState } from "react"
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Handle form submission - in production, send to backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section-padding bg-[#F3F4F6]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-2xl mb-4">Get in Touch</h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Ready to transform your business with immersive XR solutions? Let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white border border-[#0EA5E9]/20 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#1F2937] mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#F3F4F6] border border-[#0EA5E9]/30 rounded-lg px-4 py-3 text-[#1F2937] placeholder-[#9CA3AF]/50 focus:outline-none focus:border-[#0EA5E9] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1F2937] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#F3F4F6] border border-[#0EA5E9]/30 rounded-lg px-4 py-3 text-[#1F2937] placeholder-[#9CA3AF]/50 focus:outline-none focus:border-[#0EA5E9] transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1F2937] mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#F3F4F6] border border-[#0EA5E9]/30 rounded-lg px-4 py-3 text-[#1F2937] placeholder-[#9CA3AF]/50 focus:outline-none focus:border-[#0EA5E9] transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-accent-cyan)", color: "var(--color-bg-dark)" }}
              >
                {submitted ? "Message Sent! ✓" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-xl text-[#1F2937] mb-6">Contact Information</h3>

              <div className="space-y-4">
                <a href="mailto:arkytup@gmail.com" className="flex gap-4 items-start group">
                  <Mail className="w-6 h-6 text-[#0EA5E9] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-[#6B7280] mb-1">Email</p>
                    <p className="text-[#1F2937] group-hover:text-[#0EA5E9] transition-colors">arkytup@gmail.com</p>
                  </div>
                </a>

                <div className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-[#0EA5E9] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-[#6B7280] mb-1">Location</p>
                    <p className="text-[#1F2937]">Kakkanad, Kerala, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/arkytup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#F3F4F6] border border-[#0EA5E9]/30 rounded-lg flex items-center justify-center text-[#0EA5E9] hover:border-[#0EA5E9]/60 hover:bg-[#0EA5E9]/10 transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-[#F3F4F6] border border-[#0EA5E9]/30 rounded-lg flex items-center justify-center text-[#0EA5E9] hover:border-[#0EA5E9]/60 hover:bg-[#0EA5E9]/10 transition-all"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0EA5E9]/10 to-transparent border border-[#0EA5E9]/30 rounded-lg p-6">
              <p className="text-sm text-[#6B7280]">
                Have a project in mind? Let's create something extraordinary together. Reach out and let's discuss how
                ArkytUP can bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
