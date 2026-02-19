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
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-full object-contain brightness-0 invert"
            />
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
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-2xl md:hidden flex flex-col p-6 pt-24"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-full text-white border border-white/10"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <HashLink
                    smooth
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-6 p-5 bg-zinc-900/50 rounded-3xl text-2xl font-black font-display text-white uppercase tracking-tighter hover:bg-[#007AFF] transition-all border border-white/5 active:scale-95"
                  >
                    <span className="p-3 bg-[#007AFF]/20 rounded-2xl text-[#007AFF] group-hover:text-white transition-colors">
                      {link.icon}
                    </span>
                    {link.name}
                  </HashLink>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pb-10 text-center">
              <p className="text-zinc-500 text-xs font-mono uppercase tracking-[0.3em]">
                Available for projects
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
