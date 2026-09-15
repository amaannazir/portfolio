import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import TechStack from "@/components/TechStack";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <a href="#main-content" className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform focus:translate-y-0">Skip to content</a>
    <Navigation />
    <main id="main-content">
      <Hero />
      <Projects />
      <AboutMe />
      <TechStack />
      <InteractiveTimeline />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;