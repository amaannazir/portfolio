import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink, Play } from "lucide-react";
import { Button } from "./ui/button";
import wmsImage from "@/assets/project-wms-dashboard.jpg";
import optiRouteImage from "@/assets/project-optiroute.jpg";
import scanTrackImage from "@/assets/project-scantrack.jpg";
import halalDeliveryImage from "@/assets/project-halal-delivery.jpg";
import gwosImage from "@/assets/project-gwos.jpg";
import snakeSpectrumImage from "@/assets/project-snake-spectrum.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const projectsData = [
  {
    title: "Snake: Spectrum",
    description:
      "A completely reimagined Snake game built for mobile and web with ultra-smooth 60 FPS gameplay, a custom 'Tube' rendering engine for organic fluid movement, and a massive 120-level campaign across 12 world themes. Features power-ups (Magnet, Shield, Poison), deep cosmetic customization (skins, scales, trails), precision swipe/keyboard controls with Dash mechanics, and an infinite Endless Mode.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API", "Mobile-First", "Game Development"],
    image: snakeSpectrumImage,
    github: "https://github.com/amaannazir/SnakeSpectrum",
    liveDemo: "https://amaannazir.github.io/SnakeSpectrum/",
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
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardAnimation = useScrollAnimation(0.1);

  return (
    <Card
      ref={cardAnimation.ref}
      className={`glass-card group overflow-hidden transition-all duration-500 ${
        cardAnimation.isVisible ? "animate-bounce-in" : "opacity-0"
      }`}
      style={{ 
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="aspect-video overflow-hidden bg-muted relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        {/* Elegant overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <CardHeader className="space-y-3">
        <CardTitle className="text-xl font-serif font-medium tracking-wide">{project.title}</CardTitle>
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full btn-luxury text-primary-foreground font-medium gap-2 relative overflow-hidden group/btn">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out" />
              <Play size={18} fill="currentColor" className="relative z-10" />
              <span className="relative z-10">Play Now</span>
            </Button>
          </a>
        )}
        <CardDescription className="text-base leading-relaxed font-light">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="luxury-badge px-3 py-1 text-xs font-medium text-primary rounded-full"
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
            className="link-elegant inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <ExternalLink size={16} />
            View on GitHub
          </a>
        )}
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const headerAnimation = useScrollAnimation(0.1);

  return (
    <section id="projects" className="py-32 relative">
      {/* Subtle section gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-20 transition-all duration-700 ${
              headerAnimation.isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium mb-6 tracking-tight">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              From enterprise solutions powering multi-million pound warehouse operations at NEXT to creative personal projects like games and full-stack e-commerce applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
