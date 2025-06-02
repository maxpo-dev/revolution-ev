"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setActiveDropdown(null) // Close any open dropdowns when toggling menu
  }

  const handleDropdownEnter = (dropdownName: string) => {
    if (isMobile) return // Don't use hover on mobile

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setActiveDropdown(dropdownName)
  }

  const handleDropdownLeave = () => {
    if (isMobile) return // Don't use hover on mobile

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const toggleMobileDropdown = (dropdownName: string) => {
    if (!isMobile) return // Only for mobile
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  const closeAllDropdowns = () => {
    setActiveDropdown(null)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".dropdown-container")) {
        closeAllDropdowns()
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

  const dropdownItems = {
    exhibition: [
      { href: "/exhibition/WhyExhibit", label: "Why Exhibit" },
      { href: "/exhibition/Exhibitors", label: "Exhibitors" },
      { href: "/register?t=exhibitor", label: "Exhibitors Enquiry", bold: true },
      { href: "/register?t=brochure", label: "Request Brochure", bold: true },
    ],
    conference: [
      { href: "/conference/WhyAttend", label: "Why Attend" },
      { href: "/conference/agenda", label: "Agenda" },
      { href: "/register?t=speaker", label: "Speaker Enquiry", bold: true },
    ],
    sponsors: [
      { href: "/sponsors/WhySponsor", label: "Why Sponsor" },
      { href: "/register?t=sponsor", label: "Sponsorship Enquiry", bold: true },
    ],
    partners: [
      { href: "/partners/MediaPartner", label: "Media Partner" },
      { href: "/partners/supportingpartners", label: "Supporting Partner" },
      { href: "/register?t=partner", label: "Partner Enquiry", bold: true },
    ],
    more: [
      { href: "/market-outlook", label: "Market Outlook" },
      { href: "/News&Blogs", label: "News & Blogs" },
      { href: "/testimonial", label: "Testimonials" },
      { href: "/FAQs", label: "FAQs" },
    ],
  }

  const DropdownMenu = ({
    name,
    label,
    items,
  }: {
    name: string
    label: string
    items: typeof dropdownItems.exhibition
  }) => {
    const isOpen = activeDropdown === name

    return (
      <div
        className="relative dropdown-container"
        onMouseEnter={() => handleDropdownEnter(name)}
        onMouseLeave={handleDropdownLeave}
      >
        <button
          onClick={() => (isMobile ? toggleMobileDropdown(name) : setActiveDropdown(isOpen ? null : name))}
          className="flex items-center gap-1 text-white hover:text-gray-300 transition text-sm md:text-base"
        >
          {label}
          <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div
            className={`
            absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 border border-gray-200
            ${isMobile ? "relative mt-1 w-full" : ""}
          `}
          >
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`
                  block px-4 py-2 text-sm hover:bg-gray-100 transition-colors
                  ${isMobile ? "text-white bg-gray-900 hover:bg-gray-800" : "text-black"}
                  ${item.bold ? "font-bold" : ""}
                  ${index === items.length - 1 ? "rounded-b-md" : ""}
                `}
                onClick={() => {
                  closeAllDropdowns()
                  if (isMobile) setIsMenuOpen(false)
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

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

        {/* Desktop Navigation */}
        <div className="hidden space-x-4 lg:space-x-8 md:flex font-menda">
          <Link href="/" className="text-[#00E1B0] hover:text-gray-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 transition text-sm md:text-base">
            About
          </Link>

          <DropdownMenu name="exhibition" label="Exhibition" items={dropdownItems.exhibition} />
          <DropdownMenu name="conference" label="Conference" items={dropdownItems.conference} />
          <DropdownMenu name="sponsors" label="Sponsors" items={dropdownItems.sponsors} />
          <DropdownMenu name="partners" label="Partners" items={dropdownItems.partners} />
          <DropdownMenu name="more" label="More" items={dropdownItems.more} />
        </div>

        {/* Register Button */}
        <div className="hidden sm:block">
          <Link href="/register">
            <button className="relative z-10 bg-[#333333] text-white px-4 sm:px-6 py-2 font-menda rounded text-xs sm:text-sm transition-all duration-700 ease-out before:absolute before:inset-0 before:rounded before:-z-10 before:transition-all before:duration-700 before:opacity-0 hover:before:opacity-100 hover:before:shadow-[0_0_40px_10px_rgba(32,198,216,0.6)]">
              Register Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
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
              <DropdownMenu name="exhibition" label="Exhibition" items={dropdownItems.exhibition} />
            </div>

            <div className="space-y-1">
              <DropdownMenu name="conference" label="Conference" items={dropdownItems.conference} />
            </div>

            <div className="space-y-1">
              <DropdownMenu name="sponsors" label="Sponsors" items={dropdownItems.sponsors} />
            </div>

            <div className="space-y-1">
              <DropdownMenu name="partners" label="Partners" items={dropdownItems.partners} />
            </div>

            <div className="space-y-1">
              <DropdownMenu name="more" label="More" items={dropdownItems.more} />
            </div>

            <div className="pt-2">
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full relative z-10 bg-[#333333] text-white px-4 py-2 font-menda rounded text-sm transition-all duration-700 ease-out before:absolute before:inset-0 before:rounded before:-z-10 before:transition-all before:duration-700 before:opacity-0 hover:before:opacity-100 hover:before:shadow-[0_0_40px_10px_rgba(32,198,216,0.6)]">
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
