export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #182848 0%, #0b1020 40%, #050816 100%)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "5rem",
          fontWeight: 800,
          maxWidth: "1000px",
          lineHeight: 1,
          marginBottom: "2rem",
        }}
      >
        AI Writing That Still Feels Human
      </h1>

      <p
        style={{
          fontSize: "1.4rem",
          color: "#b8c0d4",
          maxWidth: "750px",
          lineHeight: 1.8,
        }}
      >
        Transform robotic AI writing into emotionally intelligent,
        human-centered communication designed for real people.
      </p>

      <button
        style={{
          marginTop: "3rem",
          background: "#ff7b00",
          border: "none",
          color: "white",
          padding: "1rem 2rem",
          borderRadius: "14px",
          fontSize: "1rem",
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 10px 30px rgba(255,123,0,0.35)",
        }}
      >
        Humanize My Writing
      </button>
    </section>
  );
}