// import Image from "next/image";
// import Link from "next/link";

// export default function SponsorPage() {
//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-[#1e6b87] to-[#2a9d8f] text-white py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="max-w-3xl">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Sponsorship Opportunities</h1>
//             <p className="text-xl mb-8">
//               Position your brand at the forefront of Malaysia's electric vehicle revolution and connect with key industry stakeholders.
//             </p>
//             <Link
//               href="/register?t=sponsor"
//               className="px-8 py-3 bg-white text-[#2a9d8f] font-medium hover:bg-gray-100 transition"
//             >
//               Become a Sponsor
//             </Link>
//           </div>
//         </div>
//         <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-20">
//           <div className="w-full h-full bg-[url('/image/pattern-bg.png')] bg-repeat"></div>
//         </div>
//       </section>

//       {/* Why Sponsor Section */}
//       <section className="py-16 px-6">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-12 text-center">Why Sponsor Revolution EV 2025?</h2>
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
//               <Image
//                 src="/image/sponsor-why.jpg" // Ensure this exists in public/image/
//                 alt="Why Sponsor"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <ul className="space-y-6 text-lg">
//               <li>✓ Boost your brand visibility among decision-makers and innovators.</li>
//               <li>✓ Network with key players in the EV and mobility sector.</li>
//               <li>✓ Showcase your commitment to sustainable transportation.</li>
//               <li>✓ Get featured in event promotions, digital campaigns, and media coverage.</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Sponsorship Tiers Section */}
//       <section className="bg-gray-50 py-16 px-6">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-12">Sponsorship Tiers</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Platinum",
//                 price: "$25,000",
//                 benefits: [
//                   "Main stage branding",
//                   "10 VIP passes",
//                   "Dedicated booth",
//                   "Logo on all media"
//                 ]
//               },
//               {
//                 title: "Gold",
//                 price: "$15,000",
//                 benefits: [
//                   "Prime booth location",
//                   "6 VIP passes",
//                   "Logo on digital media"
//                 ]
//               },
//               {
//                 title: "Silver",
//                 price: "$8,000",
//                 benefits: [
//                   "Standard booth",
//                   "4 VIP passes",
//                   "Logo on website"
//                 ]
//               }
//             ].map((tier) => (
//               <div key={tier.title} className="bg-white rounded-lg p-6 shadow-md text-left">
//                 <h3 className="text-2xl font-semibold mb-2">{tier.title}</h3>
//                 <p className="text-xl font-bold text-[#2a9d8f] mb-4">{tier.price}</p>
//                 <ul className="list-disc list-inside text-gray-700 space-y-2">
//                   {tier.benefits.map((benefit, idx) => (
//                     <li key={idx}>✓ {benefit}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
