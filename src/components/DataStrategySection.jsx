import React, { useEffect, useState } from "react";
import tickIcon from "../assets/yellow-tick.svg"; // ✅ your circle tick icon

const DataStrategySection = ({ openPopup }) => {
  const [activeBox, setActiveBox] = useState(1);

  // Animate the progress bar
  useEffect(() => {
    const id = setInterval(() => {
      setActiveBox((prev) => (prev >= 24 ? 1 : prev + 1));
    }, 150);
    return () => clearInterval(id);
  }, []);

  const dataBlocks = [
    {
      id: 1,
      title: "Trade, Country, and Port Analysis",
      description:
        "Discover top importing/exporting nations, price movements, shipment volumes, and competitive trends with a single search.",
      videoPosition: "right",
      wistiaId: "bttx95765y",
    },
    {
      id: 2,
      title: "Search by CAS",
      description:
        "Use unique chemical identifiers to find verified buyers and sellers with precise shipment and financial data. This ensures accurate targeting and reveals hidden buyer-seller networks and key decision-makers traditional methods miss.",
      videoPosition: "left",
      wistiaId: "n3u4zyvr4w",
    },
    {
      id: 3,
      title: "AI-Powered Predictive Intelligence",
      description:
        "Leverage AI-powered predictive models to forecast demand shifts, pricing changes, and emerging buyer markets weeks ahead. This real-time intelligence helps you identify growth opportunities, reduce risks, and make smarter, data-driven trade decisions.",
      videoPosition: "right",
      wistiaId: "s0sio31639",
      
    },
  ];

  return (
    <section className="bg-black py-16 sm:py-20 px-4 sm:px-6 text-white">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-5xl md:text-6xl font-extrabold mb-8 sm:mb-28">
        Turn Data into Strategy. Instantly
      </h2>

      {/* Data Blocks */}
      <div className="space-y-16 sm:space-y-20 max-w-7xl mx-auto">
        {dataBlocks.map((block) => (
          <div
            key={block.id}
            className={`flex flex-col ${
              block.videoPosition === "right"
                ? "lg:flex-row"
                : "lg:flex-row-reverse"
            } items-center bg-white text-gray-900 rounded-2xl overflow-hidden shadow-lg border-[2px] border-[#155DFC]`}
          >
            {/* Text Section */}
            <div className="w-full lg:w-1/2 p-6 sm:p-10">
              <h3 className="text-2xl sm:text-3xl max-w-md mx-auto font-bold mb-3 point">
                {block.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-lg max-w-md mx-auto leading-relaxed">
                {block.description}
              </p>
            </div>

            {/* Wistia Video */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe
                  src={`https://fast.wistia.net/embed/iframe/${block.wistiaId}`}
                  title={`Wistia Video ${block.id}`}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10 sm:mt-16">
<button
  onClick={openPopup}
  className="relative group bg-[#1E79FF] text-white font-semibold rounded-lg 
             px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-2xl 
             hover:scale-[1.03] hover:-translate-y-0.5 transition-transform duration-300 
             shadow-[0_4px_25px_rgba(30,121,255,0.4),0_0_25px_rgba(30,121,255,0.25)]
             hover:shadow-[0_8px_30px_rgba(30,121,255,0.55),0_0_40px_rgba(30,121,255,0.4)]
             overflow-hidden"
>
  {/* Button Label */}
  <span className="relative z-10">
    RESERVE MY FREE PERSONALIZED DEMO
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
        <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Unlock predictive insights built for explosive global trade growth.
        </p>

        {/* Progress Bar */}
        <div className="flex gap-[3px] sm:gap-[4px] justify-center mt-6 sm:mt-8">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className={`h-3 w-2 sm:h-5 sm:w-3 rounded-sm transition-colors duration-300 ${
                i < activeBox ? "bg-[#1E79FF]" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-gray-300 text-[9px] sm:text-base font-medium">
        <div className="flex items-center gap-2 text-center max-w-sm md:max-w-2xl">
          <img src={tickIcon} alt="tick" className="w-3 sm:w-5" />
          <span>
            Rated by 51,000+ businesses for ease of use and actionable
            intelligence
          </span>
        </div>
      </div>
    </section>
  );
};

export default DataStrategySection;
