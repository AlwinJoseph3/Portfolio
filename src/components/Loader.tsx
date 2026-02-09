import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(prev + diff, 100);
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setShowLoader(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.9, ease: [0.85, 0, 0.15, 1] },
          }}
          className="fixed inset-0 z-[200] bg-[#0a0a0a] flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center">
            <div className="h-12 overflow-hidden flex items-baseline gap-2">
              <span className="text-zinc-500 font-mono text-xs tracking-widest mb-1">
                initializing components ...
              </span>

              <div className="relative flex">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={Math.floor(progress)}
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-1"
                  >
                    {Math.floor(progress)}
                  </motion.span>
                </AnimatePresence>
                <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-1">
                  /100
                </span>
              </div>
            </div>

            <div className="mt-4 relative w-48 h-[1px] bg-zinc-900 overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#007AFF]"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>

          <div className="absolute bottom-12 flex flex-col items-center gap-2">
            <div className="flex gap-4">
              <span className="w-1 h-1 rounded-full bg-zinc-800 animate-ping" />
              <span className="w-1 h-1 rounded-full bg-zinc-800 animate-ping delay-75" />
              <span className="w-1 h-1 rounded-full bg-zinc-800 animate-ping delay-150" />
            </div>
            <p className="text-zinc-700 font-mono text-[10px] uppercase tracking-[0.4em] mt-4">
              Portfolio // Version 1.0.0
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
