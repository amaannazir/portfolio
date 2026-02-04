import { GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const certifications = [
  {
    title: "BEng Software Engineering",
    issuer: "Sheffield Hallam University",
    badge: "First-Class Honours",
    icon: GraduationCap,
  },
];

const Certifications = () => {
  const headerAnimation = useScrollAnimation(0.1);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-12 transition-all duration-700 ${
              headerAnimation.isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
              Certifications & <span className="text-primary">Awards</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Verified credentials and achievements
            </p>
          </div>

          <div className="flex justify-center">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-8 rounded-xl text-center transition-all duration-300 hover:scale-105 group max-w-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1 text-base md:text-lg group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                  <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/20 text-primary">
                    {cert.badge}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
