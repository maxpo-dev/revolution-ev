"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const speakers = [
  {
    name: "H.E. Diego Pardow",
    role: "Minister of Energy",
    organization: "Government of Chile",
    image: "/image/speaker1.jpg",
  },
  {
    name: "H.E. Diego Pardow",
    role: "Minister of Energy",
    organization: "Government of Chile",
    image: "/image/speaker1.jpg",
  },
  {
    name: "H.E. Diego Pardow",
    role: "Minister of Energy",
    organization: "Government of Chile",
    image: "/image/speaker1.jpg",
  },
  {
    name: "H.E. Diego Pardow",
    role: "Minister of Energy",
    organization: "Government of Chile",
    image: "/image/speaker1.jpg",
  },
  {
    name: "H.E. Diego Pardow",
    role: "Minister of Energy",
    organization: "Government of Chile",
    image: "/image/speaker1.jpg",
  },
  {
    name: "H.E. Diego Pardow",
    role: "Minister of Energy",
    organization: "Government of Chile",
    image: "/image/speaker1.jpg",
  },
  {
    name: "H.E. Diego Pardow",
    role: "Minister of Energy",
    organization: "Government of Chile",
    image: "/image/speaker1.jpg",
  },
]

export default function SpeakersSection() {
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const visibleSpeakers = 5 // Number of speakers visible at once

  useEffect(() => {
    setMounted(true)
  }, [])

  const nextSlide = () => {
    if (currentIndex < speakers.length - visibleSpeakers) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  if (!mounted) return null

  return (
    <section className="bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="mb-12 text-5xl font-light leading-tight tracking-tight">
          <span
            className="relative inline-block text-transparent outline-text"
            style={{ WebkitTextStroke: "1px white" }}
          >
            Speakers at{" "}
          </span>
          <span className="font-bold text-[#00E1B0]">#REV25</span>
        </h2>

        {/* Carousel container */}
        <div className="relative">
          {/* Speakers carousel */}
          <div ref={carouselRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleSpeakers)}%)` }}
            >
              {speakers.map((speaker, idx) => (
                <div key={idx} className="flex-shrink-0 w-1/5 px-2">
                  <div className="bg-transparent">
                    {/* Image */}
                    <div className="overflow-hidden">
                      <img
                        src={speaker.image || "/placeholder.svg?height=200&width=200"}
                        alt={speaker.name}
                        className="h-auto w-full object-cover"
                      />
                    </div>

                    {/* Text content */}
                    <div className="mt-2 text-left">
                      <p className="text-white text-sm font-medium">{speaker.name}</p>
                      <p className="text-[#00E1B0] text-xs">{speaker.role}</p>
                      <p className="text-[#00E1B0] text-xs">{speaker.organization}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-6 space-x-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-sm disabled:opacity-50"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= speakers.length - visibleSpeakers}
              className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-sm disabled:opacity-50"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
