import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <>
      {/* Gradient Top Bar */}
      <div className="bg-gradient-to-r from-cyan-500 to-green-400 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left: Contact */}
          <div className="text-white">
            <p className="font-medium mb-1">Contact Us</p>
            <Link href="mailto:info@revolutionevmalaysia.com" className="text-white text-sm hover:underline">
              info@revolutionevmalaysia.com
            </Link>
          </div>

          {/* Right: Mailing List */}
          <div className="flex flex-col w-full md:w-auto">
            <p className="text-white font-medium mb-1">Join our Mailing list</p>
            <form className="flex w-full">
              <Input
                type="email"
                placeholder="Enter Your email address"
                className="bg-white text-black rounded-none h-9 text-sm w-64 border-none"
              />
              <Button
                type="submit"
                className="bg-[#00c2de] text-white rounded-none h-9 text-sm px-4 hover:bg-[#00a8c0]"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Column 1 - Logo and Info */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <Image
                  src="/image/logo2.png"
                  alt="Revolution EV Logo"
                  width={160}
                  height={60}
                  className="object-contain h-auto w-auto"
                />
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Malaysia's Sustainable Move towards an Electric, Smart, and Green Future
              </p>
              <div className="mt-4">
                <p className="text-xs text-gray-400 mb-2">Organized By</p>
                <div className="flex items-center">
                   <Image
    src="/image/Layer 1.png" // Replace with your actual logo path
    alt="MAXPO Logo"
    width={100}
    height={40}
    className="object-contain "
  />
                </div>
              </div>
            </div>

            {/* Column 2 - Event Information */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Event Information</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-[#00E1B0]">About</Link></li>
                <li><Link href="#" className="hover:text-[#00E1B0]">Conference</Link></li>
                <li><Link href="#" className="hover:text-[#00E1B0]">Speakers</Link></li>
                <li><Link href="#" className="hover:text-[#00E1B0]">Exhibition</Link></li>
                <li><Link href="#" className="hover:text-[#00E1B0]">Exhibitors</Link></li>
              </ul>
            </div>

            {/* Column 3 - Participants */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Participants</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-[#00E1B0]">Speakers</Link></li>
                <li><Link href="#" className="hover:text-[#00E1B0]">Exhibitors</Link></li>
                <li><Link href="#" className="hover:text-[#00E1B0]">Exhibition</Link></li>
              </ul>
            </div>

            {/* Column 4 - Registration */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Registration</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-[#00E1B0]">Register as Exhibitor</Link></li>
                <li><Link href="#" className="hover:text-[#00E1B0]">Delegate Pass</Link></li>
                <li><Link href="#" className="hover:text-[#00E1B0]">Request Brochure</Link></li>
              </ul>
            </div>

            {/* Column 5 - Media & Contact */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Media & Content</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-[#00E1B0]">Blogs</Link></li>
              </ul>

              <h3 className="text-sm font-semibold mt-6 mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="mailto:info@revolutionevmalaysia.com" className="hover:text-[#00E1B0]">
                    info@revolutionevmalaysia.com
                  </Link>
                </li>
                <li>7780985893</li>
                <li className="flex space-x-3 mt-4">
                  {/* Replace href="#" with actual links */}
                  <Link href="#" className="bg-gray-800 p-1.5 rounded-sm hover:bg-gray-700">{/* Twitter Icon */}</Link>
                  <Link href="#" className="bg-gray-800 p-1.5 rounded-sm hover:bg-gray-700">{/* Instagram Icon */}</Link>
                  <Link href="#" className="bg-gray-800 p-1.5 rounded-sm hover:bg-gray-700">{/* LinkedIn Icon */}</Link>
                  <Link href="#" className="bg-gray-800 p-1.5 rounded-sm hover:bg-gray-700">{/* WhatsApp Icon */}</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-6 text-center">
            <div className="text-sm text-gray-500">
              <Link href="#" className="hover:text-[#00E1B0]">Terms and Conditions</Link>{" "}
              |{" "}
              <Link href="#" className="hover:text-[#00E1B0]">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
