const timeline = [
  { date: "2026", title: "Full-Stack Systems Software Engineer", place: "NEXT", body: "Mid-level systems development across GWOS, Direct Receiving, event-driven Azure integrations, platform upgrades, automated quality assurance and stakeholder delivery." },
  { date: "2024", title: "Junior progression at NEXT", place: "NEXT", body: "Returned after placement and progressed to mid-level within 18 months, contributing across warehouse applications and taking independent ownership of a six-month reporting modernisation." },
  { date: "Jul 2022", title: "Trainee Full Stack Software Engineer", place: "NEXT · Placement start", body: "Joined NEXT on placement, developing warehouse logistics applications including IIP, Checkstation and operational intake workflows." },
  { date: "2020—2024", title: "BEng (Hons) Software Engineering", place: "Sheffield Hallam University", body: "First-Class Honours. Dissertation built with Blazor WebAssembly, C#, .NET, SQL Server and database migrations." },
];

const InteractiveTimeline = () => (
  <section id="experience" className="scroll-mt-20 border-y border-border bg-card py-20 sm:py-28">
    <div className="section-shell">
      <div className="mb-10"><p className="eyebrow mb-3">Experience</p><h2 className="font-display text-4xl font-medium sm:text-5xl">Progress built through delivery.</h2></div>
      <ol className="border-t border-border">
        {timeline.map((item) => <li key={`${item.date}-${item.title}`} className="grid gap-3 border-b border-border py-7 sm:grid-cols-[150px_1fr] sm:gap-8">
          <time className="font-display text-sm font-semibold text-primary">{item.date}</time>
          <div className="grid gap-3 lg:grid-cols-[.8fr_1.2fr]"><div><h3 className="font-display text-xl font-semibold">{item.title}</h3><p className="mt-1 text-sm text-primary">{item.place}</p></div><p className="leading-relaxed text-muted-foreground">{item.body}</p></div>
        </li>)}
      </ol>
    </div>
  </section>
);

export default InteractiveTimeline;