import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Image imports (adjust filenames as needed)
import Slider1 from "../assets/slider-DB.jpg";
import Slider2 from "../assets/slider-DB.jpg";
import Slider3 from "../assets/slider-DB.jpg";
import Slider4 from "../assets/slider-DB.jpg";

export default function ExperienceCentreSection({ openPopup }) {
  const [activeBox, setActiveBox] = useState(8);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveBox((prev) => (prev >= 24 ? 1 : prev + 1));
    }, 150);
    return () => clearInterval(id);
  }, []);

  // ✅ Using imported images
  const images = [Slider1, Slider2, Slider3, Slider4];



  return (
    <section className="relative w-full overflow-hidden">
      {/* Top White Section */}
      <div className="bg-white text-center px-4 sm:px-10 lg:px-20 pt-10 sm:pt-14 pb-36 sm:pb-60 md:pb-72 relative">
        <h2 className="text-xl sm:text-6xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight">
          Step Into the Future of Trade at{" "}
          <span className="block sm:inline">Dubai World Trade Centre</span>
        </h2>
        <p className="text-gray-700 text-sm sm:text-lg leading-relaxed max-w-5xl mx-auto md:mb-[9%] mb-0">
          Feeling limited by conventional ways of finding global trade partners?
          The world’s top trade minds are coming together in Dubai uniting
          visionary names like RAKEZ and The Dollar Business, ICICI, and the
          trailblazing Experience Centre at Dubai World Trade Centre. Through
          these alliances, you can access cutting-edge analytics, tap into
          millions of verified global buyers and sellers, and experience
          data-driven growth like never before. Whether you’re an SME looking to
          expand or an enterprise seeking a competitive edge, these partnerships
          are designed to open doors and turn your ambitions into everyday
          victories. Trade, connect, and grow right where innovation lives.
        </p>

        {/* 🖼️ Image Carousel with Overlay (replaces video) */}
        <div
          className="absolute left-1/2 bottom-[-6rem] sm:bottom-[-8rem] md:bottom-[-10rem]
                     z-30 w-[92%] sm:w-[75%] md:w-[55%] aspect-video
                     rounded-lg sm:rounded-xl shadow-2xl overflow-hidden"
          style={{ transform: "translateX(-50%)" }}
        >
          <div className="relative w-full h-full">
            {/* Carousel */}
              {images.map((src, i) => (
                <div  className="relative">
                  <img
                    src={src}
                    alt={`Experience Centre ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient (to match old glossy look) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                </div>
              ))}

            {/* Glossy overlay like the old video box */}
            {/* <div className="absolute inset-0 bg-white/10 backdrop-blur-[ pointer-events-none"></div> */}

            {/* Optional subtle border glow */}
            {/* <div className="absolute inset-0 ring-1 ring-white/10 rounded-lg sm:rounded-xl"></div> */}
          </div>
        </div>
      </div>

      {/* Bottom Black Section */}
      <div className="bg-black pt-52 sm:pt-72 md:pt-48 pb-8 sm:pb-20 text-center text-white relative z-20">
        {/* CTA Button */}
        <button
          onClick={openPopup}
          className="relative group bg-[#1E79FF] text-white font-semibold rounded-lg 
                     px-5 sm:px-10 py-3 sm:py-5 text-base sm:text-2xl 
                     hover:scale-[1.03] hover:-translate-y-0.5 transition-transform duration-300 
                     shadow-[0_6px_20px_rgba(30,121,255,0.45),0_0_25px_rgba(30,121,255,0.35)]
                     hover:shadow-[0_10px_35px_rgba(30,121,255,0.6),0_0_55px_rgba(30,121,255,0.5)]
                     focus:outline-none focus:ring-4 focus:ring-[#1E79FF]/40
                     overflow-hidden"
        >
          <span className="relative z-10">Visit the Experience Centre at DWTC</span>

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
        <p className="mt-5 sm:mt-6 text-gray-400 text-xs sm:text-base max-w-sm sm:max-w-4xl mx-auto leading-relaxed px-4">
          Explore partnership-driven opportunities, witness innovation in
          action, and make your next big business move today.
        </p>

        {/* Progress Bar */}
        <div className="flex gap-[2px] sm:gap-[4px] justify-center mt-8 sm:mt-10 flex-wrap px-3">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className={`h-2.5 w-1.5 sm:h-4 sm:w-3 rounded-sm transition-colors duration-300 ${
                i < activeBox ? "bg-[#1E79FF]" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
