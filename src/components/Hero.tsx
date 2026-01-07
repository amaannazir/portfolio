import { Linkedin, Mail, Download, Sparkles } from "lucide-react";
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
      {/* Premium gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
      
      {/* Parallax background elements */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-primary/15 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-accent/10 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '-1.5s' }} />
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
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium leading-tight tracking-tight font-serif">
                  <span className="inline-block animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>Full-Stack</span>{' '}
                  <span className="inline-block animate-fade-in opacity-0 gradient-text" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>Developer</span>
                </h1>
                <p className="text-xl sm:text-2xl text-primary font-light tracking-widest uppercase animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                  Warehouse Logistics Systems
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                <h2 className="text-2xl sm:text-3xl font-serif font-normal text-muted-foreground">
                  Hi, I'm <span className="gradient-text font-medium">Amaan Nazir</span>
                </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light max-w-xl">
                  First-Class Software Engineering graduate and Full-Stack Systems Developer with a proven track record at NEXT.
                  Leveraged a high-impact placement year into a full-time role, earning a rapid promotion to Mid-Level Developer in just 18 months.
                  Specialises in modernising and engineering critical warehouse logistics systems using C#, .NET, Blazor, ASP.NET Core,
                  and EF Core. Eager to bring proven problem-solving and system modernisation skills to a new challenge.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4">
                <Button size="lg" className="btn-luxury text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all w-full sm:w-auto" asChild>
                  <a href="/Amaan_Nazir_CV.pdf" download="Amaan_Nazir_CV.pdf">
                    <Download className="w-5 h-5" />
                    DOWNLOAD CV
                  </a>
                </Button>
                <Button size="lg" className="bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-card transition-all w-full sm:w-auto" asChild>
                  <a href="https://www.linkedin.com/in/amaan-nazir-033463225" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    CONNECT
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="backdrop-blur-sm hover:border-primary/50 transition-all w-full sm:w-auto" asChild>
                  <a href="mailto:amaan-619@hotmail.co.uk">
                    <Mail className="w-5 h-5" />
                    EMAIL
                  </a>
                </Button>
              </div>

              {/* Luxury Availability Banner */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full luxury-badge animate-fade-in opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 glow-pulse"></span>
                </span>
                <span className="text-sm font-medium text-foreground tracking-wide">
                  Open to Opportunities
                </span>
                <span className="hidden sm:inline text-sm text-muted-foreground">
                  • Remote & Hybrid
                </span>
                <Sparkles className="w-4 h-4 text-primary/60" />
              </div>
            </div>

            <div 
              ref={imageAnimation.ref}
              className={`order-1 md:order-2 flex justify-center relative -mb-4 md:mb-0 transition-all duration-700 ${
                imageAnimation.isVisible ? "animate-bounce-in" : "opacity-0"
              }`}
            >
              <div className="relative">
                {/* Premium glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl scale-125 animate-float"></div>
                
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border border-primary/20 scale-110 animate-float" style={{ animationDelay: '-2s' }}></div>
                
                {/* Skeleton placeholder while loading */}
                {!imageLoaded && (
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary/30 shadow-2xl bg-muted animate-pulse" />
                )}
                
                <img
                  src={profileImage}
                  alt="Amaan Nazir - Full-Stack Software Developer"
                  className={`relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-2 border-primary/30 shadow-2xl transition-all duration-500 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-3xl ${
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
