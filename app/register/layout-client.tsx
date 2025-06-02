"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

type RegistrationType = "delegate" | "exhibitor" | "sponsor" | "enquiry" | "brochure" | "speaker"

export default function RegistrationLayout({
  children,
  activeTab,
}: {
  children: React.ReactNode
  activeTab: string
}) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-1">
        <div className="container mx-auto">
          {/* Navigation Tabs */}
          <div className="w-full border-b">
            <div className="w-full flex justify-start bg-white h-auto p-0">
              <TabLink href={`${pathname}?t=delegate`} isActive={activeTab === "delegate"}>
                Delegate
              </TabLink>
              <TabLink href={`${pathname}?t=exhibitor`} isActive={activeTab === "exhibitor"}>
                Exhibition
              </TabLink>
              <TabLink href={`${pathname}?t=sponsor`} isActive={activeTab === "sponsor"}>
                Sponsorship
              </TabLink>
              <TabLink href={`${pathname}?t=enquiry`} isActive={activeTab === "enquiry"}>
                Enquiry
              </TabLink>
              <TabLink href={`${pathname}?t=brochure`} isActive={activeTab === "brochure"}>
                Brochure
              </TabLink>
                            <TabLink href={`${pathname}?t=brochure`} isActive={activeTab === "brochure"}>
                Speaker
              </TabLink>
            </div>

            {/* Form Content */}
            {children}
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  )
}

function TabLink({
  href,
  isActive,
  children,
}: {
  href: string
  isActive: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={`px-6 py-2 ${isActive ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"}`}
    >
      {children}
    </Link>
  )
}

function Footer() {
  return (
    <div className="bg-[#2a9d8f] text-white py-4">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold text-lg mb-2">Get in Touch</h3>
            <p className="text-sm">info@mobilityecosystem.com</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Join our Mailing list</h3>
            <div className="flex">
              <input
                placeholder="Enter Your Email Address"
                className="bg-white text-black rounded-r-none px-4 py-2 w-full"
              />
              <button className="bg-[#1e6b87] hover:bg-[#164e63] text-white px-4 py-2 rounded-l-none">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
