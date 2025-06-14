"use client";

import type React from "react";

import BannerSection from "@/app/components/banner-section";
import FormSection from "./formSection";

type FormTypes =
  | "enquiry"
  | "delegate"
  | "exhibitor"
  | "sponsor"
  | "brochure"
  | "speaker";

export default function RegisterForm({ type,setFormSubmitted }: { type: FormTypes,setFormSubmitted:(value: boolean) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      <div className="p-6 bg-white border border-[#56c847]">
        <h2 className="text-xl font-medium mb-4">
          Fill the details below to enquire about the event
        </h2>
        <FormSection type={type} setFormSubmitted={setFormSubmitted} />
      </div>
      <BannerSection />
    </div>
  );
}
