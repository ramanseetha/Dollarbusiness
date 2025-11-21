import React, { useEffect, useState } from "react";
import arrowUp from "../assets/arrow-up.svg"; // green upward icon
import targetIcon from "../assets/target.svg"; // red target icon

export default function BusinessInsightsSection({openPopup}) {
  const [activeBox, setActiveBox] = useState(8);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveBox((prev) => (prev >= 24 ? 1 : prev + 1));
    }, 150);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-[#0F0F0F] text-white py-16 px-4 sm:px-8 md:px-16 rounded-[20px] max-w-[1250px] mx-auto mt-16 md:mt-32">
      {/* Title */}
      <h2 className="text-center text-[#DCAF26] text-[24px] sm:text-5xl font-extrabold leading-snug">
        Have You Ever Wondered Why Some Businesses <br />
        Skyrocket While Others Stall?
      </h2>

      {/* Subtitle */}
      <p className="text-center text-gray-300 mt-4 max-w-4xl mx-auto text-sm sm:text-xl">
        Ever wonder how a handful of exporters dominate global markets while others struggle for a single connection?
      </p>

      {/* Description */}
      <p className="text-center text-gray-400 mt-6 max-w-5xl mx-auto text-sm sm:text-xl leading-relaxed">
        Rajesh Malhotra, industry veteran, teamed up with data scientists to analyze millions of shipment records,
        buyer–seller interactions, and market trends worldwide. The result? A daily micro–insight engine that compounds your strategic advantage.
      </p>

      {/* Subheading */}
      <h3 className="text-center text-white font-semibold mt-8 text-lg sm:text-2xl">
        The Power of Incremental Insights
      </h3>

      {/* Comparison Box */}
      <div className="mt-8 mx-auto max-w-2xl bg-white rounded-xl p-4 sm:p-6 text-black shadow-lg border border-[#F4C542]">
        {/* Row 1 */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <img src={arrowUp} alt="Up" className="md:w-6 md:h-6 w-4 h-4" />
            <span className="text-gray-700 text-[12px] sm:text-lg">1% smarter every day</span>
          </div>
          <p className="text-green-600 font-semibold text-[12px] sm:text-lg">
            31x stronger market position
          </p>
        </div>

        {/* Row 2 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={targetIcon} alt="Target" className="md:w-6 md:h-6 w-4 h-4" />
            <span className="text-gray-700 text-[12px] sm:text-lg">1% less data–driven</span>
          </div>
          <p className="text-red-600 font-semibold text-[12px] sm:text-lg">
            97% missed opportunities
          </p>
        </div>
      </div>

      {/* CTA Button + Progress */}
      <div className="flex flex-col items-center mt-10 text-center">
        {/* CTA Button */}
<button
  onClick={openPopup}
  className="relative group bg-[#1E79FF] text-white font-semibold rounded-lg 
             px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-2xl uppercase
             hover:scale-[1.03] hover:-translate-y-0.5 transition-transform duration-300 
             shadow-[0_4px_25px_rgba(30,121,255,0.4),0_0_25px_rgba(30,121,255,0.25)]
             hover:shadow-[0_8px_30px_rgba(30,121,255,0.55),0_0_40px_rgba(30,121,255,0.4)]
             focus:outline-none focus:ring-4 focus:ring-[#1E79FF]/40
             overflow-hidden"
>
  {/* Button Label */}
  <span className="relative z-10">
    BOOK YOUR DEMO NOW, SEATS FILL FAST
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
        <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed">
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
      </div>
    </section>
  );
}
