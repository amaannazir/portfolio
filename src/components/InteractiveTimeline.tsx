import { Briefcase, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useRef, useEffect, useState } from "react";

const experiences = [
  {
    type: "work",
    title: "Mid-Level Full-Stack Systems Developer",
    company: "NEXT LTD",
    period: "Promotion within 18 months",
    date: "2024",
    description: "Promoted to Mid-Level within 18 months. Leading modernisation of 93+ reports and developing critical warehouse logistics systems using C#, .NET, Blazor, and EF Core.",
    icon: Briefcase,
  },
  {
    type: "work",
    title: "Software Developer",
    company: "NEXT LTD",
    period: "Jul 2022 - Present",
    date: "2022",
    description: "Developed and maintained critical full-stack warehouse logistics applications. Single-handedly owned 6-month legacy system modernisation project, re-engineering 93 reports. Key projects: IIP, Checkstation Application, Generic & Inbound Applications.",
    icon: Briefcase,
  },
  {
    type: "education",
    title: "BEng (Hons) Software Engineering",
    company: "Sheffield Hallam University",
    period: "2020 - 2024",
    date: "2020",
    description: "First-Class Honours. Final year dissertation: Full-stack responsive web app using Blazor WebAssembly, C#, .NET, and SQL Server.",
    icon: GraduationCap,
  },
];

const InteractiveTimeline = () => {
  const headerAnimation = useScrollAnimation(0.1);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate progress as the element scrolls through the viewport
      const start = windowHeight;
      const end = -elementHeight;
      const current = elementTop;
      const progress = Math.min(Math.max((start - current) / (start - end), 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

          <div ref={timelineRef} className="relative">
            {/* Timeline line with animated fill */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border">
              <div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-accent transition-all duration-100"
                style={{ height: `${scrollProgress * 100}%` }}
              />
            </div>

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const itemProgress = Math.min(Math.max((scrollProgress - (index * 0.25)) * 4, 0), 1);
                const Icon = exp.icon;
                
                return (
                  <div
                    key={index}
                    className="relative pl-20 transition-all duration-500"
                    style={{ 
                      opacity: itemProgress,
                      transform: `translateY(${(1 - itemProgress) * 30}px)`
                    }}
                  >
                    {/* Timeline dot */}
                    <div 
                      className="absolute left-0 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                      style={{
                        background: itemProgress > 0.5 
                          ? 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))' 
                          : 'hsl(var(--secondary))',
                        boxShadow: itemProgress > 0.5 ? '0 0 20px hsl(var(--primary) / 0.5)' : 'none'
                      }}
                    >
                      <Icon className={`w-8 h-8 transition-colors duration-300 ${itemProgress > 0.5 ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                    </div>

                    {/* Year badge */}
                    <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden md:block">
                      <span className="text-sm font-medium text-primary">{exp.date}</span>
                    </div>

                    <div 
                      className="glass-card p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] group cursor-default"
                      style={{
                        borderColor: itemProgress > 0.5 ? 'hsl(var(--primary) / 0.3)' : undefined
                      }}
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-light group-hover:text-primary transition-colors">{exp.title}</h3>
                          <span className="text-sm text-muted-foreground md:hidden">{exp.date}</span>
                        </div>
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

export default InteractiveTimeline;
