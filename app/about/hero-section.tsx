"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
export default function RevolutionEVBanner() {
  return (
    <div className="w-full">
      {/* Text content container */}
      <div className="max-w-5xl mx-auto p-6 space-y-4">
        <h1
          className="w-full text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#00b8d4] to-[#00c853] bg-clip-text text-transparent"
          style={{ letterSpacing: "0.04em" }}
        >
          Welcome to Revolution <br /> EV Malaysia 2025
        </h1>

        {/* First part of text */}
        <div className="space-y-4 text-sm">
<p>
  Revolution EV Malaysia 2025 is Malaysia's Flagship EV Event dedicated To advancing Electric Mobility,
  Featuring Unrivaled Experts, Vehicles And Next-Generation Technologies. This Groundbreaking, <span className="text-sky-500 font-semibold">#rev25</span> Is
  Designed to Bring People Together, Encourage New Ideas, Growth, And Further Cooperation Within Malaysia's
  Emerging E-Mobility Industry. The Event Will Bring Together Policy-makers, Investors, Innovators, Industry
  Pioneers, And Government Leaders To Shape The Global Landscape Of Electric Mobility And Its Adoption And
  Potential.
</p>
          <p>
            This Two-Day Event Will Provide A Platform For Industry Leaders, Experts, And Stakeholders To Engage In
            Meaningful Discussions And Strategic Planning Sessions Over The Future Of Electric Mobility In Malaysia And
            Explore Opportunities To Further The Advancements Of EVs Through Knowledge Transfer And Strategic
            Decision-Making. This Is Your Opportunity To Participate In The Dynamic Discussion That Will Influence
            Malaysia's Sustainable Transportation Landscape Going Forward.
          </p>
        </div>
      </div>

      {/* Full-width image */}
      <div className="w-full">
        <Image
          src="/image/About/image 280.png"
          width={1928}
          height={50}
          alt="EV Policy Visual"
          className="w-full h-auto"
        />
      </div>

      {/* Second part of text */}
      <div className="max-w-5xl mx-auto p-6 space-y-4 text-sm">
        <p>
          The Event Will Showcase The Latest Innovations, Cutting-Edge Technologies That Will Allow All The Attendees To
          Explore The Latest Products, Services, And Solutions Across The Industry Verticals. In Addition To Offering
          Visitors A Front Seat At The Future Of Electric Mobility, The Event Will Provide Direct Access To The Latest
          Tech Innovations And Unveil Valuable Business Opportunities.
        </p>

        <p>
          The Event Will Have A Diverse Range Of Attendees, From Startups To Large Enterprises And From Legislators To
          EV Enthusiasts, All Of Whom Will Be Bound Together By A Common Goal Of advancing Sustainability Within The
          Mobility Value Chain. The Diverse Convergence Of Perspectives Will Encourage Collaboration And Accelerate The
          Development Of Sustainable Solutions For A Greener, More Sustainable Future.
        </p>

        <p>
          Moreover, The EV Event Will Provide A Robust Platform For Networking, Allowing Participants To Connect With
          Peers, Establish Partnerships Across The Industry Value Chain. These Interactions Will Drive Innovation,
          Promote Strategic Partnerships, And Create Actionable Pathways To Achieving Business Objectives And Supporting
          Sustainable Growth.
        </p>

        <div className="font-medium">
          Join Us From The <span className="text-[#00b8d4]">23rd to 24th Of October 2025</span> In Kuala Lumpur For Two
          Power-Packed Days Of Thought Leadership, Innovation Showcases, And Strategic Networking As We Drive{" "}
          <span className="text-[#00b8d4]">Malaysia Toward Its EV Future.</span>
        </div>

        <div className="flex justify-center pt-4">
         <Link href="/register?t=brochure">
  <Button className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-6 rounded-none">
    Request Brochure
  </Button>
</Link>

        </div>
      </div>
    </div>
  )
}
