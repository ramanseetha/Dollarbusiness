import React, { useState, useEffect } from "react";
import logo1 from "../assets/logo-1.svg";
import logo2 from "../assets/logo-2.svg";
import logo3 from "../assets/logo-3.svg";
import logo4 from "../assets/logo-4.svg";
import logo5 from "../assets/logo-5.svg";
import logo6 from "../assets/logo-6.svg";
import logo7 from "../assets/logo-7.svg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const GlobalPartners = ({ openPopup }) => {
  const [activeBox, setActiveBox] = useState(8);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveBox((prev) => (prev >= 24 ? 1 : prev + 1));
    }, 150);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-white py-4 md:py-20 px-6 text-center overflow-hidden">
      {/* Heading */}
      <h2 className="text-[20px] sm:text-5xl font-bold text-black mb-6">
        51,000+ Businesses and 50+ Global Partners Can’t Be Wrong
      </h2>

      {/* Paragraph */}
      <p className="text-gray-700 max-w-4xl mx-auto text-sm sm:text-lg leading-relaxed mb-12">
        With over 51,000 paid clients across 51+ countries and partnerships with
        leading global trade institutions, The Dollar Business is the trusted
        choice for export–import intelligence. Our community spans Fortune 500
        enterprises and fast-growing SMEs alike, united by their drive for
        data-backed growth.
      </p>

      {/* Infinite Logo Slider */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-10 sm:gap-16 items-center">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="h-10 sm:h-14 object-contain transition-all duration-300"
            />
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-white mt-8 sm:mt-12">
        {/* CTA Button */}
    <button
  onClick={openPopup}
  className="relative group bg-[#1E79FF] text-white font-semibold rounded-lg 
             px-6 sm:px-10 py-3 sm:py-5 text-base sm:text-2xl 
             hover:scale-[1.03] hover:-translate-y-0.5 transition-transform duration-300
             shadow-[0_4px_25px_rgba(30,121,255,0.4),0_0_25px_rgba(30,121,255,0.25)]
             hover:shadow-[0_8px_35px_rgba(30,121,255,0.6),0_0_45px_rgba(30,121,255,0.45)]
             focus:outline-none focus:ring-4 focus:ring-[#1E79FF]/40
             overflow-hidden"
>
  {/* Button Label */}
  <span className="relative z-10">
    GRAB YOUR DEMO CALL FOR DOMINANCE
  </span>

  {/* Sweeping Shine Slash */}
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
        <p className="mt-5 sm:mt-6 text-gray-500 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed px-3">
          Predictive buyer or seller insights and verified contacts; Don’t let competitors win.
        </p>

        {/* Progress Bar */}
        <div className="flex gap-[2px] sm:gap-[4px] justify-center mt-8 sm:mt-10 flex-wrap">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className={`h-2 w-1.5 sm:h-4 sm:w-3 rounded-sm transition-colors duration-300 ${
                i < activeBox ? "bg-[#1E79FF]" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPartners;
