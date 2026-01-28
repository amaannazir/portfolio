import { useCountUp } from "@/hooks/use-count-up";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect } from "react";
import { motion } from "framer-motion";

const statsData = [
  { number: 93, suffix: "+", label: "Reports Modernised" },
  { number: 18, suffix: " months", label: "To Mid-Level Promotion" },
  { number: 6, suffix: " months", label: "Solo Project Ownership" },
  { number: 73, suffix: "%", label: "Degree Classification (1st Class Honors)" },
];

const Stats = () => {
  const headerAnimation = useScrollAnimation(0.1);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={headerAnimation.ref}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={headerAnimation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {statsData.map((stat, index) => (
                <StatItem key={index} {...stat} index={index} isVisible={headerAnimation.isVisible} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatItem = ({ number, suffix, label, index, isVisible }: { 
  number: number; 
  suffix: string; 
  label: string; 
  index: number;
  isVisible: boolean;
}) => {
  const { count, setIsVisible } = useCountUp(number, 2000);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setIsVisible(true), index * 100);
    }
  }, [isVisible, index, setIsVisible]);

  return (
    <motion.div 
      className="text-center group cursor-default"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.34, 1.56, 0.64, 1]
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-3xl sm:text-4xl md:text-5xl font-light text-primary mb-1 md:mb-2 transition-all duration-300">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground font-light leading-tight">{label}</div>
    </motion.div>
  );
};

export default Stats;
