import React, { useEffect, useState } from "react";
import tickIcon from "../assets/tick.svg"; // ✅ your circle tick icon

export default function BookDemoSection({openPopup}) {
  const [activeBox, setActiveBox] = useState(8);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveBox((prev) => (prev >= 24 ? 1 : prev + 1));
    }, 150);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="w-full bg-white py-16 flex flex-col items-center text-center mt-16 md:mt-[22%] px-4 sm:px-0">
      {/* CTA Button */}
<button
  onClick={openPopup}
  className="relative group bg-[#1E79FF] text-white font-semibold rounded-lg 
             px-6 sm:px-10 py-4 sm:py-5 text-sm sm:text-2xl 
             hover:scale-[1.03] transition-transform duration-300 
             shadow-[0_10px_25px_rgba(30,121,255,0.4),0_0_25px_rgba(30,121,255,0.3)] 
             hover:shadow-[0_6px_25px_rgba(30,121,255,0.55),0_0_40px_rgba(30,121,255,0.4)]
             w-full max-w-max overflow-hidden"
>
  {/* button label */}
  <span className="relative z-10">RESERVE MY FREE PERSONALIZED DEMO</span>

  {/* sweeping shine */}
  <span
    aria-hidden="true"
    className="pointer-events-none absolute top-0 -left-[50%] w-[50%] h-full
               bg-white/40 transition-all duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]
               [clip-path:polygon(0%_0%,55%_0%,100%_100%,25%_100%)]
               group-hover:left-[120%] group-hover:opacity-0"
  />

  {/* glossy overlay */}
  <span
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-white/10
               opacity-0 group-hover:opacity-100 transition-opacity duration-500"
  />
</button>



      {/* Subtitle */}
      <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-2xl leading-relaxed">
        Claim your spot and experience seamless proactive customer engagement.
      </p>

      {/* Progress Bar */}
      <div className="flex gap-[3px] sm:gap-[4px] justify-center mt-6 sm:mt-8 flex-wrap">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className={`h-4 w-2 sm:h-6 sm:w-3 rounded-sm transition-colors duration-300 ${
              i < activeBox ? "bg-[#1E79FF]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Features */}
      <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-x-4 sm:gap-x-8 gap-y-3 sm:gap-y-4 text-gray-700 text-sm sm:text-base font-medium">
        <div className="flex items-center gap-2">
          <img src={tickIcon} alt="tick" className="w-4" />
          <span>Human-verified contacts</span>
        </div>

        <div className="flex items-center gap-2">
          <img src={tickIcon} alt="tick" className="w-4" />
          <span>Predictive shipment analysis</span>
        </div>

        <div className="flex items-center gap-2">
          <img src={tickIcon} alt="tick" className="w-4" />
          <span>27M+ profiles</span>
        </div>

        <div className="flex items-center gap-2">
          <img src={tickIcon} alt="tick" className="w-4" />
          <span>7-day Trial and Multiple Demos</span>
        </div>
      </div>
    </section>
  );
}
