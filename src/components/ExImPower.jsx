import React, { useEffect, useState } from "react";
import mapImg from "../assets/map-image.svg"; // replace with your uploaded image path

const ExImPower = ({openPopup}) => {
  const [activeBox, setActiveBox] = useState(8);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveBox((prev) => (prev >= 24 ? 1 : prev + 1));
    }, 150);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-[#F9FAFB] py-16 sm:py-20 px-4 sm:px-6 text-center">
      {/* Heading */}
      <h2 className="text-[23px] sm:text-4xl md:text-6xl font-bold text-black leading-snug sm:leading-tight">
        Transform Your Trade Strategy <br className="hidden sm:block" /> with{" "}
        <span className="text-[#1C1C1C]">EX-IM Power</span>
      </h2>

      {/* Map Image */}
      <div className="flex justify-center mt-4 sm:mt-12">
        <img
          src={mapImg}
          alt="World trade map"
          className="w-full max-w-[300px] sm:max-w-2xl md:max-w-3xl object-contain"
        />
      </div>

      {/* Paragraph */}
      <p className="mt-8 sm:mt-10 max-w-3xl mx-auto text-gray-700 text-sm sm:text-xl leading-relaxed px-2">
        The Dollar Business is dedicated to empowering your export-import
        success with proven, human-verified contacts, advanced Nexus mapping,
        and predictive buyer or seller insights. Experience live Nexus mapping
        and pipeline acceleration with a personalized demo.
      </p>

      {/* Bottom Black Section */}
      <div className="text-center text-white mt-8 sm:mt-12">
        {/* CTA Button */}
<button
  onClick={openPopup}
  className="relative group bg-[#1E79FF] text-white font-semibold rounded-lg 
             px-6 sm:px-10 py-3 sm:py-5 text-base sm:text-3xl 
             hover:scale-[1.03] hover:-translate-y-0.5 transition-transform duration-300 
             shadow-[0_6px_25px_rgba(30,121,255,0.45),0_0_25px_rgba(30,121,255,0.35)]
             hover:shadow-[0_10px_35px_rgba(30,121,255,0.6),0_0_55px_rgba(30,121,255,0.5)]
             focus:outline-none focus:ring-4 focus:ring-[#1E79FF]/40
             overflow-hidden"
>
  {/* Button Text */}
  <span className="relative z-10">
    Start Your Global Trade Growth Journey
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
          Over a decade powering Fortune 500 and SMEs alike; Limited seats available.
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

export default ExImPower;
