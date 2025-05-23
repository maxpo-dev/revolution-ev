// app/register/RegisterPageClient.tsx
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

export default function RegisterPageClient({ initialTab }: { initialTab: string }) {
  const router = useRouter()
  const validTypes = ["enquiry", "delegate", "exhibitor", "sponsor", "brochure"]
  const [activeTab, setActiveTab] = useState<TabType>(
    validTypes.includes(initialTab) ? (initialTab as TabType) : "enquiry"
  )

  useEffect(() => {
    if (!validTypes.includes(initialTab)) {
      router.replace("/register?t=enquiry")
    }
  }, [initialTab, router])

  const handleTabChange = (value: string) => {
    setActiveTab(value as TabType)
    router.replace(value === "enquiry" ? "/register" : `/register?t=${value}`, { scroll: false })
  }

  useEffect(() => {
    if (initialTab === "enquiry" && window.location.search) {
      router.replace("/register", { scroll: false })
    }
  }, [initialTab, router])

  return (
    <div className="container mx-auto mt-6">
      {/* Navigation Tabs */}
      <div className="sticky top-[64px] bg-white z-10 border-b">
        <div className="overflow-x-auto whitespace-nowrap border-b">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="min-w-max w-full">
            <TabsList className="inline-flex bg-white h-auto p-0">
              <TabsTrigger value="enquiry" className="px-6 py-2 data-[state=active]:bg-black data-[state=active]:text-white rounded-none">
                Enquiry
              </TabsTrigger>
              <TabsTrigger value="delegate" className="px-6 py-2 data-[state=active]:bg-black data-[state=active]:text-white rounded-none">
                Delegate
              </TabsTrigger>
              <TabsTrigger value="exhibitor" className="px-6 py-2 data-[state=active]:bg-black data-[state=active]:text-white rounded-none">
                Exhibition
              </TabsTrigger>
              <TabsTrigger value="sponsor" className="px-6 py-2 data-[state=active]:bg-black data-[state=active]:text-white rounded-none">
                Sponsorship
              </TabsTrigger>
              <TabsTrigger value="brochure" className="px-6 py-2 data-[state=active]:bg-black data-[state=active]:text-white rounded-none">
                Brochure
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Form Content */}
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
