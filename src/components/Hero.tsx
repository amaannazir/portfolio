import { Linkedin, Mail, Download, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile-headshot.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const textAnimation = useScrollAnimation(0.1);
  const imageAnimation = useScrollAnimation(0.1);
  const [scrollY, setScrollY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="about" className="min-h-screen flex items-start md:items-center pt-24 md:pt-20 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/5 pointer-events-none" />
      
      {/* Smooth parallax background elements */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/8 to-primary/3 rounded-full blur-3xl"
          animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 12, 0], rotate: [0, -1, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-2 md:gap-16 items-center">
            <motion.div 
              ref={textAnimation.ref}
              className="order-2 md:order-1 space-y-4 md:space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate={textAnimation.isVisible ? "visible" : "hidden"}
            >
              <div className="space-y-4">
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-7xl font-medium leading-tight tracking-tight font-serif"
                  variants={itemVariants}
                >
                  <span className="inline-block">Full-Stack</span>{' '}
                  <span className="inline-block gradient-text">Developer</span>
                </motion.h1>
                <motion.p 
                  className="text-xl sm:text-2xl text-primary font-light tracking-widest uppercase"
                  variants={itemVariants}
                >
                  Warehouse Logistics Systems
                </motion.p>
              </div>

              <motion.div className="space-y-3 md:space-y-4" variants={itemVariants}>
                <h2 className="text-2xl sm:text-3xl font-serif font-normal text-muted-foreground">
                  Hi, I'm <span className="gradient-text font-medium">Amaan Nazir</span>
                </h2>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light max-w-xl">
                  First-Class Software Engineering graduate and Full-Stack Systems Developer with a proven track record at NEXT.
                  Leveraged a high-impact placement year into a full-time role, earning a rapid promotion to Mid-Level Developer in just 18 months.
                  Specialises in modernising and engineering critical warehouse logistics systems using C#, .NET, Blazor, ASP.NET Core,
                  and EF Core. Eager to bring proven problem-solving and system modernisation skills to a new challenge.
                </p>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4"
                variants={itemVariants}
              >
                <Button size="lg" className="btn-luxury text-primary-foreground font-medium w-full sm:w-auto" asChild>
                  <a href="/Amaan_Nazir_CV.pdf" download="Amaan_Nazir_CV.pdf">
                    <Download className="w-5 h-5" />
                    DOWNLOAD CV
                  </a>
                </Button>
                <Button size="lg" className="glass-card border-border/50 hover:border-primary/40 transition-all w-full sm:w-auto" asChild>
                  <a href="https://www.linkedin.com/in/amaan-nazir-033463225" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    CONNECT
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="backdrop-blur-sm hover:border-primary/40 transition-all w-full sm:w-auto" asChild>
                  <a href="mailto:amaan-619@hotmail.co.uk">
                    <Mail className="w-5 h-5" />
                    EMAIL
                  </a>
                </Button>
              </motion.div>

              {/* Modern Availability Banner */}
              <motion.div 
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full luxury-badge"
                variants={itemVariants}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 glow-pulse"></span>
                </span>
                <span className="text-sm font-medium text-foreground tracking-wide">
                  Open to Opportunities
                </span>
                <span className="hidden sm:inline text-sm text-muted-foreground">
                  • Remote & Hybrid
                </span>
                <Sparkles className="w-4 h-4 text-primary/50" />
              </motion.div>
            </motion.div>

            <motion.div 
              ref={imageAnimation.ref}
              className="order-1 md:order-2 flex justify-center relative -mb-4 md:mb-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={imageAnimation.isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <div className="relative">
                {/* Subtle glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/8 to-transparent rounded-full blur-3xl scale-125"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Decorative ring */}
                <motion.div 
                  className="absolute inset-0 rounded-full border border-primary/15 scale-110"
                  animate={{ scale: [1.1, 1.15, 1.1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Skeleton placeholder while loading */}
                {!imageLoaded && (
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary/20 shadow-xl bg-muted animate-pulse" />
                )}
                
                <motion.img
                  src={profileImage}
                  alt="Amaan Nazir - Full-Stack Software Developer"
                  className={`relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-2 border-primary/20 shadow-xl ${
                    imageLoaded ? "opacity-100" : "opacity-0 absolute"
                  }`}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary) / 0.4)" }}
                  transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
