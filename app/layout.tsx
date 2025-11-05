import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import "./styles.css"

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "ArkytUP - XR Solutions & Virtual Reality",
  description:
    "Innovative XR, VR, and AR solutions for real estate, architecture, and emerging industries. Based in Kerala, India.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png", // 👈 make sure this file is in the 'public' folder
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
