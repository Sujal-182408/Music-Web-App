
import React from "react";

const Hero = () => {
  const bars = new Array(16).fill(0);

  return (
    <div id="home" className="glow-border overflow-hidden">

      {/* Container */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen bg-black flex items-center justify-center">

        {/* Background Image */}
        <img
          src="/banner.jpg"
          alt="banner"
          className="absolute w-full h-full object-cover blur-sm opacity-40"
        />

        {/* Animation styles */}
        <style>
          {`
            @keyframes wave {
              0%, 100% { transform: scaleY(0.4); }
              50% { transform: scaleY(1.6); }
            }
          `}
        </style>

        {/* Center Content */}
        <div className="relative flex flex-col items-center text-center px-4">

          {/* 🔥 Wave ABOVE text */}
          <div className="flex gap-1 sm:gap-1.5 mb-4">
            {bars.map((_, i) => (
              <div
                key={i}
                className="w-0.75 sm:w-1 md:w-1.25 h-4 sm:h-5 bg-cyan-400 rounded-sm"
                style={{
                  animation: "wave 1s ease-in-out infinite",
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>

          {/* Title */}
          <p className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl tracking-[3px] sm:tracking-[5px] font-['delius']">
            LYRICS WAYYY
            <span className="block text-sm sm:text-lg md:text-xl tracking-[10px] sm:tracking-[20px] opacity-20">
              STUDIOS
            </span>
          </p>

          {/* Description */}
          <p className="mt-4 text-white/40 text-xs sm:text-sm md:text-base max-w-xs sm:max-w-md md:max-w-xl mx-auto leading-relaxed">
            Top Recording Studios, Mixing & Mastering Engineers, Mixing &
            Mastering Services, Music Production, Vocal Tuning, and more. We
            help artists achieve their musical vision.
          </p>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 p-5 text-center sm:text-left">
        
        <h3 className="text-white/70 tracking-wide font-semibold font-['delius'] text-sm sm:text-base">
          So ask questions. get answer, know. <br className="hidden sm:block" /> we are here to help.
        </h3>

        <span className="hidden sm:block text-white/30 border h-10"></span>

        <p className="text-white/30 text-sm sm:text-base">
          Call Us <br /> (+91) 123-456-7890
        </p>

        <span className="hidden sm:block text-white/30 border h-10"></span>

        <p className="text-white/30 text-sm sm:text-base">
          Email Us <br /> joy@company.com
        </p>
      </div>
    </div>
  );
};

export default Hero;