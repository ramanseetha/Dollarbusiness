import React from "react";
import times from "../assets/times.svg";
import hindu from "../assets/hindu.svg";
import ielts from "../assets/ielts.svg";
import express from "../assets/express.svg";
import edtech from "../assets/edtech.svg";

const logos = [times, hindu, ielts, express, edtech];

const FeaturedIn = () => {
  return (
    <section className="bg-white pb-12 overflow-hidden">
      {/* Title */}
      <h2 className="text-center text-4xl font-semibold text-gray-900 mb-12 hey">
        Featured in
      </h2>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Track (moving horizontally) */}
        <div className="flex w-max animate-marquee space-x-14">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
          {/* Duplicate set for seamless infinite loop */}
          {logos.map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo}
              alt={`logo-dup-${index}`}
              className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
