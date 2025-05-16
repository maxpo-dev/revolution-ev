import Link from "next/link"
import { Mail, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description Column */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-bold">
                Revolution<span className="text-green-500">EV</span>
              </h2>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Malaysia Sustainable Mobility towards an Electric, Smart, and Green Future
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

          {/* Event Information Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Event Information</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-green-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  Conference
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  Exhibition
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  Exhibitors
                </Link>
              </li>
            </ul>
          </div>

          {/* Participants Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Participants</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-green-500">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  Exhibitors
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Registration Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Registration</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-green-500">
                  Register as Exhibitor
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  Delegate Pass
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  Request Brochure
                </Link>
              </li>
            </ul>
            <h3 className="text-sm font-semibold mt-6 mb-4">Media & Content</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-green-500">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
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
            <div className="mt-6">
              <p className="text-sm mb-2">Join Our Mailing List</p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-800 border-gray-700 text-white h-9 rounded-r-none focus-visible:ring-green-500"
                />
                <Button size="sm" className="bg-green-500 hover:bg-green-600 rounded-l-none h-9">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-12 space-x-4">
          <Link
            href="#"
            className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </Link>
          <Link
            href="#"
            className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>
          <Link
            href="#"
            className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </Link>
          <Link
            href="#"
            className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  )
}
