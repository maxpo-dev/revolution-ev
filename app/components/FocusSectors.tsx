"use client"

type Sector = {
  title: string
  lines: string[]
}

const sectors: Sector[] = [
  {
    title: "Electric Vehicles",
    lines: ["Electric", "Vehicles"],
  },
  {
    title: "Charging Infrastructure",
    lines: ["Charging", "Infrastructure"],
  },
  {
    title: "Policy, Regulation & Incentives",
    lines: ["Policy, Regulation", "& Incentives"],
  },
  {
    title: "Smart Mobility",
    lines: ["Smart", "Mobility"],
  },
  {
    title: "Fleet Management & Commercial EVs",
    lines: ["Fleet Management", "& Commercial EVs"],
  },
  {
    title: "Investment, Startups & Innovation",
    lines: ["Investment, Startups", "& Innovation"],
  },
]

export default function FocusSectors() {
  return (
    <section className="bg-black px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-4xl font-menda text-white">
          <span className="font-light">Focus</span> <span className="font-bold">Sectors</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="relative cursor-pointer overflow-hidden rounded-md bg-[#001A2C] h-[180px]">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00E1B0]" />
            <div className="absolute inset-0 bg-[url('/image/fc1.jpg')] bg-center bg-no-repeat bg-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00E1B0]/30 to-transparent" />
            <div className="absolute bottom-4 left-4 z-20 text-white font-menda">
              <div className="text-lg font-medium leading-tight">Electric</div>
              <div className="text-lg font-medium leading-tight">Vehicles</div>
            </div>
          </div>

          <div className="relative cursor-pointer overflow-hidden rounded-md bg-[#001A2C] h-[180px]">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00E1B0]" />
            <div className="absolute inset-0 bg-[url('/image/fc2.jpg')] bg-center bg-no-repeat bg-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00E1B0]/30 to-transparent" />
            <div className="absolute bottom-4 left-4 z-20 text-white font-menda">
              <div className="text-lg font-medium leading-tight">Charging</div>
              <div className="text-lg font-medium leading-tight">Infrastructure</div>
            </div>
          </div>

          <div className="relative cursor-pointer overflow-hidden rounded-md bg-[#001A2C] h-[180px]">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00E1B0]" />
            <div className="absolute inset-0 bg-[url('/image/fc1.jpg')] bg-center bg-no-repeat bg-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00E1B0]/30 to-transparent" />
            <div className="absolute bottom-4 left-4 z-20 text-white font-menda">
              <div className="text-lg font-medium leading-tight">Policy, Regulation</div>
              <div className="text-lg font-medium leading-tight">& Incentives</div>
            </div>
          </div>

          <div className="relative cursor-pointer overflow-hidden rounded-md bg-[#001A2C] h-[180px]">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00E1B0]" />
            <div className="absolute inset-0 bg-[url('/image/fc2.jpg')] bg-center bg-no-repeat bg-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00E1B0]/30 to-transparent" />
            <div className="absolute bottom-4 left-4 z-20 text-white font-menda">
              <div className="text-lg font-medium leading-tight">Smart</div>
              <div className="text-lg font-medium leading-tight">Mobility</div>
            </div>
          </div>

          <div className="relative cursor-pointer overflow-hidden rounded-md bg-[#001A2C] h-[180px]">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00E1B0]" />
            <div className="absolute inset-0 bg-[url('/image/fc1.jpg')] bg-center bg-no-repeat bg-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00E1B0]/30 to-transparent" />
            <div className="absolute bottom-4 left-4 z-20 text-white font-menda">
              <div className="text-lg font-medium leading-tight">Fleet Management</div>
              <div className="text-lg font-medium leading-tight">& Commercial EVs</div>
            </div>
          </div>

          <div className="relative cursor-pointer overflow-hidden rounded-md bg-[#001A2C] h-[180px]">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00E1B0]" />
            <div className="absolute inset-0 bg-[url('/image/fc2.jpg')] bg-center bg-no-repeat bg-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00E1B0]/30 to-transparent" />
            <div className="absolute bottom-4 left-4 z-20 text-white font-menda">
              <div className="text-lg font-medium leading-tight">Investment, Startups</div>
              <div className="text-lg font-medium leading-tight">& Innovation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
