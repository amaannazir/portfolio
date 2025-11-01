import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import wmsImage from "@/assets/project-wms-dashboard.jpg";
import optiRouteImage from "@/assets/project-optiroute.jpg";
import scanTrackImage from "@/assets/project-scantrack.jpg";

const projectsData = [
  {
    title: "WMS Dashboard Pro",
    description:
      "A real-time Warehouse Management System (WMS) dashboard providing analytics on inventory levels, order fulfillment rates, and picker efficiency.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    image: wmsImage,
  },
  {
    title: "OptiRoute AI",
    description:
      "An AI-powered algorithm that calculates the most efficient picking routes for warehouse staff, reducing travel time by an average of 15%.",
    technologies: ["Python", "TensorFlow", "Flask", "Google Maps API"],
    image: optiRouteImage,
  },
  {
    title: "ScanTrack Mobile",
    description:
      "A cross-platform mobile app for inventory tracking using barcode and RFID scanning, ensuring 99.9% accuracy in stock management.",
    technologies: ["Flutter", "Firebase", "GCP Vision AI"],
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
