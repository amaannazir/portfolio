const AbstractShapes = () => {
  return (
    <>
      {/* Full-width gradient overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: "linear-gradient(135deg, transparent 0%, hsl(18, 90%, 60%) 40%, hsl(25, 85%, 55%) 70%, hsl(30, 80%, 50%) 100%)",
          opacity: 0.15,
        }}
      />
      
      {/* Subtle floating shapes for depth */}
      <div
        className="abstract-shape"
        style={{
          background: "radial-gradient(circle, hsl(18, 90%, 60%), transparent 70%)",
          width: "500px",
          height: "500px",
          top: "20%",
          right: "10%",
          opacity: 0.12,
        }}
      />
      <div
        className="abstract-shape"
        style={{
          background: "radial-gradient(circle, hsl(25, 85%, 55%), transparent 70%)",
          width: "400px",
          height: "400px",
          bottom: "15%",
          left: "5%",
          opacity: 0.1,
        }}
      />
      <div
        className="abstract-shape"
        style={{
          background: "radial-gradient(circle, hsl(30, 80%, 50%), transparent 70%)",
          width: "350px",
          height: "350px",
          top: "40%",
          left: "30%",
          opacity: 0.08,
        }}
      />
    </>
  );
};

export default AbstractShapes;
