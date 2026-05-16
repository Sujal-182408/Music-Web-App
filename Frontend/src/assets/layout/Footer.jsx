

// import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black/20 text-gray-300 py-10 border-t glow-border border-white/10">

      <div className="max-w-7xl mx-auto px-6 
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                      gap-8">

        {/* Logo / About */}
        <div className="text-center sm:text-left">
          <h2 className="text-white text-3xl font-semibold mb-3">
            LYRICS
            <span className="text-cyan-400 glow-text ml-2">WAYYY</span>
          </h2>

          <p className="text-sm text-white/60">
            Creating high-quality music experiences with powerful sound and modern design.
          </p>
        </div>

        {/* Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-white font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-cyan-400 transition">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition">Services</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="text-center sm:text-left">
          <h3 className="text-white font-medium mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li>Music Production</li>
            <li>Mixing & Mastering</li>
            <li>Live Sound</li>
            <li>Studio Recording</li>
          </ul>
        </div>

        {/* Social */}
        <div className="text-center sm:text-left">
          <h3 className="text-white font-medium mb-3">Follow Us</h3>

          <div className="flex justify-center sm:justify-start gap-4 text-sm">
             <ul className="space-y-2 text-sm text-white/60">
            <li><a href="https://on.soundcloud.com/KIMCEl5k8ohdrrD3YM" className="hover:text-cyan-400 transition">Sounds Cloud</a> </li>
            <li><a href="https://www.instagram.com/lyrics_wayyy?igsh=djlmajMwZXZ1anZk" className="hover:text-cyan-400 transition">Instagram</a> </li>
            <li> <a href="https://www.youtube.com/@LYRICS_WAYYY" className="hover:text-cyan-400 transition">YouTube</a> </li>
          </ul>
            
            
           
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/40 px-4">
        © 2026 LYRICS WAYYY. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;