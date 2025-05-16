"use client"

import { useEffect, useState } from "react"

const speakers = [
  {
    name: "H.E. Diego Pardow",
    role: "Minister of Energy",
    organization: "Government of Chile",
    image: "/image/what-is-an-ev-scaled.jpg",
  },
  {
    name: "H.E. Diego Pardow",
    role: "Minister of Energy",
    organization: "Government of Chile",
    image: "/image/what-is-an-ev-scaled.jpg",
  },
  {
    name: "H.E. Diego Pardow",
    role: "Minister of Energy",
    organization: "Government of Chile",
    image: "/image/what-is-an-ev-scaled.jpg",
  },
  {
    name: "H.E. Diego Pardow",
    role: "Minister of Energy",
    organization: "Government of Chile",
    image: "/image/what-is-an-ev-scaled.jpg",
  },
  {
    name: "H.E. Diego Pardow",
    role: "Minister of Energy",
    organization: "Government of Chile",
    image: "/image/what-is-an-ev-scaled.jpg",
  },
]

export default function SpeakersSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="bg-black px-6 py-16 font-dm text-white">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="mb-12 font-dm text-5xl font-light leading-tight tracking-tight text-white">
          <span className="relative inline-block">
            <span
              className="relative z-10 text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              Speakers at{" "}
            </span>
          </span>
          <span className="font-bold text-[#20C6D8]">#REV25</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {speakers.map((speaker, idx) => (
            <div
              key={idx}
              className="bg-white p-2 rounded shadow-md group transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image with hover overlay */}
              <div className="relative overflow-hidden rounded">
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="h-auto w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 h-[30%] w-full translate-y-full bg-[#20C6D8] opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-90" />
              </div>

              {/* Text content */}
              <div className="mt-4 text-center text-black">
                <p className="font-semibold">{speaker.name}</p>
                <p className="text-sm text-[#20A4B8]">{speaker.role}</p>
                <p className="text-sm text-[#20C6D8]">{speaker.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
