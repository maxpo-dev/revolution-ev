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
        {/* ✅ Google Site Verification (optional) */}
        <meta
          name="google-site-verification"
          content="Yr_AowC4ajXeufTLujsbaqo_mC7DI1G2fAgN0pfeGXA"
        />

        {/* ✅ Google Tag Manager (Head) */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TWMN4XJV');
          `}
        </Script>
      </head>
      <body>
        {/* ✅ Google Tag Manager (noscript, immediately after <body>) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TWMN4XJV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
