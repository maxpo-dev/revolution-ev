"use client"

import { Suspense, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DelegateForm from "@/app/components/delegate-form"
import ExhibitorForm from "@/app/components/exhibitor-form"
import SponsorForm from "@/app/components/sponsor-form"
import EnquiryForm from "@/app/components/enquiry-form"
import BrochureForm from "@/app/components/brochure-form"

type TabType = "enquiry" | "delegate" | "exhibitor" | "sponsor" | "brochure"

export default function RegisterPage({ searchParams }: { searchParams: { t?: string } }) {
  const router = useRouter()
  const initialTab = searchParams.t || "enquiry"
  const validTypes = ["enquiry", "delegate", "exhibitor", "sponsor", "brochure"]
  const [activeTab, setActiveTab] = useState<TabType>(initialTab as TabType)

  useEffect(() => {
    if (!validTypes.includes(initialTab)) {
      router.replace("/register?t=enquiry")
    }
  }, [initialTab, router])

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
    if (initialTab === "enquiry" && window.location.search) {
      router.replace("/register", { scroll: false })
    }
  }, [initialTab, router])

  return (
    <div className="container mx-auto mt-6">
      {/* Navigation Tabs */}
      <div className="sticky top-[64px] bg-white z-10 border-b">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
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
      </div>

      {/* Form Content with padding to prevent it from starting behind navbar */}
      <div className="pt-4 mb-10">
        <Suspense fallback={<div className="p-8 text-center">Loading registration form...</div>}>
          {activeTab === "enquiry" && <EnquiryForm />}
          {activeTab === "delegate" && <DelegateForm />}
          {activeTab === "exhibitor" && <ExhibitorForm />}
          {activeTab === "sponsor" && <SponsorForm />}
          {activeTab === "brochure" && <BrochureForm />}
        </Suspense>
      </div>
    </div>
  )
}