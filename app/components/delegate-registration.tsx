"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/app/components/ui/tabs"
import EnquiryForm from "@/app/components/enquiry-form"
import DelegateForm from "@/app/components/delegate-form"
// import ExhibitionForm from "@/app/components/exhibition-form"
// import SponsorshipForm from "@/app/components/sponsorship-form"
// import BrochureForm from "@/app/components/forms/brochure-form"
import Footer from "@/app/components/footer"

type RegistrationType = "enquiry" | "delegates" | "exhibition" | "sponsorship" | "brochure"

const typeMapping: Record<string, RegistrationType> = {
  enquiry: "enquiry",
  delegate: "delegates",
  exhibitor: "exhibition",
  sponsor: "sponsorship",
  brochure: "brochure",
}

export default function DelegateRegistration() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<RegistrationType>("enquiry")

  useEffect(() => {
    // Get the type from URL parameter
    const typeParam = searchParams.get("t")
    if (typeParam && typeParam in typeMapping) {
      setActiveTab(typeMapping[typeParam])
    }
  }, [searchParams])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-1">
        <div className="container mx-auto">
          {/* Navigation Tabs */}
          <Tabs
            value={activeTab}
            onValueChange={(value: string) => setActiveTab(value as RegistrationType)}
            className="w-full border-b"
          >
            <TabsList className="w-full justify-start bg-white h-auto p-0">
              <TabsTrigger
                value="enquiry"
                className="px-6 py-2 data-[state=active]:bg-black data-[state=active]:text-white rounded-none"
              >
                Enquiry
              </TabsTrigger>
              <TabsTrigger
                value="delegates"
                className="px-6 py-2 data-[state=active]:bg-black data-[state=active]:text-white rounded-none"
              >
                Delegate
              </TabsTrigger>
              <TabsTrigger
                value="exhibition"
                className="px-6 py-2 data-[state=active]:bg-black data-[state=active]:text-white rounded-none"
              >
                Exhibition
              </TabsTrigger>
              <TabsTrigger
                value="sponsorship"
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

            <TabsContent value="enquiry" className="mt-0">
              <EnquiryForm />
            </TabsContent>

            <TabsContent value="delegates" className="mt-0">
              <DelegateForm />
            </TabsContent>

            <TabsContent value="exhibition" className="mt-0">
              {/* <ExhibitionForm /> */}
            </TabsContent>

            <TabsContent value="sponsorship" className="mt-0">
              {/* <SponsorshipForm /> */}
            </TabsContent>

            <TabsContent value="brochure" className="mt-0">
              {/* <BrochureForm /> */}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
