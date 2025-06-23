"use client"
import Image from "next/image"

export default function RevolutionEVSection() {
  return (
    <section className="bg-white py-8">
      {/* Title inside container */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8 text-teal-500">
          About the Revolution EV Conference
        </h2>

        {/* Image only inside container */}
        <div className="relative z-10 h-64 md:h-80 mb-[-8rem] md:mb-[-10rem]">
          <Image
            src="/image/About/Rectangle 1804.png"
            alt="EV Conference"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Full-width gradient section */}
      <div className="w-full bg-gradient-to-r from-cyan-400 to-green-400 pt-32 md:pt-40 pb-8 md:pb-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-0">
          {/* Left - Hashtag */}
          <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start">
<div
  className="text-5xl md:text-6xl font-extrabold text-transparent tracking-tight"
  style={{ WebkitTextStroke: "1px white" }}
>
  #rev25
</div>
          </div>
          {/* Right - Paragraph */}
          <div className="w-full md:w-1/2 mt-7 flex items-center">
            <div className="text-white space-y-3 text-xs md:text-sm leading-relaxed">
              <p>
The conference at the Revolution EV Malaysia will host the best minds from the industry, including policymakers, business leaders, investors, entrepreneurs, and other key stakeholders, to meet and debate on the policy & regulatory frameworks, current challenges, and most important advancements in Malaysia's fast-developing EV sector.
              </p>
              <p>
               The country's EV agenda will be spearheaded by Revolution EV Malaysia 2025, which supports the government's goal of 20% EV adoption in new car sales by 2030. Revolution EV will give a 360-degree perspective of the ecosystem for electric car development and implementation.  
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
