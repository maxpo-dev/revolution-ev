"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import BannerSection from "@/app/components/banner-section"

export default function SpeakerForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    industry: "",
    topic: "",
    bio: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target
  setFormData((prev) => ({ ...prev, [name]: value }))
}


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/speaker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        // Redirect to success page instead of showing alert
        router.push("/register?t=speaker/thankyou")
      } else {
        const data = await res.json()
        alert("Submission failed: " + data.message)
      }
    } catch (error) {
      alert("Error submitting speaker proposal: " + error)
    }
  }
  const industryOptions = [
    "Electric Vehicles (EVs)",
    "Autonomous Electric Vehicles",
    "Urban Air Mobility / eVTOL",
    "Micro-Mobility (eBikes, Scooters, etc.)",
    "Shared Mobility/MaaS Providers",
    "Last-Mile Delivery Solutions",
    "Low-Emission Vehicle Fleets",
    "Smart Transportation Systems",
    "Public Transport Integration",
    "EV Charging Stations",
    "Fast / Ultra-Fast Charging",
    "Home & Workplace Charging",
    "Wireless / Inductive Charging",
    "Battery Swapping Stations",
    "Charging Network Management",
    "Smart Grid & Bidirectional (V2X) Charging",
    "Renewable-Energy-Powered Charging",
    "AI-Driven Energy Management",
    "Integrated Solar EVs",
    "EV-Integrated Smart Homes",
    "Swappable-Battery EVs",
    "Blockchain Payments for EV Charging",
    "Smart In-Vehicle Operating Systems",
    "Charging Hardware & Electronics Manufacturers",
    "Electronic Production & Additive Manufacturing",
    "Testing, Measurement & Certification",
    "Consultants & R&D Experts",
    "Investors & Venture Capitalists",
    "Automotive Finance & Insurance",
    "Government Ministries & Departments",
    "City Councils & Local Authorities",
    "Trade Associations & NGOs",
    "Environmentalists",
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {/* Form Section */}
      <div className="p-6 bg-white border border-[#56c847]">
        <h2 className="text-xl font-medium mb-4">Become a Speaker</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <Label className="text-sm font-medium">
              Name <span className="text-red-500">*</span>
            </Label>
            <Input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="border-gray-300"
              required
            />
          </div>

          {/* Email */}
          <div>
            <Label className="text-sm font-medium">
              Work Email <span className="text-red-500">*</span>
            </Label>
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border-gray-300"
              required
            />
          </div>

          <div>
            <Label className="text-sm font-medium">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              name="phone"
              type="text"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border-gray-300"
              required
            />
          </div>

          {/* Organization */}
          <div>
            <Label className="text-sm font-medium">Company</Label>
            <Input
              name="organization"
              placeholder="Company / Organization"
              value={formData.organization}
              onChange={handleChange}
              className="border-gray-300"
            />
          </div>

          <div>
            <Label className="text-sm font-medium">
              Industry <span className="text-red-500">*</span>
            </Label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
              required
              disabled={isSubmitting}
            >
              <option value="" disabled>
                Select Industry
              </option>
              {industryOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Topic */}
          <div>
            <Label className="text-sm font-medium">Topic</Label>
            <Input
              name="topic"
              placeholder="Your speaking topic"
              value={formData.topic}
              onChange={handleChange}
              className="border-gray-300"
            />
          </div>

          {/* Bio */}
          <div>
            <Label className="text-sm font-medium">Message</Label>
            <Textarea
              name="bio"
              placeholder="Tell us about your background and experience"
              value={formData.bio}
              onChange={handleChange}
              className="min-h-[100px] border-gray-300"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <Button type="submit" className="bg-[#30A685] text-white hover:bg-[#268a6f] px-8">
              Submit Proposal
            </Button>
          </div>
        </form>
      </div>

      {/* Right Side: Banner or Graphic */}
      <BannerSection />
    </div>
  )
}
