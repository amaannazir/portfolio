import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SkillsRadar from "@/components/SkillsRadar";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";
import AbstractShapes from "@/components/AbstractShapes";
import MouseGlow from "@/components/MouseGlow";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import CursorTrail from "@/components/CursorTrail";
import Certifications from "@/components/Certifications";
import WorkedWith from "@/components/WorkedWith";
import TechStack from "@/components/TechStack";
import AnimatedSection from "@/components/AnimatedSection";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <LoadingScreen />
      <ScrollProgress />
      <Starfield />
      <AbstractShapes />
      <MouseGlow />
      <CursorTrail />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        
        <AnimatedSection delay={0.1}>
          <WorkedWith />
        </AnimatedSection>
        
        <AnimatedSection delay={0.15} direction="up">
          <Projects />
        </AnimatedSection>
        
        <AnimatedSection delay={0.1} direction="up">
          <AboutMe />
        </AnimatedSection>
        
        <AnimatedSection delay={0.1} direction="up">
          <Services />
        </AnimatedSection>
        
        <AnimatedSection delay={0.1} direction="up">
          <Stats />
        </AnimatedSection>
        
        <AnimatedSection delay={0.1} direction="left">
          <Skills />
        </AnimatedSection>
        
        <AnimatedSection delay={0.1} direction="up">
          <SkillsRadar />
        </AnimatedSection>
        
        <AnimatedSection delay={0.1} direction="right">
          <TechStack />
        </AnimatedSection>
        
        <AnimatedSection delay={0.15} direction="up">
          <InteractiveTimeline />
        </AnimatedSection>
        
        <AnimatedSection delay={0.1} direction="up">
          <Certifications />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2} direction="up">
          <Contact />
        </AnimatedSection>
        
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
};

export default Index;
