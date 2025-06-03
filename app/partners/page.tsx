import type { Metadata } from "next"
import PartnersHero from "@/app/partners/partners-hero"
import PartnersList from "@/app/partners/partners-list"

export const metadata: Metadata = {
  title: "Our Partners | Revolution EV",
  description: "Meet the organizations partnering with us to drive the electric vehicle revolution",
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PartnersHero />
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Valued Partners</h2>
            <p className="text-gray-600">
              We're proud to collaborate with leading organizations committed to accelerating the transition to
              sustainable transportation. Our partners play a crucial role in driving innovation, research, and adoption
              of electric vehicles.
            </p>
          </div>

          <PartnersList />

          <div className="mt-12 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Partnership Opportunities</h2>
            <p className="text-gray-600 mb-6">
              Interested in partnering with Revolution EV? We offer various partnership opportunities tailored to
              different organizations and goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg border-t-4 border-[#30A685]">
                <h3 className="font-medium text-lg mb-2">Technology Partners</h3>
                <p className="text-gray-600 mb-4">Collaborate on innovative EV technologies and solutions.</p>
                <a href="/sponsors" className="text-[#30A685] font-medium hover:underline">
                  Learn more →
                </a>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border-t-4 border-[#30A685]">
                <h3 className="font-medium text-lg mb-2">Research Partners</h3>
                <p className="text-gray-600 mb-4">Join our research initiatives to advance EV technology.</p>
                <a href="/sponsors" className="text-[#30A685] font-medium hover:underline">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
