const reasons = [
  {
    number: "01",
    text: "Be part of the conversations that fuel the future of EVs",
    image: "image/Attend/1.png"
  },
  {
    number: "02",
    text: "Gain insights into the potential benefits of using EVs",
    image: "image/Attend/2.png"
  },
  {
    number: "03",
    text: "Experience live demonstrations from OEMs",
    image: "image/Attend/3.png"
  },
  {
    number: "04",
    text: "Engage with top EV leaders, tech pioneers and investors",
    image: "image/Attend/4.png"
  },
  {
    number: "05",
    text: "Analyse business opportunities in Malaysia's growing EV market",
    image: "image/Attend/5.png"
  },
  {
    number: "06",
    text: "Enhancing your brand's visibility in the evolving e-mobility space",
    image: "image/Attend/6.png"
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
    className="relative h-90 rounded-md overflow-hidden bg-cover bg-center text-white flex items-end p-6 hover:scale-[1.02] transition-all duration-300"
    style={{ backgroundImage: `url(${item.image})` }}
  >
    {/* Optional overlay */}
    <div className="absolute inset-0 bg-black/40 z-0" />

    {/* Text content */}
    <div className="relative z-10">
      {/* <span className="text-4xl font-bold block">{item.number}</span> */}
      <p className="text-sm font-medium mt-2">{item.text}</p>
    </div>
  </div>
))}




        </div>
      </div>
    </div>
  )
}
