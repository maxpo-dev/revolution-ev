"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-black px-6 py-4">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-light font-menda text-white">Revolution</span>
          <span className="text-2xl font-bold font-menda text-[#00E1B0]">EV</span>
        </Link>
      </div>

      <div className="hidden space-x-8 md:flex font-menda">
        <Link href="/" className="text-[#00E1B0] hover:text-gray-300 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>
        <Link href="/about" className="text-white hover:text-gray-300 transition">
          About
        </Link>
        <Link href="/exhibition" className="text-white hover:text-gray-300 transition">
          Exhibition
        </Link>
        <Link href="/conference" className="text-white hover:text-gray-300 transition">
          Conference
        </Link>
        <Link href="/sponsor" className="text-white hover:text-gray-300 transition">
          Sponsor
        </Link>
        <Link href="/partners" className="text-white hover:text-gray-300 transition">
          Partners
        </Link>
        <Link href="/more" className="text-white hover:text-gray-300 transition">
          More
        </Link>
      </div>

<button
  className="
    relative z-10 bg-[#333333] text-white px-6 py-2 font-menda rounded 
    transition-all duration-700 ease-out
    before:absolute before:inset-0 before:rounded before:-z-10 
    before:transition-all before:duration-700 before:opacity-0
    hover:before:opacity-100 hover:before:shadow-[0_0_40px_10px_rgba(32,198,216,0.6)]
  "
>
  GET DELEGATE PASS
</button>



    </nav>
  )
}
