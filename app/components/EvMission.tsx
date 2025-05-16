// components/EvMissionCard.tsx

type MissionItem = {
  title: string;
  description: string;
  image: string;
};

const missionData: MissionItem[] = [
  {
    title: "Conference",
    description:
      "The conference at #REV25 brings together leading voices from across the government, industry verticals, academia  and more to help shape the e-mobility landscape within Malaysia and beyond. Participate in thought-provoking discussions on the infrastructure, innovation, investment, and policy that will propel the country's electric future",
    image: "/image/what-is-an-ev-scaled.jpg",
  },
  {
    title: "Exhibition",
    description:
      "Malaysia’s most prestigious e-mobility EV event, #REV25, serves as your entry point to South- East Asia's rapidly expanding electric vehicle industry, offering invaluable opportunities whether you're introducing a product, expanding your business, or boosting brand awareness.",
    image: "/image/what-is-an-ev-scaled.jpg",
  },
  {
    title: "Networking",
    description:
      "Connect directly with top EV leaders, tech innovators, and investors during Malaysia’s e-mobility transformation. Build strong business relationships, share ideas for the future, and open doors to strategic alliances. Expand your impact within the rapidly expanding EV industry to hasten your success.",
    image: "/image/what-is-an-ev-scaled.jpg",
  },
];

export default function EvMissionCard() {
  return (
    <section className="px-6 py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto space-y-10">
<div className="flex flex-col justify-between md:flex-row md:items-center md:space-x-8">
<h2 className="text-3xl font-semibold text-neutral-900 whitespace-nowrap">
  <span className="font-bold">Our</span>
  <span className="text-sky-600 font-bold"> EV–</span>
  olution <br />
  <span className="font-bold">Mission</span>
</h2>

  <p className="mt-4 md:mt-0 max-w-xl text-gray-700">
    At Revolution EV we are paving the way for a greener future while fueling tomorrow by bringing together all stakeholders to shape the future of e-mobility, create impactful solutions and build a lasting legacy for generations to come
  </p>
</div>

        {missionData.map((item, index) => {
          const isReversed = index === 1; // Middle card

          return (
            <div
              key={index}
              className={`border border-gray-300 rounded overflow-hidden flex flex-col md:flex-row ${
                isReversed ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-64 md:h-auto group overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-[30%] bg-sky-100 opacity-0 group-hover:opacity-80 translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out" />
              </div>

              {/* Text */}
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700">
  {item.description.split("#REV25").map((part, idx, arr) => (
    <span key={idx}>
      {part}
      {idx !== arr.length - 1 && (
        <span className="text-[#3D8CB5] font-semibold">#REV25</span>
      )}
    </span>
  ))}
</p>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
