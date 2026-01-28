import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up" 
}: AnimatedSectionProps) => {
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction],
        scale: 0.98
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0,
        scale: 1
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.1, 0.25, 1],
        opacity: { duration: 0.5 },
        scale: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
