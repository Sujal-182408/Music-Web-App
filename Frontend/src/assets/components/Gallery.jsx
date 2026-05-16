

// import { PlayCircleIcon } from "lucide-react";

// const Gallery = () => {
//   return (
//     <section
//       id="playlist"
//       className="min-h-screen bg-white/2 overflow-hidden text-white glow-border"
//     >
//       {/* Heading */}
//       <h1 className="text-white/50 glow-text font-bold uppercase tracking-widest text-3xl sm:text-5xl lg:text-6xl m-5 text-center font-['delius']">
//         music
//         <span className="text-cyan-400"> Gallery</span>
//       </h1>

//       {/* 📱 MOBILE (Scrollable Spotify Style) */}
//       <div className="lg:hidden flex flex-col gap-4 px-4 py-6 
//       h-[75vh] overflow-y-auto scroll-smooth no-scrollbar">

//         {[...Array(10)].map((_, i) => (
//           <div
//             key={i}
//             className="group flex items-center gap-4 glass glow-border rounded-xl p-2 hover:scale-[1.02] transition-all"
//           >
//             {/* Image */}
//             <img
//               src="/abi.jpg"
//               alt="music"
//               className="w-16 h-16 rounded-lg object-cover"
//             />

//             {/* Text */}
//             <div className="flex-1">
//               <h3 className="text-white/70 text-sm tracking-wide uppercase">
//                 NCS
//               </h3>
//               <p className="text-white/40 text-xs">
//                 non-copyright music playlist
//               </p>
//             </div>

//             {/* Play Icon */}
//             <PlayCircleIcon
//               className="text-white/40 group-hover:text-cyan-300 group-hover:scale-110 transition-all"
//               size={28}
//             />
//           </div>
//         ))}

//       </div>


// {/* 💻 DESKTOP - SPOTIFY STYLE */}
// <div className="hidden lg:grid grid-cols-5 gap-6 p-10 bg-black/2">

//   {[...Array(10)].map((_, i) => (
//     <div
//       key={i}
//       className="group bg-[#181818] p-4 rounded-xl hover:bg-[#282828] transition-all duration-300 cursor-pointer relative"
//     >
      
//       {/* Image */}
//       <div className="relative">
//         <img
//           src="/abi.jpg"
//           alt=""
//           className="w-full h-48 object-cover glow-border rounded-lg"
//         />

//         {/* ▶ Play Button */}
//         <button className="absolute bottom-3 right-3 bg-cyan-400 h-8 w-8 rounded-full  opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300 shadow-lg">
//           ▶
//         </button>
//       </div>

//       {/* Title */}
//       <h3 className="text-white text-base font-semibold mt-4 truncate">
//         NCS Playlist
//       </h3>

//       {/* Description */}
//       <p className="text-gray-400 text-sm mt-1 line-clamp-2">
//         Here you find only non-copyright songs
//       </p>

      
    
//     </div>
//   ))}
// </div>

    
//     </section>
//   );
// };

// export default Gallery;

import { PlayCircleIcon } from "lucide-react";

const songs = [
  {
    title: "NCS Playlist",
    desc: "Here you find only non-copyright songs",
    image: "/image/img1.jpg",
  },
  {
    title: "Chill Beats",
    desc: "Relaxing lo-fi and chill music",
    image: "/image/img2.jpg",
  },
  {
    title: "Gaming Mix",
    desc: "Best energetic gaming tracks",
    image: "/image/img3.jpg",
  },
  {
    title: "Night Vibes",
    desc: "Late night aesthetic songs",
    image: "/image/img4.jpg",
  },
  {
    title: "Workout Hits",
    desc: "Powerful workout playlist",
    image: "/image/img5.jpg",
  },
  {
    title: "Love Songs",
    desc: "Romantic songs collection",
    image: "/image/img6.jpg",
  },
  {
    title: "Trap Nation",
    desc: "Trending trap music playlist",
    image: "/image/img7.jpg",
  },
  {
    title: "Phonk Mix",
    desc: "Drift phonk and bass boosted",
    image: "/image/img8.jpg",
  },
  {
    title: "Sad Songs",
    desc: "Emotional and soft tracks",
    image: "/image/img9.jpg",
  },
  {
    title: "Party Hits",
    desc: "Best party music collection",
    image: "/image/img10.jpg",
  },
];

const Gallery = () => {
  return (
    <section
      id="playlist"
      className="min-h-screen bg-white/2 overflow-hidden text-white glow-border"
    >
      {/* Heading */}
      <h1 className="text-white/50 glow-text font-bold uppercase tracking-widest text-3xl sm:text-5xl lg:text-6xl m-5 text-center font-['delius']">
        music
        <span className="text-cyan-400"> Gallery</span>
      </h1>

      {/* 📱 MOBILE */}
      <div
        className="lg:hidden flex flex-col gap-4 px-4 py-6 
        h-[75vh] overflow-y-auto scroll-smooth no-scrollbar"
      >
        {songs.map((song, i) => (
          <div
            key={i}
            className="group flex items-center gap-4 glass glow-border rounded-xl p-2 hover:scale-[1.02] transition-all"
          >
            {/* Image */}
            <img
              src={song.image}
              alt={song.title}
              className="w-16 h-16 rounded-full glow-border animate-spin [animation-duration:100s] [animation-timing-function:linear] object-cover "
            />

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-white/70 text-sm tracking-wide uppercase">
                {song.title}
              </h3>

              <p className="text-white/40 text-xs">
                {song.desc}
              </p>
            </div>

            {/* Play Icon */}
            <PlayCircleIcon
              className="text-white/40 group-hover:text-cyan-300 group-hover:scale-110 transition-all"
              size={28}
            />
          </div>
        ))}
      </div>

      {/* 💻 DESKTOP */}
      <div className="hidden lg:grid grid-cols-5 gap-6 p-10 bg-black/2">
        {songs.map((song, i) => (
          <div
            key={i}
            className="group bg-[#181818] p-4 rounded-xl hover:bg-[#282828] transition-all duration-300 cursor-pointer relative"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={song.image}
                alt={song.title}
                className="w-full h-48 object-cover glow-border rounded-lg"
              />

              {/* ▶ Play Button */}
              <button className="absolute bottom-3 right-3 bg-cyan-400 h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300 shadow-lg cursor-pointer">
                ▶
              </button>
            </div>

            {/* Title */}
            <h3 className="text-white text-base font-semibold mt-4 truncate">
              {song.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mt-1 line-clamp-2">
              {song.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;