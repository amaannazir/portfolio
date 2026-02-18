import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink, Play, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import wmsImage from "@/assets/project-wms-dashboard.jpg";
import optiRouteImage from "@/assets/project-optiroute.jpg";
import scanTrackImage from "@/assets/project-scantrack.jpg";
import halalDeliveryImage from "@/assets/project-halal-delivery.jpg";
import gwosImage from "@/assets/project-gwos.jpg";
import snakeSpectrumImage from "@/assets/project-snake-spectrum.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Snake: Spectrum",
    description:
      "A completely reimagined Snake game built for mobile and web with ultra-smooth 60 FPS gameplay, a custom 'Tube' rendering engine for organic fluid movement, and a massive 120-level campaign across 12 world themes. Features power-ups (Magnet, Shield, Poison), deep cosmetic customization (skins, scales, trails), precision swipe/keyboard controls with Dash mechanics, and an infinite Endless Mode.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API", "Mobile-First", "Game Development"],
    image: snakeSpectrumImage,
    github: "https://github.com/amaannazir/SnakeSpectrum",
    liveDemo: "https://amaannazir.github.io/SnakeSpectrum/",
    featured: true,
  },
  {
    title: "Halal Meat Delivery Platform",
    description:
      "Final year personal dissertation project addressing a real-world issue: enabling students to order and purchase halal meats directly to their home or accommodation. Full-featured e-commerce platform with Stripe payment integration, shopping cart system, user accounts, delivery forms, and student email validation—just like ordering anything online with a complete checkout experience.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Authentication"],
    image: halalDeliveryImage,
    github: "https://github.com/amaannazir/halalonthego",
  },
  {
    title: "GWOS - Global Warehouse Operating System",
    description:
      "Enterprise-level Warehouse Management System orchestrating complex logistics operations across UAE (Dubai), UK, Germany, Russia, and Poland. Implemented end-to-end staff performance tracking for bonus calculations, integrated RF handheld scanners and label printers with the central database, built QC workflow UI with full internationalization, and refactored legacy test infrastructure to improve CI/CD pipeline stability.",
    technologies: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server", "LINQ", "MSTest/Moq", "jQuery"],
    image: gwosImage,
  },
  {
    title: "Legacy System Modernisation",
    description:
      "Single-handedly owned a 6-month project to modernise a critical legacy reporting application used by all warehouse operation teams at NEXT. Re-engineered 93+ reports and migrated merchandise intake systems into an integrated C# .NET solution with MudBlazor frontend, ensuring brand consistency across all NEXT applications.",
    technologies: ["C#", ".NET Core", "MudBlazor", "ASP.NET Core", "SQL"],
    image: wmsImage,
  },
  {
    title: "IIP - International Intake Processing",
    description:
      "Developed and integrated a new C# .NET application for processing international intake within existing UAE/Dubai warehouses, enhancing NEXT's global logistics capabilities and streamlining cross-border merchandise operations.",
    technologies: ["C#", ".NET", "ASP.NET Core", "EF Core"],
    image: optiRouteImage,
  },
  {
    title: "Checkstation Application",
    description:
      "Contributed to the design and implementation of the 'Checkstation' State Machine client application, a vital system for reporting and routing non-compliant products in NEXT's flagship E3 warehouse, ensuring quality control and compliance.",
    technologies: ["C#", ".NET", "Blazor", "State Machine"],
    image: scanTrackImage,
  },
];

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    github?: string;
    liveDemo?: string;
    featured?: boolean;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardAnimation = useScrollAnimation(0.1);

  return (
    <motion.div
      ref={cardAnimation.ref}
      initial={{ opacity: 0, y: 40 }}
      animate={cardAnimation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <Card className={`glass-card group overflow-hidden h-full ${project.featured ? 'ring-2 ring-primary/30' : ''}`}>
        <div className="aspect-video overflow-hidden bg-muted relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {project.featured && (
            <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
              Featured
            </div>
          )}
        </div>

        <CardHeader className="space-y-3">
          <CardTitle className="text-xl font-display font-semibold tracking-tight group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full btn-luxury text-primary-foreground font-medium gap-2">
                <Play size={16} fill="currentColor" />
                Play Now
                <ArrowUpRight size={14} className="ml-auto" />
              </Button>
            </a>
          )}
          <CardDescription className="text-sm leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="luxury-badge px-2.5 py-1 text-xs font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-elegant inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={14} />
              View Source
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProjectCardSkeleton = ({ index }: { index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
  >
    <Card className="glass-card overflow-hidden h-full">
      <Skeleton className="aspect-video w-full" />
      <CardHeader className="space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-6 w-16 rounded-full" />
          ))}
        </div>
        <Skeleton className="h-4 w-24" />
      </CardContent>
    </Card>
  </motion.div>
);

const Projects = () => {
  const headerAnimation = useScrollAnimation(0.1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            ref={headerAnimation.ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={headerAnimation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span>Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="accent-line mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From enterprise warehouse systems at NEXT to creative personal projects—here's a selection of my work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <ProjectCardSkeleton key={index} index={index} />
                ))
              : projectsData.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
