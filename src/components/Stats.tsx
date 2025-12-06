import { useCountUp } from "@/hooks/use-count-up";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect } from "react";

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
        <div 
          ref={headerAnimation.ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            headerAnimation.isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {statsData.map((stat, index) => (
                <StatItem key={index} {...stat} index={index} isVisible={headerAnimation.isVisible} />
              ))}
            </div>
          </div>
        </div>
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
    <div className="text-center group">
      <div className="text-3xl sm:text-4xl md:text-5xl font-light text-primary mb-1 md:mb-2 transition-all duration-300 group-hover:scale-110">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground font-light leading-tight">{label}</div>
    </div>
  );
};

export default Stats;
