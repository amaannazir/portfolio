import { useEffect, useRef } from "react";

const Starfield = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    // Create stars
    const starCount = 50;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      container.appendChild(star);
    }

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return <div ref={canvasRef} className="starfield" />;
};

export default Starfield;
