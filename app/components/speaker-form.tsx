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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <Label className="text-sm font-medium">Industry</Label>
            <Input
              name="industry"
              placeholder="Industry"
              value={formData.industry}
              onChange={handleChange}
              className="border-gray-300"
            />
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
