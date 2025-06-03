"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface SuccessMessageProps {
  type: "enquiry" | "delegate" | "exhibitor" | "sponsor" | "brochure" | "speaker"
  title: string
  subtitle: string
}

export default function SuccessMessage({ type, title, subtitle }: SuccessMessageProps) {
  const [showCheckmark, setShowCheckmark] = useState(false)

  useEffect(() => {
    // Delay the checkmark animation slightly for better effect
    setTimeout(() => {
      setShowCheckmark(true)
    }, 300)
  }, [])

  return (
    <div className="flex flex-col items-center w-full">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-[#00B5B8] to-[#4CD964] py-4">
        <h2 className="text-center text-white text-xl font-medium capitalize">{type}</h2>
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
        <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>

        {/* Community Message */}
        <p className="text-center mb-2 text-gray-800">{subtitle}</p>

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
