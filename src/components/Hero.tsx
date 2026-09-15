import { ArrowDownRight, Download, Mail } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile-headshot.png";
import cvAsset from "@/assets/Amaan_Nazir_CV.pdf.asset.json";

const Hero = () => (
  <section id="top" className="border-b border-border pt-8 sm:pt-12 lg:pt-16">
    <div className="section-shell grid items-end gap-8 sm:gap-10 lg:grid-cols-[1.12fr_.88fr] lg:gap-16">
      <div className="pb-8 sm:pb-12 lg:pb-16">
        <div className="eyebrow mb-5 flex items-start gap-3 sm:mb-6">
          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
          Full-Stack Systems Software Engineer · Open to opportunities
        </div>
        <h1 className="max-w-4xl font-display text-[2.5rem] font-medium leading-[1.02] sm:text-6xl lg:text-7xl xl:text-8xl">
          Real-world systems. <span className="text-primary">Thoughtfully engineered.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-7 sm:text-xl">
          I’m Amaan Nazir, engineering full-lifecycle warehouse systems at NEXT with C#, .NET, Blazor and Azure—from physical stock workflows to dependable digital platforms.
        </p>
        <div className="mt-7 grid gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
          <Button size="lg" asChild><a href="#projects">Explore my work <ArrowDownRight /></a></Button>
          <Button size="lg" variant="outline" asChild><a href={cvAsset.url} download="Amaan_Nazir_CV.pdf"><Download /> Download CV</a></Button>
          <Button size="lg" variant="ghost" asChild><a href="mailto:amaan-619@hotmail.co.uk"><Mail /> Email</a></Button>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-xl lg:mx-0">
        <div className="absolute -left-2 top-4 h-[calc(100%-1rem)] w-full rounded-lg border border-primary/40 sm:-left-5 sm:top-6 sm:h-[calc(100%-1.5rem)]" aria-hidden="true" />
        <div className="relative overflow-hidden rounded-t-lg bg-feature">
          <img src={profileImage} alt="Portrait of Amaan Nazir, Full-Stack Systems Software Engineer" width="1824" height="1216" loading="eager" decoding="async" className="aspect-[4/3] w-full object-cover object-center grayscale-[15%] lg:aspect-[4/4.3]" />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-feature/95 px-4 py-3 text-feature-foreground sm:px-5 sm:py-4">
            <span className="font-display text-sm font-medium sm:text-base">Engineering at NEXT</span>
            <span className="text-[0.65rem] uppercase opacity-70">Sheffield, UK</span>
          </div>
        </div>
      </div>
    </div>

    <div className="feature-surface">
      <div className="section-shell grid sm:grid-cols-3">
        {["GWOS & warehouse workflows", "Event-driven Azure systems", "Architecture through automated QA"].map((item, index) => (
          <div key={item} className="flex min-h-16 min-w-0 items-center gap-3 border-b border-feature-foreground/20 py-4 last:border-0 sm:min-h-20 sm:border-b-0 sm:border-r sm:px-5 sm:last:border-0 sm:first:pl-0">
            <span className="font-display text-xs text-secondary sm:text-sm">0{index + 1}</span><span className="text-sm font-medium leading-snug">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;