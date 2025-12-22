import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { User, Heart, Coffee, Lightbulb } from "lucide-react";

const AboutMe = () => {
  const { ref, isVisible } = useScrollAnimation();

  const traits = [
    { icon: Lightbulb, label: "Problem Solver", description: "I love tackling complex challenges" },
    { icon: Heart, label: "Passionate", description: "Dedicated to crafting quality solutions" },
    { icon: Coffee, label: "Detail-Oriented", description: "Every pixel and line of code matters" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* About Content */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <User className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">Who I Am</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              I'm a passionate software engineer with a deep love for creating elegant, 
              efficient, and user-friendly applications. With years of experience across 
              the full stack, I specialize in turning complex problems into simple, 
              beautiful solutions.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Beyond coding, I'm driven by continuous learning and staying at the forefront 
              of technology. I believe great software is built through collaboration, 
              attention to detail, and a genuine understanding of user needs.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              When I'm not building digital experiences, you'll find me exploring new 
              technologies, contributing to open-source projects, or mentoring aspiring 
              developers in the community.
            </p>
          </div>

          {/* Traits Cards */}
          <div
            className={`grid gap-4 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {traits.map((trait, index) => (
              <div
                key={trait.label}
                className="group p-5 md:p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <trait.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-base md:text-lg">{trait.label}</h4>
                    <p className="text-muted-foreground text-sm">{trait.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
