// import Image from "next/image"
// import Link from "next/link"

// export default function ConferencePage() {
//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-[#1e6b87] to-[#2a9d8f] text-white py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="max-w-3xl">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Conference Program</h1>
//             <p className="text-xl mb-8">
//               Join industry leaders, policymakers, and innovators for two days of insightful discussions and knowledge
//               sharing on the future of electric mobility in Malaysia.
//             </p>
//             <Link
//               href="/register?t=delegate"
//               className="px-8 py-3 bg-white text-[#2a9d8f] font-medium hover:bg-gray-100 transition"
//             >
//               Register as Delegate
//             </Link>
//           </div>
//         </div>
//         <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-20">
//           <div className="w-full h-full bg-[url('/image/pattern-bg.png')] bg-repeat"></div>
//         </div>
//       </section>

//       {/* Conference Overview */}
//       <section className="py-16 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">Conference Overview</h2>
//               <p className="text-gray-700 mb-4">
//                 The Revolution EV Malaysia 2025 Conference brings together the brightest minds in the electric vehicle
//                 industry to discuss the latest trends, challenges, and opportunities in the Malaysian and global EV
//                 market.
//               </p>
//               <p className="text-gray-700 mb-4">
//                 Over two days, delegates will have access to keynote presentations, panel discussions, technical
//                 workshops, and networking sessions designed to foster collaboration and drive the industry forward.
//               </p>
//               <div className="mt-8">
//                 <Link
//                   href="/downloads/conference-agenda.pdf"
//                   className="px-6 py-3 border border-black hover:bg-black hover:text-white transition"
//                 >
//                   Download Full Agenda
//                 </Link>
//               </div>
//             </div>
//             <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
//               <Image src="/image/conference-overview.jpg" alt="Conference Overview" fill className="object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Conference Tracks */}
//       <section className="py-16 px-6 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-12 text-center">Conference Tracks</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#2a9d8f]">
//               <h3 className="text-xl font-bold mb-4">Policy & Regulation</h3>
//               <p className="text-gray-600 mb-4">
//                 Explore the latest policies, incentives, and regulatory frameworks shaping Malaysia's EV landscape.
//               </p>
//               <ul className="space-y-2 text-gray-700">
//                 <li className="flex items-start">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-[#2a9d8f] mr-2 mt-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                   <span>National EV policy implementation</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-[#2a9d8f] mr-2 mt-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                   <span>Tax incentives and subsidies</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-[#2a9d8f] mr-2 mt-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                   <span>Standardization and safety regulations</span>
//                 </li>
//               </ul>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#2a9d8f]">
//               <h3 className="text-xl font-bold mb-4">Infrastructure Development</h3>
//               <p className="text-gray-600 mb-4">
//                 Discuss strategies for building a robust charging infrastructure network across Malaysia.
//               </p>
//               <ul className="space-y-2 text-gray-700">
//                 <li className="flex items-start">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-[#2a9d8f] mr-2 mt-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                   <span>Urban vs. rural charging solutions</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-[#2a9d8f] mr-2 mt-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                   <span>Grid integration and smart charging</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-[#2a9d8f] mr-2 mt-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                   <span>Public-private partnerships</span>
//                 </li>
//               </ul>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#2a9d8f]">
//               <h3 className="text-xl font-bold mb-4">Technology & Innovation</h3>
//               <p className="text-gray-600 mb-4">
//                 Discover the latest technological advancements in electric vehicles and related systems.
//               </p>
//               <ul className="space-y-2 text-gray-700">
//                 <li className="flex items-start">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-[#2a9d8f] mr-2 mt-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                   <span>Battery technology advancements</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-[#2a9d8f] mr-2 mt-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                   <span>Autonomous driving and EVs</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-[#2a9d8f] mr-2 mt-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                   <span>Vehicle-to-grid (V2G) technology</span>
//                 </li>
//               </ul>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#2a9d8f]">
//               <h3 className="text-xl font-bold mb-4">Market & Consumer Adoption</h3>
//               <p className="text-gray-600 mb-4">
//                 Analyze market trends and strategies to accelerate consumer adoption of EVs in Malaysia.
//               </p>
//               <ul className="space-y-2 text-gray-700">
//                 <li className="flex items-start">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-[#2a9d8f] mr-2 mt-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                   <span>Consumer behavior and preferences</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-[#2a9d8f] mr-2 mt-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                   <span>Fleet electrification strategies</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-[#2a9d8f] mr-2 mt-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                   <span>Total cost of ownership analysis</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Keynote Speakers */}
//       <section className="py-16 px-6">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-4 text-center">Keynote Speakers</h2>
//           <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
//             Hear from industry leaders and visionaries shaping the future of electric mobility.
//           </p>
//           <div className="grid md:grid-cols-4 gap-8">
//             {[1, 2, 3, 4].map((i) => (
//               <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md group">
//                 <div className="relative h-64 w-full overflow-hidden">
//                   <Image
//                     src={`/image/speaker-${i}.jpg`}
//                     alt={`Speaker ${i}`}
//                     fill
//                     className="object-cover group-hover:scale-105 transition duration-500"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-1">Speaker Name</h3>
//                   <p className="text-[#2a9d8f] mb-3">Position, Company</p>
//                   <p className="text-gray-600 text-sm">
//                     Brief bio highlighting the speaker's expertise and contributions to the EV industry.
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-8 text-center">
//             <Link href="/speakers" className="px-6 py-3 border border-black hover:bg-black hover:text-white transition">
//               View All Speakers
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Conference Schedule */}
//       <section className="py-16 px-6 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-12 text-center">Conference Schedule</h2>

