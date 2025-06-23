"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function RevolutionEVBanner() {
  return (
    <div className="w-full bg-white">
      {/* Text content container */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#00b8d4] to-[#00c853] bg-clip-text text-transparent leading-tight"
          style={{ letterSpacing: "0.02em" }}
        >
          Welcome to Revolution <br /> EV Malaysia 2025
        </h1>

        {/* First part of text */}
        <div className="space-y-6 text-gray-700 text-base leading-relaxed">
          <p>
            Revolution EV Malaysia 2025 is Malaysia's flagship EV event dedicated to advancing electric mobility,
            featuring unrivaled electric vehicles and next-generation zero-emission vehicle innovations.{" "}
            <span className="text-sky-500 font-semibold">#rev25</span> is designed to bring people together, encourage
            new ideas, growth, and further cooperation within Malaysia's emerging e-mobility industry. The event will
            bring together policymakers, investors, innovators, industry pioneers, and government leaders to propel the
            advancements of electric mobility across Malaysia and beyond.
          </p>
          <p>
            The 2-day event will feature a best-of-kind conference program with a specifically curated conference
            agenda, where speakers and panelists will delve into the future of electric mobility in Malaysia and explore
            opportunities to further the advancements of EVs through knowledge transfer and strategic decision-making.
            This is your opportunity to participate in the dynamic discussion that will influence Malaysia's sustainable
            transportation landscape going forward!
          </p>
          <p>
            The summit will also host an electrifying exhibition and a showcase of disruptive technologies that will
            allow all the attendees to explore the latest products, services, and solutions across the industry
            verticals. In addition to offering visitors a first look at the future of electric mobility, the event will
            provide direct access to the latest tech innovations and unveil valuable business opportunities.
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
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <div className="space-y-6 text-gray-700 text-base leading-relaxed">
          <p>
            The event will draw a diverse range of attendees, from startups to large enterprises and from legislators to
            EV enthusiasts, all of whom will be bound together by a common goal of advancing sustainability within the
            mobility value chain. This unique convergence of perspectives will encourage collaboration, innovation, and
            the development of actionable solutions for a greener, more sustainable future.
          </p>

          <p>
            Additionally, the event will provide attendees with invaluable networking opportunities, connecting them
            with like-minded professionals across the entire industry value chain. These interactions will drive
            innovation, promote strategic partnerships, and create actionable pathways to achieving business objectives
            and supporting sustainable growth.
          </p>

          <div className="font-semibold text-gray-800 text-lg">
            Join us from the <span className="text-[#00b8d4]">23rd to 24th of October 2025</span> in Kuala Lumpur for
            two power-packed days of thought leadership, innovation showcases, and strategic networking as we drive{" "}
            <span className="text-[#00b8d4]">Malaysia towards its EV future.</span>
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <Link href="/register?t=brochure">
            <Button className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-300 px-8 py-3 rounded-none font-medium transition-colors">
              Request Brochure
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
