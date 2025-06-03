"use client"

import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden bg-black">
      <Image src="/image/Hero.jpeg" alt="Background EV" fill priority className="object-cover opacity-60" />

      {/* Black gradient overlay from bottom to buttons area only */}
      <div
        className="absolute inset-x-0 bottom-0 z-[1] h-[30%] bg-gradient-to-t from-black to-transparent"
        style={{ backdropFilter: "blur(1px)" }}
      />

      {/* Content over image */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 text-center text-white">
        <h1
          className="font-['Menda'] text-white tracking-[0.05em] font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[85.68px]"
          style={{ lineHeight: "1", letterSpacing: "0.03em" }}
        >
          REVOLUTION EV
        </h1>

        <h2
          className="font-['Menda'] text-white tracking-[0.1em] font-semibold mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-[85.68px]"
          style={{ lineHeight: "1", letterSpacing: "0.1em" }}
        >
          MALAYSIA
        </h2>

        <p
          className="mb-8 md:mb-12 font-menda text-lg sm:text-xl md:text-2xl font-bold italic leading-tight tracking-wide"
          style={{ letterSpacing: "0.1em", maxWidth: "100%" }}
        >
          Malaysia's Sustainable Move Towards an Electric,
          <br className="hidden sm:block" />
          Smart, and Green Future
        </p>

        {/* Buttons */}
        <div className="mb-8 md:mb-16 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link
            href="/conference/agenda"
            className="min-w-[200px] border border-white bg-transparent px-6 py-3 text-sm font-normal font-menda tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center"
          >
            View Agenda
          </Link>

          <Link
            href="/register?t=sponsor"
            className="min-w-[200px] bg-white px-6 py-3 text-sm font-bold font-menda tracking-wider text-black transition-all duration-300 hover:bg-[#0DB6C9] hover:text-white"
          >
            Sponsor
          </Link>
        </div>

        {/* Event details */}
        <div className="mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-20 font-menda text-white mt-8 md:mt-16 text-base sm:text-lg md:text-xl lg:text-2xl">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-[#4DC656]">When:</p>
            <p>October 23–24, 2025</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-[#4DC656]">Where:</p>
            <p>WTC, KL, Malaysia</p>
          </div>
        </div>
      </div>
    </section>
  )
}
