import React, { useState, useEffect } from "react";
import BannerDash from "../assets/banner-1.svg";

const TrustSection = ({ openPopup }) => {
  const [activeBox, setActiveBox] = useState(1);

  // Animate the progress bar
  useEffect(() => {
    const id = setInterval(() => {
      setActiveBox((prev) => (prev >= 24 ? 1 : prev + 1));
    }, 150);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-white text-center px-4 sm:px-6 pt-0 pb-10 sm:py-10 relative z-10">
      {/* Heading */}
      <h2 className="text-[23px] sm:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
        Why{" "}
        <span className="text-gray-900">51,000+</span> Businesses{" "}
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
          Trust
        </span>{" "}
        EX–IM
      </h2>

      {/* Subheading */}
      <p className="text-gray-900 max-w-3xl mx-auto text-sm sm:text-lg mb-6 sm:mb-8 leading-relaxed px-2">
        For <span className="font-semibold">12+ years</span>, The Dollar Business
        has been the original trade intelligence platform trusted by clients
        spread across <span className="font-semibold">51+ countries</span> with
        verified data coverage of{" "}
        <span className="font-semibold">181+ countries</span>.
      </p>

      {/* Description */}
      <p className="text-gray-900 max-w-3xl mx-auto text-sm sm:text-lg leading-relaxed px-2">
        With <span className="font-medium">27M+ verified entities</span> and billions
        of shipments, EX–IM holds trillions of data points from 7-8 years of trade
        history. It transforms scattered shipment records into actionable
        buyer-seller insights with a clean, intuitive interface your team will
        actually use.
      </p>

      {/* Image */}
      <img
        src={BannerDash}
        alt="Dashboard Banner"
        className="mx-auto w-full max-w-7xl pt-6 sm:pt-8 object-contain"
      />

      {/* CTA Button */}
      <div className="text-center mt-10 sm:mt-0 max-w-3xl mx-auto p-8">
<button
  onClick={openPopup}
  className="relative group bg-[#1E79FF] text-white font-semibold rounded-lg 
             px-6 sm:px-10 py-4 sm:py-5 text-sm sm:text-2xl uppercase
             hover:scale-[1.03] transition-transform duration-300 
             shadow-[0_4px_25px_rgba(30,121,255,0.4),0_0_25px_rgba(30,121,255,0.25)]
             hover:shadow-[0_6px_25px_rgba(30,121,255,0.55),0_0_40px_rgba(30,121,255,0.4)]
             overflow-hidden"
>
  {/* Button Label */}
  <span className="relative z-10">Claim Your Free Demo Spot Now</span>

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
        <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
          Demo slots for October are filling fast; Join 51,000+ trusted global exporters.
        </p>

        {/* Progress Bar */}
        <div className="flex gap-[3px] sm:gap-[4px] justify-center mt-6 sm:mt-8">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className={`h-3 w-2 sm:h-5 sm:w-3 rounded-sm transition-colors duration-300 ${
                i < activeBox ? "bg-[#1E79FF]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
