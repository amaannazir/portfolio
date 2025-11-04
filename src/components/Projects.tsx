import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink } from "lucide-react";
import wmsImage from "@/assets/project-wms-dashboard.jpg";
import optiRouteImage from "@/assets/project-optiroute.jpg";
import scanTrackImage from "@/assets/project-scantrack.jpg";
import halalDeliveryImage from "@/assets/project-halal-delivery.jpg";

const projectsData = [
  {
    title: "Halal Meat Delivery Platform",
    description:
      "Final year personal dissertation project addressing a real-world issue: enabling students to order and purchase halal meats directly to their home or accommodation. Full-featured e-commerce platform with Stripe payment integration, shopping cart system, user accounts, delivery forms, and student email validation—just like ordering anything online with a complete checkout experience.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Authentication"],
    image: halalDeliveryImage,
    github: "https://github.com/amaannazir/halalonthego",
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

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Real-world solutions powering multi-million pound warehouse operations at NEXT and innovative personal full-stack e-commerce applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-light tracking-wide">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed font-light">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-light bg-transparent text-primary rounded-full border border-primary/30"
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
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink size={16} />
                      View on GitHub
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
