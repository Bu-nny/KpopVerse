
import React from "react";

function WelcomeBanner() {
  return (
    <div style={{
      textAlign: "center",
      padding: "4rem 2rem",
      background: "linear-gradient(to right, #e0c3fc, #8ec5fc)",
      color: "#333",
      animation: "fadeIn 1s ease-out"
    }}>
      <h1>Welcome to KpopVerse 💜</h1>
      <p>The ultimate AI-powered K-pop fan platform.</p>
    </div>
  );
}

export default WelcomeBanner;
