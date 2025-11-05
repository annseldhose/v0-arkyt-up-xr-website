"use client"

import { useState } from "react"
import { Mail, MapPin, Linkedin, Instagram, Phone } from "lucide-react"

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
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section-padding bg-[#F3F4F6]/50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="heading-2xl mb-4">Get in Touch</h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Ready to transform your business with immersive XR solutions? Let's talk.
          </p>
        </div>

        {/* Contact Info - Centered */}
        <div className="flex flex-col items-center space-y-10">
          <div>
            <h3 className="heading-xl text-[#1F2937] mb-6">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:arkytup@gmail.com"
                className="flex gap-4 items-center justify-center group"
              >
                <Mail className="w-6 h-6 text-[#0EA5E9]" />
                <div>
                  <p className="text-sm text-[#6B7280] mb-1">Email</p>
                  <p className="text-[#1F2937] group-hover:text-[#0EA5E9] transition-colors">
                    arkytup@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+918078825004"
                className="flex gap-4 items-center justify-center group"
              >
                <Phone className="w-6 h-6 text-[#0EA5E9]" />
                <div>
                  <p className="text-sm text-[#6B7280] mb-1">Phone</p>
                  <p className="text-[#1F2937] group-hover:text-[#0EA5E9] transition-colors">
                    +91 80788 25004
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex gap-4 items-center justify-center">
                <MapPin className="w-6 h-6 text-[#0EA5E9]" />
                <div>
                  <p className="text-sm text-[#6B7280] mb-1">Location</p>
                  <p className="text-[#1F2937]">Kakkanad, Kerala, India</p>
                </div>
              </div>
            </div>
          </div>

  <div className="flex justify-center gap-4 text-[#1A73E8]">
  <a
    href="https://www.linkedin.com/company/arkytup/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-[#F3F4F6] border border-[#1A73E8]/30 rounded-lg flex items-center justify-center hover:border-[#1A73E8]/60 hover:bg-[#1A73E8]/10 transition-all"
  >
    <Linkedin size={20} />
  </a>
  <a
    href="https://www.instagram.com/arkytup?igsh=aHAyaTl2ZXU5anRk"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-[#F3F4F6] border border-[#1A73E8]/30 rounded-lg flex items-center justify-center hover:border-[#1A73E8]/60 hover:bg-[#1A73E8]/10 transition-all"
  >
    <Instagram size={20} />
  </a>
</div>




        {/* Description Box */}
<div className="bg-gradient-to-br from-[#1A73E8]/10 to-transparent border border-[#1A73E8]/30 rounded-lg p-6 max-w-xl text-center">
  <p className="text-sm text-[#6B7280]">
    Have a project in mind? Let's create something extraordinary together. Reach out and
    let's discuss how <span className="font-semibold !text-[#1A73E8]">ArkytUP</span> can
    bring your vision to life.
  </p>
</div>

        </div>
      </div>
    </section>
  )
}

