import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";
import AbstractShapes from "@/components/AbstractShapes";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Starfield />
      <AbstractShapes />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
