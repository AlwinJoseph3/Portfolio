import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Starfield from "../components/StarBackground";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black flex flex-col items-center justify-center p-4 text-center overflow-hidden relative selection:bg-[#007AFF] selection:text-white"
    >
      <Starfield />

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#007AFF] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <h1 className="text-[12rem] sm:text-[15rem] font-black text-zinc-900 leading-none select-none absolute z-0 pointer-events-none">
        404
      </h1>

      <div className="relative z-10 space-y-6 max-w-lg">
        <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter">
          Lost in Space?
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed">
          The page you are looking for doesn't exist or has been moved to
          another dimension.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-8 px-8 py-4 bg-[#007AFF] border border-white/20 text-white font-black rounded-full uppercase tracking-widest text-xs flex items-center gap-2 mx-auto hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/20"
        >
          <ArrowLeft size={16} /> Return Base
        </button>
      </div>
    </motion.div>
  );
};

export default NotFound;
