import { Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile-headshot.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";

const Hero = () => {
  const textAnimation = useScrollAnimation(0.1);
  const imageAnimation = useScrollAnimation(0.1);
  const [scrollY, setScrollY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload image for faster display
  useEffect(() => {
    const img = new Image();
    img.src = profileImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-start md:items-center pt-24 md:pt-20 relative overflow-hidden">
      {/* Parallax background elements */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-2 md:gap-16 items-center">
            <div 
              ref={textAnimation.ref}
              className={`order-2 md:order-1 space-y-4 md:space-y-8 transition-all duration-700 ${
                textAnimation.isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-light leading-tight tracking-tight">
                  <span className="inline-block animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>Full-Stack</span>{' '}
                  <span className="inline-block animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>Developer</span>
                </h1>
                <p className="text-xl sm:text-2xl text-primary font-light tracking-wide animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                  Warehouse Logistics Systems
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                <h2 className="text-2xl sm:text-3xl font-light text-muted-foreground">
                  Hi, I'm <span className="text-primary font-medium">Amaan Nazir</span>
                </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light max-w-xl">
                  First-Class Software Engineering graduate and Full-Stack Systems Developer with a proven track record at NEXT.
                  Leveraged a high-impact placement year into a full-time role, earning a rapid promotion to Mid-Level Developer in just 18 months.
                  Specialises in modernising and engineering critical warehouse logistics systems using C#, .NET, Blazor, ASP.NET Core,
                  and EF Core. Eager to bring proven problem-solving and system modernisation skills to a new challenge.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto" asChild>
                  <a href="/Amaan_Nazir_CV.pdf" download="Amaan_Nazir_CV.pdf">
                    <Download className="w-5 h-5" />
                    DOWNLOAD CV
                  </a>
                </Button>
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a href="https://www.linkedin.com/in/amaan-nazir-033463225" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    CONNECT
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
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

            <div 
              ref={imageAnimation.ref}
              className={`order-1 md:order-2 flex justify-center relative -mb-4 md:mb-0 transition-all duration-700 ${
                imageAnimation.isVisible ? "animate-bounce-in" : "opacity-0"
              }`}
            >
              <div className="relative">
                {/* Glowing effect behind image */}
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-110"></div>
                
                {/* Skeleton placeholder while loading */}
                {!imageLoaded && (
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary/30 shadow-2xl bg-muted animate-pulse" />
                )}
                
                <img
                  src={profileImage}
                  alt="Amaan Nazir - Full-Stack Software Developer"
                  className={`relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-primary/30 shadow-2xl transition-opacity duration-300 ${
                    imageLoaded ? "opacity-100" : "opacity-0 absolute"
                  }`}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
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
