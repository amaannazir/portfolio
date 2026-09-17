import { ArrowUpRight, Boxes, CloudCog, ExternalLink, GitBranch, Play, ScanLine } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import snakeImage from "@/assets/project-snake-spectrum.png";
import halalImage from "@/assets/project-halal-delivery.jpg";
import legacyReportingImage from "@/assets/project-legacy-reporting.png";
import internationalIntakeImage from "@/assets/project-international-intake.png";
import checkstationImage from "@/assets/project-checkstation.png";

type Project = {
  title: string;
  label: string;
  summary: string;
  overview: string;
  contribution: string;
  technologies: string[];
  icon: typeof Boxes;
  image?: string;
  github?: string;
  liveDemo?: string;
};

const projects: Project[] = [
  {
    title: "GWOS · Direct Receiving",
    label: "Current enterprise systems work",
    summary: "Warehouse workflows that connect physical stock receiving to accurate, dependable digital tracking across NEXT operations.",
    overview: "Global Warehouse Operating System functionality supporting complex logistics operations across the UK and international sites. Direct Receiving brings stock movement, scanning and operational state together in one dependable workflow.",
    contribution: "Developing full-stack workflows; integrating robotics and barcode scanners through Azure Service Bus and Functions; diagnosing and refactoring RAG status logic to prevent false-positive success states; and contributing from architectural planning through automated QA, stakeholder demonstrations and sprint delivery.",
    technologies: ["C# 14", ".NET 10", "Blazor", "MudBlazor", "SQL Server", "Azure Service Bus", "Azure Functions"],
    icon: Boxes,
  },
  {
    title: ".NET & Azure Platform Engineering",
    label: "Platform modernisation",
    summary: "Modernising worker services, deployment conventions and data access to keep warehouse platforms maintainable and production-ready.",
    overview: "Platform work across ArticleMaster services and the wider warehouse technology estate, with careful upgrades that support long-term reliability without interrupting operational delivery.",
    contribution: "Upgrading worker services and Alpine container base images to .NET 10, introducing Central Package Management, retiring legacy V1 YAML, standardising AKS V2 deployments and optimising Cosmos DB usage.",
    technologies: [".NET 10", "Worker Services", "Cosmos DB", "AKS", "Docker", "YAML CI/CD", "Central Package Management"],
    icon: CloudCog,
  },
  {
    title: "Snake: Spectrum",
    label: "Personal game · Playable now",
    summary: "The classic game reimagined for web and mobile, with a 120-level campaign, custom Canvas rendering and precise touch or keyboard controls.",
    overview: "A polished Snake game spanning 12 world themes, with power-ups, cosmetic customisation, dash mechanics and an infinite Endless Mode.",
    contribution: "Designed and built the game experience, custom rendering, responsive controls, level progression, hazards and gameplay systems for desktop and mobile browsers.",
    technologies: ["JavaScript", "Canvas API", "HTML5", "CSS3", "Mobile-first", "Game development"],
    icon: Play,
    image: snakeImage,
    github: "https://github.com/amaannazir/SnakeSpectrum",
    liveDemo: "https://amaannazir.github.io/SnakeSpectrum/",
  },
  {
    title: "Halal Meat Delivery",
    label: "First-Class degree dissertation",
    summary: "A full-stack e-commerce experience for ordering halal meat, covering customer accounts, basket, checkout and delivery flows.",
    overview: "A responsive final-year project built around a complete ordering journey, from product selection and account management to payment and delivery details.",
    contribution: "Designed and implemented the Blazor WebAssembly application, C#/.NET services, SQL Server data model, database migrations and Stripe checkout experience.",
    technologies: ["Blazor WebAssembly", "C#", ".NET", "SQL Server", "Stripe", "Database Migrations"],
    icon: Boxes,
    image: halalImage,
    github: "https://github.com/amaannazir/halalonthego",
  },
  {
    title: "Legacy Reporting Modernisation",
    label: "Supporting delivery history",
    summary: "Independent six-month ownership of a legacy modernisation project, re-engineering 93+ operational reports into an integrated .NET application.",
    overview: "A critical reporting application used across warehouse operations, modernised to improve maintainability and align the interface with NEXT application standards.",
    contribution: "Owned the project independently for six months, migrated merchandise intake reporting and rebuilt 93+ reports using C#, ASP.NET Core, MudBlazor and SQL.",
    technologies: ["C#", ".NET", "ASP.NET Core", "MudBlazor", "SQL"],
    icon: GitBranch,
    image: legacyReportingImage,
  },
  {
    title: "International Intake Processing",
    label: "UAE / Dubai operations",
    summary: "C# and .NET intake functionality integrated into existing UAE warehouse operations for international merchandise processing.",
    overview: "An international intake application supporting established logistics processes in NEXT warehouses in the UAE and Dubai.",
    contribution: "Developed and integrated application functionality into the existing warehouse estate, supporting cross-border merchandise intake workflows.",
    technologies: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core"],
    icon: Boxes,
    image: internationalIntakeImage,
  },
  {
    title: "Checkstation",
    label: "E3 quality control",
    summary: "State-machine client work for reporting and routing non-compliant products in NEXT’s flagship E3 warehouse.",
    overview: "A quality-control application that guides operational decisions and routes products that do not meet compliance requirements.",
    contribution: "Contributed to the design and implementation of the Checkstation state-machine client and its role within the E3 quality workflow.",
    technologies: ["C#", ".NET", "Blazor", "State Machines"],
    icon: ScanLine,
    image: checkstationImage,
  },
];

