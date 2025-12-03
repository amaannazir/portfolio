import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
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
        <WorkedWith />
        <Stats />
        <Projects />
        <Skills />
        <TechStack />
        <InteractiveTimeline />
        <Certifications />
        <Contact />
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
};

export default Index;
