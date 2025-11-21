import React, { useEffect, useState } from "react";
import logo from "../assets/logo-dollar.svg";
import tickIcon from "../assets/tick.svg";

export default function HeroWithVideo({ isPopupOpen = false, openPopup }) {
  const [activeBox, setActiveBox] = useState(8);

  // Load Wistia script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://fast.wistia.com/player.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Animate progress bar
  useEffect(() => {
    const id = setInterval(() => {
      setActiveBox((prev) => (prev >= 24 ? 1 : prev + 1));
    }, 150);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* 🌟 HERO SECTION */}
      <section className="relative bg-[#DCAF26] flex flex-col items-center justify-start overflow-visible pb-0">
        {/* 🔵 Top Blue Bar */}
        <div className="w-full bg-blue-600 text-white text-sm sm:text-base text-center py-1 sm:py-3 relative z-10">
          Trusted by 51,000+ exporters, importers & Fortune 500 companies | Demo
          slots filling fast for October
        </div>

{/* 🟡 Logo + Attention Bar */}
<div className="w-full relative px-4 sm:px-40 pt-8 z-10">

  {/* Left Logo (absolute on left) */}
  <div className="absolute left-4 sm:left-40 top-14 -translate-y-1/2">
    <img src={logo} alt="Logo" className="h-24 sm:h-28" />
  </div>

  {/* Center Attention Bar */}
  <div className="flex justify-center w-full">
    <div className="bg-black/70 text-white px-6 py-2 sm:px-3 sm:py-3 rounded-full text-xs sm:text-sm flex items-center gap-2 text-center max-w-2xl mx-auto">
      <span className="relative flex h-4 w-4 sm:h-5 sm:w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 sm:h-5 sm:w-5 bg-red-600"></span>
      </span>
      ATTENTION: THERE'S A REASON 51,000+ EXPORTERS ALWAYS SEEM ONE STEP AHEAD.
    </div>
  </div>

</div>


        {/* 🏁 Headline */}
        <h1 className="mt-16 text-center text-white font-extrabold text-[30px] sm:text-[90px] max-w-7xl leading-[38px] md:leading-[78px] drop-shadow-lg relative z-10 px-4">
          WHERE SMART EXPORTERS TURN DATA INTO DEALS
          <br className="hidden sm:block" />
          AND INFORMATION INTO MARKET DOMINANCE.
        </h1>

        {/* 🧠 Subtext */}
        <p className="mt-8 text-center text-black/90 text-base sm:text-xl md:text-2xl max-w-4xl relative z-10 px-4 mb-12">
          Powered by The Dollar Business, exporters gain unmatched visibility
          with live buyer, shipment & pricing data to predict demand, quote
          smarter, and win global deals before anyone else.
        </p>

        {/* 🎥 Wistia Video (no extra white gap) */}
        <div
          className={`relative w-[90%] sm:w-[70%] md:w-[55%] lg:w-[50%] xl:w-[45%] aspect-video z-40 mb-[-120px] sm:mb-[-150px] transition-all duration-300 ${
            isPopupOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <wistia-player
            media-id="gy5qh1qibk"
            aspect="1.7777777777777777"
            className="w-full h-full rounded-xl shadow-2xl"
          ></wistia-player>
          
        </div>
      </section>

      {/* 🚀 BOOK DEMO SECTION */}
      <section className="w-full bg-white py-16 flex flex-col items-center text-center mt-[120px] sm:mt-[160px] px-4 sm:px-0">
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
          <span className="relative z-10">
            RESERVE MY FREE PERSONALIZED DEMO
          </span>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 -left-[50%] w-[50%] h-full
                      bg-white/40 transition-all duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                      [clip-path:polygon(0%_0%,55%_0%,100%_100%,25%_100%)]
                      group-hover:left-[120%] group-hover:opacity-0"
          />

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
    </>
  );
}
