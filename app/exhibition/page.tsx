// import Image from "next/image"
// import Link from "next/link"

// export default function ExhibitionPage() {
//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-[#1e6b87] to-[#2a9d8f] text-white py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="max-w-3xl">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Exhibition</h1>
//             <p className="text-xl mb-8">
//               Showcase your latest EV innovations and solutions at Malaysia's premier electric vehicle event.
//             </p>
//             <Link
//               href="/register?t=exhibitor"
//               className="px-8 py-3 bg-white text-[#2a9d8f] font-medium hover:bg-gray-100 transition"
//             >
//               Become an Exhibitor
//             </Link>
//           </div>
//         </div>
//         <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-20">
//           <div className="w-full h-full bg-[url('/image/pattern-bg.png')] bg-repeat"></div>
//         </div>
//       </section>

//       {/* Why Exhibit Section */}
//       <section className="py-16 px-6">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-12 text-center">Why Exhibit at Revolution EV 2025?</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#2a9d8f]">
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
//               <h3 className="text-xl font-bold mb-4">Connect with Key Decision Makers</h3>
//               <p className="text-gray-600">
//                 Meet with government officials, industry leaders, fleet managers, and potential customers all in one
//                 place.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#2a9d8f]">
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
//                     d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold mb-4">Showcase Your Innovations</h3>
//               <p className="text-gray-600">
//                 Demonstrate your latest products, technologies, and solutions to a targeted audience of EV enthusiasts
//                 and industry professionals.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#2a9d8f]">
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
//                     d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold mb-4">Grow Your Business</h3>
//               <p className="text-gray-600">
//                 Generate leads, form partnerships, and position your brand as a leader in Malaysia's growing EV market.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Exhibition Categories */}
//       <section className="py-16 px-6 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-12 text-center">Exhibition Categories</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="relative rounded-lg overflow-hidden shadow-lg group">
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10"></div>
//               <Image
//                 src="/image/ev-vehicles.jpg"
//                 alt="Electric Vehicles"
//                 width={600}
//                 height={400}
//                 className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
//               />
//               <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
//                 <h3 className="text-2xl font-bold mb-2">Electric Vehicles</h3>
//                 <p className="mb-4">Cars, motorcycles, buses, trucks, and other electric mobility solutions</p>
//                 <Link href="/register?t=exhibitor" className="text-[#2a9d8f] hover:text-white transition">
//                   Learn More →
//                 </Link>
//               </div>
//             </div>
//             <div className="relative rounded-lg overflow-hidden shadow-lg group">
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10"></div>
//               <Image
//                 src="/image/ev-charging.jpg"
//                 alt="Charging Infrastructure"
//                 width={600}
//                 height={400}
//                 className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
//               />
//               <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
//                 <h3 className="text-2xl font-bold mb-2">Charging Infrastructure</h3>
//                 <p className="mb-4">Charging stations, battery swapping, and grid solutions</p>
//                 <Link href="/register?t=exhibitor" className="text-[#2a9d8f] hover:text-white transition">
//                   Learn More →
//                 </Link>
//               </div>
//             </div>
//             <div className="relative rounded-lg overflow-hidden shadow-lg group">
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10"></div>
//               <Image
//                 src="/image/ev-components.jpg"
//                 alt="Components & Technology"
//                 width={600}
//                 height={400}
//                 className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
//               />
//               <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
//                 <h3 className="text-2xl font-bold mb-2">Components & Technology</h3>
//                 <p className="mb-4">Batteries, motors, power electronics, and software solutions</p>
//                 <Link href="/register?t=exhibitor" className="text-[#2a9d8f] hover:text-white transition">
//                   Learn More →
//                 </Link>
//               </div>
//             </div>
//             <div className="relative rounded-lg overflow-hidden shadow-lg group">
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10"></div>
//               <Image
//                 src="/image/ev-services.jpg"
//                 alt="Services & Consulting"
//                 width={600}
//                 height={400}
//                 className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
//               />
//               <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
//                 <h3 className="text-2xl font-bold mb-2">Services & Consulting</h3>
//                 <p className="mb-4">Fleet management, financing, insurance, and consulting services</p>
//                 <Link href="/register?t=exhibitor" className="text-[#2a9d8f] hover:text-white transition">
//                   Learn More →
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Exhibitor Packages */}
//       <section className="py-16 px-6 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6 text-center">Exhibitor Packages</h2>
//           <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
//             Choose the package that best suits your exhibition needs and budget.
//           </p>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
//               <div className="p-6 bg-[#2a9d8f] text-white text-center">
//                 <h3 className="text-2xl font-bold">Standard</h3>
//                 <p className="text-lg mt-2">9 sqm (3m x 3m)</p>
//               </div>
//               <div className="p-6">
//                 <ul className="space-y-3">
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-[#2a9d8f] mr-2 flex-shrink-0"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span>Shell scheme booth</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-[#2a9d8f] mr-2 flex-shrink-0"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span>2 Exhibitor passes</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-[#2a9d8f] mr-2 flex-shrink-0"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span>Company listing in event directory</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-[#2a9d8f] mr-2 flex-shrink-0"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span>Basic furniture package</span>
//                   </li>
//                 </ul>
//                 <div className="mt-8 text-center">
//                   <Link
//                     href="/register?t=exhibitor"
//                     className="px-6 py-2 border border-[#2a9d8f] text-[#2a9d8f] hover:bg-[#2a9d8f] hover:text-white transition"
//                   >
//                     Book Now
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 transform scale-105">
//               <div className="p-6 bg-[#1e6b87] text-white text-center">
//                 <h3 className="text-2xl font-bold">Premium</h3>
//                 <p className="text-lg mt-2">18 sqm (6m x 3m)</p>
//               </div>
//               <div className="p-6">
//                 <ul className="space-y-3">
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-[#2a9d8f] mr-2 flex-shrink-0"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span>Shell scheme booth</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-[#2a9d8f] mr-2 flex-shrink-0"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span>4 Exhibitor passes</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-[#2a9d8f] mr-2 flex-shrink-0"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span>Featured listing in event directory</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-[#2a9d8f] mr-2 flex-shrink-0"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span>Enhanced furniture package</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-[#2a9d8f] mr-2 flex-shrink-0"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span>Logo on event website</span>
//                   </li>
//                 </ul>
//                 <div className="mt-8 text-center">
//                   <Link
//                     href="/register?t=exhibitor"
//                     className="px-6 py-2 bg-[#2a9d8f] text-white hover:bg-[#1e6b87] transition"
//                   >
//                     Book Now
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
//               <div className="p-6 bg-[#2a9d8f] text-white text-center">
//                 <h3 className="text-2xl font-bold">Custom</h3>
//                 <p className="text-lg mt-2">36+ sqm</p>
//               </div>
//               <div className="p-6">
//                 <ul className="space-y-3">
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-[#2a9d8f] mr-2 flex-shrink-0"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span>Raw space for custom build</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-[#2a9d8f] mr-2 flex-shrink-0"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span>8 Exhibitor passes</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-[#2a9d8f] mr-2 flex-shrink-0"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span>Premium listing in event directory</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-[#2a9d8f] mr-2 flex-shrink-0"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span>Speaking opportunity</span>
//                   </li>
//                 </ul>
//                 <div className="mt-8 text-center">
//                   <Link
//                     href="/register?t=exhibitor"
//                     className="px-6 py-2 border border-[#2a9d8f] text-[#2a9d8f] hover:bg-[#2a9d8f] hover:text-white transition"
//                   >
//                     Contact Us
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-6 bg-gradient-to-r from-[#1e6b87] to-[#2a9d8f] text-white">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Exhibition Space Today</h2>
//           <p className="text-xl mb-8 max-w-3xl mx-auto">
//             Spaces are limited and allocated on a first-come, first-served basis. Don't miss your chance to be part of
//             Malaysia's premier EV event.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Link
//               href="/register?t=exhibitor"
//               className="px-8 py-3 bg-white text-[#2a9d8f] font-medium hover:bg-gray-100 transition"
//             >
//               Book Your Space
//             </Link>
//             <Link
//               href="/contact"
//               className="px-8 py-3 border border-white text-white font-medium hover:bg-white hover:text-[#2a9d8f] transition"
//             >
//               Contact Sales Team
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