const DetailDialog = ({ project, inverse = false }: { project: Project; inverse?: boolean }) => (
  <Dialog>
    <DialogTrigger asChild><Button variant="outline" className={inverse ? "border-feature-foreground/30 text-feature-foreground hover:bg-feature-foreground/10 hover:text-feature-foreground" : undefined}>View details <ArrowUpRight /></Button></DialogTrigger>
    <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto rounded-lg bg-card p-6 sm:p-8">
      <DialogHeader className="pr-8 text-left">
        <p className="eyebrow">{project.label}</p>
        <DialogTitle className="font-display text-2xl leading-tight sm:text-3xl">{project.title}</DialogTitle>
        <DialogDescription className="text-base leading-relaxed">{project.summary}</DialogDescription>
      </DialogHeader>
      <div className="grid gap-6 pt-3 sm:grid-cols-2">
        <div><h4 className="mb-2 font-display font-semibold">Overview</h4><p className="text-sm leading-relaxed text-muted-foreground">{project.overview}</p></div>
        <div><h4 className="mb-2 font-display font-semibold">My contribution</h4><p className="text-sm leading-relaxed text-muted-foreground">{project.contribution}</p></div>
      </div>
      <div className="flex flex-wrap gap-2 border-t border-border pt-5">{project.technologies.map((tech) => <span key={tech} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{tech}</span>)}</div>
    </DialogContent>
  </Dialog>
);

const Projects = () => {
  const [gwos, platform, snake, halal, ...secondary] = projects;
  return (
    <section id="projects" className="scroll-mt-20 py-16 sm:py-24">
      <div className="section-shell">
        <div className="mb-8 grid gap-4 border-b border-border pb-7 sm:mb-10 lg:grid-cols-2 lg:items-end">
          <div><p className="eyebrow mb-3">Selected work</p><h2 className="font-display text-3xl font-medium sm:text-5xl">Systems built for the real world.</h2></div>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:justify-self-end">Enterprise warehouse engineering and considered personal products, with the role and contribution made clear.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {[gwos, platform].map((project, index) => {
            const Icon = project.icon;
            return <article key={project.title} className="feature-surface relative overflow-hidden rounded-lg p-6 sm:p-9">
              <div className="subtle-grid absolute inset-0 opacity-40" aria-hidden="true" />
              <div className="relative flex min-h-[330px] flex-col sm:min-h-[390px]">
                <div className="mb-10 flex items-start justify-between gap-4 sm:mb-16"><p className="text-xs font-semibold uppercase text-secondary">{project.label}</p><Icon className="h-7 w-7 shrink-0 text-secondary" /></div>
                <p className="mb-3 font-display text-sm text-secondary">0{index + 1}</p>
                <h3 className="max-w-lg font-display text-2xl font-medium leading-tight sm:text-4xl">{project.title}</h3>
                <p className="mt-5 max-w-xl leading-relaxed text-feature-foreground/75">{project.summary}</p>
                <div className="mt-auto pt-8"><DetailDialog project={project} inverse /></div>
              </div>
            </article>;
          })}
        </div>

        <div className="mt-8 grid gap-5 sm:mt-12 lg:grid-cols-2">
          {[snake, halal].map((project) => <article key={project.title} className="overflow-hidden rounded-lg border border-border bg-card">
            <img src={project.image} alt={`${project.title} project by Amaan Nazir`} width="1280" height="720" loading="lazy" className="aspect-video w-full object-cover" />
            <div className="p-6 sm:p-7"><p className="eyebrow mb-3">{project.label}</p><h3 className="font-display text-2xl font-semibold">{project.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.liveDemo && <Button asChild><a href={project.liveDemo} target="_blank" rel="noopener noreferrer"><Play /> Play now</a></Button>}
                {project.github && <Button variant="outline" asChild><a href={project.github} target="_blank" rel="noopener noreferrer"><ExternalLink /> Source</a></Button>}
                <DetailDialog project={project} />
              </div>
            </div>
          </article>)}
        </div>

        <div className="mt-8 grid gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {secondary.map((project) => <article key={project.title} className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card">
            <div className="relative overflow-hidden border-b border-border bg-muted">
              <img
                src={project.image}
                alt={`Conceptual illustration of ${project.title} by Amaan Nazir`}
                width="1536"
                height="1024"
                loading="lazy"
                className="aspect-[3/2] w-full object-cover transition-transform duration-500 motion-safe:hover:scale-[1.02]"
              />
              <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-md border border-feature-foreground/20 bg-feature text-feature-foreground shadow-sm" aria-hidden="true">
                {(() => { const Icon = project.icon; return <Icon className="h-5 w-5" />; })()}
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="eyebrow mb-3">{project.label}</p>
              <h3 className="font-display text-xl font-semibold leading-tight sm:text-2xl">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
              <div className="mt-auto pt-6"><DetailDialog project={project} /></div>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  );
};

export default Projects;