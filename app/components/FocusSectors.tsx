"use client"

import Image from "next/image"

type Sector = {
  title: string
  lines: string[]
  image: string
}

const sectors: Sector[] = [
  {
    title: "Electric Vehicles",
    lines: ["Electric", "Vehicles"],
    image: "/image/what-is-an-ev-scaled.jpg",
  },
  {
    title: "Charging Infrastructure",
    lines: ["Charging", "Infrastructure"],
    image: "/image/what-is-an-ev-scaled.jpg",
  },
  {
    title: "Policy, Regulation & Incentives",
    lines: ["Policy, Regulation", "& Incentives"],
    image: "/image/what-is-an-ev-scaled.jpg",
  },
  {
    title: "Smart Mobility",
    lines: ["Smart", "Mobility"],
    image: "/image/what-is-an-ev-scaled.jpg",
  },
  {
    title: "Fleet Management & Commercial EVs",
    lines: ["Fleet Management", "& Commercial EVs"],
    image: "/image/what-is-an-ev-scaled.jpg",
  },
  {
    title: "Investment, Startups & Innovation",
    lines: ["Investment, Startups", "& Innovation"],
    image: "/image/what-is-an-ev-scaled.jpg",
  },
]

export default function FocusSectors() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-4xl font-menda">
          <span className="font-light">Focus</span> <span className="font-bold">Sectors</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {sectors.map((sector, index) => (
<div
  key={index}
  className="group relative cursor-pointer overflow-hidden rounded border border-transparent transition-all duration-300"
>
  {/* Bottom Border Glow on Hover (Deeper and Brighter) */}
  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-[#00aab3] group-hover:shadow-[0_0_40px_12px_#00aab3] transition-all duration-500" />

  {/* Deeper Inner Glow from Bottom */}
  <div className="absolute bottom-0 left-0 w-full h-[10%] bg-[#00aab3] opacity-0 group-hover:opacity-60 blur-3xl transition-opacity duration-500 pointer-events-none z-10" />

  {/* Background Image */}
  <div className="relative z-0 h-64 w-full bg-[#001A2C]">
<div className="relative z-0 h-64 w-full bg-[#001A2C]">
  <Image
    src={sector.image}
    alt={sector.title}
    fill
    className="object-cover opacity-70"
  />
</div>
  </div>

  {/* Title */}
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
  )
}