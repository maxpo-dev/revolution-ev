"use client"

import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden bg-black">
      {/* 🔧 Fullscreen Background Image */}
      <Image
        src="/image/what-is-an-ev-scaled.jpg" // ✅ Path must be correct (in /public/image/)
        alt="Background EV"
        fill
        priority
        className="object-cover opacity-70"
      />

      {/* ✅ Content over image */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center text-white">
        <h1 className="mb-4 font-menda text-6xl font-bold tracking-wider">REVOLUTION EV</h1>
        <h2 className="mb-8 font-menda text-6xl font-bold tracking-wider">MALAYSIA</h2>

        <p className="mb-12 font-menda text-2xl font-light italic leading-tight tracking-wide">
          Malaysia's Sustainable Move towards an Electric,
          <br />
          Smart, and Green Future
        </p>

        {/* Buttons */}
<div className="mb-16 flex flex-wrap justify-center gap-6">
 <Link
  href="/agenda"
  className="min-w-[220px] border border-white bg-transparent px-6 py-1 text-sm font-normal font-menda tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black flex items-center justify-center"
>
  VIEW AGENDA
</Link>

  <Link
    href="/sponsorships"
    className="min-w-[220px] border border-white bg-white px-6 py-1 text-sm font-normal font-menda tracking-wider text-black transition-all duration-300 hover:-translate-y-1 hover:bg-sky-200"
  >
    SPONSORSHIPS
    <br />
    OPPORTUNITIES
  </Link>
</div>


        {/* Event details */}
        <div className="mx-auto flex max-w-max flex-wrap justify-center gap-16 text-lg font-menda">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-[#00E1B0]">When:</p>
            <p>September 3-4, 2025</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-[#00E1B0]">Where:</p>
            <p>Kuala Lumpur, Malaysia</p>
          </div>
        </div>
      </div>
    </section>
  )
}
