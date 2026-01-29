import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

const companies = [
  {
    name: "NEXT",
    featured: true,
  },
  {
    name: "Sheffield Hallam University",
    featured: false,
  },
];

const WorkedWith = () => {
  const headerAnimation = useScrollAnimation(0.1);

  return (
    <section className="py-12 md:py-16 relative border-y border-border/30">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={headerAnimation.ref}
          initial={{ opacity: 0, y: 20 }}
          animate={headerAnimation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest font-medium">
            Worked With
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={headerAnimation.isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className={company.featured ? '' : 'opacity-60 hover:opacity-100'}
              >
                <span 
                  className={`font-display font-bold tracking-tight transition-colors ${
                    company.featured 
                      ? 'text-4xl md:text-5xl text-foreground hover:text-primary' 
                      : 'text-lg md:text-xl text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {company.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkedWith;
