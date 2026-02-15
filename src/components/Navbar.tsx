import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Menu, X, Home, Briefcase, Mail, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/#", icon: <Home size={18} /> },
    { name: "About", to: "/#about", icon: <User size={18} /> }, // Added About link
    { name: "Works", to: "/#works", icon: <Briefcase size={18} /> },
    { name: "Contact", to: "/#contact", icon: <Mail size={18} /> },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-6 left-1/2 z-[100] w-[90%] max-w-[400px] md:max-w-[500px] h-14 md:h-16 flex items-center justify-between px-2 md:px-2 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-lg shadow-black/50"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex w-full items-center justify-between pl-4 pr-2">
            {/* Logo */}
            <HashLink
              smooth
              to="/#"
              className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform"
            >
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain brightness-0 invert" />
            </HashLink>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1 bg-zinc-900/50 p-1 rounded-full border border-white/5">
              {navLinks.map((link) => (
                <HashLink
                  key={link.name}
                  smooth
                  to={link.to}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wide text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  {link.name}
                </HashLink>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center bg-zinc-900 rounded-full text-white border border-white/10 active:scale-95 transition-all"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-4 right-4 z-[99] bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 md:hidden flex flex-col gap-2 shadow-2xl"
          >
            {navLinks.map((link) => (
              <HashLink
                key={link.name}
                smooth
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 p-4 bg-black/40 rounded-2xl text-white font-bold hover:bg-white/10 transition-all border border-transparent hover:border-white/5"
              >
                <span className="p-2 bg-[#007AFF]/20 rounded-full text-[#007AFF]">
                    {link.icon}
                </span>
                {link.name}
              </HashLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
