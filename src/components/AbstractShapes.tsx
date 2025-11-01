const AbstractShapes = () => {
  return (
    <>
      {/* Large diagonal shapes on the right */}
      <div
        className="abstract-shape"
        style={{
          background: "linear-gradient(135deg, hsl(18, 90%, 60%), hsl(25, 85%, 55%))",
          width: "400px",
          height: "600px",
          top: "10%",
          right: "-100px",
          transform: "rotate(-25deg)",
          opacity: 0.2,
        }}
      />
      <div
        className="abstract-shape"
        style={{
          background: "linear-gradient(135deg, hsl(25, 85%, 55%), hsl(18, 90%, 60%))",
          width: "350px",
          height: "550px",
          top: "15%",
          right: "50px",
          transform: "rotate(-25deg)",
          opacity: 0.18,
        }}
      />
      <div
        className="abstract-shape"
        style={{
          background: "linear-gradient(135deg, hsl(18, 90%, 60%), hsl(30, 80%, 50%))",
          width: "300px",
          height: "500px",
          top: "20%",
          right: "200px",
          transform: "rotate(-25deg)",
          opacity: 0.15,
        }}
      />

      {/* Small floating circles */}
      <div
        className="abstract-shape"
        style={{
          background: "hsl(18, 90%, 60%)",
          width: "80px",
          height: "80px",
          top: "15%",
          right: "25%",
          borderRadius: "50%",
          opacity: 0.25,
        }}
      />
      <div
        className="abstract-shape"
        style={{
          background: "hsl(18, 90%, 60%)",
          width: "50px",
          height: "50px",
          top: "22%",
          right: "20%",
          borderRadius: "50%",
          opacity: 0.2,
        }}
      />
      <div
        className="abstract-shape"
        style={{
          background: "hsl(18, 90%, 60%)",
          width: "120px",
          height: "120px",
          bottom: "20%",
          right: "15%",
          borderRadius: "50%",
          opacity: 0.15,
        }}
      />

      {/* Curved shape bottom right */}
      <div
        className="abstract-shape"
        style={{
          background: "linear-gradient(225deg, hsl(18, 90%, 60%), hsl(25, 85%, 55%))",
          width: "200px",
          height: "200px",
          bottom: "10%",
          right: "10%",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          opacity: 0.2,
        }}
      />
    </>
  );
};

export default AbstractShapes;
