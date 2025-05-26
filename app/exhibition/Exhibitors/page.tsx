"use client";
// import React, { useState } from "react";

// const exhibitors = new Array(60).fill({
//   name: "Tesla",
//   description:
//     "Revolution EV Malaysia Will Offer Exhibitors A Platform To Showcase The Latest EV Models, Innovative Solutions, And Next-Gen Technologies In Front Of Thousands Of Industry Professionals. The Event Will Draw A Large International & Regional Audience. #RevEV Will Provide Participants With An Exclusive Opportunity To Engage With Thousands Of Interested Customers & Buyers Seeking The Best Solutions To Meet Their Specific Needs. With An Unmatched Networking And Business Matchmaking Space, Participants Will Be Able To Engage With The Prospects In Real-Time, Generate Qualified Leads, And Gauge Instant Market Reactions.",
//   logo: "/tesla-logo.png", // Replace with your actual image path
//   booth: "B12",
//   website: "#",
// });

// const ITEMS_PER_PAGE = 5;

// export default function ExhibitorsComponent() {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(exhibitors.length / ITEMS_PER_PAGE);
//   const currentData = exhibitors.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   const goToPage = (page: number) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="w-full px-4 py-10 md:px-20 bg-white">
//       <h2 className="text-3xl font-semibold text-center mb-10">Exhibitors</h2>

//       <div className="space-y-6">
//         {currentData.map((exhibitor, index) => (
//           <div
//             key={index}
//             className="flex flex-col md:flex-row bg-black text-white rounded-md overflow-hidden shadow-md"
//           >
//             {/* Left Card: Logo + Actions */}
//             <div className="md:w-1/4 w-full bg-white flex flex-col items-center justify-between p-4 space-y-4">
//               <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center">
//                 <img
//                   src={exhibitor.logo}
//                   alt={exhibitor.name}
//                   className="w-16 h-16 object-contain"
//                 />
//               </div>

//               {/* Actions */}
//               <div className="w-full flex justify-between mt-4">
//                 <a
//                   href={exhibitor.website}
//                   className="bg-[#00C3FF] text-white text-xs px-2 py-1 rounded-l-md font-medium w-3/4 text-center hover:opacity-90"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Visit Website →
//                 </a>
//                 <span className="bg-[#00C27E] text-black px-2 py-1 text-xs rounded-r-md font-semibold w-1/4 text-center">
//                   {exhibitor.booth}
//                 </span>
//               </div>
//             </div>

//             {/* Right Card: Details */}
//             <div className="md:w-3/4 w-full p-6 flex flex-col justify-between">
//               <h3 className="text-xl font-semibold mb-2">{exhibitor.name}</h3>
//               <p className="text-sm leading-relaxed">{exhibitor.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-10">
//         <div className="flex space-x-2 text-sm">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => goToPage(i + 1)}
//               className={`w-8 h-8 border border-gray-400 ${
//                 currentPage === i + 1
//                   ? "bg-black text-white"
//                   : "text-black hover:bg-black hover:text-white"
//               } transition-colors`}
//             >
//               {i + 1 < 10 ? `0${i + 1}` : i + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




// ..................................

export default function ExhibitorsComponent() {
return(
<div className="bg-white h-screen flex items-center justify-center">
  <h1 className="text-4xl font-bold text-black">This Page Is being Updated</h1>
</div>
)
}