import Image from "next/image";
import { Button } from "@/components/ui/button";
import car from "@/public/image/exhibit/car.png";
import Link from "next/link";

export default function ShowcaseConnectLead() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Three Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Showcase */}
          <div className="space-y-4">
            <div className="relative">
              <Image
                src={car}
                alt="White Electric Vehicle"
                width={300}
                height={200}
                className="w-full rounded-lg"
              />
            </div>
            <div className="text-white p-6 rounded-lg" style={{ backgroundColor: "#0DB6C9" }}>
              <h3 className="text-xl font-bold mb-3">Showcase:</h3>
              <p className="text-sm leading-relaxed">
                At <span className="text-black font-semibold">#rev25</span>, bring your ideas to life by showcasing the latest EV models,
                sustainable charging solutions, and technologies from across the industry vertical.
              </p>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <div className="relative">
              <Image
                src={car}
                alt="White Electric Vehicle"
                width={300}
                height={200}
                className="w-full rounded-lg"
              />
            </div>
            <div className="text-white p-6 rounded-lg" style={{ backgroundColor: "#0DB6C9" }}>
              <h3 className="text-xl font-bold mb-3">Connect:</h3>
              <p className="text-sm leading-relaxed">
                <span className="text-black font-semibold">#rev25</span> is your platform to connect with investors, tech innovators,
                manufacturers, suppliers, policymakers, and decision makers within Malaysia and beyond.
              </p>
            </div>
          </div>

          {/* Lead */}
          <div className="space-y-4">
            <div className="relative">
              <Image
                src={car}
                alt="White Electric Vehicle"
                width={300}
                height={200}
                className="w-full rounded-lg"
              />
            </div>
            <div className="text-white p-6 rounded-lg" style={{ backgroundColor: "#0DB6C9" }}>
              <h3 className="text-xl font-bold mb-3">Lead:</h3>
              <p className="text-sm leading-relaxed">
                Make your brand the star of the event at <span className="text-black font-semibold">#rev25</span> by proudly showcasing
                your commitment towards green mobility solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Text and Buttons */}
        <div className="text-center space-y-6">
          <p className="text-gray-800 text-lg max-w-4xl mx-auto leading-relaxed">
            Revolution EV Malaysia 2025 is your gateway to Southeast Asia's most dynamic and fast-evolving EV market.
            Whether launching new technology, entering the Malaysian market, or building strategic alliances — your
            brand belongs here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register?t=exhibitor">
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">Book Your Stand</Button>
            </Link>
            <Link href="/register?t=sponsor">
                        <Button variant="outline" className="border-black text-black hover:bg-gray-50 px-8 py-3">
              Enquire For Sponsorships
            </Button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
