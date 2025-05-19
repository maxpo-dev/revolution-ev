const reasons = [
  {
    number: "01",
    text: "Be Part Of The Conversations That Fuel The Future Of EVs",
  },
  {
    number: "02",
    text: "Gain Insights Into The Potential Benefits Of Using EVs",
  },
  {
    number: "03",
    text: "Experience Live Demonstrations From OEMs",
  },
  {
    number: "04",
    text: "Engage With Top EV Leaders, Tech Pioneers And Investors",
  },
  {
    number: "05",
    text: "Analyse Business Opportunities in Malaysia's Growing EV Market",
  },
  {
    number: "06",
    text: "Enhancing Your Brand's Visibility In The Evolving E-Mobility Space",
  },
]

export default function WhyAttend() {
  return (
    <div className="w-full bg-white py-24 px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left side - Title */}
        <div className="md:w-1/4 self-center">
          <h2 className="text-5xl font-light leading-tight">Why</h2>
          <h2 className="text-6xl font-bold mt-2">Attend?</h2>
        </div>

        {/* Right side - Cards */}
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 p-8 h-64 flex flex-col justify-between hover:border-sky-400 transition-all"
            >
              <span className="text-4xl font-bold">{item.number}</span>
              <p className="text-sm font-medium text-gray-800 mt-auto">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
