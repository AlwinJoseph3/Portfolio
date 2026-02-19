import { motion } from "framer-motion";

const ParallaxText = ({ children }: { children: string }) => {
  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="flex whitespace-nowrap flex-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {/* We need multiple copies to ensure seamless loop on large screens */}
        <span className="block mr-8 text-6xl md:text-8xl font-black uppercase text-zinc-800/20">
          {children}{" "}
        </span>
        <span className="block mr-8 text-6xl md:text-8xl font-black uppercase text-zinc-800/20">
          {children}{" "}
        </span>
        <span className="block mr-8 text-6xl md:text-8xl font-black uppercase text-zinc-800/20">
          {children}{" "}
        </span>
        <span className="block mr-8 text-6xl md:text-8xl font-black uppercase text-zinc-800/20">
          {children}{" "}
        </span>
      </motion.div>
    </div>
  );
};

export default ParallaxText;
