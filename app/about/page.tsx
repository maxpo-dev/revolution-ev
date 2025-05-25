import HeroSection from "./hero-section"
import EventHighlights from "./event-highlights"
import EventFormatAndAttendees from "./EventFormatAndAttendees"



const attendeeProfiles = [
  "Original Equipment Manufacturers",
  "Battery Tech Providers",
  "EV Charging Infrastructure Companies",
  "Automotive Components & Suppliers",
  "Fleet Operators & Logistics Companies",
  "Smart Mobility Startups",
  "Government & Government Agencies",
  "R&D Centers & Universities",
  "Policymakers, Urban Planners & Sustainability",
  "Financial Institutions & Insurance Providers",
  "Venture Capital & Investment Firms",
  "Renewable Energy Companies",
  "Legal Compliance & Intellectual Property Experts",
]
export default function Home() {

  
  return (
    <main>
      <HeroSection />
      <EventHighlights />
      <EventFormatAndAttendees  attendeeProfiles={attendeeProfiles}/>
{/* <div>
  <p className="text-8xl font-bold item-center">It's On Process</p>
</div> */}

    </main>
  )
}
