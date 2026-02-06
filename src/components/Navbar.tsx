import React, { useRef, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// --- 1. The Reusable Magnetic Wrapper ---
const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } =
      ref.current?.getBoundingClientRect() || {
        height: 0,
        width: 0,
        left: 0,
        top: 0,
      };

    // Calculate distance from center
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // "Pull" factor (0.1 = weak, 0.5 = strong)
    setPosition({ x: middleX * 0.35, y: middleY * 0.35 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

// --- 2. The Navbar Component ---
const Navbar = ({
  isDark,
  toggleTheme,
}: {
  isDark: boolean;
  toggleTheme: () => void;
}) => {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center pointer-events-none">
      {/* pointer-events-none on wrapper allows clicks to pass through empty spaces 
         pointer-events-auto on children re-enables clicking
      */}

      {/* Brand Logo */}
      <div className="pointer-events-auto">
        <Magnetic>
          <Link
            to="/"
            className="text-xl font-bold dark:text-white mix-blend-difference"
          >
            Alwin<span className="text-[#007AFF]">.</span>
          </Link>
        </Magnetic>
      </div>

      {/* Navigation Cluster */}
      <div className="flex items-center gap-6 pointer-events-auto bg-white/70 dark:bg-black/50 backdrop-blur-md px-6 py-2 rounded-full border border-black/5 dark:border-white/10 shadow-lg">
        <Magnetic>
          <a
            href="#works"
            className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors px-2"
          >
            Works
          </a>
        </Magnetic>

        <Magnetic>
          <Link
            to="/about" // Assuming you might add this later
            className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors px-2"
          >
            About
          </Link>
        </Magnetic>

        <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700 mx-2" />

        <Magnetic>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {isDark ? (
              <Sun size={18} className="text-zinc-100" />
            ) : (
              <Moon size={18} className="text-zinc-600" />
            )}
          </button>
        </Magnetic>
      </div>
    </nav>
  );
};

export default Navbar;
