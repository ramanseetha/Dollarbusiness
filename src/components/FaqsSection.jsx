import React, { useState } from "react";
import footerLogo from "../assets/footer-logo.svg";
import arrowDown from "../assets/arrow.svg";

const faqs = [
  {
    q: "Is the platform easy to use?",
    a: "Not at all. If you can use a web browser, you’re already 90% there. Just log in, enter your product or HS code, and get actionable contacts and insights. No training required, and most users start closing real leads within the first week.",
  },
  {
    q: "How do I know the contacts are real, not just scraped from the web?",
    a: "All contacts are verified through our in-house data validation process and cross-checked with multiple trade data sources, ensuring you get only high-quality verified buyers and sellers.",
  },
  {
    q: "Can I actually track deals and buyer relationships, or will I get lost in data?",
    a: "Yes. The platform’s dashboard allows you to track each lead, manage communication history, and measure success with built-in performance analytics.",
  },
  {
    q: "I'm busy. Will this take up my whole day every time I log in?",
    a: "No. Our system is designed to save time by prioritizing your best opportunities and giving you quick filters to find relevant trade matches fast.",
  },
  {
    q: "What should I do if I have a question or need assistance?",
    a: "Our support team is always available through chat, call, or email. We’ll guide you through any step, from setup to using advanced analytics.",
  },
];

const FaqsSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white text-black py-4 sm:py-12 px-4 sm:px-6">
      {/* Heading */}
      <h2 className="text-[23px] sm:text-5xl font-bold text-center mb-10 sm:mb-12 leading-snug">
        FAQs: <span className="text-[#1C1C1C]">Real Talk</span>
      </h2>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-[#F7F7F7] rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center text-left px-4 sm:px-6 py-4 sm:py-5 font-semibold text-sm sm:text-base"
            >
              <span className="pr-4">{faq.q}</span>
              <img
                src={arrowDown}
                alt="Toggle"
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {openIndex === i && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-gray-700 text-sm sm:text-base leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="text-center mt-16 sm:mt-20 mb-32 md:mb-12 border-t border-gray-200 pt-10 sm:pt-12 pb-8">
        <div className="flex justify-center">
          <img
            src={footerLogo}
            alt="The Dollar Business"
            className="w-16 sm:w-24 mb-6"
          />
        </div>
        <p className="text-gray-600 text-xs sm:text-sm">
          All Rights Reserved © 2025 Getnos Pvt. Ltd.
        </p>
      </footer>
    </section>
  );
};

export default FaqsSection;
