import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WhyMalaysia() {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light text-teal-400 mb-4">Why Malaysia</h1>
          <p className="text-sm text-gray-300 max-w-4xl leading-relaxed">
    With its proactive policies and expanding infrastructure, Malaysia is quickly becoming a critical hub for EV growth in Southeast Asia as the shift from mobility to e-mobility becomes more evident in the face of increasing climate challenges.
          </p>
        </div>

        {/* Government Policies Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-black border border-gray-800">
          {/* Background Circles */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-teal-400/30 to-teal-600/30 blur-sm"></div>
          </div>
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 -translate-x-1/4">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-300/40 to-teal-500/40"></div>
          </div>
          <div className="absolute left-12 top-1/2 transform -translate-y-1/2">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-200/50 to-teal-400/50"></div>
          </div>

          <div className="relative z-10 flex items-center gap-8 p-8">
            <div className="flex-1 ml-16">
              <h2 className="text-2xl font-light text-teal-400 mb-3">Government Policies</h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                The Malaysian government’s pro-EV policies, such as tax incentives for EV manufacturers and consumers, expansion of charging infrastructure, and efforts to strengthen Malaysia as a regional EV manufacturing hub, have significantly accelerated the adoption of EVs.

              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/image/Sponsors/Vector 146.png?height=120&width=200"
                alt="Government officials and business people in meeting"
                width={200}
                height={120}
                className=""
              />
            </div>
          </div>
        </div>

        {/* Focus on Sustainability Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-black border border-gray-800">
          {/* Background Circles */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-teal-400/30 to-teal-600/30 blur-sm"></div>
          </div>
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 -translate-x-1/4">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-300/40 to-teal-500/40"></div>
          </div>
          <div className="absolute left-12 top-1/2 transform -translate-y-1/2">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-200/50 to-teal-400/50"></div>
          </div>

          <div className="relative z-10 flex items-center gap-8 p-8">
            <div className="flex-1 ml-16">
              <h2 className="text-2xl font-light text-teal-400 mb-3">Focus on Sustainability and Green Innovation</h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Malaysia’s innovation trajectory is gaining momentum, with a strong focus on funding for startups, EV manufacturing, and the expansion of charging infrastructure, transforming the country into a dynamic hub for sustainable mobility and tech-driven growth.

              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/image/Sponsors/Vector 148.png?height=120&width=200"
                alt="Dark automotive manufacturing scene"
                width={200}
                height={120}
                className=""
              />
            </div>
          </div>
        </div>

        {/* Advanced Infrastructure Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-black border border-gray-800">
          {/* Background Circles */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-teal-400/30 to-teal-600/30 blur-sm"></div>
          </div>
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 -translate-x-1/4">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-300/40 to-teal-500/40"></div>
          </div>
          <div className="absolute left-12 top-1/2 transform -translate-y-1/2">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-200/50 to-teal-400/50"></div>
          </div>

          <div className="relative z-10 flex items-center gap-8 p-8">
            <div className="flex-1 ml-16">
              <h2 className="text-2xl font-light text-teal-400 mb-3">Advanced Infrastructure Technologies</h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Better EV performance and cost are being driven by advancements in battery technology, and the most recent developments in the Malaysian market are creating exciting prospects for the e-mobility sector.

              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/image/Sponsors/Vector 146.png?height=120&width=200"
                alt="Business conference or technology presentation"
                width={200}
                height={120}
                className=""
              />
            </div>
          </div>
        </div>

        {/* Vehicle to Grid Integration Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-black border border-gray-800">
          {/* Background Circles */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-teal-400/30 to-teal-600/30 blur-sm"></div>
          </div>
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 -translate-x-1/4">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-300/40 to-teal-500/40"></div>
          </div>
          <div className="absolute left-12 top-1/2 transform -translate-y-1/2">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-200/50 to-teal-400/50"></div>
          </div>

          <div className="relative z-10 flex items-center gap-8 p-8">
            <div className="flex-1 ml-16">
              <h2 className="text-2xl font-light text-teal-400 mb-3">Vehicle to Grid Integration</h2>
              <p className="text-sm text-gray-300 leading-relaxed">
              Vehicle to Grid (V2G) allows electric vehicles to send power back to the grid whenever needed.  As Malaysia accelerates EV adoption, V2G can play a key role in integrating energy and technology.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/image/Sponsors/Vector 148.png?height=120&width=200"
                alt="Dark automotive technology scene"
                width={200}
                height={120}
                className=""
              />
            </div>
          </div>
        </div>

        {/* Smart Mobility Solutions Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-black border border-gray-800">
          {/* Background Circles */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-teal-400/30 to-teal-600/30 blur-sm"></div>
          </div>
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 -translate-x-1/4">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-300/40 to-teal-500/40"></div>
          </div>
          <div className="absolute left-12 top-1/2 transform -translate-y-1/2">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-200/50 to-teal-400/50"></div>
          </div>

          <div className="relative z-10 flex items-center gap-8 p-8">
            <div className="flex-1 ml-16">
              <h2 className="text-2xl font-light text-teal-400 mb-3">Smart Mobility Solutions for Smart Cities</h2>
              <p className="text-sm text-gray-300 leading-relaxed">
               Malaysia’s strategic move to integrate e-mobility with smart technologies such as IoT and AI aims to create a more efficient, sustainable, and interconnected transportation system.

              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/image/Sponsors/Vector 146.png?height=120&width=200"
                alt="Business meeting or technology showcase"
                width={200}
                height={120}
                className=""
              />
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center pt-8 border-t border-gray-800">
          <h3 className="text-xl font-light text-white mb-4">
            Interested in Showcasing Your Solutions To A Targeted Audience
          </h3>
          <Link href="/register">
           <Button
            variant="outline"
            className="border-teal-400 text-white bg-black hover:bg-black hover:text-white "
          >
            Request Call Back
          </Button>
          </Link>

        </div>
      </div>
    </div>
  )
}
