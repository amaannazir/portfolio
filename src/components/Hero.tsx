import { Linkedin, Mail, Download, ArrowRight, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile-headshot.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const textAnimation = useScrollAnimation(0.1);
  const imageAnimation = useScrollAnimation(0.1);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = profileImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="about" className="min-h-screen flex items-start md:items-center pt-24 md:pt-20 relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient orb */}
        <motion.div 
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
          }}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Secondary orb */}
        <motion.div 
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent-violet) / 0.1) 0%, transparent 70%)",
          }}
          animate={{ 
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
        />

        {/* Geometric lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-20" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Text Content - 7 columns */}
            <motion.div 
              ref={textAnimation.ref}
              className="order-2 md:order-1 md:col-span-7 space-y-6 md:space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate={textAnimation.isVisible ? "visible" : "hidden"}
            >
              {/* Status Badge */}
              <motion.div 
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-muted/50 border border-border/50"
                variants={itemVariants}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  Available for opportunities
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight"
                  variants={itemVariants}
                >
                  <span className="block">Full-Stack</span>
                  <span className="block gradient-text-animated">Developer</span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg sm:text-xl text-muted-foreground font-medium flex items-center gap-2"
                  variants={itemVariants}
                >
                  <MapPin className="w-4 h-4" />
                  Warehouse Logistics Systems
                </motion.p>
              </div>

              {/* Description */}
              <motion.div className="space-y-4" variants={itemVariants}>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold">
                  Hi, I'm <span className="gradient-text">Amaan Nazir</span>
                </h2>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Full-Stack Engineer specialised in Enterprise Modernisation. 
                  Promoted to Mid-Level in 18 months at NEXT. 
                  Building warehouse logistics systems using{" "}
                  <span className="text-foreground font-medium">C#, .NET, Blazor</span>, and{" "}
                  <span className="text-foreground font-medium">ASP.NET Core</span>.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2"
                variants={itemVariants}
              >
                <Button size="lg" className="btn-luxury text-primary-foreground font-medium gap-2 w-full sm:w-auto" asChild>
                  <a href="/Amaan_Nazir_CV.pdf" download="Amaan_Nazir_CV.pdf">
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto group" asChild>
                  <a href="https://www.linkedin.com/in/amaan-nazir-033463225" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    Connect
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button variant="ghost" size="lg" className="gap-2 w-full sm:w-auto" asChild>
                  <a href="mailto:amaan-619@hotmail.co.uk">
                    <Mail className="w-4 h-4" />
                    Email Me
                  </a>
                </Button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div 
                className="flex items-center gap-8 pt-4 border-t border-border/50"
                variants={itemVariants}
              >
                <div>
                  <div className="text-2xl font-bold text-primary">93+</div>
                  <div className="text-sm text-muted-foreground">Reports Modernised</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <div className="text-2xl font-bold text-primary">18</div>
                  <div className="text-sm text-muted-foreground">Months to Promotion</div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-border" />
                <div className="hidden sm:block">
                  <div className="text-2xl font-bold text-primary">1st</div>
                  <div className="text-sm text-muted-foreground">Class Honours</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Profile Image - 5 columns */}
            <motion.div 
              ref={imageAnimation.ref}
              className="order-1 md:order-2 md:col-span-5 flex justify-center relative"
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={imageAnimation.isVisible ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.9, x: 20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-violet/10 to-coral/20 blur-2xl" />
                
                {/* Geometric accent */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/30 rounded-2xl"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-20 h-20 border-2 border-violet/30 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Skeleton placeholder while loading */}
                {!imageLoaded && (
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl bg-muted animate-pulse" />
                )}
                
                <motion.img
                  src={profileImage}
                  alt="Amaan Nazir - Full-Stack Software Developer"
                  className={`relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-3xl border-2 border-border/50 shadow-2xl ${
                    imageLoaded ? "opacity-100" : "opacity-0 absolute"
                  }`}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
    </section>
  );
};

export default Hero;
