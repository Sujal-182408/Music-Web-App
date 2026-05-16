
import React from "react";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="relative min-h-screen flex items-center overflow-hidden glow-border px-4 sm:px-6"
      >

        {/* Heading */}
        <h1
          className="text-white/50 uppercase tracking-widest 
          text-4xl sm:text-6xl md:text-7xl lg:text-8xl 
          absolute top-6 sm:top-10 
          right-4 sm:right-10 lg:right-50 
          font-extralight font-['open sans']"
        >
          about
          <span className="uppercase font-bold text-cyan-400 glow-text">
            {" "}us
          </span>
        </h1>

        {/* 🔥 MOBILE IMAGE SECTION */}
        <div className="flex lg:hidden w-full justify-center mb-90 mr-30">
          <div className="border-cyan-300 border-2 glow-border bg-cyan-500 w-55 h-85 relative rounded-2xl ">
            <span className="border-2 border-black/60 rounded-lg absolute left-4 top-16 w-[150%] h-[65%]">
              <img
                src="/abi.jpg"
                alt="image"
                className="w-120 h-full object-cover glass glow-border rounded-lg"
              />
            </span>
          </div>
        </div>

        {/* Text Section */}
        <div
          className="absolute 
          top-[55%] sm:top-[50%] lg:top-1/5 
          left-1/2 lg:left-auto 
          right-auto lg:right-1/12 
          transform -translate-x-1/2 lg:translate-x-0
          w-[90%] sm:w-[80%] md:w-[65%] lg:w-100 
          h-auto text-center lg:text-left"
        >
          <span className="text-white/30 text-xs text-center sm:text-sm md:text-base block leading-relaxed sm:leading-loose">
            🎵 Music is more than just sound—it’s a feeling that connects hearts and tells stories beyond words. From soothing melodies to high-energy beats, it has the power to lift your mood, spark creativity, and bring people together 🌍❤️. <br />
            Whether you're relaxing, working, or celebrating, music becomes the perfect companion for every moment of life. Let the rhythm guide you, the lyrics inspire you. <br />
            the vibe define your journey 🎧✨. Turn up the volume and let every beat create unforgettable memories 🎶🔥. Dive into a world where every note speaks, and every song becomes a part of your story 🎼💫.
          </span>

          {/* Button */}
          <button
            className="border-2 border-white/20 
            mt-3 lg:absolute lg:-bottom-1/5
            lg:right-15 
            text-sm sm:text-lg lg:text-xl 
            text-white/40 hover:text-white transition-all duration-500 
            h-12 sm:h-16 lg:h-20 rounded-2xl tracking-widest glow-border glow-text
            w-full sm:w-64 lg:w-80 glow-border"
          >
            <span className="uppercase tracking-[4px] sm:tracking-[6px] lg:tracking-[8px]">
              learn more...
            </span>
          </button>
        </div>

        {/* 💻 DESKTOP IMAGE (original layout unchanged) */}
        <div
          className="hidden lg:flex items-center justify-center absolute glow-border 
          top-[55%] sm:top-[40%] lg:top-3 
          left-1/2 lg:left-1/6 
          transform -translate-x-1/2 lg:translate-x-0"
        >
          <div>
            <div className="border-cyan-300 border-2 h-200 w-120 glow-border bg-cyan-500">
              <span className="border-2 border-black/60 rounded-lg left-15 h-85 w-155 top-1/3 absolute">
                <img
                  src="/abi.jpg"
                  alt="image"
                  className="h-82 w-152 absolute top-1 right-1 glass glow-border hover:scale-105 rounded-lg transition-all duration-700"
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* <hr className="border-white/20" /> */}
    </>
  );
};

export default About;