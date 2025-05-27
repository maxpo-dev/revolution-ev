import { Badge, Building2, Calendar, Mail, MessageSquare, Mic, Share2, Target, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function WhySponsors() {
  const benefits = [
    {
      icon: Target,
      title: "Brand Positioning",
      description: "Stand out by positioning your brand at Malaysia's Premier EV event",
    },
    {
      icon: Users,
      title: "Direct Access to Decision-Makers",
      description:
        "Get direct access to e-mobility leaders and industry leaders via Revolution EV, Malaysia's leading EV event.",
    },
    {
      icon: MessageSquare,
      title: "High-Quality Networking Opportunities",
      description:
        "Participate in roundtable discussions, VIP lounges, special networking events, and curated meetings designed to drive deep collaborations and growth.",
    },
    {
      icon: Building2,
      title: "Boost Visibility with Strategic Branding",
      description:
        "Feature your brand prominently on the official website, Brochures and marketing materials of Revolution EV",
    },
    {
      icon: Mail,
      title: "Email Branding",
      description:
        "As a sponsor, feature your brand in email campaigns that are distributed to thousands of experts in the field to increase its reach.",
    },
    {
      icon: Share2,
      title: "Social Media Endorsement",
      description:
        "Grab the wonderful opportunity to get featured on Revolution EV's official social media channels, which will increase your visibility and reputation.",
    },
    {
      icon: Badge,
      title: "PR Support",
      description:
        "At the Revolution EV, Our PR team makes sure your brand's voice is heard by leading media and industry outlets through everything from press releases and media exposure to interview opportunities.",
    },
    {
      icon: Mic,
      title: "Speaking Opportunities",
      description:
        "Securing keynote presentations, panel participation, or speaking slots at Malaysia's flagship EV event.",
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Why Sponsor?</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Join Malaysia's Premier EV event and unlock exclusive opportunities to connect with industry leaders, boost
          your brand visibility, and drive meaningful business growth.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon
          return (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="text-center space-y-4 pt-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="px-8">
            <Calendar className="mr-2 h-5 w-5" />
            Sponsor
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            Request Tailored Package
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">Ready to elevate your brand at Malaysia's leading EV event?</p>
      </div>
    </div>
  )
}
