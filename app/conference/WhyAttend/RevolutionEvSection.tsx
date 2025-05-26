"use client"
import Image from "next/image"

export default function RevolutionEVSection() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8 text-teal-500">
          About the Revolution EV Conference
        </h2>

        {/* Image and Gradient Stack */}
        <div className="h-[32rem] md:h-[36rem] flex flex-col overflow-hidden">
          {/* Top Half - Full Image */}
          <div className="relative flex-1">
            <Image
              src="/image/about/Rectangle 1804.png"
              alt="EV Conference"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Half - Gradient with Text */}

        </div>
      </div>
                <div className="flex-1 bg-gradient-to-r from-cyan-400 to-green-400 flex px-6 py-8 md:py-10">
            {/* Left - Hashtag */}
            <div className="w-1/2 flex items-center">
              <div className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
                #REVS25
              </div>
            </div>

            {/* Right - Paragraph */}
            <div className="w-1/2 flex items-center">
              <div className="text-white space-y-3 text-xs md:text-sm leading-relaxed">
                <p>
                  The Conference Is The Incubation Of Malaysia's Wildest EV Ideas! Minds From The Industry Including
                  Policymakers, Business Leaders, Investors, Environmental Activists, And Key Stakeholders To Make Real
                  Decisions On The Policy & Regulatory Frameworks, Current Challenges, And Most Important Accelerators
                  In Malaysia's Fast-Emerging EV Sector.
                </p>
                <p>
                  The Country's EV Agenda Will Be Spearheaded By The Revolution EV Malaysia 2025, With Support To The
                  Government's Goal Of 20% EV Adoption In New Car Sales By 2030. Revolution EV 2025 Drives A 360-Degree
                  Perspective Of The Ecosystem For Both Car Developers And Implementors.
                </p>
              </div>
            </div>
          </div>
    </section>
  )
}
