"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is Revolution EV Malaysia 2025?",
    answer:
      "The Revolution EV Malaysia 2025 Is A Premier EV Event, Designed To Be The Central Hub For Future Innovations, Government Policies, And Partnerships In Malaysia’s Rapidly Advancing e-Mobility Space.",
  },
  {
    question: "Who should attend Revolution EV?",
    answer:
      "The Revolution EV Event Is Designed For Professionals From The EV Industry, Including Fleet Operators, OEMs, Battery Tech Providers, And Government Agencies. Offering A Platform For Innovations, Networking Opportunities, And Partnerships To Shape The EV Industry In Malaysia.",
  },
  {
    question: "When and where is the event taking place?",
    answer:
      "The Revolution EV Will Take Place From 15th To 17th September 2025 In Kuala Lumpur, Malaysia.",
  },
  {
    question: "Why is Malaysia hosting this EV conference?",
    answer:
      "The Revolution EV Will Primarily Showcase The Nation’s Goal For Electric Vehicle (EV) Adoption, Infrastructure Expansion, And Environmental Sustainability.",
  },
  {
    question: "Will there be live product demos or EV test drives?",
    answer:
      "Yes, The Revolution EV Event Will Feature Live Product Demonstrations And EV Test Drives.",
  },
  {
    question: "Can I download the event brochure?",
    answer:
      "Yes, You Can Download The Event Brochure From Event/Exhibitor Page.",
  },
  {
    question: "How Can I Register for the Event?",
    answer:
      "You Can Register For The Event Through Our Official Website. Early Registration Is Recommended To Secure Your Spot.",
  },
  {
    question: "What can I expect at Revolution EV Malaysia 2025?",
    answer:
      "Attendees Can Look Forward To Engaging Keynote Addresses, Panel Discussions, Technology Demonstrations, And Networking Opportunities Centered On Malaysia’s Zero-Emission Vehicle Innovations And Latest e-Mobility Solutions.",
  },
  {
    question: "Is the event open to the public?",
    answer:
      "Revolution EV Is Professionally A B2B Event Intended For Tech Investors, Investors And Industry Professionals. Some Sessions And Test Drives Might Be Public. See The Agenda For Specifics.",
  },
  {
    question:
      "Are there any speaking or sponsorship opportunities available?",
    answer:
      "Yes, Those Who Are Interested In Speaking, Exhibiting, Or Sponsorship Can Contact Our Team Via The Get In Touch Section On Our Website.",
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <div className="w-full bg-white">
      {/* Black header background */}
      <div className="w-full bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-4xl font-bold">General FAQ’s</h2>
        </div>
      </div>

      {/* FAQ section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-4 py-16">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-md">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="text-base font-medium text-black">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-black transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
