import { Code2, Database, Server, Globe, Layers, Boxes } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

const skills = [
  { name: "C# & .NET Core", icon: Code2, color: "from-blue-500 to-violet-500" },
  { name: "ASP.NET Core", icon: Server, color: "from-violet-500 to-purple-500" },
  { name: "Blazor & MudBlazor", icon: Globe, color: "from-primary to-blue-500" },
  { name: "Entity Framework Core", icon: Database, color: "from-emerald-500 to-teal-500" },
  { name: "TypeScript & Angular", icon: Layers, color: "from-sky-500 to-blue-500" },
  { name: "SQL Server", icon: Boxes, color: "from-orange-500 to-red-500" },
];

const Skills = () => {
  const headerAnimation = useScrollAnimation(0.1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            ref={headerAnimation.ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={headerAnimation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span>Expertise</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="accent-line mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Core technologies powering enterprise-scale warehouse systems
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={headerAnimation.isVisible ? "visible" : "hidden"}
          >
            {skills.map((skill) => {
              const Icon = skill.icon;
              
              return (
                <motion.div
                  key={skill.name}
                  className="glass-card group p-6 md:p-8 cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -6,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col items-center gap-4 text-center">
                    <motion.div 
                      className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </motion.div>
                    <h3 className="text-base md:text-lg font-medium">{skill.name}</h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
