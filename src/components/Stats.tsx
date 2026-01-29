import { useCountUp } from "@/hooks/use-count-up";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Award, Clock, GraduationCap } from "lucide-react";

const statsData = [
  { number: 93, suffix: "+", label: "Reports Modernised", icon: TrendingUp },
  { number: 18, suffix: " mo", label: "To Mid-Level Promotion", icon: Award },
  { number: 6, suffix: " mo", label: "Solo Project Ownership", icon: Clock },
  { number: 73, suffix: "%", label: "Degree (1st Class)", icon: GraduationCap },
];

const Stats = () => {
  const headerAnimation = useScrollAnimation(0.1);

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={headerAnimation.ref}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={headerAnimation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
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

const StatItem = ({ number, suffix, label, icon: Icon, index, isVisible }: { 
  number: number; 
  suffix: string; 
  label: string; 
  icon: React.ComponentType<{ className?: string }>;
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
      className="text-center group"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
    >
      <div className="flex justify-center mb-3">
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold gradient-text mb-1">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{label}</div>
    </motion.div>
  );
};

export default Stats;
