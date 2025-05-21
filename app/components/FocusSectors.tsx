"use client"

type Sector = {
  title: string
  lines: string[]
  image: string
}

const sectors: Sector[] = [
  {
    title: "Electric Vehicles",
    lines: ["Electric", "Vehicles"],
    image: "/image/ElectricVechicle.jpeg"
  },
  {
    title: "Charging Infrastructure",
    lines: ["Charging", "Infrastructure"],
    image: "/image/Charging.jpeg"
  },
  {
    title: "Policy, Regulation & Incentives",
    lines: ["Policy, Regulation", "& Incentives"],
    image: "/image/Policy.jpeg"
  },
  {
    title: "Smart Mobility",
    lines: ["Smart", "Mobility"],
    image:"/image/close-up-electric-car-france.jpg"
  },
  {
    title: "Fleet Management & Commercial EVs",
    lines: ["Fleet Management", "& Commercial EVs"],
    image:"/image/fellet.jpeg"
  },
  {
    title: "Investment, Startups & Innovation",
    lines: ["Investment, Startups", "& Innovation"],
    image: "/image/diverse-employees-group-discussing-ways-speed-up-order-delivery.jpg"
  },
]

export default function FocusSectors() {
  return (
    <div className="px-6">
      {/* Heading outside black box */}
      <div className="mx-auto max-w-6xl mt-10 mb-6">
<h2 className="text-4xl text-black">
  <span className="font-bold">Focus</span>{" "}
  <span className="text-sky-500  font-bold">Sectors</span>
</h2>

      </div>

      {/* Black background section */}
      <section className="bg-black py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="relative cursor-pointer overflow-hidden w-full max-w-[500px] aspect-[1939/1106] bg-center bg-cover"
                style={{ backgroundImage: `url(${sector.image})` }}
              >
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00E1B0]" />
                {/* <div className="absolute inset-0 bg-[url('/image/fc2.jpg')] bg-center bg-no-repeat bg-cover" /> */}
  <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#02B4DE] to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20 text-white font-menda">
                  {sector.lines.map((line, i) => (
                    <div key={i} className="text-lg font-medium leading-tight">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
