import { GraduationCap, Award, Cloud, Code, BadgeCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const certifications = [
  {
    title: "BEng Software Engineering",
    issuer: "Sheffield Hallam University",
    badge: "First-Class Honours",
    icon: GraduationCap,
    earned: true,
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    badge: "Coming Soon",
    icon: Cloud,
    earned: false,
  },
  {
    title: "Google Cloud Fundamentals",
    issuer: "Google Cloud",
    badge: "Coming Soon",
    icon: Code,
    earned: false,
  },
  {
    title: "HubSpot Marketing",
    issuer: "HubSpot Academy",
    badge: "Coming Soon",
    icon: BadgeCheck,
    earned: false,
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className={`glass-card p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 group ${
                    !cert.earned ? 'opacity-60' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                    cert.earned 
                      ? 'bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30' 
                      : 'bg-secondary'
                  }`}>
                    <Icon className={`w-8 h-8 ${cert.earned ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                  </div>
                  <h3 className="font-medium text-foreground mb-1 text-sm md:text-base group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    cert.earned 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-secondary text-muted-foreground'
                  }`}>
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
