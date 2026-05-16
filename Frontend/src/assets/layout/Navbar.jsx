

import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import { Button } from "../utility/Button";

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#explore lw", label: "EXPLORE LW" },
  { href: "#playlist", label: "PLAYLISTS"} ,
  { href: "#productions", label: "PRODUCTIONS" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
      <header className={`fixed top-0 left-0 right-0 h-20 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} bg-transparent py-5 z-50`}>
      <nav className="container   mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="glass shadow-sm shadow-cyan-400 rounded-full p-1 w-12 h-12  transition-all    bg-[url('/LW.png')] bg-contain    bg-center    bg-no-repeat   mix-blend-screen
          animate-spin [animation-duration:70s] [animation-timing-function:linear] object-cover
          "
        >
          {/* L<span className="text-[#92908f] font-[delius] "> .</span>W */}
        </a>
        {/* Desktop NAVBAR */}
        <div className="hidden md:flex items-center justify-center  gap-1">
          <div className="glass-strong rounded-full px-3 py-1 flex items-center shadow-sm shadow-cyan-400 gap-2">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-[#9b9ea0] hover:text-[#ffffff] rounded-full hover:bg-[#5f56508a]/30"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* CTA Button */}
       <div className="hidden md:block">
  <Button
    size="sm"
    onClick={() => {
      window.location.href = "/signin";
    }}
  >
    sign in{" "}
  </Button>
</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#f0f2f5] cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {isMobileMenuOpen && (
        <div className="md:hidden m-5  animate-fade-in rounded-2xl">
          <div className="container mx-auto glass-strong glow-border  bg-black/75 px-6 py-6 flex rounded-2xl flex-col items-center  gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-[#7a8491] glow-text hover:text-[#ffffff] hover:bg-[#5f56508a]/30 rounded-full px-4 py-2 transition-all"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                document
                  .getElementById("signin")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              sign in
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

