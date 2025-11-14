import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
}

const CursorTrail = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newParticle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev, newParticle]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[60]">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full bg-primary/40 animate-fade-out"
          style={{
            left: particle.x,
            top: particle.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;
