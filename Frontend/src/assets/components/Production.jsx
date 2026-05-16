
import React from "react";

const Production = () => {
  return (
    <section
      id="productions"
      className="relative min-h-screen glow-border flex items-center overflow-hidden px-4  sm:px-6"
    >
      <h1
        className="text-white/60 uppercase tracking-[5px] sm:tracking-[10px] lg:tracking-[15px] 
text-2xl sm:text-4xl lg:text-5xl font-extralight 
text-center 
absolute top-4 left-1/2 -translate-x-1/2 
lg:top-5"
      >
        Music{" "}
        <span className="text-cyan-400 glow-text font-bold">Production</span>
      </h1>
      {/* 🔥 MOBILE LAYOUT */}
      <div className="w-full lg:hidden flex flex-col items-center text-center gap-6 py-10">
        {/* Image + Overlay Text */}
        <div className="relative w-full flex justify-center">
          <img
            src="/LW.png"
            alt="LYRICS-WAYYY"
            className="w-70 sm:w-full   mix-blend-screen    opacity-5"
          />

          {/* 🔥 OVERLAY TEXT */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-white text-3xl sm:text-4xl font-['delius']">
              NEED
            </p>
            <p className="text-cyan-400 glow-text text-3xl sm:text-4xl font-bold font-['kanit'] tracking-widest">
              QUALITY SOUNDS ?
            </p>
          </div>
        </div>

        {/* Paragraph */}
        <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md">
          "Experience music the way it’s meant to be heard—crystal clear, rich,
          and deeply immersive 🎧✨. Every beat, every note, and every detail is
          delivered with precision, bringing your favorite tracks to life like
          never before."
        </p>

        {/* Subtext */}
        <p className="text-white/60 text-sm sm:text-base max-w-md">
          We deliver the very best services and amenities for signed artists and
          independent musicians.
        </p>

        {/* Button */}
        <button className="text-white border-2 h-12 w-55 tracking-widest rounded-3xl pl-2 pr-2 glow-border glow-text hover:scale-105 transition-all hover:text-cyan-400">
          BOOK SESSION NOW
        </button>
      </div>

      {/* 💻 DESKTOP (UNCHANGED) */}
      <div className="hidden lg:block">
        <img
          src="/LW.png"
          alt="drum-stick"
          className="absolute w-200 h-80 top-5 left-100 right-1/2 opacity-10 mix-blend-screen"
        />

        <div className="absolute left-60 w-250 text-center top-30">
          <p className="text-white text-xl">
            "Experience music the way it’s meant to be heard—crystal clear,
            rich, and deeply immersive 🎧✨. Every beat, every note, and every
            detail is delivered with precision, bringing your favorite tracks to
            life like never before. Feel the depth of bass, the clarity of
            vocals, and the balance of sound that transforms every listen into a
            premium audio experience 🎶🔥."
          </p>
        </div>

        <div>
          <div className="h-100 w-60 bg-cyan-500 absolute left-70 bottom-0 glow-border">
            <p className='absolute right-0 top-10 glow-text font-["delius"] text-7xl'>
              NEED <br />
              <span className='text-7xl font-["kanit"] font-bold tracking-widest'>
                &nbsp; QUA
              </span>
            </p>
          </div>

          <p className='text-cyan-400 glow-text text-7xl font-bold font-["kanit"] absolute left-130 bottom-54'>
            LITY SOUNDS ?
          </p>

          <span className="text-lg text-white/60 font-normal leading-5 absolute bottom-35 left-132 tracking-wider opacity-60">
            We deliver the very best services and ammenties signed artists{" "}
            <br />
            and indepemendent musicians.
            <button className="text-white border-2 h-15 w-60 rounded-2xl tracking-widest glow-border glow-text absolute right-0 top-20 hover:scale-105 transition-all hover:text-cyan-400">
              BOOK SESSION NOW
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Production;
