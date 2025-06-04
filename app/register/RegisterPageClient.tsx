"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DelegateForm from "@/app/components/delegate-form"
import ExhibitorForm from "@/app/components/exhibitor-form"
import SponsorForm from "@/app/components/sponsor-form"
import EnquiryForm from "@/app/components/enquiry-form"
import BrochureForm from "@/app/components/brochure-form"
import SpeakerForm from "@/app/components/speaker-form"
import SuccessMessage from "@/app/components/success-message"

type TabType = "enquiry" | "delegate" | "exhibitor" | "sponsor" | "brochure" | "speaker"
const validTabs: TabType[] = ["enquiry", "delegate", "exhibitor", "sponsor", "brochure", "speaker"]

export default function RegisterPageClient({ initialTab }: { initialTab: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const initial = validTabs.includes(initialTab as TabType) ? (initialTab as TabType) : "enquiry"
  const [activeTab, setActiveTab] = useState<TabType>(initial)

  // Check if we're on a success page - must end with "/thankyou" exactly
  const tabParam = searchParams.get("t") || ""
  const isSuccessPage = tabParam.endsWith("/thankyou")
  const formType = isSuccessPage ? (tabParam.split("/")[0] as TabType) : null

  // Validate that the form type is valid
  const isValidSuccessPage = isSuccessPage && formType && validTabs.includes(formType)

  const handleTabChange = (value: string) => {
    const tab = value as TabType
    setActiveTab(tab)
    const newUrl = tab === "enquiry" ? "/register" : `/register?t=${tab}`
    router.replace(newUrl, { scroll: false })
  }

  useEffect(() => {
    // If we have an invalid success page URL, redirect to the form
    if (isSuccessPage && !isValidSuccessPage) {
      const baseTab = tabParam.split("/")[0] as TabType
      if (validTabs.includes(baseTab)) {
        router.replace(`/register?t=${baseTab}`)
      } else {
        router.replace("/register")
      }
      return
    }

    // Only update active tab if we're not on a success page
    if (!isSuccessPage) {
      const urlTab = searchParams.get("t") as TabType | null
      if (urlTab && validTabs.includes(urlTab) && urlTab !== activeTab) {
        setActiveTab(urlTab)
      } else if (!urlTab && activeTab !== "enquiry") {
        setActiveTab("enquiry")
      }
    }
  }, [searchParams, isSuccessPage, isValidSuccessPage, activeTab, tabParam, router])

  // If we're on a valid success page, show the success message
  if (isValidSuccessPage && formType) {
    const successProps = getSuccessProps(formType)
    return <SuccessMessage {...successProps} />
  }

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

// Helper function to get success message props based on form type
function getSuccessProps(type: string) {
  switch (type) {
    case "enquiry":
      return {
        type: "enquiry" as const,
        title: "Thank You For Your Enquiry!",
        subtitle: "You are now part of the Revolution EV community",
      }
    case "delegate":
      return {
        type: "delegate" as const,
        title: "Thank You For Your Registration!",
        subtitle: "You are now part of the Revolution EV community",
      }
    case "exhibitor":
      return {
        type: "exhibitor" as const,
        title: "Thank You For Your Exhibition Registration!",
        subtitle: "You are now part of the Revolution EV community",
      }
    case "sponsor":
      return {
        type: "sponsor" as const,
        title: "Thank You For Your Sponsorship Enquiry!",
        subtitle: "You are now part of the Revolution EV community",
      }
    case "brochure":
      return {
        type: "brochure" as const,
        title: "Thank You For Your Brochure Request!",
        subtitle: "You are now part of the Revolution EV community",
      }
    case "speaker":
      return {
        type: "speaker" as const,
        title: "Thank You For Your Speaker Proposal!",
        subtitle: "You are now part of the Revolution EV community",
      }
    default:
      return {
        type: "enquiry" as const,
        title: "Thank You!",
        subtitle: "You are now part of the Revolution EV community",
      }
  }
}
