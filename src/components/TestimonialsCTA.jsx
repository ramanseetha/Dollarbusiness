import React, { useEffect, useState } from "react";
import quotes from "../assets/quotes.svg";
import star from "../assets/Stars.svg";
import profile1 from "../assets/profile1.svg";
import profile2 from "../assets/profile2.svg";
import profile3 from "../assets/profile3.svg";

const testimonials = [
  {
    id: 1,
    text: "“Thanks to EXIMAPS, I have developed a good rapport with a US buyer and am confident he will give the order to me.”",
    name: "ASHOK KUMAR",
    title: "Proprietor, Abi Exports (Tamil Nadu)",
    subtext: "A CONNECT license holder since November 2017.",
    img: profile1,
  },
  {
    id: 2,
    text: "“EXIMAPS is a revolutionary technology in foreign trade. I strongly recommend all exporters and importers around the world to try EXIMAPS and experience this mind-moving platform.”",
    name: "DR. A. K. SENGUPTA, PH.D.",
    title: "FOREIGN TRADE",
    subtext: "Former Dean - (IIFT), New Delhi, India",
    img: profile2,
  },
  {
    id: 3,
    text: "“CONNECT provided me with buyer profiles that materialised into high-value business.”",
    name: "AMAR PAMU",
    title: "Proprietor, Venus Impex (Maharashtra)",
    subtext: "A CONNECT license holder since December 2016.",
    img: profile3,
  },
];

export default function TestimonialsCTA({openPopup}) {
  const [activeBox, setActiveBox] = useState(8);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveBox((prev) => (prev >= 24 ? 1 : prev + 1));
    }, 150);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-[#fff] py-12 sm:py-16 px-4 sm:px-8 lg:px-16 text-white max-w-full mx-auto">
      {/* Title */}
      <h2 className="text-center text-[23px] sm:text-[3rem] text-black font-bold mb-10 sm:mb-12 leading-snug sm:leading-tight">
        Hear Why Our Members Would Never Switch Back to <br />
        <span className="block sm:inline"> Old Trade Platforms…</span>
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="relative bg-[#F7F7F7] text-black rounded-xl p-5 sm:p-8 shadow-md flex flex-col justify-between"
          >
            {/* Quote Icon */}
            <div className="absolute -top-5 sm:-top-6 right-5 sm:right-6 bg-[#DCAF26] rounded-full p-2 sm:p-3">
              <img src={quotes} alt="quote" className="w-5 sm:w-12" />
            </div>

            {/* Text */}
            <div>
              <p className="text-sm sm:text-base leading-relaxed mt-4">{t.text}</p>
            </div>

            {/* Stars + Profile */}
            <div className="mt-5 sm:mt-6">
              {/* Stars */}
              <div className="flex justify-start mb-3 sm:mb-4">
                <img src={star} alt="star" className="w-16 sm:w-28" />
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-bold text-sm sm:text-base">{t.name}</p>
                  <p className="text-xs sm:text-sm text-gray-700">{t.title}</p>
                  {t.subtext && (
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-[2px]">{t.subtext}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button + Progress */}
      <div className="flex flex-col items-center mt-14 sm:mt-16 text-center">
        {/* CTA Button */}
<button
  onClick={openPopup}
  className="relative group bg-[#1E79FF] text-white font-semibold rounded-lg 
             px-6 sm:px-10 py-3 sm:py-5 text-[13px] sm:text-xl uppercase
             hover:scale-[1.03] hover:-translate-y-0.5 transition-transform duration-300 
             shadow-[0_3px_25px_rgba(30,121,255,0.35),0_0_18px_rgba(30,121,255,0.25)]
             hover:shadow-[0_6px_25px_rgba(30,121,255,0.55),0_0_40px_rgba(30,121,255,0.4)]
             focus:outline-none focus:ring-4 focus:ring-[#1E79FF]/40
             overflow-hidden"
>
  {/* Button Label */}
  <span className="relative z-10">
    Start Your Global Trade Growth Journey
  </span>

  {/* Sweeping Shine */}
  <span
    aria-hidden="true"
    className="pointer-events-none absolute top-0 -left-[50%] w-[50%] h-full
               bg-white/40 transition-all duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]
               [clip-path:polygon(0%_0%,55%_0%,100%_100%,25%_100%)]
               group-hover:left-[120%] group-hover:opacity-0"
  />

  {/* Glossy Overlay */}
  <span
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-white/10
               opacity-0 group-hover:opacity-100 transition-opacity duration-500"
  />
</button>


        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 text-gray-500 text-xs sm:text-base max-w-sm sm:max-w-2xl leading-relaxed">
          Over a decade powering Fortune 500 and SMEs alike limited seats available.
        </p>

        {/* Progress Bar */}
        <div className="flex gap-[2px] sm:gap-[4px] justify-center mt-5 sm:mt-8 flex-wrap">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className={`h-3 w-2 sm:h-6 sm:w-3 rounded-sm transition-colors duration-300 ${
                i < activeBox ? "bg-[#1E79FF]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
