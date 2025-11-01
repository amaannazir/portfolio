import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import wmsImage from "@/assets/project-wms-dashboard.jpg";
import optiRouteImage from "@/assets/project-optiroute.jpg";
import scanTrackImage from "@/assets/project-scantrack.jpg";

const projectsData = [
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
    <section id="projects" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="text-primary">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
