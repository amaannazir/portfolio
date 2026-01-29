import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
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
      description: "Custom web applications built with modern frameworks for optimal performance.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile apps that deliver native-like experiences.",
      features: ["React Native", "Cross-Platform", "Offline Support"],
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Database,
      title: "Backend Solutions",
      description: "Scalable and secure backend systems with robust APIs and cloud infrastructure.",
      features: ["API Development", "Database Design", "Cloud Hosting"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that prioritize user experience.",
      features: ["User Research", "Prototyping", "Design Systems"],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your applications with code optimization and best practices.",
      features: ["Code Audits", "Load Time", "Scalability"],
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: MessageSquare,
      title: "Consulting",
      description: "Technical guidance to help you make informed decisions.",
      features: ["Tech Stack", "Architecture", "Training"],
      color: "from-primary to-blue-500",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span>What I Do</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight">
              My <span className="gradient-text">Services</span>
            </h2>
            <div className="accent-line mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              How I can help bring your ideas to life
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group glass-card p-5 md:p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} shadow-lg w-fit mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="luxury-badge text-xs px-2.5 py-1 text-primary"
                    >
                      {feature}
                    </span>
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

export default Services;
