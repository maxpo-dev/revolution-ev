"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterForm from "../components/registerForm";
import ThankYou from "@/components/ui/thankyou";

type TabType =
  | "enquiry"
  | "delegate"
  | "exhibitor"
  | "sponsor"
  | "brochure"
  | "speaker";

const validTabs: TabType[] = [
  "enquiry",
  "delegate",
  "exhibitor",
  "sponsor",
  "brochure",
  "speaker",
];

export default function RegisterPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("t") || "";
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Derive tab from URL param or default
  const activeTab = useMemo<TabType>(() => {
    const base = tabParam.split("/")[0];
    return validTabs.includes(base as TabType) ? (base as TabType) : "enquiry";
  }, [tabParam]);

  // On tab change, update the URL param only
  const handleTabChange = (tab: string) => {
    const typedTab = tab as TabType;
    const newUrl =
      typedTab === "enquiry" ? "/register" : `/register?t=${typedTab}`;
    router.replace(newUrl, { scroll: false });
  };

  if (formSubmitted) return <ThankYou type={activeTab} />;

  return (
    <div className="container  mx-auto mt-6 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="sticky top-[64px] bg-white z-10 mt-2 py-2">
        <div className="overflow-x-auto whitespace-nowrap ">
          <Tabs
            value={activeTab}
            onValueChange={handleTabChange}
            className="min-w-max w-full"
          >
            <TabsList className="inline-flex bg-white h-auto p-0 gap-3">
              {validTabs.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="px-12 py-2 data-[state=active]:bg-black data-[state=active]:text-white rounded-none border border-black "
                >
                  {formatTabLabel(tab)}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="pt-4 mb-10">
        <RegisterForm type={activeTab} setFormSubmitted={setFormSubmitted} />
      </div>
    </div>
  );
}

function formatTabLabel(tab: TabType) {
  const labels: Record<TabType, string> = {
    delegate: "Delegate",
    enquiry: "Enquiry",
    exhibitor: "Exhibition",
    sponsor: "Sponsorship",
    brochure: "Brochure",
    speaker: "Speaker",
  };
  return labels[tab];
}
