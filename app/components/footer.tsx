import Link from "next/link"
import { Mail, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <>
      {/* Gradient Top Bar */}
      <div className="bg-gradient-to-r from-cyan-500 to-green-400 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left: Contact */}
          <div className="text-white text-sm font-medium">
            <Link
              href="mailto:info@revolutionevmalaysia.com"
              className="underline text-sm font-normal"
            >
              info@revolutionevmalaysia.com
            </Link>
          </div>

          {/* Right: Mailing List */}
          <div className="flex flex-col items-start md:items-end">
            <form className="flex">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white text-black rounded-none rounded-l-md h-9 text-sm w-64"
              />
              <Button
                type="submit"
                className="bg-black text-white rounded-none rounded-r-md h-9 text-sm"
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
            {/* Column 1 */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <h2 className="text-xl font-bold">
                  Revolution<span className="text-green-500">EV</span>
                </h2>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Malaysia's Sustainable Move towards an Electric, Smart, and Green Future
              </p>
              <div className="mt-4">
                <p className="text-xs text-gray-400 mb-2">Organized by</p>
                <div className="flex items-center">
                  <span className="font-bold mr-1">MA</span>
                  <span className="text-green-500 font-bold">X</span>
                  <span className="font-bold ml-1">PO</span>
                </div>
              </div>
            </div>

            {/* Columns 2-4 */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Event Information</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-green-500">About</Link></li>
                <li><Link href="#" className="hover:text-green-500">Conference</Link></li>
                <li><Link href="#" className="hover:text-green-500">Speakers</Link></li>
                <li><Link href="#" className="hover:text-green-500">Exhibition</Link></li>
                <li><Link href="#" className="hover:text-green-500">Exhibitors</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4">Participants</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-green-500">Speakers</Link></li>
                <li><Link href="#" className="hover:text-green-500">Exhibitors</Link></li>
                <li><Link href="#" className="hover:text-green-500">Location</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4">Registration</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-green-500">Register as Exhibitor</Link></li>
                <li><Link href="#" className="hover:text-green-500">Delegate Pass</Link></li>
                <li><Link href="#" className="hover:text-green-500">Request Brochure</Link></li>
              </ul>
              <h3 className="text-sm font-semibold mt-6 mb-4">Media & Content</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-green-500">Blogs</Link></li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>+6012345678</li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-1" />
                  <Link href="mailto:info@revolutionevmalaysia.com" className="hover:text-green-500">
                    info@revolutionevmalaysia.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center mt-12 space-x-4">
<p>© {new Date().getFullYear()} RevolutionEV Malaysia. All rights reserved.</p>
            {/* <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white">Facebook</Link>
              <Link href="#" className="hover:text-white">Twitter</Link>
              <Link href="#" className="hover:text-white">LinkedIn</Link>
            </div> */}
          </div>

          {/* Bottom Text */}
          <div className="mt-8 text-center text-sm text-gray-500">
            Terms and Conditions | Privacy Policy
          </div>
        </div>
      </footer>
    </>
  )
}
