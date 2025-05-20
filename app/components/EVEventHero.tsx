"use client"

import { useEffect, useState } from "react"
import CountUp from "react-countup"

// Define the stats data
const statsData = [
  { count: 80, label: "Speakers", suffix: "+", color: "bg-cyan-400" },
  { count: 400, label: "Delegates", suffix: "", color: "bg-sky-500" },
  { count: 20, label: "Sponsors & Exhibitors", suffix: "+", color: "bg-cyan-400" },
  { count: 3000, label: "Attendees", suffix: "", color: "bg-sky-500" },
  { count: 20, label: "Partners", suffix: "+", color: "bg-cyan-400" },
]

function StatCard({ count, label, suffix = "", color = "bg-cyan-400" }) {
  return (
    <div
      className={`${color} text-black px-6 py-4 flex items-center justify-between min-w-[250px] rounded-md shadow-md`}
    >
      <div className="flex items-baseline gap-2">
        <h3 className="text-3xl font-extrabold">
          <CountUp end={count} duration={2.5} />
          {suffix}
        </h3>
        <p className="text-sm font-medium">{label}</p>
      </div>
      <div className="text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"
          />
        </svg>
      </div>
    </div>
  )
}

export default function EVEventHero() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    // Set up a timer to cycle through the stats
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % statsData.length)
    }, 4000) // Change every 4 seconds for slower transitions

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="px-6 py-12 md:py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to <span className="text-cyan-400">Malaysia's</span> Flagship EV Event | Revolution{" "}
            <span className="text-sky-400">EV 2025</span>
          </h1>
          <p className="text-gray-700 mb-6">
            Revolution EV Malaysia 2025 is Malaysia's flagship EV event dedicated to advancing electric mobility,
            featuring unrivaled electric vehicles and next-generation zero-emission vehicle innovations.{" "}
            <span className="text-sky-400">#rev25</span>, is designed to bring people together, encourage new ideas,
            growth, and further cooperation within Malaysia's emerging e-mobility industry. The event will bring
            together policymakers, investors, innovators, industry pioneers, and government leaders to propel the
            advancements of electric mobility across Malaysia and beyond. <br />
            <br />
            <b>
              Join us from 23rd to 24th of October 2025 in Kuala Lumpur for two power-packed days of thought leadership,
              innovation showcases, and strategic networking as we drive Malaysia toward its EV future.
            </b>
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-2 border border-black hover:bg-black hover:text-white transition">
              KNOW MORE
            </button>
            <button className="px-6 py-2 border border-black hover:bg-black hover:text-white transition">
              EXHIBIT
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full h-auto rounded-lg overflow-hidden shadow-lg">
          <img src="/image/welcome1.jpg" alt="Electric Vehicle" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto mt-20 overflow-hidden">
        {/* Full Card Slider */}
        <div className="relative h-[100px] border border-gray-300 rounded">
          {statsData.map((stat, index) => (
            <div
              key={stat.label}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out flex w-full ${
                index === activeIndex
                  ? "opacity-100 translate-x-0"
                  : index < activeIndex || (activeIndex === 0 && index === statsData.length - 1)
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
              }`}
            >
              {/* Left Side: Heading */}
              <div className="bg-white p-6 flex items-center justify-start flex-grow">
                <h2 className="max-w-xl text-xl md:text-2xl font-semibold">
                  Expected <span className="ml-2 font-bold">Numbers</span>
                </h2>
              </div>

              {/* Right Side: Stat Card */}
              <div className="w-[400px] flex-shrink-0 h-[200px] md:h-[240px] lg:h-[280px] mt-3">

                <StatCard count={stat.count} label={stat.label} suffix={stat.suffix} color={stat.color} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
