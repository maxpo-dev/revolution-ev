import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function WhyMalaysia() {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light text-teal-400 mb-4">Why Malaysia</h1>
          <p className="text-sm text-gray-300 max-w-4xl leading-relaxed">
            Malaysia Has Emerged As A Leading Hub For Electric Vehicle (EV) Innovation In Southeast Asia, Driven By
            Strong Government Support And A Commitment To Sustainable Transportation. The Country Offers Unique
            Advantages For EV Manufacturers, Technology Providers, And Investors Looking To Establish A Presence In The
            Rapidly Growing ASEAN Market.
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
                Malaysia's Government Has Implemented Comprehensive EV Policies, Including The National Automotive
                Policy 2020 And Low Carbon Mobility Blueprint 2021-2030. These Initiatives Provide Tax Incentives,
                Import Duty Exemptions, And Infrastructure Development Support, Creating A Conducive Environment For EV
                Adoption And Manufacturing.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/placeholder.svg?height=120&width=200"
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
                Malaysia Is Committed To Achieving Carbon Neutrality By 2050, With EVs Playing A Central Role In This
                Vision. The Country Promotes Green Technology Through Research And Development Initiatives, Renewable
                Energy Integration, And Sustainable Manufacturing Practices That Align With Global Environmental Goals.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/placeholder.svg?height=120&width=200"
                alt="Dark automotive manufacturing scene"
                width={200}
                height={120}
                className="rounded-lg"
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
                Malaysia Boasts World-Class Infrastructure Including Modern Ports, Highways, And Digital Connectivity.
                The Country Is Rapidly Expanding Its EV Charging Network With Plans For 15,000 Charging Points By 2025,
                Supported By Smart Grid Technologies And Renewable Energy Sources.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/placeholder.svg?height=120&width=200"
                alt="Business conference or technology presentation"
                width={200}
                height={120}
                className="rounded-lg"
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
                Malaysia Is Pioneering Vehicle-To-Grid (V2G) Technology Integration, Allowing EVs To Feed Energy Back
                Into The National Grid. This Innovation Creates New Revenue Streams For EV Owners While Supporting Grid
                Stability And Renewable Energy Integration Across The Country.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/placeholder.svg?height=120&width=200"
                alt="Dark automotive technology scene"
                width={200}
                height={120}
                className="rounded-lg"
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
                Malaysia's Smart City Initiatives Integrate EVs Into Comprehensive Urban Mobility Solutions. From
                Autonomous Vehicle Testing To Integrated Transportation Systems, The Country Provides A Living
                Laboratory For Next-Generation Mobility Technologies And Smart Infrastructure Development.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/placeholder.svg?height=120&width=200"
                alt="Business meeting or technology showcase"
                width={200}
                height={120}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center pt-8 border-t border-gray-800">
          <h3 className="text-xl font-light text-white mb-4">
            Interested in Showcasing Your Solutions To A Targeted Audience
          </h3>
          <Button
            variant="outline"
            className="border-teal-400 text-white bg-black hover:bg-black hover:text-white "
          >
            Request Call Back
          </Button>
        </div>
      </div>
    </div>
  )
}
