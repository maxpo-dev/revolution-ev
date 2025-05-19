"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DelegateForm from "@/app/components/delegate-form"
import ExhibitorForm from "@/app/components/exhibitor-form"
import SponsorForm from "@/app/components/sponsor-form"
import EnquiryForm from "@/app/components/enquiry-form"
import BrochureForm from "@/app/components/brochure-form"
import { useRouter, usePathname } from "next/navigation"

type TabType = "enquiry" | "delegate" | "exhibitor" | "sponsor" | "brochure"

interface RegisterTabsProps {
  initialTab: string
}

export default function RegisterTabs({ initialTab }: RegisterTabsProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState<TabType>(
    ["enquiry", "delegate", "exhibitor", "sponsor", "brochure"].includes(initialTab)
      ? (initialTab as TabType)
      : "enquiry",
  )

  const handleTabChange = (value: string) => {
    setActiveTab(value as TabType)

    // Always update URL based on selected tab
    if (value === "enquiry") {
      // For enquiry, always set URL to /register without query parameters
      router.replace("/register", { scroll: false })
    } else {
      // For other tabs, add the query parameter
      router.replace(`/register?t=${value}`, { scroll: false })
    }
  }

  // Update URL on initial load if needed
  useEffect(() => {
    // This ensures the URL is correct on initial load
    if (initialTab === "enquiry") {
      if (window.location.search) {
        router.replace("/register", { scroll: false })
      }
    } else if (initialTab !== "enquiry" && window.location.search !== `?t=${initialTab}`) {
      router.replace(`/register?t=${initialTab}`, { scroll: false })
    }
  }, [initialTab, router])

  return (
    <div className="flex flex-col">
      {/* Navigation Tabs */}
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full border-b sticky top-0 bg-white z-10">
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

      {/* Form Content with padding to prevent it from starting behind navbar */}
      <div className="pt-2">
        {activeTab === "enquiry" && <EnquiryForm />}
        {activeTab === "delegate" && <DelegateForm />}
        {activeTab === "exhibitor" && <ExhibitorForm />}
        {activeTab === "sponsor" && <SponsorForm />}
        {activeTab === "brochure" && <BrochureForm />}
      </div>
    </div>
  )
}
