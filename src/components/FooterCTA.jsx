import React, { useEffect, useState } from "react";
import stopwatchIcon from "../assets/stopwatch-icon.png";

const Footer = ({ openPopup }) => {
  const [timeLeft, setTimeLeft] = useState(5 * 60 + 0); // 5 min 0 sec
  const [showFooter, setShowFooter] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ⏳ Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time as MM : SS
  const formatTime = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${m} : ${s}`;
  };

  // 📜 Show footer after scrolling down 300px and when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (y > 300 && y > lastScrollY) {
        // Scrolling down past 300px → show footer
        setShowFooter(true);
      } else if (y < lastScrollY) {
        // Scrolling up → hide footer
        setShowFooter(false);
      }

      setLastScrollY(y);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <footer
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 w-full transition-all duration-500 z-50
        ${showFooter ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"}`}
      aria-live="polite"
    >
      <div className="mx-auto max-w-screen-2xl px-2 sm:px-4">
        <div
          className="bg-gradient-to-r from-[#DCAF26] to-[#DCAF26] text-white
                     rounded-2xl shadow-2xl backdrop-blur-sm
                     px-4 py-2 sm:px-6 sm:py-5 lg:px-8 lg:py-4"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT: Timer */}
            <div className="flex items-center justify-center gap-3">
              <img
                src={stopwatchIcon}
                alt="Stopwatch"
                className="w-6 h-6 sm:w-12 sm:h-12"
              />
              <span className="font-extrabold text-1xl sm:text-4xl lg:text-4xl leading-none">
                {formatTime(timeLeft)}
              </span>
            </div>

            {/* MIDDLE: Message */}
            <div className="text-center lg:text-center">
              <div className="uppercase font-bold tracking-wide text-[11px] sm:text-base lg:text-xl">
                LIVE buyer contacts - Predictive shipment alerts
              </div>
              <div className="hidden sm:block text-white/90 text-xs sm:text-sm lg:text-sm mt-1">
              One platform. Zero guesswork. 51,000+ businesses can’t be wrong.
              </div>
            </div>

            {/* RIGHT: CTA */}
            <div className="flex justify-center lg:justify-end">
              <button onClick={openPopup}
                className="group relative isolate overflow-hidden
                           inline-flex items-center justify-center
                           rounded-full px-8 sm:px-10 lg:px-8 py-3 sm:py-4 lg:py-3
                           text-[11px] sm:text-lg lg:text-lg font-bold tracking-wide
                           text-white border border-white
                           bg-gradient-to-r from-[#155DFC] via-[#155DFC] to-[#155DFC]
                           shadow-[0_8px_25px_rgba(255,255,255,0.35)]
                           hover:shadow-[0_10px_30px_rgba(255,255,255,0.45)]
                           transition-transform duration-300 hover:-translate-y-0.5"
                aria-label="Book Your Discovery Call Now"
              >
                <span className="relative z-10">
                  BOOK YOUR EXCLUSIVE EX–IM DEMO TODAY
                </span>
                <span
                  className="pointer-events-none absolute top-0 -left-[60%] w-[50%] h-full
                             bg-white/35
                             transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                             [clip-path:polygon(0%_0%,55%_0%,100%_100%,25%_100%)]
                             group-hover:left-[130%] group-hover:opacity-0"
                />
                <span
                  className="pointer-events-none absolute inset-0 bg-white/10
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-500"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



let a = [22,44,55,66,77,88,44,55]
  for (let i=0;i<a.length;i++){
    console.log(a[i]);
  }