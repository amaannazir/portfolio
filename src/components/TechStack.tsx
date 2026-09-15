import { Braces, CloudCog, Database, TestTube2 } from "lucide-react";

const groups = [
  { number: "01", title: "Backend & data", icon: Database, description: "Reliable services and data models for operational systems.", items: ["C# 14", ".NET 10", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Cosmos DB"] },
  { number: "02", title: "Interfaces", icon: Braces, description: "Practical interfaces for people working in time-critical environments.", items: ["Blazor WebAssembly", "MudBlazor", "Angular", "TypeScript", "JavaScript", "HTML & CSS"] },
  { number: "03", title: "Azure & integration", icon: CloudCog, description: "Event-led integrations linking software, scanners and automation.", items: ["Azure Service Bus", "Azure Functions", "Worker Services", "Barcode scanners", "RF devices", "Label printers"] },
  { number: "04", title: "Delivery & quality", icon: TestTube2, description: "From design decisions to tested, deployable production software.", items: ["Automated QA", "MSTest & Moq", "AKS", "Docker", "YAML CI/CD", "Azure DevOps"] },
];

const TechStack = () => (
  <section id="skills" className="scroll-mt-20 py-20 sm:py-28">
    <span id="services" className="sr-only" aria-hidden="true" />
    <div className="section-shell">
      <div className="mb-10 max-w-3xl"><p className="eyebrow mb-3">Engineering stack</p><h2 className="font-display text-4xl font-medium sm:text-5xl">A focused toolkit for complete delivery.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">One practical stack, organised around how systems are actually designed, integrated, shipped and supported.</p></div>
      <div className="grid border-l border-t border-border md:grid-cols-2">
        {groups.map((group) => { const Icon = group.icon; return <article key={group.title} className="border-b border-r border-border p-6 sm:p-8">
          <div className="flex items-center justify-between"><span className="font-display text-sm text-primary">{group.number}</span><Icon className="h-6 w-6 text-primary" /></div>
          <h3 className="mt-10 font-display text-2xl font-semibold">{group.title}</h3><p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{group.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium">{item}</span>)}</div>
        </article>; })}
      </div>
    </div>
  </section>
);

export default TechStack;