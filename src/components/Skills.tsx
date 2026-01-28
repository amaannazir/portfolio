import { Code2, Database, Server, Globe, Layers, Boxes } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

const skills = [
  { name: "C# & .NET Core", icon: Code2, color: "from-purple-500 to-blue-500" },
  { name: "ASP.NET Core", icon: Server, color: "from-blue-500 to-cyan-500" },
  { name: "Blazor & MudBlazor", icon: Globe, color: "from-violet-500 to-purple-500" },
  { name: "Entity Framework Core", icon: Database, color: "from-green-500 to-emerald-500" },
  { name: "TypeScript & Angular", icon: Layers, color: "from-cyan-500 to-blue-500" },
  { name: "SQL Server", icon: Boxes, color: "from-orange-500 to-red-500" },
];

const Skills = () => {
  const headerAnimation = useScrollAnimation(0.1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
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
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            ref={headerAnimation.ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={headerAnimation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight font-serif">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Core technologies powering enterprise-scale warehouse systems
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={headerAnimation.isVisible ? "visible" : "hidden"}
          >
            {skills.map((skill) => {
              const Icon = skill.icon;
              
              return (
                <motion.div
                  key={skill.name}
                  className="glass-card group p-8 rounded-2xl cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <motion.div 
                      className={`p-4 rounded-xl bg-gradient-to-br ${skill.color}`}
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-light text-center">{skill.name}</h3>
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