//           {/* Day 1 */}
//           <div className="mb-12">
//             <h3 className="text-2xl font-bold mb-6 flex items-center">
//               <span className="w-10 h-10 rounded-full bg-[#2a9d8f] text-white flex items-center justify-center mr-3 text-lg">
//                 1
//               </span>
//               Day 1 - September 3, 2025
//             </h3>
//             <div className="space-y-6">
//               <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#2a9d8f]">
//                 <div className="flex flex-wrap justify-between items-start mb-4">
//                   <span className="bg-[#2a9d8f]/20 text-[#2a9d8f] px-3 py-1 rounded-full text-sm font-medium">
//                     09:00 - 10:00
//                   </span>
//                   <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
//                     Main Hall
//                   </span>
//                 </div>
//                 <h4 className="text-xl font-bold mb-2">Opening Ceremony & Welcome Address</h4>
//                 <p className="text-gray-600 mb-4">
//                   Official opening of Revolution EV Malaysia 2025 with welcome addresses from government officials and
//                   event organizers.
//                 </p>
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
//                     <Image src="/image/speaker-1.jpg" alt="Speaker" width={40} height={40} className="object-cover" />
//                   </div>
//                   <div>
//                     <p className="font-medium">Speaker Name</p>
//                     <p className="text-sm text-gray-500">Position, Organization</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#2a9d8f]">
//                 <div className="flex flex-wrap justify-between items-start mb-4">
//                   <span className="bg-[#2a9d8f]/20 text-[#2a9d8f] px-3 py-1 rounded-full text-sm font-medium">
//                     10:30 - 12:00
//                   </span>
//                   <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
//                     Main Hall
//                   </span>
//                 </div>
//                 <h4 className="text-xl font-bold mb-2">Keynote: The Future of Electric Mobility in Malaysia</h4>
//                 <p className="text-gray-600 mb-4">
//                   An in-depth look at the current state and future prospects of electric mobility in Malaysia, including
//                   government initiatives and industry developments.
//                 </p>
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
//                     <Image src="/image/speaker-2.jpg" alt="Speaker" width={40} height={40} className="object-cover" />
//                   </div>
//                   <div>
//                     <p className="font-medium">Speaker Name</p>
//                     <p className="text-sm text-gray-500">Position, Organization</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Day 2 */}
//           <div>
//             <h3 className="text-2xl font-bold mb-6 flex items-center">
//               <span className="w-10 h-10 rounded-full bg-[#2a9d8f] text-white flex items-center justify-center mr-3 text-lg">
//                 2
//               </span>
//               Day 2 - September 4, 2025
//             </h3>
//             <div className="space-y-6">
//               <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#2a9d8f]">
//                 <div className="flex flex-wrap justify-between items-start mb-4">
//                   <span className="bg-[#2a9d8f]/20 text-[#2a9d8f] px-3 py-1 rounded-full text-sm font-medium">
//                     09:00 - 10:30
//                   </span>
//                   <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
//                     Main Hall
//                   </span>
//                 </div>
//                 <h4 className="text-xl font-bold mb-2">
//                   Keynote: Battery Technology - Current State and Future Innovations
//                 </h4>
//                 <p className="text-gray-600 mb-4">
//                   An exploration of the latest advancements in battery technology and their implications for the EV
//                   industry.
//                 </p>
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
//                     <Image src="/image/speaker-3.jpg" alt="Speaker" width={40} height={40} className="object-cover" />
//                   </div>
//                   <div>
//                     <p className="font-medium">Speaker Name</p>
//                     <p className="text-sm text-gray-500">Position, Organization</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#2a9d8f]">
//                 <div className="flex flex-wrap justify-between items-start mb-4">
//                   <span className="bg-[#2a9d8f]/20 text-[#2a9d8f] px-3 py-1 rounded-full text-sm font-medium">
//                     15:00 - 16:30
//                   </span>
//                   <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
//                     Main Hall
//                   </span>
//                 </div>
//                 <h4 className="text-xl font-bold mb-2">Closing Panel: The Road Ahead - Malaysia's EV Future</h4>
//                 <p className="text-gray-600 mb-4">
//                   Industry leaders and policymakers discuss the future of electric mobility in Malaysia and the steps
//                   needed to achieve the country's EV goals.
//                 </p>
//                 <div className="flex flex-wrap gap-4">
//                   {[1, 2, 3].map((i) => (
//                     <div key={i} className="flex items-center">
//                       <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
//                         <Image
//                           src={`/image/speaker-${i}.jpg`}
//                           alt="Speaker"
//                           width={40}
//                           height={40}
//                           className="object-cover"
//                         />
//                       </div>
//                       <div>
//                         <p className="font-medium">Panelist Name</p>
//                         <p className="text-sm text-gray-500">Position, Organization</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-6 bg-gradient-to-r from-[#1e6b87] to-[#2a9d8f] text-white">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us at Revolution EV Malaysia 2025</h2>
//           <p className="text-xl mb-8 max-w-3xl mx-auto">
//             Be part of the conversation shaping the future of electric mobility in Malaysia. Register now to secure your
//             spot.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Link
//               href="/register?t=delegate"
//               className="px-8 py-3 bg-white text-[#2a9d8f] font-medium hover:bg-gray-100 transition"
//             >
//               Register as Delegate
//             </Link>
//             <Link
//               href="/downloads/conference-agenda.pdf"
//               className="px-8 py-3 border border-white text-white font-medium hover:bg-white hover:text-[#2a9d8f] transition"
//             >
//               Download Agenda
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
