import { Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile-headshot.jpg";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Software Developer | <span className="text-primary">Innovating Warehouse Technology</span>
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-muted-foreground">
                  Hi, I'm Alex Thompson
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I bridge the gap between complex logistics and efficient software solutions in the retail space. 
                  With expertise in warehouse management systems and supply chain optimization, I'm passionate 
                  about transforming traditional warehousing through innovative code. From real-time analytics 
                  to AI-powered routing, I build solutions that make supply chains smarter and faster.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                <Button size="lg" className="gap-2" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground italic">
                  My DMs are always open for hiring managers.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                <img
                  src={profileImage}
                  alt="Alex Thompson - Software Developer"
                  className="relative w-80 h-80 object-cover rounded-full border-4 border-primary shadow-2xl"
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
