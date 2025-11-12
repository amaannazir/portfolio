import { useEffect, useRef, useState } from "react";

interface Star {
  x: number;
  y: number;
  element: HTMLDivElement;
}

const Starfield = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Create stars
    const starCount = 50;
    const stars: Star[] = [];
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "star";
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      container.appendChild(star);
      
      stars.push({
        x: (x / 100) * window.innerWidth,
        y: (y / 100) * window.innerHeight,
        element: star,
      });
    }
    
    starsRef.current = stars;

    return () => {
      if (container) {
        container.innerHTML = "";
      }
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const stars = starsRef.current;
    const maxDistance = 150;

    // Draw connections between stars near mouse
    stars.forEach((star, i) => {
      const distToMouse = Math.hypot(star.x - mousePosition.x, star.y - mousePosition.y);
      
      if (distToMouse < maxDistance) {
        stars.forEach((otherStar, j) => {
          if (i >= j) return;
          
          const distToOther = Math.hypot(star.x - otherStar.x, star.y - otherStar.y);
          const otherDistToMouse = Math.hypot(otherStar.x - mousePosition.x, otherStar.y - mousePosition.y);
          
          if (distToOther < maxDistance && otherDistToMouse < maxDistance) {
            const opacity = 1 - (distToMouse / maxDistance) * (otherDistToMouse / maxDistance);
            
            ctx.beginPath();
            ctx.strokeStyle = `hsl(var(--primary) / ${opacity * 0.4})`;
            ctx.lineWidth = 1;
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(otherStar.x, otherStar.y);
            ctx.stroke();
          }
        });
      }
    });
  }, [mousePosition]);

  return (
    <>
      <div ref={containerRef} className="starfield" />
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1]"
      />
    </>
  );
};

export default Starfield;
