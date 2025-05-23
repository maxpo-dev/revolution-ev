import Image from "next/image";

const highlights = [
  {
    title: (
      <>
        A <span className="text-sky-500 font-semibold">Two-Day Conference</span> With Leaders In
        E-Mobility From Around The World.
      </>
    ),
    image: "/image/About/pexels-divinetechygirl-1181396.jpg",
    align: "left",
  },
  {
    title: (
      <>
        <span className="text-sky-500 font-semibold">20+ Exhibitors</span> Showcasing The Latest
        Electric Vehicle Innovations.
      </>
    ),
    image: "/image/About/expo.png",
    align: "right",
  },
  {
    title: (
      <>
        <span className="text-sky-500 font-semibold">The Policy Roundtable</span> With Representatives
        Of The Government.
      </>
    ),
    image: "/image/About/pexels-fauxels-3183197.jpg",
    align: "left",
  },
  {
    title: (
      <>
        <span className="text-sky-500 font-semibold">Product Demos</span> and{" "}
        <span className="text-sky-500 font-semibold">Startup Pitching</span> In Real Time
      </>
    ),
    image: "/image/About/12354.jpg",
    align: "right",
  },
];

export default function EventHighlights() {
  return (
    <section className="bg-black py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 max-w-7xl mx-auto">
        Highlights of the <span className="text-sky-500">Event</span>
      </h2>
      <div className="space-y-8 max-w-7xl mx-auto">
        {highlights.map((item, idx) => (
          <div key={idx} className="relative w-full aspect-[4/1] overflow-hidden rounded-lg">
            {/* Background Image */}
            <Image
              src={item.image}
              alt={`Highlight ${idx + 1}`}
              fill
              className="object-cover"
            />

            {/* Sky blue gradient overlay from bottom to 30% height */}
            <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-sky-500 to-transparent z-10" />

            {/* Text Overlay */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 bg-white text-black text-sm md:text-base p-4 md:p-6 shadow-lg max-w-md z-20 ${
                item.align === "left" ? "left-6 mt-26" : "right-6 mt-26"
              }`}
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
