import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  Globe, 
  Smartphone, 
  Database, 
  Palette, 
  Zap, 
  MessageSquare 
} from "lucide-react";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React, Next.js, and TypeScript for optimal performance.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile apps that deliver native-like experiences on both iOS and Android devices.",
      features: ["React Native", "Cross-Platform", "Offline Support"],
    },
    {
      icon: Database,
      title: "Backend Solutions",
      description: "Scalable and secure backend systems with robust APIs, database design, and cloud infrastructure.",
      features: ["API Development", "Database Design", "Cloud Hosting"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that prioritize user experience and accessibility standards.",
      features: ["User Research", "Prototyping", "Design Systems"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing applications with code optimization, caching strategies, and best practices.",
      features: ["Code Audits", "Load Time Reduction", "Scalability"],
    },
    {
      icon: MessageSquare,
      title: "Consulting",
      description: "Technical guidance and strategy to help you make informed decisions about your digital products.",
      features: ["Tech Stack Selection", "Architecture Review", "Team Training"],
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            How I can help bring your ideas to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-5 md:p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
