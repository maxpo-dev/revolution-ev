// import Image from "next/image"
// import Link from "next/link"

// export default function AboutPage() {
//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-[#1e6b87] to-[#2a9d8f] text-white py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="max-w-3xl">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">About Revolution EV Malaysia 2025</h1>
//             <p className="text-xl mb-8">
//               Malaysia's flagship event dedicated to advancing electric mobility and sustainable transportation
//               solutions.
//             </p>
//           </div>
//         </div>
//         <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-20">
//           <div className="w-full h-full bg-[url('/image/pattern-bg.png')] bg-repeat"></div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-16 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
//               <p className="text-gray-700 mb-4">
//                 Revolution EV Malaysia 2025 is designed to accelerate Malaysia's transition to electric mobility by
//                 bringing together key stakeholders from across the EV ecosystem. Our mission is to create a platform
//                 that fosters innovation, collaboration, and growth in the electric vehicle industry.
//               </p>
//               <p className="text-gray-700 mb-4">
//                 We aim to showcase the latest advancements in electric vehicle technology, infrastructure, and policy,
//                 while providing a space for meaningful connections and partnerships to form.
//               </p>
//               <div className="mt-8">
//                 <Link
//                   href="/register"
//                   className="px-6 py-3 bg-[#2a9d8f] text-white font-medium hover:bg-[#1e6b87] transition"
//                 >
//                   Join The Revolution
//                 </Link>
//               </div>
//             </div>
//             <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
//               <Image src="/image/ev-mission.jpg" alt="EV Mission" fill className="object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Vision & Goals */}
//       <section className="py-16 px-6 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-12 text-center">Vision & Goals</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <div className="w-16 h-16 bg-[#2a9d8f]/20 rounded-full flex items-center justify-center mb-6">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-8 w-8 text-[#2a9d8f]"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold mb-4">Accelerate Adoption</h3>
//               <p className="text-gray-600">
//                 Drive the adoption of electric vehicles in Malaysia through education, awareness, and showcasing the
//                 latest innovations.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <div className="w-16 h-16 bg-[#2a9d8f]/20 rounded-full flex items-center justify-center mb-6">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-8 w-8 text-[#2a9d8f]"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold mb-4">Build Infrastructure</h3>
//               <p className="text-gray-600">
//                 Facilitate discussions and partnerships to develop robust charging infrastructure across Malaysia.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <div className="w-16 h-16 bg-[#2a9d8f]/20 rounded-full flex items-center justify-center mb-6">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-8 w-8 text-[#2a9d8f]"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold mb-4">Foster Collaboration</h3>
//               <p className="text-gray-600">
//                 Create opportunities for industry leaders, policymakers, and innovators to collaborate on advancing
//                 Malaysia's EV ecosystem.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Event Details */}
//       <section className="py-16 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="order-2 md:order-1">
//               <h2 className="text-3xl font-bold mb-6">Event Details</h2>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="w-12 h-12 bg-[#2a9d8f]/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-[#2a9d8f]"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Date</h3>
//                     <p className="text-gray-700">September 3-4, 2025</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="w-12 h-12 bg-[#2a9d8f]/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-[#2a9d8f]"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Location</h3>
//                     <p className="text-gray-700">Kuala Lumpur Convention Centre, Malaysia</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="w-12 h-12 bg-[#2a9d8f]/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-[#2a9d8f]"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">Duration</h3>
//                     <p className="text-gray-700">
//                       Two power-packed days of thought leadership, innovation showcases, and strategic networking
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-8">
//                 <Link
//                   href="/register"
//                   className="px-6 py-3 border border-black hover:bg-black hover:text-white transition"
//                 >
//                   Register Now
//                 </Link>
//               </div>
//             </div>
//             <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
//               <Image src="/image/ev-event.jpg" alt="EV Event" fill className="object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-6 bg-gradient-to-r from-[#1e6b87] to-[#2a9d8f] text-white">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of Malaysia's EV Revolution</h2>
//           <p className="text-xl mb-8 max-w-3xl mx-auto">
//             Join us from 3rd to 4th of September 2025 in Kuala Lumpur for two power-packed days of thought leadership,
//             innovation showcases, and strategic networking as we drive Malaysia toward its EV future.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Link
//               href="/register"
//               className="px-8 py-3 bg-white text-[#2a9d8f] font-medium hover:bg-gray-100 transition"
//             >
//               Register Now
//             </Link>
//             <Link
//               href="/contact"
//               className="px-8 py-3 border border-white text-white font-medium hover:bg-white hover:text-[#2a9d8f] transition"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
