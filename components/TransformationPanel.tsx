"use client";

import { useState } from "react";

export default function TransformationPanel() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleTransform = () => {
    setOutput(
      "Your emotionally intelligent transformation will appear here."
    );
  };

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "4rem 2rem",
        color: "white",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            Original Writing
          </h2>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your writing here..."
            style={{
              width: "100%",
              height: "350px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "1.5rem",
              color: "white",
              fontSize: "1rem",
              outline: "none",
              resize: "none",
              backdropFilter: "blur(20px)",
            }}
          />

          <button
            onClick={handleTransform}
            style={{
              marginTop: "1.5rem",
              background:
                "linear-gradient(135deg, #ff7b00 0%, #ff9500 100%)",
              border: "none",
              color: "white",
              padding: "1rem 2rem",
              borderRadius: "16px",
              fontWeight: 700,
              cursor: "pointer",
              fontSize: "1rem",
              boxShadow: "0 10px 30px rgba(255,123,0,0.35)",
            }}
          >
            Humanize Writing
          </button>
        </div>

        <div>
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            Simply Human Output
          </h2>

          <div
            style={{
              width: "100%",
              minHeight: "350px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "1.5rem",
              lineHeight: 1.8,
              color: "#d7deed",
              backdropFilter: "blur(20px)",
            }}
          >
            {output || "Your transformed writing will appear here."}
          </div>
        </div>
      </div>
    </section>
  );
}