"use client"

import type React from "react"

import { useState } from "react"
import { submitRegistration } from "../actions"
import { toast } from "@/app/components/ui/use-toast"

export interface FormData {
  name: string
  jobTitle: string
  phoneNumber: string
  companyName: string
  industry: string
  email: string
  requestType: string
  message: string
  consent1: boolean
  consent2: boolean
}

interface RegistrationFormProps {
  registrationType: string
  showRequestType?: boolean
  title?: string
}

export default function RegistrationForm({
  registrationType,
  showRequestType = true,
  title = "Fill the details below to enquire about the event",
}: RegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    jobTitle: "",
    phoneNumber: "",
    companyName: "",
    industry: "",
    email: "",
    requestType: "",
    message: "",
    consent1: false,
    consent2: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.name || !formData.email || !formData.consent1) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields and accept the terms and conditions.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Submit form data with registration type
      const result = await submitRegistration({
        ...formData,
        registrationType,
      })

      if (result.success) {
        toast({
          title: "Registration submitted",
          description: "Thank you for your registration. We will be in touch shortly.",
        })

        // Reset form
        setFormData({
          name: "",
          jobTitle: "",
          phoneNumber: "",
          companyName: "",
          industry: "",
          email: "",
          requestType: "",
          message: "",
          consent1: false,
          consent2: false,
        })
      } else {
        throw new Error(result.message || "Something went wrong")
      }
    } catch (error) {
      toast({
        title: "Submission failed",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {/* Form Section */}
      <div className="p-6 bg-white">
        <h2 className="text-xl font-medium mb-4">{title}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
              required
            />
          </div>
          <div>
            <input
              name="jobTitle"
              placeholder="Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
            />
          </div>
          <div>
            <input
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
            />
          </div>
          <div>
            <input
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
            />
          </div>
          <div>
            <input
              name="industry"
              placeholder="Industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
            />
          </div>
          <div>
            <input
              name="email"
              placeholder="Email *"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
              required
            />
          </div>
          {showRequestType && (
            <div>
              <select
                name="requestType"
                value={formData.requestType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              >
                <option value="" disabled>
                  Select Request Type
                </option>
                <option value="information">Information Request</option>
                <option value="registration">Registration</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>
          )}
          <div>
            <textarea
              name="message"
              placeholder="Message (if any)"
              value={formData.message}
              onChange={handleChange}
              className="w-full min-h-[100px] border border-gray-300 rounded-md p-2 text-sm"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="consent1"
                checked={formData.consent1}
                onChange={(e) => handleCheckboxChange("consent1", e.target.checked)}
                required
                className="mt-1"
              />
              <label htmlFor="consent1" className="text-xs leading-tight">
                I confirm that I have read, understood and accept the{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms and Conditions
                </a>
                . *
              </label>
            </div>
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="consent2"
                checked={formData.consent2}
                onChange={(e) => handleCheckboxChange("consent2", e.target.checked)}
                className="mt-1"
              />
              <label htmlFor="consent2" className="text-xs leading-tight">
                Please indicate your consent for us to use your data to contact you from time to time with updates and
                information about our events, products and services. You can unsubscribe at any time by clicking the
                link in our emails. Please read our{" "}
                <a href="#" className="text-blue-600 underline">
                  Privacy Policy
                </a>{" "}
                for details.
              </label>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-white text-black border border-black hover:bg-gray-100 px-8 py-2 rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      {/* Banner Section */}
      <BannerSection />
    </div>
  )
}

function BannerSection() {
  return (
    <div className="bg-gradient-to-b from-[#1e6b87] to-[#2a9d8f] text-white p-8 flex flex-col justify-center relative overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-2">Register for the</h1>
        <h1 className="text-4xl font-bold mb-2">Next Big Thing's</h1>
        <h1 className="text-4xl font-bold mb-2">
          In <span className="text-[#4ecdc4]">Malaysia's</span>
        </h1>
        <h1 className="text-4xl font-bold mb-2">Mobility</h1>
        <h1 className="text-4xl font-bold">Ecosystem</h1>
      </div>
      <div className="absolute bottom-0 right-0 w-full h-full z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RAF06lxVASSTqqzI0V85ZfsXEO7aQ0.png"
          alt="Malaysia Skyline"
          className="object-cover object-center w-full h-full opacity-30"
        />
      </div>
    </div>
  )
}
