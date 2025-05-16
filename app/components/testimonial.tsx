"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Testimonial data type
type Testimonial = {
  id: number
  name: string
  title: string
  quote: string
  image: string
}

// Sample testimonial data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Micheal Bennett",
    title: "Minister of Energy",
    quote:
      "Innovation is about rethinking curiosity and combining it with a passion to produce impact, hopefully in the form of positive social benefit. Sessions that emphasize these qualities can add value by giving participants a broader perspective and a desire to become involved in industry to learn more.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Chief Sustainability Officer",
    quote:
      "The transition to electric vehicles represents one of the most significant shifts in transportation history. By embracing this change, Malaysia is positioning itself at the forefront of sustainable mobility solutions that will benefit generations to come.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "David Wong",
    title: "EV Industry Analyst",
    quote:
      "What makes the Revolution EV Malaysia event so valuable is the convergence of policy makers, industry leaders, and innovators all working toward a common goal. The collaborative atmosphere creates opportunities for partnerships that can accelerate our progress.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)

  const goToPrevious = () => {
    if (isAnimating) return
    setDirection("left")
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    if (isAnimating) return
    setDirection("right")
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
        setDirection(null)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  return (
    <div className="relative w-full bg-black py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex items-center transition-transform duration-500 ease-in-out ${
            isAnimating
              ? direction === "right"
                ? "transform -translate-x-[100px] opacity-0"
                : "transform translate-x-[100px] opacity-0"
              : "transform translate-x-0 opacity-100"
          }`}
        >
          {/* Left quote mark */}
          <div className="hidden md:block">
            <svg width="150" height="120" viewBox="0 0 150 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 0H60C93.1371 0 120 26.8629 120 60V120H60C26.8629 120 0 93.1371 0 60V0Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="60" x2="120" y2="60" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#20C6D8" />
                  <stop offset="1" stopColor="#4CAF50" />
                </linearGradient>
              </defs>
            </svg>
          </div>

<div className="flex flex-col items-center text-center gap-6 px-4 md:px-8">
  {/* Image */}
  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white">
    <Image
      src={testimonials[currentIndex].image || "/placeholder.svg"}
      alt={testimonials[currentIndex].name}
      fill
      className="object-cover"
    />
  </div>

  {/* Content */}
  <div className="max-w-2xl">
    <p className="text-white text-base md:text-lg leading-relaxed mb-6">{testimonials[currentIndex].quote}</p>
    <h3 className="text-white text-xl md:text-2xl font-bold">{testimonials[currentIndex].name}</h3>
    <p className="text-gray-400 text-sm md:text-base">{testimonials[currentIndex].title}</p>
  </div>
</div>


          {/* Right quote mark */}
          <div className="hidden md:block">
            <svg width="150" height="120" viewBox="0 0 150 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M150 0H90C56.8629 0 30 26.8629 30 60V120H90C123.137 120 150 93.1371 150 60V0Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient id="paint0_linear" x1="150" y1="60" x2="30" y2="60" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#20C6D8" />
                  <stop offset="1" stopColor="#4CAF50" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={goToPrevious}
            className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isAnimating) return
                setDirection(index > currentIndex ? "right" : "left")
                setIsAnimating(true)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-600"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
