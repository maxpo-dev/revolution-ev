"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const speakers = [
  {
    name: "H.E. Diego Pardow",
    role: "Minister of Energy",
    organization: "Government of Chile",
    image: "/image/speaker1.jpg",
  },
  {
    name: "H.E. Diego Pardow",
    role: "Minister of Energy",
    organization: "Government of Chile",
    image: "/image/speaker1.jpg",
  },
  {
    name: "H.E. Diego Pardow",
    role: "Minister of Energy",
    organization: "Government of Chile",
    image: "/image/speaker1.jpg",
  },
  {
    name: "H.E. Diego Pardow",
    role: "Minister of Energy",
    organization: "Government of Chile",
    image: "/image/speaker1.jpg",
  },
  {
    name: "H.E. Diego Pardow",
    role: "Minister of Energy",
    organization: "Government of Chile",
    image: "/image/speaker1.jpg",
  },
  {
    name: "H.E. Diego Pardow",
    role: "Minister of Energy",
    organization: "Government of Chile",
    image: "/image/speaker1.jpg",
  },
  {
    name: "H.E. Diego Pardow",
    role: "Minister of Energy",
    organization: "Government of Chile",
    image: "/image/speaker1.jpg",
  },
];

export default function SpeakersSection() {
  const [mounted, setMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(30); // Default scroll speed in seconds
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Duplicate the speakers array to create a seamless loop
  const duplicatedSpeakers = [...speakers, ...speakers];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to speed up scrolling (when clicking next)
  const speedUpScroll = () => {
    setScrollSpeed(5); // Temporarily increase speed
    setTimeout(() => setScrollSpeed(30), 1000); // Reset to normal speed after 1 second
  };

  // Function to reverse scrolling direction (when clicking previous)
  const reverseScroll = () => {
    if (marqueeRef.current) {
      // Get current transform value
      const currentTransform = getComputedStyle(
        marqueeRef.current
      ).getPropertyValue("transform");

      // Apply a temporary class to reverse the animation
      marqueeRef.current.classList.add("reverse-scroll");

      // Reset after a short time
      setTimeout(() => {
        if (marqueeRef.current) {
          marqueeRef.current.classList.remove("reverse-scroll");
        }
      }, 5000);
    }
  };

  if (!mounted) return null;

  return (
    <section className="bg-[url(https://i.ibb.co/TqRGfPk2/Frame-3968646-2.png)] px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="mb-12   leading-tight tracking-tight font-bold text-5xl sm:text-6xl md:text-8xl ">
          <span
            className="relative inline-block text-transparent outline-text"
            style={{ WebkitTextStroke: "1px white" }}
          >
            Speakers at{" "}
          </span>
          &nbsp;
          <span className=" text-[#0DB6C9]  uppercase">#rev25</span>
        </h2>

        {/* Marquee container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Marquee content */}
          <div
            ref={marqueeRef}
            className={`flex whitespace-nowrap ${
              isPaused ? "pause-animation" : "marquee-animation"
            }`}
            style={{
              animationDuration: `${scrollSpeed}s`,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          >
            {duplicatedSpeakers.map((speaker, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[250px] px-3 inline-block"
              >
                <div className="bg-transparent">
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={
                        speaker.image || "/placeholder.svg?height=200&width=200"
                      }
                      alt={speaker.name}
                      className="h-auto w-full object-cover"
                    />
                  </div>

                  {/* Text content */}
                  <div className="mt-2 text-left gap-4">
                    <p className="text-white text-sm font-medium">
                      {speaker.name}
                    </p>
                    <p className="text-[#0DB6C9] text-xs">{speaker.role}</p>
                    <p className="text-[#0DB6C9] text-xs">
                      {speaker.organization}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-6 space-x-2">
            <button
              onClick={reverseScroll}
              className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-sm"
              aria-label="Scroll backward"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={speedUpScroll}
              className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-sm"
              aria-label="Scroll forward"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* CSS for the marquee animation */}
          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            @keyframes marquee-reverse {
              0% {
                transform: translateX(-50%);
              }
              100% {
                transform: translateX(0);
              }
            }

            .marquee-animation {
              animation-name: marquee;
              animation-duration: ${scrollSpeed}s;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }

            .pause-animation {
              animation-play-state: paused;
            }

            .reverse-scroll {
              animation-name: marquee-reverse;
              animation-duration: 2s;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
