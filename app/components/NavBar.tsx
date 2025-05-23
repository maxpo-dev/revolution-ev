"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isExhibitionDropdownOpen, setIsExhibitionDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.style.overflow = "auto"
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-black w-full">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/image/Frame 3968606 (1).png"
              alt="Revolution EV Logo"
              width={150}
              height={60}
              className="object-contain h-auto w-auto sm:w-[180px] md:w-[200px]"
            />
          </Link>
        </div>

        <div className="hidden space-x-4 lg:space-x-8 md:flex font-menda">
          <Link href="/" className="text-[#00E1B0] hover:text-gray-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 transition text-sm md:text-base">
            About
          </Link>

          <div
  className="relative"
  onMouseEnter={() => setIsExhibitionDropdownOpen(true)}
  onMouseLeave={() => setIsExhibitionDropdownOpen(false)}
>
  <button
    onClick={() => setIsExhibitionDropdownOpen((prev) => !prev)}
    className="flex items-center gap-1 text-white hover:text-gray-300 transition text-sm md:text-base"
  >
    Exhibition
    <ChevronDown size={16} />
  </button>

  {isExhibitionDropdownOpen && (
    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
      <Link href="/exhibition/WhyExhibit" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Why Exhibit</Link>
      <Link href="/exhibition/Exhibitors" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Exhibitors</Link>
      <Link href="/register?t=exhibitor" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Exhibitors Enquiry</Link>
      <Link href="/register?t=brochure" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Request Brochure</Link>
    </div>
  )}
</div>


          <Link href="/conference" className="text-white hover:text-gray-300 transition text-sm md:text-base">
            Conference
          </Link>
          <Link href="/sponsor" className="text-white hover:text-gray-300 transition text-sm md:text-base">
            Sponsors
          </Link>
          <Link href="/partners" className="text-white hover:text-gray-300 transition text-sm md:text-base">
            Partners
          </Link>
          <Link href="/more" className="text-white hover:text-gray-300 transition text-sm md:text-base">
            More
          </Link>
        </div>

        <div className="hidden sm:block">
          <Link href="/register">
            <button
              className="
                relative z-10 bg-[#333333] text-white px-4 sm:px-6 py-2 font-menda rounded text-xs sm:text-sm
                transition-all duration-700 ease-out
                before:absolute before:inset-0 before:rounded before:-z-10 
                before:transition-all before:duration-700 before:opacity-0
                hover:before:opacity-100 hover:before:shadow-[0_0_40px_10px_rgba(32,198,216,0.6)]
              "
            >
              Register Now
            </button>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 max-h-[calc(100vh-70px)] overflow-y-auto">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link href="/" className="block py-2 text-[#00E1B0] hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" className="block py-2 text-white hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>About</Link>

            <div className="space-y-1">
              <button
                onClick={() => setIsExhibitionDropdownOpen(!isExhibitionDropdownOpen)}
                className="block w-full text-left py-2 text-white hover:text-gray-300 transition"
              >
                Exhibition {isExhibitionDropdownOpen ? "▲" : "▼"}
              </button>
              {isExhibitionDropdownOpen && (
                <div className="ml-4 space-y-1">
                  <Link href="/exhibition" className="block py-1 text-white hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>Overview</Link>
                  <Link href="/exhibition/why-exhibit" className="block py-1 text-white hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>Why Exhibit</Link>
                  <Link href="/exhibition/floor-plan" className="block py-1 text-white hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>Floor Plan</Link>
                  <Link href="/exhibition/request-brochure" className="block py-1 text-white hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>Request Brochure</Link>
                </div>
              )}
            </div>

            <Link href="/conference" className="block py-2 text-white hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>Conference</Link>
            <Link href="/sponsor" className="block py-2 text-white hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>Sponsors</Link>
            <Link href="/partners" className="block py-2 text-white hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>Partners</Link>
            <Link href="/more" className="block py-2 text-white hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>More</Link>
            <div className="pt-2">
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                <button
                  className="
                    w-full relative z-10 bg-[#333333] text-white px-4 py-2 font-menda rounded text-sm
                    transition-all duration-700 ease-out
                    before:absolute before:inset-0 before:rounded before:-z-10 
                    before:transition-all before:duration-700 before:opacity-0
                    hover:before:opacity-100 hover:before:shadow-[0_0_40px_10px_rgba(32,198,216,0.6)]
                  "
                >
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
