import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample partner data - in a real app, this would come from a database or API
const partners = [
  {
    id: 1,
    name: "EcoCharge Technologies",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Leading provider of fast-charging infrastructure for electric vehicles.",
    category: "Charging Infrastructure",
    tier: "Platinum",
  },
  {
    id: 2,
    name: "GreenDrive Motors",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Manufacturer of high-efficiency electric motors for EVs.",
    category: "EV Manufacturing",
    tier: "Gold",
  },
  {
    id: 3,
    name: "BatteryPlus Innovations",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Developing next-generation battery technology for extended range.",
    category: "Battery Technology",
    tier: "Gold",
  },
  {
    id: 4,
    name: "SmartGrid Solutions",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Intelligent energy management systems for EV charging networks.",
    category: "Smart City Solutions",
    tier: "Silver",
  },
  {
    id: 5,
    name: "EcoMobility Research",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Research institution focused on sustainable transportation.",
    category: "Research",
    tier: "Silver",
  },
  {
    id: 6,
    name: "CleanTech Ventures",
    logo: "/placeholder.svg?height=80&width=200",
    description: "Venture capital firm investing in clean transportation technologies.",
    category: "Investment",
    tier: "Bronze",
  },
]

export default function PartnersList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {partners.map((partner) => (
        <Card key={partner.id} className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{partner.name}</CardTitle>
                <CardDescription>{partner.category}</CardDescription>
              </div>
              <Badge className="bg-[#30A685]">{partner.tier}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-gray-600">{partner.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
