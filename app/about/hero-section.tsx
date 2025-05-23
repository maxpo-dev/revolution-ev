import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="text-center">
          <span className="text-sm font-medium text-teal-500">Event Announcement</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-teal-400 to-teal-600 text-transparent bg-clip-text">
            Welcome to Revolution
            <br />
            EV Malaysia 2025
          </h1>
        </div>

        <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="EV Malaysia 2025"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-4 text-sm text-gray-600">
          <p>
            The Revolution EV Malaysia 2025 is set to be the premier electric vehicle event in Southeast Asia. Join
            industry leaders, policymakers, innovators, and enthusiasts as we explore the future of sustainable
            transportation in Malaysia and beyond. This landmark event will showcase the latest advancements in electric
            vehicle technology, infrastructure development, and policy frameworks.
          </p>

          <p>
            The Malaysian government has set ambitious targets to accelerate EV adoption as part of its commitment to
            reduce carbon emissions and promote sustainable mobility. Revolution EV Malaysia 2025 will serve as a
            platform to highlight these initiatives and foster collaboration between public and private sectors.
          </p>

          <p>
            From cutting-edge battery technology to innovative charging solutions, from policy incentives to investment
            opportunities, this event will cover all aspects of the EV ecosystem. Attendees will have the opportunity to
            network with key stakeholders, participate in insightful panel discussions, and experience firsthand the
            latest electric vehicles and related technologies.
          </p>

          <p>
            Join us in shaping the future of mobility in Malaysia. Together, we can drive the revolution towards a
            cleaner, more sustainable transportation system.
          </p>

          <div className="pt-4">
            <a
              href="#register"
              className="inline-block bg-teal-500 text-white px-6 py-3 rounded-md font-medium hover:bg-teal-600 transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
