import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Database, 
  Layers, 
  Zap, 
  Users 
} from "lucide-react";

const CoreCompetencies = () => {
  const { ref, isVisible } = useScrollAnimation();

  const competencies = [
    {
      icon: Globe,
      title: "Enterprise Web Applications",
      description: "Experience delivering scalable, maintainable web solutions for warehouse and logistics systems.",
      highlights: ["Responsive Design", "Performance Focused", "Scalable Architecture"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Solutions",
      description: "Proven ability to deliver mobile-first and cross-platform experiences with native-like performance.",
      highlights: ["React Native", "Progressive Web Apps", "Offline Capability"],
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Database,
      title: "Backend & Data Systems",
      description: "Strong foundation in designing robust APIs, database architecture, and cloud infrastructure.",
      highlights: ["API Development", "Database Design", "Cloud Deployment"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Layers,
      title: "Full-Stack Delivery",
      description: "End-to-end ownership from requirements gathering through deployment and maintenance.",
      highlights: ["Complete Ownership", "Agile Delivery", "Code Quality"],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Zap,
      title: "Performance Optimisation",
      description: "Track record of improving application speed, reducing load times, and enhancing user experience.",
      highlights: ["Code Audits", "Load Optimisation", "Scalability"],
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Effective communicator who thrives in cross-functional teams and mentors junior developers.",
      highlights: ["Agile/Scrum", "Code Reviews", "Knowledge Sharing"],
      color: "from-primary to-blue-500",
    },
  ];

  return (
    <section id="competencies" className="py-16 md:py-24 relative">
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
              <span>What I Bring</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight">
              Core <span className="gradient-text">Competencies</span>
            </h2>
            <div className="accent-line mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              The expertise and value I bring to your team
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {competencies.map((competency, index) => (
              <motion.div
                key={competency.title}
                className="group glass-card p-5 md:p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${competency.color} shadow-lg w-fit mb-4`}>
                  <competency.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-2">
                  {competency.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {competency.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {competency.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="luxury-badge text-xs px-2.5 py-1 text-primary"
                    >
                      {highlight}
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

export default CoreCompetencies;
