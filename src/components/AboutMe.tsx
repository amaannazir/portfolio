import { ArrowUpRight } from "lucide-react";

const AboutMe = () => (
  <section id="about" className="scroll-mt-20 border-y border-border bg-card py-20 sm:py-28">
    <div className="section-shell grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
      <div><p className="eyebrow mb-3">About</p><h2 className="font-display text-4xl font-medium sm:text-5xl">Software that respects the operation.</h2></div>
      <div>
        <p className="font-display text-2xl leading-relaxed sm:text-3xl">I link physical warehouse activity to dependable software—understanding the workflow before shaping the system around it.</p>
        <div className="mt-8 grid gap-6 border-t border-border pt-7 sm:grid-cols-2">
          <p className="leading-relaxed text-muted-foreground">At NEXT, that means working across architecture, development, automated QA, demonstrations and sprint collaboration—not treating delivery as a hand-off between isolated disciplines.</p>
          <p className="leading-relaxed text-muted-foreground">I care about clear operational states, data integrity and maintainable platforms, whether I’m refining a receiving workflow, integrating hardware or modernising deployment foundations.</p>
        </div>
        <a href="#experience" className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-primary">View career journey <ArrowUpRight className="h-4 w-4" /></a>
      </div>
    </div>
  </section>
);

export default AboutMe;