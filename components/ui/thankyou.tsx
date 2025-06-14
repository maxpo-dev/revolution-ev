"use client";

import SuccessMessage from "@/app/components/success-message";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import { ArrowLeft } from "lucide-react";

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

const ThankYou = ({type}: {type: TabType}) => {

  const activeTab = useMemo(() => {
    return type && validTabs.includes(type as TabType)
      ? (type as TabType)
      : null;
  }, [type]);

  if (!activeTab) {
    return (
      <div className="min-h-[60vh] p-8 flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl md:text-3xl mt-4 font-semibold">
          Invalid registration type
        </h2>
        <p className="text-[#777] mt-2 max-w-md">
          Sorry, The link you followed is missing or has an invalid form type.
        </p>
        <Link
          href="/register"
          className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-[#00B5B8] to-[#4CD964] text-black font-medium px-5 py-3 rounded-lg transition hover:opacity-90"
        >
          <ArrowLeft size={18} />
          Back to Register
        </Link>
      </div>
    );
  }

  return <SuccessMessage {...getSuccessProps(activeTab)} />;
};

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

export default ThankYou;
