import React, { useState, useEffect } from "react";
import quoteCircle from "../assets/quotes.svg";
import starImg from "../assets/Stars.svg";
import profile1 from "../assets/profile1.svg";
import profile2 from "../assets/profile2.svg";
import profile3 from "../assets/profile3.svg";

const testimonials = [
  {
    id: 1,
    text: "Shaheen is a good teacher for a person like me, and exporter who knows very little IT options. She cruised me to whatever I wanted and people like Shaheen will glitter for a company like Dollar Business!",
    name: "Thoykkat Muralidharan",
    img: profile1,
  },
  {
    id: 2,
    text: "The Dollar business portal is a reliable and comprehensive platform for anyone involved in international trade. It offers detailed trade data, HS code insights, and real-time analytics that help make informed decisions. The user interface is intuitive, and the support team is responsive. Highly recommended!",
    name: "Miral Gandhi",
    img: profile2,
  },
  {
    id: 3,
    text: "The demo session was excellent. Siva conducted it with great professionalism and efficiency and was extremely helpful throughout. Appreciate the support and looking forward to future interactions.",
    name: "Atul Patel",
    img: profile3,
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="bg-black text-white py-4 sm:py-10 px-4 sm:px-6 text-center relative overflow-hidden">
      {/* Title */}
      <h2 className="text-[23px] sm:text-4xl font-bold mb-10 sm:mb-16 leading-snug sm:leading-tight px-2">
        Join 51,000+ Businesses Already Accelerating Their Global Growth
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center max-w-6xl mx-auto transition-all duration-700">
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            className={`relative bg-white text-black rounded-lg sm:rounded-xl p-5 sm:p-8 shadow-lg transition-all duration-700 ease-in-out ${
              i === index
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-50 translate-y-3 scale-95"
            }`}
          >
            {/* Quote Icon */}
            <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2">
              <img
                src={quoteCircle}
                alt="quote"
                className="w-10 sm:w-14 h-10 sm:h-14"
              />
            </div>

            {/* Text */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-base leading-relaxed">
              {t.text}
            </p>

            {/* Stars */}
            <div className="flex justify-center sm:justify-start mt-4 sm:mt-5">
                  <img
                
                    src={starImg}
                    alt="star"
                    className="w-4 h-4 sm:w-40"
                  />
            </div>

            {/* Profile */}
            <div className="flex items-center justify-center sm:justify-start gap-3 mt-4 sm:mt-5">
              <img
                src={t.img}
                alt={t.name}
                className="w-9 h-9 sm:w-12 sm:h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-bold text-sm sm:text-base">{t.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 sm:gap-6 mt-10 sm:mt-12">
        <button
          onClick={prevSlide}
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-800 transition text-lg"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-800 transition text-lg"
        >
          →
        </button>
      </div>
    </section>
  );
}
