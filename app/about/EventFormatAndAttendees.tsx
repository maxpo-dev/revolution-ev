import Image from "next/image";
import Link from "next/link";

const eventFormats = [
  {
    title: "Conference",
    description:
      "The Conference will include Stimulating Panels, Captivating Keynote Addresses, and Fireside Discussions With Top Authorities On The Topic.",
    image: "/image/About/pexels-divinetechygirl-1181396.jpg",
  },
  {
    title: "Exhibitions",
    description:
      "Display Of Latest EV Models, Battery Technologies, Charging Solutions, And B2B Brand Charging Solutions.",
    image: "/image/About/expo.png",
  },
  {
    title: "Workshops",
    description:
      "Skill-Building, Future-Oriented Workshops Created To Enable E-Mobility Industry Experts.",
    image: "/image/About/pexels-rdne-7413915.jpg",
  },
  {
    title: "Networking Opportunities",
    description:
      "To Encourage Stronger Relationships, Networking Roundtables, Speed Networking, and 1:1 Networking Lounges.",
    image: "/image/About/Networking.jpg",
  },
];

const attendeeProfiles = [
  "Original Equipment Manufacturers",
  "Battery Tech Providers",
  "EV Charging Infrastructure Companies",
  "Automotive Components & Suppliers",
  "Fleet Operators & Logistics Companies",
  "Smart Mobility Startups",
  "Government & Government Agencies",
  "R&D Centers & Universities",
  "Policymakers, Urban Planners & Sustainability",
  "Financial Institutions & Insurance Providers",
  "Venture Capital & Investment Firms",
  "Renewable Energy Companies",
  "Legal Compliance & Intellectual Property Experts",
];

export default function EventFormatAndAttendees() {
  return (
    <section className="bg-white py-16 px-4 max-w-7xl mx-auto">
      {/* Logo */}
      {/* <div className="flex justify-center mb-10">
        <Image src="/logo.svg" alt="Event Logo" width={180} height={50} />
      </div> */}

      {/* Event Format Title */}
      <h2 className="text-4xl font-bold text-center text-black mb-10">
        Event <span className="text-sky-500">Format</span>
      </h2>

      {/* Event Format Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {eventFormats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition text-center"
          >
            <div className="relative w-full h-44">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg font-bold text-black">{item.title}</h3>
                <p className="text-sm text-gray-700 mt-2">{item.description}</p>
              </div>
            </div>
            <Link href="/register?t=delegate">
              <button className="w-full bg-black text-white py-2 text-sm font-semibold hover:bg-gray-800 transition">
                Get Delegate Pass
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Attendee Profile Title */}
      <h2 className="text-4xl font-bold text-center text-black mb-10">
        Attendee <span className="text-sky-500">Profile</span>
      </h2>

      {/* Attendee Profile Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-12">
        {attendeeProfiles.map((profile, idx) => (
          <div
            key={idx}
            className="border border-gray-300 rounded-md p-4 text-center text-sm font-medium text-black hover:shadow-md transition flex items-center justify-center gap-2"
          >
            {/* Placeholder Icon */}
            <span className="w-5 h-5 bg-gray-300 rounded-full inline-block" />
            {profile}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link href="/register?t=delegate">
          <button className="px-6 py-2 bg-black text-white text-sm font-medium border border-black rounded hover:bg-white hover:text-black transition">
            Get Your Ticket
          </button>
        </Link>
      </div>
    </section>
  );
}
