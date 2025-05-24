import type React from "react"
import "./globals.css"
import { DM_Sans } from "next/font/google"
import localFont from "next/font/local"
import Navbar from "./components/NavBar"
import Footer from "./components/footer"
import Script from "next/script"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
})

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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PV6VP3BEPR"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PV6VP3BEPR');
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
