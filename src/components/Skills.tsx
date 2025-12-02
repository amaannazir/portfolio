import { Code2, Database, Server, Globe, Layers, Boxes } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-16 transition-all duration-700 ${
              headerAnimation.isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Core technologies powering enterprise-scale warehouse systems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const skillAnimation = useScrollAnimation(0.1);
              const Icon = skill.icon;
              
              return (
                <div
                  key={skill.name}
                  ref={skillAnimation.ref}
                  className={`glass-card group p-8 rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer ${
                    skillAnimation.isVisible ? "animate-bounce-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${skill.color} transition-all duration-300 group-hover:scale-125 group-hover:rotate-12`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-light text-center">{skill.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
