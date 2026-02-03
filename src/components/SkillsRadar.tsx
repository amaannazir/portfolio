import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { Star, Zap, BookOpen } from "lucide-react";

const skillTiers = [
  {
    tier: "Expert / Daily Driver",
    icon: Star,
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    skills: ["C#", ".NET 8", "ASP.NET Core", "Blazor", "SQL Server", "Entity Framework", "CSS"],
  },
  {
    tier: "Proficient",
    icon: Zap,
    color: "from-primary to-blue-500",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    skills: ["React", "TypeScript", "Azure DevOps", "Git", "REST APIs", "MudBlazor"],
  },
  {
    tier: "Familiar",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    skills: ["Docker", "PostgreSQL", "React Native", "Node.js", "MongoDB", "AWS"],
  },
];

const SkillTiers = () => {
  const headerAnimation = useScrollAnimation(0.1);

  return (
    <section id="skills-radar" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={headerAnimation.ref}
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={headerAnimation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span>Proficiency</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight">
              Skill <span className="gradient-text">Levels</span>
            </h2>
            <div className="accent-line mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Technologies organised by experience and daily usage
            </p>
          </motion.div>

          <div className="space-y-6">
            {skillTiers.map((tier, tierIndex) => (
              <motion.div
                key={tier.tier}
                className={`glass-card p-6 md:p-8 ${tier.borderColor} border`}
                initial={{ opacity: 0, x: tierIndex % 2 === 0 ? -30 : 30 }}
                animate={headerAnimation.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: tierIndex % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.5, delay: tierIndex * 0.15, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${tier.color} shadow-lg`}>
                    <tier.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-semibold">{tier.tier}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {tier.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className={`${tier.bgColor} ${tier.borderColor} border px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm md:text-base font-medium text-foreground transition-all duration-300 hover:scale-105 cursor-default`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={headerAnimation.isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: tierIndex * 0.15 + skillIndex * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillTiers;
