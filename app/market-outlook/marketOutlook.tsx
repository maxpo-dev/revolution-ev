import Image from "next/image"

export default function Component() {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-sm text-gray-400 mb-2">Market Outlook</div>

        {/* Local Market Outlook Section */}
<h1 className="text-3xl font-light text-teal-400 mb-6">Local Market Outlook</h1>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                Malaysia's Electric Vehicle (EV) Market Is Gearing Up For Explosive Growth, Making It A Hotspot Region
                In Southeast Asia. Green Mobility Revolution, According To The International Energy Agency (IEA) And
                Insights From EV Malaysia EV Sector Is Projected To Soar At A Yearly CAGR Between 30% And 35% Fueled By
                Innovative Incentives, Consumer Demand, And Supportive Government Policies.
              </p>

              <p>
                The Malaysian Government Targets 15,000 Units EV Charging Stations By 2025, Directly Supporting The Low
                Carbon Mobility Roadmap 2021-2030. This Ambitious Infrastructure Is Expected To Boost Consumer
                Confidence About Range Anxiety, A Major Factor In EV Adoption.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/image/banner/Rectangle 1838.png?height=300&width=400"
                alt="Modern building exterior"
                width={400}
                height={300}
                className="w-full h-auto "
              />
            </div>
          </div>

      {/* Full-width 3rd and 4th paragraphs */}
     <div className="w-full max-w-4xl ml-auto mt-8 pr-12 text-sm leading-relaxed space-y-4">
        <p>
          Recent Survey By EV Reveals That 35% Of Malaysian Consumers Are Considering An EV For Their Next Vehicle
          Purchase Given By Rising Fuel Prices And Sustainability Concerns. Additionally, Local Manufacturers Such
          As Proton And Perodua Are Preparing To Launch Alternative Electric Models By Late 2025, Expanding The
          Accessibility Of EVs Across Malaysia.
        </p>

        <p>
          As Malaysia Positions Itself As A Strategic Player In The EV Market, Events Like Revolution EV 2025
          Offer An Unmatched Platform To Engage, Connect, And Shape The Future Of Mobility In The Region.
        </p>
      </div>

        {/* Global Market Outlook Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-light text-teal-400 mb-6">Global Market Outlook</h2>

          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              The Global Electric Vehicle Market Is Experiencing Unprecedented Growth, Transforming Transportation
              Systems Worldwide. According To The EV's Global EV Outlook 2024, EVs Are Expected To Represent 30% Of
              Global Car Sales By 2030, With Projections To Hit Over 70 Million.
            </p>

            <p>
              China Leads The World In EV Adoption, With Nearly 40% Of New Car Sales Being Electric And Expects Of 14
              Million EV Units In 2024. In 60% Year-Over-Year Increase. Meanwhile, OECD30 Predicts That By 2030, Global
              EV Sales Will Surpass 3 Million Units Annually, Led By Strong Performance In Asia-Pacific, Europe, And
              North America.
            </p>
          </div>

          {/* Large panoramic image */}
          <div className="my-8">
            <Image
              src="/image/banner/Rectangle 1839.png?height=300&width=800"
              alt="Modern building interior with blue lighting"
              width={800}
              height={300}
              className="w-full h-auto "
            />
          </div>

          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              In The United States, EVs Captured 9% Of New Vehicle Sales In 2024, According To U.S. Department Of Energy
              Data, Though Policy Goals May Influence Growth Trajectories Moving Forward. Europe Faces Heightened
              Competition From Chinese EV Manufacturers, Requiring Strategic Adjustments To Maintain Its Green
              Transition Momentum.
            </p>

            <p>
              The International Monetary Fund (IMF) Forecasts Up To $2.8 Trillion In EV-Related Investments Globally
              Through 2030, Impact EV Structures With Complex OEM Platforms Charging By 63.5% And Redefine Employment
              Landscapes Across The Automotive Sector.
            </p>

            <p>
              As Part Of Revolution Accelerate Worldwide, Revolution EV 2025 Provides Critical Insights Into New
              Technologies, Evolving Policies, And Business Opportunities In The Global EV Ecosystem.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
