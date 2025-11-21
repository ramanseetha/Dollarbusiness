import React, { useEffect, useState } from "react";
import quotes from "../assets/quotes.svg";
import star from "../assets/Stars.svg";
import profile1 from "../assets/profile1.svg";
import profile2 from "../assets/profile2.svg";
import profile3 from "../assets/profile3.svg";

const testimonials = [
  {
    id: 1,
    text: "“EXIMAPS has helped me understand my competitors' businesses. Their buyers are now literally 'my' buyers.”",
    name: "BHAVIN GUPTA",
    title: "Owner, Murari Exports (Telangana)",
    subtext: "A CONQUER license holder since January 2018.",
    img: profile1,
  },
  {
    id: 2,
    text: "“With EXIMAPS, Thea Soaps has got a wonderfully effective platform to reach out to buyers across the world.”",
    name: "K. RADHA MANOHARI",
    title: "Proprietor, Thea Soaps (Telangana)",
    subtext: "A CONNECT license holder since October 2017.",
    img: profile2,
  },
  {
    id: 3,
    text: "“I have been a user of The Dollar Business EXIMAPS for the last couple of years. I have found the EXIMAPS tool to be very useful for all those who are involved in foreign trade. I believe their trade analytics and support is truly outstanding.”",
    name: "HARISH JAISANSARIA",
    title: "Director, Neelkanth Polymers",
    subtext: "",
    img: profile3,
  },
];

export default function Testimonials({ openPopup }) {
  const [activeBox, setActiveBox] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBox((prev) => (prev >= 24 ? 1 : prev + 1));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#111111] py-16 px-4 sm:px-8 lg:px-16 text-white">
      <h2 className="text-center text-3xl sm:text-5xl md:text-6xl font-extrabold mb-12">
        Real Results from Real Traders
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 max-w-7xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="relative bg-white text-black rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 right-6 bg-[#DCAF26] rounded-full p-2 sm:p-3 shadow-md">
              <img src={quotes} alt="quote" className="w-6 sm:w-10" />
            </div>

            {/* Text (fixed height for alignment) */}
            <div className="min-h-[150px] sm:min-h-[160px]">
              <p className="text-sm sm:text-lg leading-relaxed mt-4 text-gray-900">
                {t.text}
              </p>
            </div>

            {/* Stars */}
            <div className="flex mt-4 mb-3">
              <img src={star} alt="star rating" className="w-20 sm:w-28" />
            </div>

            {/* Profile */}
            <div className="flex items-center gap-3 mt-2">
              <img
                src={t.img}
                alt={t.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-gray-200"
              />
              <div className="text-left">
                <p className="font-bold text-sm sm:text-base text-gray-900">
                  {t.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-700">{t.title}</p>
                {t.subtext && (
                  <p className="text-[11px] sm:text-xs text-gray-500">
                    {t.subtext}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button Section */}
      <div className="text-center mt-16 sm:mt-20 max-w-3xl mx-auto">
    <button
  onClick={openPopup}
  className="relative group bg-[#1E79FF] text-white font-semibold rounded-lg 
             px-6 sm:px-10 py-4 sm:py-5 text-sm sm:text-xl uppercase
             hover:scale-[1.03] hover:-translate-y-0.5 transition-transform duration-300 
             shadow-[0_4px_25px_rgba(30,121,255,0.4),0_0_25px_rgba(30,121,255,0.25)]
             hover:shadow-[0_8px_30px_rgba(30,121,255,0.55),0_0_40px_rgba(30,121,255,0.4)]
             focus:outline-none focus:ring-4 focus:ring-[#1E79FF]/40
             overflow-hidden"
>
  {/* Label */}
  <span className="relative z-10">
    Reserve Your Personalized EX-IM Demo
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


        <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Only a few demo slots left; Trusted by industry leaders worldwide.
        </p>

        {/* Progress Bar */}
        <div className="flex gap-[3px] sm:gap-[4px] justify-center mt-6 sm:mt-8">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className={`h-3 w-2 sm:h-5 sm:w-3 rounded-sm transition-colors duration-300 ${
                i < activeBox ? "bg-[#1E79FF]" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
