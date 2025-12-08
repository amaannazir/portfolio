import { useEffect, useState } from "react";

const AbstractShapes = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Full-width gradient overlay - slow parallax to last entire page */}
      <div
        className="fixed inset-0 pointer-events-none z-0 parallax"
        style={{
          background: "linear-gradient(135deg, transparent 0%, hsl(18, 90%, 60%) 40%, hsl(25, 85%, 55%) 70%, hsl(30, 80%, 50%) 100%)",
          opacity: 0.15,
          transform: `translateY(${scrollY * 0.08}px)`,
        }}
      />
      
      {/* Subtle floating shapes for depth - slower parallax to stay visible longer */}
      <div
        className="abstract-shape parallax"
        style={{
          background: "radial-gradient(circle, hsl(18, 90%, 60%), transparent 70%)",
          width: "600px",
          height: "600px",
          top: "10%",
          right: "5%",
          opacity: 0.12,
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />
      <div
        className="abstract-shape parallax"
        style={{
          background: "radial-gradient(circle, hsl(25, 85%, 55%), transparent 70%)",
          width: "500px",
          height: "500px",
          top: "50%",
          left: "0%",
          opacity: 0.1,
          transform: `translateY(${scrollY * -0.1}px)`,
        }}
      />
      <div
        className="abstract-shape parallax"
        style={{
          background: "radial-gradient(circle, hsl(30, 80%, 50%), transparent 70%)",
          width: "450px",
          height: "450px",
          top: "80%",
          right: "20%",
          opacity: 0.08,
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
    </>
  );
};

export default AbstractShapes;
