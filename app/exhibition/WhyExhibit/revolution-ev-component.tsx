import Image from "next/image"
import img from "@/public/image/exhibit/whyexhibit.png"

export default function ExhibitionSection() {
  return (
    <section className="relative bg-white text-black py-16 px-6 overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 z-0">
        {/* Top section with geometric shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Large diagonal shapes */}
          <div
            className="absolute top-0 left-0 w-96 h-96 transform rotate-45 translate-x-[-50%] translate-y-[-50%]"
            style={{ backgroundColor: "#0DB6C9" }}
          ></div>
          <div
            className="absolute top-32 left-32 w-80 h-80 transform rotate-45"
            style={{ backgroundColor: "#4DC656" }}
          ></div>
          <div
            className="absolute top-0 right-0 w-96 h-96 transform rotate-45 translate-x-[50%] translate-y-[-50%]"
            style={{ backgroundColor: "#4DC656" }}
          ></div>
          <div
            className="absolute top-32 right-32 w-80 h-80 transform rotate-45"
            style={{ backgroundColor: "#0DB6C9" }}
          ></div>

          {/* Bottom section shapes */}
          <div
            className="absolute bottom-0 left-0 w-96 h-96 transform rotate-45 translate-x-[-50%] translate-y-[50%]"
            style={{ backgroundColor: "#4DC656" }}
          ></div>
          <div
            className="absolute bottom-32 left-32 w-80 h-80 transform rotate-45"
            style={{ backgroundColor: "#0DB6C9" }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 transform rotate-45 translate-x-[50%] translate-y-[50%]"
            style={{ backgroundColor: "#0DB6C9" }}
          ></div>
          <div
            className="absolute bottom-32 right-32 w-80 h-80 transform rotate-45"
            style={{ backgroundColor: "#4DC656" }}
          ></div>

          {/* Center shapes */}
          <div
            className="absolute top-1/2 left-1/4 w-64 h-64 transform rotate-45 translate-y-[-50%]"
            style={{ backgroundColor: "#0DB6C9", opacity: 0.7 }}
          ></div>
          <div
            className="absolute top-1/2 right-1/4 w-64 h-64 transform rotate-45 translate-y-[-50%]"
            style={{ backgroundColor: "#4DC656", opacity: 0.7 }}
          ></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black">
            Exhibit innovative products, solutions and groundbreaking offerings at Revolution{" "}
            <span style={{ color: "#0DB6C9" }}>EV Malaysia 2025</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 bg-white/90 backdrop-blur-sm p-6 rounded-lg">
            <div className="space-y-4 text-sm leading-relaxed text-black">
              <p>
Revolution EV Malaysia will offer exhibitors a platform to showcase the latest EV models, innovative solutions, and next-gen technologies in front of thousands of industry professionals. The event will draw a large international & regional audience;  <span className="text-sky-500">#rev25</span> will provide participants with an exclusive opportunity to engage with thousands of potential clients actively seeking the best solutions to meet their specific needs. With an unmatched networking and business matchmaking space, participants will be able to engage with the prospects in real-time, generate qualified leads, and gauge instant market reaction.
              </p>

              <p>The event will feature an expansive space of 3000sqm for 2 days</p>

              <p>
               Featuring brand-new EV cars, trucks, and lightweight options such as electric scooters, skateboards, and bikes, everything EV will be on display at Malaysia's signature EV tradeshow and conference — with participation from leading automakers, tech innovators, mobility startups, charging infrastructure providers, and government agencies — offering attendees a glimpse into the future of mobility
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
              <Image
                src={img || "/placeholder.svg"}
                alt="Modern Exhibition Center"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}





// import React from 'react';

// const RevolutionBanner: React.FC = () => {
//   return (
//     <div className="relative w-full h-48 overflow-hidden rounded-lg shadow-md">
//       {/* Background with gradient starting from center */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1a2a6c] to-[#fdbb2d]"></div>
      
//       {/* Content positioned properly */}
//       <div className="relative h-full flex flex-col justify-center items-center text-white font-sans p-8">
//         <h2 className="text-3xl md:text-4xl font-semibold mb-2 drop-shadow-md">
//           About the Revolution EV Conference
//         </h2>
//         <p className="text-4xl md:text-5xl font-bold drop-shadow-lg">
//           #REVS25
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RevolutionBanner;