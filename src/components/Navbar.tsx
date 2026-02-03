import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({
  isDark,
  toggleTheme,
}: {
  isDark: boolean;
  toggleTheme: () => void;
}) => {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-white/10">
      <Link to="/" className="text-xl font-bold dark:text-white">
        Hi
      </Link>
      <div className="flex items-center gap-8">
        <a
          href="#works"
          className="hover:text-brand-primary dark:text-gray-300"
        >
          Works
        </a>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
        >
          {isDark ? <Sun size={20} color="white" /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
