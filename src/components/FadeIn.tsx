import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  fullWidth?: boolean;
  className?: string;
}

const FadeIn = ({
  children,
  delay = 0,
  direction = "up",
  fullWidth = false,
  className = "",
}: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return { y: 40 };
      case "down":
        return { y: -40 };
      case "left":
        return { x: 40 };
      case "right":
        return { x: -40 };
      case "none":
        return {};
      default:
        return { y: 40 };
    }
  };

  const initialVariant = {
    opacity: 0,
    ...getDirectionVariants(),
  };

  const animateVariant = {
    opacity: 1,
    y: 0,
    x: 0,
  };

  return (
    <div
      ref={ref}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
    >
      <motion.div
        initial={initialVariant}
        animate={isInView ? animateVariant : initialVariant}
        transition={{ duration: 0.8, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeIn;
