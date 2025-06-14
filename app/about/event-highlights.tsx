import Image from "next/image"
import Link from "next/link"

const highlights = [
  {
    title: (
      <>
        A <span className="text-sky-500 font-semibold">Two-Day Conference</span> With Leaders In E-Mobility From Around
        The World.
      </>
    ),
    image: "/image/About/pexels-divinetechygirl-1181396.jpg",
    align: "left",
  },
  {
    title: (
      <>
        <span className="text-sky-500 font-semibold">20+ Exhibitors</span> Showcasing The Latest Electric Vehicle..
        Innovations.
      </>
    ),
    image: "/image/About/expo.png",
    align: "right",
  },
  {
    title: (
      <>
        <span className="text-sky-500 font-semibold">The Policy Roundtable</span> With Representatives Of The
        Government.
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
]

export default function EventHighlights() {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Highlights of the <span className="text-sky-500">Event</span>
        </h2>
        <div className="space-y-8">
          {highlights.map((item, idx) => (
            <div key={idx} className="relative w-full aspect-[16/6] md:aspect-[20/6] overflow-hidden rounded-lg">
              {/* Background Image */}
              <Image
                src={item.image || "/placeholder.svg"}
                alt={`Highlight ${idx + 1}`}
                fill
                className="object-cover"
              />

              {/* Sky blue gradient overlay from bottom */}
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-sky-500/80 to-transparent z-10" />

              {/* Text Overlay */}
  <div
  className={`absolute top-[65%] bg-white text-black text-lg md:text-xl font-medium p-6 md:p-8 shadow-xl max-w-lg z-20 ${
    item.align === "left" ? "left-8" : "right-8 mb-10"
  }`}
>

                {item.title}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/register">
            <button className="px-8 py-3 bg-transparent text-white text-base font-medium border-2 border-white rounded hover:bg-white hover:text-black transition-colors">
              Enquire Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
