"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Industries from "@/components/industries"
import WhyChooseUs from "@/components/why-choose-us"
import Portfolio from "@/components/portfolio"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div style={{ backgroundColor: "var(--color-bg-dark)" }} className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Portfolio />
      <Footer />
    </div>
  )
}
