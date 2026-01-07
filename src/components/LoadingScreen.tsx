import { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center animate-fade-out" style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}>
      <div className="text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight animate-fade-in">
          <span className="text-foreground">Amaan</span>
          <span className="gradient-text"> Nazir</span>
        </h1>
        <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full overflow-hidden mx-auto">
          <div className="h-full w-full bg-gradient-to-r from-primary via-primary to-primary/80 animate-[slide-in-right_1.5s_ease-out]" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
