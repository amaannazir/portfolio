import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { User, Lightbulb, Heart, Zap } from "lucide-react";

const AboutMe = () => {
  const { ref, isVisible } = useScrollAnimation();

  const traits = [
    { icon: Lightbulb, label: "Problem Solver", description: "Tackling complex challenges with elegant solutions", color: "from-amber-500 to-orange-500" },
    { icon: Heart, label: "Passionate", description: "Dedicated to crafting quality code and experiences", color: "from-rose-500 to-pink-500" },
    { icon: Zap, label: "Detail-Oriented", description: "Every line of code and pixel matters", color: "from-primary to-violet" },
  ];

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <User className="w-4 h-4" />
              <span>About Me</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight">
              Who I <span className="gradient-text">Am</span>
            </h2>
            <div className="accent-line mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* About Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                I'm a passionate software engineer with a deep love for creating elegant, 
                efficient, and user-friendly applications. With hands-on experience at NEXT 
                building enterprise-scale systems, I specialize in turning complex problems 
                into simple, beautiful solutions.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Beyond coding, I'm driven by continuous learning and staying at the forefront 
                of technology. I believe great software is built through collaboration, 
                attention to detail, and a genuine understanding of user needs.
              </p>
            </motion.div>

            {/* Traits Cards */}
            <motion.div
              className="grid gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              {traits.map((trait, index) => (
                <motion.div
                  key={trait.label}
                  className="group glass-card p-5 md:p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                  whileHover={{ x: 8 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${trait.color} shadow-lg`}>
                      <trait.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground text-base md:text-lg">{trait.label}</h4>
                      <p className="text-muted-foreground text-sm">{trait.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
