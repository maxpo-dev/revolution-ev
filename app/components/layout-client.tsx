"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import Footer from "@/app/components/footer"

type TabType = "enquiry" | "delegate" | "exhibitor" | "sponsor" | "brochure"

interface LayoutClientProps {
  children: React.ReactNode
  activeTab: string
}

export default function LayoutClient({ children, activeTab }: LayoutClientProps) {
  const router = useRouter()
  const [currentTab, setCurrentTab] = useState<TabType>((activeTab as TabType) || "enquiry")

  useEffect(() => {
    setCurrentTab((activeTab as TabType) || "enquiry")
  }, [activeTab])

  const handleTabChange = (value: string) => {
    router.push(`/register?t=${value}`)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-1">
        <div className="container mx-auto">
          {/* Navigation Tabs */}
          <Tabs value={currentTab} onValueChange={handleTabChange} className="w-full border-b">
            <TabsList className="w-full justify-start bg-white h-auto p-0">
              <TabsTrigger
                value="enquiry"
                className="px-6 py-2 data-[state=active]:bg-black data-[state=active]:text-white rounded-none"
              >
                Enquiry
              </TabsTrigger>
              <TabsTrigger
                value="delegate"
                className="px-6 py-2 data-[state=active]:bg-black data-[state=active]:text-white rounded-none"
              >
                Delegate
              </TabsTrigger>
              <TabsTrigger
                value="exhibitor"
                className="px-6 py-2 data-[state=active]:bg-black data-[state=active]:text-white rounded-none"
              >
                Exhibition
              </TabsTrigger>
              <TabsTrigger
                value="sponsor"
                className="px-6 py-2 data-[state=active]:bg-black data-[state=active]:text-white rounded-none"
              >
                Sponsorship
              </TabsTrigger>
              <TabsTrigger
                value="brochure"
                className="px-6 py-2 data-[state=active]:bg-black data-[state=active]:text-white rounded-none"
              >
                Brochure
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Form Content */}
          {children}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
