import { Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile-headshot.jpg";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-light leading-tight tracking-tight">
                  Full-Stack Developer
                </h1>
                <p className="text-2xl text-primary font-light tracking-wide">
                  Warehouse Logistics Systems
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-light text-muted-foreground">
                  Hi, I'm <span className="text-foreground">Amaan Nazir</span>
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-xl">
                  First-Class Software Engineering graduate and Full-Stack Systems Developer with a proven track record at NEXT.
                  I specialise in modernising and engineering critical warehouse logistics systems using C#, .NET, Blazor, ASP.NET Core,
                  and EF Core. With rapid promotion to Mid-Level Developer in just 18 months, I bring proven problem-solving and
                  system modernisation skills to every project.
                </p>
              </div>

              {/* Pagination dots */}
              <div className="flex gap-2 py-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-muted"></div>
                <div className="w-2 h-2 rounded-full bg-muted"></div>
                <div className="w-2 h-2 rounded-full bg-muted"></div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" asChild>
                  <a href="https://www.linkedin.com/in/amaan-nazir-033463225" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    CONNECT
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:amaan-619@hotmail.co.uk">
                    <Mail className="w-5 h-5" />
                    EMAIL
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground italic pt-2">
                Available for opportunities • Remote & Hybrid roles
              </p>
            </div>

            <div className="order-1 md:order-2 flex justify-center relative">
              <div className="relative">
                {/* Glowing effect behind image */}
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-110"></div>
                <img
                  src={profileImage}
                  alt="Amaan Nazir - Full-Stack Software Developer"
                  className="relative w-80 h-80 object-cover rounded-full border-4 border-primary/30 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
