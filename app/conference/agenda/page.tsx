"use client"
import Link from "next/link"
import { useState } from "react"

export default function Agenda() {
  type DayKey = 'day1' | 'day2'
  const [activeDay, setActiveDay] = useState<DayKey>('day1')

  const days: Record<DayKey, string[]> = {
    day1: ['Audi 1', '', '', '', ''],
    day2: ['Audi 1', 'Audi B', 'Audi C', 'Audi D', 'Audi E'],
  }

  return (
    <div className="bg-black text-white min-h-screen py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
        2025 Agenda
      </h1>

      {/* Tab Buttons */}
      <div className="flex space-x-4 mb-10">
        <button
          className={`px-6 py-2 rounded font-semibold transition-all ${
            activeDay === 'day1'
              ? 'bg-gradient-to-r from-green-400 to-teal-400 text-black'
              : 'border border-gray-600'
          }`}
          onClick={() => setActiveDay('day1')}
        >
          Day One 23 October 2025
        </button>
        <button
          className={`px-6 py-2 rounded font-semibold transition-all ${
            activeDay === 'day2'
              ? 'bg-gradient-to-r from-green-400 to-teal-400 text-black'
              : 'border border-gray-600'
          }`}
          onClick={() => setActiveDay('day2')}
        >
          Day Two 24 October 2025
        </button>
      </div>

      {/* Dynamic Day Label */}
      <h2 className="text-xl font-semibold mb-6">
        {activeDay === 'day1' ? 'Day 01 – 23 October 2025' : 'Day 02 – 24 October 2025'}
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
        {days[activeDay].map((title, index) => (
          <div
            key={index}
            className={`rounded-md h-64 flex items-center justify-center text-white text-lg font-medium ${
              index === 0
                ? 'bg-gradient-to-br from-green-400 to-teal-400'
                : 'bg-gradient-to-br from-green-50 via-white to-cyan-100 text-black'
            }`}
          >
            {title || 'TBA'}
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="flex justify-center">
        <Link href="/register?t=delegate">
          <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition rounded">
            Get Delegate Pass
          </button>
        </Link>
      </div>
    </div>
  )
}
