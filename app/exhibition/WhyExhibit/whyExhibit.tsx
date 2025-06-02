import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function WhyExhibit() {
  const cards = [
    {
      title: "Connect Directly with EV Industry Decision-Makers",
      content:
        "Secure exclusive access to top-level executives, government policymakers, and thought leaders driving the next phase of the electric vehicle (EV) and sustainable mobility revolution.",
      bgColor: "bg-gray-900",
      textColor: "text-white",
    },
    {
      title: "Maximise Brand Visibility in a Growing Market",
      content:
        "Showcase your brand in front of a highly targeted audience passionate about electric mobility, smart transportation solutions, and green technologies. Position your business as a leader in the EV ecosystem.",
      bgColor: "bg-cyan-400",
      textColor: "text-gray-900",
    },
    {
      title: "Growing Business Opportunities",
      content:
        "Generate high-value leads by connecting with potential buyers, investors, venture capitalists, and strategic partners actively searching for innovation in e-mobility, battery technology, and clean energy solutions.",
      bgColor: "bg-gray-900",
      textColor: "text-white",
    },
    {
      title: "Lead the Clean Mobility Movement",
      content:
        "Promote the transition to zero-emission transportation. Align your brand with global sustainability initiatives and demonstrate your commitment to building a cleaner, greener future.",
      bgColor: "bg-cyan-400",
      textColor: "text-gray-900",
    },
    {
      title: "The Latest Trends in EV Technology",
      content:
        "Get an inside look at the newest electric vehicle models, latest charging solutions, battery advancements, autonomous vehicle technologies, and renewable energy integrations transforming the transportation industry.",
      bgColor: "bg-cyan-400",
      textColor: "text-gray-900",
    },
    {
      title: "Gain Media Exposure",
      content:
        "Expand your brand's visibility across major media outlets, automotive and tech publications, and influential EV blogs. Strengthen your public relations footprint and amplify your marketing reach.",
      bgColor: "bg-gray-900",
      textColor: "text-white",
    },
    {
      title: "Learn from Industry Experts and Visionaries",
      content:
        "Attend keynote sessions, expert panels, and masterclasses featuring world-renowned speakers, automotive CEOs, climate tech pioneers, and mobility futurists.",
      bgColor: "bg-gray-900",
      textColor: "text-white",
    },
    {
      title: "Understand the Emerging Trends in Global E-Mobility",
      content:
 "Get insights on future trends such as vehicle-to-grid (V2G) technology, battery swapping networks, hydrogen-powered vehicles, and autonomous electric fleets.",
      bgColor: "bg-cyan-400",
      textColor: "text-gray-900",
    },
    {
      title: "Get Inspired by Innovation",
      content:
        "Walk away energized and inspired by the world's most innovative ideas, prototypes, and strategies that are reshaping the future of transportation.",
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