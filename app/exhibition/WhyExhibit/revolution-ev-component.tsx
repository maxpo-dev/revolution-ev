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
                Revolution EV Malaysia Will Offer Exhibitors A Platform To Showcase The Latest EV Models, Innovative
                Solutions, And Next-Gen Technologies In Front Of Thousands Of Industry Professionals. The Event Will
                Draw A Large International & Regional Audience. #REVS25 Will Provide Participants With An Exclusive
                Opportunity To Engage With Thousands Of Potential Clients Actively Seeking The Best Solutions To Meet
                Their Specific Needs. With An Unmatched Networking And Business Matchmaking Scene, Participants Will Be
                Able To Engage With The Prospects In Real-Time, Generate Qualified Leads, And Gauge Instant Market
                Reaction.
              </p>

              <p>The Event Will Feature An Expansive Space Of ****Sqm For 3 Days</p>

              <p>
                Featuring Brand New EV Cars, Trucks, And Lightweight Options Such As Electric Scooters, Skateboards, And
                Bikes. Everything EV Will Be On Display At Malaysia's Signature EV Tradeshow And Conference, Offering
                Participants A Glimpse Into The Future Of Mobility.
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