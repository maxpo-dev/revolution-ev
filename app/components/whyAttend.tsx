import React from "react";

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
    text: "Analyse Business Opportunities in Malaysia’s Growing EV Market",
  },
  {
    number: "06",
    text: "Enhancing Your Brand’s Visibility In The Evolving E-Mobility Space",
  },
];

export default function WhyAttend() {
  return (
    <div className="w-full bg-white py-16 px-8 md:px-20">
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="md:w-1/3">
          <h2 className="text-4xl font-light leading-snug">Why</h2>
          <h2 className="text-5xl font-bold mt-2">Attend?</h2>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 p-6 h-48 flex flex-col justify-between hover:border-sky-400 transition-all"
            >
              <span className="text-xl font-semibold">{item.number}</span>
              <p className="text-sm font-medium text-gray-800">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
