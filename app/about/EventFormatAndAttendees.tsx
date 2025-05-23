import Image from "next/image";

const eventFormats = [
  {
    title: "Conference",
    description:
      "The conference will include stimulating panels, captivating keynote addresses, and fresh discussions by top authorities of the field.",
    image: "/image/format1.jpg",
  },
  {
    title: "Exhibitions",
    description:
      "Display of latest EV models, battery technologies, charging solutions, and B2B brand showcase setups.",
    image: "/image/format2.jpg",
  },
  {
    title: "Workshops",
    description:
      "Skill-building, future-oriented workshops tailored to specific e-mobility industry experts.",
    image: "/image/format3.jpg",
  },
  {
    title: "Networking Opportunities",
    description:
      "Encouraging idea exchange, knowledge interaction, and B2B matchmaking opportunities.",
    image: "/image/format4.jpg",
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
    <section className="bg-white py-12 px-4 max-w-7xl mx-auto">
      {/* Event Format Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
        Event <span className="text-sky-500">Format</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {eventFormats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col h-full border border-gray-200 shadow-sm overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full h-40">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content Block */}
            <div className="bg-gradient-to-t from-sky-900 via-sky-600 to-sky-500 text-white p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm mt-2">{item.description}</p>
            </div>

            {/* Button */}
            <button className="w-full bg-black text-white py-2 text-sm font-semibold hover:bg-gray-800 transition mt-4">
              Get Delegate Pass
            </button>
          </div>
        ))}
      </div>

      {/* Attendee Profile Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
        Attendee <span className="text-sky-500">Profile</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
        {attendeeProfiles.map((profile, idx) => (
          <div
            key={idx}
            className="border border-gray-300 p-4 text-sm text-center hover:shadow-md transition"
          >
            {profile}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <button className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition">
          Get Your Ticket
        </button>
      </div>
    </section>
  );
}
