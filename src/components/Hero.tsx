import { ArrowDownRight, Download, Mail } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile-headshot.png";
import cvAsset from "@/assets/Amaan_Nazir_CV.pdf.asset.json";

const Hero = () => (
  <section id="top" className="border-b border-border pt-10 sm:pt-16 lg:pt-20">
    <div className="section-shell grid items-end gap-10 lg:grid-cols-[1.12fr_.88fr] lg:gap-16">
      <div className="pb-12 lg:pb-20">
        <div className="eyebrow mb-6 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-primary" />
          Full-Stack Systems Software Engineer · Open to opportunities
        </div>
        <h1 className="max-w-4xl font-display text-5xl font-medium leading-[.98] sm:text-6xl lg:text-8xl">
          Real-world systems. <span className="text-primary">Thoughtfully engineered.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          I’m Amaan Nazir, engineering full-lifecycle warehouse systems at NEXT with C#, .NET, Blazor and Azure—from physical stock workflows to dependable digital platforms.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild><a href="#projects">Explore my work <ArrowDownRight /></a></Button>
          <Button size="lg" variant="outline" asChild><a href={cvAsset.url} download="Amaan_Nazir_CV.pdf"><Download /> Download CV</a></Button>
          <Button size="lg" variant="ghost" asChild><a href="mailto:amaan-619@hotmail.co.uk"><Mail /> Email</a></Button>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-xl lg:mx-0">
        <div className="absolute -left-4 top-8 h-[calc(100%-2rem)] w-full rounded-lg border border-primary/40 sm:-left-7" aria-hidden="true" />
        <div className="relative overflow-hidden rounded-t-lg bg-feature">
          <img src={profileImage} alt="Portrait of Amaan Nazir, Full-Stack Systems Software Engineer" width="1824" height="1216" loading="eager" decoding="async" className="aspect-[4/4.3] w-full object-cover object-center grayscale-[15%]" />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-feature/95 px-5 py-4 text-feature-foreground">
            <span className="font-display font-medium">Engineering at NEXT</span>
            <span className="text-xs uppercase opacity-70" style={{ letterSpacing: ".12em" }}>Sheffield, UK</span>
          </div>
        </div>
      </div>
    </div>

    <div className="feature-surface">
      <div className="section-shell grid sm:grid-cols-3">
        {["GWOS & warehouse workflows", "Event-driven Azure systems", "Architecture through automated QA"].map((item, index) => (
          <div key={item} className="flex min-h-20 min-w-0 items-center gap-4 border-feature-foreground/20 px-0 py-5 sm:border-r sm:px-6 first:pl-0 last:border-0">
            <span className="font-display text-sm text-secondary">0{index + 1}</span><span className="text-sm font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;