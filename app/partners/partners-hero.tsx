import { Button } from "@/components/ui/button"

export default function PartnersHero() {
  return (
    <div className="relative bg-[#30A685] text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Partners</h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Meet the organizations working with Revolution EV to accelerate the transition to sustainable transportation
            and build a cleaner future.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-white text-[#30A685] hover:bg-gray-100">Become a Partner</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  )
}
