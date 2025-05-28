"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isExhibitionDropdownOpen, setIsExhibitionDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [isConferenceDropdownOpen, setIsConferenceDropdownOpen] = useState(false)
  const conferenceDropdownRef = useRef<HTMLDivElement>(null)
  const [isMobileConferenceDropdownOpen, setIsMobileConferenceDropdownOpen] = useState(false)
  const [isSponsorDropdownOpen, setIsSponsorDropdownOpen] = useState(false)
  const sponsorDropdownRef = useRef<HTMLDivElement>(null) 
  const [isPartnersDropdownOpen, setIsPartnersDropdownOpen] = useState(false)
  const partnersDropdownRef = useRef<HTMLDivElement>(null)
  const [isMobilePartnersDropdownOpen, setIsMobilePartnersDropdownOpen] = useState(false)
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false)
  const moreDropdownRef = useRef<HTMLDivElement>(null)
  const [isMobileMoreDropdownOpen, setIsMobileMoreDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.style.overflow = "auto"
    }
  }

  const handleDropdownEnter = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setter(true)
  }

  const handleDropdownLeave = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    timeoutRef.current = setTimeout(() => {
      setter(false)
    }, 200)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdowns = [
        dropdownRef.current,
        conferenceDropdownRef.current,
        sponsorDropdownRef.current,
        partnersDropdownRef.current,
        moreDropdownRef.current
      ]

      const isOutside = dropdowns.every(
        ref => ref && !ref.contains(event.target as Node)
      )
      if (isOutside) {
        setIsExhibitionDropdownOpen(false)
        setIsConferenceDropdownOpen(false)
        setIsSponsorDropdownOpen(false)
        setIsPartnersDropdownOpen(false)
        setIsMoreDropdownOpen(false)
      }
    
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-black w-full">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/image/Frame 3968606 (1).png?height=60&width=200"
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
            ref={dropdownRef} 
            className="relative"
            onMouseEnter={() => handleDropdownEnter(setIsExhibitionDropdownOpen)}
            onMouseLeave={() => handleDropdownLeave(setIsExhibitionDropdownOpen)}
          >
            <button
              onClick={() => setIsExhibitionDropdownOpen(!isExhibitionDropdownOpen)}
              className="flex items-center gap-1 text-white hover:text-gray-300 transition text-sm md:text-base"
            >
              Exhibition
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isExhibitionDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isExhibitionDropdownOpen && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 border border-gray-200"
                onMouseEnter={() => handleDropdownEnter(setIsExhibitionDropdownOpen)}
                onMouseLeave={() => handleDropdownLeave(setIsExhibitionDropdownOpen)}
              >
                <Link
                  href="/exhibition/WhyExhibit"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                  onClick={() => setIsExhibitionDropdownOpen(false)}
                >
                  Why Exhibit
                </Link>
                <Link
                  href="/exhibition/Exhibitors"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                  onClick={() => setIsExhibitionDropdownOpen(false)}
                >
                  Exhibitors
                </Link>
                <Link
                  href="/register?t=exhibitor"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors font-bold"
                  onClick={() => setIsExhibitionDropdownOpen(false)}
                >
                  Exhibitors Enquiry
                </Link>
                <Link
                  href="/register?t=brochure"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors rounded-b-md font-bold"
                  onClick={() => setIsExhibitionDropdownOpen(false)}
                >
                  Request Brochure
                </Link>
              </div>
            )}
          </div>

          <div
            ref={conferenceDropdownRef}
            className="relative"
            onMouseEnter={() => handleDropdownEnter(setIsConferenceDropdownOpen)}
            onMouseLeave={() => handleDropdownLeave(setIsConferenceDropdownOpen)}
          >
            <button
              onClick={() => setIsConferenceDropdownOpen(!isConferenceDropdownOpen)}
              className="flex items-center gap-1 text-white hover:text-gray-300 transition text-sm md:text-base"
            >
              Conference
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isConferenceDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isConferenceDropdownOpen && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 border border-gray-200"
                onMouseEnter={() => handleDropdownEnter(setIsConferenceDropdownOpen)}
                onMouseLeave={() => handleDropdownLeave(setIsConferenceDropdownOpen)}
              >
                <Link
                  href="/conference/WhyAttend"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                  onClick={() => setIsConferenceDropdownOpen(false)}
                >
                  Why Attend
                </Link>
                <Link
                  href="/conference/agenda"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                  onClick={() => setIsConferenceDropdownOpen(false)}
                >
                  Agenda
                </Link>
                <Link
                  href="/register?t=speaker"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors rounded-b-md font-bold"
                  onClick={() => setIsConferenceDropdownOpen(false)}
                >
                  Speaker Enquiry
                </Link>
              </div>
            )}
          </div>

          <div
            ref={sponsorDropdownRef}
            className="relative"
            onMouseEnter={() => handleDropdownEnter(setIsSponsorDropdownOpen)}
            onMouseLeave={() => handleDropdownLeave(setIsSponsorDropdownOpen)}
          >
            <button
              onClick={() => setIsSponsorDropdownOpen(!isSponsorDropdownOpen)}
              className="flex items-center gap-1 text-white hover:text-gray-300 transition text-sm md:text-base"
            >
              Sponsors
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isSponsorDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isSponsorDropdownOpen && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 border border-gray-200"
                onMouseEnter={() => handleDropdownEnter(setIsSponsorDropdownOpen)}
                onMouseLeave={() => handleDropdownLeave(setIsSponsorDropdownOpen)}
              >
                <Link
                  href="/sponsors/WhySponsor"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                  onClick={() => setIsSponsorDropdownOpen(false)}
                >
                  Why Sponsor
                </Link>
                <Link
                  href="/register?t=sponsor"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors font-bold"
                  onClick={() => setIsSponsorDropdownOpen(false)}
                >
                  Sponsorship Enquiry
                </Link>
              </div>
            )}
          </div>

          <div
            ref={partnersDropdownRef}
            className="relative"
            onMouseEnter={() => handleDropdownEnter(setIsPartnersDropdownOpen)}
            onMouseLeave={() => handleDropdownLeave(setIsPartnersDropdownOpen)}
          >
            <button
              onClick={() => setIsPartnersDropdownOpen(!isPartnersDropdownOpen)}
              className="flex items-center gap-1 text-white hover:text-gray-300 transition text-sm md:text-base"
            >
              Partners
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isPartnersDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isPartnersDropdownOpen && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 border border-gray-200"
                onMouseEnter={() => handleDropdownEnter(setIsPartnersDropdownOpen)}
                onMouseLeave={() => handleDropdownLeave(setIsPartnersDropdownOpen)}
              >
                <Link
                  href="/partners/MediaPartner"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                  onClick={() => setIsPartnersDropdownOpen(false)}
                >
                  Media Partner
                </Link>
                <Link
                  href="/partners/SupportingPartners"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                  onClick={() => setIsPartnersDropdownOpen(false)}
                >
                  Supporting Partner
                </Link>
                <Link
                  href="/register?t=partner"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors font-bold"
                  onClick={() => setIsPartnersDropdownOpen(false)}
                >
                  Partner Enquiry
                </Link>
              </div>
            )}
          </div>

          <div
            ref={moreDropdownRef}
            className="relative"
            onMouseEnter={() => handleDropdownEnter(setIsMoreDropdownOpen)}
            onMouseLeave={() => handleDropdownLeave(setIsMoreDropdownOpen)}
          >
            <button
              onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
              className="flex items-center gap-1 text-white hover:text-gray-300 transition text-sm md:text-base"
            >
              More
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isMoreDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isMoreDropdownOpen && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 border border-gray-200"
                onMouseEnter={() => handleDropdownEnter(setIsMoreDropdownOpen)}
                onMouseLeave={() => handleDropdownLeave(setIsMoreDropdownOpen)}
              >
                <Link
                  href="/market-outlook"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMoreDropdownOpen(false)}
                >
                  Market Outlook
                </Link>
                <Link
                  href="/more/contact"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMoreDropdownOpen(false)}
                >
                  News & Blogs
                </Link>
                <Link
                  href="/more/contact"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMoreDropdownOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  href="/FAQs"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors rounded-b-md"
                  onClick={() => setIsMoreDropdownOpen(false)}
                >
                  FAQs
                </Link>
              </div>
            )}
          </div>
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
            <Link
              href="/"
              className="block py-2 text-[#00E1B0] hover:text-gray-300 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-white hover:text-gray-300 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            <div className="space-y-1">
              <button
                onClick={() => setIsExhibitionDropdownOpen(!isExhibitionDropdownOpen)}
                className="flex items-center justify-between w-full text-left py-2 text-white hover:text-gray-300 transition"
              >
                Exhibition
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isExhibitionDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isExhibitionDropdownOpen && (
                <div className="ml-4 space-y-1 bg-gray-900 rounded-md p-2">
                  <Link
                    href="/exhibition/WhyExhibit"
                    className="block py-1 text-white hover:text-gray-300 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Why Exhibit
                  </Link>
                  <Link
                    href="/exhibition/Exhibitors"
                    className="block py-1 text-white hover:text-gray-300 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Exhibitors
                  </Link>
                  <Link
                    href="/register?t=exhibitor"
                    className="block py-1 text-white hover:text-gray-300 transition font-bold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Exhibitors Enquiry
                  </Link>
                  <Link
                    href="/register?t=brochure"
                    className="block py-1 text-white hover:text-gray-300 transition font-bold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Request Brochure
                  </Link>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <button
                onClick={() => setIsMobileConferenceDropdownOpen(!isMobileConferenceDropdownOpen)}
                className="flex items-center justify-between w-full text-left py-2 text-white hover:text-gray-300 transition"
              >
                Conference
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isMobileConferenceDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isMobileConferenceDropdownOpen && (
                <div className="ml-4 space-y-1 bg-gray-900 rounded-md p-2">
                  <Link
                    href="/conference/WhyAttend"
                    className="block py-1 text-white hover:text-gray-300 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Why Attend
                  </Link>
                  <Link
                    href="/conference/agenda"
                    className="block py-1 text-white hover:text-gray-300 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Agenda
                  </Link>
                  <Link
                    href="/register?t=speaker"
                    className="block py-1 text-white hover:text-gray-300 transition font-bold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Speaker Enquiry
                  </Link>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <button
                onClick={() => setIsSponsorDropdownOpen(!isSponsorDropdownOpen)}
                className="flex items-center justify-between w-full text-left py-2 text-white hover:text-gray-300 transition"
              >
                Sponsors
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isSponsorDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isSponsorDropdownOpen && (
                <div className="ml-4 space-y-1 bg-gray-900 rounded-md p-2">
                  <Link
                    href="/sponsors/WhySponsor"
                    className="block py-1 text-white hover:text-gray-300 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Why Sponsor
                  </Link>
                  <Link
                    href="/register?t=sponsor"
                    className="block py-1 text-white hover:text-gray-300 transition font-bold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sponsorship Enquiry
                  </Link>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <button
                onClick={() => setIsMobilePartnersDropdownOpen(!isMobilePartnersDropdownOpen)}
                className="flex items-center justify-between w-full text-left py-2 text-white hover:text-gray-300 transition"
              >
                Partners
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isMobilePartnersDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isMobilePartnersDropdownOpen && (
                <div className="ml-4 space-y-1 bg-gray-900 rounded-md p-2">
                  <Link
                    href="/partners/MediaPartner"
                    className="block py-1 text-white hover:text-gray-300 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Media Partners
                  </Link>
                  <Link
                    href="/partners/SupportingPartners"
                    className="block py-1 text-white hover:text-gray-300 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Supporting Partners
                  </Link>
                  <Link
                    href="/register?t=partner"
                    className="block py-1 text-white hover:text-gray-300 transition font-bold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Partnership Enquiry
                  </Link>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <button
                onClick={() => setIsMobileMoreDropdownOpen(!isMobileMoreDropdownOpen)}
                className="flex items-center justify-between w-full text-left py-2 text-white hover:text-gray-300 transition"
              >
                More
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isMobileMoreDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isMobileMoreDropdownOpen && (
                <div className="ml-4 space-y-1 bg-gray-900 rounded-md p-2">
                  <Link
                    href="/market-outlook"
                    className="block py-1 text-white hover:text-gray-300 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Market Outlook
                  </Link>
                  <Link
                    href="/more/contact"
                    className="block py-1 text-white hover:text-gray-300 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    News & Blogs
                  </Link>
                  <Link
                    href="/more/contact"
                    className="block py-1 text-white hover:text-gray-300 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="/FAQs"
                    className="block py-1 text-white hover:text-gray-300 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQs
                  </Link>
                </div>
              )}
            </div>

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