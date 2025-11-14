import { Briefcase, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const experiences = [
  {
    type: "work",
    title: "Mid-Level Full-Stack Systems Developer",
    company: "NEXT PLC",
    period: "Jun 2024 - Present",
    description: "Promoted to Mid-Level within 18 months. Leading modernisation projects and developing critical warehouse logistics systems.",
    icon: Briefcase,
  },
  {
    type: "work",
    title: "Junior Systems Developer",
    company: "NEXT PLC",
    period: "Sep 2023 - Jun 2024",
    description: "Developed and maintained warehouse management systems using C#, .NET, and Blazor. Single-handedly owned legacy system modernisation project.",
    icon: Briefcase,
  },
  {
    type: "education",
    title: "BSc Software Engineering",
    company: "University of Bradford",
    period: "2020 - 2023",
    description: "First-Class Honours. Specialized in full-stack development with final year project in React, Node.js, and MongoDB.",
    icon: GraduationCap,
  },
];

const Experience = () => {
  const headerAnimation = useScrollAnimation(0.1);

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-16 transition-all duration-700 ${
              headerAnimation.isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">
              Professional <span className="text-primary">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Building enterprise systems at scale
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const expAnimation = useScrollAnimation(0.1);
                const Icon = exp.icon;
                
                return (
                  <div
                    key={index}
                    ref={expAnimation.ref}
                    className={`relative pl-20 transition-all duration-700 ${
                      expAnimation.isVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/50">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>

                    <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-light">{exp.title}</h3>
                        <p className="text-primary text-lg">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                        <p className="text-muted-foreground mt-2 leading-relaxed font-light">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
