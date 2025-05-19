"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/app/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Textarea } from "@/app/components/ui/textarea"
import BannerSection from "@/app/components/banner-section"

export default function ExhibitorForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    industry: "",
    boothSize: "",
    message: "",
    consent1: true,
    consent2: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Exhibitor Form submitted:", formData)
    // Add your form submission logic here
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {/* Form Section */}
      <div className="p-6 bg-white">
        <h2 className="text-xl font-medium mb-4">Fill the details below to register as an exhibitor</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border-gray-300"
              required
            />
          </div>
          <div>
            <Input
              name="email"
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="border-gray-300"
              required
            />
          </div>
          <div>
            <Input
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              className="border-gray-300"
              required
            />
          </div>
          <div>
            <Input
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border-gray-300"
            />
          </div>
          <div>
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
            <select
              name="boothSize"
              value={formData.boothSize}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
              required
            >
              <option value="" disabled>
                Select Booth Size
              </option>
              <option value="small">Small (3m x 3m)</option>
              <option value="medium">Medium (6m x 3m)</option>
              <option value="large">Large (6m x 6m)</option>
              <option value="custom">Custom Size</option>
            </select>
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Message (if any)"
              value={formData.message}
              onChange={handleChange}
              className="min-h-[100px] border-gray-300"
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
                I confirm that I have read, understood and accept the{" "}
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
                Please indicate your consent for us to use your data to contact you from time to time with updates and
                information about our events, products and services. You can unsubscribe at any time by clicking the
                link in our emails. Please read our{" "}
                <a href="#" className="text-blue-600 underline">
                  Privacy Policy
                </a>{" "}
                for details.
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
