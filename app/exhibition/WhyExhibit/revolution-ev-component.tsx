// import React from "react";
// import Image from "next/image";

// const conferenceHighlights = [
//   {
//     title: "Thoughtfully Curated Conference Programme",
//     image: "/highlights/programme.jpg",
//   },
//   {
//     title: "Learning Opportunities",
//     image: "/highlights/learning.jpg",
//   },
//   {
//     title: "Hear from the Best EV Minds",
//     image: "/highlights/experts.jpg",
//   },
//   {
//     title: "Share and Collaborate",
//     image: "/highlights/share.jpg",
//   },
//   {
//     title: "Hands On Workshops",
//     image: "/highlights/workshops.jpg",
//   },
//   {
//     title: "Sponsorship and Partnership Opportunities",
//     image: "/highlights/partnerships.jpg",
//   },
//   {
//     title: "Get Inspired",
//     image: "/highlights/inspired.jpg",
//   },
//   {
//     title: "Gain Strategic Insights from Global Experts",
//     image: "/highlights/insights.jpg",
//   },
// ];

// export default function EVConferenceComponent() {
//   return (
//     <div className="w-full bg-white text-black">
//       {/* Top Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-green-400 text-white py-16 px-6 text-center">
//         <h2 className="text-4xl font-bold mb-4">About the Revolution EV Conference</h2>
//         <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-10">
//           <Image
//             src="/conference-panel.jpg"
//             alt="Conference Panel"
//             width={500}
//             height={300}
//             className="rounded-md"
//           />
//           <div className="text-left max-w-xl">
//             <h3 className="text-2xl font-bold mb-2">#REVS25</h3>
//             <p className="text-sm leading-relaxed">
//               The conference at the Revolution EV Malaysia 2025 is set to host key figures including Professionals,
//               Influencers, and Leaders across the EV ecosystem to discuss the latest EV technologies, business
//               opportunities, and policies. Attendees will gain firsthand insights into the development of infrastructure,
//               smart mobility, green energy, and sustainable transportation.
//               <br /><br />
//               Scheduled for 4-6 April 2025, the conference will be held at Malaysia International Trade and Exhibition
//               Centre (MITEC), Kuala Lumpur. It will feature curated keynotes, workshops & strategic presentations of the
//               current future landscape for EV Malaysia.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Most Anticipated Section */}
//       <section className="py-16 px-6 max-w-6xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-6 items-center">
//           <Image
//             src="/audience.jpg"
//             alt="Audience"
//             width={600}
//             height={400}
//             className="rounded-md"
//           />
//           <div>
//             <h3 className="text-2xl font-bold mb-4">Malaysia’s Most Anticipated EV Conference</h3>
//             <p className="text-sm leading-relaxed text-gray-700">
//               With an unparalleled platform, this event is designed to bring together EV industry players, policymakers,
//               and enthusiasts to foster collaboration and innovation. Participants will explore the full spectrum of
//               advancements in the EV space — from infrastructure to manufacturing and investment.
//               <br /><br />
//               Covering the Entire Value Chain, Participants include both the Government and Private Sector. Prepare to
//               network with stakeholders across the spectrum — including OEMs, suppliers, investors, and solution providers —
//               shaping the transition to People-Centric EV Landscapes.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Why Attend Section */}
//       <section className="py-16 px-6 bg-gray-50">
//         <h3 className="text-3xl font-bold text-center mb-10">
//           Why Attend Revolution EV Malaysia 2025
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           {conferenceHighlights.map((item, idx) => (
//             <div key={idx} className="relative group">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 width={300}
//                 height={200}
//                 className="rounded-lg w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                 <p className="text-white font-semibold text-center px-4 text-sm">{item.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
import React from 'react';

const RevolutionBanner: React.FC = () => {
  return (
    <div className="relative w-full h-48 overflow-hidden rounded-lg shadow-md">
      {/* Background with gradient starting from center */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1a2a6c] to-[#fdbb2d]"></div>
      
      {/* Content positioned properly */}
      <div className="relative h-full flex flex-col justify-center items-center text-white font-sans p-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2 drop-shadow-md">
          About the Revolution EV Conference
        </h2>
        <p className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          #REVS25
        </p>
      </div>
    </div>
  );
};

export default RevolutionBanner;