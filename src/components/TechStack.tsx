import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  Monitor, 
  Code2, 
  Wrench, 
  Palette, 
  Database, 
  GitBranch,
  Terminal,
  Zap
} from "lucide-react";

const stackCategories = [
  {
    title: "IDE & Editor",
    icon: Code2,
    items: [
      { name: "Visual Studio 2022", description: "Primary IDE for .NET development" },
      { name: "VS Code", description: "Lightweight editor for web & scripts" },
      { name: "SQL Server Management Studio", description: "Database management" },
    ],
  },
  {
    title: "Languages & Frameworks",
    icon: Terminal,
    items: [
      { name: "C# 14 / .NET 10", description: "Backend & enterprise applications" },
      { name: "Blazor WebAssembly", description: "Modern web UI framework" },
      { name: "ASP.NET Core", description: "Web APIs & MVC applications" },
      { name: "TypeScript / Angular", description: "Frontend development" },
    ],
  },
  {
    title: "Database & ORM",
    icon: Database,
    items: [
      { name: "SQL Server", description: "Primary database" },
      { name: "Entity Framework Core", description: "ORM for .NET" },
      { name: "Azure Cosmos DB", description: "NoSQL cloud database" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    items: [
      { name: "Git / Azure DevOps", description: "Version control & YAML CI/CD" },
      { name: "Azure Kubernetes Service", description: "Container orchestration (AKS)" },
      { name: "Azure Service Bus & Functions", description: "Event-driven integrations" },
    ],
  },
  {
    title: "Productivity",
    icon: Zap,
    items: [
      { name: "Notion", description: "Notes & documentation" },
      { name: "Slack / Teams", description: "Communication" },
      { name: "Jira", description: "Project management" },
    ],
  },
  {
    title: "Design",
    icon: Palette,
    items: [
      { name: "Figma", description: "UI/UX design & prototyping" },
      { name: "Canva", description: "Quick graphics & presentations" },
    ],
  },
];

const TechStack = () => {
  const headerAnimation = useScrollAnimation(0.1);

  return (
    <section id="stack" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-16 transition-all duration-700 ${
              headerAnimation.isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">
              My <span className="text-primary">Stack</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              The tools and technologies I use daily to build enterprise-grade systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stackCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex flex-col">
                        <span className="text-foreground font-medium text-sm">{item.name}</span>
                        <span className="text-muted-foreground text-xs">{item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
