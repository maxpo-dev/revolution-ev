"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/app/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Textarea } from "@/app/components/ui/textarea"
import BannerSection from "@/app/components/banner-section"
import Link from "next/link"

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    industry: "",
    message: "",
    consent1: true,
    consent2: true,
  })

  const [success, setSuccess] = useState(false)
  const [showCheckmark, setShowCheckmark] = useState(false)

  useEffect(() => {
    if (success) {
      // Delay the checkmark animation slightly for better effect
      setTimeout(() => {
        setShowCheckmark(true)
      }, 300)
    }
  }, [success])

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
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await res.json()
      if (result.success) {
        setSuccess(true)
        setFormData({
          name: "",
          email: "",
          companyName: "",
          phoneNumber: "",
          industry: "",
          message: "",
          consent1: true,
          consent2: true,
        })
      } else {
        alert("Failed to submit enquiry. Please try again later.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      alert("Something went wrong. Please try again.")
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center w-full  ">
        {/* Header */}
        <div className="w-full bg-gradient-to-r from-[#00B5B8] to-[#4CD964] py-4">
          <h2 className="text-center text-white text-xl font-medium">Enquiry</h2>
        </div>

        {/* Success Content */}
        <div className="py-12 px-4 flex flex-col items-center max-w-md mx-auto">
          {/* Animated Checkmark Icon */}
          <div className="bg-gradient-to-r from-[#00B5B8] to-[#4CD964] rounded-full p-4 w-24 h-24 flex items-center justify-center mb-8 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {showCheckmark && (
                <>
                  <path
                    d="M5 13l4 4L19 7"
                    strokeDasharray="22"
                    strokeDashoffset="22"
                    style={{
                      animation: "drawCheck 0.5s ease forwards",
                    }}
                  />
                  <style jsx>{`
                    @keyframes drawCheck {
                      to {
                        stroke-dashoffset: 0;
                      }
                    }
                  `}</style>
                </>
              )}
            </svg>
          </div>

          {/* Thank You Message */}
          <h3 className="text-2xl font-bold mb-4 text-center">Thank You For Your Enquiry!</h3>

          {/* Community Message */}
          <p className="text-center mb-2 text-gray-800">You are now part of the Revolution EV community</p>

          {/* Follow-up Messages */}
          <p className="text-center text-gray-600 text-sm mb-1">Our team will be in touch with you soon.</p>
          <p className="text-center text-gray-600 text-sm mb-8">
            We look forward to welcoming you at the World Trade Centre Kuala Lumpur from 23 October - 24 October 2025
          </p>

          {/* Action Links */}
          <div className="flex gap-8 items-center">
            <Link href="/participants" className="flex items-center text-gray-800 hover:text-[#00B5B8]">
              <div className="bg-[#00B5B8] rounded-full p-1 mr-2 w-8 h-8 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              See Who's Participating
            </Link>
            <Link href="/speakers" className="flex items-center text-gray-800 hover:text-[#00B5B8]">
              <div className="bg-[#00B5B8] rounded-full p-1 mr-2 w-8 h-8 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              View All Speakers
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {/* Form Section */}
      <div className="p-6 bg-white border border-[#56c847] ">
        <h2 className="text-xl font-medium mb-4">Fill the details below to enquire about the event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium">
              Name <span className="text-red-500">*</span>
            </Label>
            <Input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border-gray-300 mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              name="email"
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="border-gray-300 mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="companyName" className="text-sm font-medium">
              Company Name <span className="text-red-500">*</span>
            </Label>
            <Input
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              className="border-gray-300 mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="phoneNumber" className="text-sm font-medium">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border-gray-300 mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="industry" className="text-sm font-medium">
              Industry <span className="text-red-500">*</span>
            </Label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 text-sm mt-1"
              required
            >
              <option value="" disabled>
                Select Industry
              </option>
              <option value="ev_manufacturing">EV Manufacturing</option>
              <option value="battery_tech">Battery Technology</option>
              <option value="charging_infrastructure">Charging Infrastructure</option>
              <option value="energy_storage">Energy Storage Solutions</option>
              <option value="autonomous_vehicles">Autonomous Vehicles</option>
              <option value="mobility_services">Mobility Services</option>
              <option value="smart_city">Smart City Solutions</option>
              <option value="renewable_energy">Renewable Energy</option>
              <option value="automotive_components">Automotive Components</option>
              <option value="policy_regulation">Policy & Regulation</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium">
              Message
            </Label>
            <Textarea
              name="message"
              placeholder="Message (if any)"
              value={formData.message}
              onChange={handleChange}
              className="min-h-[100px] border-gray-300 mt-1"
            />
          </div>

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
                </a>{" "}
                for full details.
              </Label>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Button type="submit" className="bg-[#30A685] text-white hover:bg-[#268a6f] px-8">
              Submit
            </Button>
          </div>
        </form>
      </div>

      {/* Banner Section */}
      <BannerSection />
    </div>
  )
}
