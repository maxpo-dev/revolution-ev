
import Link from "next/link"
import {
  Factory,
  Battery,
  Zap,
  Car,
  Truck,
  Smartphone,
  Building2,
  GraduationCap,
  Users,
  Banknote,
  TrendingUp,
  Leaf,
  Scale,
} from "lucide-react"

import type React from "react"

interface EventFormatAttendeesProps {
  attendeeProfiles: string[]
}

const EventFormatAttendees: React.FC<EventFormatAttendeesProps> = ({ attendeeProfiles }) => {
  const attendeeIcons = [
    Factory, // Original Equipment Manufacturers
    Battery, // Battery Tech Providers
    Zap, // EV Charging Infrastructure Companies
    Car, // Automotive Components & Suppliers
    Truck, // Fleet Operators & Logistics Companies
    Smartphone, // Smart Mobility Startups
    Building2, // Government & Government Agencies
    GraduationCap, // R&D Centers & Universities
    Users, // Policymakers, Urban Planners & Sustainability
    Banknote, // Financial Institutions & Insurance Providers
    TrendingUp, // Venture Capital & Investment Firms
    Leaf, // Renewable Energy Companies
    Scale, // Legal Compliance & Intellectual Property Experts
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Who Attends?</h2>

        {/* Attendee Profile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-12">
          {attendeeProfiles.map((profile, idx) => {
            const IconComponent = attendeeIcons[idx]
            return (
              <div
                key={idx}
                className="border border-gray-300 rounded-md p-0 text-sm font-medium text-black hover:shadow-md transition flex items-stretch"
              >
                <div className="flex items-center justify-center p-4 border-r border-gray-300">
                  <IconComponent className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex items-center justify-center p-4 flex-1">{profile}</div>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <Link href="/register?t=delegate">
          <button className="px-6 py-2 bg-white text-black text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition">
            Get Your Ticket
          </button>
          </Link>
        </div>

        {/* <p className="text-gray-600 text-center">
          This event brings together a diverse group of professionals and organizations driving innovation and
          sustainability in the electric vehicle industry.
        </p> */}
      </div>
    </section>
  )
}

export default EventFormatAttendees
