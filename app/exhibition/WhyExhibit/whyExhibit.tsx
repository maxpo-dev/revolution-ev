import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function WhyExhibit() {
  const cards = [
    {
      title: "Connect Directly with EV Industry Decision-Makers",
      content:
        "Secure Exclusive Access To Top-Level Executives, Government Policymakers, And Thought Leaders Driving The Next Phase Of The Electric Vehicle (EV) And Sustainable Mobility Revolution.",
      bgColor: "bg-gray-900",
      textColor: "text-white",
    },
    {
      title: "Maximise Brand Visibility in a Growing Market",
      content:
        "Showcase Your Brand In Front Of A Highly Targeted Audience. Passionate About Electric Mobility, Smart Transportation Technologies, Position Your Business As A Leader In The EV Ecosystem.",
      bgColor: "bg-cyan-400",
      textColor: "text-gray-900",
    },
    {
      title: "Growing Business Opportunities",
      content:
        "Generate High-Value Leads By Connecting With Potential Buyers, Investors, Venture Capitalists, Business Strategy Partners Searching For Innovation In E-Mobility, Battery Technology, And Clean Energy Solutions.",
      bgColor: "bg-gray-900",
      textColor: "text-white",
    },
    {
      title: "Lead the Clean Mobility Movement",
      content:
        "Promote The Transition To Zero-Emission Transportation. Align Your Brand With Global Sustainability Initiatives And Demonstrate Your Commitment To Building A Cleaner, Greener Future.",
      bgColor: "bg-cyan-400",
      textColor: "text-gray-900",
    },
    {
      title: "The Latest Trends in EV Technology",
      content:
        "Stay Ahead Of The Curve With The Newest Electric Vehicle Models, Latest Charging Solutions, Battery Advancements, Autonomous Driving Technology And Renewable Energy Integration Transforming The Transportation Industry.",
      bgColor: "bg-cyan-400",
      textColor: "text-gray-900",
    },
    {
      title: "Gain Media Exposure",
      content:
        "Increase Your Brand's Visibility Across Digital, Automotive And Tech Publications, And Industry Reports. Strengthen Your Public Relations Footprint And Amplify Your Marketing Reach.",
      bgColor: "bg-gray-900",
      textColor: "text-white",
    },
    {
      title: "Learn from Industry Experts and Visionaries",
      content:
        "Attend Keynote Sessions, Expert Panels And Workshops Featuring World-Renowned Automotive CEOs, Climate Tech Pioneers, And Mobility Futurists.",
      bgColor: "bg-gray-900",
      textColor: "text-white",
    },
    {
      title: "Understand the Emerging Trends in Global E-Mobility",
      content:
        "Get Insights On Breakthrough Technologies As Vehicle-To-Grid (V2G) Technology, Battery Swapping Networks, Hydrogen-Powered Vehicles, And Autonomous Electric Fleets.",
      bgColor: "bg-cyan-400",
      textColor: "text-gray-900",
    },
    {
      title: "Get Inspired by Innovation",
      content:
        "Walk Away Energized And Inspired By The World's Most Cutting-Edge Tech, Prototypes, And Strategies That Are Reshaping The Future Of Transportation.",
      bgColor: "bg-gray-900",
      textColor: "text-white",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Why <span className="text-cyan-400">Exhibit</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Card key={index} className={`${card.bgColor} border-0 relative overflow-hidden`}>
            <CardContent className="p-6 h-full flex flex-col">
              <h3 className={`text-lg font-bold mb-4 ${card.textColor}`}>{card.title}</h3>
              <p className={`text-sm leading-relaxed flex-grow ${card.textColor}`}>{card.content}</p>
              <div className="mt-4 flex justify-end">
                <ArrowRight className={`w-8 h-8 ${card.textColor}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}