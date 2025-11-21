import React, { useEffect, useState } from "react";
import mobileAppImg from "../assets/mobile-app-preview.svg"; // 🖼️ your image here

export default function MobileAppSection({openPopup}) {
  const [activeBox, setActiveBox] = useState(8);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveBox((prev) => (prev >= 24 ? 1 : prev + 1));
    }, 150);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-white pt-12 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col items-center text-center md:text-left">
      {/* Title */}
      <h2 className="text-[22px] sm:text-4xl md:text-6xl font-extrabold text-[#0F0F0F] leading-snug max-w-3xl sm:max-w-4xl mx-auto mb-8 sm:mb-12">
        Experience Global Trade on the{" "}
        <br className="hidden sm:block" />
        <span className="block sm:inline">Move With Our Mobile App</span>
      </h2>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-16 max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src={mobileAppImg}
            alt="Mobile App Preview"
            className="rounded-2xl shadow-lg w-[85%] sm:w-[80%] md:w-[90%] lg:w-[500px] max-w-[350px] sm:max-w-none"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-gray-800 text-sm sm:text-base md:text-2xl leading-relaxed mt-6 md:mt-0 px-1 sm:px-0">
          <p className="mb-4 sm:mb-6">
            We’ve built our app to blend seamlessly with your workflow,
            allowing you to track live shipments, analyze global trends, and
            connect with buyers and decision-makers in just a tap. With
            real-time notifications and user-friendly navigation, the right
            trade decision is always closer.
          </p>

          <p>
            Stay ahead of the curve with data-driven insights, instant alerts,
            and smooth access to verified buyers all within your pocket.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center mt-10 sm:mt-12 text-center">
        {/* CTA Button */}
<button
  onClick={openPopup}
  className="relative group bg-[#1E79FF] text-white font-semibold rounded-lg 
             px-5 sm:px-10 py-3 sm:py-5 text-[14px] sm:text-2xl 
             hover:scale-[1.03] hover:-translate-y-0.5 transition-transform duration-300 
             shadow-[0_3px_25px_rgba(30,121,255,0.35),0_0_15px_rgba(30,121,255,0.2)]
             hover:shadow-[0_6px_20px_rgba(30,121,255,0.55),0_0_35px_rgba(30,121,255,0.35)]
             focus:outline-none focus:ring-4 focus:ring-[#1E79FF]/40
             w-full sm:w-auto max-w-[320px] sm:max-w-max overflow-hidden"
>
  {/* Button Label */}
  <span className="relative z-10">
    Book Your Exclusive Demo Before It’s Gone
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
        <p className="mt-3 sm:mt-4 text-gray-600 text-xs sm:text-base max-w-xs sm:max-w-2xl leading-relaxed">
          Don’t miss out on data-driven growth trusted across 181+ countries.
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
