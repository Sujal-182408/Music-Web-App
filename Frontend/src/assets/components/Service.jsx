
import React from "react";
import {
  Mic,
  SlidersHorizontal,
  Turntable,
  Video,
  KeyboardMusic,
} from "lucide-react";

const Service = () => {
  return (
    <section
      id="explore lw"
      className="relative min-h-screen bg-white/2 flex items-center overflow-hidden text-white glow-border px-4 sm:px-6 lg:px-0"
    >
      <div className="w-full">

        {/* Heading */}
        <h1 className='uppercase font-["lato"] tracking-[10px] sm:tracking-[15px] text-3xl sm:text-5xl lg:text-6xl font-extralight text-center lg:absolute lg:top-5 lg:left-1/3'>
          our{" "}
          <span className='font-bold text-cyan-300 glow-text tracking-[10px] sm:tracking-[15px]'>
            services
          </span>
        </h1>

        {/* Description */}
        <p className="text-center text-white/30 w-full sm:w-[90%] md:w-[70%] mx-auto mt-6 lg:w-250 lg:absolute lg:top-30 lg:left-1/5">
          We bring you a complete music experience designed to match every vibe
          and moment 🎶✨. From streaming high-quality tracks to discovering
          trending hits, our platform ensures you never miss the rhythm. Create
          and customize your playlists, explore different genres, and enjoy
          seamless listening anytime, anywhere 🌍🎵.
        </p>

        {/* 🔥 MOBILE ICON GRID (ONLY MOBILE) */}
        <div className="grid grid-cols-2 gap-6 mt-10 place-items-center lg:hidden">

          <div className="flex flex-col items-center">
            <Mic className="text-cyan-300 glow-border rounded-full size-14 p-2" />
            <span className="text-white/40 text-xs mt-1">RECORDING</span>
          </div>

          <div className="flex flex-col items-center">
            <SlidersHorizontal className="text-cyan-300 glow-border rounded-full size-14 p-2" />
            <span className="text-white/40 text-xs mt-1">MIXING</span>
          </div>

          <div className="flex flex-col items-center">
            <Turntable className="text-cyan-300 glow-border rounded-full size-14 p-2" />
            <span className="text-white/40 text-xs mt-1">MASTERING</span>
          </div>

          <div className="flex flex-col items-center">
            <KeyboardMusic className="text-cyan-300 glow-border rounded-full size-14 p-2" />
            <span className="text-white/40 text-xs mt-1">PRODUCTION</span>
          </div>

          <div className="flex flex-col items-center col-span-2">
            <Video className="text-cyan-300 glow-border rounded-full size-14 p-2" />
            <span className="text-white/40 text-xs mt-1">VIDEOGRAPHY</span>
          </div>
        </div>

        {/* 💻 DESKTOP ICONS (UNCHANGED) */}
        <div className="hidden lg:flex">
          <div className="flex items-center gap-15 justify-center left-1/10 -top-5 relative ">
            <Mic className="text-cyan-300 glow-border rounded-full size-50 p-2 hover:scale-105 transition-all" />
            <span className="absolute left-15 -bottom-15 text-white/40 tracking-wider">
              RECORDING
            </span>

            <SlidersHorizontal className="size-50 text-cyan-300 glow-border p-5 rounded-full hover:scale-105 transition-all" />
            <span className="absolute left-80 -bottom-15 text-white/40 tracking-[3px]">
              MIXING
            </span>

            <Turntable className="size-50 text-cyan-300 glow-border p-5 rounded-full hover:scale-105 transition-all" />
            <span className="absolute right-1/2.5 -bottom-15 text-white/40 tracking-wider">
              MASTERING
            </span>

            <KeyboardMusic className="size-50 text-cyan-300 glow-border p-5 rounded-full hover:scale-105 transition-all" />
            <span className="absolute right-1/4 -bottom-15 text-white/40 tracking-wider">
              PRODUCTION
            </span>

            <Video className="size-50 text-cyan-300 glow-border p-5 rounded-full hover:scale-105 transition-all" />
            <span className="absolute right-10 -bottom-15 text-white/40 tracking-widest">
              VIDEOGRAPHY
            </span>
          </div>
        </div>

        {/* 💰 Pricing Box */}
        <div className="mt-10 w-full sm:w-[90%] md:w-[80%] mx-auto lg:w-150 lg:h-40 rounded-2xl glow-border border-2 border-cyan-200 glow-border lg:absolute lg:left-1/3 lg:bottom-1/26 p-4 lg:p-0">
          
          <div className="lg:absolute lg:top-1/6  lg:left-5 space-y-2  text-sm  sm:text-base">
            
            <p className="flex justify-between items-center gap-50  text-white/40">
              Mixing Beats & Vocal :
              <span className="text-white font-bold">$150</span>
            </p>

            <p className="flex justify-between items-center  text-white/40">
              Mixing Full Stems :
              <span className="text-white font-bold">$250</span>
            </p>

            <p className="flex justify-between  items-center  text-white/40">
              Mixing & Mastering Beats & Vocals :
              <span className="text-white font-bold">$210</span>
            </p>

            <p className="flex justify-between items-center  text-white/40">
              Complete Release-Ready Package :
              <span className="text-white font-bold">$320</span>
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Service;