"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DelegateForm from "@/app/components/delegate-form"
import ExhibitorForm from "@/app/components/exhibitor-form"
import SponsorForm from "@/app/components/sponsor-form"
import EnquiryForm from "@/app/components/enquiry-form"
import BrochureForm from "@/app/components/brochure-form"
import SpeakerForm from "@/app/components/speaker-form" // Updated import path

type TabType = "enquiry" | "delegate" | "exhibitor" | "sponsor" | "brochure" | "speaker"
const validTabs: TabType[] = ["enquiry", "delegate", "exhibitor", "sponsor", "brochure", "speaker"]

export default function RegisterPageClient({ initialTab }: { initialTab: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const initial = validTabs.includes(initialTab as TabType) ? (initialTab as TabType) : "enquiry"
  const [activeTab, setActiveTab] = useState<TabType>(initial)

  const handleTabChange = (value: string) => {
    const tab = value as TabType
    setActiveTab(tab)
    const newUrl = tab === "enquiry" ? "/register" : `/register?t=${tab}`
    router.replace(newUrl, { scroll: false })
  }

  useEffect(() => {
    const urlTab = searchParams.get("t") as TabType | null
    if (urlTab && validTabs.includes(urlTab) && urlTab !== activeTab) {
      setActiveTab(urlTab)
    } else if (!urlTab && activeTab !== "enquiry") {
      setActiveTab("enquiry")
    }
  }, [searchParams])

  return (
    <div className="container mx-auto mt-6">
      <div className="sticky top-[64px] bg-white z-10 border-b">
        <div className="overflow-x-auto whitespace-nowrap border-b">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="min-w-max w-full">
            <TabsList className="inline-flex bg-white h-auto p-0">
              {validTabs.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="px-6 py-2 data-[state=active]:bg-black data-[state=active]:text-white rounded-none"
                >
                  {tab === "enquiry"
                    ? "Enquiry"
                    : tab === "delegate"
                    ? "Delegate"
                    : tab === "exhibitor"
                    ? "Exhibition"
                    : tab === "sponsor"
                    ? "Sponsorship"
                    : tab === "brochure"
                    ? "Brochure"
                    : "Speaker"}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="pt-4 mb-10">
        {activeTab === "enquiry" && <EnquiryForm />}
        {activeTab === "delegate" && <DelegateForm />}
        {activeTab === "exhibitor" && <ExhibitorForm />}
        {activeTab === "sponsor" && <SponsorForm />}
        {activeTab === "brochure" && <BrochureForm />}
        {activeTab === "speaker" && <SpeakerForm />}
      </div>
    </div>
  )
}
