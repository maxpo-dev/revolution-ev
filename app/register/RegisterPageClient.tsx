"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SuccessMessage from "@/app/components/success-message";
import RegisterForm from "../components/registerForm";

type TabType =
  | "enquiry"
  | "delegate"
  | "exhibitor"
  | "sponsor"
  | "brochure"
  | "speaker";

const validTabs: TabType[] = [
  "delegate",
  "exhibitor",
  "sponsor",
  "enquiry",
  "brochure",
  "speaker",
];

export default function RegisterPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tabParam = searchParams.get("t") || "";
  const isSuccessPage = tabParam.endsWith("/thankyou");

  // Derive tab from URL param or default
  const activeTab = useMemo<TabType>(() => {
    const base = tabParam.split("/")[0];
    return validTabs.includes(base as TabType) ? (base as TabType) : "delegate";
  }, [tabParam]);

  // On tab change, update the URL param only
  const handleTabChange = (tab: string) => {
    const typedTab = tab as TabType;
    const newUrl =
      typedTab === "delegate" ? "/register" : `/register?t=${typedTab}`;
    router.replace(newUrl, { scroll: false });
  };

  if (isSuccessPage && validTabs.includes(activeTab)) {
    return <SuccessMessage {...getSuccessProps(activeTab)} />;
  }

  return (
    <div className="container mx-auto mt-6 px-6">
      <div className="sticky top-[64px] bg-white z-10">
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
        <RegisterForm type={activeTab} />
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

function getSuccessProps(type: TabType) {
  const messages: Record<TabType, { title: string; subtitle: string }> = {
    enquiry: {
      title: "Thank You For Your Enquiry!",
      subtitle: "You are now part of the Revolution EV community",
    },
    delegate: {
      title: "Thank You For Your Registration!",
      subtitle: "You are now part of the Revolution EV community",
    },
    exhibitor: {
      title: "Thank You For Your Exhibition Registration!",
      subtitle: "You are now part of the Revolution EV community",
    },
    sponsor: {
      title: "Thank You For Your Sponsorship Enquiry!",
      subtitle: "You are now part of the Revolution EV community",
    },
    brochure: {
      title: "Thank You For Your Brochure Request!",
      subtitle: "You are now part of the Revolution EV community",
    },
    speaker: {
      title: "Thank You For Your Speaker Proposal!",
      subtitle: "You are now part of the Revolution EV community",
    },
  };

  return { type, ...messages[type] };
}
