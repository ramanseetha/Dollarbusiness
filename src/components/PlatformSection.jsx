import React, { useEffect, useState } from "react";

const steps = [
  {
    id: "01",
    title: "Search",
    description:
      "Enter HS Code, CAS number, or product name to discover worldwide trade opportunities.",
  },
  {
    id: "02",
    title: "Select",
    description:
      "Identify the right markets and top players using real-time shipment data and insights.",
  },
  {
    id: "03",
    title: "Analyze",
    description:
      "Compare pricing, volumes, and country trends with detailed analytics and Nexus maps.",
  },
  {
    id: "04",
    title: "Connect",
    description:
      "Access verified buyer/seller profiles, financials, and key decision-makers instantly.",
  },
];

const PlatformSection = ({ openPopup }) => {
  const [activeBox, setActiveBox] = useState(1);

  // Animate progress bar smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBox((prev) => (prev >= 24 ? 1 : prev + 1));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f8f8f8df] py-12 sm:py-20 text-center px-4 sm:px-6">
      {/* Title */}
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4 sm:mb-6">
        Finding Buyers and Sellers Across the{" "}
        <br className="hidden sm:block" />
        Globe Is Now Effortless
      </h2>

      {/* Subtitle */}
      <p className="text-base sm:text-2xl font-semibold text-gray-900 mb-8 sm:mb-12">
        One intelligent platform to:
      </p>

      {/* Wistia Video Embed */}
      <div className="max-w-4xl mx-auto mb-12 sm:mb-16 rounded-xl overflow-hidden shadow-lg">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
          <iframe
            src="https://fast.wistia.net/embed/iframe/0d0rdjnyg9"
            title="Wistia Video"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
          
        </div>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="text-left bg-white sm:bg-transparent p-5 sm:p-0 rounded-xl sm:rounded-none shadow-md sm:shadow-none"
          >
            <h3 className="text-3xl sm:text-6xl font-bold text-gray-800 mb-2 point">
              {step.id}
            </h3>
            <h4 className="text-xl sm:text-3xl font-semibold text-gray-900 mb-2 point">
              {step.title}
            </h4>
            <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10 sm:mt-[50px] max-w-3xl mx-auto ">
<button
  onClick={openPopup}
  className="relative group bg-[#1E79FF] text-white font-semibold rounded-lg 
             px-6 sm:px-10 py-4 sm:py-5 text-[12px] sm:text-2xl uppercase
             hover:scale-[1.03] hover:-translate-y-0.5 transition-transform duration-300 
             shadow-[0_4px_25px_rgba(30,121,255,0.4),0_0_25px_rgba(30,121,255,0.25)]
             hover:shadow-[0_6px_25px_rgba(30,121,255,0.55),0_0_40px_rgba(30,121,255,0.4)]
             overflow-hidden"
>
  {/* Label */}
  <span className="relative z-10">
    Unlock Verified Buyers Today — Start Closing Deals
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
        <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
          Fortune 500 companies rely on our data; Don’t get left behind.
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

export default PlatformSection;
