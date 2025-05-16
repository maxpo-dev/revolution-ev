import type React from "react"
import "./globals.css"
import { DM_Sans } from "next/font/google"
import localFont from "next/font/local"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
})

// Load Menda font locally
const mendaFont = localFont({
  src: [
    {
      path: "../public/fonts/menda/Menda Bold.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/menda/Menda Semibold.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-menda",
})

export const metadata = {
  title: "Revolution EV Malaysia",
  description: "Malaysia's Sustainable Move towards an Electric, Smart, and Green Future",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${mendaFont.variable}`}>
      <body>{children}</body>
    </html>
  )
}
