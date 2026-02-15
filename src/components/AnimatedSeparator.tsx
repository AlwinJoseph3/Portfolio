import { motion } from "framer-motion";

const AnimatedSeparator = () => {
    return (
        <div className="w-full py-20 flex items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent">
                <motion.div
                    className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#007AFF] to-transparent blur-[1px]"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 1
                    }}
                />
            </div>
        </div>
    );
};

export default AnimatedSeparator;
