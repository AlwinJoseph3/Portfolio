import { useState } from "react";
import { NavHashLink } from "react-router-hash-link"; // The magic import
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[100] px-6 md:px-12 py-6 flex justify-between items-center backdrop-blur-xl bg-black/10 border-b border-white/5">
      {/* Logo - Always goes to top of home */}
      <NavHashLink
        smooth
        to="/#"
        className="z-[110]"
        onClick={() => setIsOpen(false)}
      >
        <img
          src="/logo.png"
          alt="logo"
          className="h-8 md:h-10 w-auto object-contain transition-transform hover:scale-105 active:scale-95"
        />
      </NavHashLink>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <NavHashLink
          smooth
          to="/#works"
          className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-[#007AFF]"
        >
          Works
        </NavHashLink>
        <NavHashLink
          smooth
          to="/#contact"
          className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-[#007AFF]"
        >
          Contact
        </NavHashLink>
      </div>

      {/* Mobile Toggle & Menu logic... (same as before but use NavHashLink) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-[110] text-white"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div
        className={`fixed inset-0 h-screen w-full bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden transition-all ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <NavHashLink
          smooth
          to="/#works"
          onClick={() => setIsOpen(false)}
          className="text-4xl font-black text-white uppercase"
        >
          Works
        </NavHashLink>
        <NavHashLink
          smooth
          to="/#contact"
          onClick={() => setIsOpen(false)}
          className="text-4xl font-black text-white uppercase"
        >
          Contact
        </NavHashLink>
      </div>
    </nav>
  );
};

export default Navbar;
