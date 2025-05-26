"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/app/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Textarea } from "@/app/components/ui/textarea"
import BannerSection from "@/app/components/banner-section"
import SuccessMessage from "@/app/components/success-message"

export default function ExhibitorForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    industry: "",
    jobTitle: "",
    message: "",
    consent1: true,
    consent2: true,
  })

  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/exhibitor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        setSuccess(true)
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          companyName: "",
          industry: "",
          jobTitle: "",
          message: "",
          consent1: true,
          consent2: true,
        })
      } else {
        alert("Error: " + data.message)
      }
    } catch (err) {
      console.error("Submission error:", err)
      alert("An error occurred. Please try again.")
    }
  }

  if (success) {
    return (
      <SuccessMessage
        type="exhibitor"
        title="Thank You For Your Exhibition Registration!"
        subtitle="You are now registered as an exhibitor for the Revolution EV event"
      />
    )
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
      <div className="p-6 bg-white border border-[#56c847] ">
        <h2 className="text-xl font-medium mb-4">Fill the details below to register as an exhibitor</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <Label className="text-sm font-medium">
              Name <span className="text-red-500">*</span>
            </Label>
            <Input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border-gray-300"
              required
            />
          </div>

          {/* Work Email */}
          <div>
            <Label className="text-sm font-medium">
              Work Email <span className="text-red-500">*</span>
            </Label>
            <Input
              name="email"
              placeholder="Work Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="border-gray-300"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <Label className="text-sm font-medium">
              Phone <span className="text-red-500">*</span>
            </Label>
            <Input
              name="phoneNumber"
              placeholder="Phone"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border-gray-300"
              required
            />
          </div>

          {/* Company Name */}
          <div>
            <Label className="text-sm font-medium">
              Company Name <span className="text-red-500">*</span>
            </Label>
            <Input
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              className="border-gray-300"
              required
            />
          </div>

          {/* Industry */}
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

          {/* Job Title */}
          <div>
            <Label className="text-sm font-medium">
              Job Title <span className="text-red-500">*</span>
            </Label>
            <Input
              name="jobTitle"
              placeholder="Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              className="border-gray-300"
              required
            />
          </div>

          {/* Message */}
          <div>
            <Label className="text-sm font-medium">Message</Label>
            <Textarea
              name="message"
              placeholder="Message (if any)"
              value={formData.message}
              onChange={handleChange}
              className="min-h-[100px] border-gray-300"
            />
          </div>

          {/* Consents */}
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent1"
                checked={formData.consent1}
                onCheckedChange={(checked: boolean) => handleCheckboxChange("consent1", checked)}
              />
              <Label htmlFor="consent1" className="text-xs leading-tight">
                I confirm that I have read, understand and accept the event's{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms and Conditions
                </a>
                .
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent2"
                checked={formData.consent2}
                onCheckedChange={(checked: boolean) => handleCheckboxChange("consent2", checked)}
              />
              <Label htmlFor="consent2" className="text-xs leading-tight">
                Our company may contact you from time to time with updates and information about our events, products
                and services that may be of interest. We may also pass your details to carefully selected third parties
                and to sponsors and exhibitors at this event. Please see our{" "}
                <a href="#" className="text-blue-600 underline">
                  Privacy Policy
                </a>
                . for full details.
              </Label>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center mt-6">
            <Button type="submit" className="bg-[#30A685] text-white hover:bg-[#268a6f] px-8">
              Submit
            </Button>
          </div>
        </form>
      </div>

      {/* Banner Section */}
      <BannerSection  />

    </div>
  )
}
